'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

const NAV = [
  { label: '¿Quiénes Somos?', href: '/#quienes-somos', id: 'quienes-somos' },
  { label: 'Proyectos', href: '/#proyectos', id: 'proyectos' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' }
] as const;

type NavItem = (typeof NAV)[number];

function useActiveSection(items: readonly NavItem[]) {
  const sectionIds = useMemo(() => items.map(({ id }) => id), [items]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.05
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

function NavLink({ item, isActive, onNavigate }: { item: NavItem; isActive: boolean; onNavigate?: () => void }) {
  return (
    <Link
      href={item.href}
      aria-current={isActive ? 'location' : undefined}
      className={cn(
        'rounded-full px-3 py-2 text-[15px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50',
        isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
      )}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const active = useActiveSection(NAV);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={cn(
        'sticky top-0 z-50 w-full backdrop-blur-md transition-all',
        scrolled ? 'border-b border-neutral-200/60 bg-white/75' : 'bg-white/60'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
          {!logoError ? (
            <Image
              src="/logoDataDriven.png"
              alt="Data Driven"
              width={36}
              height={36}
              priority
              className="shrink-0"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-lg font-semibold tracking-wide">DATA DRIVEN</span>
          )}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <NavLink key={item.id} item={item} isActive={active === item.id} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#agenda"
            className="hidden items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 sm:inline-flex"
          >
            Agenda una sesión
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60 lg:hidden"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} aria-hidden="true" />
          <div className="absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-4 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-neutral-900">Menú</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
                className="rounded-md p-2 text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Menú móvil">
              {NAV.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  isActive={active === item.id}
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </nav>

            <Link
              href="#agenda"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              Agenda una sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
