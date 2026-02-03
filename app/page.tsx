import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(139,157,170,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-container mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border-light rounded mb-6">
            <span className="w-1.5 h-1.5 bg-silver rounded-full animate-pulse" />
            <span className="font-tactical font-semibold text-xs tracking-[2px] uppercase text-silver">
              New — Best Red Dots Under $300
            </span>
          </div>

          <h1 className="font-tactical font-bold text-5xl md:text-6xl leading-[1.05] tracking-tight text-text-primary mb-5 max-w-[700px]">
            Build your loadout.{' '}
            <span className="text-gradient">Find the best price.</span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed max-w-[540px] mb-8">
            Compare tactical gear, check compatibility, and stop wasting money on stuff that doesn't work together. Like PCPartPicker, but for your kit.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/guides/best-red-dots-under-300" className="btn-primary">
              Read Latest Guide
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link href="#alerts" className="btn-secondary">
              Get Deal Alerts
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 bg-gradient-to-br from-[#5c6370] to-[#3a3d42] border border-[#7a8290] rounded-lg hover:border-[#5c6370] transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[rgba(139,157,170,0.08)] border border-border flex items-center justify-center text-silver mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3 className="font-tactical font-bold text-base text-text-primary mb-2">Gear Comparisons</h3>
            <p className="text-sm text-text-secondary">Real specs, real prices, real pros and cons. No sponsored fluff.</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#5c6370] to-[#3a3d42] border border-[#7a8290] rounded-lg hover:border-[#5c6370] transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[rgba(139,157,170,0.08)] border border-border flex items-center justify-center text-silver mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="font-tactical font-bold text-base text-text-primary mb-2">Price Comparison</h3>
            <p className="text-sm text-text-secondary">Same product, prices from multiple retailers. Find the best deal.</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#5c6370] to-[#3a3d42] border border-[#7a8290] rounded-lg hover:border-[#5c6370] transition-all group">
            <div className="w-10 h-10 rounded-lg bg-[rgba(139,157,170,0.08)] border border-border flex items-center justify-center text-silver mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="font-tactical font-bold text-base text-text-primary mb-2">Compatibility</h3>
            <p className="text-sm text-text-secondary">Know what fits before you buy. No more returns.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </div>

      {/* Latest Guides */}
      <section className="max-w-container mx-auto px-6 py-16">
        <div className="section-label mb-6">Latest Guides</div>

        <div className="space-y-4">
          {/* Red Dots Guide */}
          <Link href="/guides/best-red-dots-under-300" className="block card group">
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="badge mb-3">Red Dots</span>
                <h3 className="font-tactical font-bold text-2xl text-text-primary mb-2 group-hover:text-silver-light transition-colors">
                  Best Red Dots Under $300
                </h3>
                <p className="text-sm text-text-secondary max-w-[600px]">
                  7 optics compared — Holosun 507C, Sig Romeo5, Vortex SPARC AR, and more. Verified specs, current prices, honest recommendations.
                </p>
                <div className="flex items-center gap-3 mt-4 text-xs text-text-muted font-tactical">
                  <span>Feb 2026</span>
                  <span className="w-1 h-1 bg-gunmetal rounded-full" />
                  <span>7 products compared</span>
                </div>
              </div>
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-text-muted group-hover:text-silver group-hover:border-gunmetal transition-all flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </div>
          </Link>

          {/* Plate Carriers Guide */}
          <Link href="/guides/best-plate-carriers-2026" className="block card group">
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="badge mb-3">Plate Carriers</span>
                <h3 className="font-tactical font-bold text-2xl text-text-primary mb-2 group-hover:text-silver-light transition-colors">
                  Best Plate Carriers 2026
                </h3>
                <p className="text-sm text-text-secondary max-w-[600px]">
                  7 carriers compared — Crye JPC 2.0, Ferro Slickster, Defense Mechanisms MEPC, and more. Real specs, current prices from multiple retailers.
                </p>
                <div className="flex items-center gap-3 mt-4 text-xs text-text-muted font-tactical">
                  <span>Feb 2026</span>
                  <span className="w-1 h-1 bg-gunmetal rounded-full" />
                  <span>7 products compared</span>
                </div>
              </div>
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-text-muted group-hover:text-silver group-hover:border-gunmetal transition-all flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </div>

      {/* Email Capture */}
      <section id="alerts" className="max-w-container mx-auto px-6 py-20">
        <div className="max-w-[520px] mx-auto text-center">
          <h2 className="font-tactical font-bold text-3xl text-text-primary mb-2">
            Get deal alerts
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            We'll email you when gear you want drops in price. No spam, just deals.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 bg-bg-card border border-border-light rounded-md text-text-primary text-sm placeholder-text-muted focus:outline-none focus:border-gunmetal transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">
              Notify Me
            </button>
          </div>
          <p className="text-xs text-text-muted mt-3">
            Free. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}