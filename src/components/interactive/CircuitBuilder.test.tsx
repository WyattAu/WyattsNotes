import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import {
  calculateParallel,
  calculateSeries,
  CircuitBuilder,
  type CircuitComponent,
} from './CircuitBuilder';

function makeResistor(id: string, label: string, value: number): CircuitComponent {
  return { id, type: 'resistor', value, label };
}

describe('calculateSeries', () => {
  it('returns null for empty components', () => {
    expect(calculateSeries([], 12)).toBeNull();
  });

  it('returns null for zero voltage', () => {
    expect(calculateSeries([makeResistor('r1', 'R1', 100)], 0)).toBeNull();
  });

  it('returns null for negative voltage', () => {
    expect(calculateSeries([makeResistor('r1', 'R1', 100)], -5)).toBeNull();
  });

  it('returns null for zero resistance', () => {
    expect(calculateSeries([makeResistor('r1', 'R1', 0)], 12)).toBeNull();
  });

  it('calculates total resistance as sum for two resistors', () => {
    const result = calculateSeries(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result).not.toBeNull();
    expect(result.totalResistance).toBe(300);
  });

  it('calculates total current using Ohm law V/R', () => {
    const result = calculateSeries(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result).not.toBeNull();
    expect(result.totalCurrent).toBeCloseTo(0.04, 6);
  });

  it('calculates voltage drops proportional to resistance', () => {
    const result = calculateSeries(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result).not.toBeNull();
    expect(result.voltageDrops).toHaveLength(2);
    expect(result.voltageDrops[0].drop).toBeCloseTo(4, 3);
    expect(result.voltageDrops[1].drop).toBeCloseTo(8, 3);
  });

  it('sum of voltage drops equals source voltage (KVL)', () => {
    const result = calculateSeries(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    const sumDrops = result.voltageDrops.reduce((s, v) => s + v.drop, 0);

    expect(sumDrops).toBeCloseTo(12, 6);
  });

  it('handles single resistor', () => {
    const result = calculateSeries([makeResistor('r1', 'R1', 50)], 10);

    expect(result).not.toBeNull();
    expect(result.totalResistance).toBe(50);
    expect(result.totalCurrent).toBeCloseTo(0.2, 6);
    expect(result.voltageDrops[0].drop).toBeCloseTo(10, 3);
  });

  it('handles three resistors in series', () => {
    const result = calculateSeries(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200), makeResistor('r3', 'R3', 300)],
      12,
    );

    expect(result.totalResistance).toBe(600);
    expect(result.totalCurrent).toBeCloseTo(0.02, 6);
    expect(result.voltageDrops).toHaveLength(3);
  });

  it('handles fractional voltage', () => {
    const result = calculateSeries([makeResistor('r1', 'R1', 100)], 3.3);

    expect(result.totalCurrent).toBeCloseTo(0.033, 4);
  });
});

