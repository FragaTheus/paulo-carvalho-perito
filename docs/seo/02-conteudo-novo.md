# 02 — Conteúdo novo da Home

> **Status: PROPOSTA.** Nada foi alterado no código do site. Este documento é a fonte da verdade do texto novo, para você comparar com o atual e, se aprovar, entregar à IA da IDE (prompt em [03-justificativas-e-prompt.md](./03-justificativas-e-prompt.md)).
>
> Contexto e dados de apoio: [01-auditoria-seo.md](./01-auditoria-seo.md).

---

## 0. Como ler este documento

| Marca       | Significado                                                                            |
| ----------- | -------------------------------------------------------------------------------------- |
| 🔁          | Texto **reescrito** (existia antes)                                                    |
| ✅          | Texto **mantido** de propósito                                                         |
| 🆕          | Elemento **novo** (não existe hoje)                                                    |
| ⚠️          | **Confirmar com o Paulo** antes de publicar (não inventei o dado)                      |
| `[[ASSIM]]` | Placeholder. Em colchetes duplos de propósito: `{{ }}` quebraria o template do Angular |

- Os textos estão em caixa normal. O `styles.css` já aplica `uppercase` aos headings, então **não** escreva em maiúsculas.
- Em tabelas, `\|` representa o caractere `|` (ex.: no `<title>`). Os marcadores 🔁 ✅ 🆕 ⚠️ **não fazem parte do texto do site**.
- Cada bloco informa o **arquivo-alvo**.
- Texto de cards/listas vai nos arrays dos `.ts` (como já é hoje), não repetido no HTML.

### 0.1 Placeholders (preencher antes de publicar)

| Placeholder    | Valor                                             | Observação                                                                             |
| -------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `[[DOMINIO]]`  | `https://www.paulocarvalhoperitojudicial.com`     | Domínio do site atual (achado na pesquisa). ⚠️ Confirmar que o novo site usará o mesmo |
| `[[WHATSAPP]]` | número com DDI, só dígitos (ex.: `55119XXXXXXXX`) | ⚠️ O número já consta no site atual                                                    |
| `[[EMAIL]]`    | e-mail profissional                               | ⚠️ Já consta no site atual                                                             |
| `[[CREA]]`     | `CREA-SP nº 0000000`                              | ⚠️ Registro profissional: forte sinal de confiança                                     |
| `[[REGIAO]]`   | `São Paulo (capital) e Grande SP`                 | ⚠️ Confirmar abrangência                                                               |
| `[[LINKEDIN]]` | URL do perfil (opcional)                          | Entra em `sameAs` do schema                                                            |

### 0.2 Mensagens pré-preenchidas do WhatsApp (o dev faz o URL-encode)

| Onde             | Mensagem                                                                            |
| ---------------- | ----------------------------------------------------------------------------------- |
| Header e hero    | `Olá, Paulo. Preciso de assistência técnica em uma perícia trabalhista.`            |
| Seção Demanda    | `Olá, Paulo. Tenho um processo com perícia e gostaria de falar sobre o caso.`       |
| Contato e footer | `Olá, Paulo. Vim pelo site e gostaria de uma primeira orientação sobre o meu caso.` |

Formato do link: `https://wa.me/[[WHATSAPP]]?text=<mensagem codificada>`

---

## 1. Metadados da página

**Arquivo-alvo:** `src/index.html` (estático: funciona no prerender/SSR)

| Campo                         | Valor                                                                                                                                                 | Status            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `<html lang>`                 | `pt-BR`                                                                                                                                               | 🔁 (hoje `pt-br`) |
| `<title>` (61 car.)           | `Assistente Técnico em Perícia Trabalhista SP \| Paulo Carvalho`                                                                                      | 🔁                |
| `meta description` (147 car.) | `Assistente técnico em perícias trabalhistas em São Paulo: insalubridade, periculosidade e acidente de trabalho. Engenheiro com +20 anos de atuação.` | 🆕                |
| `link rel="canonical"`        | `[[DOMINIO]]/`                                                                                                                                        | 🆕                |
| `meta robots`                 | `index, follow, max-image-preview:large`                                                                                                              | 🆕                |
| `meta theme-color`            | `#131313` (mesma cor do `--background`)                                                                                                               | 🆕                |
| `link rel="icon"`             | `/favicon.ico` (⚠️ o arquivo foi apagado de `public/`)                                                                                                | 🆕                |
| `google-site-verification`    | ⚠️ Copiar do `<head>` do site atual, para não perder a propriedade no Search Console                                                                  | 🆕                |

