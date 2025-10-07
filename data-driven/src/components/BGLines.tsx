type Props = {
  tone?: "light" | "dark";
  opacity?: number;   // 0 a 1
  className?: string; // posicionamiento externo
};

export default function BGLines({ tone = "light", opacity = 0.06, className = "" }: Props) {
  // color de trazo según fondo
  const stroke = tone === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.35)";

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Más económico que muchas líneas sueltas: grupos de paths largos */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M${-200 + i * 90} -160 L ${420 + i * 120} 520 L ${1280 + i * 90} -120`}
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <rect
          key={`r-${i}`}
          x={200 + i * 140}
          y={120 + i * 90}
          width={520 - i * 60}
          height={420 - i * 60}
          rx="4"
          transform={`rotate(${12 + i * 8} 600 400)`}
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
      ))}

      {/* degradado sutil para que se pierdan en bordes */}
      <defs>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="20%" stopOpacity="1" />
          <stop offset="80%" stopOpacity="1" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
        <mask id="edge-mask">
          <rect width="1440" height="900" fill="url(#fade)" />
        </mask>
      </defs>
      <g mask="url(#edge-mask)"></g>
    </svg>
  );
}
