import Link from "next/link";
import Button from "./ui/button";

export default function AppCta() {
  return (
    <Link href={"/"}>
      <Button className="md:px-8">Agendar Consultoria</Button>
    </Link>
  );
}
