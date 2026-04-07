import Image from "next/image";

const skills = {
  "Backend & Systems": [
    "Laravel 10–12",
    "Fastify 5",
    "Express 5",
    "Node.js",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Prisma ORM",
  ],
  "Frontend Engineering": [
    "Vue 3",
    "React 19",
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Inertia.js",
    "Pinia",
    "Framer Motion",
    "Fabric.js",
  ],
  "Infrastructure & DevOps": [
    "Azure VPS",
    "Nginx",
    "PM2",
    "Supervisor",
    "Cloudflare Pages",
    "Docker",
    "Let's Encrypt SSL",
    "Git",
    "Supabase",
  ],
};

const softSkills = [
  { num: "01", label: "Solo End-to-End Delivery" },
  { num: "02", label: "System Architecture" },
  { num: "03", label: "AI-Assisted Development" },
  { num: "04", label: "Client Communication" },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 mb-16 md:mb-24">
          <div>
            <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
              The person behind the code
            </p>
            <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-on-surface mb-8">
              About.
            </h1>
            <p className="text-on-surface-variant leading-relaxed max-w-xl mb-8">
              I&apos;m not the smartest person in the room. I just don&apos;t
              stop until the thing works. I&apos;ll sit with a problem way
              longer than I probably should, not because I&apos;m a
              perfectionist, but because I actually care how it turns out.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="font-label text-[10px] tracking-widest uppercase text-outline mb-1">
                  Based in
                </p>
                <p className="text-sm text-on-surface">
                  Kuala Terengganu, MY
                </p>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-widest uppercase text-outline mb-1">
                  Availability
                </p>
                <p className="text-sm text-emerald-400">Available</p>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-widest uppercase text-outline mb-1">
                  Focus
                </p>
                <p className="text-sm text-on-surface">
                  Full-Stack & Systems
                </p>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-widest uppercase text-outline mb-1">
                  Experience
                </p>
                <p className="text-sm text-on-surface">1+ years</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative bg-surface-mid p-3 pb-12 rotate-2 shadow-2xl">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/fakhrul.jpg"
                  alt="Fakhrul Radzi"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16 md:mb-24">
          <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
            Skills & Tools
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
            The tools I keep coming back to. Some I&apos;ve been using since day
            one, some I picked up out of necessity and just never stopped.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6"
              >
                <h3 className="font-heading font-bold text-base text-on-surface mb-4">
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-on-surface-variant"
                    >
                      <span className="w-1.5 h-1.5 bg-outline-variant rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16 md:mb-24">
          <h3 className="font-heading font-bold text-2xl text-on-surface mb-2">
            It&apos;s not just about code.
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
            Most of my career has been solo — building entire systems end-to-end
            for real clients. You learn fast when there&apos;s no one else to
            hand it off to.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.num}
                className="bg-surface-mid border border-outline-variant/20 rounded-sm p-5"
              >
                <span className="font-heading font-bold text-xl text-outline-variant">
                  {skill.num}
                </span>
                <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mt-2">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 md:mb-24">
          <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-6">
            Education
          </p>
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-on-surface">
                  Diploma in Information Technology
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Universiti Tun Hussein Onn Malaysia (UTHM) — Panchor, Johor
                </p>
                <p className="text-outline text-sm mt-1">CGPA: 3.37</p>
              </div>
              <p className="font-label text-[10px] tracking-widest uppercase text-outline whitespace-nowrap">
                Aug 2023 — Dec 2025
              </p>
            </div>
          </div>
        </div>

        {/* AI Proficiency */}
        <div>
          <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
            AI-Powered Development
          </p>
          <h3 className="font-heading font-bold text-2xl text-on-surface mb-6">
            Built with AI, shipped by me.
          </h3>
          <div className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6 md:p-8">
            <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed max-w-3xl">
              <p>
                I extensively use{" "}
                <span className="text-on-surface font-medium">
                  Claude Code
                </span>{" "}
                as a core development tool — AI pair programming for
                architecture planning, full-stack code generation, database
                schema design, debugging, and code review across all production
                projects.
              </p>
              <p>
                Built and shipped 5 production-grade enterprise systems
                end-to-end as a solo developer by integrating AI into every
                stage of the development lifecycle — from initial system design
                to deployment and troubleshooting.
              </p>
              <p>
                Also experienced with{" "}
                <span className="text-on-surface font-medium">
                  N8N workflow automation
                </span>{" "}
                with AI service integrations, streamlining business processes
                for printing industry operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
