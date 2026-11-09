import { useEffect } from 'react';

/*
 * Animaciones ligadas al desplazamiento (GSAP con ScrollTrigger, SplitText y DrawSVG).
 * Se cargan con la primera interacción (desplazar, tocar o usar el teclado) y solo si
 * la persona no pidió reducir el movimiento. Sin JavaScript, o antes de que carguen, todo se ve completo:
 * lo que ya está en pantalla al iniciar no se toca, para que nada parpadee.
 */
export function Movimiento() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cancelado = false;
    let deshacer: (() => void) | undefined;

    const iniciar = async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { DrawSVGPlugin }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/SplitText'),
        import('gsap/DrawSVGPlugin'),
      ]);
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

      const pendiente = (el: Element | null): el is Element =>
        !!el && el.getBoundingClientRect().top > window.innerHeight * 0.9;
      const mm = gsap.matchMedia();

      const ctx = gsap.context(() => {
        // Títulos: cada línea sube desde su propia máscara.
        gsap.utils.toArray<HTMLElement>('.revela').forEach(titulo => {
          if (!pendiente(titulo)) return;
          SplitText.create(titulo, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: self => gsap.from(self.lines, {
              yPercent: 110,
              duration: 1,
              ease: 'expo.out',
              stagger: 0.09,
              scrollTrigger: { trigger: titulo, start: 'top 86%', once: true },
            }),
          });
        });

        // Portada: el sello se queda un poco atrás al bajar.
        gsap.to('.sello', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: '.portada', start: 'top top', end: 'bottom top', scrub: true },
        });

        // Croquis: se dibujan las calles, avanzan los autos y aparece el impacto.
        const croquis = document.querySelector('.croquis');
        if (pendiente(croquis)) {
          gsap.timeline({
            scrollTrigger: { trigger: croquis, start: 'top 72%', once: true },
            defaults: { ease: 'power2.out' },
          })
            .from('.cq-grilla, .cq-calzada', { opacity: 0, duration: 0.7 })
            .from('.cq-cordon', { drawSVG: 0, duration: 1.1, stagger: 0.1, ease: 'power2.inOut' }, '<0.1')
            .from('.cq-ejes, .cq-sendas', { opacity: 0, duration: 0.5 }, '-=0.5')
            .from('.cq-trayecto', { drawSVG: 0, duration: 0.8, stagger: 0.12 }, '-=0.2')
            .from('.cq-a', { x: -210, duration: 1.2, ease: 'power2.in' }, '-=0.35')
            .from('.cq-b', { x: -175, duration: 1.2, ease: 'power2.in' }, '<')
            .from('.cq-impacto', { scale: 0, transformOrigin: '50% 50%', duration: 0.5, ease: 'back.out(3)' })
            .to('.cq-a', { rotation: 7, transformOrigin: '50% 50%', duration: 0.6, ease: 'power3.out' }, '<')
            .to('.cq-b', { rotation: -5, transformOrigin: '50% 50%', duration: 0.6, ease: 'power3.out' }, '<')
            .from('.cq-rotulo', { opacity: 0, scale: 0.4, transformOrigin: '50% 50%', stagger: 0.12, duration: 0.45, ease: 'back.out(2)' }, '-=0.3')
            .from('.cq-norte', { opacity: 0, y: -8, duration: 0.4 }, '<');
        }

        // Reclamo a la ART: la línea avanza con el desplazamiento y enciende cada paso.
        const ruta = document.querySelector('.ruta');
        if (ruta) {
          const pasos = gsap.utils.toArray<HTMLElement>('.ruta-paso');
          const marcar = (avance: number) => pasos.forEach((paso, i) => {
            paso.classList.toggle('is-activo', avance >= (i / Math.max(pasos.length - 1, 1)) * 0.97);
          });
          ruta.classList.add('is-animada');
          mm.add({ ancho: '(min-width: 900px)', angosto: '(max-width: 899px)' }, contexto => {
            const { ancho } = contexto.conditions as { ancho: boolean };
            gsap.fromTo('.ruta-avance', ancho ? { scaleX: 0 } : { scaleY: 0 }, {
              scaleX: 1,
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: ruta,
                start: 'top 78%',
                end: ancho ? 'bottom 62%' : 'bottom 70%',
                scrub: 0.5,
                onUpdate: self => marcar(self.progress),
                onRefresh: self => marcar(self.progress),
              },
            });
          });
        }

        // Convenio: la firma se escribe sola y la hoja acompaña el desplazamiento.
        const trazo = document.querySelector('.firma-trazo');
        if (pendiente(trazo)) {
          gsap.from(trazo, {
            drawSVG: 0,
            duration: 2.2,
            ease: 'power1.inOut',
            scrollTrigger: { trigger: '.documento', start: 'top 62%', once: true },
          });
        }
        gsap.fromTo('.documento-hoja', { rotation: -4, yPercent: 6 }, {
          rotation: -1,
          yPercent: -4,
          ease: 'none',
          scrollTrigger: { trigger: '.firma', start: 'top bottom', end: 'bottom top', scrub: true },
        });

        // Consulta: la línea de los tres pasos se completa al bajar.
        mm.add({ ancho: '(min-width: 760px)', angosto: '(max-width: 759px)' }, contexto => {
          const { ancho } = contexto.conditions as { ancho: boolean };
          gsap.fromTo('.pasos-avance', ancho ? { scaleX: 0 } : { scaleY: 0 }, {
            scaleX: 1,
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.pasos', start: 'top 80%', end: 'bottom 70%', scrub: 0.5 },
          });
        });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      deshacer = () => { mm.revert(); ctx.revert(); };
    };

    // Se carga con la primera interacción: las animaciones dependen del desplazamiento,
    // así que no hace falta sumar trabajo mientras la página termina de cargar.
    const eventos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
    const alInteractuar = () => {
      eventos.forEach(evento => window.removeEventListener(evento, alInteractuar));
      void iniciar();
    };
    eventos.forEach(evento => window.addEventListener(evento, alInteractuar, { passive: true }));

    return () => {
      cancelado = true;
      eventos.forEach(evento => window.removeEventListener(evento, alInteractuar));
      deshacer?.();
    };
  }, []);

  return null;
}
