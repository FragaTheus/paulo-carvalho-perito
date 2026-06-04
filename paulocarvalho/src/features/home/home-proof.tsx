import SectionLayout from "@/components/layout/section-layout";

const Item = ({ isFirst = false }: { isFirst?: boolean }) => {
  return (
    <div
      className={`flex-col p-12 border-white/10 hover:bg-white/10 transition-colors flex gap-12 
        ${isFirst ? "border-l md:border-0" : "border-l"}`}
    >
      <div className="font-label-caps text-xs uppercase opacity-90">label</div>
      <h3
        className={`text-6xl font-black tracking-tighter font-display uppercase ${isFirst ? "text-primary" : ""}`}
      >
        1500
      </h3>
      <div className="font-label-caps text-xs uppercase opacity-90">label</div>
    </div>
  );
};

export default function HomeProof() {
  return (
    <SectionLayout id="home-proof" sectionCn="bg-black/5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Item isFirst />
        <Item />
        <Item />
      </div>
    </SectionLayout>
  );
}
