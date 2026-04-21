import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface DesmosExpression {
  latex?: string;
  color?: string;
  hidden?: boolean;
  sliderBounds?: { min: number; max: number; step: number };
  label?: string;
}

interface DesmosGraphProps {
  /** Math expressions to display. Each can be a string (LaTeX) or an object. */
  expressions?: (string | DesmosExpression)[];
  /** Full Desmos calculator URL for a pre-saved graph. Overrides expressions. */
  calculatorUrl?: string;
  title?: string;
  width?: number;
  height?: number;
}

/**
 * Parse a simple expression string into a Desmos API expression object.
 *
 * Supports basic parameter detection: if the expression contains single-letter
 * variables that are not x or y, they become sliders with range [-10, 10].
 */
function parseExpression(input: string): DesmosExpression {
  const expr: DesmosExpression = { latex: input };

  const paramRegex = /\b([a-df-wz])\b/g;
  const params = new Set<string>();
  let match;

  while ((match = paramRegex.exec(input)) !== null) {
    params.add(match[1]);
  }
  params.delete('e');
  params.delete('i');

  if (params.size > 0) {
    expr.sliderBounds = { min: -10, max: 10, step: 0.1 };
  }

  return expr;
}

const DESMOS_COLORS = [
  '#c74440',
  '#2d70b3',
  '#388c46',
  '#6042a6',
  '#000000',
  '#cf0000',
  '#0060bf',
  '#289728',
  '#990099',
  '#ff6600',
  '#00b3b3',
  '#666666',
];

export const DesmosGraph: React.FC<DesmosGraphProps> = ({
  expressions = [],
  calculatorUrl,
  title = 'Desmos Graph',
  width = 800,
  height = 500,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<unknown>(null);
  const aspectPadding = (height / width) * 100;

  // If a calculatorUrl is provided, fall back to iframe embedding.
  if (calculatorUrl) {
    return (
      <div className={styles.embedContainer}>
        <p className={styles.embedTitle}>{title}</p>
        <div className={styles.embedResponsive} style={{ paddingBottom: `${aspectPadding}%` }}>
          <iframe
            className={styles.embedIframe}
            src={calculatorUrl}
            title={title}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    );
  }

  // Programmatic mode: load Desmos API and create calculator with expressions.
  useEffect(() => {
    if (!containerRef.current || expressions.length === 0) {
      return;
    }

    let destroyed = false;

    const script = document.createElement('script');

    script.src =
      'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
    script.async = true;

    script.onload = () => {
      if (destroyed || !containerRef.current) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Desmos = (window as any).Desmos;

      if (!Desmos) {
        return;
      }

      const calculator = Desmos.GraphingCalculator(containerRef.current, {
        keypad: false,
        expressions: false,
        settingsMenu: false,
        zoomButtons: false,
        expressionsTopbar: false,
        pointsOfInterest: true,
        trace: true,
      });

      calculatorRef.current = calculator;

      const parsedExpressions = expressions.map((expr) =>
        typeof expr === 'string' ? parseExpression(expr) : expr,
      );

      parsedExpressions.forEach((expr, index) => {
        const desmosExpr: Record<string, unknown> = {
          latex: expr.latex,
          color: expr.color || DESMOS_COLORS[index % DESMOS_COLORS.length],
          hidden: expr.hidden || false,
        };

        if (expr.sliderBounds) {
          desmosExpr.sliderBounds = expr.sliderBounds;
        }
        if (expr.label) {
          desmosExpr.label = expr.label;
        }

        calculator.setExpression(desmosExpr);
      });

      // Also add detected parameters as explicit sliders.
      const paramRegex = /\b([a-df-wz])\b/g;
      const addedParams = new Set<string>();

      expressions.forEach((expr) => {
        const input = typeof expr === 'string' ? expr : expr.latex || '';
        let paramMatch;

        while ((paramMatch = paramRegex.exec(input)) !== null) {
          const param = paramMatch[1];

          if (!addedParams.has(param) && param !== 'e' && param !== 'i') {
            addedParams.add(param);
            calculator.setExpression({
              latex: param,
              sliderBounds: { min: -10, max: 10, step: 0.1 },
            });
          }
        }
      });
    };

    containerRef.current.appendChild(script);

    return () => {
      destroyed = true;
      if (calculatorRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (calculatorRef.current as any).destroy();
        calculatorRef.current = null;
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [expressions]);

  if (expressions.length === 0 && !calculatorUrl) {
    return null;
  }

  return (
    <div className={styles.embedContainer}>
      <p className={styles.embedTitle}>{title}</p>
      <div
        ref={containerRef}
        className={styles.embedResponsive}
        style={{
          paddingBottom: `${aspectPadding}%`,
          position: 'relative',
        }}
      />
    </div>
  );
};
