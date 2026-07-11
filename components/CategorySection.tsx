import type { ServiceCategory } from '@/lib/services';
import ServiceCard from './ServiceCard';

export default function CategorySection({ category }: { category: ServiceCategory }) {
  if (category.items.length === 0) return null;
  const accentColor = category.accent === 'pink' ? '#B93074' : '#6A3FA0';

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-3 flex items-center gap-3">
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink">
          {category.label}
        </h2>
        <span className="h-px flex-1" style={{ backgroundColor: `${accentColor}33` }} />
        <span className="font-mono text-[11px] text-muted">{category.items.length}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <ServiceCard key={item.name} item={item} accent={category.accent} />
        ))}
      </div>
    </section>
  );
}
