'use client';

import { useMemo, useState } from 'react';
import { categories as allCategories } from '@/lib/services';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryNav from '@/components/CategoryNav';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { SearchX } from 'lucide-react';

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCategories;
    return allCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.host.toLowerCase().includes(q) ||
            item.url.toLowerCase().includes(q) ||
            cat.label.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const totalResults = filteredCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <main className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="sm:max-w-md sm:flex-1">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <CategoryNav categories={allCategories} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-10 px-5 py-10 sm:px-8">
        {totalResults === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-line py-16 text-center">
            <SearchX size={28} className="text-muted" />
            <p className="text-sm text-ink">
              Tidak ada layanan yang cocok dengan &ldquo;{query}&rdquo;
            </p>
            <p className="text-xs text-muted">
              Coba kata kunci lain, atau tekan Esc untuk menghapus pencarian.
            </p>
          </div>
        ) : (
          filteredCategories.map((cat) => <CategorySection key={cat.id} category={cat} />)
        )}
      </div>

      <Footer />
    </main>
  );
}