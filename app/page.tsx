export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-amber/5 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.08), transparent)',
        }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-amber/10 border border-brand-amber/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" />
              <span className="text-xs font-medium text-brand-amber tracking-wide">NEW — Best Plate Carriers 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-50 tracking-tight leading-[1.1] mb-5">
              Build your loadout.{' '}
              <span className="text-brand-amber">Find the best price.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-8">
              Compare tactical gear, check compatibility, and stop wasting money on stuff that doesn't work together. Like PCPartPicker, but for your kit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/guides/best-plate-carriers-2026"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-amber text-zinc-950 font-heading font-bold rounded-lg hover:bg-brand-amber-light transition-all hover:shadow-lg hover:shadow-brand-amber/20"
              >
                Read First Guide
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a
                href="#alerts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-heading font-semibold rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-all"
              >
                Get Deal Alerts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What TacVault Does */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              ),
              title: 'Gear Comparisons',
              desc: 'Real specs, real prices, real pros and cons. No sponsored fluff.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                </svg>
              ),
              title: 'Price Comparison',
              desc: 'Same product, prices from multiple retailers. Find the best deal.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              ),
              title: 'Compatibility',
              desc: 'Know what fits before you buy. No more returns.',
            },
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/80">
              <div className="w-10 h-10 rounded-lg bg-brand-amber/10 flex items-center justify-center text-brand-amber mb-4 group-hover:bg-brand-amber/15 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Guide */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-heading text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">Latest Guides</h2>
        <a
          href="/guides/best-plate-carriers-2026"
          className="group block p-6 sm:p-8 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-brand-amber/30 transition-all"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-brand-amber/10 text-brand-amber text-xs font-medium rounded-md mb-3">Plate Carriers</span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-zinc-100 mb-2 group-hover:text-brand-amber transition-colors">
                Best Plate Carriers 2026
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
                7 carriers compared — Crye JPC 2.0, Ferro Slickster, Defense Mechanisms MEPC, and more. Real specs, current prices from multiple retailers, and honest recommendations.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                <span>Jan 2026</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span>12 min read</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span>7 products compared</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 text-zinc-600 group-hover:text-brand-amber group-hover:border-brand-amber/30 transition-all shrink-0 mt-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>
        </a>
      </section>

      {/* Email Capture */}
      <section id="alerts" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">
            Get deal alerts
          </h2>
          <p className="text-zinc-400 mb-8">
            We'll email you when gear you want drops in price. No spam, just deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" action="#" method="GET">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-brand-amber/50 focus:ring-1 focus:ring-brand-amber/20 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-amber text-zinc-950 font-heading font-bold rounded-lg hover:bg-brand-amber-light transition-all hover:shadow-lg hover:shadow-brand-amber/20 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
          <p className="text-xs text-zinc-600 mt-4">Free. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
