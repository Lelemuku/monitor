# 🗺️ Lelemuku Monitor

**Peta Berita Indonesia Real-Time dari Lelemuku.com**

Live demo: [monitor.lelemuku.com](https://monitor.lelemuku.com)

---

## Fitur

- 🗺️ **Peta Interaktif** — Berbasis Leaflet.js + CartoDB Dark tiles (100% gratis, tanpa API key)
- 📍 **Deteksi Lokasi Otomatis** — 100+ kata kunci wilayah Indonesia (provinsi, kabupaten, kota)
- 🔴🟡🟢 **Warna Kategori** — Breaking (oranye), Penting (merah), Umum (kuning), Info (hijau)
- 📰 **Feed RSS** — Langsung dari feed Blogger Lelemuku.com
- 🔄 **Auto Refresh** — Update otomatis setiap 5 menit
- 📺 **Ticker Bawah** — Scroll berita terbaru
- 📱 **Responsif** — Bekerja di desktop & mobile

---

## Deploy ke GitHub Pages (Gratis)

### Langkah 1 — Fork/Upload ke GitHub

1. Buat repository baru di GitHub, misal: `lelemuku-monitor`
2. Upload file `index.html` ke repository tersebut
3. Atau clone repo ini dan push ke GitHub Anda

```bash
git init
git add index.html README.md
git commit -m "Initial: Lelemuku Monitor"
git remote add origin https://github.com/USERNAME/lelemuku-monitor.git
git push -u origin main
```

### Langkah 2 — Aktifkan GitHub Pages

1. Buka Settings repository di GitHub
2. Scroll ke bagian **Pages**
3. Di Source, pilih: **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Klik **Save**
6. Tunggu 1-2 menit, website akan tersedia di `https://USERNAME.github.io/lelemuku-monitor`

### Langkah 3 — Custom Domain `monitor.lelemuku.com`

1. Di Settings > Pages, masukkan custom domain: `monitor.lelemuku.com`
2. Buat file `CNAME` di root repository dengan isi:
   ```
   monitor.lelemuku.com
   ```
3. Di panel DNS domain Anda, tambahkan record:
   ```
   Type: CNAME
   Name: monitor
   Value: USERNAME.github.io
   TTL: 3600
   ```
4. Aktifkan **Enforce HTTPS** di Settings GitHub Pages

---

## Konfigurasi

Edit bagian `CONFIG` di dalam `index.html`:

```javascript
const CONFIG = {
  // Feed RSS Lelemuku.com - ubah sesuai feed Anda
  feedUrl: 'https://lelemuku.com/feeds/posts/default?alt=rss&max-results=50',
  
  // Auto-refresh interval (milidetik) - default 5 menit
  refreshInterval: 5 * 60 * 1000,
};
```

### Feed RSS Blogger

Feed default Blogger sudah mendukung RSS. Gunakan format:
```
https://BLOG_ANDA.blogspot.com/feeds/posts/default?alt=rss&max-results=50
```

Atau jika menggunakan domain custom:
```
https://lelemuku.com/feeds/posts/default?alt=rss&max-results=50
```

---

## Menambah Lokasi

Tambahkan entri baru di `LOCATION_DB` dalam `index.html`:

```javascript
const LOCATION_DB = {
  // Format: 'kata kunci': [latitude, longitude, 'Nama Tampil'],
  'sorong selatan': [-1.8628, 131.9988, 'Sorong Selatan'],
  'kota baru': [-3.3245, 115.7109, 'Kota Baru'],
  // dst...
};
```

## Menambah Kategori

Edit `CATEGORY_RULES`:

```javascript
const CATEGORY_RULES = [
  { 
    type: 'breaking', 
    color: '#f97316', 
    keywords: ['gempa', 'banjir', 'tsunami', 'breaking'] 
  },
  // tambah kategori baru di sini
];
```

---

## Teknologi (Semua Gratis & Open Source)

| Komponen | Teknologi | Biaya |
|---|---|---|
| Peta | [Leaflet.js](https://leafletjs.com) | Gratis |
| Tile/Basemap | [CartoDB Dark](https://carto.com/basemaps) | Gratis |
| Feed | Blogger RSS | Gratis |
| CORS Proxy | [allorigins.win](https://allorigins.win) | Gratis |
| Hosting | GitHub Pages | Gratis |
| Font | Google Fonts | Gratis |

---

## Troubleshooting

**Feed tidak terbuka / data contoh tampil:**
- Cek apakah URL feed RSS benar
- Blog harus public (tidak private)
- CORS proxy mungkin sedang down, coba refresh
- Tambahkan proxy alternatif di array `CONFIG.corsProxies`

**Berita tidak muncul di peta:**
- Pastikan judul atau konten berita mengandung nama wilayah Indonesia
- Tambahkan kata kunci di `LOCATION_DB`

**Domain tidak aktif:**
- Propagasi DNS bisa memakan 24-48 jam
- Pastikan record CNAME sudah benar

---

## Kontribusi

Pull request untuk menambah lokasi, kategori, atau fitur baru sangat disambut!

---

*Dibuat untuk [Lelemuku.com](https://lelemuku.com) — Portal Berita Papua & Maluku*
