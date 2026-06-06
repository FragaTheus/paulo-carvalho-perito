import Link from "next/link";
import AppLogo from "./app-logo";

interface FooterLink {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLink) => {
  return (
    <Link
      href={href}
      className="text-xs uppercase opacity-50 hover:opacity-100"
    >
      {label}
    </Link>
  );
};

export default function AppFooter() {
  return (
    <footer className="w-full border-t border-white/10 py-18">
      <div className="flex items-center justify-between w-full max-w-7xl m-auto p-4">
        <AppLogo />
        <span className="text-xs opacity-50 uppercase">
          © 2026 PAULO CARVALHO. TODOS OS DIREITOS RESERVADOS.
        </span>
        <nav className="flex items-center gap-2">
          {links.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </nav>
      </div>
    </footer>
  );
}

const links = [
  {
    href: "#home-hero",
    label: "Início",
  },
  {
    href: "#home-about",
    label: "Sobre",
  },
  {
    href: "#home-capacities",
    label: "Capacidades",
  },
  {
    href: "#home-proof",
    label: "Indíces",
  },
] satisfies FooterLink[];
