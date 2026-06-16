import Hero from '@/components/Hero';
import CtaLink from '@/components/CtaLink';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import Frame from '@/components/Frame';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

const featured = projects.slice(0, 4);
const processSummary = [
  ['01', 'Escuta'],
  ['02', 'Conceito'],
  ['03', 'Projeto'],
  ['04', 'Detalhamento'],
  ['05', 'Acompanhamento'],
];

export default function HomePage() {
  return (
    <>
      <Hero
        image={projects[0].hero}
        cornerTopLeft={<p className="eyebrow text-text/80">Arquitetura · SC</p>}
        cornerBottomLeft={
          <h1 className="font-display text-4xl font-extralight uppercase tracking-wide text-text md:text-6xl">
            {site.name}
          </h1>
        }
        cornerBottomRight={
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="measure text-sm text-text/85 md:text-right">{site.tagline}</p>
            <div className="flex gap-6">
              <CtaLink href="/projetos">Ver projetos</CtaLink>
              <CtaLink href="/contato">Falar com o atelier</CtaLink>
            </div>
          </div>
        }
      />

      {/* Frase institucional */}
      <section className="px-6 py-28 md:px-10 md:py-44">
        <Reveal className="mx-auto max-w-container">
          <p className="max-w-4xl font-display text-2xl font-light leading-snug tracking-tight text-text md:text-4xl">
            Projetamos casas, interiores e reformas a partir da relação entre proporção,
            materialidade e experiência cotidiana.
          </p>
        </Reveal>
      </section>

      {/* Projetos em destaque */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-container">
          <SectionHeader
            eyebrow="Projetos em destaque"
            className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between"
          >
            <div className="md:ml-auto">
              <CtaLink href="/projetos">Ver todos os projetos</CtaLink>
            </div>
          </SectionHeader>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 md:mt-20 md:grid-cols-2 md:gap-y-28">
            {featured.map((project, idx) => (
              <Reveal key={project.slug} className={idx % 3 === 1 ? 'md:mt-24' : ''}>
                <ProjectCard project={project} priority={idx === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre resumido */}
      <section className="px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-container grid-cols-12 items-center gap-10">
          <Reveal className="col-span-12 md:col-span-6">
            <Frame
              image={projects[3].gallery[0]}
              aspect="aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:col-start-8">
            <h2 className="eyebrow">O Atelier</h2>
            <p className="mt-6 measure text-lg text-text/90">
              O Atelier Forma Viva desenvolve projetos residenciais e interiores com foco em
              proporção, materialidade e experiência espacial.
            </p>
            <p className="mt-4 measure text-muted">
              Cada projeto é construído a partir da escuta, do contexto e da relação entre
              forma, luz e uso.
            </p>
            <div className="mt-8">
              <CtaLink href="/atelier">Conhecer o atelier</CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Processo resumido */}
      <section className="border-y border-border px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-container">
          <SectionHeader eyebrow="Processo" title="Método antes da forma" />
          <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-5">
            {processSummary.map(([n, label]) => (
              <li key={n}>
                <span className="font-display text-3xl font-extralight text-text/25 md:text-4xl">
                  {n}
                </span>
                <p className="mt-3 font-display text-sm uppercase tracking-label text-text">
                  {label}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <CtaLink href="/processo">Ver o processo completo</CtaLink>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto flex max-w-container flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-3xl font-light tracking-tight md:text-5xl">
            Vamos conversar sobre o seu próximo espaço.
          </h2>
          <CtaLink href="/contato" variant="solid">
            Falar com o atelier
          </CtaLink>
        </div>
      </section>
    </>
  );
}
