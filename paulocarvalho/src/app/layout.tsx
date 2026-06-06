import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/app/app-header";
import AppFooter from "@/components/app/app-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.paulocarvalhoperitojudicial.com"),
  title: {
    default: "Paulo Carvalho — Perito Judicial Trabalhista",
    template: "%s | Paulo Carvalho Perito",
  },
  description:
    "Assessoria pericial especializada em processos trabalhistas. Laudos, cálculos e pareceres técnicos para advogados e empresas em São Paulo.",
  keywords: [
    "perito judicial trabalhista",
    "perito trabalhista São Paulo",
    "laudo pericial trabalhista",
    "perícia judicial trabalhista",
    "cálculo trabalhista",
    "assessoria pericial",
    "parecer técnico trabalhista",
    "Paulo Carvalho perito",
  ],
  authors: [
    {
      name: "Paulo Carvalho",
      url: "https://www.paulocarvalhoperitojudicial.com",
    },
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.paulocarvalhoperitojudicial.com",
    siteName: "Paulo Carvalho — Perito Judicial Trabalhista",
    title: "Paulo Carvalho — Perito Judicial Trabalhista",
    description:
      "Assessoria pericial especializada em processos trabalhistas. Laudos, cálculos e pareceres técnicos para advogados e empresas em São Paulo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "Y3kTjSwADm0tbohSy3NbHJqeozsXQp9KDqlj3pPgA_g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
