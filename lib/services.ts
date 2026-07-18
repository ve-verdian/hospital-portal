// =============================================================================
// DAFTAR LAYANAN INTERNAL (PORTAL STAF) — edit file ini untuk menambah/mengubah service.
// =============================================================================
// Portal ini KHUSUS untuk service yang dipakai staf umum (dokter, admin, perawat)
// sehari-hari. Service infrastruktur/ops (Monitoring, Administrator, Proxmox VE)
// SENGAJA tidak dimasukkan di sini — itu ada di portal ops terpisah yang cuma
// bisa diakses tim IT lewat jaringan internal (lihat folder hospital-portal-ops/).
//
// PENTING (keamanan):
//   File ini berisi hostname/IP internal RS Brawijaya Tangerang yang sebenarnya.
//   Karena repo ini di-deploy ke domain publik (portal.brawijayahospitaltangerang.com),
//   pertimbangkan:
//     1. Jadikan repository GitHub PRIVATE, atau
//     2. Gunakan Vercel Deployment Protection / Password Protection.
//   Portal ini hanya berisi TAUTAN, bukan data pasien — tapi hostname/IP/topologi
//   jaringan tetap termasuk informasi yang sebaiknya tidak diekspos bebas ke publik.
// =============================================================================

import type { LucideIcon } from 'lucide-react';
import { Cloud, Book, Ticket, LifeBuoy, ClipboardList, ScanLine, Printer } from 'lucide-react';

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
    color: '#933693',
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
    color: '#6A3FA0',
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
];
