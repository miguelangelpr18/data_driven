'use client';

import { useEffect, useState } from 'react';
import { BarChart3, Compass, Layers, Sparkles, Briefcase, LineChart, Workflow, Waypoints, Database, Target, Presentation, MessageSquare } from 'lucide-react';

import BackgroundLines from '@/components/BackgroundLines';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import SiteFooter from '@/components/SiteFooter';

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

const purposeTimeline = [
  {
    title: 'Entendemos tus datos',
    description: 'Auditamos fuentes, objetivos y ritmos del negocio para revelar qué decisiones necesitan mejores señales.'
  },
  {
    title: 'Diseñamos soluciones claras',
    description:
      'Prototipamos experiencias analíticas minimalistas que priorizan insights accionables y adopción real.'
  },
  {
    title: 'Impulsamos decisiones estratégicas',
    description: 'Conectamos equipos y rituales de seguimiento para que los hallazgos se traduzcan en momentum.'
  }
];

const projects = [
  {
    title: 'Dashboard financiero integral',
    description:
      'Centralizamos KPIs críticos de ingresos, costos y rentabilidad en un tablero interactivo con escenarios y alertas tempranas.',
    Icon: LineChart
  },
  {
    title: 'Automatización de reportes operativos',
    description:
      'Conectamos fuentes dispersas y construimos pipelines que generan reportes diarios sin intervención manual.',
    Icon: Workflow
  },
  {
    title: 'Optimización de inventarios con análisis de datos',
    description:
      'Modelamos demanda, rotación y estacionalidad para definir niveles de stock que equilibran costo y disponibilidad.',
    Icon: Waypoints
  },
  {
    title: 'Diagnóstico Data-Driven para dirección general',
    description:
      'Mapeamos madurez analítica, procesos y cultura para priorizar iniciativas que habilitan decisiones estratégicas.',
    Icon: Briefcase
  }
] as const;

const services = [
  {
    title: 'Limpieza y optimización de bases de datos',
    description:
      'Transformamos tus datos en una base sólida y ordenada. Estandarizamos formatos, eliminamos duplicidades y aseguramos la integridad de la información.',
    Icon: Database
  },
  {
    title: 'Definición y medición de KPIs',
    description:
      'Diseñamos indicadores claros y accionables alineados a tus objetivos estratégicos, con criterios de medición y seguimiento continuo.',
    Icon: Target
  },
  {
    title: 'Implementación de reportes y dashboards',
    description:
      'Construimos dashboards intuitivos y reportes automáticos que convierten datos dispersos en insights visuales para tu equipo.',
    Icon: Presentation
  },
  {
    title: 'Consultoría personalizada',
    description:
      'Te acompañamos con asesorías a medida para acelerar la adopción del modelo Data Driven y asegurar el éxito del cambio.',
    Icon: MessageSquare
  }
] as const;

