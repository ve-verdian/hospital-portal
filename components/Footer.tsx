export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex flex-col items-center gap-2 border-t border-line pt-6 text-center text-xs text-muted">
        <p>IT Department — Brawijaya Hospital Tangerang. Tautan hanya dapat diakses dari jaringan internal atau VPN.</p>
        <p className="font-mono">Kelola daftar layanan di <code className="text-ink/70">lib/services.ts</code></p>
      </div>
    </footer>
  );
}