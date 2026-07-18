// =============================================================================
// DAFTAR LAYANAN INTERNAL — edit file ini untuk menambah/mengubah service.
// =============================================================================
// PENTING (keamanan):
//   File ini sekarang berisi hostname/IP internal RS Brawijaya Tangerang yang
//   sebenarnya. Karena repo ini kemungkinan di-deploy ke Vercel/GitHub Pages
//   (bisa diakses publik di internet), pertimbangkan:
//     1. Jadikan repository GitHub PRIVATE, atau
//     2. Gunakan Vercel Deployment Protection / Password Protection, atau
//     3. Taruh portal ini juga di belakang Authelia (SSO) seperti service lain.
//   Portal ini hanya berisi TAUTAN, bukan data pasien — tapi hostname/IP/topologi
//   jaringan tetap termasuk informasi yang sebaiknya tidak diekspos bebas ke publik.
// =============================================================================
//
// Setiap kategori punya warna aksen sendiri (field `color`), diambil dari
// gradasi antara pink (#B93074) dan ungu (#6A3FA0) brand RS Brawijaya —
// supaya tiap kategori mudah dibedakan sekilas, tapi tetap satu keluarga warna.

import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
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
  Activity,
  DoorOpen,
  Book,
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
  /** Warna aksen kategori (hex), dari gradasi pink -> ungu brand */
  color: string;
  items: ServiceItem[];
}

export const categories: ServiceCategory[] = [
  {
    id: 'file-sharing',
    label: 'File Sharing',
    color: '#B93074',
    items: [
      {
        name: 'Nextcloud',
        description: 'Penyimpanan & Berbagi Dokumen Antar Unit',
        url: 'https://nextcloud.brawijayahospitaltangerang.com',
        host: 'https://nextcloud.brawijayahospitaltangerang.com',
        icon: Cloud,
        status: 'online',
      },
      {
        name: 'Sidokar',
        description: 'Sistem Informasi Dokumen Akreditasi KARS',
        url: 'http://192.168.105.8',
        host: 'https://sidokar.brawijayahospitaltangerang.com',
        icon: Book,
        status: 'online',
      },
    ],
  },
  {
    id: 'it-service',
    label: 'IT Service',
    color: '#A9337D',
    items: [
      {
        name: 'GLPI',
        description: 'Tiket Bantuan & Inventaris Aset IT',
        url: 'http://192.168.12.6',
        host: 'http://glpi.lan',
        icon: Ticket,
        status: 'online',
      },
      {
        name: 'HESK',
        description: 'Helpdesk Pengaduan Pengguna',
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
    color: '#993686',
    items: [
      {
        name: 'HIS',
        description: 'Hospital Information System (teraMedik)',
        url: 'http://192.168.105.2',
        host: 'http://teramedik.lan',
        icon: ClipboardList,
        status: 'online',
      },
      {
        name: 'PACS',
        description: 'Arsip & Viewer Citra Radiologi (DICOM)',
        url: 'http://192.168.105.8:8042',
        host: 'https://orthanc.rs.lan',
        icon: ScanLine,
        status: 'online',
      },
      {
        name: 'DCM Router',
        description: 'Monitoring Dicom Router Status',
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
    color: '#8A398E',
    items: [
      {
        name: 'Zabbix',
        description: 'Enterprise-Class Network & Server Monitoring',
        url: 'http://192.168.12.24/zabbix',
        host: 'http://zabbix.lan',
        icon: Activity,
        status: 'online',
      },
      {
        name: 'Prometheus',
        description: 'Time-Series Metrics Store',
        url: 'http://prometheus.lan/service-discovery',
        host: 'http://prometheus.lan',
        icon: Flame,
        status: 'online',
      },
      {
        name: 'Grafana Docker',
        description: 'Dashboard Metrics API BPJS',
        url: 'http://192.168.12.24:3000/d/bpjs-monitoring-v4/monitoring-api-bpjs?kiosk',
        host: 'http://new-grafana.lan',
        icon: LineChart,
        status: 'online',
      },
      {
        name: 'Grafana non-Docker',
        description: 'Dashboard Metrics & Visualisasi Data',
        url: 'http://192.168.12.29:3000',
        host: 'http://grafana.lan',
        icon: LineChart,
        status: 'online',
      },
      {
        name: 'Uptime Kuma',
        description: 'Status Uptime Server',
        url: 'http://192.168.12.5:3001/status/server-monitoring',
        host: 'http://kuma.lan',
        icon: HeartPulse,
        status: 'online',
      },
      {
        name: 'Uptime Kuma',
        description: 'Status Uptime ISP',
        url: 'http://192.168.12.5:3001/status/isp-monitoring',
        host: 'http://kuma.lan',
        icon: HeartPulse,
        status: 'online',
      },
    ],
  },
  {
    id: 'administrator',
    label: 'Administrator',
    color: '#7A3C97',
    items: [
      {
        name: 'Traefik',
        description: 'Dashboard Reverse Proxy',
        url: 'https://traefik.rs.lan',
        host: 'https://traefik.rs.lan',
        icon: ShieldCheck,
        status: 'online',
      },
      {
        name: 'Portainer',
        description: 'Manajemen Container Docker',
        url: 'http://portainer.lan',
        host: 'http://portainer.lan',
        icon: Container,
        status: 'online',
      },
      {
        name: 'Komodo',
        description: 'Deploy Manage Containers & Compose Stacks',
        url: 'http://192.168.12.5:9120',
        host: 'http://komodo.lan',
        icon: Server,
        status: 'online',
      },
      {
        name: 'HikCentral AC',
        description: 'Management System for Hikvision Access Control',
        url: 'https://192.168.12.12:4433',
        host: 'https://192.168.12.12:4433',
        icon: DoorOpen,
        status: 'online',
      },
    ],
  },
  {
    id: 'proxmox',
    label: 'Proxmox VE',
    color: '#6A3FA0',
    items: [
      {
        name: 'SRV-PVE',
        description: 'Proxmox Virtual Environment Dashboard',
        url: 'https://srv-pve.lan/#v1:0:18:4:::::::',
        host: 'https://srv-pve.lan',
        icon: Server,
        status: 'online',
      },
      {
        name: 'SRV-BHT-PVE',
        description: 'Proxmox Virtual Environment Dashboard',
        url: 'https://srv-bht-pve.lan/#v1:0:18:4:::::::',
        host: 'https://srv-bht-pve.lan',
        icon: Server,
        status: 'online',
      },
      {
        name: 'SRV-PVE-NEW',
        description: 'Proxmox Virtual Environment Dashboard',
        url: 'https://srv-pve-new.lan/#v1:0:18:4:::::::',
        host: 'https://srv-pve-new.lan',
        icon: Server,
        status: 'online',
      },
    ],
  },
];