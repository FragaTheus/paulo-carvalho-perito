# 03 — Justificativas das mudanças e prompt para a IA da IDE

**Status:** proposta para sua avaliação. **Nada foi aplicado ao site.**

Documentos relacionados: [01-auditoria-seo.md](./01-auditoria-seo.md) · [02-conteudo-novo.md](./02-conteudo-novo.md)

## Como avaliar (guia rápido)

1. Leia o **§1** (resumo) e o **§2** (princípios). Se a lógica faz sentido, siga.
2. Compare o texto atual com o novo no **§3**: cada linha traz _antes → depois → por quê_.
3. Responda as perguntas do **§5** (dependem de você ou do Paulo).
4. Aprovando, use os prompts do **§6**.

---

## 1. Resumo das mudanças

| Indicador                 |                                      Hoje |                                                                                Proposto |
| ------------------------- | ----------------------------------------: | --------------------------------------------------------------------------------------: |
| Nota de SEO do conteúdo   |                              **2,3 / 10** |                                                                **8,2 / 10** (projetada) |
| Palavras visíveis na home |                                       232 |                                                                                 ≈ 1.150 |
| Headings                  | 1 H1 · 4 H2 · 10 H3 (3 deles são números) |                                                                     1 H1 · 6 H2 · 19 H3 |
| Metadados (`<head>`)      |                só `<title>` (sem acentos) | title, description, canonical, robots, OG, Twitter, theme-color + JSON-LD (3 entidades) |
| Contato funcional         |                                    nenhum |                                                           WhatsApp em 4 pontos + e-mail |
| FAQ (long-tails)          |                                         0 |                                                            10 perguntas, com base legal |
| Seções                    |                                         5 |                                                              8 (+ FAQ, Contato, Footer) |

---

## 2. Princípios que guiaram o texto

1. **Intenção primeiro.** O title e o H1 usam o que o público _digita_ ("assistente técnico perícia trabalhista", presente no autocomplete do Google), e não termos internos. A sua frase de marca foi preservada logo abaixo.
2. **Preservar o que já funciona.** Números, "Prazo. Diligência. Laudo.", os 4 passos, os botões e a voz institucional continuam (§4).
3. **Do abstrato ao específico.** Troquei "próximos passos do processo" por o que de fato se entrega: _quesitos, diligência, parecer sobre o laudo_, e por termos que advogados usam (perito do juízo, NR-15/NR-16, LTCAT).
4. **Credibilidade verificável.** CREA, formação, número de perícias e **base legal citada** (CPC, CLT, Súmula 341 e OJ 278 do TST), tudo conferido em fonte oficial (01 §10). É um nicho em que o Google exige muita confiança (conteúdo jurídico/profissional).
5. **Local sem artifício.** "São Paulo" em title, H1, description, FAQ, footer e schema, **sem** páginas por bairro (_doorway pages_).
6. **Texto para pessoas e para máquinas.** Respostas diretas e curtas (formato que buscadores e assistentes de IA citam) e entidade `Person` para o Google reconhecer "Paulo Carvalho, engenheiro e perito".
7. **Sem promessa de resultado**, com aviso de que o conteúdo é informativo (o público é jurídico e a categoria é regulada).

---

## 3. Antes → depois → por quê

> O texto novo completo está no [doc 02](./02-conteudo-novo.md). Aqui há trechos para comparação.

### 3.1 Metadados (`src/index.html`)

