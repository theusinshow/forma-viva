'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6"
      >
        {/* Logo — top-left corner */}
        <Link
          href="/"
          className="font-display text-sm font-light uppercase tracking-label text-text"
          onClick={() => setOpen(false)}
        >
          {site.name.replace('Atelier ', 'Atelier ')}
        </Link>

        {/* Links — top-right corner (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="link-underline font-display text-xs font-normal uppercase tracking-label text-text/90 hover:text-text"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="font-display text-xs uppercase tracking-label text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-0 z-40 flex h-svh flex-col justify-center gap-8 bg-bg px-6 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-3xl font-light uppercase tracking-wide text-text"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
