'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms before revealing (stagger). */
  delay?: number;
};

/**
 * Lightweight on-scroll reveal using IntersectionObserver.
 * Content is visible by default; the hidden state only applies when JS + motion
 * are active (see `.js .reveal` in globals.css), so it is SSR/no-JS safe.
 */
export default function Reveal({ children, as, className = '', delay = 0 }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            window.setTimeout(() => target.classList.add('is-visible'), delay);
            io.unobserve(entry.target);
          } else if (entry.boundingClientRect.bottom < 0) {
            // Already scrolled past (reload at offset / fast jump) — show, no anim.
            target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
