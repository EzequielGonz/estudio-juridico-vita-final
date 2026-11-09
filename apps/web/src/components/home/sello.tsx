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
  const lienzo = useRef<HTMLCanvasElement>(null);
  const caja = useRef<HTMLDivElement>(null);

  // Medalla 3D: se carga con la primera interacción (mover el mouse, tocar, desplazar o usar el teclado),
  // para no competir con el contenido. Sin WebGL o con «reducir movimiento» queda el sello 2D.
  useEffect(() => {
    const canvas = lienzo.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cancelado = false;
    let destruir: (() => void) | undefined;
    const eventos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'pointermove', 'keydown'] as const;
    const iniciar = async () => {
      eventos.forEach(e => window.removeEventListener(e, iniciar));
      if (cancelado || destruir) return;
      const prueba = document.createElement('canvas');
      if (!prueba.getContext('webgl2') && !prueba.getContext('webgl')) return;
      const [THREE, { RoomEnvironment }, { crearMedalla }] = await Promise.all([
        import('three'),
        import('three/examples/jsm/environments/RoomEnvironment.js'),
        import('@/lib/medalla-3d'),
      ]);
      const figura = new Image();
      figura.src = '/img/justicia.webp';
      await Promise.all([figura.decode(), document.fonts.load('400 120px "Playfair Display"')]);
      if (cancelado) return;
      try {
        destruir = crearMedalla(THREE, RoomEnvironment, canvas, { figura, fuente: '"Playfair Display", Georgia, serif' }).destruir;
        requestAnimationFrame(() => caja.current?.classList.add('is-3d'));
      } catch {
        // si el navegador no puede crear el contexto 3D, queda el sello 2D
      }
    };
    eventos.forEach(e => window.addEventListener(e, iniciar, { passive: true, once: true }));
    return () => {
      cancelado = true;
      eventos.forEach(e => window.removeEventListener(e, iniciar));
      destruir?.();
    };
  }, []);

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
    <div className="sello" aria-hidden="true" ref={caja}>
      <canvas className="sello-3d" ref={lienzo} />
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
