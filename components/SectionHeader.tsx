import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  children,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && (
        <h2 className="mt-5 font-display text-3xl font-light tracking-tight md:text-4xl">
          {title}
        </h2>
      )}
      {children && <div className="mt-5 measure text-muted">{children}</div>}
    </div>
  );
}
