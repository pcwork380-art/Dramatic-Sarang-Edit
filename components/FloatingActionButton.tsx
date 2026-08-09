'use client';

import { Facebook } from 'lucide-react';

export function FloatingActionButton() {
  return (
    <a
      href="https://www.facebook.com/dramaticsarangedit11"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#1877F2] text-white rounded-full shadow-[0_0_20px_rgba(24,119,242,0.4)] hover:bg-[#166fe5] hover:scale-110 transition-transform"
      aria-label="Follow us on Facebook"
    >
      <Facebook size={28} />
    </a>
  );
}
