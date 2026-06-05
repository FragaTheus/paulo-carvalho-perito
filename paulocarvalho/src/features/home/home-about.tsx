import SectionLayout from "@/components/layout/section-layout";
import Image from "next/image";
import img from "@/shared/assets/paulo.webp";

const AboutImage = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center">
        <div className="relative inline-block">
          <Image
            src={img}
            alt="Paulo Carvalho"
            className="block w-auto max-h-120"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-90 bg-linear-to-t from-background to-transparent" />
        </div>
      </div>
    </div>
  );
};

const AboutText = () => {
  return (
    <div className="flex flex-col gap-8 justify-center">
      <div>
        <h1 className="text-3xl font-black font-display tracking-tighter uppercase">
          Sobre
        </h1>
        <div className="w-full bg-primary h-px max-w-10 mt-2" />
      </div>
      <p className="md:text-lg">
        Iniciou sua formação em Segurança do Trabalho, complementou com
        Engenharia Ambiental e especializou-se como Engenheiro de Segurança do
        Trabalho.
      </p>
      <p className="opacity-90">
        Hoje atua há mais de 20 anos como perito e assistente técnico em
        processos trabalhistas.
      </p>
    </div>
  );
};

export default function HomeAbout() {
  return (
    <SectionLayout id="home-about">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <AboutImage />
        <AboutText />
      </div>
    </SectionLayout>
  );
}