export default function Home() {
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    setIntroVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0B0B0B]">
      <main>
        <Hero variant="technical" />

        {/* QUIÉNES SOMOS */}
        <section id="quienes-somos" data-theme="dark" className="relative overflow-hidden bg-black text-white">
          <BackgroundLines tone="dark" opacity={0.18} density={150} />

          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
            <div
              className={`grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center ${
                introVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              } transition-all duration-700 ease-out`}
            >
              <div className="relative z-10 max-w-5xl space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">Quiénes Somos</span>
                  <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Conectamos estrategia, diseño y datos para que tus decisiones respiren claridad.
                  </h1>
                </div>
                <div className="space-y-5 text-base leading-relaxed text-neutral-300">
                  <p>
                    Somos un estudio boutique que traduce universos de métricas en historias sencillas y accionables. Unimos
                    talento analítico con sensibilidad de producto para que cada dashboard sea un espacio de calma, no de ruido.
                  </p>
                  <p>
                    Trabajamos como parte de tu equipo: entendemos los dolores clave, prototipamos rápido y acompañamos la
                    adopción hasta ver a tus líderes tomar decisiones con confianza y precisión.
                  </p>
                </div>

                <div className="mt-12 border-l border-white/10 pl-6">
                  <div className="flex flex-col gap-6">
                    {purposeTimeline.map((item, index) => (
                      <div key={item.title} className="relative">
                        <span className="absolute -left-[29px] top-1 flex h-4 w-4 items-center justify-center">
                          <span className="h-2 w-2 rounded-full bg-white" />
                        </span>
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Paso 0{index + 1}</p>
                        <h2 className="mt-1 text-lg font-medium text-white">{item.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative lg:ml-auto">
                <div className="pointer-events-none absolute -inset-x-8 top-0 -bottom-10 -z-10 opacity-25 blur-3xl transition duration-700 lg:hidden">
                  <div className="h-full w-full rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10" />
                </div>
                <div className="absolute inset-x-0 top-12 flex justify-center lg:hidden" aria-hidden="true">
                  <div className="relative h-56 w-56 rotate-6 overflow-hidden rounded-[36px] border border-white/10 opacity-25">
                    <div className="absolute inset-4 rounded-3xl border border-white/15" />
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 -rotate-12 border border-white/10" />
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border border-white/25" />
                  </div>
                </div>
                <div
                  className="relative mx-auto hidden w-full max-w-sm justify-center lg:flex"
                  aria-hidden="true"
                >
                  <div className="absolute -inset-16 rounded-full bg-white/10 blur-3xl" />
                  <div className="relative h-[360px] w-full overflow-hidden rounded-[40px] border border-white/15 bg-gradient-to-br from-white/5 via-white/0 to-white/5">
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative h-40 w-40 rotate-6 border border-white/20">
                        <div className="absolute inset-6 rounded-2xl border border-white/10" />
                      </div>
                      <div className="absolute h-56 w-56 -rotate-12 border border-white/30" />
                      <div className="absolute h-72 w-72 rotate-3 border border-white/10" />
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_65%)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS - Fondo Blanco */}
        <section id="proyectos" data-theme="light" className="relative overflow-hidden bg-white py-32 text-[#0B0B0B]">
          <BackgroundLines tone="light" opacity={0.08} density={140} />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-[3.25rem]">
                Casos donde los datos se volvieron decisiones
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Cada proyecto nos ha enseñado a traducir la complejidad en claridad. Aquí algunos ejemplos de soluciones que
                hemos implementado.
              </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {projects.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-[#E5E5EA] bg-white p-8 shadow-[0_12px_24px_rgba(15,15,15,0.03)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(15,15,15,0.08)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0B0B0B]">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-[#0B0B0B]">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SERVICIOS - Fondo Blanco */}
        <section id="servicios" data-theme="light" className="relative overflow-hidden bg-white py-32 text-[#0B0B0B]">
          <BackgroundLines tone="light" opacity={0.08} density={130} />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-[3.25rem]">
                Servicios de consultoría en inteligencia de datos
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Acompañamos a tu empresa desde la limpieza de la información hasta la visualización ejecutiva. Nuestro objetivo:
                que cada decisión esté respaldada por datos confiables y claros.
              </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-[#E5E5EA] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F5F7] text-[#0B0B0B]">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-[#0B0B0B]">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 grid gap-10 rounded-3xl border border-[#E5E5EA] bg-white/90 p-10 shadow-[0_1px_2px_rgba(15,15,15,0.05),0_6px_18px_rgba(15,15,15,0.05)] sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0B0B0B]">Dolores comunes en PYMES</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-neutral-600">
                  {[
                    'Datos dispersos en distintas fuentes.',
                    'Decisiones basadas en intuición en lugar de evidencia.',
                    'Información desaprovechada o difícil de acceder.',
                    'Reportes tardíos o inconsistentes.',
                    'Falta de visibilidad para detectar oportunidades.'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="text-base text-red-500">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0B0B0B]">Beneficios de ser Data Driven</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-neutral-600">
                  {[
                    'Decisiones respaldadas por datos confiables.',
                    'Información estructurada y fácil de interpretar.',
                    'KPIs alineados a objetivos del negocio.',
                    'Dashboards intuitivos que simplifican la gestión.',
                    'Capacidad de anticipar riesgos y áreas de mejora.'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="text-base text-emerald-500">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-base font-medium text-[#0B0B0B]">
                ¿Quieres transformar la manera en que tu empresa usa los datos?
              </p>
              <button
                type="button"
                onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Agenda una sesión
              </button>
            </div>
          </div>
        </section>

        {/* PLAN DE TRABAJO - Fondo Negro */}
        <section id="plan-de-trabajo" data-theme="dark" className="relative overflow-hidden bg-black py-20 text-white md:py-28">
          <BackgroundLines tone="dark" opacity={0.16} density={130} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mb-16 space-y-6 text-left">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                Plan de Trabajo
              </h2>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-neutral-400 sm:text-xl">
                Cuatro etapas con entregables claros y microinteracciones pensadas para tu equipo.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {planSteps.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                    <p className="text-base leading-relaxed text-neutral-300">{description}</p>
                  </div>
                  <span className="mt-auto text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Paso clave
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OBJETIVOS - Fondo Negro */}
        <section id="objetivos" data-theme="dark" className="relative overflow-hidden bg-black py-20 text-white md:py-28">
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
        <section id="contacto" data-theme="light" className="relative overflow-hidden bg-white py-20 md:py-28">
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

            <div
              id="agenda"
              className="rounded-3xl border border-[#E5E5EA] bg-white/95 p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]"
            >
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
