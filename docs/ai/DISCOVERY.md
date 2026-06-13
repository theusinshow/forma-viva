---
status: complete
session_mode: A
register: brand
language: pt-BR
---

# DISCOVERY — Atelier Forma Viva

> Projeto fictício de portfólio (Coded by M). Nicho: arquitetura contemporânea.
> Fonte primária: `briefing.md` (completo, tratado como brain dump inicial).

## Triagem

| # | Pergunta | Resposta | Origem |
|---|----------|----------|--------|
| 1 | Situação atual | A — Sem código ainda (só `briefing.md`) | repo |
| 2 | Tipo principal | C + D — Site multipáginas premium/autoridade | briefing |
| 3 | Objetivo principal | D — Passar autoridade + B — Captar leads qualificados | briefing §3 |
| 4 | Nível visual | B — Premium e refinado (galeria editorial) | briefing §5 |
| 5 | Conteúdo | D — Estruturar do zero (conteúdo fictício) | briefing §20 |
| 6 | Modo de trabalho | **A — Completo** | dev |
| 7 | Idioma do site | A — Só português | briefing |

## Decisões confirmadas (derivadas do briefing)

### Estratégia & Voz
- **Conceito-núcleo:** "Arquitetura apresentada como silêncio, forma e espaço." Site funciona como galeria/exposição digital, não landing de venda direta.
- **Público:** clientes residenciais de alto padrão, interessados em interiores e reformas autorais; tom para quem valoriza repertório estético.
- **Tom de voz:** direto, elegante, editorial, sensível, técnico sem exagero. Evitar frases genéricas de agência, excesso de adjetivos, promessas vazias.
- **Register (Impeccable):** `brand` (portfólio/autoridade).

### Arquitetura do site (sitemap)
- `/` — Home (entrada da galeria)
- `/projetos` — Galeria de projetos (com filtros por categoria)
- `/projetos/[slug]` — Página individual de case (narrativa visual)
- `/atelier` — Sobre o escritório
- `/processo` — Método de trabalho (5 etapas)
- `/contato` — Contato

### Conteúdo fictício (5 projetos)
1. Casa Horizonte — Residencial, Florianópolis/SC, 2026, 320 m²
2. Apartamento Linha — Interiores, Balneário Camboriú/SC, 2026, 140 m²
3. Casa Pátio — Residencial, Garopaba/SC, 2025, 280 m²
4. Refúgio Pedra — Conceito, Serra Catarinense/SC, 2025, 210 m²
5. Studio Comercial Norte — Comercial, São José/SC, 2026, 95 m²

### Motion
- Suave, lento, elegante, discreto, editorial. Fade em imagens, reveal ao entrar na viewport, hover com zoom mínimo, parallax leve, page transition com imagem expandindo, cursor com label "Ver projeto".
- Evitar: animações rápidas, neon, cards pulando, excesso de parallax, UI tech.

### Stack
- Next.js (App Router) + TypeScript + Tailwind CSS.
- Motion: GSAP + Lenis (smooth scroll); Framer Motion só para microinterações pontuais.
- Imagens: `next/image`, responsivo, lazy loading, blur placeholder, formatos modernos.
- Conteúdo: MDX/Markdown como fonte inicial dos projetos (CMS opcional futuro: Sanity).

### Performance (não negociável — site image-heavy)
- Otimizar todas as imagens, `next/image`, lazy below-the-fold, blur placeholders.
- Sem vídeos pesados no início, sem 3D, limitar animações complexas, prioridade mobile.

### Princípios de layout (briefing §6)
- Espaço antes de excesso (muito whitespace).
- Fotos como protagonistas (hero fullscreen, galerias amplas).
- UI discreta (botões pequenos, navegação minimalista).
- Composição nos cantos (logo/menu/título/CTA nas extremidades).
- Clareza acima de experimentalismo.

## Fundações de design (confirmadas)

### Tipografia — "Raleway + Inter"
- **Display/nav/números:** Raleway, pesos 200–300, uppercase com letter-spacing largo (~0.15–0.3em em rótulos técnicos).
- **Corpo/legendas/formulário:** Inter (16–18px, leading confortável).
- **Decisão do dev:** preferiu sans geométrica fina (estilo Raleway) no lugar da serifada — overrides a sugestão serif+sans do briefing §8.
- **Rejeitadas:** Raleway puro (1 família); Jost+Inter. Antes: Fraunces+Inter, Cormorant+Manrope, Spectral+Archivo.
- **Constraint p/ QA:** carregar via `next/font/google`, subset latin, `display: swap`, só os pesos usados (Raleway 200/300/400, Inter 400/500).

### Cor — "Galeria Escura" (dark-first)
| Papel | Token | Hex |
|-------|-------|-----|
| background | `--bg` | #0E0E0D |
| surface | `--surface` | #1A1A18 |
| surface-2 | `--surface-2` | #242421 |
| text | `--text` | #EDEAE3 |
| muted | `--muted` | #8A867E |
| border | `--border` | #2C2C28 |
| accent (verde oliva sálvia) | `--accent` | #A3AA7E |
| accent-foreground | `--accent-fg` | #0E0E0D |
- Light "respiro" pontual permitido em seções específicas (ex.: bloco de processo) usando #F5F2ED.
- **Contraste:** text #EDEAE3 sobre #0E0E0D ≈ 16:1 (AA/AAA ok). Accent #A3AA7E (verde oliva sálvia) sobre #0E0E0D ≈ 7:1 (AA, ok p/ texto). muted #8A867E sobre bg ≈ 4.8:1 (AA p/ texto normal — ok).
- **Decisão do dev:** escolheu a alternativa escura do briefing §7 em vez da base clara recomendada. Risco anotado: menos sensação de "arejado claro"; mitigado com whitespace e fotos como fonte de luz.

### Layout — "Galeria de Cantos"
- Hero 100vh full-bleed; navegação e textos ancorados nos 4 cantos (logo ↖, menu ↗, nome ↙, CTA ↘).
- Grid assimétrico/quebrado (editorial autoral), não 12-col clássico nem bento.
- Ritmo vertical dramático e variável (seções podem ocupar quase tela inteira).
- Container: full-bleed por padrão; blocos de texto em coluna estreita ancorada.
- Spacing scale base 4/8; section gaps generosos (ex.: 120–200px desktop).
- **Personalidade estrutural:** "exposição digital com molduras nos cantos; a foto é a luz, a UI é a moldura."

## Restrições explícitas (anti-references)
Não transformar em landing comum. Evitar: hero genérico (título+subtítulo+botão centralizado), cards comerciais, seções compactas, excesso de copy, visual SaaS, estética tech, animações chamativas, grid comum de agência.
