import { Mail, Phone } from 'lucide-react';
import BGLines from '@/components/BGLines';

export default function SiteFooter() {
  return (
    <footer className="relative bg-transparent pb-12 pt-20">
      <div className="container relative mx-auto max-w-6xl px-4">
        <BGLines tone="light" opacity={0.08} className="pointer-events-none origin-center scale-110" />

        <div className="relative rounded-3xl border border-[#E5E5EA] bg-white/92 p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6E6E73]">
                Data Driven Consulting
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B0B0B]">
                Diseño de decisiones minimalistas.
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-[#6E6E73]">
                Traducimos datos complejos en experiencias claras y accionables, con el mismo cuidado
                de detalle que esperarías de un producto Apple.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#0B0B0B]">Contacto</h4>
              <div className="space-y-3 text-sm text-[#6E6E73]">
                <a
                  href="mailto:hola@datadriven.com"
                  className="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2 transition-colors duration-200 hover:border-[#E5E5EA] hover:bg-[#F5F5F7] hover:text-[#0B0B0B]"
                >
                  <Mail className="size-4 text-[#0B0B0B]" />
                  hola@datadriven.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2 transition-colors duration-200 hover:border-[#E5E5EA] hover:bg-[#F5F5F7] hover:text-[#0B0B0B]"
                >
                  <Phone className="size-4 text-[#0B0B0B]" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E5EA] pt-8 text-xs text-[#6E6E73] md:flex-row">
            <p>© 2024 Data Driven. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-opacity duration-200 hover:opacity-70">
                Política de Privacidad
              </a>
              <a href="#" className="transition-opacity duration-200 hover:opacity-70">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