**Open Graph e Twitter** (preview ao compartilhar no WhatsApp/LinkedIn, o canal real do público):

| Tag                                     | Valor                                                                                                                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `og:type`                               | `website`                                                                                                                                                |
| `og:locale`                             | `pt_BR`                                                                                                                                                  |
| `og:site_name`                          | `Paulo Carvalho — Perito e Assistente Técnico Trabalhista`                                                                                               |
| `og:title`                              | `Assistente Técnico em Perícia Trabalhista em São Paulo`                                                                                                 |
| `og:description` (150 car.)             | `Quesitos, acompanhamento da diligência e parecer sobre o laudo do perito do juízo. Engenheiro de Segurança do Trabalho com +20 anos e +3.000 perícias.` |
| `og:url`                                | `[[DOMINIO]]/`                                                                                                                                           |
| `og:image`                              | `[[DOMINIO]]/og-image.jpg` (⚠️ criar imagem **1200×630**, até 200 KB)                                                                                    |
| `og:image:alt`                          | `Paulo Carvalho, assistente técnico em perícias trabalhistas em São Paulo`                                                                               |
| `twitter:card`                          | `summary_large_image`                                                                                                                                    |
| `twitter:title` / `twitter:description` | iguais ao `og:title` / `og:description`                                                                                                                  |

**Dados estruturados (JSON-LD)**, colar em `<script type="application/ld+json">` no `<head>`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "[[DOMINIO]]/#website",
      "url": "[[DOMINIO]]/",
      "name": "Paulo Carvalho — Assistente Técnico em Perícias Trabalhistas",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "[[DOMINIO]]/#servico" }
    },
    {
      "@type": "Person",
      "@id": "[[DOMINIO]]/#paulo",
      "name": "Paulo Carvalho",
      "jobTitle": "Engenheiro de Segurança do Trabalho, perito e assistente técnico",
      "description": "Engenheiro de Segurança do Trabalho com mais de 20 anos de atuação como perito e assistente técnico em processos trabalhistas.",
      "url": "[[DOMINIO]]/",
      "image": "[[DOMINIO]]/og-image.jpg",
      "knowsAbout": [
        "Perícia trabalhista",
        "Assistência técnica pericial",
        "Insalubridade (NR-15)",
        "Periculosidade (NR-16)",
        "Acidente de trabalho",
        "Engenharia de Segurança do Trabalho"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Registro profissional",
        "name": "[[CREA]]"
      },
      "sameAs": ["[[LINKEDIN]]"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "[[DOMINIO]]/#servico",
      "name": "Paulo Carvalho — Assistência Técnica em Perícias Trabalhistas",
      "url": "[[DOMINIO]]/",
      "image": "[[DOMINIO]]/og-image.jpg",
      "description": "Assistência técnica em perícias de insalubridade, periculosidade e acidente de trabalho para advogados e empresas.",
      "email": "[[EMAIL]]",
      "telephone": "+[[WHATSAPP]]",
      "founder": { "@id": "[[DOMINIO]]/#paulo" },
      "areaServed": [
        { "@type": "City", "name": "São Paulo" },
        { "@type": "AdministrativeArea", "name": "Grande São Paulo" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Assistência técnica em perícias trabalhistas",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Assistência técnica em perícia de insalubridade"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Assistência técnica em perícia de periculosidade"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Assistência técnica em perícia de acidente de trabalho"
            }
          }
        ]
      }
    }
  ]
}
```

Notas sobre o schema:

- Sem endereço de propósito: a atuação é por área de atendimento (`areaServed`). Se houver endereço público, acrescente `address`.
- Sem LinkedIn? Remova a propriedade `sameAs` (não deixe valor vazio).
- O bloco acima foi validado como JSON e as referências `@id` resolvem (testado com valores de exemplo).
- `FAQPage` é opcional e de baixa prioridade. Desde 2023 o Google só exibe rich result de FAQ para sites governamentais e de saúde; o markup continua válido, mas **não** espere estrelinhas/accordion no Google.

---

## 2. Header

**Arquivo-alvo:** `src/app/ui/components/header-component/header-component.html`

| Elemento                                                             | Hoje                                     | Novo                                                                                                                     | Status                                |
| -------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| Marca                                                                | `<span>Paulo Carvalho</span>` (sem link) | Link para `/` com o texto `Paulo Carvalho` e `aria-label="Paulo Carvalho, perito e assistente técnico — página inicial"` | 🔁                                    |
| Descritor da marca (visível a partir de `md`)                        | —                                        | `Perito e assistente técnico`                                                                                            | 🆕                                    |
| Navegação (`<nav aria-label="Principal">`, visível a partir de `md`) | —                                        | `Atuação` → `#atuacao` · `Como funciona` → `#pericia` · `Sobre` → `#autoridade` · `Dúvidas` → `#faq`                     | 🆕 (opcional, pequena mudança visual) |
| CTA desktop                                                          | `Falar com especialista` com `href="#"`  | `Falar com especialista` → link do WhatsApp (mensagem do header)                                                         | 🔁 (texto ✅, destino corrigido)      |
| CTA mobile                                                           | `Conversar`                              | `Conversar`                                                                                                              | ✅                                    |

