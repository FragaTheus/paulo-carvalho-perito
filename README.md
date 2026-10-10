# Site comercial editorial — Paulo Carvalho

Site comercial de serviços profissionais com abordagem editorial: apresenta a atuação do Paulo Carvalho como engenheiro de segurança do trabalho, perito judicial e assistente técnico em perícias trabalhistas, enquanto publica conteúdo informativo para apoiar a descoberta orgânica e a tomada de decisão de advogados e empresas.

O produto combina páginas de serviço, conteúdo técnico e jurídico revisável, navegação orientada por público e chamadas de contato. Não é um CMS nem um blog: o conteúdo e as páginas são mantidos no código, com documentação editorial para revisão e atualização.

## Visão técnica

- **Angular 21** com TypeScript e componentes standalone.
- **Angular Router** com carregamento lazy das páginas.
- **SSR e prerender** pelo Angular SSR, entregando HTML inicial indexável para as seis rotas públicas.
- **Tailwind CSS 4** para estilos utilitários e tokens de design definidos em CSS.
- **SEO técnico** com metadados por rota, canonical, Open Graph, Twitter Cards, JSON-LD, robots.txt e sitemap.
- **Acessibilidade** com HTML semântico, nomes acessíveis para navegação e imagens com texto alternativo.
- **Conteúdo editorial** separado em documentos Markdown para orientar revisão de textos e afirmações profissionais.

## Estrutura do projeto

```text
src/
  app/
    core/
      seo/                 # Serviço de title, description, canonical e metadados
    features/
      seo/
        inicio-page-component/
          sections/        # Seções reutilizáveis da página inicial
        advogados-page-component/
        empresas-page-component/
        insalubridade-page-component/
        periculosidade-page-component/
        acidente-de-trabalho-page-component/
        layout-component/  # Elementos globais e outlet das rotas
    ui/
      components/          # Header, footer, FAQ, hero, CTA, cards etc.
      directives/          # Diretivas de layout e apresentação
  index.html               # Metadados e JSON-LD base
  server.ts                # Servidor Node/Express para Angular SSR
public/
  favicon.svg
  hero-img.webp
  sobre-img.webp
  robots.txt
  sitemap.xml
docs/
  editorial/               # Conteúdo revisável por seção e chave editorial
  seo/                     # Auditoria, estratégia e documentação de conteúdo SEO
```

## Rotas públicas

| Rota                    | Objetivo                                                          |
| ----------------------- | ----------------------------------------------------------------- |
| `/`                     | Apresentação dos serviços, autoridade profissional, FAQ e contato |
| `/advogados`            | Assistência técnica para advogados trabalhistas                   |
| `/empresas`             | Preparação e acompanhamento de perícias para empresas             |
| `/insalubridade`        | Serviço de perícia de insalubridade                               |
| `/periculosidade`       | Serviço de perícia de periculosidade                              |
| `/acidente-de-trabalho` | Perícia técnica de acidente de trabalho                           |

As rotas são declaradas em `src/app/app.routes.ts`. Os metadados específicos de cada página são configurados junto aos respectivos componentes de página por meio do serviço SEO.

## Requisitos

- Node.js compatível com Angular 21
- npm 11

## Desenvolvimento local

```bash
npm install
npm start
```

Abra `http://localhost:4200/`. O servidor de desenvolvimento recarrega a aplicação após alterações.

## Build, prerender e execução SSR

```bash
npm run build
```

O build de produção fica em `dist/ui/`; as seis rotas são prerenderizadas como parte do build.

Para iniciar o servidor Node/SSR após compilar:

```bash
npm run serve:ssr:ui
```

O servidor escuta na porta `4000` por padrão. Configure a variável `PORT` para usar outra porta. Em produção, o proxy ou a plataforma de hospedagem deve encaminhar as requisições para o servidor, permitir acesso direto às rotas e configurar compressão Brotli ou gzip.

## Scripts disponíveis

| Comando                | Descrição                                       |
| ---------------------- | ----------------------------------------------- |
| `npm start`            | Servidor de desenvolvimento Angular             |
| `npm run build`        | Build otimizado e prerender das páginas         |
| `npm run watch`        | Build contínuo de desenvolvimento               |
| `npm run serve:ssr:ui` | Executa o servidor Node do build                |
| `npm test`             | Executa os testes configurados pelo Angular CLI |

## SEO e operação de conteúdo

- Titles, descriptions e URLs canônicas são configurados por página.
- O documento base contém metadados sociais e JSON-LD para site, profissional e serviço; metadados de rota são atualizados no prerender.
- `public/robots.txt` e `public/sitemap.xml` são copiados para o build. Atualize o sitemap quando as rotas indexáveis mudarem.
- Após o deploy, confira respostas HTTP, HTML prerenderizado e URLs canônicas; envie o sitemap no Google Search Console.
- Imagens de página estão em WebP. O hero usa `NgOptimizedImage` com prioridade; imagens fora da primeira dobra carregam sob demanda.
- Mantenha informações profissionais, contato, área atendida e afirmações técnicas/jurídicas revisadas antes da publicação.

## Testes

```bash
npm test
```
