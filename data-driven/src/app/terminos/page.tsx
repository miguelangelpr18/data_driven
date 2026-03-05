import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos de Servicio | Data Driven Consulting',
  description: 'Lee los términos y condiciones que rigen el uso de los servicios de Data Driven Consulting.',
};

export default function TerminosDeServicio() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="space-y-10 text-[#0B0B0B]">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Última actualización: enero 2025
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Términos de Servicio
          </h1>
          <p className="text-base leading-relaxed text-neutral-600">
            Al utilizar los servicios de Data Driven Consulting, aceptas los siguientes términos y
            condiciones. Te recomendamos leerlos detenidamente.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Descripción del servicio</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Data Driven Consulting ofrece servicios de consultoría de inteligencia de negocios, incluyendo
            limpieza y optimización de datos, definición de KPIs, implementación de dashboards y
            automatización de reportes, dirigidos a pequeñas y medianas empresas.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Uso del sitio web</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            El contenido de este sitio es de carácter informativo. No está permitido reproducir, distribuir
            o modificar el contenido sin autorización expresa de Data Driven Consulting.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Contratación de servicios</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Los servicios se prestan bajo propuesta y contrato específico acordado con cada cliente. El
            alcance, entregables y condiciones de pago se definen en dicho contrato.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Propiedad intelectual</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Los entregables generados como parte del servicio (dashboards, reportes, documentación) son
            propiedad del cliente una vez completado el pago correspondiente, salvo que se acuerde lo
            contrario por escrito.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Confidencialidad</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Nos comprometemos a mantener la confidencialidad de la información que el cliente nos
            proporcione durante la prestación del servicio y a no divulgarla a terceros sin consentimiento
            previo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Limitación de responsabilidad</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Data Driven Consulting no se responsabiliza por decisiones empresariales tomadas a partir de
            la información y los análisis proporcionados. El cliente es responsable del uso que haga de
            los entregables.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Modificaciones</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los cambios
            entrarán en vigor al publicarse en esta página.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Contacto</h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Si tienes preguntas sobre estos términos, contáctanos en{' '}
            <a
              href="mailto:mauricio.barrera@datadriven.com.mx"
              className="font-medium text-[#0B0B0B] underline underline-offset-2 hover:text-neutral-600"
            >
              mauricio.barrera@datadriven.com.mx
            </a>
            .
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
