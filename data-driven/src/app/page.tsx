'use client';

import { BarChart3, Compass, Layers, Sparkles } from 'lucide-react';

import BackgroundLines from '@/components/BackgroundLines';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

const pains = [
  {
    title: 'Datos fragmentados',
    description:
      'Indicadores que viven en múltiples hojas y sistemas, dificultando construir una mirada única.'
  },
  {
    title: 'Reportes tardíos',
    description:
      'Semanas para consolidar información que llega obsoleta a las reuniones clave.'
  },
  {
    title: 'Narrativas inconexas',
    description:
      'Cada área interpreta los números a su manera, generando decisiones contradictorias.'
  }
];

const benefits = [
  {
    title: 'Fuente única de verdad',
    description:
      'Un tablero central con métricas validadas y actualizadas para responder en segundos.'
  },
  {
    title: 'Operación sin fricción',
    description:
      'Procesos automatizados de captura, limpieza y visualización que fluyen en segundo plano.'
  },
  {
    title: 'Decisiones alineadas',
    description:
      'Una narrativa compartida que conecta objetivos, resultados y próximos pasos con claridad.'
  }
];

const planSteps = [
  {
    title: 'Diagnóstico',
    description: 'Mapeamos objetivos, preguntas críticas y calidad de datos para definir el alcance.',
    Icon: Compass
  },
  {
    title: 'Arquitectura',
    description: 'Diseñamos la estructura técnica y visual con foco minimalista y adopción rápida.',
    Icon: Layers
  },
  {
    title: 'Implementación',
    description: 'Automatizamos flujos, construimos dashboards y documentamos cada entrega.',
    Icon: BarChart3
  },
  {
    title: 'Activación',
    description: 'Entrenamos a los equipos, medimos adopción y abrimos ciclos de mejora continua.',
    Icon: Sparkles
  }
];

const objectives = [
  {
    title: 'Claridad inmediata',
    description:
      'Que cualquier líder reconozca tendencias, alertas y oportunidades en un vistazo.'
  },
  {
    title: 'Cultura data-driven',
    description:
      'Instalar rituales y lenguaje común para conversar con datos en cada reunión.'
  },
  {
    title: 'Evolución constante',
    description:
      'Liberar tiempo de análisis manual para enfocarnos en descubrimientos y crecimiento.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0B0B0B]">
      <SiteHeader />

      <main>
        {/* HERO - Fondo Blanco */}
        <section id="hero" className="relative bg-white overflow-hidden">
          {/* Fondo geométrico con parallax suave */}
          <BackgroundLines tone="light" opacity={0.12} density={140} />

          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl py-32 md:py-40">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs tracking-[0.18em] text-neutral-600 shadow-[0_8px_24px_rgba(0,0,0,0.05)] backdrop-blur">
                CONSULTORÍA DATA DRIVEN
              </div>

              <h1 className="mt-6 md:mt-7 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
                Decisiones estratégicas con la <span className="whitespace-nowrap">calma de un dashboard Apple.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
                Unimos datos, diseño y estrategia para construir experiencias analíticas minimalistas
                que se sienten familiares, confiables y accionables.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-in-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  Agenda una sesión
                  <span className="ml-2 inline-block translate-y-[1px]">→</span>
                </button>
                <button
                  onClick={() => document.getElementById('propuesta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center rounded-full border border-[#E5E5EA] bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-500 ease-in-out hover:bg-[#F2F2F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                >
                  Conocer más
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR - Fondo Negro */}
        <section id="propuesta" className="relative overflow-hidden bg-black py-20 text-white md:py-28">
          <BackgroundLines tone="dark" opacity={0.16} density={120} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mb-16 space-y-6 text-left">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                Propuesta de Valor
              </h2>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-neutral-400 sm:text-xl">
                Un acompañamiento modular y enfocado en resultados tangibles.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)]">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">01 / Auditoría</p>
                  <p className="text-lg leading-relaxed text-white">
                    Mapeamos fuentes, calidad y frecuencia de datos para cimentar decisiones confiables.
                  </p>
                </div>
                <span className="mt-8 text-sm font-medium text-[#34C759]">Sesión kickoff</span>
              </div>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)]">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">02 / Storytelling</p>
                  <p className="text-lg leading-relaxed text-white">
                    Construimos visualizaciones limpias que revelan patrones, tendencias y oportunidades.
                  </p>
                </div>
                <span className="mt-8 text-sm font-medium text-[#34C759]">Tableros iterativos</span>
              </div>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)]">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">03 / Activación</p>
                  <p className="text-lg leading-relaxed text-white">
                    Alineamos rituales y responsables para convertir hallazgos en acción sostenida.
                  </p>
                </div>
                <span className="mt-8 text-sm font-medium text-[#34C759]">Cierre & roadmap</span>
              </div>
            </div>
          </div>
        </section>

        {/* PLAN DE TRABAJO - Fondo Blanco */}
        <section id="plan-de-trabajo" className="relative overflow-hidden bg-white py-20 md:py-28">
          <BackgroundLines tone="light" opacity={0.1} density={120} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mb-16 space-y-6 text-left">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-[3.25rem]">
                Plan de Trabajo
              </h2>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-[#6E6E73] sm:text-xl">
                Cuatro etapas con entregables claros y microinteracciones pensadas para tu equipo.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {planSteps.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-[#E5E5EA] bg-white/90 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0B0B0B]">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-[#0B0B0B]">{title}</h3>
                    <p className="text-base leading-relaxed text-[#6E6E73]">{description}</p>
                  </div>
                  <span className="mt-auto text-xs uppercase tracking-[0.3em] text-[#6E6E73]">
                    Paso clave
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OBJETIVOS - Fondo Negro */}
        <section id="objetivos" className="relative overflow-hidden bg-black py-20 text-white md:py-28">
          <BackgroundLines tone="dark" opacity={0.18} density={120} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mb-16 space-y-6 text-left">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                Objetivos del Proyecto
              </h2>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-neutral-400 sm:text-xl">
                Resultados que sentimos desde la primera iteración.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {objectives.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO - Fondo Blanco */}
        <section id="contacto" className="relative overflow-hidden bg-white py-20 md:py-28">
          <BackgroundLines tone="light" opacity={0.08} density={140} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mb-16 space-y-6 text-left">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-[3.25rem]">
                Contacto
              </h2>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-[#6E6E73] sm:text-xl">
                Compártenos tu contexto y agendemos una llamada de diagnóstico.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5EA] bg-white/95 p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
