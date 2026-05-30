import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface CircuitComponent {
  id: string;
  type: 'resistor' | 'ammeter' | 'voltmeter';
  value: number;
  label: string;
}

export interface CalcResult {
  totalResistance: number;
  totalCurrent: number;
  voltageDrops: { id: string; label: string; drop: number }[];
}

type CircuitType = 'series' | 'parallel';

let _nid = 1;

function uid(): string {
  return `c${_nid++}`;
}

function getResistors(comps: CircuitComponent[]): CircuitComponent[] {
  return comps.filter((c) => c.type === 'resistor');
}

export function calculateSeries(comps: CircuitComponent[], V: number): CalcResult | null {
  const rs = getResistors(comps);

  if (!rs.length || V <= 0) {
    return null;
  }

  const Rt = rs.reduce((s, r) => s + r.value, 0);

  if (Rt <= 0) {
    return null;
  }

  const I = V / Rt;

  return {
    totalResistance: Rt,
    totalCurrent: I,
    voltageDrops: rs.map((r) => ({
      id: r.id,
      label: r.label,
      drop: +(I * r.value).toFixed(4),
    })),
  };
}

export function calculateParallel(comps: CircuitComponent[], V: number): CalcResult | null {
  const rs = getResistors(comps);

  if (rs.length < 2 || V <= 0) {
    return null;
  }

  let inv = 0;

  for (const r of rs) {
    if (r.value <= 0) {
      return null;
    }
    inv += 1 / r.value;
  }

  if (!isFinite(inv) || inv <= 0) {
    return null;
  }

  const Rt = 1 / inv;
  const I = V / Rt;

  return {
    totalResistance: Rt,
    totalCurrent: I,
    voltageDrops: rs.map((r) => ({ id: r.id, label: r.label, drop: V })),
  };
}

const CW = 600;
const CH = 300;

function zigzagPath(x: number, y: number): string {
  const s = 10;
  const a = 10;

  return (
    `M${x},${y} L${x + s},${y} L${x + 2 * s},${y - a} L${x + 3 * s},${y + a} ` +
    `L${x + 4 * s},${y - a} L${x + 5 * s},${y + a} L${x + 6 * s},${y}`
  );
}

function resistorG(
  x: number,
  y: number,
  label: string,
  value: number,
  drop: number | undefined,
  sel: boolean,
  onClick: () => void,
) {
  return (
    <g key={label} style={{ cursor: 'pointer' }} onClick={onClick}>
      {sel && (
        <rect
          x={x - 4}
          y={y - 16}
          width={68}
          height={52}
          rx={4}
          fill="#fef9c3"
          stroke="#eab308"
          strokeWidth="1"
        />
      )}
      <path
        d={zigzagPath(x, y)}
        fill="none"
        stroke="#2563eb"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x={x + 30} y={y - 18} textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e40af">
        {label}={value}&Omega;
      </text>
      {drop !== undefined && (
        <text x={x + 30} y={y + 26} textAnchor="middle" fontSize="11" fill="#dc2626">
          {'\u0394'}V={drop.toFixed(2)}V
        </text>
      )}
    </g>
  );
}

function batteryVertG(x: number, y1: number, y2: number, voltage: number, key?: string) {
  const m = (y1 + y2) / 2;

  return (
    <g key={key}>
      <line x1={x} y1={y1} x2={x} y2={m - 12} stroke="#16a34a" strokeWidth="2" />
      <line x1={x - 10} y1={m - 4} x2={x + 10} y2={m - 4} stroke="#16a34a" strokeWidth="3" />
      <line x1={x - 5} y1={m + 4} x2={x + 5} y2={m + 4} stroke="#16a34a" strokeWidth="3" />
      <line x1={x} y1={m + 12} x2={x} y2={y2} stroke="#16a34a" strokeWidth="2" />
      <text x={x - 16} y={m + 4} textAnchor="end" fontSize="13" fontWeight="600" fill="#16a34a">
        {voltage}V
      </text>
      <text x={x} y={y1 - 6} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">
        +
      </text>
      <text x={x} y={y2 + 14} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">
        &minus;
      </text>
    </g>
  );
}

