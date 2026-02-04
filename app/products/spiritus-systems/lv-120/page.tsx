export default function SpiritusLV120Page() {
  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-[#555a61] mb-6">
          <a href="/" className="hover:text-[#a8b2bc]">Home</a>
          <span className="mx-2">›</span>
          <a href="/products" className="hover:text-[#a8b2bc]">Plate Carriers</a>
          <span className="mx-2">›</span>
          <span className="text-[#a8b2bc]">Spiritus Systems LV-120</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#8b939c] text-sm uppercase tracking-wider mb-2">Spiritus Systems</p>
          <h1 className="font-rajdhani font-bold text-4xl mb-2">LV-120 OVERT Plate Carrier</h1>
          <p className="text-2xl font-rajdhani text-[#a8b2bc]">$499.95 (complete kit)</p>
          <div className="flex gap-6 mt-4 text-sm text-[#8b939c]">
            <span>Weight: 2.03 lbs</span>
            <span>Material: X-Pac X50</span>
            <span>Made In: USA</span>
            <span>Sizes: S, M, L, XL</span>
          </div>
        </div>

        {/* Quick Answer */}
        <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4 mb-8">
          <p className="text-[#4a9c6d]"><strong>Buy this if:</strong> You want Spiritus' latest premium modular system with the CURV chassis and Reactive Cummerbund.</p>
          <p className="text-[#9c4a4a] mt-2"><strong>Skip this if:</strong> Budget is a concern or you don't need extreme modularity.</p>
        </div>

        {/* Quick Verdict */}
        <div className="mb-8">
          <h2 className="font-rajdhani font-bold text-xl mb-3 text-[#c8cfd7]">Quick Verdict</h2>
          <p className="text-[#8b939c] leading-relaxed">
            The LV-120 is Spiritus Systems' latest flagship carrier, replacing the LV-119. Released December 2025, it features the new CURV thermoformed chassis, Reactive Cummerbund with integrated First Spear TUBES, and X-Pac X50 construction. This is premium modularity for users who want the cutting edge. Note: NOT compatible with legacy LV-119 back panels due to the new #10 Universal Zipper.
          </p>
        </div>

        {/* Specs */}
        <div className="bg-[#0e1011] border border-[#1e2124] rounded-lg p-6 mb-8">
          <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">Specifications</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Weight</span>
              <span>2.03 lbs (Medium, complete kit)</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Material</span>
              <span>X-Pac X50 Nylon</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Plate Size</span>
              <span>SAPI cut S/M/L/XL</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Cummerbund</span>
              <span>Reactive w/ First Spear TUBES</span>
            </div>
            <div className="flex justify-between border-b border-[#1e2124] pb-2">
              <span className="text-[#8b939c]">Made In</span>
              <span>USA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b939c]">Release Date</span>
              <span>December 18, 2025</span>
            </div>
          </div>
        </div>

        {/* Pros/Cons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[rgba(74,156,109,0.04)] border border-[rgba(74,156,109,0.12)] rounded-lg p-4">
            <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#4a9c6d] mb-3">Pros</h3>
            <ul className="space-y-2 text-sm text-[#8b939c]">
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Latest Spiritus technology</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> CURV thermoformed chassis</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Integrated First Spear TUBES</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Extreme modularity</li>
              <li className="flex gap-2"><span className="text-[#4a9c6d]">✓</span> Premium materials</li>
            </ul>
          </div>
          <div className="bg-[rgba(156,74,74,0.04)] border border-[rgba(156,74,74,0.12)] rounded-lg p-4">
            <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#9c4a4a] mb-3">Cons</h3>
            <ul className="space-y-2 text-sm text-[#8b939c]">
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Premium price ($500)</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> NOT compatible with LV-119 back panels</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> Complex system to configure</li>
              <li className="flex gap-2"><span className="text-[#9c4a4a]">✗</span> New product, limited long-term testing</li>
            </ul>
          </div>
        </div>

        {/* Prices */}
        <div className="mb-8">
          <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">Current Prices</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-[#0e1011] border border-[#1e2124] rounded-lg p-3">
              <span className="text-[#8b939c]">Spiritus Systems (Direct)</span>
              <a href="#" className="bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded px-3 py-1 text-sm text-[#a8b2bc] hover:border-[#5c6370]">$499.95 →</a>
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