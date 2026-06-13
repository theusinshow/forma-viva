import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'ghost' | 'solid';

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className'>;

/**
 * Discreet, premium CTA. Ghost by default (editorial); solid accent reserved
 * for final conversion. Arrow slides on hover.
 */
export default function CtaLink({
  href,
  children,
  variant = 'ghost',
  className = '',
  ...rest
}: CtaLinkProps) {
  const base =
    'group inline-flex items-center gap-3 font-display text-xs font-normal uppercase tracking-label transition-colors duration-300 ease-editorial';
  const styles =
    variant === 'solid'
      ? 'bg-accent px-6 py-3 text-primary-fg hover:bg-text'
      : 'text-text hover:text-accent';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...rest}>
      <span className={variant === 'ghost' ? 'link-underline' : ''}>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
