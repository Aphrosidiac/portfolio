"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Experience", href: "/#trajectory" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-bold text-sm tracking-widest uppercase text-on-surface hover:text-primary transition-colors"
        >
          Fakhrul Radzi
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-label text-xs tracking-widest uppercase transition-colors ${
                pathname === link.href
                  ? "text-on-surface border-b border-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
