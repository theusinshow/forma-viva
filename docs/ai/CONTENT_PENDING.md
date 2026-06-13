# Content Pending

## Status
Projeto fictício para portfólio. Textos demo coerentes existem (briefing); **imagens reais não existem** e dependem de placeholders/stock de arquitetura. Itens abaixo afetam a implementação visual.

## Items

### CNT-001 — Pack de imagens por projeto (×5)
**Type:** Imagens (fotografia de arquitetura)
**Status:** Not received
**Impact:** Alto — fotos são protagonistas; sem elas a galeria não comunica.
**Used in:** Home (hero, destaques, galeria), `/projetos`, `/projetos/[slug]` (hero, galerias, materialidade, detalhes).
**Current placeholder:** stock de arquitetura (Unsplash/Pexels) ou blocos blur com `next/image` placeholder.
**Requirements:** 5–8 imagens/projeto — fachada, vista externa, estar, cozinha/jantar, quarto/suíte, banheiro/detalhe, materialidade, área externa. Alta resolução, luz natural, tons neutros, mix horizontal/vertical, AVIF/WebP.

### CNT-002 — Imagem do atelier / arquiteto
**Type:** Imagem
**Status:** Not received
**Impact:** Médio — página Atelier precisa de imagem grande de abertura.
**Used in:** `/atelier`.
**Current placeholder:** stock de escritório/arquiteto ou detalhe arquitetônico.
**Requirements:** 1 imagem horizontal de impacto, mesma linguagem editorial.

### CNT-003 — Imagens de etapa do Processo
**Type:** Imagens (detalhe)
**Status:** Not received
**Impact:** Médio — 5 etapas pedem foto/detalhe por seção.
**Used in:** `/processo`.
**Current placeholder:** detalhes de materialidade (concreto, madeira, pedra, luz).
**Requirements:** 5 imagens de detalhe, verticais ou quadradas, tons neutros.

### CNT-004 — Dados de contato reais (fictícios)
**Type:** Texto/links
**Status:** Definir
**Impact:** Baixo — e-mail/WhatsApp/Instagram fictícios coerentes.
**Used in:** `/contato`, footer.
**Current placeholder:** contato@atelierformaviva.com.br, @atelierformaviva, WhatsApp fictício.
**Requirements:** confirmar strings fictícias e marcar como demo.

### CNT-005 — Logo / wordmark
**Type:** SVG
**Status:** Not received
**Impact:** Médio — navbar e footer usam o logo.
**Used in:** global.
**Current placeholder:** wordmark tipográfico "ATELIER FORMA VIVA" em Raleway tracked.
**Requirements:** SVG; fallback wordmark é aceitável para o portfólio.
