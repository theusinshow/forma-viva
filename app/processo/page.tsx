import type { Metadata } from 'next';
import ProcessStep from '@/components/ProcessStep';
import CtaLink from '@/components/CtaLink';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Processo',
  description:
    'Cinco etapas — escuta, conceito, projeto, detalhamento e acompanhamento — que sustentam a estética com método.',
};

const steps = [
  {
    number: '01',
    title: 'Escuta',
    text: 'Antes da forma, entendemos o contexto, a rotina e os desejos de quem irá habitar o espaço.',
  },
  {
    number: '02',
    title: 'Conceito',
    text: 'A partir da escuta, definimos uma direção espacial clara para orientar forma, materiais e atmosfera.',
  },
  {
    number: '03',
    title: 'Projeto',
    text: 'A ideia ganha organização, proporção e estrutura por meio de plantas, estudos e decisões visuais.',
  },
  {
    number: '04',
    title: 'Detalhamento',
    text: 'Cada escolha é refinada para tornar o projeto executável, coerente e fiel à intenção inicial.',
  },
  {
    number: '05',
    title: 'Acompanhamento',
    text: 'O processo segue próximo para preservar a qualidade do projeto durante sua materialização.',
  },
];

// One detail image per step, drawn from the project sets.
const stepImages = [
  projects[0].gallery[2],
  projects[1].gallery[1],
  projects[2].gallery[2],
  projects[3].gallery[1],
  projects[4].gallery[2],
];

export default function ProcessoPage() {
  return (
    <div>
      <header className="px-6 pb-12 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-container">
          <p className="eyebrow">Processo</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-light tracking-tight md:text-5xl">
            Existe método por trás da estética.
          </h1>
        </div>
      </header>

      {steps.map((step, idx) => (
        <ProcessStep
          key={step.number}
          number={step.number}
          title={step.title}
          text={step.text}
          image={stepImages[idx]}
          flip={idx % 2 === 1}
          paper={idx === 2}
        />
      ))}

      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto flex max-w-container flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-3xl font-light tracking-tight md:text-4xl">
            Pronto para começar pela escuta?
          </h2>
          <CtaLink href="/contato" variant="solid">
            Falar com o atelier
          </CtaLink>
        </div>
      </section>
    </div>
  );
}
