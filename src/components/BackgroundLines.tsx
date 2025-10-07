'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';

type BackgroundLinesProps = {
  dark?: boolean;
  opacity?: number;
  density?: number;
  /** @deprecated mantener compatibilidad histórica */
  variant?: 'light' | 'dark';
  /** @deprecated mantener compatibilidad histórica */
  enableParallax?: boolean;
};

const PRIMARY_PATHS = [
  'M-80 120 C 100 20 260 40 420 -40',
  'M-120 320 C 60 240 220 260 420 190',
  'M-100 520 C 120 420 260 500 480 360',
  'M480 -60 C 440 120 520 280 700 320',
  'M520 80 C 660 20 780 40 940 -30',
  'M480 320 C 640 300 780 320 920 240',
  'M460 520 C 620 480 780 520 940 440',
  'M-160 40 Q 40 -40 220 60 T 540 120',
  'M-200 260 Q 20 180 200 240 T 560 260',
  'M-220 460 Q 0 360 220 420 T 600 440'
];

const SECONDARY_PATHS = [
  'M-80 60 L 360 200 L 760 120',
  'M-120 260 L 320 420 L 760 340',
  'M-100 480 L 300 600 L 740 520',
  'M140 -80 L 220 180 L 140 420',
  'M340 -40 L 420 240 L 340 480',
  'M560 20 L 640 300 L 560 540',
  'M780 60 L 860 320 L 780 540'
];

export default function BackgroundLines({
  dark,
  opacity = 0.08,
  density = 120,
  variant,
  enableParallax = true
}: BackgroundLinesProps) {
  const isDark = typeof dark === 'boolean' ? dark : variant === 'dark';
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const slowRange = density * 0.35;
  const fastRange = density * 0.6;

  const ySlow = useTransform(scrollYProgress, [0, 1], [-slowRange, slowRange]);
  const yFast = useTransform(scrollYProgress, [0, 1], [-fastRange, fastRange]);

  const primaryStroke = useMemo(
    () => (isDark ? `rgba(240,240,245,${opacity})` : `rgba(15,15,15,${opacity})`),
    [isDark, opacity]
  );

  const secondaryStroke = useMemo(
    () => (isDark ? `rgba(235,235,245,${opacity * 0.6})` : `rgba(20,20,20,${opacity * 0.6})`),
    [isDark, opacity]
  );

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      style={{
        maskImage: 'radial-gradient(75% 75% at 50% 50%, rgba(0,0,0,0.92), transparent)',
        WebkitMaskImage: 'radial-gradient(75% 75% at 50% 50%, rgba(0,0,0,0.92), transparent)'
      }}
    >
      <motion.svg
        className="absolute inset-0 h-full w-full will-change-transform"
        viewBox="0 0 960 720"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: enableParallax ? ySlow : undefined }}
      >
        {PRIMARY_PATHS.map((d, index) => (
          <path
            key={`primary-${index}`}
            d={d}
            fill="none"
            stroke={primaryStroke}
            strokeWidth={1.1}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </motion.svg>

      <motion.svg
        className="absolute inset-0 h-full w-full will-change-transform"
        viewBox="0 0 960 720"
        preserveAspectRatio="xMidYMid slice"
        style={{
          y: enableParallax ? yFast : undefined,
          opacity: 0.8
        }}
      >
        {SECONDARY_PATHS.map((d, index) => (
          <path
            key={`secondary-${index}`}
            d={d}
            fill="none"
            stroke={secondaryStroke}
            strokeWidth={0.9}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="6 18"
          />
        ))}
      </motion.svg>
    </div>
  );
}
