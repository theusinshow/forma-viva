export const site = {
  name: 'Atelier Forma Viva',
  shortName: 'Forma Viva',
  tagline: 'Arquitetura residencial para espaços que respiram forma, luz e matéria.',
  description:
    'Atelier de arquitetura contemporânea. Projetos residenciais, interiores e reformas autorais a partir de luz, proporção e matéria.',
  url: 'https://atelierformaviva.com.br',
  locale: 'pt-BR',
  // Fictitious demo contact details
  contact: {
    email: 'contato@atelierformaviva.com.br',
    whatsapp: '+55 48 90000-0000',
    whatsappHref: 'https://wa.me/5548900000000',
    instagram: '@atelierformaviva',
    instagramHref: 'https://instagram.com/atelierformaviva',
  },
} as const;

export const nav = [
  { label: 'Projetos', href: '/projetos' },
  { label: 'Atelier', href: '/atelier' },
  { label: 'Processo', href: '/processo' },
  { label: 'Contato', href: '/contato' },
] as const;
