import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TacVault — Build Your Loadout. Find the Best Price.',
  description: 'Compare tactical gear, check compatibility, and stop wasting money on stuff that doesn\'t work together. Like PCPartPicker, but for your kit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Urban camo background */}
        <div className="camo-bg" />
        
        {/* Grain overlay */}
        <div className="grain" />
        
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 border-b border-[#1e2124] bg-[#08090a]/85 backdrop-blur-xl">
            <div className="max-w-container mx-auto px-6 h-[60px] flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 no-underline">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gunmetal to-silver flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/15 to-transparent -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rotate-45" />
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#08090a" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="relative z-10"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="font-tactical font-bold text-xl tracking-[2px] text-text-primary">
                  TAC<span className="text-gradient">VAULT</span>
                </div>
              </Link>

              {/* Nav Links */}
              <div className="flex items-center gap-6">
                <Link 
                  href="/guides" 
                  className="font-tactical font-semibold text-sm tracking-[1.5px] uppercase text-text-secondary hover:text-silver-light transition-colors no-underline hidden sm:block"
                >
                  Guides
                </Link>
                <Link 
  href="/products" 
  className="font-tactical font-semibold text-sm tracking-[1.5px] uppercase text-text-secondary hover:text-silver-light transition-colors no-underline hidden sm:block"
>
  Products
</Link>
                <Link 
                  href="#alerts" 
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border-light rounded-md font-tactical font-semibold text-[13px] tracking-[1.5px] uppercase text-silver hover:border-gunmetal-light hover:bg-[rgba(139,157,170,0.15)] transition-all no-underline"
                >
                  <svg 
                    width="13" 
                    height="13" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                  Deal Alerts
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[#1e2124]">
            <div className="max-w-container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
              {/* Brand */}
              <div>
                <Link href="/" className="flex items-center gap-2.5 no-underline">
                  <div className="w-7 h-7 rounded-md bg-gradient-to-br from-gunmetal to-silver flex items-center justify-center">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#08090a" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="font-tactical font-bold text-base tracking-[2px] text-text-primary">
                    TAC<span className="text-gradient">VAULT</span>
                  </div>
                </Link>
                <p className="text-[13px] text-text-muted max-w-[260px] leading-relaxed mt-3">
                  Build your loadout. Check compatibility. Find the best price.
                </p>
              </div>

              {/* Footer Columns */}
              <div className="flex gap-16">
                <div>
                  <h4 className="font-tactical font-semibold text-[11px] tracking-[2.5px] uppercase text-text-muted mb-3">
                    Guides
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/guides/best-plate-carriers-2026" className="text-sm text-text-secondary hover:text-silver-light transition-colors no-underline">
                        Plate Carriers
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/best-red-dots-under-300" className="text-sm text-text-secondary hover:text-silver-light transition-colors no-underline">
                        Red Dots
                      </Link>
                    </li>
                    <li>
                      <span className="text-sm text-text-muted">IFAKs — soon</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-tactical font-semibold text-[11px] tracking-[2.5px] uppercase text-text-muted mb-3">
                    Company
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-sm text-text-secondary hover:text-silver-light transition-colors no-underline">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/community" className="text-sm text-text-secondary hover:text-silver-light transition-colors no-underline">
                        Community
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="max-w-container mx-auto px-6 py-4 border-t border-[#1e2124] flex flex-col sm:flex-row justify-between text-xs text-text-muted gap-2">
              <span>© 2026 TacVault. We may earn affiliate commission from links on this site.</span>
              <span>Prices and availability subject to change.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}