describe('calculateParallel', () => {
  it('returns null for single resistor', () => {
    expect(calculateParallel([makeResistor('r1', 'R1', 100)], 12)).toBeNull();
  });

  it('returns null for empty components', () => {
    expect(calculateParallel([], 12)).toBeNull();
  });

  it('returns null for zero voltage', () => {
    expect(
      calculateParallel([makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)], 0),
    ).toBeNull();
  });

  it('returns null for zero resistance', () => {
    expect(
      calculateParallel([makeResistor('r1', 'R1', 0), makeResistor('r2', 'R2', 200)], 12),
    ).toBeNull();
  });

  it('calculates parallel resistance: 1/Rt = 1/R1 + 1/R2', () => {
    const result = calculateParallel(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result).not.toBeNull();
    const expectedR = 1 / (1 / 100 + 1 / 200);

    expect(result.totalResistance).toBeCloseTo(expectedR, 4);
  });

  it('parallel resistance is less than smallest resistor', () => {
    const result = calculateParallel(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result.totalResistance).toBeLessThan(100);
  });

  it('equal resistors give half the resistance', () => {
    const result = calculateParallel(
      [makeResistor('r1', 'R1', 200), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result.totalResistance).toBeCloseTo(100, 4);
  });

  it('calculates total current for parallel circuit', () => {
    const result = calculateParallel(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    expect(result.totalCurrent).toBeCloseTo(12 / result.totalResistance, 6);
  });

  it('voltage across each branch equals source voltage', () => {
    const result = calculateParallel(
      [makeResistor('r1', 'R1', 100), makeResistor('r2', 'R2', 200)],
      12,
    );

    for (const drop of result.voltageDrops) {
      expect(drop.drop).toBe(12);
    }
  });
});

describe('CircuitBuilder component', () => {
  it('renders without crashing', () => {
    const html = renderToString(React.createElement(CircuitBuilder));

    expect(html).toBeTruthy();
    expect(html).toContain('Circuit Simulator');
  });

  it('contains circuit type buttons', () => {
    const html = renderToString(React.createElement(CircuitBuilder));

    expect(html).toContain('Series');
    expect(html).toContain('Parallel');
  });

  it('contains calculate button', () => {
    const html = renderToString(React.createElement(CircuitBuilder));

    expect(html).toContain('Calculate');
  });

  it('contains preset buttons', () => {
    const html = renderToString(React.createElement(CircuitBuilder));

    expect(html).toContain('Series');
  });

  it('contains educational tip text', () => {
    const html = renderToString(React.createElement(CircuitBuilder));

    expect(html).toContain('Ohm');
  });

  it('contains component palette buttons', () => {
    const html = renderToString(React.createElement(CircuitBuilder));

    expect(html).toContain('Resistor');
    expect(html).toContain('Ammeter');
    expect(html).toContain('Voltmeter');
  });
});

describe('CircuitBuilder interactions', () => {
  it('adds a resistor on click', () => {
    render(<CircuitBuilder />);
    expect(screen.queryByText('R1')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('+ Resistor'));
    expect(screen.getByText('R1')).toBeInTheDocument();
  });

  it('adds ammeter on click', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Ammeter'));
    // The ammeter badge "A" should appear in the component list
    const badges = screen.getAllByText('A');

    expect(badges.length).toBeGreaterThanOrEqual(2); // tip text + badge
  });

  it('adds voltmeter on click', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Voltmeter'));
    // The voltmeter badge "V" should appear in the component list
    const badges = screen.getAllByText('V');

    expect(badges.length).toBeGreaterThanOrEqual(2); // tip text + badge
  });

  it('limits resistors to 3', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('+ Resistor'));
    // 4th resistor should not appear
    fireEvent.click(screen.getByText('+ Resistor'));
    expect(screen.queryByText('R4')).not.toBeInTheDocument();
    expect(screen.getByText('R3')).toBeInTheDocument();
  });

  it('limits ammeter to 1', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Ammeter'));
    // Badge "A" in component list is now present
    const beforeA = screen.getAllByText('A').length;

    fireEvent.click(screen.getByText('+ Ammeter'));
    // Adding second ammeter should be no-op — count unchanged
    const afterA = screen.getAllByText('A').length;

    expect(afterA).toBe(beforeA);
  });

  it('removes selected component', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Resistor'));
    expect(screen.getByText('R1')).toBeInTheDocument();
    // Select R1 then click Remove
    fireEvent.click(screen.getByText('R1'));
    fireEvent.click(screen.getByText('Remove'));
    expect(screen.queryByText('R1')).not.toBeInTheDocument();
  });

  it('toggles between series and parallel', () => {
    render(<CircuitBuilder />);
    const parallelBtns = screen.getAllByText('Parallel');

    // Click the circuit-type toggle (not preset)
    fireEvent.click(parallelBtns[0]);
    // Calculate should work with parallel
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.getByText(/R_total/)).toBeInTheDocument();
  });

  it('calculates series circuit', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.getByText(/R_total/)).toBeInTheDocument();
    expect(screen.getByText(/I_total/)).toBeInTheDocument();
  });

  it('shows voltage drops after calculation', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.getAllByText(/ΔV/).length).toBeGreaterThanOrEqual(1);
  });

  it('loads a preset and calculates', () => {
    render(<CircuitBuilder />);
    // Preset button text is name.split(':')[0] = "Series"
    const presetBtns = screen.getAllByText('Series');

    // First "Series" is the circuit type button, second is the preset
    expect(presetBtns.length).toBeGreaterThanOrEqual(2);
    fireEvent.click(presetBtns[presetBtns.length - 1]);
    // Preset loads 2 resistors
    expect(screen.getByText('R1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.getByText(/R_total/)).toBeInTheDocument();
  });

  it('shows no results before calculation', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Resistor'));
    expect(screen.queryByText(/R_total/)).not.toBeInTheDocument();
  });

  it('clears results when switching circuit type', () => {
    render(<CircuitBuilder />);
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('+ Resistor'));
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.getByText(/R_total/)).toBeInTheDocument();
    // Switch type — results should clear
    const parallelBtns = screen.getAllByText('Parallel');

    fireEvent.click(parallelBtns[0]);
    expect(screen.queryByText(/R_total/)).not.toBeInTheDocument();
  });
});