---

## 3. Seção 1: Proposta (hero)

**Arquivos-alvo:** `.../sections/proposta-section-component/proposta-section-component.html`

| Elemento                                                                 | Texto novo                                                                                                                                                                                                                         | Status                                         |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Eyebrow                                                                  | `Engenheiro de Segurança do Trabalho / Perito judicial`                                                                                                                                                                            | 🔁                                             |
| **H1** (56 car.)                                                         | `Assistente técnico em perícias trabalhistas em São Paulo`                                                                                                                                                                         | 🔁                                             |
| Lead (`<p>` logo abaixo do H1, dentro do `<header>`; estilo de destaque) | `Decisões mais seguras diante da prova pericial.`                                                                                                                                                                                  | ✅ (era o H1; a frase de marca foi preservada) |
| Parágrafo                                                                | `Mais de 20 anos como perito e assistente técnico. Quesitos, acompanhamento da diligência e parecer sobre o laudo do perito do juízo, para advogados e empresas em ações de insalubridade, periculosidade e acidente de trabalho.` | 🔁                                             |
| Botão (`href="#atuacao"`)                                                | `Conhecer a atuação`                                                                                                                                                                                                               | ✅                                             |
| `alt` da imagem `/hero-img.png`                                          | `Paulo Carvalho, engenheiro de segurança do trabalho e perito, de terno e braços cruzados`                                                                                                                                         | 🔁                                             |

---

## 4. Seção 2: Demanda

**Arquivos-alvo:** `.../sections/demanda-section-component/demanda-section-component.{html,ts}`

| Elemento  | Texto novo                                                                                                                                                                                                                                    | Status                                                                            |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Eyebrow   | `Para advogados e empresas`                                                                                                                                                                                                                   | 🆕                                                                                |
| H2        | `Prazo. Diligência. Laudo.`                                                                                                                                                                                                                   | ✅ (decisão de marca; as palavras-chave vêm do eyebrow, do parágrafo e dos cards) |
| Parágrafo | `A perícia trabalhista tem prazos curtos, vistoria técnica e um laudo de grande peso na decisão do juiz. O assistente técnico assume essa frente — quesitos, diligência e parecer — para que você mantenha o foco na estratégia do processo.` | 🔁                                                                                |
| Botão     | `Falar sobre meu caso` → link do WhatsApp (mensagem da Demanda). Hoje é `<button>` sem ação; deve virar `<a uiButton variant="cta" size="lg">`                                                                                                | 🔁 (texto ✅, destino corrigido)                                                  |

**Cards "para quem"** (🆕, lista de 2 itens, `<h3>` + `<p>`):

