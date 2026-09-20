import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-primary/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
