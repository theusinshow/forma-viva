import Link from 'next/link';
import { nav, site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto flex max-w-container flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="measure">
            <p className="font-display text-2xl font-light uppercase tracking-wide text-text md:text-3xl">
              {site.name}
            </p>
            <p className="mt-4 text-sm text-muted">{site.tagline}</p>
          </div>

          <nav aria-label="Rodapé" className="-my-2 flex flex-wrap gap-x-8 gap-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline py-2 font-display text-xs uppercase tracking-label text-muted hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 text-sm text-muted md:flex-row md:items-center">
          <div className="-my-2 flex flex-wrap gap-x-8 gap-y-1">
            <a className="link-underline py-2 hover:text-text" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <a
              className="link-underline py-2 hover:text-text"
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="link-underline py-2 hover:text-text"
              href={site.contact.instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              {site.contact.instagram}
            </a>
          </div>
          <p className="text-xs uppercase tracking-label">
            © {year} {site.name} — projeto fictício de portfólio
          </p>
        </div>
      </div>
    </footer>
  );
}
