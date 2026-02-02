import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Plate Carriers 2026 — Compared & Ranked | TacVault',
  description: 'Compare the 7 best plate carriers of 2026. Crye JPC 2.0, Ferro Slickster, Defense Mechanisms MEPC and more. Real specs, current prices, honest reviews.',
  openGraph: {
    title: 'Best Plate Carriers 2026 — Compared & Ranked',
    description: 'Compare the 7 best plate carriers of 2026. Real specs, current prices, honest reviews.',
  },
}

/* ─── data ─── */

const quickPicks = [
  { cat: 'Best Overall', pick: 'Crye JPC 2.0', price: '$250–290', anchor: 'crye-jpc-2' },
  { cat: 'Best Low-Profile', pick: 'Ferro Slickster', price: '$165', anchor: 'ferro-slickster' },
  { cat: 'Best Value', pick: 'Defense Mechanisms MEPC', price: '$155–175', anchor: 'dm-mepc' },
  { cat: 'Best Modular', pick: 'Spiritus LV-119', price: '$350+', anchor: 'spiritus-lv119' },
  { cat: 'Best Minimalist', pick: 'T.REX Arms AC1.5', price: '~$185', anchor: 'trex-ac1' },
  { cat: 'Best Budget', pick: 'Condor Sentry', price: '$50–60', anchor: 'condor-sentry' },
  { cat: 'Best for Heavy Loads', pick: 'Shellback Banshee Elite 2.0', price: '$280–320', anchor: 'shellback-banshee' },
]

interface Carrier {
  id: string
  rank: number
  name: string
  badge: string
  weight: string
  material: string
  sizes: string
  colors: string
  madeIn: string
  price: string
  pros: string[]
  cons: string[]
  bestFor: string
  desc: string[]
  prices: { retailer: string; price: string; url: string }[]
  compatibility: string
}

