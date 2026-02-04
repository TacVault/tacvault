export default function FerroSlicksterPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-[#555a61] mb-6">
          <a href="/" className="hover:text-[#a8b2bc]">Home</a>
          <span className="mx-2">›</span>
          <a href="/products" className="hover:text-[#a8b2bc]">Plate Carriers</a>
          <span className="mx-2">›</span>
          <span className="text-[#a8b2bc]">Ferro Concepts Slickster</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#8b939c] text-sm uppercase tracking-wider mb-2">Ferro Concepts</p>
          <h1 className="font-rajdhani font-bold text-4xl mb-2">Slickster Plate Carrier</h1>
          <p className="text-2xl font-rajdhani text-[#a8b2bc]">$165</p>
          <div className="flex gap-6 mt-4 text-sm text-[#8b939c]">
            <span>Weight: 0.9 lbs</span>
            <span>Material: 500D Cordura</span>
            <span>Made In: USA</span>
            <span>Sizes: S, M, L</span>
          </div>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4 mb-8">
          <p className="text-[#4a9c6d]"><strong>Buy this if:</strong> You want a versatile, low-profile carrier that scales from slick to full loadout with swappable cummerbunds.</p>
          <p className="text-[#9c4a4a] mt-2"><strong>Skip this if:</strong> You need built-in storage out of the box or want shoulder padding included.</p>
        </div>

        {/* Quick Verdict */}
        <div className="mb-8">
          <h2 className="font-rajdhani font-bold text-xl mb-3 text-[#c8cfd7]">Quick Verdict</h2>
          <p className="text-[#8b939c] leading-relaxed">
            The Ferro Concepts Slickster is the gold standard for low-profile, adaptable plate carriers. At just 0.9 lbs with the base cummerbund, it's one of the lightest carriers available. The genius is in the cummerbund system—swap between slick, MOLLE, or the ADAPT system depending on your mission. At $165, it's hard to beat for those who value versatility.
          </p>
        </div>

        {/* Specs */}
        <div className="bg-[#0e1011] border border-[#1e2124] rounded-lg p-6 mb-8">
          <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">Specifications</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Weight</span>
              <span>0.9 lbs (with base cummerbund)</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Material</span>
              <span>500D Cordura Nylon</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Plate Size</span>
              <span>10×12 (M/L), 10×13 (L)</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Cummerbund</span>
              <span>Elastic (swappable)</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Made In</span>
              <span>USA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b939c]">Warranty</span>
              <span>Limited Lifetime</span>
            </div>
          </div>
        </div>

        {/* Pros/Cons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[rgba(74,156,109,0.04)] border border-[rgba(74,156,109,0.12)] rounded-lg p-4">
            <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#4a9c6d] mb-3">Pros</h3>
            <ul className="space-y-2 text-sm text-[#8b939c]">
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Ultra-lightweight at 0.9 lbs</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Swappable cummerbund system</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Low-profile for concealment</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> USA-made quality</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Great price at $165</li>
            </ul>
          </div>
          <div className="bg-[rgba(156,74,74,0.04)] border border-[rgba(156,74,74,0.12)] rounded-lg p-4">
            <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#9c4a4a] mb-3">Cons</h3>
            <ul className="space-y-2 text-sm text-[#8b939c]">
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> No shoulder padding included</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Minimal storage without add-ons</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> No drag handle</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Elastic cummerbund less secure under load</li>
            </ul>
          </div>
        </div>

        {/* Prices */}
        <div className="mb-8">
          <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">Current Prices</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-[#0e1011] border border-[#1e2124] rounded-lg p-3">
              <span className="text-[#8b939c]">Ferro Concepts (Direct)</span>
              <a href="#" className="bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded px-3 py-1 text-sm text-[#a8b2bc] hover:border-[#5c6370]">$165 →</a>
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