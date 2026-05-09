import BackgroundLines from '@/components/BackgroundLines';
import { BarChart3, FolderCog, Layers, LineChart } from 'lucide-react';

const benefits = [
  {
    title: 'Decidir con claridad',
    description: 'KPIs y tendencias listos para leer en minutos; menos ruido, más señal.',
    Icon: BarChart3,
    delay: 50
  },
  {
    title: 'Control de la operación',
    description: 'Una vista unificada por áreas, responsables y metas para alinear al equipo.',
    Icon: Layers,
    delay: 100
  },
  {
    title: 'Menos trabajo manual',
    description: 'Reportes automatizados y datos siempre actualizados para enfocarte en lo importante.',
    Icon: FolderCog,
    delay: 150
  },
  {
    title: 'Resultados medibles',
    description: 'Seguimiento continuo y objetivos claros para iterar con evidencia.',
    Icon: LineChart,
    delay: 200
  }
] as const;

export default function ForSMEs() {
  return (
    <section
      id="para-que-pyme"
      data-theme="light"
      className="relative overflow-hidden bg-white py-24 text-[#0B0B0B] sm:py-28 lg:py-32"
    >
      <BackgroundLines tone="light" opacity={0.08} density={140} />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-[3.25rem]">
            Para qué te sirve como PyME
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Porque tus decisiones necesitan información confiable y simple. <br className="hidden sm:block" />
            Esto es lo que obtienes al trabajar con nosotros.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map(({ title, description, Icon, delay }) => (
            <article
              key={title}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-[#E5E5EA] bg-white/90 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] sm:p-7 motion-safe:animate-[fadeUp_500ms_ease-out_1] motion-safe:opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/5 bg-[#F5F5F7] text-neutral-800">
                <Icon className="size-5" strokeWidth={1.6} />
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-base font-medium text-[#0B0B0B]">
            ¿Quieres llevar tus decisiones al siguiente nivel?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            Agenda una sesión
          </a>
        </div>
      </div>
    </section>
  );
}