| Elemento             | Antes                                                                                              | Depois                                                                | Por quê                                                                                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`            | `Assistencia tecnica em pericias judiciais trabalhistas` (54 car., sem acento, sem cidade e marca) | `Assistente Técnico em Perícia Trabalhista SP \| Paulo Carvalho` (61) | Termo exato que o público digita; cidade e marca; acentos corretos. "Perícias judiciais" segue no corpo. **Não usei "perito judicial trabalhista"**: o autocomplete é dominado por carreira (curso, salário, como ser) |
| description          | ausente                                                                                            | 147 car. com serviço, 3 subtemas, cidade e autoridade                 | Controla o snippet e o CTR (o Google pode reescrever, mas parte do seu texto)                                                                                                                                          |
| canonical            | ausente                                                                                            | `[[DOMINIO]]/`                                                        | Evita duplicidade entre `www` e sem `www`, `http` e `https`                                                                                                                                                            |
| Open Graph e Twitter | ausentes                                                                                           | presentes                                                             | O link é compartilhado no WhatsApp e LinkedIn; sem OG o preview sai pobre                                                                                                                                              |
| JSON-LD              | ausente                                                                                            | `WebSite` + `Person` + `ProfessionalService`                          | Define a entidade "Paulo Carvalho = engenheiro e perito em SP" e ajuda contra homônimos                                                                                                                                |
| `lang`               | `pt-br`                                                                                            | `pt-BR`                                                               | Forma canônica                                                                                                                                                                                                         |

### 3.2 Header

| Elemento  | Antes             | Depois                                                  | Por quê                                                                                           |
| --------- | ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Marca     | `<span>` sem link | link para `/` + descritor "Perito e assistente técnico" | Padrão de navegação; o descritor repete a entidade em todas as páginas                            |
| Navegação | ausente           | 4 âncoras (Atuação, Como funciona, Sobre, Dúvidas)      | Links internos descritivos; vira o menu de serviços na Fase 2. _Opcional, pequena mudança visual_ |
| CTA       | `href="#"`        | WhatsApp                                                | Hoje o botão não leva a lugar algum                                                               |

### 3.3 Hero (Proposta)

| Elemento    | Antes                                                                                                                     | Depois                                                                                                                                                                                                                             | Por quê                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Eyebrow     | `assistência técnica em perícias trabalhistas / são paulo`                                                                | `Engenheiro de Segurança do Trabalho / Perito judicial`                                                                                                                                                                            | A palavra-chave sai do eyebrow (um `<p>`, peso baixo) e sobe ao H1. O eyebrow passa a levar a **credencial** |
| **H1**      | `Decisões mais seguras diante da prova pericial.`                                                                         | `Assistente técnico em perícias trabalhistas em São Paulo`                                                                                                                                                                         | O H1 é o sinal on-page mais forte. O atual é elegante, mas não tem nenhum termo pesquisável                  |
| Lead (novo) | —                                                                                                                         | `Decisões mais seguras diante da prova pericial.`                                                                                                                                                                                  | **Sua frase de marca preservada**, agora logo abaixo do H1                                                   |
| Parágrafo   | `Análise criteriosa dos elementos do caso, acompanhamento e leitura do laudo para apoiar os próximos passos do processo.` | `Mais de 20 anos como perito e assistente técnico. Quesitos, acompanhamento da diligência e parecer sobre o laudo do perito do juízo, para advogados e empresas em ações de insalubridade, periculosidade e acidente de trabalho.` | Diz **o que se entrega**, **para quem** e **em quais ações**, com os 3 serviços já na primeira tela          |
| `alt`       | `Foto de frente do perito Paulo Carvalho serio`                                                                           | `Paulo Carvalho, engenheiro de segurança do trabalho e perito, de terno e braços cruzados`                                                                                                                                         | Corrige o erro, descreve a imagem e associa nome + profissão                                                 |
| Botão       | `Conhecer a atuação`                                                                                                      | igual                                                                                                                                                                                                                              | Mantido                                                                                                      |

_Alternativa descartada:_ H1 com a keyword **e** a frase de marca juntas teria ~88 caracteres (5 linhas em maiúsculas no `max-w-lg`). Preferi separar: keyword no H1, marca no lead.

### 3.4 Demanda

| Elemento      | Antes                                                                                                                                                | Depois                                                                                                                                                                                                                                        | Por quê                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Eyebrow       | —                                                                                                                                                    | `Para advogados e empresas`                                                                                                                                                                                                                   | Declara **quem é o público** no topo da seção (relevância e conversão)                                                             |
| H2            | `Prazo. Diligência. Laudo.`                                                                                                                          | igual                                                                                                                                                                                                                                         | **Mantido** (decisão de marca): três palavras que o advogado reconhece. As palavras-chave vêm do eyebrow, do parágrafo e dos cards |
| Parágrafo     | `Na condução de demandas, nem sempre há tempo para revisar tudo. Ter essa frente assumida permite manter o foco onde sua atuação realmente importa.` | `A perícia trabalhista tem prazos curtos, vistoria técnica e um laudo de grande peso na decisão do juiz. O assistente técnico assume essa frente — quesitos, diligência e parecer — para que você mantenha o foco na estratégia do processo.` | Mantém a ideia (delegar a frente técnica) e **nomeia o serviço**                                                                   |
| Cards (novos) | —                                                                                                                                                    | Advogados trabalhistas · Empresas e jurídico interno                                                                                                                                                                                          | Deixa explícito para quem serve; captura buscas como "assistente técnico para empresa"                                             |
| Botão         | `<button>` sem ação                                                                                                                                  | `<a>` com WhatsApp                                                                                                                                                                                                                            | Botão sem ação perde o lead                                                                                                        |

### 3.5 Atuação

| Elemento  | Antes                                                        | Depois                                                                                                                                                                                       | Por quê                                                                                                                                            |
| --------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| H2        | `Frentes periciais que exigem leitura própria do caso.`      | `Perícias de insalubridade, periculosidade e acidente de trabalho`                                                                                                                           | Os três serviços que as pessoas pesquisam (clusters B, C, D)                                                                                       |
| Parágrafo | `Cada frente exige critérios e uma leitura própria do caso.` | `Cada tipo de perícia segue normas e critérios próprios. A assistência técnica acompanha o trabalho do perito do juízo e avalia se as conclusões do laudo estão tecnicamente fundamentadas.` | O atual **repetia o H2** (texto duplicado não agrega)                                                                                              |
| Cards     | só título + `Ver mais`                                       | título com NR + descrição + botão descritivo                                                                                                                                                 | Cada card passa a ter texto indexável (ruído, calor, EPIs, inflamáveis, adicional de 10/20/40% e 30%). `Ver mais` ×3 vira `Ver insalubridade` etc. |
| Links     | 3 rotas inexistentes                                         | mantidos                                                                                                                                                                                     | ⚠️ Viram 404 até a Fase 2                                                                                                                          |

### 3.6 Perícia (como funciona)

| Elemento | Antes                                        | Depois                                                                                                                             | Por quê                                                                                       |
| -------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Eyebrow  | `Assistência ao longo da perícia`            | `Como funciona a assistência técnica`                                                                                              | "Como funciona" é um padrão de busca (autocomplete: "perícia de insalubridade como funciona") |
| H2       | `Da análise inicial às conclusões do laudo.` | `Da nomeação do perito ao parecer sobre o laudo`                                                                                   | Introduz "perito" e "parecer"; "nomeação do perito" é onde o prazo começa                     |
| Cards    | 1 linha genérica                             | 2 linhas específicas (petição inicial, defesa, quesitos, LTCAT, PGR/PPRA, PCMSO, EPI, medições, parecer concordante ou divergente) | Detalhe técnico = autoridade + termos de cauda longa                                          |
| Card 4   | `Laudo e manifestação`                       | `Parecer sobre o laudo`                                                                                                            | "Parecer técnico" é o entregável e o termo pesquisado                                         |

### 3.7 Autoridade (sobre)

| Elemento    | Antes                                                                                                                                                                                  | Depois                                                                                                                                             | Por quê                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Eyebrow     | `sobre`                                                                                                                                                                                | `Sobre Paulo Carvalho`                                                                                                                             | Nome no heading (entidade)                                                                                               |
| H2          | `Experiência construída dentro da rotina pericial.`                                                                                                                                    | `Paulo Carvalho, perito e assistente técnico`                                                                                                      | O atual funciona como slogan, mas nome e papéis precisam estar num heading. A ideia do slogan foi para o parágrafo       |
| Parágrafo   | `Engenheiro de Segurança do Trabalho, com trajetória ligada à perícia trabalhista e experiência como perito. […] reuniu repertório em diligências, laudos e assistência às partes […]` | + CREA + formação + "São Paulo e região" + _"Conhecer a rotina do perito do juízo ajuda a antecipar os pontos que o laudo pode deixar em aberto."_ | Registro e formação são sinais de confiança. A última frase é o **diferencial**: quem foi perito sabe onde o laudo falha |
| Indicadores | `<h3>` com números                                                                                                                                                                     | mantidos (recomendo `<p>`)                                                                                                                         | Números preservados; `<h3>` numérico polui o outline                                                                     |
| `alt`       | ausente                                                                                                                                                                                | descrição                                                                                                                                          | Acessibilidade e SEO de imagem                                                                                           |

### 3.8 Seções novas

| Seção                  | O que é                                   | Por quê                                                                                                                                                                            |
| ---------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FAQ** (10 perguntas) | Respostas curtas com a base legal         | Captura as perguntas reais do autocomplete (prazo, diferença, quem paga, quem pode fazer, empresa fechada…); é o formato que buscadores e IA citam; a base legal reforça confiança |
| **Contato**            | CTA final com orientação para o lead      | Fecha a página e qualifica o contato (tipo de ação, fase, prazos)                                                                                                                  |
| **Footer**             | Região, CREA, links internos, aviso legal | Sinais locais e de confiança; links internos; aviso informativo                                                                                                                    |

---

## 4. O que mantive de propósito (preservando sua marca)

- `Prazo. Diligência. Laudo.` (H2 da Demanda)
- `Decisões mais seguras diante da prova pericial.` (agora como lead do hero)
- Os títulos dos 4 passos (Análise e quesitos, Preparação, Diligência; o 4º virou "Parecer sobre o laudo")
- Os 3 indicadores (+20 anos, +1.500, +3.000) e suas legendas
- Os botões `Conhecer a atuação`, `Falar sobre meu caso`, `Falar com especialista` e `Conversar`
- O eyebrow `Áreas de atuação`
- A voz institucional, em terceira pessoa, com frases curtas

---

## 5. Decisões que dependem de você (ou do Paulo)

| #   | Pergunta                                                                   | Por que importa                                                                          |
| --- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1   | **Domínio:** o novo site usará `www.paulocarvalhoperitojudicial.com`?      | Canonical, sitemap, OG e a verificação do Search Console                                 |
| 2   | **WhatsApp, e-mail e CREA** (CREA-SP nº)                                   | Hoje não estão no projeto novo; são sinais de confiança e conversão                      |
| 3   | O Paulo **ainda atua como perito do juízo**?                               | Justifica "Perito judicial" no eyebrow; se não, trocar por "Perito e assistente técnico" |
| 4   | Ele **não** faz cálculos trabalhistas (liquidação)?                        | O site atual diz "cálculos"; remover evita busca errada e dúvida de competência          |
| 5   | Atende **ergonomia (NR-17)** ou **doença ocupacional**?                    | Se sim, viram card e página própria (a busca por perícia ergonômica existe)              |
| 6   | **Abrangência:** só capital e Grande SP? Outras comarcas? TRT-2/TRT-15?    | FAQ 10, footer e schema `areaServed`                                                     |
| 7   | Quer a **navegação no header**?                                            | Pequena mudança visual; ajuda links internos                                             |
| 8   | FAQ **recolhido** (`<details>`, recomendado) ou aberto?                    | Layout; o conteúdo indexa nos dois casos                                                 |
| 9   | Existem **depoimentos ou casos** que possam ser citados (com sigilo)?      | Maior ganho de E-E-A-T que falta                                                         |
| 10  | Imagem **OG 1200×630** e **favicon** (o `favicon.ico` foi apagado)         | Preview de compartilhamento e ícone na SERP                                              |
| 11  | Perfil no **LinkedIn** e **Google Business Profile** (área de atendimento) | `sameAs` no schema e SEO local                                                           |
| 12  | O Paulo revisou os textos técnicos e jurídicos?                            | Principalmente FAQ 3 e 9 e os cards de Atuação                                           |

**Fora deste conteúdo (nota do doc 01):** autoridade do domínio, backlinks e Google Business Profile continuam sendo o que mais separa 8 de 10.

---

## 6. Prompts para a IA da IDE

Use o **Prompt 1** para aplicar o conteúdo, quando você aprovar o doc 02. O **Prompt 2** corrige problemas técnicos e é independente do conteúdo, mas **o item 1 dele (`allowedHosts`) precisa estar feito antes do deploy**: sem ele, o servidor Node entrega ao Google um HTML vazio (01 §4, T1).

> Fase 2 (páginas de serviço): quando o doc 02 estiver aprovado, posso gerar o conteúdo completo das 3 páginas e um prompt de implementação.

### 6.1 Prompt 1: aplicar o conteúdo novo (home)

Preencha o bloco **DADOS REAIS** antes de enviar.

```markdown
# TAREFA: aplicar a nova copy de SEO na Home (somente conteúdo e marcação)

