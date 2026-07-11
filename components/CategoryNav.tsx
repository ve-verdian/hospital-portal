import type { ServiceCategory } from '@/lib/services';

export default function CategoryNav({ categories }: { categories: ServiceCategory[] }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Lompat ke kategori">
      {categories.map((cat) => {
        const accentColor = cat.accent === 'pink' ? '#B93074' : '#6A3FA0';
        return (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:text-ink"
            style={{ borderColor: `${accentColor}40` }}
          >
            {cat.label}
            <span className="ml-1.5 text-muted/60">{cat.items.length}</span>
          </a>
        );
      })}
    </nav>
  );
}
