/*
 * Medalla de oro en 3D (Three.js): el grabado de la Justicia y el guilloché del sello en
 * relieve, con canto estriado y «VITA Abogados» en el dorso. El relieve sale de texturas
 * dibujadas en el momento (bump y rugosidad), sin modelos ni archivos extra.
 * Se arrastra con el dedo o el mouse, sigue apenas al puntero y se da vuelta al bajar.
 */
type Three = typeof import('three');
type Entorno = typeof import('three/examples/jsm/environments/RoomEnvironment.js').RoomEnvironment;
type Opciones = { figura: HTMLImageElement; fuente: string };

export function crearMedalla(THREE: Three, RoomEnvironment: Entorno, canvas: HTMLCanvasElement, op: Opciones) {
  const T = 1024, C = T / 2;
  const nuevoLienzo = (w: number = T, h: number = T) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

  // Curvas del guilloché, en la escala de la textura (el sello de la web mide 280 de radio).
  const esc = (C * 0.985) / 280;
  const banda = (g: CanvasRenderingContext2D, R: number, a: number, k: number, n: number, ancho: number) => {
    for (let j = 0; j < n; j++) {
      const f = (j * Math.PI * 2) / n;
      g.beginPath();
      for (let i = 0; i <= 900; i++) {
        const t = (i / 900) * Math.PI * 2, r = (R + a * Math.sin(k * t + f)) * esc;
        const x = C + r * Math.cos(t), y = C + r * Math.sin(t);
        if (i) g.lineTo(x, y); else g.moveTo(x, y);
      }
      g.lineWidth = ancho; g.stroke();
    }
  };
  const aro = (g: CanvasRenderingContext2D, r: number, ancho: number) => { g.beginPath(); g.arc(C, C, r * esc, 0, Math.PI * 2); g.lineWidth = ancho; g.stroke(); };

  // Relieve del frente (blanco = alto). Lo mismo, con otros grises, define dónde brilla más.
  const figura = op.figura;
  const silueta = nuevoLienzo(figura.width, figura.height);
  { const g = silueta.getContext('2d')!; g.drawImage(figura, 0, 0); g.globalCompositeOperation = 'source-in'; g.fillStyle = '#fff'; g.fillRect(0, 0, silueta.width, silueta.height); }

  const cara = (fondo: string, linea: string, relieve: string, conFigura: boolean, texto: boolean) => {
    const c = nuevoLienzo(); const g = c.getContext('2d')!;
    g.fillStyle = fondo; g.fillRect(0, 0, T, T);
    g.strokeStyle = linea; g.fillStyle = relieve;
    // borde levantado
    g.beginPath(); g.arc(C, C, C, 0, Math.PI * 2); g.arc(C, C, 266 * esc, 0, Math.PI * 2, true); g.fill('evenodd');
    aro(g, 258, 2.2); aro(g, 222, 3); aro(g, 216, 1.4); aro(g, 186, 2);
    banda(g, 240, 15, 30, 12, 1.5);
    banda(g, 201, 8, 64, 8, 1.1);
    if (conFigura) {
      const w = T * 0.44, h = w * (figura.height / figura.width);
      g.drawImage(silueta, C - w / 2, C - h * 0.51, w, h);
    }
    if (texto) {
      // el dorso se ve después de girar media vuelta: el texto se dibuja girado 180°
      g.save(); g.translate(T, T); g.scale(-1, -1);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.font = `400 ${T * 0.2}px ${op.fuente}`; g.fillText('VITA', C, C + T * 0.04);
      g.font = `400 ${T * 0.062}px ${op.fuente}`; g.fillText('Abogados', C, C + T * 0.135);
      g.fillRect(C - T * 0.12, C + T * 0.075, T * 0.24, 3);
      g.restore();
    }
    return c;
  };
  const tex = (c: HTMLCanvasElement, giro = 0) => { const t = new THREE.CanvasTexture(c); t.anisotropy = 4; t.center.set(0.5, 0.5); t.rotation = giro; return t; };
  // las tapas del cilindro quedan giradas un cuarto de vuelta: se corrige en la textura
  const altoFrente = tex(cara('#000', '#fff', '#fff', true, false), Math.PI / 2);
  const brilloFrente = tex(cara('#9a9a9a', '#3a3a3a', '#333', true, false), Math.PI / 2);
  const altoDorso = tex(cara('#000', '#fff', '#fff', false, true), -Math.PI / 2);
  const brilloDorso = tex(cara('#9a9a9a', '#3a3a3a', '#333', false, true), -Math.PI / 2);
  // canto estriado
  const canto = nuevoLienzo(64, 8); { const g = canto.getContext('2d')!; for (let x = 0; x < 64; x += 8) { g.fillStyle = '#fff'; g.fillRect(x, 0, 4, 8); } }
  const altoCanto = tex(canto); altoCanto.wrapS = THREE.RepeatWrapping; altoCanto.repeat.set(70, 1);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const escena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const entorno = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
  escena.environment = entorno;
  const camara = new THREE.PerspectiveCamera(26, 1, 0.1, 50);
  camara.position.set(0, 0, 7.4);

  const oro = { color: new THREE.Color('#d6a640'), metalness: 1, envMapIntensity: 0.85 };
  const mCanto = new THREE.MeshStandardMaterial({ ...oro, roughness: 0.32, bumpMap: altoCanto, bumpScale: 1.5 });
  const mFrente = new THREE.MeshStandardMaterial({ ...oro, roughnessMap: brilloFrente, roughness: 1, bumpMap: altoFrente, bumpScale: 3.2 });
  const mDorso = new THREE.MeshStandardMaterial({ ...oro, roughnessMap: brilloDorso, roughness: 1, bumpMap: altoDorso, bumpScale: 3.2 });
  const geo = new THREE.CylinderGeometry(1.5, 1.5, 0.17, 192, 1);
  geo.rotateX(Math.PI / 2);
  const medalla = new THREE.Mesh(geo, [mCanto, mFrente, mDorso]);
  escena.add(medalla);
  const luz = new THREE.DirectionalLight(0xfff1d0, 3.2); escena.add(luz);
  const luz2 = new THREE.DirectionalLight(0x9db4ff, 0.6); luz2.position.set(3, -2, 2); escena.add(luz2);

  // Arrastre con el dedo o el mouse (en el celular el desplazamiento vertical sigue funcionando).
  let arrastre = 0, inercia = 0, ultX: number | null = null;
  const puntero = { x: 0, y: 0 };
  const abajo = (e: PointerEvent) => { ultX = e.clientX; };
  const mover = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    puntero.x = (e.clientX - r.left) / r.width - 0.5; puntero.y = (e.clientY - r.top) / r.height - 0.5;
    if (ultX !== null) { const d = (e.clientX - ultX) / r.width * 4; arrastre += d; inercia = d; ultX = e.clientX; }
  };
  const arriba = () => { ultX = null; };
  canvas.addEventListener('pointerdown', abajo); window.addEventListener('pointermove', mover, { passive: true });
  window.addEventListener('pointerup', arriba); window.addEventListener('pointercancel', arriba);

  const ajustar = () => { const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix(); };
  ajustar(); const ro = new ResizeObserver(ajustar); ro.observe(canvas);
  let visible = true; const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(canvas);

  const reloj = new THREE.Clock(); let cuadro = 0, giro = 0;
  const dibujar = () => {
    const t = reloj.getElapsedTime();
    if (ultX === null) { arrastre += inercia; inercia *= 0.94; }
    // al bajar, la medalla se da vuelta y muestra el dorso
    const avance = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.75)));
    const objetivo = Math.sin(t * 0.35) * 0.42 + arrastre + avance * Math.PI + puntero.x * 0.35;
    giro += (objetivo - giro) * 0.08;
    medalla.rotation.y = giro;
    medalla.rotation.x = Math.sin(t * 0.27) * 0.1 + puntero.y * 0.25;
    medalla.position.y = Math.sin(t * 0.8) * 0.05;
    luz.position.set(Math.cos(t * 0.5) * 4, 2.5 + Math.sin(t * 0.3), 3.5);
    renderer.render(escena, camara);
  };
  const animar = () => { cuadro = requestAnimationFrame(animar); if (visible && !document.hidden) dibujar(); };
  animar();
  return {
    dibujar,
    destruir() {
      cancelAnimationFrame(cuadro); ro.disconnect(); io.disconnect();
      canvas.removeEventListener('pointerdown', abajo); window.removeEventListener('pointermove', mover);
      window.removeEventListener('pointerup', arriba); window.removeEventListener('pointercancel', arriba);
      [altoFrente, brilloFrente, altoDorso, brilloDorso, altoCanto, entorno].forEach(x => x.dispose());
      [mCanto, mFrente, mDorso].forEach(x => x.dispose()); geo.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
}