Você é um engenheiro front-end sênior (Angular 21 standalone, SSR/prerender, Tailwind 4). Execute **exatamente** o que está em `docs/seo/02-conteudo-novo.md`. Não reescreva nem "melhore" os textos: use o que está entre crases (e os parágrafos do FAQ) tal como estão, com a acentuação correta. Em tabelas, `\|` significa o caractere `|`. Os marcadores 🔁 ✅ 🆕 ⚠️ não fazem parte do texto do site (as instruções de arquivo-alvo e de estrutura de cada bloco continuam valendo).

## 0. DADOS REAIS (substituem os placeholders `[[...]]` do documento)

- DOMINIO: https://www.paulocarvalhoperitojudicial.com
- WHATSAPP (DDI+DDD+número, só dígitos): 55__________
- EMAIL: ______________
- CREA: CREA-SP nº ______________
- REGIAO: São Paulo (capital) e Grande SP
- LINKEDIN (opcional): ______________

Se WHATSAPP, EMAIL ou CREA estiverem vazios, **pare e me pergunte** antes de editar. Não invente dados.

## 1. Contexto do projeto (não precisa redescobrir)

- Angular 21 standalone + SSR/prerender (`src/server.ts`, `src/app/app.routes.server.ts`) e Tailwind 4 (`src/styles.css`).
- Página única em `src/app/features/seo/inicio-page-component/` (`inicio-page-component.{html,ts}`) com seções em `sections/{proposta,demanda,atuacao,pericia,autoridade}-section-component/` (cada uma com `.html` e `.ts`).
- UI compartilhada: `src/app/ui/components/{header-component,eyebrow-component}` (`<app-eyebrow-component label="…">`) e `src/app/ui/directives/{button-directive,container-directive}` (`uiButton` em `a`/`button`, variants `default|cta`, sizes `sm|md|lg`; `uiContainer` em `div`).
- `src/styles.css` **já aplica** `font-heading text-heading-foreground uppercase` a h1–h6. **Não repita** essas classes nos templates e **não edite** o `styles.css`.
- Siga os padrões dos componentes existentes (standalone, `@for` com `track`, `input()`); sem NgModules e sem `*ngFor`.
- Armadilha conhecida: `demanda-section-component.ts` importa `EyebrowComponent` mas não o declara em `imports`. Corrija ao usar `<app-eyebrow-component>`.
- Armadilha: em templates Angular `{{ }}` é interpolação. Os placeholders do documento usam `[[ ]]`: troque pelos valores reais ou por constantes. **Nunca** deixe `[[…]]` ou `{{…}}` literal na saída.