function batteryHorizG(y: number, voltage: number) {
  const x1 = 220;
  const x2 = 300;
  const mx = (x1 + x2) / 2;

  return (
    <g>
      <line x1={x1} y1={y} x2={mx - 10} y2={y} stroke="#16a34a" strokeWidth="2" />
      <line x1={mx - 3} y1={y - 10} x2={mx - 3} y2={y + 10} stroke="#16a34a" strokeWidth="3" />
      <line x1={mx + 3} y1={y - 5} x2={mx + 3} y2={y + 5} stroke="#16a34a" strokeWidth="3" />
      <line x1={mx + 10} y1={y} x2={x2} y2={y} stroke="#16a34a" strokeWidth="2" />
      <text x={mx} y={y + 22} textAnchor="middle" fontSize="12" fontWeight="600" fill="#16a34a">
        {voltage}V
      </text>
      <text x={x1 - 8} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
        +
      </text>
      <text x={x2 + 8} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">
        &minus;
      </text>
    </g>
  );
}

function wireG(pts: number[][], anim: boolean, key?: string) {
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join(' ');

  return (
    <path
      key={key}
      d={d}
      fill="none"
      stroke={anim ? '#f59e0b' : '#64748b'}
      strokeWidth="2"
      strokeDasharray={anim ? '6 4' : undefined}
    >
      {anim && (
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-10"
          dur="0.8s"
          repeatCount="indefinite"
        />
      )}
    </path>
  );
}

function meterG(x: number, y: number, letter: string, color: string) {
  return (
    <g>
      <circle cx={x} cy={y} r={13} fill="white" stroke={color} strokeWidth="2" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="bold" fill={color}>
        {letter}
      </text>
    </g>
  );
}

function junctionDot(x: number, y: number) {
  return <circle cx={x} cy={y} r={3} fill="#475569" />;
}

function svgFrame(children: React.ReactNode) {
  return (
    <svg
      viewBox={`0 0 ${CW} ${CH}`}
      width="100%"
      style={{
        display: 'block',
        margin: '0 auto',
        maxWidth: CW,
        background: '#f8fafc',
        borderRadius: 8,
        border: '1px solid #e2e8f0',
      }}
    >
      {children}
    </svg>
  );
}

const PRESETS = [
  {
    name: 'Series: R\u2081=100\u03A9, R\u2082=200\u03A9',
    type: 'series' as CircuitType,
    voltage: 12,
    components: [
      { type: 'resistor' as const, value: 100, label: 'R1' },
      { type: 'resistor' as const, value: 200, label: 'R2' },
    ],
  },
  {
    name: 'Parallel: R\u2081=100\u03A9, R\u2082=200\u03A9',
    type: 'parallel' as CircuitType,
    voltage: 12,
    components: [
      { type: 'resistor' as const, value: 100, label: 'R1' },
      { type: 'resistor' as const, value: 200, label: 'R2' },
    ],
  },
];

