import SectionLayout from "@/components/layout/section-layout";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

interface CardProps {
  isLast?: boolean;
  label: string;
  title: string;
  description: string;
}

const Card = ({ isLast, label, title, description }: CardProps) => {
  return (
    <Link href={"/"}>
      <article
        className={`p-12 border-r md:border-b-0 border-white/10 hover:bg-white/10 transition-colors group ${isLast ? "" : "border-b"}`}
      >
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="font-label-caps text-xs transition-colors group-hover:text-primary uppercase">
            {label}
          </div>
          <div>
            <h3 className="font-display text-2xl mb-4 leading-none uppercase font-semibold">
              {title}
            </h3>
            <p className="font-body-md leading-relaxed">{description}</p>
          </div>
          <CgChevronRight className="text-2xl self-end text-transparent group-hover:text-foreground transition-colors" />
        </div>
      </article>
    </Link>
  );
};

export default function HomeCapacities() {
  return (
    <SectionLayout id="home-capacities">
      <div className="mb-18 flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="text-3xl font-display font-black tracking-tight uppercase">
          Capacidades
        </h2>
        <div className="h-px w-full max-w-10 bg-primary mt-2 md:mt-0" />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 border-l border-white/10">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </SectionLayout>
  );
}

const cards = [
  {
    isLast: false,
    label: "Contra-Perícia",
    title: "Assistência",
    description:
      "Acompanhamento da perícia com análise crítica e parecer especializado.",
  },
  {
    isLast: false,
    label: "Perícia",
    title: "Perícia Judicial",
    description:
      "Elaboração de laudos para esclarecimento de questões trabalhistas e judiciais.",
  },
  {
    isLast: false,
    label: "Segurança",
    title: "Insalubridade",
    description:
      "Análise das condições de trabalho conforme as NRs para caracterização.",
  },
  {
    isLast: true,
    label: "Sinistros",
    title: "Acidentes",
    description: "Investigação de acidentes com identificação das causas.",
  },
] satisfies CardProps[];