const carriers: Carrier[] = [
  {
    id: 'crye-jpc-2',
    rank: 1,
    name: 'Crye Precision JPC 2.0',
    badge: 'Best Overall',
    weight: '1.1 lbs',
    material: '500D Cordura',
    sizes: 'S, M, L, XL (sized by plate)',
    colors: 'MultiCam, Ranger Green, Coyote, Black, Khaki, Grey',
    madeIn: 'USA',
    price: '$250–290',
    pros: [
      'Lightest quality carrier on the market',
      'Combat-proven by US special operations',
      'Skeletal Cummerbund — mount pouches inside and outside',
      'Compatible with all AVS front flaps and accessories',
      '2-step emergency doffing',
      'Excellent ventilation',
    ],
    cons: [
      'Premium price point',
      'Plate insertion takes practice',
      'Limited storage without accessories',
      'Often out of stock in popular colors',
    ],
    bestFor: 'Anyone who wants the best. If you train seriously or want proven gear — this is it.',
    desc: [
      'The JPC 2.0 is what special operations units actually use. At just over 1 pound, it\'s remarkably light while offering real modularity through the Skeletal Cummerbund system. You can mount pouches inside and outside the cummerbund, and the entire AVS accessory ecosystem is compatible.',
      'The patented Integrated Attachment System sheds unnecessary weight and bulk while improving ventilation. All AVS detachable front flaps work with the JPC 2.0, giving you mag pouches, admin panels, and medical setups without permanent modifications.',
    ],
    prices: [
      { retailer: 'Bravo Company USA', price: '$250', url: 'https://bravocompanyusa.com' },
      { retailer: 'Crye Precision', price: '$279', url: 'https://cryeprecision.com' },
      { retailer: 'RMA Defense', price: '$279', url: 'https://rmadefense.com' },
      { retailer: 'Tactical Distributors', price: '$279', url: 'https://tacticaldistributors.com' },
    ],
    compatibility: 'SAPI, ESAPI, XSAPI, swimmer cut, shooter cut. Size carrier to match plate size. 10×12 = Medium.',
  },
  {
    id: 'ferro-slickster',
    rank: 2,
    name: 'Ferro Concepts Slickster',
    badge: 'Best Low-Profile',
    weight: '0.9 lbs (402g)',
    material: '500D Cordura',
    sizes: 'S, M, L (sized by plate)',
    colors: 'Black, Coyote, Ranger Green, MultiCam, MCB, Wolf Grey',
    madeIn: 'USA',
    price: '$165',
    pros: [
      'Incredibly light and low-profile',
      'ADAPT system allows massive customization',
      'Elastic cummerbund holds mags, TQs, radios',
      'Scales from covert to full kit',
      'Great under jackets or in vehicles',
    ],
    cons: [
      'Not designed for heavy loadouts (6 lb plate max)',
      'Stock availability can be inconsistent',
      'Requires ADAPT accessories for full functionality',
      'Base model is truly minimal',
    ],
    bestFor: 'Concealed carry under clothing, vehicle use, security details, or a scalable platform you build over time.',
    desc: [
      'The Slickster is the go-to for low-visibility work. At just 0.9 lbs, it virtually disappears under a jacket. But the magic is in the ADAPT system — you can scale from covert to overt by swapping cummerbunds, adding MOLLE panels, and attaching front flaps.',
      'The Carry Elastic Cummerbund holds 5.56 and 7.62 mags, smoke, flashbangs, radios, and tourniquets. Laser-cut slots on the chest accept ADAPT flaps and most chest rigs using ITW QASM buckles.',
    ],
    prices: [
      { retailer: 'Ferro Concepts', price: '$165', url: 'https://ferroconcepts.com' },
      { retailer: 'SKD Tactical', price: '$165', url: 'https://skdtac.com' },
      { retailer: 'OP Tactical', price: '$165', url: 'https://optactical.com' },
    ],
    compatibility: 'SAPI, ESAPI, XSAPI, standalone Level 4, swimmer & shooter cut. Max plate thickness: 1″. Size carrier to plate.',
  },
  {
    id: 'dm-mepc',
    rank: 3,
    name: 'Defense Mechanisms MEPC',
    badge: 'Best Value',
    weight: '1.5 lbs (with cummerbund)',
    material: '500D Cordura',
    sizes: 'S, M, L, XL (sized by plate)',
    colors: 'Black, Ranger Green, Coyote, MultiCam (all variants), Woodland, Wolf Grey',
    madeIn: 'USA (Winona, Minnesota)',
    price: '$155–175',
    pros: [
      'Excellent build quality for the price',
      'Made entirely in USA (Berry Compliant)',
      'Cable pass-through for comms',
      'MOLLE or slick rear bag options',
      'Multiple cummerbund choices',
      'Great color selection',
    ],
    cons: [
      'Plate bags and cummerbund sold separately (~$300 complete)',
      '4–8 week lead time on some configs',
      'Less name recognition than Crye / Spiritus',
      'Heavier than minimalist options',
    ],
    bestFor: 'Budget-conscious buyers who want quality USA-made gear. LEO, prepared citizens, or anyone who doesn\'t want to pay Crye prices.',
    desc: [
      'The MEPC offers premium features at a mid-range price. Handmade in Minnesota with real attention to detail — cable routing for comms, zippered admin pocket, laser-cut MOLLE, and overlapping shoulder straps for a wide range of fit adjustment.',
      'At $155–175 for plate bags, it competes with carriers twice its price on build quality. The 500D Cordura construction keeps weight reasonable while staying durable. Available in slick and MOLLE rear configurations.',
    ],
    prices: [
      { retailer: 'Defense Mechanisms', price: '$155–175', url: 'https://defensemechanisms.com' },
      { retailer: 'Apex Armor Solutions (kits)', price: '$260–350', url: 'https://apexarmorsolutions.com' },
    ],
    compatibility: 'Up to 1.2″ thick plate + backer combo. SAPI sizing. Medium fits 10×12 commercial plates.',
  },
  {
    id: 'trex-ac1',
    rank: 4,
    name: 'T.REX Arms AC1.5',
    badge: 'Best Minimalist Overt',
    weight: '1.45 lbs (23.2 oz)',
    material: '500D with Tweave lining',
    sizes: 'S, M, L (sized by plate)',
    colors: 'Black, Coyote, M81 Woodland, MultiCam, Ranger Green',
    madeIn: 'USA',
    price: '~$185',
    pros: [
      'MOLLE row placard interface — no hardware needed',
      'Reversible cummerbund with multiple cell options',
      'Tweave lining for comfort and breathability',
      'Angled shoulder straps with thicker padding',
      'Solid price for USA-made quality',
    ],
    cons: [
      'No internal velcro loop fields',
      'Limited to T.REX ecosystem for some accessories',
      'Plate thickness limited to ~1.1″',
      'Mixed reviews on initial shoulder comfort',
    ],
    bestFor: 'Civilian prepared citizens who want a quality USA-made carrier for training and emergency use.',
    desc: [
      'The AC1.5 is the updated version of T.REX\'s popular AC1. It adds a MOLLE row placard interface for hardware-free attachment of select placards, a reversible cummerbund, and improved padding with Tweave lining fabric for better comfort on longer wear.',
      'The angled shoulder straps distribute weight more naturally. Available in five colors and sized by plate. A clean, no-nonsense overt carrier at a fair price point.',
    ],
    prices: [
      { retailer: 'T.REX Arms', price: '~$185', url: 'https://trex-arms.com' },
    ],
    compatibility: 'SAPI, ESAPI, XSAPI, swimmer cut, shooter cut. Plates should not exceed ~1.1″ thickness.',
  },
  {
    id: 'spiritus-lv119',
    rank: 5,
    name: 'Spiritus Systems LV-119',
    badge: 'Best Modular System',
    weight: '~1.5 lbs (configured)',
    material: '500D Cordura',
    sizes: 'S, M, L, XL (sized by plate)',
    colors: 'Black, Coyote, RG, MultiCam, MCB, M81, Wolf Grey + more',
    madeIn: 'USA',
    price: '$350–450 (complete)',
    pros: [
      'Ultimate modularity — configure exactly what you need',
      'Mix covert and overt components freely',
      'Huge color selection',
      'First Spear TUBES compatible',
      'QASM buckle placard system',
      'Excellent build quality',
    ],
    cons: [
      'Component pricing adds up fast',
      'Confusing for first-time buyers',
      'Cummerbund attachment can be fiddly',
      'Frequently out of stock',
    ],
    bestFor: 'Experienced users who know exactly what they want. Military, LEO, or serious enthusiasts who value configurability.',
    desc: [
      'The LV-119 isn\'t a plate carrier — it\'s a system. You buy the front plate bag, rear plate bag, cummerbund, and shoulder covers separately. This means infinite configuration: covert to overt, MOLLE to slick, standard to OTB (over the beach).',
      'Every component is interchangeable. You can pair a covert front bag with an overt rear, swap cummerbunds for different missions, and integrate back panels, placards, and other accessories. The trade-off is complexity and cost.',
    ],
    prices: [
      { retailer: 'Spiritus Systems (front bag)', price: '$104–130', url: 'https://spiritussystems.com' },
      { retailer: 'Spiritus Systems (rear bag)', price: '$104–130', url: 'https://spiritussystems.com' },
      { retailer: 'OP Tactical (front bag)', price: '$105–130', url: 'https://optactical.com' },
    ],
    compatibility: 'SAPI cut standard. Fits other cuts within listed dimensions. Check Spiritus sizing guide.',
  },
  {
    id: 'condor-sentry',
    rank: 6,
    name: 'Condor Sentry',
    badge: 'Best Budget',
    weight: '~2 lbs',
    material: 'Nylon',
    sizes: 'S/M, L/XL (sized by plate)',
    colors: 'Black, Coyote, OD Green, MultiCam',
    madeIn: 'Overseas',
    price: '$50–60',
    pros: [
      'Under $60',
      'Gets the job done for training',
      'Accepts standard 10×12 plates',
      'Decent shoulder padding',
      'Good entry point to plate carriers',
    ],
    cons: [
      'Won\'t last like premium options',
      'Heavier than quality carriers',
      'Durability concerns for hard use',
      'You\'ll want to upgrade eventually',
    ],
    bestFor: 'First-time buyers, range training, fitness / weighted vest use, or backup carriers.',
    desc: [
      'Not everyone has $300 for a plate carrier. The Condor Sentry runs about $55 and does the basics right — padded adjustable shoulder straps, slick front, and accepts standard plates.',
      'It won\'t last forever and it\'s heavier than quality carriers, but it gets you training with plates while you save for something better. Think of it as a proving ground.',
    ],
    prices: [
      { retailer: 'Condor Outdoor', price: '$55–65', url: 'https://condoroutdoor.com' },
      { retailer: 'Amazon', price: '$50–60', url: 'https://amazon.com' },
    ],
    compatibility: 'Medium/Large ESAPI plates up to 10.25″×13.25″.',
  },
  {
    id: 'shellback-banshee',
    rank: 7,
    name: 'Shellback Banshee Elite 2.0',
    badge: 'Best for Heavy Loads',
    weight: '~3 lbs',
    material: '1000D Cordura',
    sizes: 'S, M, L, XL',
    colors: 'Black, Coyote, Ranger Green, MultiCam',
    madeIn: 'USA',
    price: '$280–320',
    pros: [
      '3D padded mesh interior for all-day comfort',
      'Hypalon shoulders for comms / hydration routing',
      'Built for heavy combat loads',
      'Accepts side plates',
      'Quick-release system',
      'Soft armor compatible',
    ],
    cons: [
      'Heavy compared to minimalist carriers',
      'Not low-profile at all',
      'Overkill for most civilian use cases',
      'Higher price point',
    ],
    bestFor: 'Military, law enforcement, security details, or anyone running a heavy loadout for extended periods.',
    desc: [
      'When you need to carry a lot of gear for extended periods, padding matters. The Banshee Elite 2.0 is built for LE and military duty use with 3D padded internal mesh, Hypalon shoulder construction for routing comms and hydration, and full MOLLE coverage.',
      'It supports 10×12 plates, accepts side plates, and includes a quick-release system. The 1000D Cordura construction is heavier but significantly more abrasion-resistant for hard daily use.',
    ],
    prices: [
      { retailer: 'Shellback Tactical', price: '$300–320', url: 'https://shellbacktactical.com' },
      { retailer: 'US Patriot Tactical', price: '$280–300', url: 'https://uspatriottactical.com' },
    ],
    compatibility: '10×12 standard. Side plate pouches included. Soft armor compatible.',
  },
]

