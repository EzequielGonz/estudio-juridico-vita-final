import { useEffect, useRef } from 'react';

/*
 * Sello de la portada: el grabado de la Justicia dentro de un guilloché, el trazado
 * de líneas entrelazadas de los billetes, los títulos y los sellos oficiales.
 * Cada banda son curvas r = R + a·sen(kθ + φ) desfasadas entre sí. Se calcula en el
 * navegador para no sumar peso al HTML y se dibuja una sola vez al cargar.
 */
type Banda = { R: number; a: number; k: number; curvas: number; grosor: number; opacidad: number };

const BANDAS: Banda[] = [
  { R: 242, a: 17, k: 30, curvas: 12, grosor: 0.5, opacidad: 0.46 },
  { R: 202, a: 9, k: 64, curvas: 8, grosor: 0.38, opacidad: 0.32 },
];
// [radio, grosor, opacidad]
const CIRCULOS: [number, number, number][] = [
  [270, 0.9, 0.55], [265, 0.4, 0.38], [222, 0.75, 0.5], [218, 0.4, 0.32], [188, 0.55, 0.36],
];

function curva(R: number, a: number, k: number, fase: number, pasos = 720) {
  let d = '';
  for (let i = 0; i <= pasos; i++) {
    const t = (i / pasos) * Math.PI * 2;
    const r = R + a * Math.sin(k * t + fase);
    d += `${i ? 'L' : 'M'}${(r * Math.cos(t)).toFixed(1)} ${(r * Math.sin(t)).toFixed(1)}`;
  }
  return `${d}Z`;
}

export function Sello() {
  const trazos = useRef<SVGGElement>(null);

  useEffect(() => {
    const g = trazos.current;
    if (!g || g.childElementCount) return;
    const ns = 'http://www.w3.org/2000/svg';
    let orden = 0;
    const sumar = (tipo: 'circle' | 'path', atributos: Record<string, string | number>) => {
      const el = document.createElementNS(ns, tipo);
      for (const [clave, valor] of Object.entries(atributos)) el.setAttribute(clave, String(valor));
      el.setAttribute('pathLength', '1');
      el.style.setProperty('--i', String(orden++));
      g.appendChild(el);
    };
    for (const [r, grosor, opacidad] of CIRCULOS) sumar('circle', { r, 'stroke-width': grosor, opacity: opacidad });
    for (const b of BANDAS) {
      for (let j = 0; j < b.curvas; j++) {
        const d = curva(b.R, b.a, b.k, (j * Math.PI * 2) / b.curvas);
        sumar('path', { d, 'stroke-width': b.grosor, opacity: b.opacidad });
      }
    }
  }, []);

  return (
    <div className="sello" aria-hidden="true">
      <svg className="sello-guilloche" viewBox="-280 -280 560 560" focusable="false">
        <g ref={trazos} />
      </svg>
      <div className="sello-figura">
        <img src="/img/justicia.webp" alt="" width="266" height="358" fetchPriority="high" decoding="async" />
        <span className="sello-brillo" />
      </div>
    </div>
  );
}
