"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { type ReactNode } from "react";

// ─── Shared easing ───
const ease = [0.25, 0.1, 0.25, 1] as const;

// ─── Fade up on scroll ───
export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Fade in (no movement) ───
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Slide in from a direction ───
export function SlideIn({
  children,
  from = "left",
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  from?: "left" | "right" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const axis = from === "bottom" ? "y" : "x";
  const value = from === "right" ? 60 : from === "left" ? -60 : 40;

  return (
    <motion.div
      initial={{ opacity: 0, [axis]: value }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger container + children ───
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Scale in (for tags, badges) ───
export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── 3D tilt card on hover ───
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Text reveal word by word ───
export function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ─── Marquee (infinite horizontal scroll) ───
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-12 md:gap-20">
        {items.map((name, i) => (
          <span
            key={`a-${i}`}
            className="shrink-0 font-heading font-bold text-lg md:text-xl text-on-surface-variant/60 hover:text-on-surface-variant transition-colors whitespace-nowrap"
          >
            {name}
          </span>
        ))}
        {items.map((name, i) => (
          <span
            key={`b-${i}`}
            aria-hidden
            className="shrink-0 font-heading font-bold text-lg md:text-xl text-on-surface-variant/60 hover:text-on-surface-variant transition-colors whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Parallax image wrapper ───
export function ParallaxImage({
  children,
  className,
  offset = 40,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Animated counter ───
export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      className={className}
    >
      {value}
      {suffix}
    </motion.span>
  );
}
