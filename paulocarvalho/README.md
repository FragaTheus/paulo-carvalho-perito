# paulocarvalho — Documentação Técnica

Documentação técnica da aplicação. Para contexto geral do projeto e cliente, consulte o [`README.md` na raiz](../README.md).

---

## Stack

| Tecnologia                                                                                           | Versão | Uso                                           |
| ---------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------- |
| [Next.js](https://nextjs.org/)                                                                       | 16.2.7 | Framework principal (App Router + SSG)        |
| [React](https://react.dev/)                                                                          | 19.2.4 | UI                                            |
| [TypeScript](https://www.typescriptlang.org/)                                                        | 5.x    | Tipagem estática                              |
| [Tailwind CSS](https://tailwindcss.com/)                                                             | 4.x    | Estilização utilitária                        |
| [@emailjs/browser](https://www.emailjs.com/)                                                         | 4.4.1  | Envio de e-mail pelo formulário (client-side) |
| [react-icons](https://react-icons.github.io/react-icons/)                                            | 5.x    | Ícones (WhatsApp, e-mail, etc.)               |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | —      | Utilitário `cn()` para classes condicionais   |

**Gerenciador de pacotes:** `pnpm`  
**Build:** Turbopack (via `next build`)

---

## Estrutura de Pastas

```
src/
├── app/                    # Entrypoint Next.js App Router
│   ├── layout.tsx          # Layout raiz (fontes, header)
│   ├── page.tsx            # Home — composição das seções
│   └── globals.css         # Estilos globais + tokens Tailwind
│
├── components/
│   ├── app/                # Componentes globais reutilizáveis
│   │   ├── app-header.tsx  # Cabeçalho do site
│   │   ├── app-logo.tsx    # Logo
│   │   ├── app-cta.tsx     # CTA global
│   │   └── app-form.tsx    # Formulário de contato (EmailJS)
│   ├── layout/
│   │   └── section-layout.tsx  # Wrapper de seção com padding/id
│   └── ui/
│       ├── button.tsx      # Componente Button base
│       └── input.tsx       # Componente Input base
│
├── features/
│   └── home/               # Seções da landing page
│       ├── home-hero.tsx
│       ├── home-about.tsx
│       ├── home-capacities.tsx
│       ├── home-proof.tsx
│       └── home-cta.tsx
│
├── config/
│   └── cn.ts               # Utilitário clsx + tailwind-merge
│
└── shared/
    └── assets/             # Imagens e arquivos estáticos
```

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis (necessárias para o formulário de contato):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Obtenha os valores em [dashboard.emailjs.com](https://dashboard.emailjs.com) → **Account → General**.

O template EmailJS deve conter as variáveis:

| Variável         | Campo do formulário |
| ---------------- | ------------------- |
| `{{from_name}}`  | Nome completo       |
| `{{from_email}}` | E-mail corporativo  |
| `{{subject}}`    | Assunto             |
| `{{message}}`    | Mensagem            |

---

## Como Rodar

### 1. Instalar o pnpm

**Windows**

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

**macOS**

```bash
brew install pnpm
```

**Linux**

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

---

### 2. Instalar dependências e rodar

```bash
pnpm install && pnpm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).
