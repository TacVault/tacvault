export default function ProductsIndex() {
  const carriers = [
    { name: "Crye Precision JPC 2.0", price: "$250–$290", badge: "Best Overall", href: "/products/crye-precision/jpc-2-0" },
    { name: "Ferro Concepts Slickster", price: "$165", badge: "Best Low-Profile", href: "/products/ferro-concepts/slickster" },
    { name: "Defense Mechanisms MEPC", price: "$155–$175", badge: "Best Value", href: "/products/defense-mechanisms/mepc" },
    { name: "T.REX Arms AC1.5", price: "$240–$250", badge: "Best Minimalist Overt", href: "/products/trex-arms/ac1-5" },
    { name: "Spiritus Systems LV-120", price: "$499.95", badge: "Best Modular", href: "/products/spiritus-systems/lv-120" },
    { name: "Condor Sentry", price: "$50–$65", badge: "Best Budget", href: "/products/condor/sentry" },
    { name: "Shellback Banshee Elite 2.0", price: "$320–$350", badge: "Best for Heavy Loads", href: "/products/shellback-tactical/banshee-elite-2-0" },
  ];

  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-rajdhani font-bold text-4xl mb-2">Plate Carriers</h1>
        <p className="text-[#8b939c] mb-8">7 carriers compared — specs verified against manufacturer websites</p>
        
        <div className="space-y-4">
          {carriers.map((carrier) => (
            <a 
              key={carrier.href}
              href={carrier.href}
              className="block bg-[#121416] border border-[#1e2124] rounded-lg p-4 hover:border-[#3a3d42] transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-[#a8b2bc] border border-[#2a2d31] rounded px-2 py-0.5 mb-2 inline-block">{carrier.badge}</span>
                  <h2 className="font-rajdhani font-bold text-xl text-[#e8eaed]">{carrier.name}</h2>
                </div>
                <span className="font-rajdhani text-xl text-[#a8b2bc]">{carrier.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}