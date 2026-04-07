"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { TextScramble } from "./text-scramble";

const links = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > 100 && latest > prev);
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(72,72,72,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-base md:text-lg tracking-widest uppercase text-on-surface hover:text-primary transition-colors"
        >
          Fakhrul Radzi
        </Link>
        <div className="flex items-center gap-8 md:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-label text-sm md:text-base tracking-widest uppercase transition-colors text-on-surface-variant hover:text-on-surface"
            >
              <TextScramble text={link.label} />
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-on-surface"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
