# Portal Layanan Internal — RS Brawijaya Tangerang

Static site (Next.js, `output: 'export'`) yang menampilkan direktori layanan
internal (Nextcloud, Seafile, GLPI, HESK, PACS, HIS, Grafana, Prometheus,
Uptime Kuma, Portainer, Traefik, Proxmox) sebagai kartu bertautan — jadi
pengguna tidak perlu menghafal IP tiap service. Ada pencarian instan
(`/` untuk fokus ke search box) dan navigasi cepat per kategori.

Situs ini 100% statis: tidak ada server, tidak ada API route, tidak ada
database. Saat dibuka, browser pengguna sendiri yang harus punya akses ke
jaringan internal/VPN rumah sakit untuk benar-benar membuka tiap service —
portal ini hanya menyediakan tautannya.

## 1. Jalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## 2. Ubah daftar layanan

Semua service didefinisikan di **`lib/services.ts`** — satu file, dikelompokkan
per kategori. Contoh menambah service baru ke kategori "IT Service":

```ts
{
  name: 'Zabbix',
  description: 'Monitoring jaringan & server',
  url: 'https://zabbix.rs.lan',
  host: 'zabbix.rs.lan',
  icon: Activity, // import dari 'lucide-react'
  status: 'online', // 'online' | 'maintenance' | 'offline'
},
```

Ikon memakai [lucide-react](https://lucide.dev/icons) — cari nama ikon di
situs tersebut, lalu import di bagian atas `lib/services.ts`.

⚠️ **Ganti hostname placeholder.** File ini datang dengan contoh domain
`*.rs.lan` — sesuaikan dengan hostname/IP internal Anda yang sebenarnya
sebelum deploy.

## 3. Deploy ke Vercel

1. Push project ini ke repo GitHub (lihat catatan keamanan di bawah dulu).
2. Di [vercel.com](https://vercel.com) → **Add New Project** → import repo
   tersebut. Vercel otomatis mendeteksi Next.js, tidak perlu ubah setting apa
   pun (biarkan `NEXT_BASE_PATH` kosong).
3. Deploy. Situs akan tersedia di `https://nama-project.vercel.app`.

Tiap `git push` ke branch utama otomatis re-deploy.

## 4. Deploy ke GitHub Pages

Workflow sudah disiapkan di `.github/workflows/deploy-gh-pages.yml` dan akan
jalan otomatis tiap push ke `main`.

1. Push project ke GitHub.
2. Di repo → **Settings → Pages → Build and deployment → Source**, pilih
   **GitHub Actions**.
3. Push ke `main` (atau jalankan workflow manual lewat tab **Actions**).
4. Situs akan tersedia di `https://<username>.github.io/<nama-repo>/`.

Workflow ini otomatis mengatur `NEXT_BASE_PATH=/<nama-repo>` supaya semua
asset (CSS/JS) memakai path yang benar di subpath GitHub Pages. Jika repo ini
justru adalah *user/organization root site* (`username.github.io`), hapus
baris `env: NEXT_BASE_PATH: ...` di workflow tersebut.

## 5. Catatan keamanan — baca sebelum deploy publik

Portal ini hanya berisi **tautan**, bukan data pasien atau kredensial. Tapi
hostname dan struktur layanan internal tetap termasuk informasi topologi
jaringan yang sebaiknya tidak diumbar ke publik. Sebelum push ke GitHub/Vercel:

- **Jadikan repository private** (paling sederhana), *atau*
- Aktifkan **Vercel Deployment Protection / Password Protection** di project
  settings, *atau*
- Taruh portal ini juga di belakang **Authelia** (seperti service lain di
  stack Anda) alih-alih di-deploy publik ke Vercel/GitHub Pages sama sekali —
  cukup jalankan sebagai static site di belakang Traefik, *atau*
- Kalau tetap ingin publik: pertimbangkan hostname yang tidak terlalu
  deskriptif, dan pastikan tiap service tetap punya lapisan auth sendiri
  (SSO/VPN) — portal ini bukan pengganti kontrol akses, hanya direktori.

`robots: { index: false }` sudah diset di `app/layout.tsx` supaya tidak
diindeks mesin pencari, tapi itu bukan kontrol akses — cuma etiket SEO.

## 6. Ide pengembangan lanjutan

- **Status real-time**: alih-alih status statis di `lib/services.ts`, Anda
  sudah punya Uptime Kuma di stack — Uptime Kuma bisa generate *status
  badge* (gambar SVG) per monitor tanpa masalah CORS karena diakses lewat
  tag `<img>`. Bisa dipasang di `StatusDot`/`ServiceCard` menggantikan status
  manual.
- **Auto-generate dari Traefik**: kalau daftar service sering berubah,
  `lib/services.ts` bisa digenerate dari label Traefik/Docker via script
  kecil saat build, alih-alih diedit manual.

## Struktur project

```
app/                 # App Router: layout, halaman utama, global CSS
components/           # Header, SearchBar, CategoryNav, CategorySection, ServiceCard, StatusDot, Footer
lib/services.ts       # <-- daftar layanan, edit di sini
public/favicon.svg
.github/workflows/deploy-gh-pages.yml
next.config.mjs       # output: 'export', basePath opsional untuk GitHub Pages
```
