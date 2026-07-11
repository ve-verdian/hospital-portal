// =============================================================================
// DAFTAR LAYANAN INTERNAL — edit file ini untuk menambah/mengubah service.
// =============================================================================
// PENTING (keamanan):
//   Hostname/IP di bawah ini hanyalah CONTOH placeholder (pola *.rs.lan).
//   Ganti dengan hostname/IP internal Anda yang sebenarnya.
//   Karena repo ini kemungkinan akan di-deploy ke Vercel/GitHub Pages
//   (bisa diakses publik di internet), pertimbangkan:
//     1. Jadikan repository GitHub PRIVATE, atau
//     2. Gunakan Vercel Deployment Protection / Password Protection, atau
//     3. Taruh portal ini juga di belakang Authelia (SSO) seperti service lain, atau
//     4. Hindari menaruh IP mentah di sini — pakai hostname internal (*.rs.lan)
//        yang hanya resolve lewat DNS internal/VPN, bukan IP publik yang bocor topologi.
//   Portal ini hanya berisi TAUTAN, bukan data pasien — tapi hostname/topologi
//   jaringan tetap termasuk informasi yang sebaiknya tidak diekspos bebas.
// =============================================================================

import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
  HardDrive,
  Ticket,
  LifeBuoy,
  ScanLine,
  ClipboardList,
  Printer,
  LineChart,
  Flame,
  HeartPulse,
  Container,
  ShieldCheck,
  Server,
} from 'lucide-react';

export type ServiceStatus = 'online' | 'maintenance' | 'offline';

export interface ServiceItem {
  name: string;
  description: string;
  url: string;
  host: string;
  icon: LucideIcon;
  status?: ServiceStatus;
}

export interface ServiceCategory {
  id: string;
  label: string;
  accent: 'pink' | 'purple';
  items: ServiceItem[];
}

export const categories: ServiceCategory[] = [
  {
    id: 'file-sharing',
    label: 'File Sharing',
    accent: 'pink',
    items: [
      {
        name: 'Nextcloud',
        description: 'Penyimpanan & berbagi dokumen antar unit',
        url: 'http://192.168.12.29:8081',
        host: 'http://nextcloud.lan',
        icon: Cloud,
        status: 'online',
      },
      {
        name: 'Seafile',
        description: 'Sinkronisasi file tim & versi dokumen',
        url: 'http://192.168.12.6:8080',
        host: 'http://seafile.lan',
        icon: HardDrive,
        status: 'online',
      },
    ],
  },
  {
    id: 'it-service',
    label: 'IT Service',
    accent: 'purple',
    items: [
      {
        name: 'GLPI',
        description: 'Tiket bantuan & inventaris aset IT',
        url: 'http://192.168.12.6',
        host: 'http://glpi.lan',
        icon: Ticket,
        status: 'online',
      },
      {
        name: 'HESK',
        description: 'Helpdesk pengaduan pengguna',
        url: 'http://192.168.12.29',
        host: 'http://hesk.lan',
        icon: LifeBuoy,
        status: 'online',
      },
    ],
  },
  {
    id: 'hospital',
    label: 'Hospital',
    accent: 'pink',
    items: [
      {
        name: 'HIS',
        description: 'Sistem informasi rumah sakit (teraMedik)',
        url: 'http://192.168.105.2',
        host: 'http://teramedik.lan',
        icon: ClipboardList,
        status: 'online',
      },
      {
        name: 'PACS',
        description: 'Arsip & viewer citra radiologi (DICOM)',
        url: 'http://192.168.105.8:8042',
        host: 'https://orthanc.rs.lan',
        icon: ScanLine,
        status: 'online',
      },
      {
        name: 'DCM Router',
        description: 'Monitoring dicom router status',
        url: 'http://192.168.105.8:8080/dashboard',
        host: 'http://dcmrouter.lan',
        icon: Printer,
        status: 'online',
      },
    ],
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    accent: 'purple',
    items: [
      {
        name: 'Grafana',
        description: 'Dashboard metrik api BPJS',
        url: 'http://192.168.12.24:3000/d/bpjs-monitoring-v4/monitoring-api-bpjs?kiosk',
        host: 'http://grafana.lan',
        icon: LineChart,
        status: 'online',
      },
      {
        name: 'Prometheus',
        description: 'Time-series metrics store',
        url: 'http://192.168.12.24:9090/service-discovery',
        host: 'http://prometheus.lan',
        icon: Flame,
        status: 'online',
      },
      {
        name: 'Uptime Kuma',
        description: 'Status uptime seluruh service',
        url: 'http://192.168.12.5:3001',
        host: 'http://kuma.lan',
        icon: HeartPulse,
        status: 'online',
      },
    ],
  },
  {
    id: 'administrator',
    label: 'Administrator',
    accent: 'pink',
    items: [
      {
        name: 'Portainer',
        description: 'Manajemen container Docker',
        url: 'http://192.168.12.5:9000',
        host: 'http://portainer.lan',
        icon: Container,
        status: 'online',
      },
      {
        name: 'Traefik',
        description: 'Dashboard reverse proxy',
        url: 'https://traefik.rs.lan',
        host: 'https://traefik.rs.lan',
        icon: ShieldCheck,
        status: 'online',
      },
      {
        name: 'Komodo',
        description: 'Deploy Manage Containers and Compose Stacks',
        url: 'http://192.168.12.5:9120',
        host: 'http://komodo.lan',
        icon: Server,
        status: 'online',
      },
    ],
  },
];
