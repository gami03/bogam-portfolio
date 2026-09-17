import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Component = as;
  return (
    <Component className={cn("mx-auto w-full max-w-5xl px-6", className)}>
      {children}
    </Component>
  );
}