/* ─── components ─── */

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 bg-brand-amber/10 text-brand-amber text-xs font-semibold rounded-md border border-brand-amber/20">
      {text}
    </span>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-zinc-800/50 last:border-0">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="text-sm text-zinc-200 text-right max-w-[60%]">{value}</span>
    </div>
  )
}

function CarrierCard({ carrier }: { carrier: Carrier }) {
  return (
    <section id={carrier.id} className="scroll-mt-24">
      <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
          <div>
            <Badge text={carrier.badge} />
            <h3 className="font-heading text-2xl font-bold text-zinc-50 mt-3">
              <span className="text-zinc-500 font-semibold text-lg mr-2">#{carrier.rank}</span>
              {carrier.name}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <span className="font-heading text-2xl font-bold text-brand-amber">{carrier.price}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 space-y-3">
          {carrier.desc.map((p, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-[15px]">{p}</p>
          ))}
        </div>

        {/* Specs */}
        <div className="bg-zinc-950/50 rounded-lg p-4 mb-6">
          <h4 className="font-heading text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">Specs</h4>
          <SpecRow label="Weight" value={carrier.weight} />
          <SpecRow label="Material" value={carrier.material} />
          <SpecRow label="Sizes" value={carrier.sizes} />
          <SpecRow label="Colors" value={carrier.colors} />
          <SpecRow label="Made In" value={carrier.madeIn} />
        </div>

        {/* Pros / Cons */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-4">
            <h4 className="font-heading text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">Pros</h4>
            <ul className="space-y-2">
              {carrier.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-lg p-4">
            <h4 className="font-heading text-xs uppercase tracking-widest text-red-400 font-semibold mb-3">Cons</h4>
            <ul className="space-y-2">
              {carrier.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div className="bg-brand-amber/5 border border-brand-amber/10 rounded-lg p-4 mb-6">
          <h4 className="font-heading text-xs uppercase tracking-widest text-brand-amber font-semibold mb-1">Best For</h4>
          <p className="text-sm text-zinc-300">{carrier.bestFor}</p>
        </div>

        {/* Prices */}
        <div className="mb-4">
          <h4 className="font-heading text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">Current Prices</h4>
          <div className="space-y-2">
            {carrier.prices.map((p, i) => (
              <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-zinc-950/50 border border-zinc-800/40 hover:border-zinc-700/60 transition-colors">
                <span className="text-sm text-zinc-300">{p.retailer}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-amber/10 text-brand-amber text-sm font-semibold rounded-md hover:bg-brand-amber/20 transition-colors"
                >
                  {p.price}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibility */}
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">Plate Compatibility</h4>
          <p className="text-sm text-zinc-400">{carrier.compatibility}</p>
        </div>
      </div>
    </section>
  )
}

/* ─── page ─── */

export default function PlateCarriersGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-600 mb-8">
        <a href="/" className="hover:text-zinc-400 transition-colors">Home</a>
        <span>/</span>
        <a href="/guides" className="hover:text-zinc-400 transition-colors">Guides</a>
        <span>/</span>
        <span className="text-zinc-400">Plate Carriers</span>
      </nav>

      {/* Title */}
      <header className="mb-10">
        <Badge text="Plate Carriers" />
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-50 tracking-tight mt-4 mb-4">
          Best Plate Carriers 2026
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-4">
          You don't need to watch 15 YouTube videos to figure out which plate carrier to buy. We did the research, compared the specs, and broke down what actually matters.
        </p>
        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <span>Prices last updated: Feb 1, 2026</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>12 min read</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>7 products</span>
        </div>
      </header>

      {/* Quick Answer */}
      <div className="p-5 rounded-xl bg-brand-amber/5 border border-brand-amber/15 mb-10">
        <p className="text-[15px] text-zinc-200 leading-relaxed">
          <strong className="text-brand-amber">Quick answer:</strong> For most people, the{' '}
          <a href="#crye-jpc-2" className="text-brand-amber underline underline-offset-2 hover:text-brand-amber-light transition-colors font-semibold">
            Crye Precision JPC 2.0
          </a>{' '}
          ($250–290) is the best overall plate carrier — lightweight, proven, and infinitely customizable. On a budget? The{' '}
          <a href="#condor-sentry" className="text-brand-amber underline underline-offset-2 hover:text-brand-amber-light transition-colors font-semibold">
            Condor Sentry
          </a>{' '}
          (~$55) gets you started without breaking the bank.
        </p>
      </div>

      {/* Quick Picks Table */}
      <section className="mb-14">
        <h2 className="font-heading text-xl font-bold text-zinc-100 mb-4">Quick Picks</h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-[540px] px-4 sm:px-0">
            <div className="bg-zinc-900/50 rounded-xl border border-zinc-800/60 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1fr_1.4fr_0.8fr] gap-4 px-4 py-3 bg-zinc-800/30 border-b border-zinc-800/50">
                <span className="text-xs font-heading font-semibold text-zinc-500 uppercase tracking-wider">Category</span>
                <span className="text-xs font-heading font-semibold text-zinc-500 uppercase tracking-wider">Pick</span>
                <span className="text-xs font-heading font-semibold text-zinc-500 uppercase tracking-wider text-right">Price</span>
              </div>
              {/* Rows */}
              {quickPicks.map((qp, i) => (
                <a
                  key={i}
                  href={`#${qp.anchor}`}
                  className="grid grid-cols-[1fr_1.4fr_0.8fr] gap-4 px-4 py-3 border-b border-zinc-800/30 last:border-0 hover:bg-zinc-800/20 transition-colors group"
                >
                  <span className="text-sm text-zinc-400">{qp.cat}</span>
                  <span className="text-sm text-zinc-100 group-hover:text-brand-amber transition-colors font-medium">{qp.pick}</span>
                  <span className="text-sm text-zinc-300 text-right font-mono">{qp.price}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="mb-14">
        <h2 className="font-heading text-xl font-bold text-zinc-100 mb-4">What to Look For</h2>
        <div className="space-y-4 text-[15px] text-zinc-400 leading-relaxed">
          <p>
            <strong className="text-zinc-200">Weight</strong> — Lighter carriers mean less fatigue. The JPC 2.0 weighs just over 1 lb. Budget carriers can hit 2–3 lbs before plates.
          </p>
          <p>
            <strong className="text-zinc-200">Plate Compatibility</strong> — Carriers are sized by plate, not body. If you have 10×12 plates, you need a medium carrier. Know your plate cut: SAPI, ESAPI, swimmer, shooter.
          </p>
          <p>
            <strong className="text-zinc-200">Material</strong> — 500D Cordura is the sweet spot for weight and durability. 1000D is tougher but heavier. Budget carriers often skimp here.
          </p>
          <p>
            <strong className="text-zinc-200">Cummerbund Style</strong> — Elastic is lighter and moves with you. MOLLE cummerbunds let you mount pouches but add bulk.
          </p>
          <p>
            <strong className="text-zinc-200">Modularity</strong> — Can you add placards, back panels, side plates later? Some carriers are complete systems; others are closed ecosystems.
          </p>
        </div>
      </section>

      {/* Carriers */}
      <section className="space-y-8 mb-14">
        <h2 className="font-heading text-xl font-bold text-zinc-100 mb-2">The Carriers</h2>
        {carriers.map((c) => (
          <CarrierCard key={c.id} carrier={c} />
        ))}
      </section>

      {/* How to Choose */}
      <section className="mb-14">
        <h2 className="font-heading text-xl font-bold text-zinc-100 mb-4">How to Choose</h2>
        <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden">
          {[
            { need: 'You want the best, period', pick: 'Crye JPC 2.0', anchor: 'crye-jpc-2' },
            { need: 'You want concealable under clothing', pick: 'Ferro Slickster', anchor: 'ferro-slickster' },
            { need: 'You want quality but have a budget', pick: 'Defense Mechanisms MEPC', anchor: 'dm-mepc' },
            { need: 'You\'re just getting started', pick: 'Condor Sentry (then upgrade)', anchor: 'condor-sentry' },
            { need: 'You want ultimate modularity', pick: 'Spiritus LV-119', anchor: 'spiritus-lv119' },
            { need: 'You\'re carrying heavy loads all day', pick: 'Shellback Banshee Elite 2.0', anchor: 'shellback-banshee' },
          ].map((row, i) => (
            <a
              key={i}
              href={`#${row.anchor}`}
              className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/30 last:border-0 hover:bg-zinc-800/20 transition-colors group"
            >
              <span className="text-sm text-zinc-400">{row.need}</span>
              <span className="text-sm text-brand-amber font-semibold group-hover:text-brand-amber-light transition-colors">
                {row.pick} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="font-heading text-xl font-bold text-zinc-100 mb-4">Common Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Can I use steel plates in any carrier?',
              a: 'Technically yes, but steel plates are heavier and can damage lighter carriers over time. Most carriers are designed for ceramic or UHMWPE plates.',
            },
            {
              q: 'What size do I need?',
              a: 'Carrier size = plate size, NOT your body or shirt size. If you have 10×12 plates, get a medium carrier. Always check the manufacturer\'s size chart.',
            },
            {
              q: 'Do I need side plates?',
              a: 'For most civilian uses, no. Side plates add weight and bulk. Focus on good front and back coverage first.',
            },
            {
              q: 'Minimalist vs. full-featured?',
              a: 'Start minimal. You can always add pouches and accessories. It\'s harder to strip down a bulky carrier.',
            },
          ].map((faq, i) => (
            <div key={i} className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/40">
              <h3 className="font-heading font-semibold text-zinc-200 text-sm mb-1.5">{faq.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Line */}
      <section className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/60 mb-10">
        <h2 className="font-heading text-xl font-bold text-zinc-100 mb-3">Bottom Line</h2>
        <p className="text-[15px] text-zinc-400 leading-relaxed mb-3">
          For most prepared citizens, the <strong className="text-zinc-200">Crye JPC 2.0</strong> or <strong className="text-zinc-200">Ferro Slickster</strong> will serve you well for years. If you're budget-conscious, the <strong className="text-zinc-200">Defense Mechanisms MEPC</strong> offers serious value.
        </p>
        <p className="text-[15px] text-zinc-400 leading-relaxed">
          Don't overthink it. Pick one that fits your plates, train with it, and upgrade accessories as you learn what you actually need.
        </p>
      </section>

      {/* Disclaimer */}
      <p className="text-xs text-zinc-600 text-center">
        Prices current as of January 2026. We may earn affiliate commission from links on this page.
      </p>
    </article>
  )
}
