import type { Metadata } from 'next';
import ProjectsGallery from '@/components/ProjectsGallery';
import CtaLink from '@/components/CtaLink';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Galeria de projetos residenciais, interiores, comerciais e conceitos do Atelier Forma Viva.',
};

export default function ProjetosPage() {
  return (
    <div className="px-6 pb-32 pt-36 md:px-10 md:pb-48 md:pt-44">
      <div className="mx-auto max-w-container">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Projetos</p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-light tracking-tight md:text-5xl">
              Uma galeria de espaços que respiram forma, luz e matéria.
            </h1>
          </div>
        </header>

        <div className="mt-16 md:mt-24">
          <ProjectsGallery />
        </div>

        <div className="mt-28 border-t border-border pt-12 md:mt-40">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-2xl font-light tracking-tight md:text-3xl">
              Tem um projeto em mente?
            </h2>
            <CtaLink href="/contato">Falar com o atelier</CtaLink>
          </div>
        </div>
      </div>
    </div>
  );
}
