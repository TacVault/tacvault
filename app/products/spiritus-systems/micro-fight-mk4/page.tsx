'use client';

import Link from 'next/link';

export default function MicroFightMk4Page() {
  return (
    <main className="min-h-screen bg-[#08090a] text-gray-100">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <span className="mx-2">/</span>
          <Link href="/products/spiritus-systems" className="hover:text-gray-300">Spiritus Systems</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Micro Fight Mk4</span>
        </nav>
      </div>

      {/* Product Header */}
      <header className="max-w-4xl mx-auto px-4 py-8 border-b border-gray-800">
        <p className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-2">Spiritus Systems</p>
        <h1 className="text-4xl font-bold text-white mb-2">Micro Fight Chassis Mk4</h1>
        <p className="text-3xl text-amber-500 font-bold mb-4">$75.95</p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <span className="text-gray-500">Dimensions:</span> 9" x 5" x 2.5"
          </span>
          <span className="text-gray-600">|</span>
          <span className="flex items-center gap-1">
            <span className="text-gray-500">Material:</span> 500D Cordura
          </span>
          <span className="text-gray-600">|</span>
          <span className="flex items-center gap-1">
            <span className="text-gray-500">Made In:</span> USA
          </span>
          <span className="text-gray-600">|</span>
          <span className="flex items-center gap-1">
            <span className="text-gray-500">Config:</span> Chassis Only
          </span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Quick Answer Bar */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wide">Buy this if:</span>
              <p className="text-gray-300 mt-1">You want a modular placard with unmatched customization options and third-party ecosystem support.</p>
            </div>
            <div>
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">Skip this if:</span>
              <p className="text-gray-300 mt-1">You want an all-in-one solution without buying multiple accessories to complete your setup.</p>
            </div>
          </div>
        </div>

        {/* Quick Verdict */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Quick Verdict</h2>
          <p className="text-gray-300 leading-relaxed">
            The Micro Fight Mk4 is the modular placard that started a revolution. At $75.95 for the chassis alone, it's not the cheapest option - but the ability to completely customize your loadout with inserts, flaps, and the largest third-party accessory ecosystem in the industry makes it the most versatile choice for users who want a system they can reconfigure as needs change. If you value flexibility over convenience, this is the benchmark everything else is compared to.
          </p>
        </section>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Spiritus Systems Micro Fight Chassis Mk4 is a two-pocket placard designed as the central hub of a modular chest rig system. Founded in 2013 by 82nd Airborne veterans, Spiritus built the Micro Fight around a simple concept: use velcro as the primary attachment method to enable unlimited configuration options. The Mk4 iterates on the proven Mk3 design with improved rear velcro coverage and integrated tourniquet grommets for the Universal Retention Kit.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Where competitors like the D3CRM come as complete packages, the Micro Fight takes the opposite approach - the chassis itself holds nothing without adding inserts. This "buy what you need" philosophy appeals to users who want total control over their loadout, though it means higher total cost for a complete setup. The tradeoff is genuine modularity: swap between 5.56, 7.62, SMG, or pistol magazine configurations in seconds, or strip it down to a minimalist placard for plate carrier use.
          </p>
        </section>

        {/* Specs */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Specifications</h2>
          <p className="text-xs text-gray-500 mb-3">Specs verified against manufacturer website</p>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500 w-1/3">Dimensions</td>
                  <td className="px-4 py-3 text-gray-200">9" (L) x 5" (H) x 2.5" (W)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Material</td>
                  <td className="px-4 py-3 text-gray-200">500D Cordura</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Rear Hook Field</td>
                  <td className="px-4 py-3 text-gray-200">5" x 9" (full coverage)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Front Loop Field</td>
                  <td className="px-4 py-3 text-gray-200">8" x 4" (for patches/ID)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Pocket Configuration</td>
                  <td className="px-4 py-3 text-gray-200">Two tiered pockets with soft loop interiors</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Drainage Grommets</td>
                  <td className="px-4 py-3 text-gray-200">3 (1 rear pocket, 2 front pocket)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">TQ Grommets</td>
                  <td className="px-4 py-3 text-gray-200">2 (compatible with Universal Retention Kit)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Buckles</td>
                  <td className="px-4 py-3 text-gray-200">2 fixed (top), 2 removable (sides)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Colors</td>
                  <td className="px-4 py-3 text-gray-200">MultiCam, M81 Woodland, Ranger Green, Coyote, Black, Wolf Grey, MultiCam Black, MultiCam Tropic, MultiCam Arid</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-3 text-gray-500">Made In</td>
                  <td className="px-4 py-3 text-gray-200">USA</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500">MSRP</td>
                  <td className="px-4 py-3 text-gray-200">$75.95</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-5">
              <h3 className="text-emerald-500 font-bold text-sm uppercase tracking-wide mb-4">Pros</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Unmatched modularity - swap magazine configurations in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Largest third-party accessory ecosystem (AXL, Microbat, Wild Bill, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Full rear velcro coverage for solid plate carrier integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Works as standalone chest rig OR placard on carrier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Two-pocket design separates rifle mags from admin/pistol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Integrated TQ grommets for Universal Retention Kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">&#10003;</span>
                  <span className="text-gray-300">Elastic inserts are quiet during mag removal/insertion</span>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-5">
              <h3 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-4">Cons</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Chassis alone holds nothing - must buy inserts separately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Complete setup costs $130-175 vs $140 all-in-one competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Fat Strap has no ride height adjustment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Popular colors frequently out of stock</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">No built-in GP pouch (front pocket only works with flaps)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Known Issues */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Known Issues</h2>
          <div className="space-y-3">
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
              <p className="text-amber-500 font-semibold text-sm mb-1">&#9888; Elastic inserts loosen with use.</p>
              <p className="text-gray-400 text-sm">By design, elastic will loosen over time but still provides adequate retention. Store with magazines inserted to maintain tension. Inserts are replaceable.</p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
              <p className="text-amber-500 font-semibold text-sm mb-1">&#9888; Fat Strap ride height not adjustable.</p>
              <p className="text-gray-400 text-sm">Taller/thinner users report the chassis hangs low when H-harness is positioned correctly between shoulders. Consider third-party straps from Unobtanium or similar if ride height is critical.</p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
              <p className="text-amber-500 font-semibold text-sm mb-1">&#9888; Gen 3 PMAGs tight fit during insert installation.</p>
              <p className="text-gray-400 text-sm">User tip: Cover velcro with cardboard pieces when sliding inserts into pocket to prevent snagging. Once installed, operation is smooth.</p>
            </div>
          </div>
        </section>

        {/* What You'll Need */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">What You'll Need to Run It</h2>
          
          <div className="mb-4">
            <h3 className="text-emerald-500 font-semibold text-sm uppercase tracking-wide mb-2">Required</h3>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Magazine Insert (Triple 5.56 or Double 7.62)</span>
                  <span className="text-gray-500">$24.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">For Chest Rig Use (No Plate Carrier)</h3>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Fat Strap Mk4 (H-harness)</span>
                  <span className="text-gray-500">$49.95</span>
                </li>
                <li className="flex justify-between">
                  <span>Back Strap</span>
                  <span className="text-gray-500">$14.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wide mb-2">Optional but Recommended</h3>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Half Flap Mk2 (mag retention, minimal)</span>
                  <span className="text-gray-500">$19.95</span>
                </li>
                <li className="flex justify-between">
                  <span>Full Flap Mk2 (mag retention + admin)</span>
                  <span className="text-gray-500">$33.95</span>
                </li>
                <li className="flex justify-between">
                  <span>SACK Pouch (dangler for IFAK/GP)</span>
                  <span className="text-gray-500">$49.95</span>
                </li>
                <li className="flex justify-between">
                  <span>Universal Retention Kit (TQ mount)</span>
                  <span className="text-gray-500">$9.95</span>
                </li>
                <li className="flex justify-between">
                  <span>Expander Wings (side pouches)</span>
                  <span className="text-gray-500">$44.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-gray-900/50 border border-gray-700 rounded-lg p-4">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">Typical Complete Setup:</span> Chassis ($75.95) + Triple 5.56 Insert ($24.95) + Full Flap ($33.95) + Fat Strap ($49.95) + Back Strap ($14.95) = <span className="text-amber-500 font-bold">$199.75</span>
            </p>
          </div>
        </section>

        {/* Compatibility Chart */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-1">Compatibility Chart</h2>
          <p className="text-xs text-gray-500 mb-4">Compatibility data last verified: February 2026</p>

          {/* Plate Carrier Compatibility */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Plate Carrier Compatibility</h3>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-900/50">
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Plate Carrier</th>
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Status</th>
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Spiritus LV-119</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">Native integration, designed for each other</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Crye Precision JPC 2.0</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Standard velcro placard interface</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Ferro Concepts Slickster</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Works with standard front flap</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Ferro Concepts FCPC v5</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Standard velcro placard interface</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Defense Mechanisms MEPC</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Standard velcro placard interface</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">T.REX Arms AC1</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Standard velcro placard interface</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Velocity Systems Scarab LT</td>
                    <td className="px-4 py-3"><span className="text-amber-500">~ Likely</span></td>
                    <td className="px-4 py-3 text-gray-400">Standard velcro interface dimensions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-200">Shaw Concepts ARC v2</td>
                    <td className="px-4 py-3"><span className="text-amber-500">~ Likely</span></td>
                    <td className="px-4 py-3 text-gray-400">Standard placard-compatible front</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Spiritus Accessories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Spiritus Systems Accessories</h3>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-900/50">
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Accessory</th>
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Status</th>
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Triple 5.56 Rifle Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$24.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Double 7.62 Rifle Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$24.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Single Rifle Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$19.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Quad SMG Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$24.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Double Pistol Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$19.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Single Pistol Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$14.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Full Flap Mk2</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$33.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Half Flap Mk2</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$19.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Fat Strap Mk4</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$49.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Back Strap</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$14.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">SACK Pouch Mk3</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$49.95</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Expander Wings Mk2</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$44.95</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-200">Thing 2 Chassis</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Official</span></td>
                    <td className="px-4 py-3 text-gray-400">$54.95</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Third Party Accessories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Third-Party Accessories</h3>
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-900/50">
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Accessory</th>
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Status</th>
                    <th className="px-4 py-3 text-left text-gray-400 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">AXL Hi-Top Zipper Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Popular GP pouch alternative to flaps</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">AXL Half Zipper Insert</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Slimmer zippered admin option</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">AXL SLAP (for danglers)</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Mounts Crye GP pouches as danglers</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Ferro Mini Dangler</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Excellent form factor match</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 text-gray-200">Beez Combat Sidewings</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Alternative to Spiritus Expander Wings</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-200">GMR Kydex Inserts</td>
                    <td className="px-4 py-3"><span className="text-emerald-500">&#10003; Verified</span></td>
                    <td className="px-4 py-3 text-gray-400">Rigid alternative to elastic inserts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Confidence Legend */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-400">
              <span className="text-emerald-500">&#10003; Official</span> = Manufacturer confirmed | 
              <span className="text-emerald-500 ml-2">&#10003; Verified</span> = Community confirmed (3+ sources) | 
              <span className="text-amber-500 ml-2">~ Likely</span> = Should work based on specs
            </p>
          </div>
        </section>

        {/* Best For / Who Should Not Buy */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Best For</h3>
              <p className="text-gray-300">
                Users who want maximum configurability and plan to adapt their loadout over time. If you run multiple weapon platforms, want to swap between 5.56/7.62/SMG configurations, or value the extensive third-party ecosystem from AXL, Beez Combat, and others, the Micro Fight is the most flexible platform available. Also ideal for users who already own a Spiritus LV-119 or plan to.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Who Should NOT Buy This</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Want all-in-one solution - get the <span className="text-amber-500">D3CRM Micro</span> instead</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Need built-in GP pouch - consider <span className="text-amber-500">D3CRM</span> or <span className="text-amber-500">Micro Fight MkV + CCS Pouch</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Budget under $100 for complete setup - total cost runs $130-200</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10007;</span>
                  <span className="text-gray-300">Prefer MOLLE attachment - the Mk4 is velcro-based</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Variants & Options */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Variants & Options</h2>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wide mb-3">Available Colors</h3>
            <div className="flex flex-wrap gap-2">
              {['MultiCam', 'M81 Woodland', 'Ranger Green', 'Coyote Brown', 'Black', 'Wolf Grey', 'MultiCam Black', 'MultiCam Tropic', 'MultiCam Arid'].map((color) => (
                <span key={color} className="px-3 py-1 bg-gray-800 rounded text-sm text-gray-300">{color}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">Note: Popular colors (MultiCam, Ranger Green) frequently sell out. Check multiple retailers or sign up for restock alerts.</p>
          </div>
        </section>

        {/* Current Prices */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Where to Buy</h2>
          <p className="text-xs text-gray-500 mb-3">Prices last verified: February 2026</p>
          <div className="space-y-2">
            <a href="https://www.spiritussystems.com/micro-fight-chassis-mk4/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <span className="text-gray-200">Spiritus Systems (Direct)</span>
              <span className="text-amber-500 font-bold">$75.95</span>
            </a>
            <a href="https://skdtac.com/spiritus-systems-micro-fight-chassis-mk4/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <span className="text-gray-200">SKD Tactical</span>
              <span className="text-amber-500 font-bold">$75.95</span>
            </a>
            <a href="https://www.tacticaldistributors.com/products/spiritus-systems-micro-fight-chassis-mk4" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <span className="text-gray-200">Tactical Distributors</span>
              <span className="text-amber-500 font-bold">$75.95</span>
            </a>
            <a href="https://www.optactical.com/spsymifichmk.html" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <span className="text-gray-200">OP Tactical</span>
              <span className="text-amber-500 font-bold">$75.95</span>
            </a>
          </div>
          <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-amber-500 text-sm font-medium">Want to know when this drops below $75? Track this placard &#8594;</p>
          </div>
        </section>

        {/* Alternatives */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Alternatives to Consider</h2>
          <div className="space-y-3">
            <div className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <Link href="/products/haley-strategic/d3crm" className="text-amber-500 font-semibold hover:underline">Haley Strategic D3CRM Micro</Link>
                  <span className="text-gray-500 ml-2">$140</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-1">If you want an all-in-one placard with built-in GP pouch and included inserts. Less modular but ready to run out of the box.</p>
            </div>
            <div className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-gray-200 font-semibold">Spiritus Micro Fight MkV</span>
                  <span className="text-gray-500 ml-2">$61.95</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-1">If you want MOLLE on the front and a slimmer single-cell design. Pairs with CCS Pouch for GP storage. Newer design but less ecosystem support.</p>
            </div>
            <div className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-gray-200 font-semibold">Esstac Daeodon 5.56</span>
                  <span className="text-gray-500 ml-2">~$70</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-1">If you want Kydex retention included. Fixed configuration (3x 5.56) but excellent retention without aftermarket inserts.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-4">
              <h3 className="text-white font-semibold mb-2">Can I use the Mk4 without buying any accessories?</h3>
              <p className="text-gray-400 text-sm">No. The chassis alone has empty pockets - you need at least one magazine insert ($24.95) to hold anything. For chest rig use without a plate carrier, you also need the Fat Strap and Back Strap.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="text-white font-semibold mb-2">What's the difference between Mk4 and MkV?</h3>
              <p className="text-gray-400 text-sm">The Mk4 has two tiered pockets (front and rear), a large front loop panel for patches, and relies on inserts + flaps for organization. The MkV is a single-cell design with MOLLE on the front, designed to pair with the CCS Pouch for GP storage. Both have the same footprint and work with the same straps/carriers.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="text-white font-semibold mb-2">Will it fit on my plate carrier?</h3>
              <p className="text-gray-400 text-sm">If your carrier has a front velcro placard interface (most modern carriers do), yes. The 5" x 9" hook field on the back provides excellent attachment. Remove the side buckles when using as a placard.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="text-white font-semibold mb-2">How many magazines can it hold?</h3>
              <p className="text-gray-400 text-sm">With inserts in both pockets: 6x 5.56 magazines OR 4x 7.62 magazines. You can also mix configurations (rifle in rear, pistol in front, etc.).</p>
            </div>
            <div className="pb-4">
              <h3 className="text-white font-semibold mb-2">Is the D3CRM better than the Micro Fight?</h3>
              <p className="text-gray-400 text-sm">Different tools for different needs. The D3CRM is better if you want a ready-to-run all-in-one solution with built-in GP pouch. The Micro Fight is better if you want maximum configurability, plan to swap configurations, or want access to the extensive third-party accessory ecosystem.</p>
            </div>
          </div>
        </section>

        {/* Footer Disclosure */}
        <section className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-400">Affiliate Disclosure:</strong> TacVault earns a commission from purchases made through links on this page. This doesn't affect our recommendations - we recommend what we'd actually buy. Inclusion does not imply endorsement or affiliation with the manufacturer.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Specs verified against manufacturer website on February 2026. Compatibility data compiled from manufacturer documentation, community testing, and verified user reports.
          </p>
        </section>

      </div>
    </main>
  );
}
