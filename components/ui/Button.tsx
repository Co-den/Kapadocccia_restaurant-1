"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline" | "ghost";
  icon?: ReactNode;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "solid",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-500 rounded-sm";

  const variants: Record<string, string> = {
    solid:
      "bg-gold-gradient text-ink shadow-gold hover:shadow-[0_12px_40px_-8px_rgba(200,169,106,0.55)] hover:-translate-y-0.5",
    outline:
      "border border-gold/50 text-white hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5",
    ghost: "text-white/80 hover:text-gold",
  };

  const isExternal = href.startsWith("http") || href.startsWith("tel:");

  const content = (
    <motion.span
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-500 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} target={href.startsWith("tel:") ? undefined : "_blank"} rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
