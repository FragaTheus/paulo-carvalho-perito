import SectionLayout from "@/components/layout/section-layout";

export default function HomeAbout() {
  return (
    <SectionLayout id="home-about">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-black font-display tracking-tighter uppercase">
            Sobre
          </h1>
          <div className="w-full bg-primary h-px max-w-10 mt-2" />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            sapiente inventore commodi odio eligendi soluta omnis temporibus
            fugit, architecto id earum voluptas modi reprehenderit dolorum
            tenetur maxime tempora distinctio neque!
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            sapiente inventore commodi odio eligendi soluta omnis temporibus
            fugit, architecto id earum voluptas modi reprehenderit dolorum
            tenetur maxime tempora distinctio neque!
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
