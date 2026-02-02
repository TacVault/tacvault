import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TacVault — Build Your Loadout. Find the Best Price.',
  description: 'Compare tactical gear, check compatibility, and find the best prices. PCPartPicker for tactical gear.',
  metadataBase: new URL('https://tacvault.io'),
  openGraph: {
    title: 'TacVault — Build Your Loadout. Find the Best Price.',
    description: 'Compare tactical gear, check compatibility, and find the best prices.',
    url: 'https://tacvault.io',
    siteName: 'TacVault',
    type: 'website',
  },
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-brand-amber rounded-md flex items-center justify-center group-hover:bg-brand-amber-light transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span className="font-heading font-bold text-lg text-zinc-100 tracking-tight">
            TAC<span className="text-brand-amber">VAULT</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a href="/guides" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors font-medium">
            Guides
          </a>
          <a
            href="#alerts"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-brand-amber/10 text-brand-amber text-sm font-semibold rounded-lg hover:bg-brand-amber/20 transition-colors border border-brand-amber/20"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            Deal Alerts
          </a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-brand-amber rounded-md flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-zinc-300 tracking-tight">
                TAC<span className="text-brand-amber">VAULT</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs">
              Build your loadout. Check compatibility. Find the best price.
            </p>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <h4 className="font-heading font-semibold text-zinc-400 mb-3 text-xs uppercase tracking-wider">Guides</h4>
              <ul className="space-y-2">
                <li><a href="/guides/best-plate-carriers-2026" className="text-zinc-500 hover:text-brand-amber transition-colors">Plate Carriers</a></li>
                <li><span className="text-zinc-600">Red Dots — soon</span></li>
                <li><span className="text-zinc-600">IFAKs — soon</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-zinc-400 mb-3 text-xs uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-500 hover:text-brand-amber transition-colors">About</a></li>
                <li><a href="https://reddit.com/r/tacticalgear" className="text-zinc-500 hover:text-brand-amber transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © 2026 TacVault. We may earn affiliate commission from links on this site.
          </p>
          <p className="text-xs text-zinc-600">
            Prices and availability subject to change.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
