import type { Metadata } from 'next';
import './globals.css';

// Ganti dengan domain final kalau nanti pindah dari *.vercel.app ke domain lain —
// metadataBase WAJIB URL absolut supaya og:image bisa di-fetch oleh
// WhatsApp/Telegram/dll (mereka tidak resolve path relatif).
const siteUrl = 'https://portal.brawijayahospitaltangerang.com';
const title = 'Brawijaya Hospital Tangerang — Portal Layanan Internal';
const description =
  'Direktori pusat untuk mengakses layanan internal Brawijaya Hospital Tangerang: File Sharing, IT Service, Sistem Rumah Sakit';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Portal BHT',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-body text-ink antialiased min-h-screen">{children}</body>
    </html>
  );
}
