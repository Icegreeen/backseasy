# 🛠️ Backseasy — Plano de Ação (versão enxuta)

> Revisado em 27/10/2026, executado em 28/10/2026 · Site: https://backseasy.com · Baseline: PageSpeed mobile do próprio Flávio
> Visual: [`VISUAL_PROPOSALS.html`](./VISUAL_PROPOSALS.html) (teclas `1`–`6` trocam de proposta)

**Objetivo:** site mais rápido, melhor indexado e mais bonito — sem mexer em hospedagem, segurança, login ou infraestrutura.

---

## 0. Status de execução (28/10/2026)

`tsc` e `next build` passam. **Falta validar no PageSpeed (rodar de novo após o deploy).**

| Item | Status | Observação |
|---|---|---|
| 1.1 Cards lazy | ✅ | `ProjectPreview` usa `next/image` (`fill`, lazy, `sizes`, q=60); home mostra 5 cards/categoria. ⚠️ GIFs animados (~10 MB) o Next **não otimiza**: seguem pesados ao carregar, mas só os que estiverem perto da tela. Solução definitiva = trocar por thumbnail estático/vídeo (fora do escopo atual) |
| 1.2 Spline | ✅ | `CodePreview` só monta o iframe ao chegar a 200px da tela (IntersectionObserver). Também corrigido um `</html>s` no HTML de exemplo |
| 1.3 Layout/hydration | ✅ | JSON-LD e GA dentro do `<body>`; `<meta>` solto removido. Conferir se #418/#423 sumiram no console |
| 2.1 Canonical/metadata | ✅ | Removido canonical global; metadata em glass-effect, nebula-effect, black-hole, blogs, `generateMetadata` em blog/[slug], canonical na home |
| 2.2 Sitemap | ✅ | `app/sitemap.ts` (inclui `projects/new` e blog); `public/sitemap*.xml` apagados. **Reenviar no Search Console** |
| 2.3 "See more" | ✅ | Texto oculto (`sr-only`) com a categoria; componente agora é import estático (antes `ssr:false`, link nem existia no HTML) |
| 2.4 favicon.svg | ✅ | Referências removidas (layout + manifest); apple icon = `logo.png` |
| 2.5 hreflang pt-BR | ✅ | Removido |
| 2.6 404 vs 500 | ✅ | `notFound()` em projects/blog |
| 2.7 Footer | ✅ | Links para `/`; corrigido `<a>` dentro de `<a>` |
| 2.8 Título duplicado | ✅ | Removido `\| Backseasy` dos títulos de projeto e all_backgrounds |
| 3.1–3.7 A11y | ✅ (3.3 parcial) | Menu mobile, `aria-label` nos selects, `<main>`, h3→h2, vídeo `aria-hidden`, ícones `object-contain`, botão do café com texto preto. Contraste: só os casos óbvios; conferir no novo relatório |
| `.env` | ✅ | Removido do índice do git e adicionado ao `.gitignore`. **O histórico ainda contém o arquivo: rotacione os segredos** (DB/auth/SMTP) se o repo for público |
| Fase 4 | ✅ | Apagados: auth/app/api/service, middleware, prisma, `components/ui` (nenhum uso restante), PickerExample, SEOHead, test.tsx, /test-particle, ~21 MB de assets sem referência, `PERFORMANCE_IMPROVEMENTS.md`. Removidas ~35 dependências (radix, next-auth, prisma, zod, etc.), `build` sem `prisma generate`; `yarn.lock` e `package-lock.json` regenerados. Build OK. Ficaram `moment` (3 usos) e `tailwindcss-animate` (sem uso aparente) para outro PR |
| Condicionais | ✅ | GA carregado só após interação/4 s (`DeferredAnalytics`), `browserslist` moderno (corta ~12 KiB de polyfill), cache das imagens otimizadas de 60 s para 30 dias |
| PageSpeed 28/10 13:07 | ⚠️ | Esse relatório (Perf 27, TBT 2.030 ms) é do **site antigo**: ainda mostra `bg-cover`, footer → google.com e Spline no load. Medir de novo **depois do deploy** |
| SEO extra (28/10) | ✅ | `/all_backgrounds` não listava as categorias `new` e `atmosphere` (sem link interno) → agora lista as 10, com `<h1>`; JSON-LD `BlogPosting` e `BreadcrumbList`; `WebApplication` só na home (antes em todas as páginas, com `dateModified` falso); `og:url` global removido (páginas herdavam a home); `<h1>` duplicado ("Back") corrigido; h1 nas 3 ferramentas; RSS com escape XML e URLs com `/`; `themeColor`; `not-found.tsx`; description do post do blog; verificações placeholder (Yandex/Yahoo/Baidu) e `next-sitemap.config.js` removidos; `robots.txt` simplificado; imagens de projeto/blog `quality` 100→75 + `priority` |
| Fase 5 · Editorial na home | ✅ (28/10) | Home reescrita: hero Editorial com o buraco negro (vídeo) da hero antiga, The index (filtro + preview), Trending now, "Like it? Keep it free." e Footer global novo (a seção About foi removida a pedido). Código em `components/home/`. Backup da home antiga em `backup/home-2026-10-28/` |
| Fase 5 · geradores e tipos de volta | ✅ (28/10) | Home ganhou **Make your own** (8 geradores em abas, carregados sob demanda), **Browse by type** (10 categorias) e páginas novas `/backgrounds/[categoria]/` (SEO + sitemap). 4 geradores estavam órfãos (`/mesh-gradient`, `/particle-system`, `/geometric-pattern`, `/3d-background`: sem link, sem sitemap, marca "BacksEasy", classes Tailwind inexistentes) e agora estão no menu/footer/sitemap com metadata corrigida |
| Pendente (visual dos geradores) | ⏳ | O contêiner e as abas são novos, mas a UI interna de cada gerador (sliders, labels) ainda é a antiga |
| Fase 5 · próximos passos | ⏳ | Puxar elementos das outras propostas (gerador ao vivo do Bento, mini-IDE do Snippet First); decidir o destino do `CodePreview`/`PatternLibrary`, hoje fora da home |

