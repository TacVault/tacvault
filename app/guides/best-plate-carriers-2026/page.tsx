import Link from 'next/link'

export const metadata = {
  title: 'Best Plate Carriers 2026 — TacVault',
  description: '7 plate carriers compared with verified specs. Crye JPC 2.0, Ferro Slickster, Defense Mechanisms MEPC, and more. No sponsored rankings.',
}

export default function BestPlateCarriersPage() {
  return (
    <div className="max-w-container mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="mb-6">
        <div className="section-label">Body Armor Guide</div>
        <h1 className="font-tactical font-bold text-4xl md:text-5xl text-text-primary mb-4">
          Best Plate Carriers 2026
        </h1>
        <p className="text-text-muted text-sm mb-4">
          Last Updated: February 3, 2026 • 7 products compared • Specs verified against manufacturer websites
        </p>
      </div>

      {/* Quick Answer */}
      <div className="quick-answer">
        <p>
          <strong className="text-text-primary">Quick answer:</strong> The <Link href="#crye-jpc-2" className="text-silver hover:text-chrome">Crye JPC 2.0</Link> ($250–290) is the gold standard — combat-proven, lightweight, and modular enough for any mission. If budget is tighter, the <Link href="#defense-mechanisms-mepc" className="text-silver hover:text-chrome">Defense Mechanisms MEPC</Link> ($155–175) gives you 90% of the performance at 60% of the price.
        </p>
      </div>

      {/* Intro */}
      <div className="guide-intro">
        <p>
          A plate carrier is the foundation of any serious loadout. Get it wrong and you're either uncomfortable, slow, or unable to mount the gear you need. The market ranges from $50 airsoft-grade junk to $500+ duty rigs — and price doesn't always correlate with quality.
        </p>
        <p>
          <strong className="text-text-primary">This guide exists to help you pick the right carrier for your actual use case.</strong> We verified every spec against official manufacturer websites, noted where marketing claims don't match reality, and tell you exactly who should — and shouldn't — buy each carrier.
        </p>
      </div>

      {/* Why These 7 */}
      <div className="specs-box mb-8">
        <div className="specs-label">Why These 7?</div>
        <p className="text-text-secondary text-sm leading-relaxed">
          We excluded carriers with documented stitching failures, proprietary plate sizing that limits your options, poor weight distribution that causes hotspots, or consistent QC complaints across multiple sources. We also skipped "tactical fashion" brands that prioritize looks over function.
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mt-3">
          <strong className="text-text-primary">If a carrier isn't listed here, it's because it failed one of those criteria — not because we didn't know about it.</strong>
        </p>
      </div>

      {/* Quick Picks */}
      <div className="specs-box mb-8">
        <div className="specs-label">Quick Picks</div>
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
                <td><Link href="#crye-jpc-2" className="text-silver hover:text-chrome">Crye Precision JPC 2.0</Link></td>
                <td><span className="badge badge-best">Best Overall</span></td>
                <td className="text-text-primary">$250–290</td>
                <td>All-around use, the default choice</td>
              </tr>
              <tr>
                <td><Link href="#ferro-slickster" className="text-silver hover:text-chrome">Ferro Concepts Slickster</Link></td>
                <td><span className="badge">Best Low-Profile</span></td>
                <td className="text-text-primary">$165</td>
                <td>Concealment, minimalist setups</td>
              </tr>
              <tr>
                <td><Link href="#defense-mechanisms-mepc" className="text-silver hover:text-chrome">Defense Mechanisms MEPC</Link></td>
                <td><span className="badge">Best Value</span></td>
                <td className="text-text-primary">$155–175</td>
                <td>Budget-conscious buyers wanting quality</td>
              </tr>
              <tr>
                <td><Link href="#trex-ac1" className="text-silver hover:text-chrome">T.REX Arms AC1</Link></td>
                <td><span className="badge">Best Minimalist Overt</span></td>
                <td className="text-text-primary">$240–250</td>
                <td>Simple, clean overt carrier</td>
              </tr>
              <tr>
                <td><Link href="#spiritus-lv119" className="text-silver hover:text-chrome">Spiritus Systems LV-119</Link></td>
                <td><span className="badge">Best Modular System</span></td>
                <td className="text-text-primary">$350–450</td>
                <td>Maximum configurability</td>
              </tr>
              <tr>
                <td><Link href="#shellback-banshee" className="text-silver hover:text-chrome">Shellback Banshee Elite 2.0</Link></td>
                <td><span className="badge">Best for Heavy Loads</span></td>
                <td className="text-text-primary">$280–350</td>
                <td>Extended wear, heavy kit</td>
              </tr>
              <tr>
                <td><Link href="#condor-sentry" className="text-silver hover:text-chrome">Condor Sentry</Link></td>
                <td><span className="badge">Best Budget</span></td>
                <td className="text-text-primary">$45–60</td>
                <td>Airsoft, training, trying out gear</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* At a Glance */}
      <div className="specs-box mb-8">
        <div className="specs-label">At a Glance</div>
        <div className="overflow-x-auto">
          <table className="comparison-table text-sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Weight</th>
                <th>Material</th>
                <th>Made In</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-silver">JPC 2.0</td>
                <td>1.1 lbs</td>
                <td>500D Cordura</td>
                <td>USA</td>
                <td>$250–290</td>
              </tr>
              <tr>
                <td className="text-silver">Slickster</td>
                <td>0.9 lbs</td>
                <td>500D Cordura</td>
                <td>USA</td>
                <td>$165</td>
              </tr>
              <tr>
                <td className="text-silver">MEPC</td>
                <td>1.0 lbs</td>
                <td>500D Cordura</td>
                <td>USA</td>
                <td>$155–175</td>
              </tr>
              <tr>
                <td className="text-silver">AC1</td>
                <td>1.2 lbs</td>
                <td>500D Cordura</td>
                <td>USA</td>
                <td>$240–250</td>
              </tr>
              <tr>
                <td className="text-silver">LV-119</td>
                <td>~1.5 lbs</td>
                <td>500D Cordura</td>
                <td>USA</td>
                <td>$350–450</td>
              </tr>
              <tr>
                <td className="text-silver">Banshee Elite 2.0</td>
                <td>3.0 lbs</td>
                <td>500D Cordura</td>
                <td>USA</td>
                <td>$280–350</td>
              </tr>
              <tr>
                <td className="text-silver">Condor Sentry</td>
                <td>1.8 lbs</td>
                <td>Nylon</td>
                <td>China</td>
                <td>$45–60</td>
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
            <strong className="text-text-primary">Plate Compatibility</strong> — Most carriers fit SAPI/ESAPI or "swimmer cut" plates. Verify your plates match the carrier's sizing. "Medium SAPI" and "10x12" are close but not identical.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Weight</strong> — Carrier weight matters when you add 8-15 lbs of plates. A 3 lb carrier vs 1 lb carrier is noticeable after hours of wear.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Cummerbund Style</strong> — Skeletal cummerbunds allow airflow and side mounting. Tube/quick-release systems allow fast doffing. Elastic is simpler but less adjustable.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">MOLLE/Attachment</strong> — Laser-cut MOLLE is lighter and lower-profile. Traditional sewn MOLLE is more durable. Some carriers have both.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Slick vs Overt</strong> — Slick carriers hide under clothing. Overt carriers have external MOLLE for pouches. Some carriers (like the Slickster) can convert between both.
          </div>
          <div className="criteria-item">
            <strong className="text-text-primary">Made in USA</strong> — Berry Amendment compliance matters for military/LEO. For civilians, USA-made typically means better QC and easier warranty service.
          </div>
        </div>
      </div>

      <div className="divider mb-10"><div className="divider-line"></div></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Crye Precision JPC 2.0 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="crye-jpc-2" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge badge-best mb-3">Best Overall</span>
            <div className="mt-3">
              <span className="product-name">Crye Precision JPC 2.0</span>
            </div>
          </div>
          <div className="product-price">$250–290</div>
        </div>

        <p className="product-desc">
          The JPC 2.0 is what US special operations units actually wear. At just over 1 pound, it's remarkably light while offering real modularity through the Skeletal Cummerbund system — you can mount pouches on the inside and outside of the cummerbund, maximizing real estate without bulk.
        </p>
        <p className="product-desc">
          The zip-on back panel allows you to add a hydration carrier, flat pack, or zip-on panel without permanent modification. The integrated admin pouch on the front keeps small items accessible. Two-band emergency doffing gets you out of the carrier in seconds. This is the carrier everything else is compared against.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">1.1 lbs (Medium)</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">500D Cordura</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">S, M, L, XL (SAPI)</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Skeletal (included)</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">MultiCam, Coyote, Ranger Green, Black, more</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">USA</span></div>
          <div className="spec-row"><span className="spec-label">Berry Compliant</span><span className="spec-value">Yes</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Combat-proven by US special operations</li>
              <li><span className="icon-pro">✓</span> Lightest quality carrier on the market (1.1 lbs)</li>
              <li><span className="icon-pro">✓</span> Skeletal Cummerbund — mount pouches inside and outside</li>
              <li><span className="icon-pro">✓</span> Zip-on back panel compatibility</li>
              <li><span className="icon-pro">✓</span> Two-band emergency doffing</li>
              <li><span className="icon-pro">✓</span> Integrated admin pouch</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Premium price point</li>
              <li><span className="icon-con">✗</span> Plate insertion takes practice</li>
              <li><span className="icon-con">✗</span> Limited built-in storage without accessories</li>
              <li><span className="icon-con">✗</span> Often out of stock in popular colors</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Anyone who wants the gold standard. Works for everything from range days to professional use. If you can only own one carrier, this is it.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Budget under $200 (get the MEPC instead)</li>
            <li><span className="icon-con">✗</span> Need maximum concealment (get the Slickster)</li>
            <li><span className="icon-con">✗</span> Airsoft/casual use only (overkill — get Condor)</li>
            <li><span className="icon-con">✗</span> Want integrated magazine pouches (JPC is modular, not built-in)</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Bravo Company USA</span>
            <a href="https://bravocompanyusa.com/crye-precision-jpc-2-0/" target="_blank" rel="noopener noreferrer" className="price-btn">
              $250
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
          <div className="price-row">
            <span className="price-retailer">Crye Precision</span>
            <a href="https://cryeprecision.com/ProductDetail/blc0640002_jpc-20" target="_blank" rel="noopener noreferrer" className="price-btn">
              $279
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Ferro Concepts Slickster */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="ferro-slickster" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Low-Profile</span>
            <div className="mt-3">
              <span className="product-name">Ferro Concepts Slickster</span>
            </div>
          </div>
          <div className="product-price">$165</div>
        </div>

        <p className="product-desc">
          The Slickster is the carrier you can actually conceal. At under 1 lb and completely slick (no external MOLLE), it disappears under a jacket or oversized shirt. The cummerbund uses elastic for a snug, adjustable fit without bulk.
        </p>
        <p className="product-desc">
          But "slick" doesn't mean "limited." Add a Ferro ADAPT front flap for magazines, a back panel for hydration, or swap the cummerbund for their MOLLE version when you need external pouches. The Slickster is a platform that grows with your needs — start minimal, add as required.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">~0.9 lbs (Base)</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">500D Cordura</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">M, L (SAPI/Swimmer)</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Elastic (included), MOLLE available</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">Black, Coyote, Ranger Green, MultiCam</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">USA</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> True concealment — fits under a jacket</li>
              <li><span className="icon-pro">✓</span> Lightest carrier in this guide (~0.9 lbs)</li>
              <li><span className="icon-pro">✓</span> Modular — add ADAPT panels, placards, cummerbunds</li>
              <li><span className="icon-pro">✓</span> Excellent value at $165</li>
              <li><span className="icon-pro">✓</span> Huge aftermarket ecosystem</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> No built-in MOLLE — need accessories for pouches</li>
              <li><span className="icon-con">✗</span> Basic elastic cummerbund isn't ideal for heavy loads</li>
              <li><span className="icon-con">✗</span> Limited sizing (M/L only)</li>
              <li><span className="icon-con">✗</span> Accessories add up quickly</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Concealed carry of armor, minimalist loadouts, vehicle/driver setups, anyone who wants to start simple and expand later.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Need overt MOLLE out of the box (get JPC 2.0)</li>
            <li><span className="icon-con">✗</span> Plan to carry heavy loads (cummerbund isn't designed for it)</li>
            <li><span className="icon-con">✗</span> Small or XL sizes (only M/L available)</li>
            <li><span className="icon-con">✗</span> Don't want to buy additional accessories</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Ferro Concepts</span>
            <a href="https://ferroconcepts.com/products/the-slickster" target="_blank" rel="noopener noreferrer" className="price-btn">
              $165
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Defense Mechanisms MEPC */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="defense-mechanisms-mepc" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Value</span>
            <div className="mt-3">
              <span className="product-name">Defense Mechanisms MEPC</span>
            </div>
          </div>
          <div className="product-price">$155–175</div>
        </div>

        <p className="product-desc">
          The MEPC (Mission Essential Plate Carrier) punches way above its price. At $155–175 for the base carrier with plate bags, you get laser-cut MOLLE, quality 500D Cordura, and USA manufacturing — features that typically cost $250+.
        </p>
        <p className="product-desc">
          Defense Mechanisms built this for people who wanted JPC-level quality without JPC-level pricing. The modular ecosystem lets you add their cummerbunds, placards, and back panels as budget allows. It's not quite as refined as the Crye, but it's 90% of the way there at 60% of the price.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">~1.0 lbs (Base)</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">500D Cordura</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">S, M, L (SAPI/Swimmer)</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Multiple options (sold separately or bundled)</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">MultiCam, Ranger Green, Coyote, Black, more</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">USA</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Best value in the category — USA-made under $200</li>
              <li><span className="icon-pro">✓</span> Laser-cut MOLLE (lighter, lower profile)</li>
              <li><span className="icon-pro">✓</span> Highly modular — compatible with many placards</li>
              <li><span className="icon-pro">✓</span> Quality on par with carriers costing $100 more</li>
              <li><span className="icon-pro">✓</span> Multiple cummerbund options</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Less proven track record than JPC</li>
              <li><span className="icon-con">✗</span> Cummerbund usually sold separately</li>
              <li><span className="icon-con">✗</span> Smaller company = potentially slower shipping</li>
              <li><span className="icon-con">✗</span> Not Berry Amendment compliant</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Budget-conscious buyers who refuse to compromise on quality. Anyone who wants JPC-level features without the JPC price tag.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Need Berry Amendment compliance (military/LEO procurement)</li>
            <li><span className="icon-con">✗</span> Want the absolute proven best (get JPC 2.0)</li>
            <li><span className="icon-con">✗</span> Ultra-budget under $100 (get Condor)</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Defense Mechanisms</span>
            <a href="https://defensemechanisms.com/mepc-plate-carrier/" target="_blank" rel="noopener noreferrer" className="price-btn">
              $155–175
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: T.REX Arms AC1 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="trex-ac1" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Minimalist Overt</span>
            <div className="mt-3">
              <span className="product-name">T.REX Arms AC1</span>
            </div>
          </div>
          <div className="product-price">$240–250</div>
        </div>

        <p className="product-desc">
          The AC1 is T.REX Arms' take on a minimalist overt carrier. Where the Slickster hides under clothing, the AC1 is designed to be worn visibly but without unnecessary bulk. Clean lines, integrated elastic cummerbund, and a simple design philosophy.
        </p>
        <p className="product-desc">
          T.REX built this for their own use and it shows — the carrier is optimized for speed and mobility over maximum attachment points. If you want a carrier that does one thing well (protect you without slowing you down), the AC1 delivers.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">~1.2 lbs</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">500D Cordura</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">M, L (10x12)</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Elastic (integrated)</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">Ranger Green, Black, MultiCam, M81 Woodland</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">USA</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Clean, minimalist design</li>
              <li><span className="icon-pro">✓</span> USA-made quality</li>
              <li><span className="icon-pro">✓</span> Good balance of mobility and protection</li>
              <li><span className="icon-pro">✓</span> Works with most placards</li>
              <li><span className="icon-pro">✓</span> Solid reputation from T.REX Arms</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Pricier than similar options ($240–250)</li>
              <li><span className="icon-con">✗</span> Limited sizing (M/L only)</li>
              <li><span className="icon-con">✗</span> Minimalist = fewer features built in</li>
              <li><span className="icon-con">✗</span> Elastic cummerbund not ideal for heavy loads</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Shooters who want a simple, clean carrier without bells and whistles. T.REX Arms fans. Minimalists who still want overt capability.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Want maximum modularity (get JPC 2.0 or LV-119)</li>
            <li><span className="icon-con">✗</span> Need to carry heavy loads (get Banshee Elite)</li>
            <li><span className="icon-con">✗</span> Budget under $200 (get MEPC)</li>
            <li><span className="icon-con">✗</span> Small or XL sizes needed</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">T.REX Arms</span>
            <a href="https://www.trex-arms.com/store/T-REX-ARMS-AC1-Plate-Carrier/" target="_blank" rel="noopener noreferrer" className="price-btn">
              $240–250
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Spiritus Systems LV-119 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="spiritus-lv119" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Modular System</span>
            <div className="mt-3">
              <span className="product-name">Spiritus Systems LV-119</span>
            </div>
          </div>
          <div className="product-price">$350–450</div>
        </div>

        <p className="product-desc">
          The LV-119 isn't just a plate carrier — it's a modular system. Buy the overt or covert front/back, choose your cummerbund, add their Micro Fight chassis, and build exactly the carrier you want. No other system offers this level of configurability.
        </p>
        <p className="product-desc">
          The trade-off is complexity and cost. A fully-built LV-119 with cummerbund and placard runs $350–450. But if you want to swap between a slick setup and a full combat loadout by just changing components, nothing else comes close.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">~1.5 lbs (complete)</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">500D Cordura</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">M, L (SAPI)</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Multiple options (sold separately)</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">MultiCam, Ranger Green, Coyote, Black, M81, more</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">USA</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Maximum modularity — swap between configs</li>
              <li><span className="icon-pro">✓</span> Overt or covert front/back options</li>
              <li><span className="icon-pro">✓</span> Micro Fight chassis is industry-leading</li>
              <li><span className="icon-pro">✓</span> Premium USA-made quality</li>
              <li><span className="icon-pro">✓</span> Build exactly what you need</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Expensive — $350–450 for a complete setup</li>
              <li><span className="icon-con">✗</span> Buying components separately is confusing</li>
              <li><span className="icon-con">✗</span> Often out of stock</li>
              <li><span className="icon-con">✗</span> Overkill for simple range use</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Gear nerds who want maximum customization. Users who need to swap between slick and overt setups. People who appreciate the Spiritus ecosystem.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> First plate carrier (too complex — get JPC or MEPC)</li>
            <li><span className="icon-con">✗</span> Budget under $300</li>
            <li><span className="icon-con">✗</span> Want a simple, complete solution out of the box</li>
            <li><span className="icon-con">✗</span> Impatient — Spiritus stock is unpredictable</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Spiritus Systems</span>
            <a href="https://spiritussystems.com/lv-119-rear-overt-plate-bag/" target="_blank" rel="noopener noreferrer" className="price-btn">
              $350–450 (complete)
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Shellback Banshee Elite 2.0 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="shellback-banshee" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best for Heavy Loads</span>
            <div className="mt-3">
              <span className="product-name">Shellback Tactical Banshee Elite 2.0</span>
            </div>
          </div>
          <div className="product-price">$280–350</div>
        </div>

        <p className="product-desc">
          The Banshee Elite 2.0 is built for extended wear under heavy loads. At 3 lbs, it's the heaviest carrier in this guide — but that weight is padding, structure, and support that matter when you're wearing 20+ lbs of gear for hours.
        </p>
        <p className="product-desc">
          The shoulder straps are generously padded. The cummerbund distributes weight across your torso. Quick-release buckles let you doff fast. If your use case involves long days in armor with a full combat load, this is the carrier that won't destroy your shoulders.
        </p>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">3.0 lbs</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">500D Cordura</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">M, L, XL (10x12, 11x14)</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Padded, quick-release</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">Black, Coyote, Ranger Green, MultiCam</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">USA</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Best padding and support for heavy loads</li>
              <li><span className="icon-pro">✓</span> Comfortable for all-day wear</li>
              <li><span className="icon-pro">✓</span> Quick-release cummerbund</li>
              <li><span className="icon-pro">✓</span> Fits larger plates (up to 11x14)</li>
              <li><span className="icon-pro">✓</span> USA-made quality</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Heavy at 3 lbs (carrier alone)</li>
              <li><span className="icon-con">✗</span> Bulky — not for low-profile use</li>
              <li><span className="icon-con">✗</span> Overkill for light loadouts</li>
              <li><span className="icon-con">✗</span> Less "cool guy" aesthetics</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Long training days, heavy combat loads, larger-bodied users, anyone prioritizing comfort over weight savings.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Weight-conscious users (this is heavy)</li>
            <li><span className="icon-con">✗</span> Concealment needs (too bulky)</li>
            <li><span className="icon-con">✗</span> Minimalist loadouts (overkill)</li>
            <li><span className="icon-con">✗</span> Budget under $250</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Shellback Tactical</span>
            <a href="https://www.shellbacktactical.com/shellback-tactical-banshee-elite-2-0-plate-carrier/" target="_blank" rel="noopener noreferrer" className="price-btn">
              $280–320
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRODUCT: Condor Sentry */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="condor-sentry" className="product-card">
        <div className="product-header">
          <div>
            <span className="badge mb-3">Best Budget</span>
            <div className="mt-3">
              <span className="product-name">Condor Sentry</span>
            </div>
          </div>
          <div className="product-price">$45–60</div>
        </div>

        <p className="product-desc">
          The Condor Sentry is the cheapest plate carrier worth buying. At $45–60, it's firmly in "airsoft territory" — but unlike actual airsoft gear, it will hold real plates and won't fall apart immediately.
        </p>
        <p className="product-desc">
          Let's be clear: this is not a duty-grade carrier. The stitching is adequate, not bomb-proof. The materials are heavier and less comfortable than premium options. But if you need a carrier for training, airsoft, or just trying out the concept of wearing armor, the Sentry gets the job done.
        </p>

        {/* Warning Box */}
        <div className="warning-box">
          <svg className="warning-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <div>
            <div className="warning-title">Reality Check</div>
            <div className="warning-text">Do not bet your life on a $50 carrier. If your use case involves actual danger, buy a real carrier. The Sentry is for training, airsoft, and testing if you like plate carriers before investing more.</div>
          </div>
        </div>

        {/* Specs */}
        <div className="specs-box">
          <div className="specs-label">Specs</div>
          <div className="spec-row"><span className="spec-label">Weight</span><span className="spec-value">1.8 lbs</span></div>
          <div className="spec-row"><span className="spec-label">Material</span><span className="spec-value">Nylon</span></div>
          <div className="spec-row"><span className="spec-label">Plate Sizes</span><span className="spec-value">Up to 10.25" x 13.25"</span></div>
          <div className="spec-row"><span className="spec-label">Cummerbund</span><span className="spec-value">Basic (included)</span></div>
          <div className="spec-row"><span className="spec-label">Colors</span><span className="spec-value">Black, Coyote, OD Green, MultiCam</span></div>
          <div className="spec-row"><span className="spec-label">Made In</span><span className="spec-value">China</span></div>
        </div>

        {/* Pros / Cons */}
        <div className="pros-cons">
          <div className="pros-box">
            <div className="pros-label">Pros</div>
            <ul className="pc-list">
              <li><span className="icon-pro">✓</span> Cheapest carrier worth buying</li>
              <li><span className="icon-pro">✓</span> Will hold real plates</li>
              <li><span className="icon-pro">✓</span> Good enough for training/airsoft</li>
              <li><span className="icon-pro">✓</span> MOLLE webbing works</li>
              <li><span className="icon-pro">✓</span> Great for trying out plate carriers</li>
            </ul>
          </div>
          <div className="cons-box">
            <div className="cons-label">Cons</div>
            <ul className="pc-list">
              <li><span className="icon-con">✗</span> Not duty-grade quality</li>
              <li><span className="icon-con">✗</span> Heavier than premium carriers (1.8 lbs)</li>
              <li><span className="icon-con">✗</span> Less comfortable for extended wear</li>
              <li><span className="icon-con">✗</span> Made in China — QC is inconsistent</li>
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="best-for-box">
          <div className="best-for-label">Best For</div>
          <p className="best-for-text">Airsoft, training, testing if you like wearing armor, ultra-tight budgets, beater carriers you don't care about.</p>
        </div>

        {/* Who Should NOT Buy */}
        <div className="not-for-box">
          <div className="not-for-label">Who Should NOT Buy This</div>
          <ul className="pc-list">
            <li><span className="icon-con">✗</span> Any actual defensive use (buy a real carrier)</li>
            <li><span className="icon-con">✗</span> Professional/duty use</li>
            <li><span className="icon-con">✗</span> Extended wear comfort needed</li>
            <li><span className="icon-con">✗</span> Anyone who can stretch to $155 for the MEPC</li>
          </ul>
        </div>

        {/* Prices */}
        <div className="price-section">
          <div className="specs-label">Current Prices</div>
          <div className="price-row">
            <span className="price-retailer">Amazon</span>
            <a href="https://www.amazon.com/Condor-Sentry-Plate-Carrier-Black/dp/B00DVOQB8S" target="_blank" rel="noopener noreferrer" className="price-btn">
              $45–60
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="mt-4 text-center">
          <p className="text-text-muted text-sm">Want to know when this drops below fair value? <span className="text-silver cursor-pointer hover:text-chrome">Track this carrier →</span></p>
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
                <th>JPC 2.0</th>
                <th>Slickster</th>
                <th>MEPC</th>
                <th>AC1</th>
                <th>LV-119</th>
                <th>Banshee</th>
                <th>Sentry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-text-muted">Weight</td>
                <td>1.1 lbs</td>
                <td>0.9 lbs</td>
                <td>1.0 lbs</td>
                <td>1.2 lbs</td>
                <td>~1.5 lbs</td>
                <td>3.0 lbs</td>
                <td>1.8 lbs</td>
              </tr>
              <tr>
                <td className="text-text-muted">Material</td>
                <td>500D</td>
                <td>500D</td>
                <td>500D</td>
                <td>500D</td>
                <td>500D</td>
                <td>500D</td>
                <td>Nylon</td>
              </tr>
              <tr>
                <td className="text-text-muted">Made In</td>
                <td className="text-status-green">USA</td>
                <td className="text-status-green">USA</td>
                <td className="text-status-green">USA</td>
                <td className="text-status-green">USA</td>
                <td className="text-status-green">USA</td>
                <td className="text-status-green">USA</td>
                <td>China</td>
              </tr>
              <tr>
                <td className="text-text-muted">Laser-Cut MOLLE</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Quick Release</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td>Optional</td>
                <td className="text-status-red">✗</td>
                <td>Optional</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Concealable</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td>Covert option</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Berry Compliant</td>
                <td className="text-status-green">✓</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
                <td className="text-status-red">✗</td>
              </tr>
              <tr>
                <td className="text-text-muted">Price</td>
                <td>$250–290</td>
                <td>$165</td>
                <td>$155–175</td>
                <td>$240–250</td>
                <td>$350–450</td>
                <td>$280–350</td>
                <td>$45–60</td>
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
          <div className="faq-question">Do I need a plate carrier if I have plates?</div>
          <p className="faq-answer">Yes. Plates alone don't help — you need a carrier to wear them. The carrier also distributes weight, allows you to mount gear, and keeps the plates positioned correctly. Budget 20-30% of your total armor budget for the carrier.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">What size plates fit these carriers?</div>
          <p className="faq-answer">Most carriers in this guide fit Medium SAPI (9.5" x 12.5") or standard 10" x 12" plates. Large carriers fit Large SAPI (10.125" x 13.25"). Always check the specific carrier's plate pocket dimensions against your plates.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">Slick or overt — which should I buy?</div>
          <p className="faq-answer">Depends on use case. Slick (like the Slickster) hides under clothing and works for concealed carry of armor. Overt (like the JPC) has external MOLLE for mounting pouches and is better for range training, classes, and visible loadouts. Some carriers (like the LV-119) offer both configurations.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">Why is the JPC 2.0 so popular?</div>
          <p className="faq-answer">It's the Goldilocks carrier — light enough to not slow you down, modular enough to grow with your needs, and proven in actual combat by special operations units. Most other carriers are either compared against it or designed to compete with it.</p>
        </div>
        <div className="faq-item">
          <div className="faq-question">Is the Condor Sentry actually usable?</div>
          <p className="faq-answer">For training and airsoft, yes. For anything where your life depends on it, no. The Sentry is fine for getting a feel for plate carriers, running training courses, or casual range use. It's not appropriate for duty use or actual defensive scenarios.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM LINE */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="card mb-10">
        <div className="section-label">Bottom Line</div>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li><strong className="text-silver">Crye JPC 2.0</strong> — the default choice for most people</li>
          <li><strong className="text-silver">Ferro Slickster</strong> — if you need to conceal armor</li>
          <li><strong className="text-silver">Defense Mechanisms MEPC</strong> — if you want JPC quality at 60% the price</li>
          <li><strong className="text-silver">T.REX Arms AC1</strong> — if you want simple and minimalist</li>
          <li><strong className="text-silver">Spiritus LV-119</strong> — if you want maximum modularity</li>
          <li><strong className="text-silver">Shellback Banshee Elite 2.0</strong> — if comfort under heavy loads is priority</li>
          <li><strong className="text-silver">Condor Sentry</strong> — if you're on a strict budget or just testing</li>
        </ul>
        <p className="text-text-secondary text-sm mt-6">
          For most people, the JPC 2.0 or MEPC is the right answer. Everything else is situational.
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
