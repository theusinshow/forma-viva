import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        primary: { DEFAULT: 'var(--primary)', fg: 'var(--primary-fg)' },
        accent: 'var(--accent)',
        paper: 'var(--paper)',
      },
      fontFamily: {
        display: ['var(--font-raleway)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: { DEFAULT: 'var(--radius)' },
      maxWidth: { container: 'var(--container)' },
      letterSpacing: { eyebrow: '0.25em', label: '0.2em' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.25em' }],
      },
    },
  },
  plugins: [],
};

export default config;
