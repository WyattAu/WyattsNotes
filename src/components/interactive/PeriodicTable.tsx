import React, { useCallback, useState } from 'react';
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  ELEMENTS,
  type Category,
  type ElementData,
} from './elements-data';

const GRID_ROWS = 10;
const GRID_COLS = 18;

const cssVars = Object.entries(CATEGORY_COLORS)
  .map(([cat, color]) => `--cat-${cat}: ${color};`)
  .join('\n    ');

const globalStyles = `
  .pt-root {
    --pt-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    ${cssVars}
  }
`;

function buildGrid(elements: ElementData[]): {
  cells: (ElementData | null)[][];
  totalRows: number;
} {
  const grid: (ElementData | null)[][] = Array.from({ length: GRID_ROWS }, () =>
    Array(GRID_COLS).fill(null),
  );

  for (const el of elements) {
    if (el.row >= 1 && el.row <= GRID_ROWS && el.col >= 1 && el.col <= GRID_COLS) {
      grid[el.row - 1][el.col - 1] = el;
    }
  }

  return { cells: grid, totalRows: GRID_ROWS };
}

interface ElementCellProps {
  element: ElementData;
  onMouseEnter: (el: ElementData) => void;
  onMouseLeave: () => void;
  onClick: (el: ElementData) => void;
}

function ElementCell({ element, onMouseEnter, onMouseLeave, onClick }: ElementCellProps) {
  const color = CATEGORY_COLORS[element.category];

  return (
    <div
      className={`pt-cell pt-cat-${element.category}`}
      style={{
        gridRow: element.row,
        gridColumn: element.col,
        backgroundColor: color,
        color: '#fff',
        borderRadius: '4px',
        padding: '4px 2px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        minHeight: '48px',
        fontSize: '12px',
        fontWeight: 600,
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        userSelect: 'none',
        position: 'relative',
      }}
      onMouseEnter={() => onMouseEnter(element)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(element)}
      data-testid={`element-${element.number}`}
    >
      <span style={{ fontSize: '9px', opacity: 0.8, lineHeight: 1 }}>{element.number}</span>
      <span style={{ fontSize: '15px', lineHeight: 1.2 }}>{element.symbol}</span>
      <span
        style={{
          fontSize: '7px',
          opacity: 0.7,
          lineHeight: 1,
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {element.name}
      </span>
    </div>
  );
}

interface TooltipProps {
  element: ElementData;
  position: { x: number; y: number };
}

function Tooltip({ element, position }: TooltipProps) {
  const color = CATEGORY_COLORS[element.category];
  const label = CATEGORY_LABELS[element.category];

  return (
    <div
      className="pt-tooltip"
      style={{
        position: 'fixed',
        left: position.x + 16,
        top: position.y - 10,
        backgroundColor: '#1e1e2e',
        border: `2px solid ${color}`,
        borderRadius: '8px',
        padding: '12px 16px',
        color: '#fff',
        fontSize: '13px',
        fontFamily: 'var(--pt-font)',
        zIndex: 1000,
        pointerEvents: 'none',
        boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 12px ${color}40`,
        minWidth: '200px',
        lineHeight: 1.5,
      }}
      data-testid="element-tooltip"
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
        <span style={{ fontSize: '22px', fontWeight: 700 }}>{element.symbol}</span>
        <span style={{ fontSize: '16px', fontWeight: 600 }}>{element.name}</span>
      </div>
      <div style={{ opacity: 0.85, fontSize: '12px' }}>
        <div>
          <strong>#</strong> {element.number} &middot; <strong>Mass:</strong> {element.mass} u
        </div>
        <div>
          <strong>Category:</strong> <span style={{ color }}>{label}</span>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', marginTop: '4px' }}>
          <strong>e\u207B config:</strong> {element.electronConfig}
        </div>
      </div>
    </div>
  );
}

interface LegendProps {
  activeCategory: Category | null;
  onCategoryHover: (cat: Category | null) => void;
}

function Legend({ activeCategory, onCategoryHover }: LegendProps) {
  const categories: Category[] = [
    'alkali-metal',
    'alkaline-earth',
    'transition-metal',
    'post-transition-metal',
    'metalloid',
    'nonmetal',
    'halogen',
    'noble-gas',
    'lanthanide',
    'actinide',
    'unknown',
  ];

  return (
    <div
      className="pt-legend"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '12px',
        justifyContent: 'center',
      }}
      data-testid="categories-legend"
    >
      {categories.map((cat) => (
        <div
          key={cat}
          className={`pt-legend-item ${activeCategory === cat ? 'active' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            fontFamily: 'var(--pt-font)',
            color: '#ccc',
            cursor: 'pointer',
            padding: '2px 6px',
            borderRadius: '4px',
            transition: 'background-color 0.15s ease',
            backgroundColor: activeCategory === cat ? '#ffffff20' : 'transparent',
          }}
          onMouseEnter={() => onCategoryHover(cat)}
          onMouseLeave={() => onCategoryHover(null)}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              backgroundColor: CATEGORY_COLORS[cat],
            }}
          />
          {CATEGORY_LABELS[cat]}
        </div>
      ))}
    </div>
  );
}

