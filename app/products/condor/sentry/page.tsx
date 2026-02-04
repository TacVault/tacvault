export default function CondorSentryPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-[#555a61] mb-6">
          <a href="/" className="hover:text-[#a8b2bc]">Home</a>
          <span className="mx-2">›</span>
          <a href="/products" className="hover:text-[#a8b2bc]">Plate Carriers</a>
          <span className="mx-2">›</span>
          <span className="text-[#a8b2bc]">Condor Sentry</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#8b939c] text-sm uppercase tracking-wider mb-2">Condor Outdoor</p>
          <h1 className="font-rajdhani font-bold text-4xl mb-2">Sentry Plate Carrier</h1>
          <p className="text-2xl font-rajdhani text-[#a8b2bc]">$50–$65</p>
          <div className="flex gap-6 mt-4 text-sm text-[#8b939c]">
            <span>Weight: ~1.5 lbs</span>
            <span>Material: Nylon</span>
            <span>Made In: Imported</span>
            <span>Sizes: One Size (32"–54")</span>
          </div>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4 mb-8">
          <p className="text-[#4a9c6d]"><strong>Buy this if:</strong> You need a functional budget carrier for training, airsoft, or entry-level preparedness.</p>
          <p className="text-[#9c4a4a] mt-2"><strong>Skip this if:</strong> You need professional-grade durability or extensive modularity.</p>
        </div>

        {/* Quick Verdict */}
        <div className="mb-8">
          <h2 className="font-rajdhani font-bold text-xl mb-3 text-[#c8cfd7]">Quick Verdict</h2>
          <p className="text-[#8b939c] leading-relaxed">
            The Condor Sentry is the best budget plate carrier on the market. At $50–$65, it's 3–4× cheaper than mid-tier options while still being functional for basic use. It's minimalist by design—no cummerbund, just webbing straps—which makes it quick to don/doff. Perfect for training, airsoft, or as a first carrier. Don't expect premium durability, but for the price, it delivers.
          </p>
        </div>

        {/* Specs */}
        <div className="bg-[#0e1011] border border-[#1e2124] rounded-lg p-6 mb-8">
          <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">Specifications</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Weight</span>
              <span>~1.5 lbs / 24 oz</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Material</span>
              <span>Nylon (not Cordura)</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Plate Size</span>
              <span>Up to 10.25" × 13.25"</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Waist Range</span>
              <span>32"–54" adjustable</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Made In</span>
              <span>Imported</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b939c]">Warranty</span>
              <span>Condor Limited Warranty</span>
            </div>
          </div>
        </div>

        {/* Pros/Cons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[rgba(74,156,109,0.04)] border border-[rgba(74,156,109,0.12)] rounded-lg p-4">
            <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#4a9c6d] mb-3">Pros</h3>
            <ul className="space-y-2 text-sm text-[#8b939c]">
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Unbeatable price ($50–$65)</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Simple, quick don/doff</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Wide size range (32"–54")</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Functional MOLLE webbing</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Works for fitness/weighted vest use</li>
            </ul>
          </div>
          <div className="bg-[rgba(156,74,74,0.04)] border border-[rgba(156,74,74,0.12)] rounded-lg p-4">
            <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#9c4a4a] mb-3">Cons</h3>
            <ul className="space-y-2 text-sm text-[#8b939c]">
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> No cummerbund (webbing only)</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Imported, not USA-made</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Less durable than premium options</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> 10×12 max—no 11×14 plates</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Loose fit under heavy movement</li>
            </ul>
          </div>
        </div>

        {/* Prices */}
        <div className="mb-8">
          <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">Current Prices</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-[#0e1011] border border-[#1e2124] rounded-lg p-3">
              <span className="text-[#8b939c]">Evike</span>
              <a href="#" className="bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded px-3 py-1 text-sm text-[#a8b2bc] hover:border-[#5c6370]">$50–$55 →</a>
            </div>
            <div className="flex justify-between items-center bg-[#0e1011] border border-[#1e2124] rounded-lg p-3">
              <span className="text-[#8b939c]">Rogue Fitness</span>
              <a href="#" className="bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded px-3 py-1 text-sm text-[#a8b2bc] hover:border-[#5c6370]">$55 →</a>
            </div>
            <div className="flex justify-between items-center bg-[#0e1011] border border-[#1e2124] rounded-lg p-3">
              <span className="text-[#8b939c]">Primary Arms</span>
              <a href="#" className="bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded px-3 py-1 text-sm text-[#a8b2bc] hover:border-[#5c6370]">$58 →</a>
            </div>
            <div className="flex justify-between items-center bg-[#0e1011] border border-[#1e2124] rounded-lg p-3">
              <span className="text-[#8b939c]">Condor (Direct)</span>
              <a href="#" className="bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded px-3 py-1 text-sm text-[#a8b2bc] hover:border-[#5c6370]">$64 →</a>
            </div>
          </div>
          <p className="text-xs text-[#555a61] mt-2">Prices verified February 2026</p>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1e2124] pt-6 mt-12 text-xs text-[#555a61]">
          <p><strong>Affiliate Disclosure:</strong> TacVault earns a commission from purchases made through links on this page. This doesn't affect our recommendations.</p>
        </div>

      </div>
    </main>
  );
}