// src/components/ui/button.tsx
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-ink bg-ink text-inverse hover:border-accent hover:bg-accent",
  secondary:
    "border-line bg-transparent text-ink hover:border-ink",
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-control",
        "border",
        "px-5",
        "py-3",
        "font-mono",
        "text-sm",
        "font-semibold",
        "tracking-[0.08em]",
        "uppercase",
        "transition-colors",
        "duration-150",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}