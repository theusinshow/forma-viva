'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { nav, site } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll, inert the rest of the page, manage focus while the menu is open.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';
    const outside = [document.getElementById('main'), document.querySelector('footer')];
    outside.forEach((el) => el?.setAttribute('inert', ''));

    // Focusable set = menu links + the toggle (which doubles as the close
    // control, living in the header outside the dialog), so Tab can reach it.
    const focusables = () => {
      const items = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );
      if (toggleRef.current) items.push(toggleRef.current);
      return items;
    };
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      // Trap focus within the menu.
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;
      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      outside.forEach((el) => el?.removeAttribute('inert'));
      toggleRef.current?.focus();
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
          {site.name}
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
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="-m-3 p-3 font-display text-xs uppercase tracking-label text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
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
