import Link from "next/link";
import Button from "../ui/button";

export default function AppCta() {
  return (
    <Link
      href={
        "https://wa.me/5511972248445?text=Ol%C3%A1%20Paulo%2C%20gostaria%20de%20agendar%20uma%20consultoria."
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="md:px-8">Agendar Consultoria</Button>
    </Link>
  );
}
