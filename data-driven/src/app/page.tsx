'use client';

import { useEffect, useRef, useState } from 'react';
import { BarChart3, Database, LayoutDashboard, RefreshCw, Target, Workflow } from 'lucide-react';

import BackgroundLines from '@/components/BackgroundLines';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import SiteFooter from '@/components/SiteFooter';
import { cn } from '@/lib/utils';

const planSteps = [
  {
    title: '1. Entendemos Fuentes',
    duration: '2–3 semanas',
    description: 'Auditamos fuentes, limpiamos datos clave y homologamos estructuras para garantizar consistencia.',
    Icon: Database
  },
  {
    title: '2. Definición de KPIs',
    duration: '1–2 semanas',
    description: 'Alineamos objetivos estratégicos, priorizamos indicadores y diseñamos métricas accionables.',
    Icon: Target
  },
  {
    title: '3. Creación de Reportes y Dashboards',
    duration: '2–3 semanas',
    description: 'Diseñamos dashboards intuitivos, automatizamos flujos y preparamos vistas para cada equipo.',
    Icon: BarChart3
  },
  {
    title: '4. Seguimiento y Ajustes Finales',
    duration: '1–2 semanas',
    description: 'Medimos adopción, afinamos reportes y documentamos aprendizajes para mantener la evolución.',
    Icon: RefreshCw
  }
] as const;

const objectives = [
  {
    title: 'Transformar tus datos en decisiones',
    description:
      'Convertimos la información dispersa en indicadores que te permiten tomar decisiones estratégicas y accionables.'
  },
  {
    title: 'Ahorro de tiempo y costos operativos',
    description: 'Automatiza tareas y reduce gastos operativos para enfocar recursos en lo que realmente genera valor.'
  },
  {
    title: 'Incrementar ventas con información estratégica',
    description:
      'Analizamos el desempeño de productos y el comportamiento del cliente para identificar oportunidades de crecimiento y aumentar las ventas.'
  },
  {
    title: 'Evitar pérdidas por exceso o falta de stock',
    description: 'Anticipa la demanda y equilibra inventarios para evitar sobrecostos y productos detenidos.'
  },
  {
    title: 'Aumentar rentabilidad operativa',
    description: 'Optimiza procesos, mejora márgenes y eleva la eficiencia de cada área del negocio.'
  },
  {
    title: 'Maximizar control financiero y operativo',
    description:
      'Aseguramos un monitoreo continuo con KPIs que se conectan directamente con las metas de tu empresa.'
  }
] as const;

// TODO: Restaurar la línea de tiempo de pasos cuando debamos comunicar el proceso nuevamente.
// const purposeTimeline = [
//   {
//     title: 'Entendemos tus datos',
//     description:
//       'Auditamos fuentes, objetivos y ritmos del negocio para revelar qué decisiones necesitan mejores señales.'
//   },
//   {
//     title: 'Diseñamos soluciones claras',
//     description:
//       'Prototipamos experiencias analíticas minimalistas que priorizan insights accionables y adopción real.'
//   },
//   {
//     title: 'Impulsamos decisiones estratégicas',
//     description:
//       'Conectamos equipos y rituales de seguimiento para que los hallazgos se traduzcan en momentum.'
//   }
// ];

// TODO: Reactivar proyectos destacados cuando volvamos a mostrar casos de éxito.
// const projects = [
//   {
//     title: 'Dashboard financiero integral',
//     description:
//       'Centralizamos KPIs críticos de ingresos, costos y rentabilidad en un tablero interactivo con escenarios y alertas tempranas.',
//     Icon: LineChart
//   },
//   {
//     title: 'Automatización de reportes operativos',
//     description:
//       'Conectamos fuentes dispersas y construimos pipelines que generan reportes diarios sin intervención manual.',
//     Icon: Workflow
//   },
//   {
//     title: 'Optimización de inventarios con análisis de datos',
//     description:
//       'Modelamos demanda, rotación y estacionalidad para definir niveles de stock que equilibran costo y disponibilidad.',
//     Icon: Waypoints
//   },
//   {
//     title: 'Diagnóstico Data-Driven para dirección general',
//     description:
//       'Mapeamos madurez analítica, procesos y cultura para priorizar iniciativas que habilitan decisiones estratégicas.',
//     Icon: Briefcase
//   }
// ] as const;

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
      'Construimos dashboards intuitivos y reportes automáticos que convierten datos dispersos en accionables.',
    Icon: LayoutDashboard
  },
  {
    title: 'Automatización de procesos',
    description:
      'Desarrollamos flujos automatizados que reducen tareas repetitivas y mejoran la eficiencia operativa. Integramos tus sistemas para que la información fluya sin fricción entre herramientas y equipos.',
    Icon: Workflow
  }
] as const;

