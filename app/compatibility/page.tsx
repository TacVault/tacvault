'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../supabase.js';

interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  url_slug: string;
  has_product_page: boolean;
  status: string;
}

interface Evidence {
  id: string;
  source_type: string;
  source_name: string;
  source_url: string;
  short_quote: string;
  date_captured: string;
}

interface CompatEdge {
  id: string;
  from_product_id: string;
  to_product_id: string;
  relationship_type: string;
  status: string;
  notes: string;
  requirements: string;
  last_verified_date: string;
}

interface CompatResult {
  product: Product;
  edge: CompatEdge;
  evidenceList: Evidence[];
}

interface StatusInfo {
  label: string;
  color: string;
  bg: string;
  border: string;
  description: string;
}

interface RelationshipLabel {
  label: string;
  icon: string;
}

const categories = [
  { id: 'plate-carriers', name: 'Plate Carriers' },
  { id: 'placards', name: 'Placards & Chest Rigs' },
  { id: 'cummerbunds', name: 'Cummerbunds' },
  { id: 'back-panels', name: 'Back Panels (Zip-On)' },
  { id: 'plates', name: 'Armor Plates' },
];

const statusInfo: Record<string, StatusInfo> = {
  OFFICIAL: { label: 'Official', color: 'text-[#4a9c6d]', bg: 'bg-[rgba(74,156,109,0.1)]', border: 'border-[rgba(74,156,109,0.3)]', description: 'Confirmed by manufacturer documentation' },
  VERIFIED: { label: 'Verified', color: 'text-[#5b9fd4]', bg: 'bg-[rgba(91,159,212,0.1)]', border: 'border-[rgba(91,159,212,0.3)]', description: 'Confirmed by 3+ independent sources' },
  LIKELY: { label: 'Likely', color: 'text-[#d4a55b]', bg: 'bg-[rgba(212,165,91,0.1)]', border: 'border-[rgba(212,165,91,0.3)]', description: 'Dimensional match, not yet confirmed' },
  UNVERIFIED: { label: 'Unverified', color: 'text-[#8b939c]', bg: 'bg-[rgba(139,147,156,0.1)]', border: 'border-[rgba(139,147,156,0.3)]', description: 'Single report, needs confirmation' },
};

const relationshipLabels: Record<string, RelationshipLabel> = {
  WORKS_WITH: { label: 'Compatible', icon: '✓' },
  REQUIRES_ADAPTER: { label: 'Requires Adapter', icon: '⚡' },
  CONFLICTS: { label: 'Not Compatible', icon: '✗' },
};

