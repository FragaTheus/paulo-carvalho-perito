import Link from "next/link";

export default function AppLogo() {
  return (
    <Link href={"/"}>
      <div className="text-lg md:text-2xl tracking-tighter font-display leading-none font-black uppercase flex flex-col items-start">
        <span>Paulo</span>
        <span className="text-primary">Carvalho</span>
      </div>
    </Link>
  );
}
