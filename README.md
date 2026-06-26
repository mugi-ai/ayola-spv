# Ayola IT Portal

Portal manajemen IT untuk Ayola Hotel Lippo Cikarang.

## Struktur File
```
index.html        → Halaman Login
dashboard.html    → Dashboard Overview
aset.html         → Manajemen Aset IT
tiket.html        → Tiket Kerusakan
logbook.html      → Logbook Aktivitas
todo.html         → To-Do List
shared.css        → Stylesheet global
sidebar-builder.js→ Script sidebar & auth
```

## Database
Menggunakan SheetDB → Google Sheets: `https://sheetdb.io/api/v1/blk7obm7z1uo2`

Sheet/tab yang diperlukan di Google Sheets:
| Tab | Kolom |
|---|---|
| `assets` | kode_aset, nama_aset, kategori, serial, status, lokasi, foto |
| `tickets` | ticket_id, pelapor, departemen, masalah, prioritas, deskripsi, status_tiket, catatan |
| `todolist` | row_id, tugas, pic, prioritas, deadline, status |
| `logbook` | row_id, tanggal, waktu, kategori, teknisi, judul, deskripsi |
| `user` | username, password, nama, role |

## Cara Deploy ke GitHub Pages
1. Upload semua file ke repository GitHub
2. Masuk Settings → Pages → Source: `main` branch, folder `/root`
3. Akses via `https://username.github.io/nama-repo/`

## Akun Default (fallback jika sheet user kosong)
| Username | Password | Role |
|---|---|---|
| admin | adminayola | admin |
| it | ayola2024 | admin |
| user | user123 | user |
| staff | staff123 | user |
