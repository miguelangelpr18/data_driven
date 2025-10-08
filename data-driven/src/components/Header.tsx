'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

const NAV = [
  { label: '¿Quiénes Somos?', href: '/#quienes-somos', id: 'quienes-somos' },
  { label: 'Proyectos', href: '/#proyectos', id: 'proyectos' },
  { label: 'Servicios', href: '/#servicios', id: 'servicios' },
  { label: 'Contacto', href: '/#contacto', id: 'contacto' }
] as const;

type NavItem = (typeof NAV)[number];
type ThemeMode = 'light' | 'dark';

function useActiveSection(items: readonly NavItem[]) {
  const sectionIds = useMemo(() => items.map(({ id }) => id), [items]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionIds.length) return;

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [sectionIds]);

  return active;
}

function NavLink({
  item,
  isActive,
  theme,
  variant = 'desktop',
  onNavigate
}: {
  item: NavItem;
  isActive: boolean;
  theme: ThemeMode;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}) {
  const isDark = theme === 'dark';

  const baseClass =
    variant === 'desktop'
      ? 'relative inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium'
      : 'relative w-full rounded-full px-4 py-3 text-left text-base font-medium';

  const colorClass = isActive
    ? isDark
      ? 'text-white'
      : 'text-neutral-900'
    : isDark
      ? 'text-white/70 hover:text-white'
      : 'text-neutral-600 hover:text-neutral-900';

  const focusRing =
    variant === 'desktop'
      ? isDark
        ? 'focus-visible:ring-white/30'
        : 'focus-visible:ring-neutral-400/60'
      : isDark
        ? 'focus-visible:ring-white/30'
        : 'focus-visible:ring-neutral-400/60';

  return (
    <Link
      href={item.href}
      aria-current={isActive ? 'location' : undefined}
      className={cn(
        baseClass,
        colorClass,
        'transition-colors duration-300 focus:outline-none focus-visible:ring-2',
        focusRing
      )}
      onClick={onNavigate}
    >
      {item.label}
      {variant === 'desktop' && (
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-x-2 bottom-1 h-[2px] rounded-full transition-opacity duration-300',
            isDark ? 'bg-white/80' : 'bg-neutral-900/80',
            isActive ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');
  const activeSection = useActiveSection(NAV);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-theme]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const nextTheme: ThemeMode = visible.target.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
          setTheme((prev) => (prev === nextTheme ? prev : nextTheme));
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: '-20% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const headerClass = cn(
    'sticky top-0 z-[70] w-full border-b border-transparent transition-[background-color,border-color,box-shadow,backdrop-filter,color] duration-300 ease-out',
    isDark ? 'text-white' : 'text-neutral-900',
    scrolled
      ? isDark
        ? 'border-white/10 bg-black/25 backdrop-blur-md'
        : 'border-black/10 bg-white/70 backdrop-blur-md shadow-[0_12px_28px_rgba(15,15,15,0.08)]'
      : 'bg-transparent'
  );

  const innerClass = cn(
    'mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-[padding] duration-300 ease-out',
    scrolled ? 'py-3 sm:py-3.5' : 'py-4 sm:py-5'
  );

  const ctaClass = isDark
    ? 'hidden sm:inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30'
    : 'hidden sm:inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30';

  const menuButtonClass = cn(
    'inline-flex items-center justify-center rounded-md p-2 transition focus:outline-none focus-visible:ring-2 lg:hidden',
    isDark
      ? 'text-white hover:bg-white/10 focus-visible:ring-white/30'
      : 'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400/60'
  );

  const drawerClass = cn(
    'absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-6 border-l backdrop-blur-xl p-6',
    isDark
      ? 'border-white/10 bg-black/75 text-white'
      : 'border-black/10 bg-white/80 text-neutral-900 shadow-[0_18px_44px_rgba(15,15,15,0.12)]'
  );

  return (
    <header role="banner" className={headerClass}>
      <div className={innerClass}>
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          {!logoError ? (
            <Image
              src="/logoDataDriven.png"
              alt="Data Driven"
              width={36}
              height={36}
              priority
              className={cn(
                'h-9 w-9 shrink-0 rounded-xl object-contain transition duration-300',
                isDark ? 'bg-white/10 p-1 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]' : ''
              )}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              className={cn(
                'text-sm font-semibold uppercase tracking-[0.48em]',
                isDark ? 'text-white' : 'text-neutral-900'
              )}
            >
              DATA DRIVEN
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {NAV.map((item) => (
            <NavLink key={item.id} item={item} theme={theme} isActive={activeSection === item.id} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#agenda" className={ctaClass} aria-label="Agenda una sesión con nuestro equipo">
            Agenda una sesión
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={menuButtonClass}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="transition-colors">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[65] lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/35 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={drawerClass}>
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">{isDark ? 'Menú' : 'Menú'}</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'rounded-md p-2 transition focus:outline-none focus-visible:ring-2',
                  isDark
                    ? 'text-white hover:bg-white/10 focus-visible:ring-white/30'
                    : 'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-300'
                )}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav id="mobile-nav" className="flex flex-col gap-2" aria-label="Navegación principal móvil">
              {NAV.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  theme={theme}
                  isActive={activeSection === item.id}
                  variant="mobile"
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </nav>

            <Link
              href="/#agenda"
              onClick={() => setMenuOpen(false)}
              className={cn(
                'mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2',
                isDark
                  ? 'border border-white/40 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/30'
                  : 'bg-black text-white hover:bg-neutral-900 focus-visible:ring-black/30'
              )}
            >
              Agenda una sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
