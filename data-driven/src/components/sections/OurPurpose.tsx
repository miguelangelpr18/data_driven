import BackgroundLines from '@/components/BackgroundLines';
import { BarChart3, ShieldCheck, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: 'Claridad sobre lo importante',
    description: 'Hacemos visibles las métricas que mueven tu negocio y eliminamos el ruido.',
    Icon: BarChart3,
    delay: 50
  },
  {
    title: 'Control con información confiable',
    description: 'Estandarizamos y organizamos los datos para que cada decisión tenga respaldo.',
    Icon: ShieldCheck,
    delay: 100
  },
  {
    title: 'Crecimiento sostenible',
    description: 'Medimos, aprendemos e iteramos para mejorar resultados de forma constante.',
    Icon: TrendingUp,
    delay: 150
  }
] as const;

export default function OurPurpose() {
  return (
    <section
      id="para-que"
      aria-labelledby="para-que-heading"
      data-theme="light"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <BackgroundLines tone="light" opacity={0.08} density={140} />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="para-que-heading"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0B0B0B] sm:text-4xl lg:text-[3.25rem]"
          >
            Para qué lo hacemos
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
            Impulsamos a las PyMEs a tomar decisiones estratégicas con base en datos, no suposiciones. <br className="hidden sm:block" />
            Porque el conocimiento, cuando se interpreta correctamente, genera crecimiento sostenible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {pillars.map(({ title, description, Icon, delay }) => (
            <article
              key={title}
              className="group flex h-full flex-col gap-5 rounded-3xl border border-[#E5E5EA] bg-white/90 p-6 text-left shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] sm:p-8 motion-safe:animate-[fadeUp_500ms_ease-out_1] motion-safe:opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
              style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/5 bg-[#F5F5F7] text-neutral-800">
                <Icon className="size-5" strokeWidth={1.6} />
              </span>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
