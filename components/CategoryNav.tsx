import type { ServiceCategory } from '@/lib/services';

export default function CategoryNav({ categories }: { categories: ServiceCategory[] }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Lompat ke kategori">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:text-ink"
          style={{ borderColor: `${cat.color}40` }}
        >
          <span
            className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
            style={{ backgroundColor: cat.color }}
          />
          {cat.label}
          <span className="ml-1.5 text-muted/60">{cat.items.length}</span>
        </a>
      ))}
    </nav>
  );
}