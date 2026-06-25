"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  defaultViewport,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
};

export function AnimatedSection({
  children,
  className,
  stagger = false,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn("w-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("w-full", className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={stagger ? staggerContainer : fadeUp}
    >
      {stagger
        ? Array.isArray(children) || (children as React.ReactElement)?.type
          ? children
          : children
        : children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn("w-full", className)}>{children}</div>;
  }

  return (
    <motion.div className={cn("w-full", className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
