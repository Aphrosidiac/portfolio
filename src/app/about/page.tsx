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
              More than just the code
            </p>
            <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-on-surface mb-8">
              About.
            </h1>
            <p className="text-on-surface-variant leading-relaxed max-w-xl mb-8">
              I&apos;m not the fastest developer you&apos;ll meet. But I&apos;m
              the one who&apos;ll sit with a broken schema at 2AM until it makes
              sense, rebuild an entire module because the first version felt
              wrong, and still show up the next day ready to do it again. I care
              about the outcome, not just the output.
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
            What I work with
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
            These are the tools I actually use in production — not a wishlist.
            Every item here has been battle-tested in a real system I&apos;ve
            shipped.
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
            Beyond the tech stack.
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
            When you&apos;re the only developer on a project, you wear every
            hat. I talk to clients, design databases, write APIs, build
            frontends, deploy servers, and fix things at midnight. That&apos;s
            not a complaint — it&apos;s the part I like.
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
            How I actually work
          </p>
          <h3 className="font-heading font-bold text-2xl text-on-surface mb-6">
            AI is my co-pilot, not my replacement.
          </h3>
          <div className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6 md:p-8">
            <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed max-w-3xl">
              <p>
                I use{" "}
                <span className="text-on-surface font-medium">
                  Claude Code
                </span>{" "}
                heavily — not to generate boilerplate, but as a thinking
                partner. Architecture decisions, schema validation, debugging
                edge cases, reviewing my own code before I push. It&apos;s part
                of how I ship entire systems solo without cutting corners.
              </p>
              <p>
                Five production ERPs built end-to-end with AI in the loop.
                That&apos;s not &quot;vibe coding&quot; — that&apos;s knowing
                how to use every tool available to deliver real software at a
                pace that shouldn&apos;t be possible for one person.
              </p>
              <p>
                I also build AI into the products themselves —{" "}
                <span className="text-on-surface font-medium">
                  N8N workflow automation
                </span>{" "}
                with AI integrations, helping businesses automate the stuff they
                shouldn&apos;t be doing manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
