import type { Metadata } from 'next';
import Frame from '@/components/Frame';
import CtaLink from '@/components/CtaLink';
import Reveal from '@/components/Reveal';
import { getProject, projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Atelier',
  description:
    'Projetos residenciais e interiores a partir da escuta, do contexto e da relação entre forma, luz e uso.',
};

const especialidades = [
  'Arquitetura residencial',
  'Interiores',
  'Reformas autorais',
  'Consultoria de projeto',
  'Acompanhamento estético',
];

const valores = ['Escuta', 'Proporção', 'Materialidade', 'Clareza', 'Tempo', 'Precisão'];

// Abertura usa um projeto distinto da Home (que abre com Casa Horizonte).
const aberturaImage = (getProject('refugio-pedra') ?? projects[0]).hero;

export default function AtelierPage() {
  return (
    <div className="pt-20">
      {/* Imagem grande de abertura */}
      <Frame
        image={aberturaImage}
        aspect="h-[70vh] w-full"
        sizes="100vw"
        priority
      />

      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-container">
          {/* Texto institucional */}
          <section className="grid grid-cols-12 gap-10 py-28 md:py-40">
            <Reveal className="col-span-12 md:col-span-3">
              <h2 className="eyebrow">O Atelier</h2>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-8">
              <p className="font-display text-2xl font-light leading-snug tracking-tight md:text-3xl">
                O Atelier Forma Viva desenvolve projetos residenciais e interiores com foco em
                proporção, materialidade e experiência espacial.
              </p>
              <p className="mt-6 max-w-2xl text-muted">
                Cada projeto é construído a partir da escuta, do contexto e da relação entre
                forma, luz e uso. Trabalhamos com poucas obras por vez, para sustentar a
                qualidade do projeto do conceito ao acompanhamento.
              </p>
            </Reveal>
          </section>

          {/* Especialidades */}
          <section className="grid grid-cols-12 gap-10 border-t border-border py-20 md:py-28">
            <Reveal className="col-span-12 md:col-span-3">
              <h2 className="eyebrow">Especialidades</h2>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-8">
              <ul className="flex flex-col">
                {especialidades.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border py-5 font-display text-xl font-light tracking-tight first:border-t md:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* Valores */}
          <section className="grid grid-cols-12 gap-10 border-t border-border py-20 md:py-28">
            <Reveal className="col-span-12 md:col-span-3">
              <h2 className="eyebrow">Valores</h2>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-8">
              <ul className="flex flex-wrap gap-x-10 gap-y-4">
                {valores.map((v) => (
                  <li key={v} className="font-display text-2xl font-extralight tracking-tight md:text-3xl">
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-start justify-between gap-8 border-t border-border py-28 md:flex-row md:items-end md:py-40">
            <h2 className="max-w-2xl font-display text-3xl font-light tracking-tight md:text-4xl">
              Conte sobre o espaço que você quer habitar.
            </h2>
            <CtaLink href="/contato" variant="solid">
              Falar com o atelier
            </CtaLink>
          </section>
        </div>
      </div>
    </div>
  );
}
