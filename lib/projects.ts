/**
 * Project content (fictitious — portfolio demo).
 *
 * Images use deterministic grayscale placeholders (picsum.photos) to keep the
 * editorial mood consistent without real assets. To use real photography, replace
 * each `src` with an optimized image URL/import — see docs/ai/CONTENT_PENDING.md.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  /** Aspect orientation used by the gallery layout. */
  orientation: 'landscape' | 'portrait' | 'square';
};

export type Project = {
  slug: string;
  name: string;
  category: 'Residencial' | 'Interiores' | 'Comercial' | 'Reformas' | 'Conceitos';
  location: string;
  year: number;
  area: string;
  service: string;
  status: string;
  /** One-line concept used in cards and meta descriptions. */
  summary: string;
  /** Concept paragraphs for the case page. */
  concept: string[];
  materiality: { text: string; materials: string[] };
  hero: GalleryImage;
  gallery: GalleryImage[];
};

const ph = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const projects: Project[] = [
  {
    slug: 'casa-horizonte',
    name: 'Casa Horizonte',
    category: 'Residencial',
    location: 'Florianópolis, SC',
    year: 2026,
    area: '320 m²',
    service: 'Arquitetura + Interiores',
    status: 'Conceito fictício para portfólio',
    summary: 'Luz natural, concreto aparente e aberturas generosas para a paisagem.',
    concept: [
      'A Casa Horizonte nasce da relação entre luz natural, concreto aparente e aberturas generosas para a paisagem.',
      'O projeto busca criar uma experiência de moradia silenciosa, onde os espaços se conectam sem perder intimidade.',
    ],
    materiality: {
      text: 'A materialidade foi pensada para criar continuidade entre interior e exterior, equilibrando textura, luz e permanência.',
      materials: ['Concreto', 'Madeira', 'Vidro', 'Luz natural'],
    },
    hero: { src: ph('horizonte-hero', 2400, 1350), alt: 'Fachada da Casa Horizonte ao entardecer', orientation: 'landscape' },
    gallery: [
      { src: ph('horizonte-1', 2000, 1333), alt: 'Vista externa da Casa Horizonte', orientation: 'landscape' },
      { src: ph('horizonte-2', 1200, 1600), alt: 'Sala de estar com pé-direito duplo', orientation: 'portrait' },
      { src: ph('horizonte-3', 1600, 1600), alt: 'Detalhe do concreto aparente', orientation: 'square' },
      { src: ph('horizonte-4', 2000, 1333), alt: 'Integração entre cozinha e jardim', orientation: 'landscape' },
      { src: ph('horizonte-5', 1200, 1600), alt: 'Suíte com abertura para a paisagem', orientation: 'portrait' },
      { src: ph('horizonte-6', 2000, 1333), alt: 'Área externa ao anoitecer', orientation: 'landscape' },
    ],
  },
  {
    slug: 'apartamento-linha',
    name: 'Apartamento Linha',
    category: 'Interiores',
    location: 'Balneário Camboriú, SC',
    year: 2026,
    area: '140 m²',
    service: 'Interiores',
    status: 'Conceito fictício para portfólio',
    summary: 'Interiores minimalistas, madeira clara e proporção.',
    concept: [
      'O Apartamento Linha parte de uma planta enxuta para criar interiores minimalistas, onde a madeira clara conduz a leitura dos ambientes.',
      'Cada elemento foi reduzido ao essencial para preservar proporção, silêncio e continuidade visual.',
    ],
    materiality: {
      text: 'A paleta de materiais mantém calor e clareza: madeira clara, linho e tons neutros em superfícies contínuas.',
      materials: ['Madeira clara', 'Linho', 'Pedra clara', 'Metal fosco'],
    },
    hero: { src: ph('linha-hero', 2400, 1350), alt: 'Living do Apartamento Linha', orientation: 'landscape' },
    gallery: [
      { src: ph('linha-1', 2000, 1333), alt: 'Estar integrado à sala de jantar', orientation: 'landscape' },
      { src: ph('linha-2', 1200, 1600), alt: 'Detalhe de marcenaria em madeira clara', orientation: 'portrait' },
      { src: ph('linha-3', 1600, 1600), alt: 'Cozinha minimalista', orientation: 'square' },
      { src: ph('linha-4', 2000, 1333), alt: 'Quarto com luz difusa', orientation: 'landscape' },
      { src: ph('linha-5', 1200, 1600), alt: 'Detalhe de iluminação', orientation: 'portrait' },
    ],
  },
  {
    slug: 'casa-patio',
    name: 'Casa Pátio',
    category: 'Residencial',
    location: 'Garopaba, SC',
    year: 2025,
    area: '280 m²',
    service: 'Arquitetura + Paisagismo',
    status: 'Conceito fictício para portfólio',
    summary: 'Integração entre jardim interno, luz e privacidade.',
    concept: [
      'A Casa Pátio organiza-se em torno de um jardim interno que traz luz e ar para o centro da casa.',
      'O pátio cria privacidade sem fechar a moradia, equilibrando recolhimento e abertura.',
    ],
    materiality: {
      text: 'Texturas brutas e vegetação convivem para sustentar a sensação de refúgio dentro do lote urbano.',
      materials: ['Concreto', 'Vegetação', 'Pedra natural', 'Madeira'],
    },
    hero: { src: ph('patio-hero', 2400, 1350), alt: 'Pátio interno da Casa Pátio', orientation: 'landscape' },
    gallery: [
      { src: ph('patio-1', 2000, 1333), alt: 'Jardim interno com luz zenital', orientation: 'landscape' },
      { src: ph('patio-2', 1200, 1600), alt: 'Circulação ao redor do pátio', orientation: 'portrait' },
      { src: ph('patio-3', 1600, 1600), alt: 'Detalhe de vegetação e pedra', orientation: 'square' },
      { src: ph('patio-4', 2000, 1333), alt: 'Estar voltado para o pátio', orientation: 'landscape' },
      { src: ph('patio-5', 1200, 1600), alt: 'Suíte com privacidade', orientation: 'portrait' },
    ],
  },
  {
    slug: 'refugio-pedra',
    name: 'Refúgio Pedra',
    category: 'Conceitos',
    location: 'Serra Catarinense, SC',
    year: 2025,
    area: '210 m²',
    service: 'Arquitetura (conceito)',
    status: 'Conceito fictício para portfólio',
    summary: 'Arquitetura silenciosa, pedra natural e paisagem.',
    concept: [
      'O Refúgio Pedra é um estudo de arquitetura silenciosa na serra, ancorado na pedra natural e na paisagem.',
      'A construção busca desaparecer no terreno, oferecendo abrigo sem disputar com o entorno.',
    ],
    materiality: {
      text: 'A pedra local define estrutura e atmosfera; a luz entra de forma controlada para reforçar o recolhimento.',
      materials: ['Pedra natural', 'Madeira escura', 'Vidro', 'Aço'],
    },
    hero: { src: ph('pedra-hero', 2400, 1350), alt: 'Volume em pedra na paisagem da serra', orientation: 'landscape' },
    gallery: [
      { src: ph('pedra-1', 2000, 1333), alt: 'Implantação na encosta', orientation: 'landscape' },
      { src: ph('pedra-2', 1200, 1600), alt: 'Detalhe da alvenaria de pedra', orientation: 'portrait' },
      { src: ph('pedra-3', 1600, 1600), alt: 'Interior com luz controlada', orientation: 'square' },
      { src: ph('pedra-4', 2000, 1333), alt: 'Vista para a paisagem da serra', orientation: 'landscape' },
    ],
  },
  {
    slug: 'studio-comercial-norte',
    name: 'Studio Comercial Norte',
    category: 'Comercial',
    location: 'São José, SC',
    year: 2026,
    area: '95 m²',
    service: 'Arquitetura comercial + Interiores',
    status: 'Conceito fictício para portfólio',
    summary: 'Espaço comercial compacto com linguagem premium.',
    concept: [
      'O Studio Comercial Norte trata um espaço compacto com linguagem premium, otimizando fluxo e percepção de valor.',
      'A composição usa poucos materiais e muita ordem para sustentar uma marca sofisticada.',
    ],
    materiality: {
      text: 'Superfícies contínuas e iluminação pontual constroem uma atmosfera precisa em poucos metros quadrados.',
      materials: ['Microcimento', 'Metal', 'Vidro', 'Iluminação pontual'],
    },
    hero: { src: ph('norte-hero', 2400, 1350), alt: 'Interior do Studio Comercial Norte', orientation: 'landscape' },
    gallery: [
      { src: ph('norte-1', 2000, 1333), alt: 'Área de atendimento', orientation: 'landscape' },
      { src: ph('norte-2', 1200, 1600), alt: 'Detalhe de balcão em metal', orientation: 'portrait' },
      { src: ph('norte-3', 1600, 1600), alt: 'Composição de iluminação', orientation: 'square' },
      { src: ph('norte-4', 2000, 1333), alt: 'Vitrine e fachada', orientation: 'landscape' },
    ],
  },
];

export const categories = [
  'Todos',
  'Residencial',
  'Interiores',
  'Comercial',
  'Reformas',
  'Conceitos',
] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string): { next: Project } {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  return { next };
}

/** Tiny dark blur placeholder for next/image. */
export const DARK_BLUR =
  'data:image/gif;base64,R0lGODlhAQABAPAAABoaGAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
