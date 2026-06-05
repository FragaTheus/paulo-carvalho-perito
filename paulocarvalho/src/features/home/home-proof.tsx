import SectionLayout from "@/components/layout/section-layout";

interface ItemProps {
  isFirst?: boolean;
  label: string;
  title: string;
  description: string;
}

const Item = ({ isFirst = false, label, title, description }: ItemProps) => {
  return (
    <div
      className={`flex-col p-12 border-white/10 hover:bg-white/10 transition-colors flex gap-12 
        ${isFirst ? "border-l md:border-0" : "border-l"}`}
    >
      <div className="font-label-caps text-xs uppercase opacity-90">
        {label}
      </div>
      <h3
        className={`text-6xl font-black tracking-tighter font-display uppercase ${isFirst ? "text-primary" : ""}`}
      >
        {title}
      </h3>
      <div className="font-label-caps text-xs uppercase opacity-90">
        {description}
      </div>
    </div>
  );
};

export default function HomeProof() {
  return (
    <SectionLayout id="home-proof" sectionCn="bg-black/5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </SectionLayout>
  );
}

const items = [
  {
    isFirst: true,
    label: "Atuação",
    title: "+20 anos",
    description: "Em Engenharia de Segurança do Trabalho",
  },
  {
    isFirst: false,
    label: "Perícia",
    title: "+3.000",
    description: "Perícias judiciais realizadas",
  },
  {
    isFirst: false,
    label: "Assistência",
    title: "+1.500",
    description: "Assistências técnicas concluídas",
  },
] satisfies ItemProps[];
