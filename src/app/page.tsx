import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
          <div>
            <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-4 animate-fade-up">
              Full-Stack Developer & System Architect
            </p>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-on-surface mb-6 animate-fade-up animate-delay-1">
              Hi, I&apos;m Fakhrul.
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg max-w-xl leading-relaxed mb-8 animate-fade-up animate-delay-2">
              Full-stack developer who builds production-grade enterprise systems
              end-to-end as a solo dev. From ERP platforms with 136+ database
              tables to logistics engines with smart distribution algorithms.
              Usually ships. Always learning.
            </p>
            <div className="flex items-center gap-4 animate-fade-up animate-delay-3">
              <a
                href="mailto:ahmadfakhrulradzi05@gmail.com"
                className="px-5 py-2.5 border border-outline-variant rounded-sm font-label text-xs tracking-widest uppercase text-on-surface hover:bg-surface-high transition-colors"
              >
                Contact Me
              </a>
              <Link
                href="/projects"
                className="px-5 py-2.5 bg-surface-high rounded-sm font-label text-xs tracking-widest uppercase text-on-surface hover:bg-surface-highest transition-colors inline-flex items-center gap-2"
              >
                View Projects <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 animate-fade-up animate-delay-4">
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
                <span className="text-xs text-emerald-400">Available</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up animate-delay-3 hidden lg:block">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/fakhrul.jpg"
                alt="Fakhrul Radzi"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Strip */}
      <section className="bg-surface-mid py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="font-label text-[10px] tracking-widest uppercase text-outline text-center mb-8">
            Companies he&apos;s built things for
          </p>
          <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
            <span className="font-heading font-bold text-lg md:text-xl text-on-surface-variant/60 hover:text-on-surface-variant transition-colors">
              Digital Scape MY
            </span>
            <span className="font-heading font-bold text-lg md:text-xl text-on-surface-variant/60 hover:text-on-surface-variant transition-colors">
              CN Cetak Niaga
            </span>
            <span className="font-heading font-bold text-lg md:text-xl text-on-surface-variant/60 hover:text-on-surface-variant transition-colors">
              AP Devotion
            </span>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 items-start">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm hidden lg:block">
              <Image
                src="/fakhrul.jpg"
                alt="Fakhrul during early days"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-label text-[9px] tracking-widest uppercase text-on-surface-variant/60">
                  Fakhrul — always building something
                </p>
              </div>
            </div>
            <div>
              <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
                Origin Story
              </p>
              <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-on-surface mb-6">
                How it started.
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed max-w-2xl">
                <p>
                  It didn&apos;t start with a degree or a bootcamp. It started
                  with curiosity and a laptop. I picked up coding during my
                  diploma years at UTHM, but what really accelerated things was
                  building real systems for real businesses.
                </p>
                <p>
                  My internship at CN Cetak Niaga threw me into the printing
                  industry — workflow automations, N8N pipelines, AI
                  integrations. That&apos;s where I realized I wasn&apos;t just
                  interested in code. I was interested in building things that
                  actually solve problems.
                </p>
                <p>
                  After that, I founded{" "}
                  <span className="text-on-surface font-medium">
                    AP Devotion
                  </span>{" "}
                  — my freelance business — and started taking on full client
                  projects. Dream Garage, Shuda Logistics, each one built solo
                  from scratch to production. Then Digital Scape MY brought me
                  on, and suddenly I was architecting ERP systems with 136
                  database tables and 399 API routes.
                </p>
                <p>
                  I&apos;m 21. I don&apos;t have a CS degree. But I&apos;ve
                  shipped 5 production-grade enterprise systems end-to-end, and
                  I&apos;m not planning to slow down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section id="trajectory" className="scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-32 pb-16 md:pb-32">
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-on-surface mb-3">
            Trajectory.
          </h2>
          <p className="text-on-surface-variant mb-2 max-w-xl">
            The places I&apos;ve worked, the roles I&apos;ve held, and the
            things I actually spent my time on.
          </p>
          <p className="text-outline text-sm italic mb-12">
            Everyone starts somewhere. The trick is not stopping. —{" "}
            <span className="text-on-surface-variant">Unknown</span>
          </p>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
                Things I&apos;ve shipped.
              </p>
              <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-on-surface">
                Projects.
              </h2>
            </div>
            <Link
              href="/projects"
              className="font-label text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-2"
            >
              View All <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <p className="text-on-surface-variant mb-12 max-w-xl">
            Production systems I built end-to-end — from database schema to
            deployment. No templates, no tutorials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6 hover:border-outline-variant/40 transition-colors group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label text-[10px] tracking-widest uppercase text-outline bg-surface-high px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-surface-mid border border-outline-variant/20 rounded-lg p-8 md:p-16 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
            <h2 className="font-heading font-black text-3xl md:text-5xl tracking-tight text-on-surface">
              Want to work together?
            </h2>
            <div className="md:text-right">
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Open to good problems. If you&apos;ve got something worth
                building, I&apos;d like to hear about it — reach out and
                let&apos;s talk.
              </p>
              <a
                href="mailto:ahmadfakhrulradzi05@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-inverse-surface text-inverse-on-surface font-label text-xs tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                Get in Touch <span aria-hidden="true">&nearr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant/20 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <p className="font-label text-[10px] tracking-widest uppercase text-outline">
            &copy; 2026 Fakhrul Radzi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Aphrosidiac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline hover:text-on-surface-variant transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/fakhrul-radzi-b2b753339/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline hover:text-on-surface-variant transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const experiences = [
  {
    role: "Lead Developer",
    company: "Digital Scape MY",
    location: "Hybrid",
    date: "Mar 2026 — Present",
    description:
      "Leading all technical development across company projects. Architected CetakNow (136 tables, 399 routes), built Siso Print's 3-app ecosystem, and developed LearnScape. Managing production deployments on Azure with Nginx, Redis, and automated backups.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Scape MY",
    location: "Hybrid",
    date: "Jan 2026 — Mar 2026",
    description:
      "Built foundational architecture for CetakNow's modular monolith. Developed Siso Print's internal ERP and customer-facing sites. Set up production infrastructure on Azure VPS.",
  },
  {
    role: "Founder / Freelance Developer",
    company: "AP Devotion",
    location: "Remote",
    date: "Nov 2025 — Present",
    description:
      "Founded a freelance dev business. Sole developer on Dream Garage (car workshop management) and Shuda Logistics (distribution management) — both built from scratch to production for Sdn Bhd clients.",
  },
  {
    role: "Software Development Intern",
    company: "CN Cetak Niaga Sdn. Bhd",
    location: "Hybrid",
    date: "Aug 2025 — Jan 2026",
    description:
      "Developed software solutions, implemented N8N workflow automations and AI integrations for business processes in the printing industry.",
  },
];

