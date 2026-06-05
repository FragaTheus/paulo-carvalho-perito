import { cn } from "@/config/cn";

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        `p-2 border border-white/10 hover:border-primary transition-colors cursor-pointer active:bg-surface-container disabled:opacity-50 disabled:cursor-not-allowed`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