## 2. Passo a passo

**A. Constantes do site (sem repetição).** Crie `src/app/core/site-config.ts` exportando `SITE` (`name`, `domain`, `whatsapp`, `email`, `crea`, `region`, `linkedin?`) e a função `whatsappUrl(message: string)`, que devolve `https://wa.me/<número>?text=<encodeURIComponent(message)>`. Todos os componentes importam os dados daqui. As 3 mensagens de WhatsApp estão em `02 §0.2`.

**B. `src/index.html`** (`02 §1`). `lang="pt-BR"`; `<title>`; meta description; canonical; robots; theme-color; Open Graph; Twitter; `<link rel="icon">` somente se `public/favicon.ico` existir; JSON-LD (bloco do documento, com os valores reais). Aqui não há constantes TS: escreva valores literais. Mantenha `<base href="/">` e o viewport.

**C. Header** (`02 §2`). Marca como link para `/` com `aria-label`; descritor; `<nav aria-label="Principal">` com 4 âncoras (`hidden md:flex`); CTA usando `whatsappUrl(...)` no lugar do `href="#"`.

**D. Hero / Proposta** (`02 §3`). Eyebrow, H1, lead (`<p>` logo abaixo do H1, dentro do `<header>`, com estilo de destaque coerente com o design, ex.: `text-xl`), parágrafo e `alt` da imagem. Botão e classes mantidos.

