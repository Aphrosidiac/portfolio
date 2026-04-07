"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FadeUp,
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  WordReveal,
  Marquee,
} from "./animations";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HomeContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-4"
            >
              Full-Stack Developer & System Architect
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-on-surface mb-6"
            >
              Hi, I&apos;m Fakhrul.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="text-on-surface-variant text-base md:text-lg max-w-xl leading-relaxed mb-8"
            >
              I build entire business systems alone — the kind most teams need
              five people for. ERPs, logistics platforms, workshop tools. If it
              needs a database, an API, and a dashboard, I&apos;ve probably
              already built something like it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="mailto:ahmadfakhrulradzi05@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 border border-outline-variant rounded-sm font-label text-xs tracking-widest uppercase text-on-surface hover:bg-surface-high transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/projects"
                  className="px-5 py-2.5 bg-surface-high rounded-sm font-label text-xs tracking-widest uppercase text-on-surface hover:bg-surface-highest transition-colors inline-flex items-center gap-2"
                >
                  View Projects <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65, ease }}
              className="flex items-center gap-6 mt-8"
            >
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] tracking-widest uppercase text-outline">
                  Based in
                </span>
                <span className="text-xs text-on-surface-variant">
                  Kuala Terengganu, MY
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] tracking-widest uppercase text-outline">
                  Open for work?
                </span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs text-emerald-400"
                >
                  Available
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Hero photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src="/fakhrul.jpg"
                alt="Fakhrul Radzi"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Companies Strip — Marquee */}
      <section className="bg-surface-mid py-12 overflow-hidden">
        <FadeUp>
          <p className="font-label text-[10px] tracking-widest uppercase text-outline text-center mb-8">
            Places I&apos;ve shipped production code for
          </p>
        </FadeUp>
        <Marquee speed={20}>
          {companies.map((name) => (
            <span
              key={name}
              className="font-heading font-bold text-lg md:text-xl text-on-surface-variant/60 hover:text-on-surface-variant transition-colors whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Origin Story */}
      <section className="bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 items-start">
            <SlideIn from="left" className="hidden lg:block">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                <motion.div
                  whileInView={{ scale: [1.08, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/fakhrul.jpg"
                    alt="Fakhrul during early days"
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-label text-[9px] tracking-widest uppercase text-on-surface-variant/60">
                    Somewhere between coffee and code
                  </p>
                </div>
              </div>
            </SlideIn>

            <div>
              <FadeUp>
                <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
                  The Backstory
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-on-surface mb-6">
                  How I got here.
                </h2>
              </FadeUp>
              <StaggerContainer className="space-y-4 text-on-surface-variant leading-relaxed max-w-2xl" staggerDelay={0.12}>
                <StaggerItem>
                  <p>
                    No CS degree. No bootcamp. Just a diploma from UTHM and an
                    obsession with making things work. The classroom taught me the
                    basics — real clients taught me everything else.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    My internship at a printing company was supposed to be a
                    checkbox. Instead, I ended up building workflow automations,
                    wiring up N8N pipelines, and integrating AI into their
                    operations. That six months changed how I saw development — it
                    wasn&apos;t about writing clever code, it was about solving
                    actual business problems.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    So I started{" "}
                    <span className="text-on-surface font-medium">
                      AP Devotion
                    </span>
                    , took on two Sdn Bhd clients, and built their entire systems
                    from zero. A car workshop needed management software — I built
                    it. A logistics company needed smart distribution — I built
                    that too. Both solo. Both in production.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    Then Digital Scape handed me the keys to their tech. Now
                    I&apos;m leading development on ERP systems with hundreds of
                    tables and routes. I&apos;m 21, and I&apos;ve already shipped
                    more production systems than most people do in their first five
                    years.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-32 pb-16 md:pb-32">
          <FadeUp>
            <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-on-surface mb-3">
              Experience.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-on-surface-variant mb-2 max-w-xl">
              Every role taught me something different. Every system I built made
              the next one better.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-outline text-sm italic mb-12">
              You don&apos;t learn architecture from textbooks. You learn it from
              the third time your schema falls apart.
            </p>
          </FadeUp>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.1} y={20}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25, ease }}
                  className="grid grid-cols-1 md:grid-cols-[60px_1fr_200px] gap-4 py-8 border-t border-outline-variant/30 group hover:bg-surface-mid/30 transition-colors px-4 -mx-4 rounded-sm"
                >
                  <span className="font-heading font-bold text-2xl text-outline-variant group-hover:text-on-surface-variant transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-on-surface mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant">
                      {exp.company}
                    </p>
                    <p className="font-label text-[10px] tracking-widest uppercase text-outline mt-1">
                      {exp.location}
                    </p>
                    <p className="font-label text-[10px] tracking-widest uppercase text-outline mt-1">
                      {exp.date}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32">
          <div className="flex items-end justify-between mb-4">
            <FadeUp>
              <div>
                <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
                  What I&apos;ve built.
                </p>
                <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-on-surface">
                  Projects.
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <Link
                href="/projects"
                className="font-label text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-2"
              >
                View All <span aria-hidden="true">&rarr;</span>
              </Link>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <p className="text-on-surface-variant mb-12 max-w-xl">
              Real systems running in real businesses. Each one designed,
              developed, and deployed by me.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {featuredProjects.map((project, i) => (
              <StaggerItem key={i}>
                <TiltCard className="h-full">
                  <div className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6 hover:border-outline-variant/40 transition-colors group h-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, ti) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + ti * 0.05, ease }}
                          className="font-label text-[10px] tracking-widest uppercase text-outline bg-surface-high px-2 py-1 rounded-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <p className="font-label text-[10px] tracking-widest uppercase text-outline">
                      {project.context}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="bg-surface-mid border border-outline-variant/20 rounded-lg p-8 md:p-16 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
              <h2 className="font-heading font-black text-3xl md:text-5xl tracking-tight text-on-surface">
                <WordReveal text="Got something that needs building?" />
              </h2>
              <div className="md:text-right">
                <FadeUp delay={0.3}>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    I take on projects that are worth the effort — systems that
                    actually matter to someone&apos;s business. If that sounds like
                    what you need, let&apos;s talk.
                  </p>
                </FadeUp>
                <FadeUp delay={0.45}>
                  <motion.a
                    href="mailto:ahmadfakhrulradzi05@gmail.com"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-inverse-surface text-inverse-on-surface font-label text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Get in Touch <span aria-hidden="true">&nearr;</span>
                  </motion.a>
                </FadeUp>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <FadeIn>
        <footer className="border-t border-outline-variant/20 py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
            <p className="font-label text-[10px] tracking-widest uppercase text-outline">
              &copy; 2026 Fakhrul Radzi. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/Aphrosidiac"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-outline hover:text-on-surface-variant transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fakhrul-radzi-b2b753339/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-outline hover:text-on-surface-variant transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </footer>
      </FadeIn>
    </main>
  );
}

const companies = [
  "Digital Scape MY",
  "CN Cetak Niaga",
  "AP Devotion",
  "Digital Scape MY",
  "CN Cetak Niaga",
  "AP Devotion",
];

const experiences = [
  {
    role: "Lead Developer",
    company: "Digital Scape MY",
    location: "Hybrid",
    date: "Mar 2026 — Present",
    description:
      "Own the entire tech side of the company. Designed and built CetakNow from the ground up — a 7-module ERP that handles everything from sales to payroll. Also shipped Siso Print (3 interconnected apps) and LearnScape. I architect it, build it, deploy it, and keep it running.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Scape MY",
    location: "Hybrid",
    date: "Jan 2026 — Mar 2026",
    description:
      "Started as contract, immediately took ownership. Laid the foundation for CetakNow's entire database and module architecture. Built Siso Print's ERP frontend and spun up the Azure infrastructure from scratch.",
  },
  {
    role: "Founder / Freelance Developer",
    company: "AP Devotion",
    location: "Remote",
    date: "Nov 2025 — Present",
    description:
      "Started my own thing. Two Sdn Bhd clients, two full systems — Dream Garage for a car workshop and Shuda Logistics for a distribution company. Requirements to deployment, all me.",
  },
  {
    role: "Software Development Intern",
    company: "CN Cetak Niaga Sdn. Bhd",
    location: "Hybrid",
    date: "Aug 2025 — Jan 2026",
    description:
      "Where it clicked. Built workflow automations with N8N, integrated AI into business processes, and realized I wanted to do this for a living — not just as an intern.",
  },
];

const featuredProjects = [
  {
    name: "CetakNow",
    description:
      "The biggest thing I've built. A complete printing business platform — sales, HR, production tracking, finance, even government e-invoicing. 136 tables, 399 routes, 7 modules. One developer.",
    tags: ["Laravel", "Vue 3", "TypeScript", "MySQL", "Redis"],
    context: "Digital Scape MY",
  },
  {
    name: "Siso Print (SignScape)",
    description:
      "Three apps, one API. Internal ERP for staff, a portal for customers to order and track, and a marketing website — all wired together. Includes a pricing engine that calculates signboard costs in real-time.",
    tags: ["Laravel", "Vue 3", "React 19", "Inertia.js", "Playwright"],
    context: "Digital Scape MY",
  },
  {
    name: "Dream Garage",
    description:
      "A workshop owner needed software. I built the whole thing — quotations, invoices, receipts, stock management with race-condition-safe numbering, and an 11-status document lifecycle.",
    tags: ["Vue 3", "Fastify 5", "Prisma", "PostgreSQL"],
    context: "AP Devotion · Freelance",
  },
  {
    name: "Shuda Logistics V3",
    description:
      "Smart distribution for a logistics company. The system figures out which driver gets which orders based on capacity, region, and priority — then sends dispatch via WhatsApp automatically.",
    tags: ["Next.js", "TypeScript", "Supabase", "WhatsApp Web.js"],
    context: "AP Devotion · Freelance",
  },
];
