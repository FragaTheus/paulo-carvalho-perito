import SectionLayout from "@/components/layout/section-layout";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

const Label = () => {
  return (
    <div className="flex items-center max-w-sm relative">
      <div className="h-px w-full max-w-50 bg-primary" />
      <span className="px-4 bg-background text-primary font-label-caps uppercase absolute left-4 text-xs md:text-sm">
        PERÍCIAS TRABALHISTAS | SÃO PAULO
      </span>
    </div>
  );
};

const Title = () => {
  return (
    <h1 className="font-display font-black tracking-tighter uppercase text-5xl md:text-7xl lg:text-8xl xl:text-9xl mt-8 md:mt-10 lg:mt-12">
      ASSISTÊNCIA TÉCNICA PARA DECISÕES JURÍDICAS
    </h1>
  );
};

const Description = () => {
  return (
    <p className="max-w-sm font-body-md leading-snug font-light opacity-90 mt-10 md:mt-12 lg:mt-16">
      Avaliação de ambientes, máquinas e equipamentos para casos de
      insalubridade, periculosidade e acidentes de trabalho.
    </p>
  );
};

const More = () => {
  return (
    <Link href={"#home-about"} className="absolute right-2 bottom-6">
      <div className="flex items-center gap-4 max-w-xs hover:text-primary transition-colors">
        <span className="font-label-caps text-xs uppercase">Explorar</span>
        <BsArrowDown />
      </div>
    </Link>
  );
};

export default function HomeHero() {
  return (
    <SectionLayout
      id="home-hero"
      sectionCn="py-0! md:py-0! lg:py-0!"
      containerCn="py-0!"
    >
      <div className="h-svh relative flex flex-col justify-center">
        <Label />
        <Title />
        <Description />
        <More />
      </div>
    </SectionLayout>
  );
}
