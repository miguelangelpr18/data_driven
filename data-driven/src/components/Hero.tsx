'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import BackgroundLines from '@/components/BackgroundLines';
import HeroDashboards from '@/components/HeroDashboards';
import { cn } from '@/lib/utils';

type HeroCopyVariant = 'inspirational' | 'technical' | 'commercial';

const COPY_VARIANTS: Record<HeroCopyVariant, { title: string; subtitle: string }> = {
  inspirational: {
    title: 'Decisiones inteligentes con la calma del diseño claro.',
    subtitle: 'Convertimos la complejidad de tus métricas en claridad visual y acción.'
  },
  technical: {
    title: 'Estrategia, diseño y datos en perfecta sincronía.',
    subtitle: 'Te ayudamos a implementar business intelligence en tu negocio'
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
  const [logoError, setLogoError] = useState(false);

  const containerVariants = {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1, delayChildren: 0.05 }
    }
  } as const;

  const itemVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  } as const;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      data-theme="light"
      className={cn('relative overflow-hidden bg-white text-neutral-900', className)}
    >
      <BackgroundLines tone='light' opacity={0.08} density={160} />

      {/* Radial highlight behind logo */}
      <div className="pointer-events-none absolute inset-x-0 top-[28%] flex justify-center">
        <div className="h-[20rem] w-[20rem] rounded-full bg-white/10 blur-3xl sm:h-[22rem] sm:w-[22rem]" />
      </div>
      {/* Fade-out to white at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1024px] flex-col items-center justify-center px-6 py-12 pb-16 text-center sm:px-8 md:min-h-[56vh] md:py-14 md:pb-20 lg:min-h-[52vh] lg:py-16 lg:pb-24"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <h1 id="hero-heading" className="sr-only">
            Data Driven Consulting
          </h1>
          {logoError ? (
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/30 bg-white/85 text-2xl font-semibold text-neutral-900 shadow-[0_20px_48px_rgba(15,15,15,0.15)] sm:h-40 sm:w-40 md:h-44 md:w-44">
              DD
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }}
            >
              <Image
                src="/logoDataDriven.png"
                alt="Logotipo de Data Driven"
                role="img"
                width={224}
                height={224}
                priority
                onError={() => setLogoError(true)}
                className="w-28 drop-shadow-[0_24px_60px_rgba(15,15,15,0.12)] sm:w-32 md:w-40 lg:w-44"
              />
            </motion.div>
          )}

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            {copy.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-9 mb-4 flex flex-col gap-4 sm:mb-5 sm:flex-row sm:justify-center sm:gap-5 md:mb-6"
        >
          <Link
            href="#agenda"
            aria-label="Agenda una sesión"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_18px_32px_rgba(15,15,15,0.22)] transition will-change-transform hover:-translate-y-px hover:shadow-[0_24px_40px_rgba(15,15,15,0.26)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            Agenda una sesión
          </Link>
          <Link
            href="#quienes-somos"
            aria-label="Conoce más sobre quiénes somos"
            className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-[0_12px_30px_rgba(15,15,15,0.12)] transition hover:-translate-y-px hover:bg-[#F7F7F7] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
          >
            Conoce más
          </Link>
        </motion.div>
      </motion.div>

      <HeroDashboards />
    </section>
  );
}