### Problemas encontrados na revisão do plano anterior
- **Trailing slash:** `next.config.mjs` tem `trailingSlash: true`, então as URLs reais terminam em `/`. Canonicals e sitemap novos usam `/` para não gerar redirecionamento. O canonical antigo (sem `/`) era inconsistente.
- **`PERFORMANCE_IMPROVEMENTS.md` não refletia o código:** dizia que havia `priority`, `dynamic()` e `lazyOnload` com ganhos "esperados", mas os cards seguiam como `background-image` e as métricas nunca foram medidas. Manter como histórico ou apagar (Fase 4).
- **`next.config.mjs`:** `generateBuildId` com `Date.now()` invalida cache a cada build; `X-Frame-Options: DENY` impede embutir o site (ok, mas saiba disso); `domains` + `remotePatterns` duplicados (`domains` é legado).
- **⚠️ `.env` está versionado no git** (só `.env*.local` é ignorado) e tem histórico em 3 commits. Se o repositório for público no GitHub, trate qualquer segredo ali (DB, auth, SMTP) como vazado e rotacione. Correção mínima: `git rm --cached .env` + adicionar `.env` ao `.gitignore` (não fiz sem sua confirmação).
- **Páginas `/auth`, `/app`, `/test-particle` ainda no ar** (Fase 4).

---

## 1. Revisão crítica (o que mudou em relação à versão anterior)

### Removido do plano (fora de escopo)
| Item | Motivo |
|---|---|
| Hospedar/gerar thumbnails próprios, CDN, script com `sharp` | Excesso. Dá para resolver o peso das imagens só com **lazy-load** |
| Tudo de **segurança** (`.env`, `npm audit`, CVEs do Next, CSP, HSTS, middleware) | Não há login, dados ou área restrita; não se aplica ao projeto |
| **Login / Backseasy Plus / Prisma / área logada** | Não funciona e não está nos planos → só vira **limpeza de código morto** (seção 5) |
| Upgrade do Next 15/16, React 19, Tailwind 4 | Não resolve nenhum problema medido. Fica para "um dia", em PR separado |
| CI, i18n/`pt-BR`, estratégia de blog/keywords, OG dinâmico, páginas de categoria | Crescimento futuro; não é "arrumar o que está errado" |
| JSON-LD (license/dateModified), duplicação do `getProjectMetadata`, lockfiles duplicados, CSP | Baixo retorno |

