import BackgroundLines from '@/components/BackgroundLines';
import { Database, Gauge, LayoutDashboard, Workflow } from 'lucide-react';

const offerings = [
  {
    title: 'Ordenamos tus datos',
    description:
      'Integramos, limpiamos y estandarizamos tus fuentes para que la información sea confiable y utilizable.',
    Icon: Database,
    delay: 0
  },
  {
    title: 'KPIs que importan',
    description:
      'Definimos indicadores claros alineados a objetivos de negocio para medir avance real —no solo números.',
    Icon: Gauge,
    delay: 120
  },
  {
    title: 'Dashboards minimalistas',
    description:
      'Diseñamos vistas intuitivas con foco en señal sobre ruido, listas para tomar decisiones en minutos.',
    Icon: LayoutDashboard,
    delay: 240
  },
  {
    title: 'Automatización de reportes',
    description:
      'Eliminamos tareas manuales y duplicadas; tus entregables se generan solos con datos siempre al día.',
    Icon: Workflow,
    delay: 360
  }
] as const;

export default function WhatWeDoSection() {
  return (
    <section
      id="que-hacemos"
      data-theme="dark"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32"
    >
      <BackgroundLines tone="dark" opacity={0.18} density={150} />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3rem]">
            Lo Que Hacemos Por Tu Negocio
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Unimos estrategia, diseño y datos para que tomes decisiones con confianza y sin ruido.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {offerings.map(({ title, description, Icon, delay }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.08] sm:p-7 motion-safe:animate-[fadeUp_500ms_ease-out_1] motion-safe:opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/80 transition duration-300 group-hover:border-white/20 group-hover:text-white">
                <Icon className="size-5" strokeWidth={1.6} />
              </span>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
