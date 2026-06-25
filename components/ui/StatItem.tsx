"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type StatItemProps = {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  isAlwaysOn?: boolean;
  className?: string;
};

export function StatItem({
  icon,
  value,
  suffix = "",
  label,
  isAlwaysOn = false,
  className,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const [animatedValue, setAnimatedValue] = useState<number | null>(null);

  const shouldAnimate = isInView && !isAlwaysOn && !prefersReducedMotion;

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 1500;
    const start = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [shouldAnimate, value]);

  const display = isAlwaysOn
    ? "24/7"
    : prefersReducedMotion
      ? `${value}${suffix}`
      : shouldAnimate && animatedValue !== null
        ? `${animatedValue}${suffix}`
        : `0${suffix}`;

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <Image
        src={icon}
        alt=""
        width={128}
        height={128}
        className="mb-1 h-[4.5rem] w-[4.5rem] object-contain sm:mb-1.5 sm:h-[5.25rem] sm:w-[5.25rem] lg:h-24 lg:w-24"
        aria-hidden
      />
      <span className="text-2xl font-bold leading-none text-white sm:text-3xl lg:text-4xl">
        {display}
      </span>
      <span className="mt-1.5 text-xs font-medium text-accent sm:mt-2 sm:text-sm">
        {label}
      </span>
    </div>
  );
}
