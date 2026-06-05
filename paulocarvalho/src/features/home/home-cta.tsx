import SectionLayout from "@/components/layout/section-layout";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/dist/client/link";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const CtaContent = () => {
  return (
    <div className="flex flex-col items-start gap-12 max-w-sm">
      <h3 className="text-3xl font-black tracking-tighter uppercase">
        Vamos analisar seu caso
      </h3>
      <p className="opacity-90 font-light leading-relaxed">
        Produção de laudos periciais, análise técnica especializada e assessoria
        em questões trabalhistas complexas.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BsWhatsapp className="text-primary text-lg" />
          <Link
            href="https://wa.me/5511999999999"
            className="hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 99999-9999
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="text-primary text-xl" />
          <Link
            href="mailto:perito@exemplo.com"
            className="hover:text-primary transition"
          >
            perito@exemplo.com
          </Link>
        </div>
      </div>
    </div>
  );
};

const CtaForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input type="text" placeholder="Nome completo" />
      <Input type="email" placeholder="Email corporativo" />
      <Input type="text" placeholder="Assunto" className="md:col-span-2" />
      <Input type="text" placeholder="Mensagem" className="md:col-span-2" />
      <Button className="bg-primary text-primary-foreground hover:opacity-90 active:bg-primary active:text-primary-foreground active:opacity-80">
        Enviar
      </Button>
    </form>
  );
};

export default function HomeCTA() {
  return (
    <SectionLayout id="home-cta">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CtaContent />
        <CtaForm />
      </div>
    </SectionLayout>
  );
}
