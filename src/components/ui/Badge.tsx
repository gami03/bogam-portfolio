import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" &&
          "border-zinc-800 bg-zinc-900/60 text-zinc-300",
        variant === "accent" &&
          "border-emerald-800/60 bg-emerald-950/40 text-emerald-400",
        className
      )}
    >
      {children}
    </span>
  );
}
