'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import BackgroundLines from '@/components/BackgroundLines';
import { cn } from '@/lib/utils';

type HeroCopyVariant = 'inspirational' | 'technical' | 'commercial';

const COPY_VARIANTS: Record<HeroCopyVariant, { title: string; subtitle: string }> = {
  inspirational: {
    title: 'Decisiones inteligentes con la calma del diseño claro.',
    subtitle: 'Convertimos la complejidad de tus métricas en claridad visual y acción.'
  },
  technical: {
    title: 'Estrategia, diseño y datos en perfecta sincronía.',
    subtitle: 'Te ayudamos a implementar business intelligence para tu negocio'
  },
  commercial: {
    title: 'Menos ruido, más resultados.',
    subtitle: 'Tableros y procesos que alinean a tu equipo y aceleran el crecimiento.'
  }
};

export type HeroProps = {
  variant?: HeroCopyVariant;
  className?: string;
};

export default function Hero({ variant = 'technical', className }: HeroProps) {
  const copy = useMemo(() => COPY_VARIANTS[variant], [variant]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      data-theme="light"
      className={cn('relative overflow-hidden bg-white text-neutral-900', className)}
    >
      <BackgroundLines tone="light" opacity={0.08} density={160} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <div className="flex flex-col gap-7 sm:gap-8">
          <div className="space-y-5 sm:space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-neutral-200/80 bg-white/90 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-neutral-500 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
              Consultoría Data Driven
            </span>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.4rem]"
            >
              {copy.title}
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-neutral-600 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#agenda"
              aria-label="Agenda una sesión"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(15,15,15,0.12)] transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              Agenda una sesión
            </Link>
            <Link
              href="#quienes-somos"
              aria-label="Conoce más sobre quiénes somos"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
            >
              Conoce más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
