import Image from 'next/image';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

import BackgroundLines from '@/components/BackgroundLines';

const navigationLinks = [
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' }
] as const;

const serviceItems = [
  'Limpieza y optimización de bases de datos',
  'Definición y medición de KPIs',
  'Reportes y dashboards',
  'Automatizaciones de procesos'
] as const;

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/data.drivenconsulting/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dataa-driven-consulting', Icon: Linkedin }
] as const;

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden bg-[#F5F5F7] py-16 text-[#0B0B0B] sm:py-20"
    >
      <BackgroundLines tone="light" opacity={0.06} density={140} />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-[#E5E5EA] bg-white/95 p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.05)] sm:p-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Image
                src="/logoDataDriven.png"
                alt="Data Driven Consulting"
                width={144}
                height={48}
                className="h-10 w-auto"
              />
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-800">
                  Data Driven Consulting
                </h3>
                <p className="text-sm text-neutral-600">
                  Impulsamos tu negocio con datos reales.
                </p>
              </div>
              <a
                href="#agenda"
                aria-label="Agendar una sesión con Data Driven Consulting"
                className="inline-flex items-center rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              >
                Agenda una sesión
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-neutral-800">Navegación</h3>
              <ul className="mt-4 space-y-2">
                {navigationLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      aria-label={label}
                      className="text-sm text-neutral-600 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-neutral-800">Servicios</h3>
              <ul className="mt-4 space-y-2">
                {serviceItems.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-neutral-600 transition hover:text-neutral-900">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-neutral-800">Contacto</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>
                  <a
                    href="mailto:mauricio.barrera@datadriven.com.mx"
                    aria-label="Correo electrónico mauricio.barrera@datadriven.com.mx"
                    className="flex items-center gap-3 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
                  >
                    <Mail className="h-4 w-4 text-neutral-700" />
                    mauricio.barrera@datadriven.com.mx
                </li>
                <li>
                  <a
                    href="tel:+528118019331"
                    aria-label="Teléfono +52 (81) 1801 9331"
                    className="flex items-center gap-3 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
                  >
                    <Phone className="h-4 w-4 text-neutral-700" />
                    +52 (81) 1801 9331
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100/80 transition hover:bg-neutral-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
                  >
                    <Icon className="h-5 w-5 text-neutral-700 opacity-70 transition group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#E5E5EA]" />

          <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Data Driven. Todos los derechos reservados.</p>
            <p>Desarrollado por Miguel Peña.</p>
            <div className="flex gap-4">
              <a
                href="/privacidad"
                aria-label="Política de Privacidad"
                className="transition hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
              >
                Política de Privacidad
              </a>
              <a
                href="/terminos"
                aria-label="Términos de Servicio"
                className="transition hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
