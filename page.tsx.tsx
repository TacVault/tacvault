'use client';

import Link from 'next/link';

export default function D3CRMPage() {
  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <nav className="text-sm text-[#555a61] mb-6">
          <Link href="/" className="hover:text-[#a8b2bc]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#a8b2bc]">Products</Link>
          <span className="mx-2">/</span>
          <Link href="/products/haley-strategic" className="hover:text-[#a8b2bc]">Haley Strategic</Link>
          <span className="mx-2">/</span>
          <span className="text-[#8b939c]">D3CRM Micro</span>
        </nav>
      </div>

      {/* Product Header */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <p className="text-[#8b939c] text-sm uppercase tracking-wider mb-2">Haley Strategic</p>
        <h1 className="font-rajdhani font-bold text-4xl md:text-5xl text-[#e8eaed] mb-3">D3CRM Micro Chest Rig</h1>
        <p className="text-2xl font-semibold text-[#a8b2bc] mb-4">$140</p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 text-sm text-[#8b939c]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            10.7 oz
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            500D Cordura
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
            Made in USA
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            8 Colors
          </span>
        </div>
      </div>

      {/* Quick Answer Bar */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4a9c6d] font-semibold">Buy this if:</span>
              <p className="text-[#e8eaed] mt-1">You want a proven, low-profile placard that works as both a standalone chest rig and a plate carrier attachment.</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#9c4a4a] font-semibold">Skip this if:</span>
              <p className="text-[#e8eaed] mt-1">You need maximum modularity in the front pouch or want everything included in one purchase.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Verdict */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="bg-[rgba(139,157,170,0.05)] border border-[#2a2d31] rounded-lg p-6">
          <h2 className="font-rajdhani font-bold text-lg text-[#c8cfd7] mb-3">Quick Verdict</h2>
          <p className="text-[#c8cfd7] leading-relaxed">
            The Haley Strategic D3CRM is the original "micro" chest rig that helped define the category. It offers a compact, low-profile design that works seamlessly as a standalone chest rig or as a placard on most modern plate carriers. The swappable insert system lets you configure it for 5.56, 7.62, or SMG magazines. At $140 for the placard alone (inserts and harness sold separately), it's a premium option—but the build quality, versatility, and proven track record justify the investment for serious users.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">Overview</h2>
        <div className="space-y-4 text-[#a8b2bc] leading-relaxed">
          <p>
            The D3CRM (Disruptive Environments Chest Rig Micro) was designed by Travis Haley to be adaptive to any mission and environment. Over the past 8 years, it has seen operational use across every branch of the U.S. military, NATO special operations forces, and law enforcement agencies. The "Micro" designation refers to its compact three-magazine footprint, which takes up considerably less body surface than full-width chest rigs while still providing essential storage.
          </p>
          <p>
            What sets the D3CRM apart is its dual-purpose design. With the optional X-Harness or H-Harness, it functions as a standalone chest rig that's low-profile enough to wear under a loose jacket without printing. With SwiftClip buckles and a full hook velcro backing, it attaches to compatible plate carriers in seconds. The VELCRO-lined insert pouch accepts Haley's swappable magazine inserts, letting you reconfigure from rifle to SMG to pistol mags without buying a new rig.
          </p>
        </div>
      </div>

      {/* Specs Table */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">Specifications</h2>
        <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-[#1e2124]">
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Weight</td>
                <td className="px-4 py-3 text-[#e8eaed]">10.7 oz (excludes harness)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Overall Dimensions</td>
                <td className="px-4 py-3 text-[#e8eaed]">11.5" (L) x 6" (H) x 3.5" (W)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Insert Pouch</td>
                <td className="px-4 py-3 text-[#e8eaed]">9" (L) x 5" (H) x 1.25" (W)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">GP Pouch</td>
                <td className="px-4 py-3 text-[#e8eaed]">9.5" (L) x 5" (H) x 1.25" (W)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Material</td>
                <td className="px-4 py-3 text-[#e8eaed]">MIL-SPEC 500D Nylon</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Hardware</td>
                <td className="px-4 py-3 text-[#e8eaed]">YKK Zippers, ITW Nexus Buckles</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Colors</td>
                <td className="px-4 py-3 text-[#e8eaed]">MultiCam, Ranger Green, Black, Coyote Brown, MultiCam Black, Grey, MultiCam Arid, MultiCam Tropic</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Made In</td>
                <td className="px-4 py-3 text-[#e8eaed]">USA (Berry Compliant)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">MSRP</td>
                <td className="px-4 py-3 text-[#e8eaed]">$140 (placard only)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#8b939c]">Warranty</td>
                <td className="px-4 py-3 text-[#e8eaed]">Lifetime warranty on defects (see manufacturer for current terms)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#555a61] mt-2">Specs verified against manufacturer website (per haleystrategic.com)</p>
      </div>

      {/* Pros / Cons */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-[rgba(74,156,109,0.04)] border border-[rgba(74,156,109,0.12)] rounded-lg p-6">
            <h3 className="font-rajdhani font-bold text-sm uppercase tracking-wider text-[#4a9c6d] mb-4">Pros</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">Swappable insert system — configure for 5.56, 7.62, SMG, or pistol mags</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">Dual-purpose design works as chest rig or plate carrier placard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">Low-profile enough to conceal under a jacket</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">MP2 kydex inserts provide excellent mag retention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">Integrates directly with FlatPack and FlatPack Plus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">Extensive ecosystem of compatible accessories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a9c6d] mt-0.5">✓</span>
                <span className="text-[#c8cfd7]">Made in USA with MIL-SPEC materials</span>
              </li>
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-[rgba(156,74,74,0.04)] border border-[rgba(156,74,74,0.12)] rounded-lg p-6">
            <h3 className="font-rajdhani font-bold text-sm uppercase tracking-wider text-[#9c4a4a] mb-4">Cons</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">Inserts and harness sold separately — adds $50–85 to total cost</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">Fixed admin pouch (less modular than Spiritus Micro Fight front pocket)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">Premium price point compared to alternatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">X-harness may not suit all body types (H-harness better for broad shoulders)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Known Issues */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">Known Issues</h2>
        <div className="space-y-4">
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-[#d4a55b]">⚠</span>
              <div>
                <p className="text-[#e8eaed] font-semibold">Side buckles when used as placard.</p>
                <p className="text-[#8b939c] text-sm mt-1">When mounted to a plate carrier, the removable side buckles can flap and make noise if not managed. The updated version allows these to be removed entirely when running as a placard only.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-[#d4a55b]">⚠</span>
              <div>
                <p className="text-[#e8eaed] font-semibold">Admin pouch doesn't lay completely flat.</p>
                <p className="text-[#8b939c] text-sm mt-1">The front admin pouch unzips about 90% of the way but doesn't fold completely flat. Some users prefer full-flat access for maps or phones.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-[#d4a55b]">⚠</span>
              <div>
                <p className="text-[#e8eaed] font-semibold">Total cost adds up.</p>
                <p className="text-[#8b939c] text-sm mt-1">Base placard ($140) + Triple 5.56 insert ($35) + X-Harness ($50) = $225 for a complete standalone setup. Budget accordingly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Need */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">What You'll Need to Run It</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-rajdhani font-semibold text-lg text-[#4a9c6d] mb-3">Required</h3>
            <div className="bg-[#121416] border border-[#1e2124] rounded-lg divide-y divide-[#1e2124]">
              <div className="p-4">
                <p className="text-[#e8eaed] font-semibold">Magazine Insert — $15–35</p>
                <p className="text-[#8b939c] text-sm mt-1">Choose based on your caliber: Triple 5.56 ($35), Double 5.56 ($25), Single 5.56 ($15), Single 7.62 ($20), or Quad SMG ($35). Inserts include MP2 kydex retainers.</p>
              </div>
              <div className="p-4">
                <p className="text-[#e8eaed] font-semibold">Harness OR Plate Carrier — $50+ or existing gear</p>
                <p className="text-[#8b939c] text-sm mt-1">For standalone use: X-Harness ($50) or H-Harness ($50). For placard use: any carrier with 1" ITW Nexus female buckles and velcro front panel.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-rajdhani font-semibold text-lg text-[#5b9fd4] mb-3">Optional but Recommended</h3>
            <div className="bg-[#121416] border border-[#1e2124] rounded-lg divide-y divide-[#1e2124]">
              <div className="p-4">
                <p className="text-[#e8eaed] font-semibold">Chest Rig Pad — $7.50</p>
                <p className="text-[#8b939c] text-sm mt-1">Adds comfort under heavier loadouts when using as standalone chest rig.</p>
              </div>
              <div className="p-4">
                <p className="text-[#e8eaed] font-semibold">Multi-Mission Hanger — $65</p>
                <p className="text-[#8b939c] text-sm mt-1">Dangler-style pouch that attaches via the rear velcro panel. Good for IFAK, admin, or dump pouch use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compatibility Chart */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-2">Compatibility Chart</h2>
        <p className="text-sm text-[#555a61] mb-6">Compatibility data last verified: February 2026</p>

        {/* Plate Carriers */}
        <div className="mb-8">
          <h3 className="font-rajdhani font-semibold text-lg text-[#a8b2bc] mb-4">Compatible Plate Carriers</h3>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#0e1011]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Carrier</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Status</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2124]">
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Crye Precision JPC 2.0</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Verified</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Requires AXL AVP adapter or female SwiftClips on MOLLE</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Ferro Concepts Slickster</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Ferro Concepts FCPC v5</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Spiritus Systems LV-119 Covert</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Spiritus Systems LV-119 Overt</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Defense Mechanisms MEPC</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Velocity Systems Scarab LT</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Shaw Concepts ARC v2</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct attach via velcro + SwiftClips</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">T.REX Arms AC1</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(212,165,91,0.1)] text-[#d4a55b] border border-[rgba(212,165,91,0.3)]">~ Likely</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Same SwiftClip/velcro interface as Slickster</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Accessories */}
        <div className="mb-8">
          <h3 className="font-rajdhani font-semibold text-lg text-[#a8b2bc] mb-4">Compatible Haley Strategic Accessories</h3>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#0e1011]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Accessory</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Status</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2124]">
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">FlatPack</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct integration, no adapters needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">FlatPack Plus</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct integration, no adapters needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Multi-Mission Hanger</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Attaches via rear velcro panel</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Side Saddles</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Direct integration, no adapters needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">X-Harness</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Slip loop system for quick don/doff</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">H-Harness</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]">Official</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Better weight distribution for heavy loads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Third-Party Accessories */}
        <div>
          <h3 className="font-rajdhani font-semibold text-lg text-[#a8b2bc] mb-4">Compatible Third-Party Accessories</h3>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#0e1011]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Accessory</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Status</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2124]">
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Ferro Concepts Mini Dangler</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(91,159,212,0.1)] text-[#5b9fd4] border border-[rgba(91,159,212,0.3)]">Verified</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Attaches via rear velcro panel</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">BFG Dapper Panels</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(91,159,212,0.1)] text-[#5b9fd4] border border-[rgba(91,159,212,0.3)]">Verified</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Fits in front admin pouch loop field</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#e8eaed]">Spiritus 5.56 Insert</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs font-semibold rounded bg-[rgba(212,165,91,0.1)] text-[#d4a55b] border border-[rgba(212,165,91,0.3)]">~ Likely</span></td>
                  <td className="px-4 py-3 text-[#8b939c] text-sm">Reported to fit, velcro interface similar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Best For / Who Should NOT Buy */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-6">
            <h3 className="font-rajdhani font-bold text-lg text-[#4a9c6d] mb-4">Best For</h3>
            <p className="text-[#c8cfd7] leading-relaxed">
              Users who want a proven, adaptable chest rig that can transition between standalone use and plate carrier integration. Ideal for those running multiple weapon platforms who need to swap magazine configurations. The D3CRM excels for low-vis work, vehicle operations, and anyone building around the Haley Strategic ecosystem.
            </p>
          </div>

          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-6">
            <h3 className="font-rajdhani font-bold text-lg text-[#9c4a4a] mb-4">Who Should NOT Buy This</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">Budget-conscious buyers — consider the Spiritus Bank Robber ($60) or Condor MCR1 ($30) instead</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">Those wanting maximum front-pouch modularity — the Spiritus Micro Fight Mk4 offers more configuration options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#9c4a4a] mt-0.5">✗</span>
                <span className="text-[#c8cfd7]">Users who only need a placard (no standalone use) — a dedicated placard like the Esstac Daeodon may be more cost-effective</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Variants & Options */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">Variants & Options</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-rajdhani font-semibold text-lg text-[#a8b2bc] mb-3">Colors — $140 each</h3>
            <div className="flex flex-wrap gap-2">
              {['MultiCam', 'Ranger Green', 'Black', 'Coyote Brown', 'MultiCam Black', 'Grey', 'MultiCam Arid', 'MultiCam Tropic'].map((color) => (
                <span key={color} className="px-3 py-1.5 bg-[#121416] border border-[#1e2124] rounded text-sm text-[#c8cfd7]">{color}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-rajdhani font-semibold text-lg text-[#a8b2bc] mb-3">Magazine Inserts</h3>
            <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-[#1e2124]">
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Triple 5.56mm Insert (w/ MP2)</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$35</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Double 5.56mm Insert (w/ MP2)</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$25</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Single 5.56mm Insert (w/ MP2)</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$15</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Single 7.62mm Insert (w/ MP2)</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$20</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Quad SMG Insert</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$35</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Single Pistol/Utility Insert</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$20</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">Double Pistol/Utility Insert</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-rajdhani font-semibold text-lg text-[#a8b2bc] mb-3">Harnesses</h3>
            <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-[#1e2124]">
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">X-Harness</td>
                    <td className="px-4 py-3 text-[#8b939c]">Slip loop system, quick don/doff</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#e8eaed]">H-Harness</td>
                    <td className="px-4 py-3 text-[#8b939c]">Better for heavy loads, broad shoulders</td>
                    <td className="px-4 py-3 text-[#a8b2bc] text-right">$50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Current Prices */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">Where to Buy</h2>
        <div className="bg-[#121416] border border-[#1e2124] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#0e1011]">
              <tr>
                <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Retailer</th>
                <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#555a61]">Price</th>
                <th className="px-4 py-3 text-right text-xs uppercase tracking-wider text-[#555a61]">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2124]">
              <tr>
                <td className="px-4 py-3 text-[#e8eaed]">Haley Strategic (Direct)</td>
                <td className="px-4 py-3 text-[#4a9c6d] font-semibold">$140</td>
                <td className="px-4 py-3 text-right">
                  <a href="https://haleystrategic.com/micro-chest-rig" target="_blank" rel="noopener noreferrer" className="text-[#a8b2bc] hover:text-[#e8eaed] text-sm">
                    Visit →
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#e8eaed]">Primary Arms</td>
                <td className="px-4 py-3 text-[#a8b2bc]">$140</td>
                <td className="px-4 py-3 text-right">
                  <a href="https://www.primaryarms.com/haley-strategic-d3cr-micro-chest-rig" target="_blank" rel="noopener noreferrer" className="text-[#a8b2bc] hover:text-[#e8eaed] text-sm">
                    Visit →
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#e8eaed]">OP Tactical</td>
                <td className="px-4 py-3 text-[#a8b2bc]">$140</td>
                <td className="px-4 py-3 text-right">
                  <a href="https://www.optactical.com/product/haley-strategic-d3crm-micro-chest-rig/" target="_blank" rel="noopener noreferrer" className="text-[#a8b2bc] hover:text-[#e8eaed] text-sm">
                    Visit →
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[#e8eaed]">DS Tactical</td>
                <td className="px-4 py-3 text-[#a8b2bc]">$140</td>
                <td className="px-4 py-3 text-right">
                  <a href="https://dstactical.com/haley-strategic-d3crm-micro-chest-rig/" target="_blank" rel="noopener noreferrer" className="text-[#a8b2bc] hover:text-[#e8eaed] text-sm">
                    Visit →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#555a61] mt-2">Prices last verified: February 2026</p>
        
        <div className="mt-4 p-4 bg-[rgba(139,157,170,0.05)] border border-[#2a2d31] rounded-lg">
          <p className="text-[#a8b2bc] text-sm">Want to know when this drops below $140? <span className="text-[#e8eaed] font-semibold">Track this placard →</span></p>
        </div>
      </div>

      {/* Alternatives */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">Alternatives to Consider</h2>
        <div className="space-y-4">
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#e8eaed] font-semibold">Spiritus Systems Micro Fight Mk4</p>
                <p className="text-[#8b939c] text-sm mt-1">If you want maximum modularity in the front pouch — can run as admin, extra mags, or utility.</p>
              </div>
              <span className="text-[#a8b2bc]">~$85</span>
            </div>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#e8eaed] font-semibold">Ferro Concepts KTAR Front Flap</p>
                <p className="text-[#8b939c] text-sm mt-1">If you only need a placard (not standalone use) and want AK/7.62 compatibility built-in.</p>
              </div>
              <span className="text-[#a8b2bc]">~$70</span>
            </div>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#e8eaed] font-semibold">Esstac Daeodon Front Panel</p>
                <p className="text-[#8b939c] text-sm mt-1">If you want Kywi mag retention and a simpler, less expensive placard solution.</p>
              </div>
              <span className="text-[#a8b2bc]">~$90</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <h2 className="font-rajdhani font-bold text-2xl text-[#c8cfd7] mb-4">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <p className="text-[#e8eaed] font-semibold">Does the D3CRM come with magazine inserts?</p>
            <p className="text-[#8b939c] text-sm mt-2">No. The $140 price is for the placard only. Magazine inserts ($15–35), harnesses ($50), and chest rig pads ($7.50) are all sold separately.</p>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <p className="text-[#e8eaed] font-semibold">Will it fit my JPC 2.0?</p>
            <p className="text-[#8b939c] text-sm mt-2">Yes, but you'll need an adapter like the AXL Advanced Adaptive Vest Placard (AVP) or female SwiftClip buckles woven into the MOLLE. The JPC 2.0 doesn't have native SwiftClip attachment points.</p>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <p className="text-[#e8eaed] font-semibold">What's the difference between X-Harness and H-Harness?</p>
            <p className="text-[#8b939c] text-sm mt-2">The X-Harness crosses at the back and offers quick don/doff via slip loops. The H-Harness sits across the neckline and distributes weight better for heavier loads or users with broader shoulders.</p>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <p className="text-[#e8eaed] font-semibold">Can I use Spiritus inserts in the D3CRM?</p>
            <p className="text-[#8b939c] text-sm mt-2">Community reports suggest the Spiritus 5.56 insert fits, but this isn't officially supported. The velcro interface is similar, but dimensions may vary slightly.</p>
          </div>
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-4">
            <p className="text-[#e8eaed] font-semibold">Is it really low-profile enough to conceal?</p>
            <p className="text-[#8b939c] text-sm mt-2">Yes, when loaded and worn with a harness, the D3CRM can be concealed under a loose-fitting jacket or hoodie without obvious printing. This is one of its primary design goals.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="border-t border-[#1e2124] pt-8">
          <div className="bg-[rgba(139,157,170,0.05)] border border-[#2a2d31] rounded-lg p-4 mb-6">
            <p className="text-[#8b939c] text-sm">
              <strong className="text-[#a8b2bc]">Affiliate Disclosure:</strong> TacVault earns a commission from purchases made through links on this page. This doesn't affect our recommendations—we recommend what we'd actually buy. Inclusion does not imply endorsement or affiliation with the manufacturer.
            </p>
          </div>
          <p className="text-xs text-[#555a61]">
            Specs verified against manufacturer website on February 2026. Compatibility data compiled from manufacturer documentation, community testing, and verified user reports.
          </p>
        </div>
      </div>
    </main>
  );
}
