import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import CtaLink from '@/components/CtaLink';
import FichaTecnica from '@/components/FichaTecnica';
import CaseGallery from '@/components/CaseGallery';
import NextProjectBlock from '@/components/NextProjectBlock';
import Reveal from '@/components/Reveal';
import { getAdjacent, getProject, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.category}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${project.category}`,
      description: project.summary,
      images: [{ url: project.hero.src }],
    },
  };
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { next } = getAdjacent(project.slug);

  return (
    <article>
      <Hero
        image={project.hero}
        cornerTopLeft={<p className="eyebrow text-text/80">{project.category}</p>}
        cornerBottomLeft={
          <h1 className="font-display text-4xl font-extralight uppercase tracking-wide text-text md:text-6xl">
            {project.name}
          </h1>
        }
        cornerBottomRight={
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="font-display text-xs uppercase tracking-label text-text/85">
              {project.location} · {project.year}
            </p>
            <CtaLink href="#conceito">Explorar projeto</CtaLink>
          </div>
        }
      />

      {/* Conceito + Ficha técnica */}
      <section id="conceito" className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-container grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="eyebrow">Conceito</h2>
            <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lg text-text/90">
              {project.concept.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9">
            <h2 className="eyebrow mb-6">Ficha técnica</h2>
            <FichaTecnica project={project} />
          </Reveal>
        </div>
      </section>

      {/* Galeria principal */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-container">
          <CaseGallery images={project.gallery} />
        </div>
      </section>

      {/* Materialidade */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-container grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <h2 className="eyebrow">Materialidade</h2>
            <p className="mt-6 measure text-lg text-text/90">{project.materiality.text}</p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6 md:col-start-7">
            <ul className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
              {project.materiality.materials.map((m) => (
                <li key={m} className="bg-bg p-6 font-display text-sm uppercase tracking-label">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Próximo projeto */}
      <NextProjectBlock project={next} />

      {/* CTA contato */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto flex max-w-container flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-3xl font-light tracking-tight md:text-4xl">
            Quer desenvolver um projeto com este cuidado?
          </h2>
          <CtaLink href="/contato" variant="solid">
            Falar com o atelier
          </CtaLink>
        </div>
      </section>
    </article>
  );
}