const featuredProjects = [
  {
    name: "CetakNow",
    description:
      "Full printing ERP system with 7 modules, 136 database tables, and 399 API routes — covering sales, HRM, production, finance, and LHDN e-invoicing.",
    tags: ["Laravel", "Vue 3", "TypeScript", "MySQL", "Redis"],
    context: "Digital Scape MY",
  },
  {
    name: "Siso Print (SignScape)",
    description:
      "3 interconnected applications sharing a single Laravel API — internal ERP (86 pages), customer portal (20 pages), and corporate website (9 pages).",
    tags: ["Laravel", "Vue 3", "React 19", "Inertia.js", "Playwright"],
    context: "Digital Scape MY",
  },
  {
    name: "Dream Garage",
    description:
      "Complete car workshop management system with 4 document types, 11-status lifecycle, race-condition-safe auto-numbering, and invoice-stock state machine.",
    tags: ["Vue 3", "Fastify 5", "Prisma", "PostgreSQL"],
    context: "AP Devotion · Freelance",
  },
  {
    name: "Shuda Logistics V3",
    description:
      "Distribution management system with capacity-constrained allocation algorithm, persistent WhatsApp integration, and timezone-aware auto-distribution.",
    tags: ["Next.js", "TypeScript", "Supabase", "WhatsApp Web.js"],
    context: "AP Devotion · Freelance",
  },
];
