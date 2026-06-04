import SectionLayout from "@/components/layout/section-layout";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

const Card = ({ isLast = false }: { isLast?: boolean }) => {
  return (
    <Link href={"/"}>
      <article
        className={`p-12 border-r md:border-b-0 border-white/10 hover:bg-white/10 transition-colors group ${isLast ? "" : "border-b"}`}
      >
        <div className="flex flex-col gap-8 justify-between">
          <div className="font-label-caps text-xs transition-colors group-hover:text-primary uppercase">
            label
          </div>
          <div>
            <h3 className="font-display text-2xl mb-4 leading-none uppercase font-semibold">
              Titulo
            </h3>
            <p className="font-body-md text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              minus pariatur nobis quae quis.
            </p>
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
      <div className="mb-18 flex justify-between items-center">
        <h2 className="text-3xl font-display font-black tracking-tight uppercase">
          Capacidades
        </h2>
        <span className="text-xs md:text-sm text-primary/90 font-label-caps">
          [ 01 - 04 ]
        </span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 border-l border-white/10">
        <Card />
        <Card />
        <Card />
        <Card isLast />
      </div>
    </SectionLayout>
  );
}
