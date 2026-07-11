import type { ServiceStatus } from '@/lib/services';

const STATUS_CONFIG: Record<ServiceStatus, { color: string; label: string; pulse: boolean }> = {
  online: { color: 'bg-signal-online', label: 'Online', pulse: false },
  maintenance: { color: 'bg-signal-maintenance', label: 'Maintenance', pulse: true },
  offline: { color: 'bg-signal-offline', label: 'Offline', pulse: false },
};

export default function StatusDot({ status = 'online' }: { status?: ServiceStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className="inline-flex items-center gap-1.5" title={cfg.label}>
      <span className="relative flex h-2 w-2">
        {cfg.pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${cfg.color} opacity-60`}
          />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${cfg.color}`} />
      </span>
      <span className="text-[10px] uppercase tracking-wider text-muted font-mono">{cfg.label}</span>
    </span>
  );
}
