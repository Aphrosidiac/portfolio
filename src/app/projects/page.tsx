const allProjects = [
  {
    name: "CetakNow",
    description:
      "Full printing ERP system with 7 modules (Auth, Core, Documents, Sales, HRM, Production, Finance). Features include LHDN MyInvois e-invoicing, real-time production Kanban with Fabric.js design editor, full HRM ecosystem with multi-layer approval workflows, POS with loyalty points and coupon engine, and WhatsApp bulk messaging.",
    tags: ["Laravel 12", "Vue 3", "TypeScript", "Tailwind CSS", "MySQL", "Redis", "WebSocket"],
    context: "Digital Scape MY",
    stats: "136 tables · 399 routes · 85 models",
  },
  {
    name: "Siso Print (SignScape)",
    description:
      "3 interconnected applications sharing a single Laravel API: internal ERP (86 pages), customer portal (20 pages), and corporate website (9 pages). Features dynamic signboard pricing engine, 12-column Kanban production board, 3-tier agent discount system, dual auth (session + Sanctum), and full financial management with 6% SST.",
    tags: ["Laravel 10", "Vue 3", "Inertia.js", "React 19", "TypeScript", "Framer Motion", "Playwright"],
    context: "Digital Scape MY",
    stats: "3 apps · 115 pages · 42 E2E tests",
  },
  {
    name: "Dream Garage",
    description:
      "Complete car workshop management system with 4 document types (Quotation, Invoice, Receipt, Delivery Order), an 11-status lifecycle, and document conversion chain. Race-condition-safe auto-numbering using PostgreSQL FOR UPDATE locks. Invoice-stock integration state machine with full audit trail.",
    tags: ["Vue 3", "TypeScript", "Fastify 5", "Prisma", "PostgreSQL", "Chart.js"],
    context: "AP Devotion · Freelance",
    stats: "4 doc types · 11 statuses · Full audit trail",
  },
  {
    name: "Shuda Logistics V3",
    description:
      "Distribution management system with advanced capacity-constrained distribution algorithm featuring region-based driver scoring, priority ordering, and carton-to-pallet conversion. Persistent WhatsApp integration with session disk serialization and exponential backoff. Dynamic schema builder for end-user field customization.",
    tags: ["Next.js 16", "TypeScript", "Supabase", "WhatsApp Web.js", "Puppeteer"],
    context: "AP Devotion · Freelance",
    stats: "Smart allocation · WhatsApp integration · Dynamic schemas",
  },
  {
    name: "LearnScape",
    description:
      "Community learning platform with multi-tier membership gating (Standard/Premium/VIP), auto-downgrade on plan expiry, course marketplace with video modules, discount code engine, and global search system (Ctrl+K) with debounced live search across 5 resource types.",
    tags: ["Vue 3", "Pinia", "Express 5", "MySQL", "JWT"],
    context: "Digital Scape MY",
    stats: "3 membership tiers · Course marketplace · Global search",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-2">
          Open source & client work
        </p>
        <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-on-surface mb-6">
          Projects.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 mb-16">
          <p className="text-on-surface-variant leading-relaxed">
            Some of these shipped, some are still being iterated on. Most
            started with &quot;this should exist&quot; and ended with me
            building the whole thing.
          </p>
          <p className="text-outline text-sm italic md:text-right">
            Most good developers do programming not because they expect to get
            paid, but because it is fun. — Linus Torvalds
          </p>
        </div>

        <div className="space-y-6">
          {allProjects.map((project, i) => (
            <div
              key={i}
              className="bg-surface-mid border border-outline-variant/20 rounded-sm p-6 md:p-8 hover:border-outline-variant/40 transition-colors group"
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
          ))}
        </div>
      </div>
    </main>
  );
}
