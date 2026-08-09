import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const r = await fetch('https://www.facebook.com/dramaticsarangedit11', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    
    if (!r.ok) {
      console.warn('Failed to fetch Facebook page, using fallback');
      return NextResponse.json({ followers: "1.1K" });
    }
    
    const text = await r.text();
    const match = text.match(/"text":"([0-9.,KkMm]+)\s+followers"/i);
    
    let followers = "1.1K"; // fallback
    if (match && match[1]) {
      followers = match[1];
    }
    
    return NextResponse.json({ followers });
  } catch (error) {
    console.error('Error fetching followers:', error);
    return NextResponse.json({ followers: "1.1K" }); // fallback
  }
}