| H3                            | Descrição                                                                                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Advogados trabalhistas`      | `Quesitos objetivos, leitura crítica do laudo e parecer técnico para fundamentar a tese, com a visão de quem conhece a rotina do perito do juízo.`      |
| `Empresas e jurídico interno` | `Preparação para a vistoria, organização da documentação técnica e acompanhamento da perícia, para que o laudo reflita as condições reais de trabalho.` |

---

## 5. Seção 3: Atuação

**Arquivos-alvo:** `.../sections/atuacao-section-component/atuacao-section-component.{html,ts}`

| Elemento     | Texto novo                                                                                                                                                                                   | Status                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Eyebrow      | `Áreas de atuação`                                                                                                                                                                           | ✅                        |
| H2 (64 car.) | `Perícias de insalubridade, periculosidade e acidente de trabalho`                                                                                                                           | 🔁                        |
| Parágrafo    | `Cada tipo de perícia segue normas e critérios próprios. A assistência técnica acompanha o trabalho do perito do juízo e avalia se as conclusões do laudo estão tecnicamente fundamentadas.` | 🔁 (o atual repetia o H2) |

**Cards** (hoje só têm título e botão; agora ganham descrição e botão descritivo):

| H3                       | Descrição                                                                                                                                                                                                                 | Texto do botão             | Destino                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------- |
| `Insalubridade (NR-15)`  | `Avaliação de agentes como ruído, calor e agentes químicos e biológicos, e da neutralização por EPIs, para definir se há adicional e em qual grau (10%, 20% ou 40%).`                                                     | `Ver insalubridade`        | `/insalubridade`        |
| `Periculosidade (NR-16)` | `Análise de atividades com inflamáveis, explosivos, energia elétrica, segurança pessoal ou patrimonial e motocicleta, considerando o tempo de exposição e o risco acentuado, para definir o direito ao adicional de 30%.` | `Ver periculosidade`       | `/periculosidade`       |
| `Acidente de trabalho`   | `Análise das causas do acidente, das condições do ambiente, das máquinas e equipamentos e das medidas de segurança adotadas, com leitura técnica do laudo pericial.`                                                      | `Ver acidente de trabalho` | `/acidente-de-trabalho` |

- O botão genérico `Ver mais` (×3) vira texto descritivo (melhor para o Google e para leitores de tela).
- ⚠️ Os três destinos **ainda não existem** (viram 404 quando o SSR estiver correto). Mantenha os links se as páginas forem criadas na Fase 2; se for publicar antes, remova os botões temporariamente.
- ⚠️ Opcional, só se o Paulo atender: 4º card `Ergonomia (NR-17)`. A busca por "perícia ergonômica trabalhista" existe, mas não incluí por não constar entre os serviços atuais.

---

## 6. Seção 4: Perícia (como funciona)

**Arquivos-alvo:** `.../sections/pericia-section-component/pericia-section-component.{html,ts}`

| Elemento | Texto novo                                       | Status                                                |
| -------- | ------------------------------------------------ | ----------------------------------------------------- |
| Eyebrow  | `Como funciona a assistência técnica`            | 🔁 (era `Assistência ao longo da perícia`)            |
| H2       | `Da nomeação do perito ao parecer sobre o laudo` | 🔁 (era `Da análise inicial às conclusões do laudo.`) |

**Cards** (lista ordenada de 4 passos):

| #   | H3                      | Descrição                                                                                                                                                     | Status                          |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 1   | `Análise e quesitos`    | `Leitura da petição inicial, da defesa e dos documentos para definir os pontos controvertidos e formular os quesitos no prazo fixado pelo juiz.`              | 🔁 (título ✅)                  |
| 2   | `Preparação`            | `Orientação sobre a documentação técnica que costuma ser pedida na vistoria — LTCAT, PGR/PPRA, PCMSO e fichas de EPI — e sobre os pontos de atenção do caso.` | 🔁 (título ✅)                  |
| 3   | `Diligência`            | `Acompanhamento da vistoria do perito do juízo para observar medições, métodos e condições reais do posto de trabalho e registrar o que for relevante.`       | 🔁 (título ✅)                  |
| 4   | `Parecer sobre o laudo` | `Análise das conclusões do perito e elaboração de parecer técnico, concordante ou divergente, para fundamentar a manifestação da parte.`                      | 🔁 (era `Laudo e manifestação`) |

---

## 7. Seção 5: Autoridade (sobre)

**Arquivos-alvo:** `.../sections/autoridade-section-component/autoridade-section-component.{html,ts}`

| Elemento                         | Texto novo                                                                                                                                                                                                                                                                                                                                                                                                  | Status                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Eyebrow                          | `Sobre Paulo Carvalho`                                                                                                                                                                                                                                                                                                                                                                                      | 🔁 (era `sobre`)                                             |
| H2 (43 car.)                     | `Paulo Carvalho, perito e assistente técnico`                                                                                                                                                                                                                                                                                                                                                               | 🔁 (era `Experiência construída dentro da rotina pericial.`) |
| Parágrafo                        | `Engenheiro de Segurança do Trabalho ([[CREA]]), com formação em Segurança do Trabalho e Engenharia Ambiental. Há mais de 20 anos atua como perito e assistente técnico em processos trabalhistas em São Paulo e região, com experiência em diligências, laudos e pareceres para advogados e empresas. Conhecer a rotina do perito do juízo ajuda a antecipar os pontos que o laudo pode deixar em aberto.` | 🔁                                                           |
| `alt` da imagem `/sobre-img.png` | `Retrato de Paulo Carvalho, perito e assistente técnico em perícias trabalhistas`                                                                                                                                                                                                                                                                                                                           | 🆕 (hoje sem `alt`)                                          |

**Indicadores** (mantidos exatamente):

| Número     | Legenda                                  | Status |
| ---------- | ---------------------------------------- | ------ |
| `+20 anos` | `Em Engenharia de Segurança do Trabalho` | ✅     |
| `+1.500`   | `Assistências técnicas concluídas`       | ✅     |
| `+3.000`   | `Perícias judiciais realizadas`          | ✅     |

- Recomendação técnica: trocar os `<h3>` numéricos por `<p>` (mantendo o mesmo visual), pois "+20 anos" não é um título de seção e polui o outline de headings.
- ⚠️ Confirmar: a formação (Segurança do Trabalho e Engenharia Ambiental) veio do site atual; o `[[CREA]]`; e que os +20 anos incluem atuação em São Paulo/região.

---

## 8. Seção 6: FAQ 🆕

**Arquivos-alvo (novos):** `.../sections/faq-section-component/faq-section-component.{html,ts}`

- `<section id="faq" aria-labelledby="faq-title">`, posicionada **depois** de Autoridade.
- Perguntas em `<details>/<summary>` (nativo, sem JS), com a pergunta em `<h3>`; conteúdo sempre presente no HTML.
- Recomendado: `normal-case` nas perguntas (única exceção ao uppercase global) para legibilidade de frases longas.

| Elemento | Texto                                                      |
| -------- | ---------------------------------------------------------- |
| Eyebrow  | `Perguntas frequentes`                                     |
| H2       | `Dúvidas sobre assistência técnica em perícia trabalhista` |

**Perguntas e respostas** (cada resposta cita a fonte legal; todas foram conferidas em fonte oficial, ver 01-auditoria §10):

1. **O que faz o assistente técnico na perícia trabalhista?**
   O assistente técnico é o profissional de confiança da parte, seja a empresa ou o trabalhador, que acompanha a perícia judicial. Ele analisa o caso, sugere quesitos, acompanha a diligência e elabora parecer técnico sobre o laudo do perito do juízo, apontando concordâncias e divergências.

2. **Qual a diferença entre perito judicial e assistente técnico?**
   O perito é nomeado pelo juiz e atua de forma imparcial para esclarecer o fato técnico. O assistente técnico é indicado e remunerado por uma das partes, é de sua confiança e não está sujeito a impedimento ou suspeição (CPC, art. 466, § 1º). Ele não substitui o perito: oferece o contraponto técnico à prova pericial. Por isso, um mesmo profissional não atua nas duas funções no mesmo processo.

3. **Qual é o prazo para indicar assistente técnico e apresentar quesitos?**
   Em regra, o prazo consta da decisão que nomeia o perito. O CPC prevê 15 dias contados da intimação (art. 465, § 1º), mas a Justiça do Trabalho pode fixar prazo diferente. Confira a intimação e acione o assistente técnico o quanto antes.

4. **O assistente técnico pode contestar o laudo do perito?**
   Ele apresenta parecer técnico sobre o laudo (CPC, art. 477, § 1º), e o advogado da parte formaliza a manifestação ou impugnação no processo com base nesse parecer. O perito do juízo deve esclarecer os pontos divergentes apontados (art. 477, § 2º).

5. **Quando contratar um assistente técnico?**
   O quanto antes após a nomeação do perito, quando se definem os quesitos e se prepara a vistoria. O perito deve avisar as partes sobre as diligências com antecedência mínima de 5 dias (CPC, art. 466, § 2º), o que permite ao assistente técnico acompanhá-las.

6. **É obrigatório ter assistente técnico?**
   Não. A indicação é faculdade da parte (Súmula 341 do TST). Sem assistente técnico, porém, a parte fica sem acompanhamento especializado na vistoria e sem parecer para questionar o laudo.

7. **Quem paga o assistente técnico?**
   A parte que o indicou, ainda que vença o objeto da perícia (Súmula 341 do TST; CPC, art. 95). Os honorários variam conforme a complexidade do caso e o número de diligências. Peça uma análise do processo para receber orçamento.

8. **Quem pode fazer perícia de insalubridade e periculosidade?**
   A CLT determina que a caracterização e a classificação da insalubridade e da periculosidade sejam feitas por perícia a cargo de médico do trabalho ou engenheiro do trabalho (art. 195). Paulo Carvalho é engenheiro de segurança do trabalho, com mais de 20 anos de atuação pericial.

9. **Como é a perícia de insalubridade quando a empresa fechou ou o local foi desativado?**
   A perícia é obrigatória para verificar a insalubridade, mas, quando não é possível realizá-la, como no fechamento da empresa, o juiz pode usar outros meios de prova (OJ 278 da SBDI-1 do TST). O assistente técnico ajuda a avaliar se a perícia em local semelhante ou a prova documental retratam as condições reais.

10. **Em quais regiões o atendimento é feito?** ⚠️
    Atendimento em São Paulo (capital) e na Grande São Paulo, com acompanhamento presencial das diligências. Para outras comarcas, consulte a disponibilidade.

Links oficiais sugeridos (abrir em nova aba, `rel="noopener"`), opcionais, para reforçar a confiança:
[CPC, Lei 13.105/2015](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm) · [CLT, Decreto-Lei 5.452/1943](https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm)

---

## 9. Seção 7: Contato 🆕

**Arquivos-alvo (novos):** `.../sections/contato-section-component/contato-section-component.{html,ts}`
`<section id="contato" aria-labelledby="contato-title">`, antes do footer.

| Elemento                         | Texto                                                                                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eyebrow                          | `Contato`                                                                                                                                                         |
| H2                               | `Tem uma perícia marcada ou um laudo para analisar?`                                                                                                              |
| Parágrafo                        | `Conte o tipo de ação (insalubridade, periculosidade ou acidente de trabalho), a fase do processo e os prazos em andamento para receber uma primeira orientação.` |
| Botão (`uiButton variant="cta"`) | `Falar no WhatsApp` → link (mensagem de contato)                                                                                                                  |
| Link secundário                  | `[[EMAIL]]` (`mailto:`)                                                                                                                                           |

---

## 10. Footer 🆕

**Arquivos-alvo (novos):** `src/app/ui/components/footer-component/footer-component.{html,ts}`, fora do `<main>`, no mesmo nível do header.

| Elemento  | Texto                                                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Marca     | `Paulo Carvalho` + `Engenheiro de Segurança do Trabalho · [[CREA]]`                                                                          |
| Descrição | `Assistência técnica em perícias trabalhistas em São Paulo e Grande SP.`                                                                     |
| Links     | `Atuação` · `Como funciona` · `Sobre` · `Dúvidas` (âncoras) e, quando existirem, `Insalubridade` · `Periculosidade` · `Acidente de trabalho` |
| Contato   | WhatsApp · `[[EMAIL]]` · `[[REGIAO]]`                                                                                                        |
| Aviso     | `As informações deste site têm caráter informativo e não substituem a análise técnica do caso concreto.`                                     |
| Copyright | `© [ano atual] Paulo Carvalho. Todos os direitos reservados.` (ano calculado, não fixo)                                                      |

⚠️ Se o site passar a usar Analytics/pixels/formulário, incluir link para **Política de Privacidade** (LGPD).

---

## 11. Estrutura de headings resultante

```
H1  Assistente técnico em perícias trabalhistas em São Paulo
H2  Prazo. Diligência. Laudo.
    H3  Advogados trabalhistas
    H3  Empresas e jurídico interno
