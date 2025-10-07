import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  tone?: 'light' | 'dark';
}

export default function Section({ 
  children, 
  title, 
  subtitle, 
  className,
  id,
  tone = 'light'
}: SectionProps) {
  const headingClass = tone === 'dark' ? 'text-white' : 'text-[#0B0B0B]';
  const subtitleClass = tone === 'dark' ? 'text-gray-300' : 'text-[#6E6E73]';

  return (
    <section 
      id={id}
      className={cn(
        'py-20 md:py-28',
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-16 space-y-6 text-left">
            {title && (
              <h2
                className={cn(
                  'text-balance text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight leading-tight',
                  headingClass
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('max-w-3xl text-lg sm:text-xl leading-relaxed text-pretty', subtitleClass)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
