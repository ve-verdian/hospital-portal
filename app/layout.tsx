import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RS Brawijaya Tangerang — Portal Layanan Internal',
  description:
    'Direktori pusat untuk mengakses layanan internal RS Brawijaya Tangerang: file sharing, IT service, sistem rumah sakit, monitoring, dan administrator.',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-body text-ink antialiased min-h-screen">{children}</body>
    </html>
  );
}
