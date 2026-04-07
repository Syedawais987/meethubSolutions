"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {subtitle && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}
