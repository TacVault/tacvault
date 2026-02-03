'use client';

import { useState } from 'react';

interface PriceAlertButtonProps {
  productName: string;
  productSlug: string;
  category: string;
  currentPriceLow?: number;
  currentPriceHigh?: number;
}

export default function PriceAlertButton({
  productName,
  productSlug,
  category,
  currentPriceLow,
  currentPriceHigh,
}: PriceAlertButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/price-alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          productName,
          productSlug,
          category,
          currentPriceLow,
          currentPriceHigh,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  // Success state
  if (status === 'success') {
    return (
      <div className="mt-4 p-4 rounded-lg bg-[#121416] border border-[#4a9c6d]/30">
        <div className="flex items-center gap-2 text-[#4a9c6d]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold text-sm">You&apos;re on the list</span>
        </div>
        <p className="text-xs text-[#8b939c] mt-1">
          We&apos;ll email you when {productName} drops in price.
        </p>
      </div>
    );
  }

  // Collapsed state - just the button
  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 
                   bg-[#121416] border border-[#1e2124] rounded-lg
                   text-[#a8b2bc] text-sm font-semibold
                   hover:border-[#5c6370] hover:bg-[#181a1d]
                   transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        Track price — alerts coming soon
      </button>
    );
  }

  // Expanded state - email form
  return (
    <div className="mt-4 p-4 rounded-lg bg-[#121416] border border-[#1e2124]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-[#e8eaed]">
          Get notified when price drops
        </span>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-[#555a61] hover:text-[#8b939c] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 bg-[#08090a] border border-[#2a2d31] rounded-md
                     text-[#e8eaed] text-sm placeholder-[#555a61]
                     focus:outline-none focus:border-[#5c6370]
                     transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-gradient-to-r from-[#5c6370] to-[#7a8290]
                     border border-[#7a8290] rounded-md
                     text-[#e8eaed] text-sm font-semibold
                     hover:from-[#7a8290] hover:to-[#a8b2bc]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200"
        >
          {status === 'loading' ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            'Notify Me'
          )}
        </button>
      </form>
      
      {status === 'error' && (
        <p className="mt-2 text-xs text-[#9c4a4a]">{errorMessage}</p>
      )}
      
      <p className="mt-2 text-xs text-[#555a61]">
        Free alerts. Unsubscribe anytime. No spam.
      </p>
    </div>
  );
}