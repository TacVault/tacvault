import Link from 'next/link'

export const metadata = {
  title: 'Best Red Dots Under $300 (2026) — TacVault',
  description: '7 optics tested with verified specs from manufacturer websites. Holosun 507C, Sig Romeo5, Vortex SPARC AR, and more. No sponsored rankings.',
}

export default function BestRedDotsPage() {
  return (
    <div className="max-w-container mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="mb-6">
        <div className="section-label">Optics Guide</div>
        <h1 className="font-tactical font-bold text-4xl md:text-5xl text-text-primary mb-4">
          Best Red Dots Under $300
        </h1>
        <p className="text-text-muted text-sm mb-4">
          Last Updated: February 3, 2026 • 7 products compared • Specs verified against manufacturer websites
        </p>
        <p className="text-text-secondary text-sm italic">
          We use real-world street prices, not MSRP. Pricing fluctuates by retailer, color, and availability — but all optics here typically sell around or below $300.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="quick-answer">
        <p>
          <strong className="text-text-primary">Quick answer:</strong> For rifles, the <Link href="#sig-romeo5" className="text-silver hover:text-chrome">Sig Romeo5</Link> ($100–130) is the best value — proven reliability, shake awake, and 40,000-hour battery life for the price of a nice dinner. For pistols, the <Link href="#holosun-507c" className="text-silver hover:text-chrome">Holosun 507C X2</Link> ($299–350) is worth every penny for the multi-reticle system and solar backup.
        </p>
      </div>

      {/* Intro */}
      <div className="guide-intro">
        <p>
          You don't need to spend $600 on an Aimpoint or Trijicon to get a reliable red dot. The sub-$300 market has gotten absurdly good — but it's also full of marketing nonsense, inflated battery claims, and specs that don't match reality.
        </p>
        <p>
          <strong className="text-text-primary">This guide exists to stop you from wasting money.</strong> We verified every spec against official manufacturer websites, noted where retailers get it wrong, and tell you exactly who should — and shouldn't — buy each optic.
        </p>
      </div>

      {/* Why These 7 */}
      <div className="specs-box mb-8">
        <div className="specs-label">Why These 7?</div>
        <p className="text-text-secondary text-sm leading-relaxed">
          We excluded optics that failed documented durability tests, lack modern auto-on features, use proprietary footprints with limited holster/mount support, or have consistent QC complaints across multiple sources. This isn't a list of everything available — it's a list of what's worth buying.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mt-3">
          <strong className="text-text-primary">If an optic isn't listed here, it's because it failed one of those criteria — not because we didn't know about it.</strong>
        </p>
      </div>

      {/* Quick Picks - Pistol */}
      <div className="specs-box mb-4">
        <div className="specs-label">Quick Picks — Pistol Red Dots</div>
        <div className="overflow-x-auto">
          <table className="quick-picks-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Badge</th>
                <th>Price</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link href="#holosun-507c" className="text-silver hover:text-chrome">Holosun 507C X2</Link></td>
                <td><span className="badge badge-best">Best Overall</span></td>
                <td className="text-text-primary">$299–350</td>
                <td>Serious CCW / duty pistol</td>
              </tr>
              <tr>
                <td><Link href="#holosun-407c" className="text-silver hover:text-chrome">Holosun 407C X2</Link></td>
                <td><span className="badge">Best Value</span></td>
                <td className="text-text-primary">$220–280</td>
                <td>Experienced shooters who want simple dot</td>
              </tr>
              <tr>
                <td><Link href="#swampfox-kingslayer" className="text-silver hover:text-chrome">Swampfox Kingslayer</Link></td>
                <td><span className="badge">Best Entry-Level</span></td>
                <td className="text-text-primary">$150–180</td>
                <td>Trying pistol red dots for the first time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Picks - Rifle */}
      <div className="specs-box mb-8">
        <div className="specs-label">Quick Picks — Rifle Red Dots</div>
        <div className="overflow-x-auto">
          <table className="quick-picks-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Badge</th>
                <th>Price</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link href="#sig-romeo5" className="text-silver hover:text-chrome">Sig Romeo5</Link></td>
                <td><span className="badge badge-best">Best Overall</span></td>
                <td className="text-text-primary">$100–130</td>
                <td>First AR / budget builds</td>
              </tr>
              <tr>
                <td><Link href="#sig-romeo5-gen2" className="text-silver hover:text-chrome">Sig Romeo5 Gen II</Link></td>
                <td><span className="badge">Best Upgrade</span></td>
                <td className="text-text-primary">$140–170</td>
                <td>Precision-focused builds</td>
              </tr>
              <tr>
                <td><Link href="#vortex-sparc-ar" className="text-silver hover:text-chrome">Vortex SPARC AR</Link></td>
                <td><span className="badge">Best Warranty</span></td>
                <td className="text-text-primary">$150–200</td>
                <td>Warranty-conscious buyers</td>
              </tr>
              <tr>
                <td><Link href="#bushnell-trs25" className="text-silver hover:text-chrome">Bushnell TRS-25</Link></td>
                <td><span className="badge">Best Ultra-Budget</span></td>
                <td className="text-text-primary">$50–80</td>
                <td>Plinkers / .22 builds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Condensed Comparison Table */}
      <div className="specs-box mb-8">
        <div className="specs-label">At a Glance</div>
        <div className="overflow-x-auto">
          <table className="comparison-table text-sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Battery</th>
                <th>Shake Awake</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-silver">507C X2</td>
                <td>Pistol</td>
                <td>1.5 oz</td>
                <td>50,000 hrs</td>
                <td className="text-status-green">✓</td>
                <td>$299–350</td>
              </tr>
              <tr>
                <td className="text-silver">407C X2</td>
                <td>Pistol</td>
                <td>1.5 oz</td>
                <td>50,000 hrs</td>
                <td className="text-status-green">✓</td>
                <td>$220–280</td>
              </tr>
              <tr>
                <td className="text-silver">Kingslayer</td>
                <td>Pistol</td>
                <td>1.0–1.3 oz</td>
                <td>1,500 hrs</td>
                <td className="text-status-red">✗</td>
                <td>$150–180</td>
              </tr>
              <tr>
                <td className="text-silver">Romeo5</td>
                <td>Rifle</td>
                <td>5.1 oz</td>
                <td>40,000 hrs</td>
                <td className="text-status-green">✓</td>
                <td>$100–130</td>
              </tr>
              <tr>
                <td className="text-silver">Romeo5 Gen II</td>
                <td>Rifle</td>
                <td>5.5 oz</td>
                <td>40,000 hrs</td>
                <td className="text-status-green">✓</td>
                <td>$140–170</td>
              </tr>
              <tr>
                <td className="text-silver">SPARC AR</td>
                <td>Rifle</td>
                <td>8.6 oz</td>
                <td>50,000 hrs</td>
                <td className="text-status-red">✗</td>
                <td>$150–200</td>
              </tr>
              <tr>
                <td className="text-silver">TRS-25</td>
                <td>Rifle</td>
                <td>4 oz</td>
                <td>5,000 hrs</td>
                <td className="text-status-red">✗</td>
                <td>$50–80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* What to Look For */}
      <div className="specs-box mb-10">
        <div className="specs-label">What to Look For</div>
        <div className="what-to-look-for">
          <div className="criteria-item">
            <strong className="text-text-primary">Reticle Size</strong> — 2 MOA dots are precise for accuracy. 3+ MOA dots are faster to acquire but less precise at distance. Circle-dot reticles help beginners find the dot faster.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Battery Life</strong> — 50,000 hours means 5+ years without changing. Under 5,000 hours needs regular management. Always check manufacturer specs, not retailer listings.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Shake Awake</strong> — Motion-activated on/off. Critical for carry and home defense — without it, your optic may be off when you grab the gun.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Footprint</strong> — Pistols: RMR pattern fits most slide cuts. Rifles: Aimpoint Micro/T2 pattern is standard. Wrong footprint = wrong optic.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Solar Backup</strong> — Runs on ambient light if battery dies. Nice insurance for carry guns. Not essential for range toys.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Side-Loading Battery</strong> — Change battery without removing optic or losing zero. Top-loading batteries require re-zeroing after every change.
          </div>
        </div>
      </div>

      <div className="divider mb-10"><div className="divider-line"></div></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PISTOL RED DOTS SECTION */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="mb-6">
        <h2 className="font-tactical font-bold text-2xl text-text-primary mb-2">Pistol Red Dots</h2>
        <p className="text-text-secondary text-sm">Compact optics designed for slide-mounted carry and duty use.</p>
      </div>

      {/* Compatibility Note - Pistol */}
      <div className="warning-box mb-8">
        <svg className="warning-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <div>
          <div className="warning-title">Compatibility Note</div>
          <div className="warning-text">All pistol optics listed here use the RMR footprint unless otherwise noted. Always confirm your slide cut before ordering — "RMR cut" and "RMR pattern" are the same thing.</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Holosun 507C X2 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="holosun-507c" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge badge-best mb-3">Best Overall Pistol</span>
            <div className="mt-3">
              <span className="product-name">Holosun 507C X2</span>
            </div>
          </div>
          <div className="product-price">$299–350</div>
        </div>

        <p className="product-desc">
          The 507C is commonly recommended in pistol red-dot courses for concealed carry, and for good reason. It's the only sub-$300 pistol optic with the Multi-Reticle System — switch between a 2 MOA dot, 32 MOA circle, or both without losing zero. The circle helps new shooters find the dot faster under stress.
        </p>
        <p className="product-desc">
          Solar Failsafe means even if your battery dies, the optic keeps working from ambient light. Shake Awake means it's always ready when you draw but not draining battery in your safe. Lock Mode prevents accidental brightness changes. At 1.5 oz and IP67 waterproof, this is as close to "buy once, never think about it again" as pistol optics get under $300.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">1.5 oz</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">2 MOA dot / 32 MOA circle (switchable)</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">CR1632 (side-loading)</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">50,000 hours (setting 6)</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">IP67</span></div>
          <div className="spec-row"><span className="spec-label">Footprint</span><span className="spec-value">RMR pattern</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">China</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">Limited Lifetime</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Multi-Reticle System — 32 MOA circle helps acquire the dot fast</li>
              <li><span className="icon-pro">✓</span> Solar Failsafe — backup power from ambient light</li>
              <li><span className="icon-pro">✓</span> Shake Awake — motion-activated on/off</li>
              <li><span className="icon-pro">✓</span> Lock Mode — prevents accidental brightness changes</li>
              <li><span className="icon-pro">✓</span> Side-loading battery — no re-zero to change battery</li>
              <li><span className="icon-pro">✓</span> IP67 waterproof + 5000G impact rating</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Premium price for this category</li>
              <li><span className="icon-con">✗</span> Made in China (if that matters to you)</li>
              <li><span className="icon-con">✗</span> Circle reticle can be distracting for some shooters</li>
              <li><span className="icon-con">✗</span> New X3 version coming — X2 prices may drop</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Home defense pistols, concealed carry, duty use. Anyone who wants the most features without spending Trijicon money.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Shooters who only want a simple dot (get the 407C instead, save $80)</li>
            <li><span className="icon-con">✗</span> Competitors under USPSA CO rules who need a larger window</li>
            <li><span className="icon-con">✗</span> Anyone on a strict budget under $250</li>
            <li><span className="icon-con">✗</span> Rifle / shotgun use (get a Romeo5 instead)</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Primary Arms</span>
            <a href="https://www.primaryarms.com/holosun-hs507c-x2-pistol-red-dot-sight-2-moa" target="_blank" rel="noopener noreferrer" className="price-btn">
              $299–320
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Holosun 407C X2 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="holosun-407c" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Value Pistol</span>
            <div className="mt-3">
              <span className="product-name">Holosun 407C X2</span>
            </div>
          </div>
          <div className="product-price">$220–280</div>
        </div>

        <p className="product-desc">
          The 407C is identical to the 507C except for one thing: no circle reticle. That's it. Same Solar Failsafe, same Shake Awake, same Lock Mode, same IP67 waterproofing, same 50,000-hour battery life.
        </p>
        <p className="product-desc">
          If you've used red dots before and just want a clean 2 MOA dot without the circle option, the 407C saves you $60–80 for the exact same build quality. This is the smart money pick for experienced shooters.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">1.5 oz</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">2 MOA dot only</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">CR1632 (side-loading)</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">50,000 hours (setting 6)</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">IP67</span></div>
          <div className="spec-row"><span className="spec-label">Footprint</span><span className="spec-value">RMR pattern</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">China</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">Limited Lifetime</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Same quality as 507C, $60–80 less</li>
              <li><span className="icon-pro">✓</span> Solar Failsafe — backup power from ambient light</li>
              <li><span className="icon-pro">✓</span> Shake Awake — motion-activated on/off</li>
              <li><span className="icon-pro">✓</span> Lock Mode — prevents accidental brightness changes</li>
              <li><span className="icon-pro">✓</span> Clean 2 MOA dot without distractions</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> No circle reticle option</li>
              <li><span className="icon-con">✗</span> Made in China</li>
              <li><span className="icon-con">✗</span> Circle reticle genuinely helps beginners find the dot</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Experienced red dot shooters who know they only want a simple dot. Budget-conscious buyers who want Holosun quality without paying for features they won't use.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> New to pistol red dots (the 507C's circle reticle helps you learn)</li>
            <li><span className="icon-con">✗</span> Anyone who thinks "I'll probably want the circle later" — just get the 507C</li>
            <li><span className="icon-con">✗</span> Rifle / shotgun use</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Primary Arms</span>
            <a href="https://www.primaryarms.com/holosun-hs407c-x2-pistol-red-dot-sight-2-moa" target="_blank" rel="noopener noreferrer" className="price-btn">$220–250 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Swampfox Kingslayer */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="swampfox-kingslayer" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Entry-Level Pistol</span>
            <div className="mt-3">
              <span className="product-name">Swampfox Kingslayer</span>
            </div>
          </div>
          <div className="product-price">$150–180</div>
        </div>

        <p className="product-desc">
          The Kingslayer is how you try pistol red dots without committing $300. At half the price of a Holosun, you get an RMR-footprint optic that fits most slide cuts, a 3 MOA dot (or optional circle-dot), and an 800G impact rating.
        </p>
        <p className="product-desc">
          The trade-offs are real: 1,500-hour battery life vs. Holosun's 50,000, and a 4-hour auto-shutoff that some shooters hate. No shake awake means you're either manually managing the optic or accepting it'll shut off. But for a range gun or a "see if I like pistol dots" trial, it's hard to beat the value.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">1.0–1.3 oz</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">3 MOA dot (or circle-dot)</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">CR1632 (side-loading)</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">1,500 hours</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">IPX-7</span></div>
          <div className="spec-row"><span className="spec-label">Auto Shutoff</span><span className="spec-value">4 hours</span></div>
          <div className="spec-row"><span className="spec-label">Impact Rating</span><span className="spec-value">800G</span></div>
          <div className="spec-row"><span className="spec-label">Footprint</span><span className="spec-value">RMR pattern</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">50,000 Round Guarantee</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Half the price of Holosun</li>
              <li><span className="icon-pro">✓</span> RMR footprint — fits most slide cuts</li>
              <li><span className="icon-pro">✓</span> Side-loading battery</li>
              <li><span className="icon-pro">✓</span> 50,000 round guarantee</li>
              <li><span className="icon-pro">✓</span> Circle-dot reticle option available</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Only 1,500 hour battery life</li>
              <li><span className="icon-con">✗</span> 4-hour auto-shutoff — will be off when you grab it</li>
              <li><span className="icon-con">✗</span> No shake awake</li>
              <li><span className="icon-con">✗</span> 3 MOA dot is larger than Holosun's 2 MOA</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Range guns, trying pistol red dots before committing to Holosun, backup optics, guns that live in the safe.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Concealed carry (no shake awake + 4hr shutoff = bad combo)</li>
            <li><span className="icon-con">✗</span> Home defense (will likely be off when you need it)</li>
            <li><span className="icon-con">✗</span> Anyone who hates managing batteries</li>
            <li><span className="icon-con">✗</span> Shooters who want a 2 MOA dot</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Swampfox Direct</span>
            <a href="https://www.swampfoxoptics.com/kingslayer" target="_blank" rel="noopener noreferrer" className="price-btn">$179–219 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      <div className="divider my-10"><div className="divider-line"></div></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* RIFLE RED DOTS SECTION */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="mb-6">
        <h2 className="font-tactical font-bold text-2xl text-text-primary mb-2">Rifle Red Dots</h2>
        <p className="text-text-secondary text-sm">Full-size optics for AR-15s, shotguns, and other long guns.</p>
      </div>

      {/* Compatibility Note - Rifle */}
      <div className="warning-box mb-8">
        <svg className="warning-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <div>
          <div className="warning-title">Compatibility Note</div>
          <div className="warning-text">All rifle optics listed here use standard Picatinny mounts. The Romeo5 and SPARC AR use Aimpoint Micro-pattern mounts for aftermarket options like Scalarworks or Unity.</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Sig Romeo5 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="sig-romeo5" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge badge-best mb-3">Best Overall Rifle</span>
            <div className="mt-3">
              <span className="product-name">Sig Sauer Romeo5</span>
            </div>
          </div>
          <div className="product-price">$100–130</div>
        </div>

        <p className="product-desc">
          The Romeo5 is the default recommendation for anyone's first AR-15 red dot, and it's not even close. At $100–130 street price, you get MOTAC (Sig's shake awake), 40,000+ hour battery life, 2 NV-compatible brightness settings, and two mounts in the box (high for AR-15 co-witness, low for shotguns).
        </p>
        <p className="product-desc">
          Sig's "Infinite Guarantee" warranty has been solid in practice. The glass is clear, the dot is crisp, and at 5.1 oz it's lighter than most competitors. This is the optic that killed the "you need to spend $400+" argument for casual shooters.
        </p>

        {/* Warning Box */}
        <div className="warning-box">
          <svg className="warning-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <div>
            <div className="warning-title">Counterfeit Warning</div>
            <div className="warning-text">Fake Romeo5s are everywhere on Amazon and eBay. Buy ONLY from authorized Sig dealers: Palmetto State Armory, Primary Arms, Brownells, or direct from Sig.</div>
          </div>
        </div>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">5.1 oz</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">2 MOA red dot</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">CR2032 (side-loading)</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">40,000+ hours</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">IPX-7 (1m submersion)</span></div>
          <div className="spec-row"><span className="spec-label">Illumination</span><span className="spec-value">10 settings (8 daylight, 2 NV)</span></div>
          <div className="spec-row"><span className="spec-label">Footprint</span><span className="spec-value">Aimpoint T2 pattern</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">China</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">Infinite Guarantee (Limited Lifetime)</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Unbeatable value at $100–130</li>
              <li><span className="icon-pro">✓</span> MOTAC shake awake — always ready, preserves battery</li>
              <li><span className="icon-pro">✓</span> Includes two mounts (high and low)</li>
              <li><span className="icon-pro">✓</span> Side-loading battery — no re-zero to swap</li>
              <li><span className="icon-pro">✓</span> 40,000+ hour battery life</li>
              <li><span className="icon-pro">✓</span> Aimpoint T2 footprint — fits aftermarket mounts</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Counterfeits are rampant — buy only from authorized dealers</li>
              <li><span className="icon-con">✗</span> Not for pistol use (too large, wrong footprint)</li>
              <li><span className="icon-con">✗</span> No solar backup</li>
              <li><span className="icon-con">✗</span> Chinese manufacturing</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">First AR-15 builds, budget rifles, home defense carbines, shotguns with pic rails. Anyone who wants proven reliability without Aimpoint prices.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Pistol shooters (wrong size, wrong footprint)</li>
            <li><span className="icon-con">✗</span> Buying from Amazon marketplace sellers (counterfeits everywhere)</li>
            <li><span className="icon-con">✗</span> Anyone who needs sub-MOA click adjustments (get Gen II)</li>
            <li><span className="icon-con">✗</span> Hard-use / professional duty (consider Aimpoint or EXPS)</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Palmetto State Armory</span>
            <a href="https://palmettostatearmory.com/sig-sauer-romeo5-1x20mm-red-dot-sight-black-r52001.html" target="_blank" rel="noopener noreferrer" className="price-btn">$99–129 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Sig Romeo5 Gen II */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="sig-romeo5-gen2" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Upgrade Pick</span>
            <div className="mt-3">
              <span className="product-name">Sig Sauer Romeo5 Gen II</span>
            </div>
          </div>
          <div className="product-price">$140–170</div>
        </div>

        <p className="product-desc">
          The Gen II is the Romeo5 with finer turrets. Instead of 1 MOA per click, you get 0.5 MOA adjustments — twice the precision for zeroing. Everything else carries over: MOTAC, 40,000 hour battery, two mounts, IPX-7 waterproofing.
        </p>
        <p className="product-desc">
          At $40–50 more than the original, it's worth it if you're zeroing for specific loads or shooting beyond 100 yards regularly. For most casual AR owners, the original Romeo5 is plenty.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">5.5 oz</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">2 MOA red dot</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">CR2032 (side-loading)</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">40,000 hours</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">IPX-7</span></div>
          <div className="spec-row"><span className="spec-label">Adjustment</span><span className="spec-value">0.5 MOA per click</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">China</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">Infinite Guarantee</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> 0.5 MOA click adjustments (twice as precise)</li>
              <li><span className="icon-pro">✓</span> MOTAC shake awake</li>
              <li><span className="icon-pro">✓</span> Same proven reliability as original</li>
              <li><span className="icon-pro">✓</span> Side-loading battery</li>
              <li><span className="icon-pro">✓</span> Includes two mounts</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> $40–50 more than original Romeo5</li>
              <li><span className="icon-con">✗</span> Slightly heavier (5.5 oz vs 5.1 oz)</li>
              <li><span className="icon-con">✗</span> Overkill for most casual shooters</li>
              <li><span className="icon-con">✗</span> Same counterfeit risk as original</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Shooters who zero precisely for specific ammo, anyone shooting past 100 yards regularly, people who found the original's 1 MOA clicks too coarse.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Casual plinkers (original Romeo5 is fine)</li>
            <li><span className="icon-con">✗</span> Budget-conscious buyers who don't care about 0.5 MOA clicks</li>
            <li><span className="icon-con">✗</span> Pistol use</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Palmetto State Armory</span>
            <a href="https://palmettostatearmory.com/sig-sauer-romeo-5-gen-ii-red-dot-black-sor5101.html" target="_blank" rel="noopener noreferrer" className="price-btn">$140–160 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Vortex SPARC AR */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="vortex-sparc-ar" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Warranty</span>
            <div className="mt-3">
              <span className="product-name">Vortex SPARC AR</span>
            </div>
          </div>
          <div className="product-price">$150–200</div>
        </div>

        <p className="product-desc">
          The SPARC AR's main selling point is Vortex's VIP warranty — unconditional, transferable, no receipt required. Break it, send it back, get a new one. That's it. No questions about how, why, or when.
        </p>
        <p className="product-desc">
          The optic itself is solid but not exceptional. At 8.6 oz it's notably heavier than the Romeo5 (5.1 oz) — don't let retailers tell you it's 7.5 oz, that's wrong. The 12-hour auto-shutoff (no shake awake) means it'll be off if it's been sitting. But if warranty peace of mind matters more than features, this is the pick.
        </p>

        {/* Warning Box */}
        <div className="warning-box">
          <svg className="warning-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <div>
            <div className="warning-title">Weight Note</div>
            <div className="warning-text">Many retailers list this as 7.5 oz. The official Vortex spec is <strong>8.6 oz</strong>. Verify before buying if weight matters to you.</div>
          </div>
        </div>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value font-bold">8.6 oz (not 7.5 oz)</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">2 MOA red dot</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">AAA</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">50,000 hours (lowest setting)</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">Yes (O-ring sealed)</span></div>
          <div className="spec-row"><span className="spec-label">Auto Shutoff</span><span className="spec-value">12 hours</span></div>
          <div className="spec-row"><span className="spec-label">Shake Awake</span><span className="spec-value">No</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">China</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">VIP Lifetime (unconditional)</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> VIP warranty — unconditional, transferable, no receipt needed</li>
              <li><span className="icon-pro">✓</span> AAA battery — available anywhere</li>
              <li><span className="icon-pro">✓</span> 50,000 hour battery life (at minimum brightness)</li>
              <li><span className="icon-pro">✓</span> Multi-height mount system included</li>
              <li><span className="icon-pro">✓</span> Solid construction</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Heavy at 8.6 oz (68% heavier than Romeo5)</li>
              <li><span className="icon-con">✗</span> No shake awake — 12hr shutoff only</li>
              <li><span className="icon-con">✗</span> Bottom-loading battery requires removing optic</li>
              <li><span className="icon-con">✗</span> Spec sheets often list wrong weight</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Warranty-obsessed buyers, people who abuse their gear, anyone who wants "send it back, no questions" coverage.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Weight-conscious builders (8.6 oz is heavy for a red dot)</li>
            <li><span className="icon-con">✗</span> Anyone who wants shake awake</li>
            <li><span className="icon-con">✗</span> Pistol use</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Palmetto State Armory</span>
            <a href="https://palmettostatearmory.com/vortex-sparc-ii-ar-2-moa-red-dot-sight-spc-ar2.html" target="_blank" rel="noopener noreferrer" className="price-btn">$150–180 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Bushnell TRS-25 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="bushnell-trs25" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Ultra-Budget</span>
            <div className="mt-3">
              <span className="product-name">Bushnell TRS-25</span>
            </div>
          </div>
          <div className="product-price">$50–80</div>
        </div>

        <p className="product-desc">
          The TRS-25 is what you buy when you just need <em>something</em> on a .22 plinker or a truck gun you don't care about. At $50–80, it's the cheapest functional red dot worth buying.
        </p>
        <p className="product-desc">
          But "functional" has limits. No shake awake, no auto-shutoff (leave it on and the battery dies), 3 MOA dot, no NV compatibility, and you'll need to buy a separate riser for AR-15 co-witness. The glass has a noticeable green/blue tint common in budget optics. It works, but it's basic.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">4 oz</span></div>
          <div className="spec-row"><span className="spec-label">Reticle</span><span className="spec-value">3 MOA red dot</span></div>
          <div className="spec-row"><span className="spec-label">Battery</span><span className="spec-value">CR2032</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">5,000+ hours</span></div>
          <div className="spec-row"><span className="spec-label">Waterproof</span><span className="spec-value">IPX-7</span></div>
          <div className="spec-row"><span className="spec-label">Auto Shutoff</span><span className="spec-value font-bold text-status-red">No</span></div>
          <div className="spec-row"><span className="spec-label">Shake Awake</span><span className="spec-value">No</span></div>
          <div className="spec-row"><span className="spec-label">NV Compatible</span><span className="spec-value">No</span></div>
          <div className="spec-row"><span className="spec-label">Warranty</span><span className="spec-value">Limited</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Cheapest usable red dot on the market</li>
              <li><span className="icon-pro">✓</span> Proven reliability over years of sales</li>
              <li><span className="icon-pro">✓</span> Nitrogen-purged (fogproof)</li>
              <li><span className="icon-pro">✓</span> Integrated Weaver mount</li>
              <li><span className="icon-pro">✓</span> Adequate for close-range plinking</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> No auto-shutoff — will drain battery if left on</li>
              <li><span className="icon-con">✗</span> No shake awake</li>
              <li><span className="icon-con">✗</span> 3 MOA dot (larger, less precise)</li>
              <li><span className="icon-con">✗</span> Glass has green/blue tint</li>
              <li><span className="icon-con">✗</span> Riser sold separately for AR-15 use</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">.22 rifles, budget plinkers, "I just need something" builds, guns that live in the safe.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Home defense (no auto-features, battery management required)</li>
            <li><span className="icon-con">✗</span> Anyone who forgets to turn optics off</li>
            <li><span className="icon-con">✗</span> Shooters who want a 2 MOA dot</li>
            <li><span className="icon-con">✗</span> Builds where weight matters</li>
          </ul>
        </div>

        {/* TRS-25 vs Romeo5 Comparison */}
        <div className="specs-box">
          <div className="specs-label">TRS-25 vs Sig Romeo5</div>
          <div className="spec-row"><span className="spec-label">Price</span><span className="spec-value">$50–80 vs $100–130</span></div>
          <div className="spec-row"><span className="spec-label">Battery Life</span><span className="spec-value">5,000 hrs vs 40,000 hrs</span></div>
          <div className="spec-row"><span className="spec-label">Shake Awake</span><span className="spec-value">No vs Yes</span></div>
          <div className="spec-row"><span className="spec-label">Auto Shutoff</span><span className="spec-value">No vs Yes</span></div>
          <div className="spec-row"><span className="spec-label">Dot Size</span><span className="spec-value">3 MOA vs 2 MOA</span></div>
          <div className="spec-row"><span className="spec-label">Included Mounts</span><span className="spec-value">Weaver only vs High + Low</span></div>
          <p className="text-text-muted text-sm mt-4">For $50 more, the Romeo5 is 8x the optic. The TRS-25 only makes sense if budget is absolutely fixed.</p>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Amazon</span>
            <a href="https://www.amazon.com/dp/B00200E0HM" target="_blank" rel="noopener noreferrer" className="price-btn">$50–70 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this optic →</span></p>
        </div>
      </section>

      <div className="divider my-10"><div className="divider-line"></div></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FULL COMPARISON MATRIX */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="mb-10">
        <div className="section-label">Full Feature Comparison</div>
        <div className="overflow-x-auto">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>507C X2</th>
                <th>407C X2</th>
                <th>Kingslayer</th>
                <th>Romeo5</th>
                <th>Romeo5 II</th>
                <th>SPARC AR</th>
                <th>TRS-25</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-text-muted">Type</td>
                <td>Pistol</td>
                <td>Pistol</td>
                <td>Pistol</td>
                <td>Rifle</td>
                <td>Rifle</td>
                <td>Rifle</td>
                <td>Rifle</td>
              </tr>
              <tr>
                <td className="text-text-muted">Weight</td>
                <td>1.5 oz</td>
                <td>1.5 oz</td>
                <td>1.0–1.3 oz</td>
                <td>5.1 oz</td>
                <td>5.5 oz</td>
                <td>8.6 oz</td>
                <td>4 oz</td>
              </tr>
              <tr>
                <td className="text-text-muted">Battery Life</td>
                <td>50,000 hrs</td>
                <td>50,000 hrs</td>
                <td>1,500 hrs</td>
                <td>40,000 hrs</td>
                <td>40,000 hrs</td>
                <td>50,000 hrs</td>
                <td>5,000 hrs</td>
              </tr>
              <tr>
                <td className="text-text-muted">Shake Awake</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Solar Backup</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Circle Reticle</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td>Optional</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">NV Compatible</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Side Battery</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">RMR Footprint</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Street Price</td>
                <td>$299–350</td>
                <td>$220–280</td>
                <td>$150–180</td>
                <td>$100–130</td>
                <td>$140–170</td>
                <td>$150–200</td>
                <td>$50–80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FAQ */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="mb-10">
        <div className="section-label">FAQ</div>
        <div className="faq-item">
          <div className="faq-question">Is Holosun reliable enough for carry?</div>
          <p className="faq-answer">Yes. Holosun optics are used by multiple law enforcement agencies and have proven track records in training courses with thousands of rounds. The "made in China" concern is valid but outdated — Holosun's quality control is excellent.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">Can I use a rifle red dot on a pistol?</div>
          <p className="faq-answer">Technically yes with adapters, but don't. Rifle optics like the Romeo5 are too heavy, too large, and have the wrong mounting pattern. Get a pistol-specific optic.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">Is the Romeo5 really that good for $100?</div>
          <p className="faq-answer">Yes. It genuinely disrupted the market. The only reasons to spend more on a rifle dot are wanting premium glass (Aimpoint), needing absolute duty-grade reliability (EXPS), or wanting finer adjustment clicks (Romeo5 Gen II).</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">What's the deal with RMR footprint?</div>
          <p className="faq-answer">Most pistol slides cut for red dots use the Trijicon RMR mounting pattern. Holosun 407C, 507C, and Swampfox Kingslayer all fit RMR cuts. Always verify compatibility before buying.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">Should I wait for the Holosun X3?</div>
          <p className="faq-answer">The 507C-X3 was announced at SHOT Show 2026 with improved glass and 100,000-hour battery. If you can wait 3–6 months, prices on the X2 will likely drop, or you can get the new version. If you need an optic now, the X2 is still excellent.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM LINE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="card mb-10">
        <div className="section-label">Bottom Line</div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-tactical font-semibold text-lg text-text-primary mb-2">For Pistols</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><strong className="text-silver">Holosun 507C X2</strong> if you want the best under $300</li>
              <li><strong className="text-silver">Holosun 407C X2</strong> if you just want a dot and want to save money</li>
              <li><strong className="text-silver">Swampfox Kingslayer</strong> if you're trying pistol red dots for the first time</li>
            </ul>
          </div>
          <div>
            <h3 className="font-tactical font-semibold text-lg text-text-primary mb-2">For Rifles</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><strong className="text-silver">Sig Romeo5</strong> for 90% of people</li>
              <li><strong className="text-silver">Vortex SPARC AR</strong> if warranty matters more than features</li>
              <li><strong className="text-silver">Bushnell TRS-25</strong> if you're on a strict budget</li>
            </ul>
          </div>
        </div>
        <p className="text-text-secondary text-sm mt-6">
          The Romeo5 is the easy answer for most rifle shooters. The 507C is the easy answer for most pistol shooters. Everything else is situational.
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* AFFILIATE DISCLOSURE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="affiliate-disclosure">
        <p>
          <strong>Affiliate Disclosure:</strong> TacVault earns a commission from purchases made through links on this site. This doesn't affect our rankings — we recommend what we'd actually buy. All specs are verified against manufacturer websites, not retailer descriptions.
        </p>
      </div>

      {/* Last Updated */}
      <p className="text-text-muted text-xs mt-8 text-center">
        Prices last updated: February 3, 2026 • Specs verified against official manufacturer websites
      </p>
    </div>
  )
}
