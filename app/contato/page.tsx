import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Frame from '@/components/Frame';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Vamos conversar sobre o seu próximo espaço. Projetos residenciais, interiores e reformas autorais.',
};

export default function ContatoPage() {
  return (
    <div className="px-6 pb-32 pt-36 md:px-10 md:pb-48 md:pt-44">
      <div className="mx-auto max-w-container">
        <header className="max-w-3xl">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-5 font-display text-4xl font-light tracking-tight md:text-6xl">
            Vamos conversar sobre o seu próximo espaço.
          </h1>
          <p className="mt-6 measure text-muted">
            Projetos residenciais, interiores e reformas autorais. Conte um pouco sobre o
            momento do seu projeto.
          </p>
        </header>

        <div className="mt-20 grid grid-cols-12 gap-12 md:mt-28">
          {/* Canais + formulário */}
          <div className="col-span-12 md:col-span-7">
            <div className="mb-12 flex flex-col gap-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="link-underline w-fit text-lg text-text"
              >
                {site.contact.email}
              </a>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="link-underline w-fit text-lg text-text"
              >
                WhatsApp — {site.contact.whatsapp}
              </a>
              <a
                href={site.contact.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="link-underline w-fit text-lg text-text"
              >
                {site.contact.instagram}
              </a>
            </div>

            <ContactForm />
          </div>

          {/* Imagem discreta */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Frame
              image={projects[2].gallery[0]}
              aspect="aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
