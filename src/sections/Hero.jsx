import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

const GRID_GAP = 28;
const DOT_BASE_RADIUS = 1;
const DOT_MAX_RADIUS = 3.5;
const GLOW_RADIUS = 140;
const DOT_COLOR_BASE = "rgba(240,242,245,0.12)";

function useGridCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animFrame;
    let mouse = { x: -9999, y: -9999 };
    let dots = [];

    const buildDots = () => {
      dots = [];
      const cols = Math.ceil(canvas.width / GRID_GAP) + 1;
      const rows = Math.ceil(canvas.height / GRID_GAP) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * GRID_GAP, y: r * GRID_GAP });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildDots();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / GLOW_RADIUS);

        const radius =
          DOT_BASE_RADIUS + proximity * (DOT_MAX_RADIUS - DOT_BASE_RADIUS);

        // Colour: interpolate from dim white toward primary pink (#de9bbf)
        const r = Math.round(240 + (222 - 240) * proximity);
        const g = Math.round(242 + (155 - 242) * proximity);
        const b = Math.round(245 + (191 - 245) * proximity);
        const alpha = 0.12 + proximity * 0.75;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      animFrame = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrame);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [canvasRef]);
}

export const Hero = () => {
  const canvasRef = useRef(null);
  useGridCanvas(canvasRef);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-10"
    >
      {/* Hero image — kept, sits below the grid */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Interactive dot grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Radial vignette — keeps center readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, var(--color-background) 100%)",
        }}
      />

      {/* Main Content */}
      <div className="container max-w-3xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Status Indicator */}
          <div className="flex items-center justify-center">
            <div className="dot animate-pulse"></div>
            <span className="ml-2 font-mono text-xs tracking-widest text-highlight">
              open to work
            </span>
          </div>

          {/* Intro */}
          <h1>
            <span className="text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Chai</span>.
            </span>
          </h1>

          <p>
            I'm a Software Engineer with 1.5+ years of experience. In the day, I
            refine systems, keep production stable, and resolve what breaks. At
            night,{" "}
            <span className="text-primary">I build whatever excites me</span>.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in">
            <a href="#projects" className="primary-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        style={{ zIndex: 10 }}
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
