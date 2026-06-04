import { cn } from "@/config/cn";

export default function SectionLayout({
  id,
  isLast,
  sectionCn,
  containerCn,
  children,
}: {
  id: string;
  isLast?: boolean;
  sectionCn?: string;
  containerCn?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(`w-full ${isLast ? "pt-20" : "py-20"}`, sectionCn)}
    >
      <div className={cn(`w-full max-w-7xl m-auto p-4`, containerCn)}>
        {children}
      </div>
    </section>
  );
}
