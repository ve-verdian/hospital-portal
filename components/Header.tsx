'use client';

import { useEffect, useState } from 'react';
import { Wifi } from 'lucide-react';

function useJakartaClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return now;
}

export default function Header() {
  const now = useJakartaClock();

  const timeLabel = now
    ? new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
      }).format(now)
    : '--:--';

  const dateLabel = now
    ? new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      }).format(now)
    : '';

  return (
    <header className="relative overflow-hidden bg-brawijaya-gradient">
      {/* soft radial highlight for depth on the gradient band */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_26rem_at_15%_-20%,rgba(255,255,255,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white font-display text-sm font-bold text-brawijaya-purple shadow-card">
              BHT
            </div>
            <div>
              <h1 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Brawijaya Hospital Tangerang
              </h1>
              <p className="mt-1 text-sm text-white/85">
                Portal Layanan Internal — akses cepat tanpa perlu hafal alamat IP
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 font-mono text-xs text-white/90">
            <span className="capitalize">{dateLabel ? `${dateLabel} · ` : ''}{timeLabel} WIB</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] backdrop-blur-sm">
              <Wifi size={12} className="text-white" />
              Perlu jaringan internal / VPN
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
