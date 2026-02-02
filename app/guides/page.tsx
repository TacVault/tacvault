import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gear Guides | TacVault',
  description: 'Tactical gear comparisons with real specs, current prices, and honest recommendations.',
}

const guides = [
  {
    title: 'Best Plate Carriers 2026',
    href: '/guides/best-plate-carriers-2026',
    category: 'Plate Carriers',
    products: 7,
    date: 'Jan 2026',
    desc: 'Crye JPC 2.0, Ferro Slickster, Defense Mechanisms MEPC, and more compared.',
    live: true,
  },
  {
    title: 'Best Red Dots Under $300',
    category: 'Optics',
    products: null,
    date: 'Coming Soon',
    desc: 'Holosun, Sig Sauer, Trijicon, and more compared.',
    live: false,
  },
  {
    title: 'Best IFAKs 2026',
    category: 'Medical',
    products: null,
    date: 'Coming Soon',
    desc: 'NAR, Dark Angel, Blue Force Gear, and more compared.',
    live: false,
  },
  {
    title: 'Best Weapon Lights 2026',
    category: 'Lights',
    products: null,
    date: 'Coming Soon',
    desc: 'Streamlight, Surefire, Modlite, Cloud Defensive compared.',
    live: false,
  },
]

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <header className="mb-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-50 tracking-tight mb-3">
          Gear Guides
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Tactical gear comparisons with real specs, current prices from multiple retailers, and honest recommendations. No sponsored fluff.
        </p>
      </header>

      <div className="space-y-4">
        {guides.map((g, i) => {
          const Tag = g.live ? 'a' : 'div'
          return (
            <Tag
              key={i}
              {...(g.live ? { href: g.href } : {})}
              className={`block p-5 sm:p-6 rounded-xl border transition-all ${
                g.live
                  ? 'bg-zinc-900/50 border-zinc-800/60 hover:border-brand-amber/30 group cursor-pointer'
                  : 'bg-zinc-900/20 border-zinc-800/30 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-md ${
                      g.live
                        ? 'bg-brand-amber/10 text-brand-amber'
                        : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {g.category}
                    </span>
                    {!g.live && (
                      <span className="text-xs text-zinc-600 font-medium">Coming Soon</span>
                    )}
                  </div>
                  <h2 className={`font-heading text-lg font-bold mb-1 ${
                    g.live ? 'text-zinc-100 group-hover:text-brand-amber transition-colors' : 'text-zinc-500'
                  }`}>
                    {g.title}
                  </h2>
                  <p className="text-sm text-zinc-500">{g.desc}</p>
                  {g.live && (
                    <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                      <span>{g.date}</span>
                      <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                      <span>{g.products} products compared</span>
                    </div>
                  )}
                </div>
                {g.live && (
                  <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-800 text-zinc-600 group-hover:text-brand-amber group-hover:border-brand-amber/30 transition-all shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                )}
              </div>
            </Tag>
          )
        })}
      </div>
    </div>
  )
}
