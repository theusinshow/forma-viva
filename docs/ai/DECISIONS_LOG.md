# DECISIONS LOG — Atelier Forma Viva

Cada entrada: **Decisão** · **Why** · **Affects**.

---

### 2026-06-13 — Modo de sessão: A (Completo)
- **Why:** dev escolheu máxima qualidade; briefing rico justifica explorar 3 opções nas fundações de design.
- **Affects:** DISCOVERY.md, todo o fluxo de proposta.

### 2026-06-13 — Briefing tratado como brain dump / fonte primária
- **Why:** `briefing.md` já responde goals, audience, content, sitemap, motion, stack e performance; reabrir essas perguntas gastaria tokens sem ganho.
- **Affects:** DISCOVERY.md (decisões confirmadas), pulou módulos goals/audience/content/site-architecture/motion/technical.

### 2026-06-13 — Register = brand
- **Why:** portfólio/autoridade, não app/ferramenta.
- **Affects:** PRODUCT.md, fluxo Impeccable.

### 2026-06-13 — Stack: Next.js (App Router) + TS + Tailwind + GSAP/Lenis + MDX
- **Why:** recomendação do briefing §22; MDX como fonte inicial dos projetos evita CMS no MVP.
- **Affects:** MASTER_CONTEXT.md, EXECUTION_PLAN.md, CLAUDE.md/AGENTS.md.

### 2026-06-13 — Tipografia: Raleway (200–300) + Inter
- **Why:** dev preferiu sans geométrica fina (estilo Raleway) à serifada do briefing; casa com galeria escura + cantos.
- **Affects:** DESIGN_SYSTEM.md, DESIGN.md, QA_CHECKLIST.md (carregamento de fontes).
- **Override:** substitui a direção serif+sans do briefing §8.

### 2026-06-13 — Cor: Galeria Escura (dark-first)
- **Why:** dev escolheu a alternativa escura do briefing §7; fotos brilham sobre fundo profundo.
- **Affects:** DESIGN_SYSTEM.md, DESIGN.md. Risco: menos "arejado claro" — mitigado com whitespace.

### 2026-06-13 — Layout: Galeria de Cantos (assimétrico, full-bleed, cantos)
- **Why:** direção mais fiel à essência do briefing (textos/CTAs nos cantos, fotos protagonistas, respiro).
- **Affects:** SITE_ARCHITECTURE.md, PAGE_BLUEPRINTS.md, DESIGN_SYSTEM.md.

---

## Implementação

### 2026-06-13 — Next.js 14.2 (App Router) em vez de 15
- **Why:** estabilidade comprovada do App Router; evita churn de breaking changes do 15 num demo de portfólio.
- **Affects:** package.json, params síncronos nas rotas dinâmicas.

### 2026-06-13 — Conteúdo dos projetos em módulo TS tipado (lib/projects.ts) em vez de MDX
- **Why:** dados de projeto são estruturados (ficha técnica, arrays de galeria com alt/orientação), não prosa; tipagem evita erros e dispensa config @next/mdx no MVP.
- **Affects:** EXECUTION_PLAN (Fase 03), DESIGN_SYSTEM. Override leve do briefing §22 (MDX inicial). Migrar p/ MDX/CMS é trivial depois.

### 2026-06-13 — Placeholders de imagem: picsum.photos grayscale (demo)
- **Why:** sem fotos reais; placeholders determinísticos em grayscale unificam o clima editorial escuro e nunca quebram. Troca por fotos reais = mudar `src` em lib/projects.ts (componente `Frame` central).
- **Affects:** next.config.mjs (remotePatterns), CONTENT_PENDING.md.

### 2026-06-13 — Tailwind v3.4 (config file) em vez de v4
- **Why:** casa exatamente com os tokens `theme.extend` gerados em DESIGN.md/DESIGN_SYSTEM.md; evita a mudança de paradigma CSS-first do v4.
- **Affects:** tailwind.config.ts, postcss.config.mjs.

### 2026-06-13 — Imagens: dessatura→satura no hover (superfícies de navegação)
- **Why:** dev pediu efeito de cor no hover; P&B-por-padrão briga com o conceito de matéria/luz e some no mobile (sem hover). Solução: cards e "próximo projeto" levemente dessaturados em repouso → cor plena + zoom no hover; hero/galeria-de-case/processo/contato em cor plena sempre.
- **Affects:** lib/projects.ts (removido `?grayscale`), Frame.tsx (filtro saturate/brightness), ProjectCard.tsx (removido overlay de darken). MOTION_DIRECTION.

### 2026-06-13 — Accent: areia/bege → verde oliva sálvia (#A3AA7E)
- **Why:** dev preferiu verde oliva; já previsto no briefing §7 ("verde oliva muito sutil") e mais coerente com o tema orgânico/materialidade. Tom claro escolhido p/ manter contraste no dark (~7:1, AA).
- **Affects:** globals.css (--primary/--accent), DESIGN.md, DESIGN_SYSTEM.md, DISCOVERY.md. Substitui o #B9A78C.

### 2026-06-13 — Reveal on-scroll com IntersectionObserver (não GSAP ScrollTrigger)
- **Why:** mais leve, sem dependência pesada para o reveal básico; conteúdo visível sem JS (SSR/no-JS safe) e respeita prefers-reduced-motion. GSAP fica disponível para motion mais elaborado se necessário.
- **Affects:** MOTION_DIRECTION (Fase 05), componente Reveal.
