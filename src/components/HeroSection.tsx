import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

function HeroVisual() {
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [m3, setM3] = useState(0);
  const [bars, setBars] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [notifs, setNotifs] = useState([false, false, false]);
  const [pulse, setPulse] = useState(false);

  const barData = [1820, 2100, 1950, 2400, 2800, 1600, 2900];
  const barMax = 2900;
  const days = ["L", "M", "X", "J", "V", "S", "D"];

  const animCount = (
    setter: (v: number) => void,
    target: number,
    duration: number
  ) => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setter(Math.round(start));
      if (start >= target) clearInterval(timer);
    }, 16);
  };

  useEffect(() => {
    const t1 = setTimeout(() => animCount(setM1, 14203, 1200), 300);
    const t2 = setTimeout(() => animCount(setM2, 2340, 1200), 500);
    const t3 = setTimeout(() => animCount(setM3, 94, 1200), 700);

    const t4 = setTimeout(() => {
      barData.forEach((_, i) => {
        setTimeout(() => {
          setBars((prev) => {
            const next = [...prev];
            next[i] = barData[i];
            return next;
          });
        }, i * 100);
      });
    }, 600);

    const t5 = setTimeout(() => setNotifs([true, false, false]), 1500);
    const t6 = setTimeout(() => setNotifs([true, true, false]), 2400);
    const t7 = setTimeout(() => setNotifs([true, true, true]), 3300);

    const pulseTimer = setInterval(() => setPulse((p) => !p), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearInterval(pulseTimer);
    };
  }, []);

  const metrics = [
    { val: m1.toLocaleString(), label: "Tareas auto.", delta: "+847 hoy" },
    { val: m2 + "h", label: "Horas ahorradas", delta: "+23h semana" },
    { val: m3 + "%", label: "Eficiencia", delta: "+12% vs mes" },
  ];

  const notifItems = [
    { text: "Lead cerrado", sub: "Juan Méndez — Acme S.A." },
    { text: "Mensajes respondidos", sub: "340 · 09:14 AM" },
    { text: "Reporte generado", sub: "Enviado automáticamente" },
  ];

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-gray-100 bg-white overflow-hidden"
        style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.08)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Panel de control
            </p>
            <p
              className="text-sm font-semibold text-primary-dark mt-0.5"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Advantech AI
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
            <span
              className="w-2 h-2 rounded-full bg-emerald-500"
              style={{
                opacity: pulse ? 1 : 0.3,
                transition: "opacity 0.6s ease",
              }}
            />
            En vivo
          </div>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
          {metrics.map((m, i) => (
            <div key={i} className="px-4 py-4 text-center">
              <p
                className="text-xl font-bold text-primary-dark tabular-nums"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {m.val}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{m.label}</p>
              <p className="text-xs font-medium text-emerald-600 mt-1">
                {"\u2191"} {m.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Barras */}
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-xs text-gray-400 mb-3">
            Tareas procesadas — últimos 7 días
          </p>
          <div className="flex items-end gap-1.5" style={{ height: "64px" }}>
            {bars.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full relative" style={{ height: "48px" }}>
                  <div
                    className="absolute bottom-0 w-full rounded-t-sm"
                    style={{
                      height: Math.round((val / barMax) * 48) + "px",
                      background:
                        i === 6 ? "#1D9E75" : "rgba(29,158,117,0.25)",
                      transition:
                        "height 0.6s cubic-bezier(.34,1.56,.64,1)",
                      transitionDelay: i * 80 + "ms",
                    }}
                  />
                </div>
                <span
                  className="text-gray-300"
                  style={{ fontSize: "10px" }}
                >
                  {days[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notificaciones */}
        <div className="px-5 py-4 space-y-3">
          {notifItems.map((n, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
              style={{
                opacity: notifs[i] ? 1 : 0,
                transform: notifs[i]
                  ? "translateY(0)"
                  : "translateY(6px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-emerald-700 font-bold"
                style={{ background: "#E1F5EE", fontSize: "11px" }}
              >
                {"\u2713"}
              </div>
              <div>
                <p className="text-xs font-medium text-primary-dark leading-tight">
                  {n.text}
                </p>
                <p
                  className="text-gray-400 leading-tight"
                  style={{ fontSize: "11px" }}
                >
                  {n.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const UnderlineSvg = () => (
  <svg
    className="absolute -bottom-2 left-0 w-full h-3 text-highlight/30"
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
  >
    <path
      d="M0,8 Q50,0 100,8 T200,8"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default function HeroSection({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="text-center lg:text-left space-y-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Ten presencia {" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">
                  digital
                </span>
              </span>
              {" "}y sistemas que{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">
                  automatizan tu negocio.
                </span>
                <UnderlineSvg />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-dark/60 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up stagger-1">
              Transformamos tu negocio con tecnología, automatización y
              presencia digital para que ganes más, gastes menos y operes
              mejor con soluciones eficientes, flexibles y personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up stagger-2">
              <a
                href="#contacto"
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
              >
                Agenda una reunión
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#soluciones"
                className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              >
                Ver soluciones
              </a>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center animate-scale-in stagger-2">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}