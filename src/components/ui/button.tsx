import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants: Record<string, string> = {
      ghost: "bg-transparent hover:bg-slate-100 text-slate-900",
      outline: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant ?? ""], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
