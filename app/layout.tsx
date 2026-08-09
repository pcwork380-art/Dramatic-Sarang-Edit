import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Dramatic Sarang Edit | Korean Style Video Edits',
    template: '%s | Dramatic Sarang Edit',
  },
  description: 'Emotional • Dramatic • Korean Style Video Edits. Follow Dramatic Sarang Edit for daily emotional edits and new videos.',
  keywords: ['Dramatic Sarang Edit', 'Korean Drama Edits', 'K-Drama', 'Emotional Edits', 'Video Edits', 'Facebook Video Edits'],
  openGraph: {
    title: 'Dramatic Sarang Edit',
    description: 'Emotional • Dramatic • Korean Style Video Edits.',
    url: 'http://localhost:3000',
    siteName: 'Dramatic Sarang Edit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dramatic Sarang Edit',
    description: 'Emotional • Dramatic • Korean Style Video Edits.',
  },
  alternates: {
    canonical: 'http://localhost:3000',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className="bg-dark text-white selection:bg-primary selection:text-white" suppressHydrationWarning>
        
        {children}
      </body>
    </html>
  );
}
