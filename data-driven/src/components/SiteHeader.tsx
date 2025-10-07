'use client';

const primaryText = 'DATA DRIVEN';
const secondaryText = 'CONSULTING';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E5EA]/70 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <a
          href="#hero"
          className="mx-auto flex flex-col items-center justify-center text-center text-[#0B0B0B] transition-opacity duration-200 hover:opacity-70"
        >
          <span className="block text-sm font-medium tracking-[0.65em] md:text-base lg:text-lg">
            {primaryText}
          </span>
          <span className="block text-sm font-medium tracking-[0.65em] md:text-base lg:text-lg">
            {secondaryText}
          </span>
        </a>
      </div>
    </header>
  );
}
