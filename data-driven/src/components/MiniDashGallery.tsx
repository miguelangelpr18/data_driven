'use client';

import { motion } from 'framer-motion';

import BackgroundLines from '@/components/BackgroundLines';

const card =
  'group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_26px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.35)]';

const svgBase = 'h-40 w-full';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut', delay }
});

export default function MiniDashGallery() {
  const bars = [22, 36, 28, 44, 32, 48];
  const hbars = [70, 48, 86, 38];
  const spark = [4, 12, 9, 20, 16, 28, 22, 34];

  return (
    <section
      id="demo-visual"
      data-theme="dark"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32"
      aria-labelledby="mini-dashboards-heading"
    >
      <BackgroundLines tone="dark" opacity={0.18} density={140} />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="mini-dashboards-heading"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[3.25rem]"
          >
            Un vistazo a tus métricas
          </h2>
          <p className="mt-4 text-neutral-300">
            Micro-dashboards interactivos para demostrar el estilo: barras, anillos, líneas y comparativas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <motion.div
            {...fadeIn(0.05)}
            className={card}
            aria-label="Ejemplo de barras verticales"
            role="article"
          >
            <svg viewBox="0 0 200 120" className={svgBase} aria-hidden="true">
              <line x1="10" y1="110" x2="190" y2="110" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
              {bars.map((value, index) => {
                const x = 25 + index * 28;
                const height = (value / 50) * 80;
                return (
                  <motion.rect
                    key={index}
                    x={x}
                    y={110 - height}
                    width="16"
                    height={height}
                    rx="3"
                    fill="white"
                    initial={{ height: 0, y: 110 }}
                    whileInView={{ height, y: 110 - height }}
                    whileHover={{ y: 110 - height - 4 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.06 }}
                    style={{ originY: 1 }}
                    className="opacity-90 group-hover:opacity-100"
                  />
                );
              })}
            </svg>
            <p className="mt-3 text-sm text-neutral-300">Barras verticales con elevación al hover.</p>
          </motion.div>

          <motion.div
            {...fadeIn(0.1)}
            className={card}
            aria-label="Ejemplo de anillo KPI"
            role="article"
          >
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-44 w-44" aria-hidden="true">
                <circle cx="60" cy="60" r="44" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="12" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 44}
                  initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                  whileInView={{ strokeDashoffset: (2 * Math.PI * 44) * (1 - 0.72) }}
                  whileHover={{ rotate: 6 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="origin-center"
                />
                <text x="60" y="65" textAnchor="middle" className="fill-white text-[18px] font-semibold">
                  72%
                </text>
              </svg>
            </div>
            <p className="mt-3 text-sm text-neutral-300">Anillo KPI con “reveal” y rotación leve al hover.</p>
          </motion.div>

          <motion.div
            {...fadeIn(0.15)}
            className={card}
            aria-label="Ejemplo de línea de tendencia"
            role="article"
          >
            <svg viewBox="0 0 220 120" className={svgBase} aria-hidden="true">
              {[0, 1, 2, 3].map((row) => (
                <line
                  key={row}
                  x1="10"
                  y1={30 + row * 20}
                  x2="210"
                  y2={30 + row * 20}
                  stroke="white"
                  strokeOpacity="0.08"
                />
              ))}
              <motion.polyline
                fill="none"
                stroke="white"
                strokeWidth="3"
                points={spark
                  .map((value, index) => {
                    const x = 14 + index * (190 / (spark.length - 1));
                    const y = 100 - (value / 34) * 70;
                    return `${x},${y}`;
                  })
                  .join(' ')}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              {spark.map((value, index) => {
                const x = 14 + index * (190 / (spark.length - 1));
                const y = 100 - (value / 34) * 70;
                return (
                  <motion.circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="3.5"
                    fill="white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ delay: 0.2 + index * 0.05, type: 'spring', stiffness: 260, damping: 16 }}
                  />
                );
              })}
            </svg>
            <p className="mt-3 text-sm text-neutral-300">Línea de tendencia con trazado progresivo.</p>
          </motion.div>

          <motion.div
            {...fadeIn(0.2)}
            className={card}
            aria-label="Ejemplo de barras horizontales"
            role="article"
          >
            <svg viewBox="0 0 220 120" className={svgBase} aria-hidden="true">
              {hbars.map((value, index) => {
                const y = 20 + index * 24;
                const width = (value / 100) * 180;
                return (
                  <g key={index}>
                    <rect x="24" y={y - 9} width="180" height="18" rx="5" fill="white" opacity="0.1" />
                    <motion.rect
                      x="24"
                      y={y - 9}
                      height="18"
                      rx="5"
                      fill="white"
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      whileHover={{ width: width + 6 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
                    />
                  </g>
                );
              })}
              <line x1="24" y1="100" x2="204" y2="100" stroke="white" strokeOpacity="0.12" />
            </svg>
            <p className="mt-3 text-sm text-neutral-300">Barras horizontales con “fill” progresivo.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