interface DetailPanelProps {
  element: ElementData | null;
  onClose: () => void;
}

function DetailPanel({ element, onClose }: DetailPanelProps) {
  if (!element) {
    return null;
  }

  const color = CATEGORY_COLORS[element.category];
  const label = CATEGORY_LABELS[element.category];

  return (
    <div
      className="pt-detail-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
      onClick={onClose}
      data-testid="detail-panel"
    >
      <div
        className="pt-detail-card"
        style={{
          backgroundColor: '#1e1e2e',
          border: `3px solid ${color}`,
          borderRadius: '16px',
          padding: '32px',
          color: '#fff',
          fontFamily: 'var(--pt-font)',
          maxWidth: '360px',
          width: '90%',
          boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 20px ${color}30`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#888',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          &times;
        </button>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '48px', fontWeight: 800 }}>{element.symbol}</span>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>{element.name}</div>
            <div style={{ fontSize: '13px', opacity: 0.7 }}>#{element.number}</div>
          </div>
        </div>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px' }}
        >
          <div>
            <div
              style={{
                opacity: 0.6,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Atomic Mass
            </div>
            <div>{element.mass} u</div>
          </div>
          <div>
            <div
              style={{
                opacity: 0.6,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Category
            </div>
            <div style={{ color }}>{label}</div>
          </div>
        </div>
        <div style={{ marginTop: '16px' }}>
          <div
            style={{
              opacity: 0.6,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Electron Configuration
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '14px', marginTop: '4px' }}>
            {element.electronConfig}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PeriodicTable() {
  const { cells } = buildGrid(ELEMENTS);
  const [hoveredElement, setHoveredElement] = useState<ElementData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleMouseEnter = useCallback((el: ElementData) => {
    setHoveredElement(el);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredElement(null);
  }, []);

  const handleClick = useCallback((el: ElementData) => {
    setSelectedElement(el);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedElement(null);
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        ${globalStyles}
        .pt-root { font-family: var(--pt-font); }
        .pt-cell:hover { transform: scale(1.15); z-index: 10; box-shadow: 0 4px 16px rgba(0,0,0,0.4) !important; }
        .pt-cell.pt-dimmed { opacity: 0.25; }
      `,
        }}
      />
      <div
        className="pt-root"
        style={{
          fontFamily: 'var(--pt-font)',
          padding: '16px',
          overflowX: 'auto',
          maxWidth: '100%',
        }}
        onMouseMove={handleMouseMove}
      >
        <Legend activeCategory={activeCategory} onCategoryHover={setActiveCategory} />
        <div
          className="pt-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_ROWS}, minmax(48px, auto))`,
            gap: '3px',
            minWidth: '720px',
          }}
        >
          {cells.map((row, rowIdx) =>
            row.map((el, colIdx) => {
              if (!el) {
                return (
                  <div
                    key={`empty-${rowIdx}-${colIdx}`}
                    className="pt-placeholder"
                    style={{
                      gridRow: rowIdx + 1,
                      gridColumn: colIdx + 1,
                      minHeight: '48px',
                    }}
                  />
                );
              }
              const isDimmed = activeCategory !== null && el.category !== activeCategory;

              return (
                <div
                  key={el.number}
                  className={isDimmed ? 'pt-dimmed' : undefined}
                  style={{
                    display: 'contents',
                  }}
                >
                  <ElementCell
                    element={el}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  />
                </div>
              );
            }),
          )}
        </div>
        <div
          className="pt-lanthanide-label"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '4px',
            fontSize: '11px',
            color: '#aaa',
          }}
        >
          <span style={{ color: CATEGORY_COLORS.lanthanide, fontWeight: 600 }}>*</span>
          Lanthanides (Row 9) &nbsp;
          <span style={{ color: CATEGORY_COLORS.actinide, fontWeight: 600 }}>**</span>
          Actinides (Row 10)
        </div>
      </div>
      {hoveredElement && <Tooltip element={hoveredElement} position={mousePos} />}
      <DetailPanel element={selectedElement} onClose={handleCloseDetail} />
    </>
  );
}
