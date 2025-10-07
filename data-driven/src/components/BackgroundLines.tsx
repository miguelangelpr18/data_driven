'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';

type BackgroundLinesProps = {
  className?: string;
  opacity?: number;
  density?: number;
  tone?: 'light' | 'dark';
  parallax?: boolean;
};

interface Shape {
  x: number;
  y: number;
  size: number;
  rotate: number;
  strokeWidth: number;
  opacity: number;
}

const BASE_SHAPES: Shape[] = [
  { x: -120, y: 180, size: 420, rotate: -18, strokeWidth: 0.8, opacity: 0.7 },
  { x: 40, y: -120, size: 520, rotate: 12, strokeWidth: 0.9, opacity: 0.5 },
  { x: 220, y: 60, size: 460, rotate: -32, strokeWidth: 0.75, opacity: 0.6 },
  { x: 360, y: -60, size: 520, rotate: 28, strokeWidth: 0.7, opacity: 0.55 },
  { x: 520, y: 200, size: 420, rotate: -24, strokeWidth: 0.85, opacity: 0.5 },
  { x: 60, y: 320, size: 520, rotate: -12, strokeWidth: 0.65, opacity: 0.45 },
  { x: 440, y: 360, size: 480, rotate: 18, strokeWidth: 0.7, opacity: 0.4 }
];

const SECONDARY_LINES = [
  'M-80 120 L 320 60 L 680 140',
  'M-120 420 L 260 320 L 640 420',
  'M80 -60 L 140 280 L 60 520',
  'M520 -40 L 580 280 L 500 520',
  'M720 20 L 780 300 L 700 540'
];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function BackgroundLines({
  className = '',
  opacity = 0.1,
  density = 120,
  tone = 'light',
  parallax = true
}: BackgroundLinesProps) {
  const isDark = tone === 'dark';
  const spacing = clamp(density, 60, 220);

  const strokeBase = isDark ? '235,235,245' : '24,24,28';
  const lineStroke = isDark ? '242,242,248' : '18,18,24';

  const baseAlpha = useMemo(() => {
    const boosted = opacity * (isDark ? 1.4 : 2.1);
    return Math.min(boosted, isDark ? 0.3 : 0.36);
  }, [isDark, opacity]);

  const secondaryAlpha = useMemo(() => {
    const boosted = opacity * (isDark ? 1.1 : 1.7);
    return Math.min(boosted, isDark ? 0.24 : 0.3);
  }, [isDark, opacity]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const parallaxAmount = spacing * 0.7;
  const yPrimary = useTransform(scrollYProgress, [0, 1], [parallaxAmount * -0.35, parallaxAmount * 0.35]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [parallaxAmount * -0.65, parallaxAmount * 0.65]);

  const shapes = useMemo(() => BASE_SHAPES, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-0 ${className}`}
      style={{
        maskImage: 'radial-gradient(78% 78% at 50% 50%, rgba(0,0,0,0.92), transparent)',
        WebkitMaskImage: 'radial-gradient(78% 78% at 50% 50%, rgba(0,0,0,0.92), transparent)'
      }}
    >
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 720"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: parallax ? yPrimary : undefined }}
      >
        {shapes.map((shape, index) => (
          <rect
            key={`shape-${index}`}
            x={shape.x}
            y={shape.y}
            width={shape.size}
            height={shape.size}
            transform={`rotate(${shape.rotate} ${shape.x + shape.size / 2} ${shape.y + shape.size / 2})`}
            fill="none"
            stroke={`rgba(${strokeBase}, ${shape.opacity * baseAlpha})`}
            strokeWidth={shape.strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </motion.svg>

      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 720"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: parallax ? ySecondary : undefined, opacity: 0.85 }}
      >
        {SECONDARY_LINES.map((d, index) => (
          <path
            key={`line-${index}`}
            d={d}
            fill="none"
            stroke={`rgba(${lineStroke}, ${secondaryAlpha})`}
            strokeWidth={0.75}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </motion.svg>
    </div>
  );
}
