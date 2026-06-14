/**
 * Project content (fictitious — portfolio demo).
 *
 * Images are real photography stored locally under `public/projetos/<slug>/`.
 * Each project folder follows the convention `hero.jpg` + `01.jpg`, `02.jpg`…
 * in gallery order. The `orientation` field drives the editorial layout, so it
 * must match the real aspect of each file.
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
    summary: 'Telhado-jardim, madeira e tela metálica para uma casa que se abre ao horizonte.',
    concept: [
      'A Casa Horizonte ocupa um lote em aclive e organiza-se em torno de um pátio com piscina, protegido por um volume suspenso de madeira e tela metálica.',
      'O telhado-jardim integra a arquitetura à encosta, enquanto as aberturas generosas conduzem o olhar para a paisagem ao entardecer.',
    ],
    materiality: {
      text: 'Concreto, madeira e tela metálica convivem com o verde do telhado-jardim, equilibrando peso, filtro de luz e continuidade com o terreno.',
      materials: ['Concreto', 'Madeira', 'Tela metálica', 'Telhado-jardim'],
    },
    hero: {
      src: '/projetos/casa-horizonte/hero.jpg',
      alt: 'Fachada da Casa Horizonte com telhado-jardim ao entardecer',
      orientation: 'landscape',
    },
    gallery: [
      { src: '/projetos/casa-horizonte/01.jpg', alt: 'Pátio interno com piscina e estrutura de madeira', orientation: 'landscape' },
      { src: '/projetos/casa-horizonte/02.jpg', alt: 'Volume envidraçado visto do telhado-jardim', orientation: 'landscape' },
      { src: '/projetos/casa-horizonte/03.jpg', alt: 'Fachada em tela metálica ao pôr do sol', orientation: 'portrait' },
      { src: '/projetos/casa-horizonte/04.jpg', alt: 'Espelho d’água sob a pérgola de madeira', orientation: 'portrait' },
      { src: '/projetos/casa-horizonte/05.jpg', alt: 'Volume suspenso da casa visto da rua', orientation: 'landscape' },
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
    summary: 'Forro ripado de madeira, tons neutros e vegetação em interiores que respiram.',
    concept: [
      'O Apartamento Linha parte de um forro ripado de madeira que conduz a leitura dos ambientes e aquece a paleta neutra.',
      'A varanda integrada e a vegetação trazem a paisagem para dentro, preservando proporção, silêncio e continuidade visual.',
    ],
    materiality: {
      text: 'Madeira, linho e tons terrosos sustentam o calor dos interiores; o verde das plantas entra como material vivo do projeto.',
      materials: ['Madeira', 'Linho', 'Tons terrosos', 'Vegetação'],
    },
    hero: {
      src: '/projetos/apartamento-linha/hero.jpg',
      alt: 'Living integrado à varanda com vegetação no Apartamento Linha',
      orientation: 'landscape',
    },
    gallery: [
      { src: '/projetos/apartamento-linha/01.jpg', alt: 'Estar com forro ripado de madeira e poltronas de couro', orientation: 'landscape' },
      { src: '/projetos/apartamento-linha/02.jpg', alt: 'Sala de jantar sob o forro contínuo de madeira', orientation: 'landscape' },
      { src: '/projetos/apartamento-linha/03.jpg', alt: 'Vegetação junto às aberturas envidraçadas', orientation: 'square' },
    ],
  },
  {
    slug: 'casa-mirante',
    name: 'Casa Mirante',
    category: 'Residencial',
    location: 'Florianópolis, SC',
    year: 2025,
    area: '300 m²',
    service: 'Arquitetura + Estrutura',
    status: 'Conceito fictício para portfólio',
    summary: 'Uma estrutura de aço vermelho vence a encosta e abre a casa para o vale.',
    concept: [
      'A Casa Mirante ocupa um terreno de forte declive e transforma a topografia em programa: uma estrutura de aço vermelho vence o desnível e conecta a rua à moradia.',
      'Do alto, os ambientes se abrem para o vale; o aço aparente assume um gesto expressivo, em contraste com a vegetação da encosta.',
    ],
    materiality: {
      text: 'Aço aparente, concreto e madeira convivem com a vegetação nativa da encosta, equilibrando peso estrutural e leveza visual.',
      materials: ['Aço aparente', 'Concreto', 'Madeira', 'Vidro'],
    },
    hero: {
      src: '/projetos/casa-mirante/hero.jpg',
      alt: 'Casa Mirante em encosta, com terraço voltado para o vale',
      orientation: 'landscape',
    },
    gallery: [
      { src: '/projetos/casa-mirante/01.jpg', alt: 'Implantação na encosta vista de cima', orientation: 'landscape' },
      { src: '/projetos/casa-mirante/02.jpg', alt: 'Estar com escada e integração ao exterior', orientation: 'landscape' },
      { src: '/projetos/casa-mirante/03.jpg', alt: 'Torre de elevador em aço vermelho na encosta', orientation: 'portrait' },
      { src: '/projetos/casa-mirante/04.jpg', alt: 'Passarela de aço vista do alto', orientation: 'portrait' },
    ],
  },
  {
    slug: 'refugio-pedra',
    name: 'Refúgio Pedra',
    category: 'Residencial',
    location: 'Serra Catarinense, SC',
    year: 2025,
    area: '240 m²',
    service: 'Arquitetura + Interiores',
    status: 'Conceito fictício para portfólio',
    summary: 'Pedra natural, madeira e telha cerâmica em uma casa de campo que respira permanência.',
    concept: [
      'O Refúgio Pedra é uma casa de campo ancorada na pedra natural, onde alvenaria bruta, madeira e telha cerâmica constroem a sensação de permanência.',
      'Os ambientes se abrem para a piscina e o jardim, equilibrando recolhimento e convívio sob amplos beirais.',
    ],
    materiality: {
      text: 'A pedra local define estrutura e atmosfera; a madeira aquece os interiores e os beirais protegem do sol forte.',
      materials: ['Pedra natural', 'Madeira', 'Telha cerâmica', 'Couro'],
    },
    hero: {
      src: '/projetos/refugio-pedra/hero.jpg',
      alt: 'Casa de pedra com piscina e telhado cerâmico no Refúgio Pedra',
      orientation: 'landscape',
    },
    gallery: [
      { src: '/projetos/refugio-pedra/01.jpg', alt: 'Fachada em pedra natural com telha cerâmica', orientation: 'landscape' },
      { src: '/projetos/refugio-pedra/02.jpg', alt: 'Estar com marcenaria de madeira e poltronas de couro', orientation: 'landscape' },
      { src: '/projetos/refugio-pedra/03.jpg', alt: 'Varanda coberta com pilar de pedra junto à piscina', orientation: 'portrait' },
    ],
  },
  {
    slug: 'edificio-rosadoce',
    name: 'Edifício Rosadoce',
    category: 'Comercial',
    location: 'São José, SC',
    year: 2026,
    area: '420 m²',
    service: 'Arquitetura comercial',
    status: 'Conceito fictício para portfólio',
    summary: 'Uma fachada-brise em terracota dá identidade a um comércio de rua.',
    concept: [
      'O Edifício Rosadoce trata um comércio de rua a partir de uma fachada-brise em terracota, que filtra a luz e dá identidade ao volume.',
      'Internamente, a estrutura de aço aparente organiza os pavimentos e deixa a luz coada desenhar os espaços ao longo do dia.',
    ],
    materiality: {
      text: 'Concreto pigmentado, aço aparente e vidro compõem uma atmosfera precisa, em que cor e sombra se tornam materiais de projeto.',
      materials: ['Concreto rosa', 'Aço aparente', 'Vidro', 'Brise'],
    },
    hero: {
      src: '/projetos/edificio-rosadoce/hero.jpg',
      alt: 'Fachada-brise em terracota do Edifício Rosadoce',
      orientation: 'landscape',
    },
    gallery: [
      { src: '/projetos/edificio-rosadoce/01.jpg', alt: 'Estrutura de aço aparente e circulação vertical no interior', orientation: 'landscape' },
      { src: '/projetos/edificio-rosadoce/02.jpg', alt: 'Luz filtrada pelo brise ao fundo da laje', orientation: 'landscape' },
      { src: '/projetos/edificio-rosadoce/03.jpg', alt: 'Fachada-brise vista da esquina', orientation: 'portrait' },
    ],
  },
];

export const categories = ['Todos', 'Residencial', 'Interiores', 'Comercial'] as const;

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
