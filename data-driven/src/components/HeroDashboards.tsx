'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(getPrefersReducedMotion);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);

    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', updatePreference);
      return () => query.removeEventListener('change', updatePreference);
    }

    query.addListener(updatePreference);
    return () => query.removeListener(updatePreference);
  }, []);

  return prefersReduced;
}

function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(() => prefersReduced);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReduced]);

  return { ref, visible, prefersReduced };
}

const graphBaseClass = (visible: boolean, prefersReduced: boolean) =>
  cn(
    'group relative aspect-[3/2] w-full overflow-visible',
    prefersReduced ? 'transition-none' : 'transition-all duration-700 ease-out',
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
  );

export default function HeroDashboards() {
  return (
    <div className="relative z-10 mx-auto mt-6 w-full max-w-6xl px-4 sm:mt-8 lg:mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <BarsVertical />
        <KpiRing />
        <TrendLine />
        <BarsHorizontal />
      </div>
    </div>
  );
}

function BarsVertical() {
  const { ref, visible, prefersReduced } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const bars = [60, 110, 86, 132, 158];

  const handlePointerEnter = () => {
    if (!prefersReduced) setHovered(true);
  };

  const handlePointerLeave = () => setHovered(false);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={graphBaseClass(visible, prefersReduced)}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 200">
        <line x1="26" y1="170" x2="274" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        {bars.map((value, index) => {
          const growthFactor = hovered && !prefersReduced ? 1.08 : 1;
          const displayHeight = visible ? Math.min(value * growthFactor, 170) : 0;
          const yPosition = 170 - displayHeight;

          return (
            <rect
              key={index}
              x={42 + index * 45}
              width="26"
              rx="5"
              y={yPosition}
              height={displayHeight}
              fill="#ffffff"
              style={{
                transition: prefersReduced
                  ? 'none'
                  : `height 0.5s ease-out ${index * 60}ms, y 0.5s ease-out ${index * 60}ms`
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

function KpiRing() {
  const { ref, visible, prefersReduced } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const circumference = 2 * Math.PI * 44;
  const progress = hovered && !prefersReduced ? 0.76 : 0.72;

  const handlePointerEnter = () => {
    if (!prefersReduced) setHovered(true);
  };

  const handlePointerLeave = () => setHovered(false);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={graphBaseClass(visible, prefersReduced)}
    >
      <svg
        className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out"
        style={{ transform: hovered && !prefersReduced ? 'rotate(2deg)' : undefined }}
        viewBox="0 0 300 200"
      >
        <g transform="translate(150,100)">
          <circle r="56" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="12" />
          <circle
            r="44"
            fill="none"
            stroke="#ffffff"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={visible ? circumference * (1 - progress) : circumference}
            style={{
              transition: prefersReduced ? 'none' : 'stroke-dashoffset 0.7s ease-out'
            }}
          />
          <text dy="10" textAnchor="middle" fill="#ffffff" fontSize="32" fontWeight="600">
            72%
          </text>
        </g>
      </svg>
    </div>
  );
}

function TrendLine() {
  const { ref, visible, prefersReduced } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const totalLength = 600;

  const handlePointerEnter = () => {
    if (!prefersReduced) setHovered(true);
  };

  const handlePointerLeave = () => setHovered(false);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={graphBaseClass(visible, prefersReduced)}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 200">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="26" y1={y} x2="274" y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        ))}
        <path
          d="M30 150 L70 136 L110 142 L150 120 L190 132 L230 110 L270 134"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={totalLength}
          strokeDashoffset={visible ? (hovered && !prefersReduced ? -40 : 0) : totalLength}
          style={{
            transition: prefersReduced ? 'none' : 'stroke-dashoffset 0.7s ease-out, transform 0.3s ease-out',
            transform: hovered && !prefersReduced ? 'translateY(-2px)' : undefined
          }}
        />
      </svg>
    </div>
  );
}

function BarsHorizontal() {
  const { ref, visible, prefersReduced } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const widths = [210, 170, 230, 140];

  const handlePointerEnter = () => {
    if (!prefersReduced) setHovered(true);
  };

  const handlePointerLeave = () => setHovered(false);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={graphBaseClass(visible, prefersReduced)}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 200">
        {widths.map((value, index) => {
          const growthFactor = hovered && !prefersReduced ? 1.05 : 1;
          const displayWidth = visible ? Math.min(value * growthFactor, 230) : 0;

          return (
            <g key={index} transform={`translate(40, ${50 + index * 36})`}>
              <rect x="0" y="-10" width="220" height="20" rx="6" fill="rgba(255,255,255,0.15)" />
              <rect
                x="0"
                y="-10"
                height="20"
                rx="6"
                width={displayWidth}
                fill="#ffffff"
                style={{
                  transition: prefersReduced
                    ? 'none'
                    : `width 0.5s ease-out ${index * 70}ms`
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
