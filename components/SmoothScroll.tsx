'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Smooth scroll (Lenis) + GSAP ScrollTrigger sync.
 * Disabled automatically when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Mark JS as active so reveal styles apply only with JS enabled.
    document.documentElement.classList.add('js');

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove('js');
    };
  }, []);

  return null;
}