function SeriesDiagram({
  comps,
  voltage,
  results,
  selectedId,
  onSelect,
}: {
  comps: CircuitComponent[];
  voltage: number;
  results: CalcResult | null;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const rs = getResistors(comps);
  const hasA = comps.some((c) => c.type === 'ammeter');
  const anim = !!results;
  const n = rs.length;
  const TY = 60;
  const BY = 240;
  const LX = 50;
  const RX = 550;
  const rw = 60;
  const usable = RX - LX - rw * n;
  const gap = n > 0 ? usable / (n + 1) : 0;

  const els: React.ReactNode[] = [];
  let cx = LX;

  rs.forEach((r, i) => {
    const rx = LX + gap * (i + 1) + rw * i;

    if (cx < rx) {
      els.push(
        wireG(
          [
            [cx, TY],
            [rx, TY],
          ],
          anim,
          `tw-pre-${i}`,
        ),
      );
    }

    const drop = results?.voltageDrops.find((v) => v.id === r.id)?.drop;

    els.push(resistorG(rx, TY, r.label, r.value, drop, r.id === selectedId, () => onSelect(r.id)));
    cx = rx + rw;
  });

  if (cx < RX) {
    els.push(
      wireG(
        [
          [cx, TY],
          [RX, TY],
        ],
        anim,
        'tw-end',
      ),
    );
  }

  els.push(
    wireG(
      [
        [RX, TY],
        [RX, BY],
      ],
      anim,
      'tw-r',
    ),
  );

  if (hasA) {
    els.push(
      wireG(
        [
          [RX, BY],
          [320, BY],
        ],
        anim,
        'tw-ba1',
      ),
    );
    els.push(
      <g key="ammeter" style={{ cursor: 'pointer' }} onClick={() => onSelect('ammeter')}>
        {meterG(300, BY, 'A', '#9333ea')}
      </g>,
    );
    els.push(
      wireG(
        [
          [280, BY],
          [LX, BY],
        ],
        anim,
        'tw-ba2',
      ),
    );
  } else {
    els.push(
      wireG(
        [
          [RX, BY],
          [LX, BY],
        ],
        anim,
        'tw-b',
      ),
    );
  }

  els.push(batteryVertG(LX, BY, TY, voltage, 'battery'));

  return svgFrame(
    <>
      {els}
      {anim && results && (
        <text
          x={CW / 2}
          y={BY + 30}
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#9333ea"
        >
          I = {results.totalCurrent.toFixed(4)}A
        </text>
      )}
    </>,
  );
}

function ParallelDiagram({
  comps,
  voltage,
  results,
  selectedId,
  onSelect,
}: {
  comps: CircuitComponent[];
  voltage: number;
  results: CalcResult | null;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const rs = getResistors(comps);
  const anim = !!results;
  const TY = 50;
  const MY = 150;
  const BY = 250;
  const LX = 100;
  const RX = 500;

  const r1 = rs[0];
  const r2 = rs[1];

  const r1Drop = results?.voltageDrops.find((v) => v.id === r1?.id)?.drop;
  const r2Drop = results?.voltageDrops.find((v) => v.id === r2?.id)?.drop;

  return svgFrame(
    <>
      {wireG(
        [
          [LX, TY],
          [LX, MY],
          [LX, BY],
        ],
        anim,
      )}
      {wireG(
        [
          [RX, TY],
          [RX, MY],
          [RX, BY],
        ],
        anim,
      )}
      {wireG(
        [
          [LX, TY],
          [230, TY],
        ],
        anim,
      )}
      {r1 &&
        resistorG(230, TY, r1.label, r1.value, r1Drop, r1.id === selectedId, () => onSelect(r1.id))}
      {wireG(
        [
          [290, TY],
          [RX, TY],
        ],
        anim,
      )}
      {wireG(
        [
          [LX, MY],
          [230, MY],
        ],
        anim,
      )}
      {r2 &&
        resistorG(230, MY, r2.label, r2.value, r2Drop, r2.id === selectedId, () => onSelect(r2.id))}
      {wireG(
        [
          [290, MY],
          [RX, MY],
        ],
        anim,
      )}
      {wireG(
        [
          [LX, BY],
          [220, BY],
        ],
        anim,
      )}
      {batteryHorizG(BY, voltage)}
      {wireG(
        [
          [300, BY],
          [RX, BY],
        ],
        anim,
      )}
      {junctionDot(LX, TY)}
      {junctionDot(LX, MY)}
      {junctionDot(LX, BY)}
      {junctionDot(RX, TY)}
      {junctionDot(RX, MY)}
      {junctionDot(RX, BY)}
      {anim && results && (
        <>
          <text
            x={CW / 2}
            y={BY + 30}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="#9333ea"
          >
            I_total = {results.totalCurrent.toFixed(4)}A
          </text>
          {r1 && (
            <text x={350} y={TY + 5} textAnchor="middle" fontSize="11" fill="#dc2626">
              I&#x2081; = {(voltage / r1.value).toFixed(4)}A
            </text>
          )}
          {r2 && (
            <text x={350} y={MY + 5} textAnchor="middle" fontSize="11" fill="#dc2626">
              I&#x2082; = {(voltage / r2.value).toFixed(4)}A
            </text>
          )}
        </>
      )}
    </>,
  );
}

const STY: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: 720,
    margin: '1rem auto',
    padding: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: 8,
    background: 'white',
  },
  title: {
    fontSize: 13,
    fontWeight: 700,
    color: '#1e40af',
    margin: '0 0 0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontFamily: 'monospace',
  },
  toolbar: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    marginBottom: 10,
    alignItems: 'center',
  },
  btn: {
    padding: '5px 10px',
    border: '1px solid #cbd5e1',
    borderRadius: 6,
    background: '#f1f5f9',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 500,
  },
  btnActive: {
    padding: '5px 10px',
    border: '1px solid #2563eb',
    borderRadius: 6,
    background: '#dbeafe',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 600,
    color: '#1e40af',
  },
  btnCalc: {
    padding: '6px 16px',
    border: 'none',
    borderRadius: 6,
    background: '#2563eb',
    color: 'white',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
  },
  btnDel: {
    padding: '4px 8px',
    border: '1px solid #fecaca',
    borderRadius: 6,
    background: '#fef2f2',
    color: '#dc2626',
    cursor: 'pointer',
    fontSize: 11,
  },
  input: {
    width: 72,
    padding: '4px 8px',
    border: '1px solid #cbd5e1',
    borderRadius: 4,
    fontSize: 12,
  },
  results: {
    background: '#f0fdf4',
    border: '1px solid #86efac',
    borderRadius: 6,
    padding: '10px 14px',
    marginTop: 10,
  },
  label: { fontSize: 12, fontWeight: 600, color: '#334155' },
  row: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 },
  tip: {
    fontSize: 11,
    color: '#64748b',
    fontStyle: 'italic',
    marginTop: 8,
    padding: '8px',
    background: '#fffbeb',
    border: '1px solid #fde68a',
    borderRadius: 4,
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '4px 8px',
    border: '1px solid #e2e8f0',
    borderRadius: 4,
    fontSize: 12,
    background: '#f8fafc',
    cursor: 'pointer',
  },
  badgeSel: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '4px 8px',
    border: '2px solid #2563eb',
    borderRadius: 4,
    fontSize: 12,
    background: '#eff6ff',
    cursor: 'pointer',
  },
};

