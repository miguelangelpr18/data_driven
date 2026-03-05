import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Data Driven Consulting',
  description: 'Conoce cómo Data Driven Consulting recopila, usa y protege tu información personal.',
};

export default function PoliticaDePrivacidad() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="space-y-10 text-[#0B0B0B]">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Última actualización: enero 2025
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="text-base leading-relaxed text-neutral-600">
            En Data Driven Consulting nos comprometemos a proteger tu privacidad. Esta política describe
            cómo recopilamos, usamos y protegemos la información que nos proporcionas.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Información que recopilamos</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Recopilamos la información que tú nos proporcionas directamente, como nombre, empresa, correo
            electrónico, teléfono y mensaje, cuando utilizas el formulario de contacto de nuestro sitio web.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Uso de la información</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Utilizamos tu información únicamente para:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-neutral-600">
            <li>Responder a tus consultas y agendar sesiones de diagnóstico.</li>
            <li>Enviarte información relevante sobre nuestros servicios si lo has solicitado.</li>
            <li>Mejorar la experiencia y el contenido de nuestro sitio web.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Compartir información</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            No vendemos, alquilamos ni compartimos tu información personal con terceros, salvo cuando sea
            necesario para prestarte el servicio solicitado o cuando lo exija la ley.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Cookies y analítica</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Podemos utilizar herramientas de analítica web (como Google Analytics) para comprender cómo se
            usa nuestro sitio. Estos servicios pueden recopilar datos de forma anónima sobre tu navegación.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Seguridad</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Implementamos medidas técnicas y organizativas razonables para proteger tu información contra
            accesos no autorizados, alteración o divulgación.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Tus derechos</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Tienes derecho a acceder, corregir o solicitar la eliminación de tus datos personales. Para
            ejercer estos derechos, escríbenos a{' '}
            <a
              href="mailto:mauricio.barrera@datadriven.com.mx"
              className="font-medium text-[#0B0B0B] underline underline-offset-2 hover:text-neutral-600"
            >
              mauricio.barrera@datadriven.com.mx
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Cambios a esta política</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Podemos actualizar esta política en cualquier momento. Te notificaremos sobre cambios
            significativos publicando la nueva versión en esta página.
          </p>
        </section>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-5 py-2.5 text-sm font-medium text-[#0B0B0B] shadow-sm transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