### Rebaixado por falta de evidência no PageSpeed
| Item | Por quê |
|---|---|
| Cache longo em `public/` | O PSI só apontou **1 KiB** de ganho (e era o script do CodePen). Só afeta visita repetida |
| Imports `dynamic()` mortos da home | Não são renderizados, então **não são baixados**. É limpeza, não performance |
| Trocar `framer-motion`/`react-tilt` | Só vale se o TBT continuar alto **depois** de corrigir o Spline |
| Vídeo do hero (757 KB) | O PSI não o apontou como problema. Melhoria opcional |

### Pontos ainda incertos (não tratar como fato)
- **Hydration (#418/#423):** a causa mais provável é o `<script>`/`<meta>`/GA colocados direto no `<html>` (o JSON-LD aparece entre `</head>` e `<body>` no HTML de produção), mas isso é **hipótese** — confirmar no console depois do ajuste.
- **"Performance ≥ 90 depois dos 2 primeiros itens"** é **estimativa**, não garantia. Só o novo PageSpeed confirma.
- Não consegui ver a produção em navegador (ferramenta falhou); o lado visual vem do código.

---

## 2. Baseline real — PageSpeed mobile (27/10/2026 16:46)

Lighthouse 13.5 · Moto G Power · Slow 4G. Desktop ainda não rodado; CrUX sem dados (pouco tráfego).

| Métrica | Hoje | Meta | |
|---|---|---|---|
| **Performance** | **68** | ≥ 90 | 🟠 |
| FCP / LCP | 2,1 s / 3,2 s | < 1,8 s / < 2,5 s | 🟠 |
| **TBT** | **550 ms** | < 200 ms | 🔴 |
| CLS | 0 | < 0,1 | ✅ |
| **Speed Index** | **41,6 s** | < 4 s | 🔴 |
| **Payload total** | **74.663 KiB (73 MB)** | < 2 MB inicial | 🔴 |
| **Acessibilidade** | **79** | ≥ 95 | 🟠 |
| Best Practices | 92 | ≥ 95 | 🟡 |
| SEO | 92 | 100 | 🟡 |
| Agentic Browsing | 1/2 | 2/2 | 🟠 |

> O que segura a nota: **Speed Index** (73 MB de imagens) e **TBT** (cena 3D do Spline). O resto é secundário.

---

## 3. O plano (ordenado por impacto)

### 🔥 Fase 1 — Performance: só 3 correções que movem o PageSpeed

| # | Problema | Evidência | Correção (sem hospedar nada) |
|---|---|---|---|
| **1.1** | **Imagens dos cards carregam todas de uma vez**: ~71 imagens do GitHub (PNG de até 7 MB, GIFs de ~10 MB e ~8,7 MB) como CSS `background-image`, 43,8 MB só delas | PSI "Improve image delivery" (16 MB de economia só de formato) · `components/projects/ProjectPreview.tsx` L33-36 | (a) Trocar o `background-image` por `<Image>` (`next/image`, já liberado para `github.com` no `next.config.mjs`) com `loading="lazy"` e `sizes`; as páginas de projeto já fazem assim. (b) Na home, mostrar **5 cards por categoria** em vez de 10 (já existe o link "See more"). Resultado esperado: só carrega o que está perto da tela |
| **1.2** | **Cena 3D do Spline abre no load**: runtime do unpkg de 554 KiB, 1,6 s de CPU | PSI "Reduce JavaScript execution time" · `lib/backgroundPreview.ts` L44 alimenta o `CodePreview` da home (`CodePreview.tsx` L103) | Montar o `<iframe>` só quando a seção entrar na tela (IntersectionObserver) **ou** ao clicar em "Run preview"; começar com um exemplo CSS leve em vez do Spline |
| **1.3** | **HTML inválido no layout** + erros React #418/#423 | Console do PSI (4 erros) · `app/layout.tsx` L181-190 | Mover `<GoogleAnalytics/>` e o `<script ld+json>` para dentro do `<body>`; remover o `<meta google-site-verification>` solto (já está em `metadata.verification`). Rechecar o console |

**Meta da fase:** Performance mobile ≥ 90, TBT < 200 ms, sem erros no console. **Rodar o PageSpeed de novo ao terminar.**

*Condicionais (só se, depois da Fase 1, ainda sobrar TBT/FCP):* menos `framer-motion`/`react-tilt` nos cards · 1 CSS só (render-blocking de 480 ms) · `browserslist` moderno (12 KiB de polyfill) · adiar o Google Analytics.

---

### 🔍 Fase 2 — SEO que realmente traz resultado

O Lighthouse marca 92, mas ele **não detecta** o problema mais grave:

| # | Problema | Evidência | Correção |
|---|---|---|---|
| **2.1** | **Canonical de todas as páginas aponta para a home**, e todas têm o mesmo title/description | Verificado em produção: `/glass-effect/`, `/black-hole/`, `/blogs/`, `/blog/…` · `app/layout.tsx` L74-83 | Remover o `canonical` do layout; criar `metadata` (title, description, canonical) em `glass-effect`, `nebula-effect`, `black-hole`, `blogs` e `generateMetadata` em `blog/[slug]` |
| **2.2** | **Sitemap estático desatualizado**: de 18/09/2025, 62 URLs, **sem os 15 backgrounds da pasta `projects/new`** | `public/sitemap.xml` | Criar `app/sitemap.ts` que lê as pastas `projects/*` e `blog/` (e apagar o `public/sitemap*.xml`); depois reenviar no Google Search Console |
| **2.3** | **Links "See more" sem texto descritivo** (9×, todos para `/all_backgrounds`) | PSI (SEO) · `components/NavigationAllBackgrounds.tsx` L8 | Receber o nome da categoria: "See all dark backgrounds" etc. |
| **2.4** | **`favicon.svg` dá 404** (referenciado no `<head>`, layout e manifest) | `curl` → 404 | Criar o arquivo (ou remover as referências) |
| **2.5** | **Tag `hreflang pt-BR` para uma página que não existe** (`/pt-BR` → 404) | `layout.tsx` L76-79 | Remover `languages` |
| **2.6** | **404 vira 500** em slug inexistente (`/projects/x`, `/blog/x`) | Verificado em produção | `notFound()` nos loaders |
| **2.7** | **Footer: logo e "@ Backseasy" apontam para `google.com`** (e um link dentro do outro) | `components/Footer.tsx` L8-23 | `href="/"` |
| **2.8** | Title com marca duplicada ("… \| Backseasy \| Backseasy - Background Generator") | `layout.tsx` template + `projects/[slug]` | Tirar o `\| Backseasy` dos títulos das páginas |

---

### ♿ Fase 3 — Acessibilidade 79 → 95+ (≈ 1 dia, itens do próprio relatório)

| # | Item | Onde |
|---|---|---|
| 3.1 | Botão do menu mobile sem nome | `components/Nav.tsx` L75-80 → `aria-label` + `aria-expanded` |
| 3.2 | `<select>` sem label | `app/black-hole/background-customizatizer/index.tsx` L101 (e os de Gradient, Particle, Geometric e 3D) |
| 3.3 | Contraste insuficiente (9 textos + botão "Buy me a coffee" branco sobre amarelo) | textos `text-gray-400`/`opacity-45`; `Footer.tsx` L43-57 |
| 3.4 | Sem `<main>` | `layout.tsx` → envolver `{children}` |
| 3.5 | `<h3>` logo depois do `<h1>` | `CodePreview.tsx` L63 → `<h2>` |
| 3.6 | Vídeo decorativo sem legenda | `black-hole.tsx` → `aria-hidden="true"` |
| 3.7 | 4 ícones distorcidos (45×40) | `app/page.tsx` L159-169 → `object-contain` + 45×45 |

Resolver 3.1 e 3.2 também corrige o **Agentic Browsing (1/2 → 2/2)**.

---

### 🧹 Fase 4 — Limpeza de código morto (opcional, sem pressa)

Não muda a nota do PageSpeed; reduz peso do repositório e manutenção. **Confirmar antes de apagar.**

| O quê | Detalhe |
|---|---|
| **Login/auth que não existe** | `app/auth/`, `app/app/`, `app/api/auth/`, `app/service/`, `middleware.ts`, `prisma/`, `.env`/`.env.example`; dependências `next-auth`, `@auth/prisma-adapter`, `@prisma/client`, `prisma`, `nodemailer`; e o `prisma generate` do script `build`. Hoje `/auth` e `/api/auth/session` respondem 200 em produção, e o middleware roda em toda requisição |
| **Componentes shadcn sem uso** | 47 arquivos em `components/ui/`, só ~8 são importados (e alguns só pela tela de login). Remover o resto e as libs que só eles usam (`vaul`, `cmdk`, `input-otp`, `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`, `sonner`…) |
| **Assets sem referência em `public/`** (~21 MB) | `3.png` (9,5 MB), `3d.png` (5,7 MB), `1.jpg` (3,3 MB), `2.jpg`, `ghost.png`, `square.png`, `aquiles*.png`, `exit.png`, `nabula.png`, `plant.png`, `light-bg.svg`, `linear-bg.svg`, `linear-bgg.svg`, `new/point.png` (6,8 MB). Não afetam o load, só o repo |
| **Outros** | `components/SEOHead.tsx` (usa `next/head`, que não funciona no App Router e não é importado), `app/test.tsx`, página `/test-particle` (está no ar), blocos comentados em `app/page.tsx` (L197-251), imports `dynamic()` mortos da home, `moment` (só para formatar data), `PERFORMANCE_IMPROVEMENTS.md` (métricas "esperadas", nunca medidas) |

---

### 🎨 Fase 5 — Novo visual (depois que a base estiver limpa)

Ver [`VISUAL_PROPOSALS.html`](./VISUAL_PROPOSALS.html) (teclas `1`–`4`): **1 Editorial refinado** (direção aprovada, com a lista "Trending now"), **2 Event Horizon**, **3 Bento Lab**, **4 Snippet First**. Todas partem do visual atual (preto, hairlines, azul `#0db7ff`, roxo do buraco negro).

- **Pendente:** escolher a direção. O Editorial é o menor esforço e o melhor para Lighthouse; o Event Horizon troca o vídeo de 757 KB do hero por CSS puro.
- Pré-requisito técnico: no `tailwind.config.ts`, `spacing` e `fontSize` **substituem** os padrões do Tailwind, então classes como `px-5`, `mt-3`, `gap-1` não geram CSS (o Hero usa algumas). Migrar para `extend` junto com o redesign.
- Regras de glass performático: máx. 3–4 camadas de `backdrop-filter` por tela, fallback com `@supports`, respeitar `prefers-reduced-motion`, contraste ≥ 4,5:1.

---

## 4. Ordem sugerida de PRs

| # | Branch | Conteúdo | Esforço |
|---|---|---|---|
| 1 | `perf/lazy-cards` | 1.1 | ~2 h |
| 2 | `perf/lazy-spline-preview` | 1.2 + 1.3 | ~2 h |
| — | **Rodar PageSpeed mobile + desktop e atualizar a tabela da seção 2** | | |
| 3 | `fix/seo-metadata-sitemap` | 2.1 – 2.8 | ~½ dia |
| 4 | `fix/a11y` | Fase 3 | ~½ dia |
| 5 | `chore/dead-code` | Fase 4 (opcional) | ~½ dia |
| 6 | `feat/new-visual` | Fase 5 | 1–3 semanas |

## 5. Como medir

- PageSpeed: https://pagespeed.web.dev/ → mobile **e** desktop, mesma URL, aba anônima, antes/depois de cada PR.
- SEO: `curl -s https://backseasy.com/glass-effect/ | grep -E "<title>|canonical"` deve mostrar title e canonical **próprios**.
- Após o item 2.2: reenviar `https://backseasy.com/sitemap.xml` no Google Search Console (também dá os dados reais de usuários que o PageSpeed hoje mostra como "No Data").