const pymesPainPoints = [
  'Datos dispersos en distintas fuentes.',
  'Decisiones basadas en intuición en lugar de evidencia.',
  'Información desaprovechada o difícil de acceder.',
  'Reportes tardíos o inconsistentes.',
  'Falta de visibilidad para detectar oportunidades.'
] as const;

const dataDrivenBenefits = [
  'Decisiones respaldadas por datos confiables.',
  'Información estructurada y fácil de interpretar.',
  'KPIs alineados a objetivos del negocio.',
  'Dashboards intuitivos que simplifican la gestión.',
  'Capacidad de anticipar riesgos y áreas de mejora.'
] as const;

export default function Home() {
  const [introVisible, setIntroVisible] = useState(false);
  const [planCardsVisible, setPlanCardsVisible] = useState<boolean[]>(() => planSteps.map(() => false));
  const planCardsRef = useRef<(HTMLElement | null)[]>([]);
  const [objectiveCardsVisible, setObjectiveCardsVisible] = useState<boolean[]>(() => objectives.map(() => false));
  const objectiveCardsRef = useRef<(HTMLElement | null)[]>([]);
  const [objectiveMessageVisible, setObjectiveMessageVisible] = useState(false);
  const objectiveMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIntroVisible(true);
  }, []);

  useEffect(() => {
    const cards = planCardsRef.current;
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPlanCardsVisible(planSteps.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setPlanCardsVisible((previous) => {
                if (previous[index]) return previous;
                const next = [...previous];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = objectiveCardsRef.current;
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setObjectiveCardsVisible(objectives.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setObjectiveCardsVisible((prev) => {
                if (prev[index]) return prev;
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = objectiveMessageRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setObjectiveMessageVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setObjectiveMessageVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0B0B0B]">
      <main className="pt-[var(--nav-h)]">
        <Hero variant="technical" />
        {/* SERVICIOS - Fondo Oscuro */}
        <section id="servicios" data-theme="dark" className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32">
          <BackgroundLines tone="dark" opacity={0.18} density={130} />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                Servicios de Consultoría de Análisis de Datos
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
                Acompañamos a tu empresa desde la limpieza de la información hasta la visualización de datos. Nuestro objetivo:
                que cada decisión esté respaldada por datos confiables y claros.
              </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-[0_16px_32px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(0,0,0,0.35)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/80">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOLORES VS BENEFICIOS - Fondo Blanco */}
        <section
          id="dolores-beneficios"
          data-theme="light"
          className="relative overflow-hidden bg-white py-24 text-[#0B0B0B] sm:py-28 lg:py-32"
        >
          <BackgroundLines tone="light" opacity={0.08} density={125} />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-[#E5E5EA] bg-white/95 p-10 shadow-[0_1px_2px_rgba(15,15,15,0.05),0_10px_22px_rgba(15,15,15,0.05)] sm:p-12">
              <div className="grid gap-12 sm:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#0B0B0B]">Problemas comunes en PYMES</h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-neutral-600">
                    {pymesPainPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-[3px] text-base text-red-500">❌</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#0B0B0B]">Beneficios de ser Data Driven</h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-neutral-600">
                    {dataDrivenBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-[3px] text-base text-emerald-500">✅</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 text-center">
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

        {/* OBJETIVOS - Fondo Negro */}
        <section id="objetivos" data-theme="dark" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white sm:py-28 lg:py-32">
          <BackgroundLines tone="dark" opacity={0.18} density={120} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mb-16 space-y-6 text-left sm:text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                Objetivos del Proyecto
              </h2>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-neutral-300 sm:mx-auto sm:text-xl">
                Resultados que impulsan tu operación desde el primer análisis.
              </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {objectives.map(({ title, description }, index) => (
                <article
                  key={title}
                  ref={(element: HTMLElement | null) => {
                    objectiveCardsRef.current[index] = element;
                  }}
                  tabIndex={0}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className={cn(
                    'group flex h-full flex-col gap-5 rounded-[24px] border border-white/10 bg-white/[0.05] px-10 py-8 text-left text-neutral-200 shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform',
                    'hover:scale-[1.03] hover:bg-white/[0.08] hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)] focus-visible:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
                    'motion-safe:transition-all motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100',
                    objectiveCardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                >
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#d1d1d1]">{title}</h3>
                  <p className="text-[0.95rem] font-normal leading-[1.6] text-[#b3b3b3]">{description}</p>
                </article>
              ))}
            </div>

            <div
              ref={objectiveMessageRef}
              style={{ transitionDelay: '160ms' }}
              className={cn(
                'mx-auto mt-20 mb-24 max-w-3xl text-center text-lg font-light leading-relaxed text-[#d1d1d1] sm:text-xl',
                'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
                objectiveMessageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="block">Hecho a la medida de tu negocio.</span>
              <span className="block">Flexible, escalable y 100 % personalizado.</span>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA - Fondo Blanco */}
        <section
          id="metodologia"
          data-theme="light"
          className="relative overflow-hidden bg-white py-28 text-[#0B0B0B] sm:py-32"
        >
          <span id="plan-de-trabajo" className="sr-only" aria-hidden="true" />
          <BackgroundLines tone="light" opacity={0.08} density={135} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl md:text-5xl">
                Nuestra Metodología
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Acompañamos cada etapa con entregables claros, ritmos definidos y adopción sin fricción.
              </p>
            </div>

            <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {planSteps.map(({ title, duration, description, Icon }, index) => (
                <article
                  key={title}
                  ref={(element: HTMLElement | null) => {
                    planCardsRef.current[index] = element;
                  }}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={cn(
                    'group flex h-full flex-col items-center gap-5 rounded-[28px] border border-[#E5E5EA] bg-white p-8 text-center shadow-[0_12px_24px_rgba(15,15,15,0.05)] will-change-transform transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 sm:p-9',
                    'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
                    planCardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#0B0B0B] shadow-inner">
                    <Icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#0B0B0B]">{title}</h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{duration}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES DATA DRIVEN - Fondo Blanco */}
        <section
          id="planes-data-driven"
          data-theme="light"
          className="relative overflow-hidden bg-white py-28 text-[#0B0B0B] sm:py-32"
        >
          <BackgroundLines tone="light" opacity={0.08} density={135} />

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl md:text-5xl">
                Planes Data Driven
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Elige el plan ideal según tu nivel de control y seguimiento.
              </p>
            </div>

            <div className="mx-auto mt-20 grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {/* Plan 1: Insight Plan */}
              <article className="plan-card group relative flex flex-col rounded-[28px] border border-[#E5E5EA] bg-white p-8 shadow-[0_4px_16px_rgba(15,15,15,0.04)] transition-all duration-[220ms] ease-out lg:hover:-translate-y-[3px] lg:hover:shadow-[0_6px_20px_rgba(15,15,15,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 sm:p-9 lg:min-h-[680px]">
                {/* Header: Nombre + Precio */}
                <div className="plan-header mb-4 pb-2 space-y-3.5">
                  <h3 className="text-2xl font-semibold leading-tight text-[#0B0B0B]">Insight Plan</h3>
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-xs font-medium text-neutral-400 line-through">Antes: $4,800</span>
                      <span className="inline-flex items-center rounded-full bg-[#34C759]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#34C759]">
                        -21%
                      </span>
                    </div>
                    <div className="plan-price-wrapper mt-2 mb-2">
                      <div className="plan-price flex items-baseline justify-start gap-1.5 flex-nowrap">
                        <span className="precio-desde font-semibold leading-[1.1] text-[#0B0B0B] whitespace-nowrap" style={{ fontSize: 'clamp(26px, 2.3vw, 34px)', fontVariantNumeric: 'tabular-nums' }}>$3,800</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-neutral-500">Pago único</p>
                  </div>
                </div>

                {/* Body: Lista de beneficios */}
                <div className="plan-body flex-1 flex flex-col justify-center">
                  <ul className="plan-features space-y-3 text-left">
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        1–2 sesiones de entendimiento del negocio
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Revisión de hasta 3 fuentes de datos
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Diagnóstico inicial de la información
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Desarrollo de 1 dashboard ejecutivo en Power BI
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Entrega única en PDF (one-shot)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        1 Sesión de resultados y recomendaciones
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Documentación del proyecto
                      </span>
                    </li>
                </ul>

                {/* Footer: CTA */}
                <div className="plan-footer pt-6">
                  <button
                    type="button"
                    onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded-full border border-[#E5E5EA] bg-white px-6 py-3 text-sm font-medium text-[#0B0B0B] shadow-[0_2px_8px_rgba(15,15,15,0.08)] transition-all duration-[220ms] ease-out lg:hover:shadow-[0_3px_10px_rgba(15,15,15,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                  >
                    Agendar sesión
                  </button>
                </div>
              </article>

              {/* Plan 2: Data Driven Plan - Destacado */}
              <article className="plan-card group relative flex flex-col rounded-[28px] border border-[#0B0B0B]/25 bg-white p-8 shadow-[0_6px_20px_rgba(15,15,15,0.06)] transition-all duration-[220ms] ease-out lg:hover:-translate-y-[3px] lg:hover:shadow-[0_8px_28px_rgba(15,15,15,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 sm:p-9 lg:min-h-[680px] lg:-translate-y-2">
                {/* Badge "Más popular" */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center rounded-full bg-[#0B0B0B] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                    Más popular
                  </span>
                </div>

                {/* Header: Nombre + Precio */}
                <div className="plan-header mb-4 pb-2 space-y-3.5">
                  <h3 className="text-2xl font-semibold leading-tight text-[#0B0B0B]">Data Driven Plan</h3>
                  <div className="space-y-2.5">
                    <div className="plan-price-wrapper mt-2 mb-2">
                      <div className="plan-price flex items-baseline justify-start gap-1.5 flex-nowrap">
                        <span className="precio-desde font-semibold leading-[1.1] text-[#0B0B0B] whitespace-nowrap" style={{ fontSize: 'clamp(26px, 2.3vw, 34px)', fontVariantNumeric: 'tabular-nums' }}>$5,800</span>
                        <span className="separador text-xl font-medium text-neutral-500">–</span>
                        <span className="precio-hasta font-semibold leading-[1.1] text-[#0B0B0B] whitespace-nowrap" style={{ fontSize: 'clamp(26px, 2.3vw, 34px)', fontVariantNumeric: 'tabular-nums' }}>$8,500</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-neutral-500">/mes</p>
                  </div>
                </div>

                {/* Body: Lista de beneficios */}
                <div className="plan-body flex-1 flex flex-col justify-center">
                  <ul className="plan-features space-y-3 text-left">
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Sesiones iniciales de entendimiento y alineación
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-600">
                        Revisión y conexión de múltiples fuentes de datos
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-600">
                        Definición y seguimiento de KPIs clave del negocio
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-600">
                        Desarrollo y evolución continua de dashboards en Power BI
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-600">
                        Acceso a Power BI como plataforma de lectura interactiva
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-600">
                        Actualizaciones periódicas de la información
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-relaxed text-neutral-600">
                        Documentación y seguimiento del proyecto
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Footer: CTA */}
                <div className="plan-footer pt-6">
                  <button
                    type="button"
                    onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-[220ms] ease-out lg:hover:shadow-[0_5px_18px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  >
                    Agendar sesión
                  </button>
                </div>
              </article>

              {/* Plan 3: Control Plan */}
              <article className="plan-card group relative flex flex-col rounded-[28px] border border-[#E5E5EA] bg-white p-8 shadow-[0_4px_16px_rgba(15,15,15,0.04)] transition-all duration-[220ms] ease-out lg:hover:-translate-y-[3px] lg:hover:shadow-[0_6px_20px_rgba(15,15,15,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 sm:p-9 lg:min-h-[680px]">
                {/* Header: Nombre + Precio */}
                <div className="plan-header mb-4 pb-2 space-y-3.5">
                  <h3 className="text-2xl font-semibold leading-tight text-[#0B0B0B]">Control Plan</h3>
                  <div className="space-y-2.5">
                    <div className="plan-price-wrapper mt-2 mb-2">
                      <div className="plan-price flex items-baseline justify-start gap-1.5 flex-nowrap">
                        <span className="precio-desde font-semibold leading-[1.1] text-[#0B0B0B] whitespace-nowrap" style={{ fontSize: 'clamp(26px, 2.3vw, 34px)', fontVariantNumeric: 'tabular-nums' }}>$15,000</span>
                        <span className="separador text-xl font-medium text-neutral-500">–</span>
                        <span className="precio-hasta font-semibold leading-[1.1] text-[#0B0B0B] whitespace-nowrap" style={{ fontSize: 'clamp(26px, 2.3vw, 34px)', fontVariantNumeric: 'tabular-nums' }}>$20,000</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-neutral-500">/mes</p>
                    <p className="text-xs font-medium text-neutral-400">Tu BI externo para el negocio</p>
                  </div>
                </div>

                {/* Body: Lista de beneficios */}
                <div className="plan-body flex-1 flex flex-col justify-center">
                  <ul className="plan-features space-y-2.5 text-left">
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="flex-1">
                        <span className="text-sm leading-[1.65] text-neutral-600">
                          Múltiples dashboards, organizados por:
                        </span>
                        <ul className="plan-sublist mt-2.5 ml-5 space-y-1.5">
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Rol (Dirección / Dueño / Operación)
                          </li>
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Iniciativa (ventas, retención, productividad, etc.)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Reportes especializados orientados a acciones concretas
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="flex-1">
                        <span className="text-sm leading-[1.65] text-neutral-600">
                          Modelado de datos avanzado:
                        </span>
                        <ul className="plan-sublist mt-2.5 ml-5 space-y-1.5">
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Históricos consolidados
                          </li>
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Comparativos entre periodos
                          </li>
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Análisis de cohortes
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Actualización semanal o automática (si la fuente lo permite)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="flex-1">
                        <span className="text-sm leading-[1.65] text-neutral-600">
                          KPIs avanzados, como:
                        </span>
                        <ul className="plan-sublist mt-2.5 ml-5 space-y-1.5">
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Retención
                          </li>
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Drop-off
                          </li>
                          <li className="text-[11px] leading-[1.5] text-neutral-400">
                            • Crecimiento
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm leading-[1.65] text-neutral-600">
                        Priorización mensual de nuevas iniciativas y vistas
                      </span>
                    </li>
                </ul>

                {/* Footer: CTA */}
                <div className="plan-footer pt-6">
                  <button
                    type="button"
                    onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded-full border border-[#E5E5EA] bg-white px-6 py-3 text-sm font-medium text-[#0B0B0B] shadow-[0_2px_8px_rgba(15,15,15,0.08)] transition-all duration-[220ms] ease-out lg:hover:shadow-[0_3px_10px_rgba(15,15,15,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                  >
                    Agendar sesión
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section id="quienes-somos" data-theme="dark" className="relative overflow-hidden bg-black text-white">
          <BackgroundLines tone="dark" opacity={0.18} density={150} />

          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
            <div
              className={`grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center ${
                introVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              } transition-all duration-700 ease-out`}
            >
              <div className="relative z-10 max-w-4xl space-y-10">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">Quiénes Somos</span>
                  <div className="space-y-6 text-pretty">
                    <p className="text-lg font-medium leading-relaxed text-neutral-200 sm:text-xl">
                      Somos una consultora especializada en inteligencia de negocios dedicada a apoyar a las pequeñas y medianas empresas que aún no han logrado implementar el análisis de datos.
                    </p>
                    <p className="text-lg font-medium leading-relaxed text-neutral-200 sm:text-xl">
                      Nuestro objetivo es simplificar el proceso de análisis de datos, ayudándoles a organizar, extraer y visualizar su información de forma efectiva para que puedan tomar decisiones estratégicas basadas en hechos en lugar de suposiciones.
                    </p>
                    <p className="text-lg font-medium leading-relaxed text-neutral-200 sm:text-xl">
                      Nos enfocamos en crear soluciones accesibles y personalizadas que integren el poder de los datos en sus procesos, impulsando el crecimiento y mejorando su competitividad.
                    </p>
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
                {/* TODO: Rehabilitar el bloque de pasos cuando volvamos a contar el proceso.
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
                */}
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
