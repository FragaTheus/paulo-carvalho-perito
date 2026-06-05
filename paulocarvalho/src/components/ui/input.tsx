import { cn } from "@/config/cn";

export default function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        `px-4 py-2 border border-white/10 focus:border-primary-container outline-none transition-colors`,
        className,
      )}
      {...props}
    />
  );
}
