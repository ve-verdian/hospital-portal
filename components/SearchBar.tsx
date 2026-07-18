'use client';

import { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && target === inputRef.current) {
        onChange('');
        inputRef.current?.blur();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onChange]);

  return (
    <div className="relative">
      <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari layanan — GLPI, Nextcloud, Grafana..."
        className="w-full rounded-lg border border-line bg-surface py-2.5 pl-10 pr-14 text-sm text-ink placeholder:text-muted/70 focus:border-brawijaya-pink/60"
      />
      <kbd className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rounded border border-line bg-canvas px-1.5 py-0.5 font-mono text-[10px] text-muted">
        /
      </kbd>
    </div>
  );
}