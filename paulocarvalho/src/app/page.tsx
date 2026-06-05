import HomeCapacities from "@/features/home/home-capacities";
import HomeAbout from "@/features/home/home-about";
import HomeHero from "@/features/home/home-hero";
import HomeProof from "@/features/home/home-proof";
import HomeCTA from "@/features/home/home-cta";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeCapacities />
      <HomeProof />
      <HomeCTA />
    </main>
  );
}