**E. Demanda** (`02 §4`). Eyebrow via `<app-eyebrow-component>`; H2 mantido; parágrafo; lista de 2 cards (`<ul>`/`<li>`, `<h3>` + `<p>`, dados no `.ts`); CTA como `<a uiButton variant="cta" size="lg" [href]="…">` (hoje é um `<button>` sem ação).

**F. Atuação** (`02 §5`). Textos; `id="atuacao-title"` no H2 (hoje o `aria-labelledby` não tem alvo); cards no `.ts` com `title`, `description`, `linkLabel` e `href`; trocar `<aside>` por `<li>` dentro de `<ul>`, mantendo as classes; botão com `linkLabel` (não "Ver mais"); usar `[href]="c.href"` em vez de interpolação. **Mantenha** os hrefs `/insalubridade`, `/periculosidade` e `/acidente-de-trabalho` (as páginas serão criadas depois).

**G. Perícia** (`02 §6`). Textos; `<ol>`/`<li>` no lugar de `<aside>`, mantendo as classes; 4 cards no `.ts`.

**H. Autoridade** (`02 §7`). Textos, com o CREA vindo de `SITE`; `alt` na imagem; trocar os `<h3>` dos indicadores por `<p>` mantendo o visual (adicione `font-heading text-heading-foreground`, pois o estilo global de headings deixa de se aplicar).