H2  Perícias de insalubridade, periculosidade e acidente de trabalho
    H3  Insalubridade (NR-15)
    H3  Periculosidade (NR-16)
    H3  Acidente de trabalho
H2  Da nomeação do perito ao parecer sobre o laudo
    H3  Análise e quesitos
    H3  Preparação
    H3  Diligência
    H3  Parecer sobre o laudo
H2  Paulo Carvalho, perito e assistente técnico
H2  Dúvidas sobre assistência técnica em perícia trabalhista
    H3  (10 perguntas)
H2  Tem uma perícia marcada ou um laudo para analisar?
```

Total: **1 H1 · 6 H2 · 19 H3**, sem saltos de nível (hoje: 1 H1 · 4 H2 · 10 H3, três deles são números).

---

## 12. Apêndice A: páginas de serviço (Fase 2)

Os cards da seção Atuação já apontam para três rotas. Cada uma deve ser uma página própria (um URL por palavra-chave). Esboço de cada uma:

### `/insalubridade`

- **Title** (55 car.): `Assistente Técnico em Insalubridade SP | Paulo Carvalho`
- **Description** (154 car.): `Assistência técnica em perícia de insalubridade (NR-15): quesitos, acompanhamento da vistoria e parecer sobre o laudo. Engenheiro com +20 anos de atuação.`
- **H1:** `Assistente técnico em perícia de insalubridade`
- **H2s:** O que é a perícia de insalubridade e como funciona · Agentes avaliados: ruído, calor, agentes químicos e biológicos (NR-15) · EPIs e neutralização do agente · Perícia em empresa fechada ou local desativado · O que o assistente técnico faz em cada etapa · Documentos úteis (LTCAT, PGR/PPRA, PCMSO, fichas de EPI) · Perguntas frequentes
- **Palavras-chave:** assistente técnico insalubridade · perícia de insalubridade · quesitos perícia insalubridade · impugnação laudo insalubridade · perícia insalubridade empresa fechada

### `/periculosidade`

- **Title** (56 car.): `Assistente Técnico em Periculosidade SP | Paulo Carvalho`
- **Description** (152 car.): `Assistência técnica em perícia de periculosidade (NR-16): enquadramento, tempo de exposição, quesitos e parecer sobre o laudo. Atendimento em São Paulo.`
- **H1:** `Assistente técnico em perícia de periculosidade`
- **H2s:** Quando há direito ao adicional de periculosidade (CLT, art. 193) · Atividades avaliadas: inflamáveis, explosivos, energia elétrica, segurança pessoal ou patrimonial e motocicleta · Exposição permanente, intermitente e eventual · Quesitos para perícia de periculosidade · Eliminação do risco e cessação do adicional · Perguntas frequentes
- **Palavras-chave:** assistente técnico periculosidade · perícia de periculosidade · quesitos perícia periculosidade · periculosidade eletricidade/motociclista/vigilante

### `/acidente-de-trabalho`

- **Title** (62 car.): `Assistente Técnico em Acidente de Trabalho SP | Paulo Carvalho`
- **Description** (155 car.): `Assistência técnica em perícia de acidente de trabalho: causas, ambiente e medidas de segurança, quesitos e parecer sobre o laudo. Engenheiro com +20 anos.`
- **H1:** `Assistente técnico em perícia de acidente de trabalho`
- **H2s:** Quando a perícia técnica é necessária · Análise das causas e das condições de trabalho · Máquinas, equipamentos e medidas de segurança · Quesitos para perícia de acidente de trabalho · Perícia técnica e perícia médica: o que cada uma avalia · Perguntas frequentes
- **Atenção:** a busca "perícia acidente de trabalho" mistura intenção de INSS/segurado. Qualificar sempre com "trabalhista", "técnica" ou "engenharia".

Cada página: 1 H1, title/description próprios, canonical próprio, breadcrumb (`Início > Serviço`), botão de WhatsApp, links cruzados entre as três e para a home, e FAQ própria.

---

## 13. Apêndice B: pautas de conteúdo informativo (Fase 3)

Cada guia deve linkar para a página de serviço correspondente. Todos partem de perguntas reais do autocomplete do Google.

| #   | Pauta                                                                              | Palavra-chave alvo                          |
| --- | ---------------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | Perícia de insalubridade: como funciona, quanto tempo leva e quem pode fazer       | perícia de insalubridade como funciona      |
| 2   | Perito judicial x assistente técnico: o que diz o CPC                              | diferença entre perito e assistente técnico |
| 3   | Prazo para indicar assistente técnico e apresentar quesitos na Justiça do Trabalho | prazo para indicação de assistente técnico  |
| 4   | Quesitos para perícia de insalubridade e periculosidade: o que perguntar           | quesitos perícia trabalhista                |
| 5   | Como contestar o laudo pericial trabalhista: parecer técnico divergente            | impugnação laudo pericial trabalhista       |
| 6   | Laudo de insalubridade, LTCAT e PGR: qual a diferença?                             | laudo de insalubridade e ltcat              |
| 7   | Perícia de insalubridade em empresa fechada ou local desativado                    | perícia insalubridade local desativado      |
| 8   | Periculosidade para motociclistas, eletricistas e vigilantes: como é a perícia     | perícia periculosidade motociclista         |

---

## 14. Nota de SEO do conteúdo novo

**Nota projetada: 8,2 / 10** (conteúdo atual: 2,3 / 10). Mesma rubrica da auditoria ([01 §3](./01-auditoria-seo.md)).

| #   | Critério                                |    Peso |  Atual |   Novo | Evidência (medida neste documento)                                                                                                                                                                                                                                                                                  |
| --- | --------------------------------------- | ------: | -----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Palavras-chave em title, H1, H2 e texto |      25 |      6 | **22** | Title e H1 com a palavra-chave principal e a cidade; H2/H3 com os 3 serviços; primeiro parágrafo com todos os clusters; 10 long-tails no FAQ; sem _stuffing_ ("assistente técnico" ≈ 1,6% do texto, contra 3,7% de um concorrente que faz _stuffing_). Perde pontos porque os serviços ainda não têm página própria |
| 2   | Intenção de busca e profundidade        |      20 |      3 | **16** | ≈ 1.150 palavras (hoje 232; concorrentes 1.000–2.000); responde o quê, quem, como, quando, quanto e qual a base legal. Faltam guias aprofundados e casos                                                                                                                                                            |
| 3   | Metadados e marcação                    |      15 |      2 | **13** | Title 61 car.; description 147 car.; canonical; OG/Twitter; JSON-LD (WebSite + Person + ProfessionalService); `alt` nas 2 imagens; `lang` correto. Pendentes: `og-image.jpg` e favicon (ativos)                                                                                                                     |
| 4   | Estrutura semântica e links             |      10 |      4 |  **8** | 1 H1, 6 H2, 19 H3 sem saltos; IDs únicos; `aria-labelledby` íntegros; nav e footer; âncoras descritivas. Perde pontos pelos links para páginas de serviço que ainda não existem                                                                                                                                     |
| 5   | E-E-A-T (autoridade e confiança)        |      15 |      6 | **12** | Credencial + CREA + formação + números (+20 anos, +1.500, +3.000) + base legal citada (CPC/CLT/TST) + bio com nome + schema `Person`. Faltam depoimentos, casos e publicações                                                                                                                                       |
| 6   | SEO local (São Paulo)                   |      10 |      1 |  **7** | "São Paulo/SP" em title, H1, description, FAQ, footer e `areaServed`; região de atendimento explícita. Falta endereço/Google Business Profile (fora do site)                                                                                                                                                        |
| 7   | Conversão e contato                     |       5 |      1 |  **4** | WhatsApp em 4 pontos (header, demanda, contato, footer) com mensagem pré-preenchida + e-mail                                                                                                                                                                                                                        |
|     | **Total**                               | **100** | **23** | **82** |                                                                                                                                                                                                                                                                                                                     |

**Verificações objetivas** (feitas por script sobre o texto deste documento):

| Item                                                                  | Resultado                              |
| --------------------------------------------------------------------- | -------------------------------------- |
| Title                                                                 | 61 caracteres (alvo ≤ 62)              |
| Meta description                                                      | 147 caracteres (alvo ≤ 155)            |
| H1 contém "assistente técnico", "perícias trabalhistas" e "São Paulo" | ✅                                     |
| Palavras visíveis na home                                             | ≈ 1.150 (hoje 232)                     |
| Perguntas no FAQ                                                      | 10 (média de 44 palavras por resposta) |
| Headings                                                              | 1 H1 · 6 H2 · 19 H3                    |

**Como interpretar:** a nota mede só a qualidade **on-page do conteúdo**. Posição no Google também depende de autoridade do domínio, backlinks, Google Business Profile, velocidade e comportamento dos usuários, e nenhum conteúdo garante posição. Para subir de 8,2 para 9+: Fase 2 (3 páginas de serviço), Google Business Profile com avaliações, Fase 3 (guias) e primeiros backlinks.
