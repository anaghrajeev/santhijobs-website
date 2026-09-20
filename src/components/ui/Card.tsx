import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-primary/5 bg-white shadow-sm transition-all hover:shadow-md overflow-hidden",
        className
      )}
      {...props}
    />
  );
}