**I. FAQ (novo)** (`02 §8`). Criar `sections/faq-section-component/` (`.ts` + `.html`, seletor `app-faq-section-component`). `<section id="faq" aria-labelledby="faq-title">` com `uiContainer`, eyebrow e H2 com `id="faq-title"`. Os 10 itens ficam no array `faqItems` (`question`, `answer`), renderizados em `<details>/<summary>` com a pergunta em `<h3>` (sem JS) e `normal-case` nas perguntas. Ao final, os 2 links oficiais sugeridos (`target="_blank" rel="noopener"`). Incluir no `inicio-page-component` (imports + template) depois de `app-autoridade-section-component`.

**J. Contato (novo)** (`02 §9`). `sections/contato-section-component/`, `<section id="contato" aria-labelledby="contato-title">`, entre o FAQ e o footer.

**K. Footer (novo)** (`02 §10`). `src/app/ui/components/footer-component/`, com `<footer>`, links internos e dados vindos de `SITE`. **Sem headings** no footer (use `<p>` e `<nav aria-label="Rodapé">`), para não alterar o outline. Copyright com o ano calculado (`new Date().getFullYear()`).

**L. Estrutura global.** Mover `<app-header-component />` e `<app-footer-component />` para `src/app/app.html` (`<app-header-component /><router-outlet /><app-footer-component />`), importando-os em `app.ts` e removendo o header de `inicio-page-component` (`.html` e `.ts`). O `<main id="inicio-page">` fica só com as seções; header e footer ficam fora do `<main>`.

**M. Higiene de HTML.** Remover os `id="container"` duplicados (a diretiva `uiContainer` basta); IDs únicos; todo `aria-labelledby` aponta para um `id` existente; nenhum `href="#"` solto.

## 3. Regras

- **Não** crie as páginas `/insalubridade`, `/periculosidade` e `/acidente-de-trabalho`.
- **Não** altere o design (cores, espaçamentos, tipografia, layout), `styles.css`, `angular.json`, `server.ts`, `package.json` nem as imagens.
- **Não** adicione dependências, analytics ou scripts de terceiros.
- Dados de cards e listas ficam nos arrays do `.ts`; nada de texto repetido no HTML.

## 4. Critérios de aceite (rode e mostre a saída)

1. `npm run build` sem erros.
2. Outline de headings do HTML pré-renderizado: deve ser **1 H1, 6 H2, 19 H3**, igual ao `02 §11`:
   `node -e "const h=require('fs').readFileSync('dist/ui/browser/index.html','utf8');[...h.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/g)].forEach(m=>console.log(m[1].toUpperCase(),m[2].replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim()))"`
3. Sem IDs duplicados e sem `aria-labelledby` órfão no HTML gerado.
4. `<title>` com no máximo 62 caracteres e description com no máximo 155; nenhum `[[`, `{{` ou `TODO` no HTML gerado.
5. Todas as `<img>` com `alt`; nenhum link com `href="#"`.
6. `npx prettier --check` nos arquivos alterados (rode `--write` se necessário).

## 5. Entrega

Responda com: (1) lista de arquivos criados e alterados; (2) a saída dos critérios 1 a 6; (3) pendências: os 3 links que ainda levam a 404, os ativos que faltam (`og-image.jpg`, `favicon.ico`) e qualquer dado que você precisou assumir.
```

### 6.2 Prompt 2: SEO técnico (opcional, rodar antes do deploy)

```markdown
# TAREFA: correções técnicas de SEO (antes de publicar)

Projeto Angular 21 com SSR/prerender (`src/server.ts`) e Tailwind 4. Evidências e contexto: `docs/seo/01-auditoria-seo.md` §4. Faça **somente** o abaixo, na ordem, validando cada item. Não altere textos nem design.

