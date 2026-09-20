import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? ((props.children as React.ReactElement).type as React.ElementType) : "button";
    const childProps = asChild ? ((props.children as React.ReactElement).props as Record<string, unknown>) : props;
    
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-accent text-white hover:bg-accent/90 shadow-sm": variant === "primary",
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm": variant === "secondary",
            "border border-primary/20 bg-transparent hover:bg-primary/5 text-primary": variant === "outline",
            "hover:bg-primary/5 text-primary": variant === "ghost",
            "h-10 px-6 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-12 rounded-xl px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...childProps}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
