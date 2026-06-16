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

### 2026-06-16 — Correções do /impeccable audit (a11y, perf, theming)
- **Why:** auditoria técnica apontou 11 issues (1 P1, 5 P2, 4 P3). Correções aplicadas sem alterar a direção visual:
  - **Filtro de projetos:** `role="tablist/tab"` (padrão incorreto, sem tabpanel) → botões `aria-pressed` em `role="group"` + região `aria-live` com a contagem de resultados.
  - **Menu mobile:** adicionados focus trap, fechar no `Escape`, restauração de foco no toggle e `inert` no `<main>`/`<footer>` enquanto aberto (`role="dialog"` + `aria-modal`).
  - **Touch targets:** filtros, CTA ghost, toggle mobile e links do rodapé expandidos para ~44px via padding com margem negativa (sem deslocar o layout).
  - **Hero:** scrim único trocado por dois scrims ancorados às zonas de texto (topo e base), mantendo o centro da foto limpo — protege contraste do rótulo superior sobre fotos claras.
  - **ProjectCard:** label "Ver projeto" posicionado imperativamente via `ref` (sem `setState` por mousemove) — elimina re-render contínuo no hover.
  - **Formulário de contato:** validação real antes do estado de sucesso, erros inline com `aria-invalid`/`aria-describedby`/`role="alert"`, indicadores de obrigatório e foco no primeiro campo inválido.
  - **Tokens:** novos `--paper-ink` (#1A1A17) e `--danger` (#D98E80) substituem valores hard-coded em ProcessStep e nos estados de erro do form.
  - **Semântica:** rótulos de seção (Conceito, Materialidade, Ficha técnica, O Atelier, Especialidades, Valores) promovidos de `<p>` para `<h2>` (mantendo a classe `.eyebrow`); ano do rodapé via `getFullYear()`.
- **Affects:** components/{ProjectsGallery,Navbar,CtaLink,Footer,Hero,ProjectCard,ContactForm,ProcessStep}.tsx, app/{page,atelier/page,projetos/[slug]/page}.tsx, app/globals.css, tailwind.config.ts. Build limpo (15 páginas, tsc 0 erros).

### 2026-06-16 — Polimento pós-audit: rumo a 20/20 (perf + responsivo + a11y)
- **Why:** segundo `/impeccable audit` (19/20) restaram 3 P3. Resolvidos:
  - **Frame (perf):** removida a animação de `filter` (saturate/brightness) no hover — era repaint por frame em imagens grandes (ex. NextProjectBlock 70vh). Agora anima só `transform` (`transform-gpu` + `will-change-transform`) e o "recuo em repouso → realce no hover" vem de um overlay `bg-bg/20` com fade de **opacidade** (composto na GPU). Novo prop `dimAtRest` (default `true`); NextProjectBlock passa `dimAtRest={false}` por já ter overlay próprio. Mantém a intenção do registro de 2026-06-13 (dessaturado→pleno) por outro mecanismo; leve mudança no clima de repouso (escurece em vez de dessaturar).
  - **Contato (responsivo):** links de e-mail/WhatsApp/Instagram com `py-2` (alvo ~44px), `gap-3`→`gap-1` para preservar o ritmo.
  - **Menu mobile (a11y):** o toggle "Fechar" (no header, fora do dialog) entrou no conjunto do focus trap, então é alcançável por Tab além do Escape.
- **Affects:** components/{Frame,NextProjectBlock,Navbar}.tsx, app/contato/page.tsx. Build limpo (15 páginas, tsc 0 erros), bundles inalterados.
