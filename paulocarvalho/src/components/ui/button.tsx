import { cn } from "@/config/cn";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        `p-2 border border-white/10 hover:border-primary transition-colors cursor-pointer active:bg-surface-container`,
        className,
      )}
    >
      {children}
    </button>
  );
}
