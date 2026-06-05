import AppForm from "@/components/app/app-form";
import SectionLayout from "@/components/layout/section-layout";
import Link from "next/dist/client/link";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const CtaContent = () => {
  return (
    <div className="flex flex-col items-start gap-12 max-w-md">
      <h3 className="text-3xl font-black tracking-tighter uppercase">
        Vamos avaliar seu caso
      </h3>
      <p className="opacity-90 font-light leading-relaxed">
        Assessoria especializada para empresas, advogados e profissionais que
        buscam respaldo técnico confiável.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BsWhatsapp className="text-primary text-lg" />
          <Link
            href="https://wa.me/5511972248445"
            className="hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 9 7224-8445
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="text-primary text-xl" />
          <Link
            href="mailto:perito.paulo@bol.com.br"
            className="hover:text-primary transition"
          >
            perito.paulo@bol.com.br
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function HomeCTA() {
  return (
    <SectionLayout id="home-cta">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CtaContent />
        <AppForm />
      </div>
    </SectionLayout>
  );
}