DADOS: DOMINIO = https://www.paulocarvalhoperitojudicial.com · hosts permitidos = www.paulocarvalhoperitojudicial.com, paulocarvalhoperitojudicial.com, localhost

1. **(CRÍTICO) allowedHosts.** Em `angular.json` → `projects.ui.architect.build.options.security.allowedHosts`, liste os hosts acima, **mais qualquer outro por onde o site for acessado (staging, domínio do proxy)**: hoje é `[]`, e por isso o servidor Node devolve um HTML vazio, em modo cliente, para qualquer host e responde 200 para URLs inexistentes; com a lista preenchida, um host não listado recebe 400 (comportamento esperado da proteção contra SSRF). Valide: `npm run build && PORT=4000 node dist/ui/server/server.mjs` e, em outro terminal, `curl -s -H "Host: localhost" http://127.0.0.1:4000/ | grep -c "<h1"` deve retornar 1, e `curl -s -o /dev/null -w "%{http_code}" -H "Host: localhost" http://127.0.0.1:4000/qualquer-coisa` deve retornar 404.
2. **robots.txt e sitemap.xml** em `public/`. `robots.txt`: `User-agent: *`, `Allow: /` e `Sitemap: <DOMINIO>/sitemap.xml`. `sitemap.xml`: a URL `<DOMINIO>/` com `lastmod` de hoje.
3. **Favicon.** `public/favicon.ico` foi apagado do working tree (consta como deletado no git). Restaure com `git checkout -- public/favicon.ico` ou me peça um novo, e confirme o `<link rel="icon" href="/favicon.ico">` no `index.html`.
4. **Imagens (LCP mobile de 12,5 s).** Gere WebP (qualidade ~80, alvo ≈ 60 KB cada) de `public/hero-img.png` (1.046 KB) e `public/sobre-img.png` (788 KB), com nomes descritivos (ex.: `paulo-carvalho-assistente-tecnico.webp`), e atualize as referências. Não apague os PNGs sem me perguntar. Use `NgOptimizedImage` (`ngSrc`; `fill` onde o contêiner já define a proporção, senão `width`/`height`): `priority` no hero e carregamento tardio no "sobre". Mantenha os `alt` existentes. Rode o Lighthouse mobile de novo: o LCP deve cair para menos de 4 s.
5. **Compressão e cache** em `src/server.ts`. Adicione compressão (gzip/brotli) ou confirme que o proxy/CDN já comprime; envie `Cache-Control: no-cache` para `robots.txt` e `sitemap.xml` (hoje o `express.static` usa `maxAge: '1y'` para tudo).
6. **(Opcional) Metadados por rota.** Crie um `SeoService` (`Title`, `Meta` e `DOCUMENT`) que defina `title`, `description`, `canonical` e OG por rota, para as páginas de serviço da Fase 2.
7. **(Opcional) FAQPage em JSON-LD** gerado a partir do array `faqItems` (fonte única). Não gera rich result para este tipo de site (ver `02 §1`).

Entrega: arquivos alterados + a saída das validações dos itens 1 e 4.
```

---

## 7. Como validar depois de aplicar

| O que conferir                               | Como                                                                                                                                                                                                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Headings e texto no HTML que o Google recebe | `npm run build`, depois o comando do critério 2 do Prompt 1                                                                                                                                                                                            |
| SSR entregando conteúdo                      | Com o Prompt 2 aplicado: `curl -s -H "Host: localhost" http://127.0.0.1:4000/ \| grep -c "<h1"` → `1`                                                                                                                                                  |
| Higiene técnica e performance                | `NG_ALLOWED_HOSTS=localhost PORT=4000 node dist/ui/server/server.mjs`, depois `npx lighthouse@12 http://localhost:4000 --only-categories=seo,performance --output=html --output-path=./lh.html`. Metas: SEO ≥ 95; Performance mobile ≥ 85; LCP < 2,5 s |
| Dados estruturados                           | [Rich Results Test](https://search.google.com/test/rich-results) e [Schema Markup Validator](https://validator.schema.org/) com a URL pública                                                                                                          |
| Preview ao compartilhar                      | Colar o link no WhatsApp e no [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)                                                                                                                                                      |
| Indexação                                    | Search Console: inspecionar a URL, enviar o sitemap e acompanhar impressões por cluster por 2–4 semanas                                                                                                                                                |
