'use client';

import { motion, type MotionProps } from 'framer-motion';

import BackgroundLines from '@/components/BackgroundLines';

const fadeIn = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay }
});

export default function EdgeDashStrips() {
  const bars = [22, 36, 28, 44, 32, 48];
  const hbars = [70, 48, 86, 38];
  const spark = [4, 12, 9, 20, 16, 28, 22, 34];

  return (
    <section id="edge-metrics" className="relative bg-black py-6 text-white sm:py-10 lg:py-12">
      <BackgroundLines tone="dark" opacity={0.18} density={140} />

      <div className="relative mx-auto w-full max-w-[1600px] px-3 pb-6 sm:px-4 sm:pb-8 md:px-6 md:pb-10">
        <div className="grid gap-x-4 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
          <motion.div
            {...fadeIn(0.02)}
            className="group"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <svg viewBox="0 0 220 120" className="h-[140px] w-full sm:h-[160px]" aria-hidden="true">
              <line x1="12" y1="108" x2="208" y2="108" stroke="white" strokeOpacity="0.18" strokeWidth="2" />
              {bars.map((value, index) => {
                const x = 26 + index * 30;
                const height = (value / 50) * 80;
                return (
                  <motion.rect
                    key={index}
                    x={x}
                    y={108 - height}
                    width="18"
                    height={height}
                    rx="4"
                    fill="white"
                    initial={{ height: 0, y: 108 }}
                    animate={{ height, y: 108 - height }}
                    whileHover={{ y: 108 - height - 4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.06 }}
                  />
                );
              })}
            </svg>
          </motion.div>

          <motion.div
            {...fadeIn(0.06)}
            className="group flex items-center justify-center"
            whileHover={{ y: -8, scale: 1.04 }}
          >
            <svg viewBox="0 0 140 140" className="h-[150px] w-[150px]" aria-hidden="true">
              <circle cx="70" cy="70" r="50" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="14" />
              <motion.circle
                cx="70"
                cy="70"
                r="50"
                fill="none"
                stroke="white"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 50}
                initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                whileInView={{ strokeDashoffset: (2 * Math.PI * 50) * (1 - 0.72) }}
                whileHover={{ rotate: 6 }}
                transition={{ duration: 1.05, ease: 'easeOut' as const }}
                className="origin-center"
                viewport={{ once: false, amount: 0.3 }}
              />
              <text x="70" y="77" textAnchor="middle" className="fill-white text-[20px] font-semibold">
                72%
              </text>
            </svg>
          </motion.div>

          <motion.div
            {...fadeIn(0.1)}
            className="group"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <svg viewBox="0 0 240 140" className="h-[140px] w-full sm:h-[160px]" aria-hidden="true">
              {[0, 1, 2, 3].map((row) => (
                <line
                  key={row}
                  x1="12"
                  y1={36 + row * 20}
                  x2="228"
                  y2={36 + row * 20}
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
                    const x = 16 + index * (200 / (spark.length - 1));
                    const y = 110 - (value / 34) * 70;
                    return `${x},${y}`;
                  })
                  .join(' ')}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' as const }}
              />
              {spark.map((value, index) => {
                const x = 16 + index * (200 / (spark.length - 1));
                const y = 110 - (value / 34) * 70;
                return (
                  <motion.circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="3.6"
                    fill="white"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.25 }}
                    transition={{ delay: 0.18 + index * 0.05, type: 'spring', stiffness: 260, damping: 16 }}
                  />
                );
              })}
            </svg>
          </motion.div>

          <motion.div
            {...fadeIn(0.14)}
            className="group"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <svg viewBox="0 0 240 140" className="h-[140px] w-full sm:h-[160px]" aria-hidden="true">
              {hbars.map((value, index) => {
                const y = 28 + index * 26;
                const width = (value / 100) * 190;
                return (
                  <g key={index}>
                    <rect x="30" y={y - 9} width="190" height="18" rx="6" fill="white" opacity="0.1" />
                    <motion.rect
                      x="30"
                      y={y - 9}
                      height="18"
                      rx="6"
                      fill="white"
                      initial={{ width: 0 }}
                      animate={{ width }}
                      whileHover={{ width: width + 8 }}
                      transition={{ duration: 0.7, ease: 'easeOut' as const, delay: index * 0.08 }}
                    />
                  </g>
                );
              })}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
