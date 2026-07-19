"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "gradient";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  // Catatan: lavender-600, lavender-700, dll sekarang sudah otomatis berwarna biru dari config tailwind Anda.
  primary:
    "bg-lavender-600 text-white shadow-glow hover:bg-lavender-700 focus-visible:outline-lavender-700",
  secondary:
    "bg-white text-foreground border border-border shadow-soft hover:border-lavender-300 hover:shadow-card",
  ghost: "bg-transparent text-foreground hover:bg-lavender-50",
  outline:
    "bg-transparent text-lavender-700 border border-lavender-300 hover:bg-lavender-50",
  // DIUBAH: Mengubah gradasi fuchsia-to-pink menjadi gradasi biru (blue-600 ke sky-500)
  gradient:
    "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg hover:from-blue-700 hover:to-sky-600 shadow-blue-500/10",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-3 gap-2",
  lg: "text-base px-7 py-4 gap-2.5",
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<HTMLMotionProps<"a">, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-colors duration-300 whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...(props as HTMLMotionProps<"a">)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      {...motionProps}
      {...(props as HTMLMotionProps<"button">)}
    >
      {content}
    </motion.button>
  );
}