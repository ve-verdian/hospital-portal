import type { ServiceItem } from '@/lib/services';
import StatusDot from './StatusDot';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({
  item,
  accentColor,
}: {
  item: ServiceItem;
  accentColor: string;
}) {
  const Icon = item.icon;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-start gap-3.5 rounded-lg border border-line bg-surface p-4 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:bg-surface-hover hover:shadow-lg"
      style={{ borderLeftWidth: '3px', borderLeftColor: accentColor }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
        style={{ backgroundColor: `${accentColor}17`, color: accentColor }}
      >
        <Icon size={19} strokeWidth={2} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate font-display text-[15px] font-semibold text-ink">
            {item.name}
          </h3>
          <ArrowUpRight
            size={15}
            className="shrink-0 text-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            style={{ color: accentColor }}
          />
        </div>
        <p className="mt-0.5 truncate text-[13px] text-muted">{item.description}</p>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <code className="truncate font-mono text-[11px] text-muted/80">{item.host}</code>
          <StatusDot status={item.status} />
        </div>
      </div>
    </a>
  );
}