export const CircuitBuilder: React.FC = () => {
  const [circuitType, setCircuitType] = useState<CircuitType>('series');
  const [voltage, setVoltage] = useState(12);
  const [comps, setComps] = useState<CircuitComponent[]>([]);
  const [results, setResults] = useState<CalcResult | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, []);

  const addComponent = useCallback(
    (type: CircuitComponent['type']) => {
      const rs = getResistors(comps);

      if (type === 'resistor' && rs.length >= 3) {
        return;
      }
      if (type === 'ammeter' && comps.some((c) => c.type === 'ammeter')) {
        return;
      }
      if (type === 'voltmeter' && comps.some((c) => c.type === 'voltmeter')) {
        return;
      }

      const label = type === 'resistor' ? `R${rs.length + 1}` : type === 'ammeter' ? 'A' : 'V';
      const defVal = type === 'resistor' ? 100 : 0;

      setComps((prev) => [...prev, { id: uid(), type, value: defVal, label }]);
      setResults(null);
    },
    [comps],
  );

  const removeSelected = useCallback(() => {
    if (!selectedId) {
      return;
    }

    setComps((prev) => prev.filter((c) => c.id !== selectedId));
    setSelectedId(null);
    setResults(null);
  }, [selectedId]);

  const updateValue = useCallback((id: string, val: number) => {
    setComps((prev) => prev.map((c) => (c.id === id ? { ...c, value: val } : c)));
    setResults(null);
  }, []);

  const calculate = useCallback(() => {
    const fn = circuitType === 'series' ? calculateSeries : calculateParallel;
    const result = fn(comps, voltage);

    setResults(result);
  }, [comps, circuitType, voltage]);

  const loadPreset = useCallback((idx: number) => {
    const p = PRESETS[idx];

    setCircuitType(p.type);
    setVoltage(p.voltage);
    setComps(p.components.map((c) => ({ ...c, id: uid() })));
    setResults(null);
    setSelectedId(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const type = e.dataTransfer.getData('component') as CircuitComponent['type'] | '';

      if (type) {
        addComponent(type);
      }
    },
    [addComponent],
  );

  const selected = comps.find((c) => c.id === selectedId);

  return (
    <div style={STY.container}>
      <p style={STY.title}>Circuit Simulator</p>

      <div style={STY.toolbar}>
        <span style={STY.label}>Type:</span>
        <button
          style={circuitType === 'series' ? STY.btnActive : STY.btn}
          onClick={() => {
            setCircuitType('series');
            setResults(null);
          }}
        >
          Series
        </button>
        <button
          style={circuitType === 'parallel' ? STY.btnActive : STY.btn}
          onClick={() => {
            setCircuitType('parallel');
            setResults(null);
          }}
        >
          Parallel
        </button>
        <span style={{ ...STY.label, marginLeft: 8 }}>V:</span>
        <input
          style={STY.input}
          type="number"
          min={0.1}
          step={0.1}
          value={voltage}
          onChange={(e) => {
            setVoltage(Number(e.target.value));
            setResults(null);
          }}
        />
        <span style={STY.label}>V</span>
      </div>

      <div style={STY.toolbar}>
        <span style={STY.label}>Add:</span>
        {(['resistor', 'ammeter', 'voltmeter'] as const).map((t) => (
          <button
            key={t}
            style={STY.btn}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('component', t)}
            onClick={() => addComponent(t)}
          >
            + {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
        {selected && (
          <button style={STY.btnDel} onClick={removeSelected}>
            Remove
          </button>
        )}
      </div>

      <div style={STY.toolbar}>
        <span style={STY.label}>Presets:</span>
        {PRESETS.map((p, i) => (
          <button key={i} style={STY.btn} onClick={() => loadPreset(i)}>
            {p.name.split(':')[0]}
          </button>
        ))}
      </div>

      <div ref={svgRef} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        {circuitType === 'series' ? (
          <SeriesDiagram
            comps={comps}
            voltage={voltage}
            results={results}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ) : (
          <ParallelDiagram
            comps={comps}
            voltage={voltage}
            results={results}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        )}
      </div>

      {comps.length > 0 && (
        <div style={{ ...STY.row, marginTop: 8 }}>
          <span style={STY.label}>Components:</span>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {comps.map((c) => (
              <div
                key={c.id}
                style={c.id === selectedId ? STY.badgeSel : STY.badge}
                onClick={() => setSelectedId(c.id)}
              >
                <span>{c.label}</span>
                {c.type === 'resistor' && (
                  <>
                    <input
                      style={{ ...STY.input, width: 56 }}
                      type="number"
                      min={0.1}
                      value={c.value}
                      onChange={(e) => updateValue(c.id, Number(e.target.value))}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <span>&Omega;</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={STY.row}>
        <button style={STY.btnCalc} onClick={calculate}>
          Calculate
        </button>
        {results && (
          <span style={{ fontSize: 12, color: '#16a34a', fontWeight: 600 }}>
            R_total = {results.totalResistance.toFixed(2)}&Omega; | I_total ={' '}
            {results.totalCurrent.toFixed(4)}A
          </span>
        )}
      </div>

      {results && (
        <div style={STY.results}>
          <div style={STY.label}>Results (Ohm&apos;s Law: V = I &times; R)</div>
          <div style={{ fontSize: 12, marginTop: 4 }}>
            {results.voltageDrops.map((v) => (
              <div key={v.id}>
                {v.label}: {'\u0394'}V = {v.drop.toFixed(2)}V
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        style={STY.tip}
        title="Ohm's Law: V=IR. Series: R_t = R1+R2. Parallel: 1/R_t = 1/R1 + 1/R2. Kirchhoff: sum of voltages around any loop equals zero."
      >
        Ohm&apos;s Law: V = I &times; R | Series: R_t = R&#x2081; + R&#x2082; | Parallel: 1/R_t =
        1/R&#x2081; + 1/R&#x2082; | Kirchhoff: &#x2211;V = 0 around any loop
      </div>
    </div>
  );
};
