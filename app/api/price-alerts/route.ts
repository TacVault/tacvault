import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Supabase client
// Note: Add these to your .env.local file:
// NEXT_PUBLIC_SUPABASE_URL=your-project-url
// SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (NOT the anon key for writes)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      email,
      productName,
      productSlug,
      category,
      currentPriceLow,
      currentPriceHigh,
      targetPrice,
      sourcePage,
    } = body;

    // Validate required fields
    if (!email || !productName || !productSlug || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert price alert subscription
    const { data: alertData, error: alertError } = await supabase
      .from('price_alerts')
      .insert({
        email: email.toLowerCase().trim(),
        product_name: productName,
        product_slug: productSlug,
        category: category,
        current_price_low: currentPriceLow || null,
        current_price_high: currentPriceHigh || null,
        target_price: targetPrice || null,
        notify_any_drop: true,
        source_page: sourcePage || null,
      })
      .select()
      .single();

    if (alertError) {
      console.error('Error inserting price alert:', alertError);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    // Also add to general email subscribers list (if not exists)
    const { error: subscriberError } = await supabase
      .from('email_subscribers')
      .upsert(
        {
          email: email.toLowerCase().trim(),
          source: 'price_alert',
        },
        {
          onConflict: 'email',
          ignoreDuplicates: true,
        }
      );

    if (subscriberError) {
      // Log but don't fail - the main subscription worked
      console.error('Error adding to subscribers:', subscriberError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Subscribed to price alerts',
        data: { id: alertData.id }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Price alert API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check subscription status
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const productSlug = searchParams.get('product');

  if (!email || !productSlug) {
    return NextResponse.json(
      { error: 'Email and product required' },
      { status: 400 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from('price_alerts')
    .select('id, status, subscribed_at')
    .eq('email', email.toLowerCase().trim())
    .eq('product_slug', productSlug)
    .eq('status', 'active')
    .single();

  if (error || !data) {
    return NextResponse.json({ subscribed: false });
  }

  return NextResponse.json({ 
    subscribed: true,
    subscribedAt: data.subscribed_at 
  });
}