export default function CompatibilityPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [targetCategory, setTargetCategory] = useState('');
  const [expandedEvidence, setExpandedEvidence] = useState<string | null>(null);
  const [showStatusIndex, setShowStatusIndex] = useState(false);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [compatResults, setCompatResults] = useState<CompatResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCategory) {
      setProducts([]);
      return;
    }
    
    async function loadProducts() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('category', selectedCategory)
        .eq('status', 'active')
        .order('brand');
      
      setProducts(data || []);
    }
    
    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedProduct || !targetCategory) {
      setCompatResults([]);
      return;
    }
    
    async function loadCompatibility() {
      setLoading(true);
      
      const { data: edges } = await supabase
        .from('compatibility_edges')
        .select('*')
        .eq('from_product_id', selectedProduct);
      
      if (!edges || edges.length === 0) {
        setCompatResults([]);
        setLoading(false);
        return;
      }
      
      const toProductIds = edges.map((e: CompatEdge) => e.to_product_id);
      const { data: targetProducts } = await supabase
        .from('products')
        .select('*')
        .in('id', toProductIds)
        .eq('category', targetCategory)
        .eq('status', 'active');
      
      if (!targetProducts || targetProducts.length === 0) {
        setCompatResults([]);
        setLoading(false);
        return;
      }
      
      const edgeIds = edges.map((e: CompatEdge) => e.id);
      const { data: evidenceLinks } = await supabase
        .from('compatibility_evidence')
        .select('compatibility_edge_id, evidence_id')
        .in('compatibility_edge_id', edgeIds);
      
      const evidenceIds = Array.from(new Set((evidenceLinks || []).map((l: { evidence_id: string }) => l.evidence_id)));
      
      let evidenceData: Evidence[] = [];
      if (evidenceIds.length > 0) {
        const { data } = await supabase
          .from('evidence')
          .select('*')
          .in('id', evidenceIds);
        evidenceData = data || [];
      }
      
      const results: CompatResult[] = targetProducts.map((product: Product) => {
        const edge = edges.find((e: CompatEdge) => e.to_product_id === product.id);
        const edgeEvidenceIds = (evidenceLinks || [])
          .filter((l: { compatibility_edge_id: string }) => l.compatibility_edge_id === edge?.id)
          .map((l: { evidence_id: string }) => l.evidence_id);
        const evidenceList = evidenceData.filter((e: Evidence) => edgeEvidenceIds.includes(e.id));
        
        return { product, edge: edge as CompatEdge, evidenceList };
      });
      
      const statusOrder: Record<string, number> = { OFFICIAL: 0, VERIFIED: 1, LIKELY: 2, UNVERIFIED: 3 };
      const relationOrder: Record<string, number> = { WORKS_WITH: 0, REQUIRES_ADAPTER: 1, CONFLICTS: 2 };
      results.sort((a, b) => {
        const statusDiff = (statusOrder[a.edge.status] || 4) - (statusOrder[b.edge.status] || 4);
        if (statusDiff !== 0) return statusDiff;
        return (relationOrder[a.edge.relationship_type] || 3) - (relationOrder[b.edge.relationship_type] || 3);
      });
      
      setCompatResults(results);
      setLoading(false);
    }
    
    loadCompatibility();
  }, [selectedProduct, targetCategory]);

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <main className="min-h-screen bg-[#08090a] text-[#e8eaed]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="font-rajdhani font-bold text-4xl mb-2">Compatibility Finder</h1>
          <p className="text-[#8b939c]">Find gear that works with what you own. Every compatibility claim is backed by evidence.</p>
        </div>

        <button onClick={() => setShowStatusIndex(!showStatusIndex)} className="mb-6 text-sm text-[#a8b2bc] hover:text-[#e8eaed] flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
          {showStatusIndex ? 'Hide' : 'Show'} Status Definitions
        </button>

        {showStatusIndex && (
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-6 mb-8">
            <h3 className="font-rajdhani font-bold text-lg mb-4 text-[#c8cfd7]">Compatibility Status Index</h3>
            <div className="space-y-3">
              {Object.entries(statusInfo).map(([key, info]) => (
                <div key={key} className="flex items-start gap-3">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded ${info.bg} ${info.color} ${info.border} border`}>{info.label}</span>
                  <span className="text-sm text-[#8b939c]">{info.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">What do you own?</h3>
              <div className="mb-4">
                <label className="block text-sm text-[#8b939c] mb-2">Category</label>
                <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setSelectedProduct(''); setTargetCategory(''); }} className="w-full bg-[#0e1011] border border-[#2a2d31] rounded-md px-4 py-3 text-[#e8eaed] focus:border-[#5c6370] focus:outline-none">
                  <option value="">Select category...</option>
                  {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#8b939c] mb-2">Product</label>
                <select value={selectedProduct} onChange={(e) => { setSelectedProduct(e.target.value); setTargetCategory(''); }} disabled={!selectedCategory} className="w-full bg-[#0e1011] border border-[#2a2d31] rounded-md px-4 py-3 text-[#e8eaed] focus:border-[#5c6370] focus:outline-none disabled:opacity-50">
                  <option value="">Select product...</option>
                  {products.map(product => <option key={product.id} value={product.id}>{product.brand} {product.name}</option>)}
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-4">What are you looking for?</h3>
              <div>
                <label className="block text-sm text-[#8b939c] mb-2">Category</label>
                <select value={targetCategory} onChange={(e) => setTargetCategory(e.target.value)} disabled={!selectedProduct} className="w-full bg-[#0e1011] border border-[#2a2d31] rounded-md px-4 py-3 text-[#e8eaed] focus:border-[#5c6370] focus:outline-none disabled:opacity-50">
                  <option value="">Select category...</option>
                  {categories.filter(c => c.id !== selectedCategory).map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {selectedProduct && targetCategory && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-rajdhani font-bold text-xl text-[#c8cfd7]">{categories.find(c => c.id === targetCategory)?.name} compatible with {selectedProductData?.brand} {selectedProductData?.name}</h2>
              <span className="text-sm text-[#8b939c]">{compatResults.length} result{compatResults.length !== 1 ? 's' : ''}</span>
            </div>
            
            {loading ? (
              <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-8 text-center">
                <p className="text-[#8b939c]">Loading...</p>
              </div>
            ) : compatResults.length === 0 ? (
              <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-8 text-center">
                <p className="text-[#8b939c]">No compatibility data found for this combination.</p>
                <p className="text-sm text-[#555a61] mt-2">We only show verified compatibility - if it is not here, we have not confirmed it yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {compatResults.map(({ product, edge, evidenceList }) => {
                  const status = statusInfo[edge.status];
                  const relationship = relationshipLabels[edge.relationship_type];
                  const isExpanded = expandedEvidence === edge.id;
                  const isConflict = edge.relationship_type === 'CONFLICTS';
                  return (
                    <div key={edge.id} className={`bg-[#121416] border rounded-lg overflow-hidden ${isConflict ? 'border-[rgba(156,74,74,0.3)]' : 'border-[#1e2124]'}`}>
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className={`px-2 py-0.5 text-xs font-semibold rounded ${status.bg} ${status.color} ${status.border} border`}>{status.label}</span>
                              <span className={`px-2 py-0.5 text-xs font-semibold rounded ${isConflict ? 'bg-[rgba(156,74,74,0.1)] text-[#9c4a4a] border border-[rgba(156,74,74,0.3)]' : edge.relationship_type === 'REQUIRES_ADAPTER' ? 'bg-[rgba(212,165,91,0.1)] text-[#d4a55b] border border-[rgba(212,165,91,0.3)]' : 'bg-[rgba(74,156,109,0.1)] text-[#4a9c6d] border border-[rgba(74,156,109,0.3)]'}`}>{relationship.icon} {relationship.label}</span>
                            </div>
                            <Link href={product.url_slug} className="font-rajdhani font-bold text-lg text-[#e8eaed] hover:text-[#a8b2bc] transition-colors">{product.brand} {product.name}</Link>
                            {edge.notes && <p className="text-sm text-[#8b939c] mt-1">{edge.notes}</p>}
                            {edge.requirements && <p className="text-sm text-[#d4a55b] mt-1">Requires: {edge.requirements}</p>}
                            <p className="text-xs text-[#555a61] mt-2">Last verified: {edge.last_verified_date}</p>
                          </div>
                          {product.has_product_page && (
                            <Link href={product.url_slug} className="px-3 py-1.5 bg-[rgba(139,157,170,0.08)] border border-[#2a2d31] rounded text-sm text-[#a8b2bc] hover:border-[#5c6370] transition-colors whitespace-nowrap">View Product</Link>
                          )}
                        </div>
                        {evidenceList.length > 0 && (
                          <button onClick={() => setExpandedEvidence(isExpanded ? null : edge.id)} className="mt-3 text-sm text-[#a8b2bc] hover:text-[#e8eaed] flex items-center gap-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}><polyline points="9 18 15 12 9 6" /></svg>
                            {evidenceList.length} source{evidenceList.length !== 1 ? 's' : ''} - {isExpanded ? 'Hide' : 'Show'} evidence
                          </button>
                        )}
                      </div>
                      {isExpanded && evidenceList.length > 0 && (
                        <div className="border-t border-[#1e2124] bg-[#0e1011] p-4">
                          <h4 className="font-rajdhani font-semibold text-sm uppercase tracking-wider text-[#555a61] mb-3">Evidence Sources</h4>
                          <div className="space-y-3">
                            {evidenceList.map(ev => (
                              <div key={ev.id} className="flex items-start gap-3">
                                <span className={`px-2 py-0.5 text-xs font-medium rounded ${ev.source_type === 'manufacturer' ? 'bg-[rgba(74,156,109,0.1)] text-[#4a9c6d]' : ev.source_type === 'community' ? 'bg-[rgba(91,159,212,0.1)] text-[#5b9fd4]' : 'bg-[rgba(139,147,156,0.1)] text-[#8b939c]'}`}>{ev.source_type}</span>
                                <div className="flex-1">
                                  <p className="text-sm text-[#e8eaed]">{ev.short_quote}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <a href={ev.source_url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#a8b2bc] hover:text-[#e8eaed]">{ev.source_name}</a>
                                    <span className="text-xs text-[#555a61]">Captured {ev.date_captured}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {!selectedProduct && (
          <div className="bg-[#121416] border border-[#1e2124] rounded-lg p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(139,157,170,0.08)] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c6370" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </div>
            <h3 className="font-rajdhani font-bold text-xl text-[#c8cfd7] mb-2">Start by selecting what you own</h3>
            <p className="text-sm text-[#8b939c] max-w-md mx-auto">Choose a category and product above to find compatible gear. We will show you what works, what does not, and the evidence behind each claim.</p>
          </div>
        )}

        <div className="mt-12 pt-6 border-t border-[#1e2124] text-xs text-[#555a61]">
          <p><strong>How this works:</strong> Every compatibility claim requires evidence. Official means manufacturer-confirmed. Verified requires 3+ independent sources. We show what we can prove - if something is not listed, we have not verified it yet.</p>
        </div>
      </div>
    </main>
  );
}