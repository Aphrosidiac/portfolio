"use client";

import { motion } from "motion/react";
import { FadeUp, TiltCard } from "./animations";

const ease = [0.25, 0.1, 0.25, 1] as const;

const allProjects = [
  {
    name: "CetakNow",
    description:
      "The biggest system I've built to date. A complete ERP for a printing business — handles everything from point-of-sale and customer loyalty, to HR with leave/payroll/KPIs, to production Kanban boards with a built-in design editor. Even integrates with Malaysia's LHDN e-invoicing system and has WhatsApp bulk messaging built in.",
    tags: ["Laravel 12", "Vue 3", "TypeScript", "Tailwind CSS", "MySQL", "Redis", "WebSocket"],
    context: "Digital Scape MY",
    stats: "136 tables · 399 routes · 85 models",
  },
  {
    name: "Siso Print (SignScape)",
    description:
      "Three separate applications that all talk to one Laravel API. The internal team uses a Vue ERP for orders and production. Customers log in to a React portal to place orders with real-time pricing. And there's a marketing website tying it all together. Includes agent discounts, credit wallets, and 42 end-to-end tests.",
    tags: ["Laravel 10", "Vue 3", "Inertia.js", "React 19", "TypeScript", "Framer Motion", "Playwright"],
    context: "Digital Scape MY",
    stats: "3 apps · 115 pages · 42 E2E tests",
  },
  {
    name: "Dream Garage",
    description:
      "A car workshop owner came to me needing software to run his business. I designed the entire system — quotations that convert to invoices, invoices that convert to receipts, stock that automatically holds when you draft an order and releases if you cancel. PostgreSQL row-level locks to prevent duplicate document numbers under load.",
    tags: ["Vue 3", "TypeScript", "Fastify 5", "Prisma", "PostgreSQL", "Chart.js"],
    context: "AP Devotion · Freelance",
    stats: "4 doc types · 11 statuses · Full audit trail",
  },
  {
    name: "Shuda Logistics V3",
    description:
      "A logistics company needed to automate how they distribute orders to drivers. I built an algorithm that scores drivers by region, checks vehicle capacity, handles priority orders, and converts cartons to pallets — then dispatches everything via WhatsApp automatically. The WhatsApp session persists across server restarts.",
    tags: ["Next.js 16", "TypeScript", "Supabase", "WhatsApp Web.js", "Puppeteer"],
    context: "AP Devotion · Freelance",
    stats: "Smart allocation · WhatsApp dispatch · Dynamic schemas",
  },
  {
    name: "LearnScape",
    description:
      "A learning platform where members pay for tiered access to courses. Standard, Premium, VIP — each tier unlocks different content. Built the whole payment flow, discount code engine, video course system with YouTube embeds, and a Ctrl+K global search that searches across everything instantly.",
    tags: ["Vue 3", "Pinia", "Express 5", "MySQL", "JWT"],
    context: "Digital Scape MY",
    stats: "3 tiers · Course marketplace · Global search",
  },
];

export function ProjectsContent() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <FadeUp>
          <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
            Client work & personal projects
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-on-surface mb-6">
            Projects.
          </h1>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 mb-16">
          <FadeUp delay={0.2}>
            <p className="text-on-surface-variant leading-relaxed">
              Every project here is a system I built end-to-end for a real
              business. No toy apps, no clones. Each one started with a client
              problem and ended with production software they use every day.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-outline text-sm italic md:text-right">
              The best way to learn how to build systems is to build systems
              people actually depend on.
            </p>
          </FadeUp>
        </div>

        <div className="space-y-6">
          {allProjects.map((project, i) => (
            <FadeUp key={i} delay={i * 0.1} y={25}>
              <TiltCard>
                <div className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6 md:p-8 hover:border-outline-variant/40 transition-colors group">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + ti * 0.04, ease }}
                        className="font-label text-[10px] tracking-widest uppercase text-outline bg-surface-high px-2 py-1 rounded-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-label text-[10px] tracking-widest uppercase text-outline">
                      {project.context}
                    </p>
                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
                      {project.stats}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
