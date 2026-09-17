import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200",
        variant === "primary" &&
          "bg-zinc-100 text-zinc-950 hover:bg-white",
        variant === "secondary" &&
          "border border-zinc-800 bg-transparent text-zinc-200 hover:border-zinc-600 hover:bg-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
