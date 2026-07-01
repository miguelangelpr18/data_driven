'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import BackgroundLines from '@/components/BackgroundLines';

type Demo = {
  giro: string;
  brand: string;
  description: string;
  href: string;
  image: string;
};

const demos: Demo[] = [
  {
    giro: 'Automotriz',
    brand: 'Vértice · Detallado',
    description: 'Proyectos cerrados, leads, conversión y margen de contribución.',
    href: '/demos/automotriz',
    image: '/demos/previews/automotriz.webp',
  },
  {
    giro: 'Cafeterías',
    brand: 'Hábito · Coffee Shop',
    description: 'Ventas, tickets, ticket promedio y programa de lealtad, mes a mes.',
    href: '/demos/cafeterias',
    image: '/demos/previews/cafeterias.webp',
  },
  {
    giro: 'Consultorio Médico',
    brand: 'Pulso · Centro Médico',
    description: 'Citas atendidas, ocupación de agenda, no-show e ingreso por consulta.',
    href: '/demos/medico',
    image: '/demos/previews/medico.webp',
  },
  {
    giro: 'Pilates',
    brand: 'Núcleo · Studio',
    description: 'Miembros activos, ocupación, rotación mensual e ingreso por miembro.',
    href: '/demos/pilates',
    image: '/demos/previews/pilates.webp',
  },
];

export default function DemosSection() {
  return (
    <section
      id="demos"
      data-theme="dark"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32"
    >
      <BackgroundLines tone="dark" opacity={0.18} density={130} />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#34C759]">
            Demos por industria
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
            Un dashboard para cada industria
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Ejemplos del tipo de tableros que construimos. Datos ficticios, estructura y métricas reales.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {demos.map((demo) => (
            <a
              key={demo.href}
              href={demo.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver demo de ${demo.giro} — ${demo.brand} (abre en una pestaña nueva)`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_24px_56px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34C759]/60"
            >
              {/* Preview con marco tipo navegador */}
              <div className="border-b border-white/10 bg-white/[0.03] p-3">
                <div className="mb-2 flex items-center gap-1.5 px-1" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={demo.image}
                    alt={`Vista del dashboard de ${demo.brand}`}
                    width={1000}
                    height={625}
                    className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="flex flex-1 flex-col gap-2 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{demo.giro}</h3>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#34C759] transition-transform duration-200 group-hover:translate-x-0.5">
                    Ver demo
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-400">{demo.brand}</p>
                <p className="text-sm leading-relaxed text-neutral-300">{demo.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
