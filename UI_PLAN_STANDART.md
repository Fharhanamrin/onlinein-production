# 🎨 UI Standard — Landing Page Tampilo

> Dokumen acuan standar & aturan UI yang dipakai di landing page Tampilo.
> **Wajib dibaca sebelum menambah section / fitur baru** — biar konsisten, profesional, dan nggak menebak-nebak.
>
> Sumber kebenaran token: [`src/index.css`](src/index.css) · Brand: [`design-system/MASTER.md`](design-system/MASTER.md) · Voice: [`../konten-sosmed/README.md`](../konten-sosmed/README.md)

---

## 1. Tech Stack & Struktur Folder

| Item | Pilihan |
|------|---------|
| Framework | Vite + React + TypeScript |
| Styling | TailwindCSS v4 (config via CSS `@theme`, **bukan** `tailwind.config.js`) |
| Ikon | `lucide-react` (+ `BrandIcons.tsx` untuk yang tidak tersedia) |
| Font | Plus Jakarta Sans (Google Fonts, di-load di `index.html`) |

```
src/
├── lib/site.ts            → konstanta kontak + waLink() (SUMBER TUNGGAL)
├── hooks/useReveal.ts     → scroll-reveal (IntersectionObserver)
├── components/
│   ├── SectionHeading.tsx → heading section (eyebrow + title + subtitle)
│   ├── BrandIcons.tsx     → ikon custom (Instagram, dll)
│   └── *Section.tsx       → satu file per section
├── index.css              → design tokens + utility motion
└── App.tsx                → susunan urutan section
```

**Aturan:** setiap section = satu komponen `*Section.tsx`. Daftarkan urutannya di `App.tsx`.

---

## 2. Design Tokens (Warna & Font)

Didefinisikan di [`src/index.css`](src/index.css) blok `@theme`. **Selalu pakai token ini — jangan masukkan hex acak.**

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| `--color-primary` | `#4338CA` (Indigo) | Warna utama: tombol, headline, aksi |
| `--color-primary-dark` | `#3730A3` | Hover state tombol primary |
| `--color-primary-light` | `#6366F1` | Variasi terang |
| `--color-accent` | `#06B6D4` (Cyan) | Aksen, identitas **Toko Online** |
| `--color-accent-dark` | `#0891B2` | Teks cyan di atas background terang (kontras) |
| `--color-navy` | `#1E1B4B` | Teks heading, section gelap, footer |
| `--color-surface` | `#F8FAFC` | Background section selang-seling |
| `--color-surface-2` | `#F1F5F9` | Surface sekunder |
| `--font-sans` | Plus Jakarta Sans | Semua teks |

> Di JSX warna ditulis sebagai arbitrary value, mis. `text-[#1E1B4B]`, `bg-[#4338CA]`. Konsisten dengan tabel di atas.

---

## 3. Arti Warna (Color Semantics)

- **Indigo `#4338CA`** → primer & call-to-action utama, identitas **Landing Page**.
- **Cyan `#06B6D4`** → aksen, identitas **Toko Online**, highlight.
- **Navy `#1E1B4B`** → teks utama & section gelap (CTA besar, footer).
- **Slate (`text-slate-600/700`)** → body text. **Inilah warna paragraf default.**
- **Rose / Amber** → hanya untuk badge kontekstual (masalah = rose, testimoni = amber).

🚫 **Dilarang:** rainbow gradient di mana-mana, AI purple/pink gradient, neon, dark mode.

---

## 4. Tipografi

| Elemen | Kelas |
|--------|-------|
| Judul section (H2) | `text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#1E1B4B] leading-[1.1]` |
| Hero (H1) | `text-[2.5rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight` |
| Subtitle | `text-base sm:text-lg text-slate-600 leading-relaxed` |
| Body / paragraf | `text-[15px] text-slate-600` atau `text-slate-700` |
| Eyebrow (label kecil) | `text-xs font-semibold tracking-wide uppercase` |

**Aturan kontras:** body text WAJIB `text-slate-600`/`700` — **jangan** pakai `text-[#1E1B4B]/60` (opacity soup) karena kontras rendah. Target ≥ 4.5:1.

---

## 5. Spacing & Layout

| Properti | Standar |
|----------|---------|
| Padding section | `py-24 sm:py-28` |
| Container | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` |
| Container sempit (FAQ) | `max-w-3xl` / heading `max-w-2xl` |
| Gap grid | `gap-5` s/d `gap-8` |
| Radius kartu | `rounded-2xl` (standar) · `rounded-3xl` (kartu besar/CTA) |
| Background selang-seling | putih ↔ `bg-[#F8FAFC]` antar section |

---

## 6. Komponen Reusable (WAJIB dipakai, jangan bikin ulang)

### `SectionHeading` — [`src/components/SectionHeading.tsx`](src/components/SectionHeading.tsx)
Heading konsisten untuk setiap section. Sudah termasuk scroll-reveal.
```tsx
<SectionHeading
  tone="indigo"        // 'indigo' | 'cyan' | 'amber' | 'rose'
  eyebrow="Cara kerja"
  title="Gampang banget, cuma 4 langkah"
  subtitle="Prosesnya simpel & transparan…"
  align="center"       // 'center' (default) | 'left'
/>
```

### `useReveal` — [`src/hooks/useReveal.ts`](src/hooks/useReveal.ts)
Scroll-reveal fade-up. Hormati `prefers-reduced-motion` otomatis.
```tsx
const { ref, visible } = useReveal<HTMLDivElement>()
<div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>…</div>
```

### `site.ts` — [`src/lib/site.ts`](src/lib/site.ts)
**Satu-satunya sumber** nomor WA / handle sosmed. **JANGAN hardcode `wa.me/...` di komponen.**
```tsx
import { waLink, WA_KONSULTASI, IG_URL, IG_HANDLE } from '../lib/site'
href={waLink('Halo Tampilo, saya tertarik paket Standard')}
```

### `BrandIcons` — [`src/components/BrandIcons.tsx`](src/components/BrandIcons.tsx)
Ikon yang tidak ada di lucide versi ini (mis. `InstagramIcon`). Tambahkan di sini bila perlu.

---

## 7. Pola Section Baku (Anatomy)

Setiap section baru ikuti struktur ini:

```tsx
export default function FiturSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="fitur" className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="…" title="…" subtitle="…" />

        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`reveal ${visible ? 'is-visible' : ''} group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: visible ? `${i * 90}ms` : '0ms' }}
            >
              …
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Stagger:** `transitionDelay: ${i * 70–120}ms` untuk efek muncul berurutan.

---

## 8. Motion / Animasi

| Konteks | Durasi | Easing |
|---------|--------|--------|
| Hover interaksi (warna, shadow) | `duration-200` / `300` (200–300ms) | default |
| Scroll-reveal | 0.6s | `cubic-bezier(.22,1,.36,1)` |
| Hero entrance | 0.7s `animate-fade-up` | sda |

- Kartu hover: `hover:-translate-y-1 hover:shadow-xl transition-all duration-300`.
- ✅ **WAJIB** hormati `prefers-reduced-motion` (sudah ditangani global di `index.css` + `useReveal`). Jangan bikin animasi yang bypass aturan ini.
- Utility tersedia: `.reveal` / `.is-visible`, `.animate-fade-up`, `.acc-grid`/`.open` (accordion).

---

## 9. Tombol & CTA

| Jenis | Kelas inti |
|-------|-----------|
| Primary | `rounded-full bg-[#4338CA] text-white font-semibold hover:bg-[#3730A3] shadow-lg hover:-translate-y-0.5` |
| Secondary | `rounded-full border border-slate-300 bg-white text-[#1E1B4B] hover:border-[#4338CA] hover:text-[#4338CA]` |
| Di section gelap | `bg-white text-[#4338CA]` (primary) |

**Aturan:**
- Semua tombol/link klik: `cursor-pointer`.
- Link WhatsApp **selalu** via `waLink(...)`, dengan `target="_blank" rel="noopener noreferrer"`.
- Bentuk tombol standar = **pill** (`rounded-full`).

---

## 10. Ikon

- Pakai **`lucide-react`** untuk semua ikon.
- Ukuran lazim: `size={16}` (inline teks), `size={20–28}` (fitur).
- Jika ikon tidak tersedia di versi lucide ini (contoh: `Instagram`) → **tambahkan komponen di [`BrandIcons.tsx`](src/components/BrandIcons.tsx)**, jangan paksa import.
- 🚫 **Jangan** pakai emoji (✓, 🚀) sebagai ikon — gunakan `CheckCircle2`, `Rocket`, dll.

---

## 11. Aksesibilitas (A11y)

- `<img>` wajib `alt` deskriptif (kosong `alt=""` hanya untuk dekoratif).
- Tombol khusus ikon wajib `aria-label`.
- Accordion: `aria-expanded`, toggle via `<button>`.
- Elemen dekoratif: `aria-hidden="true"`.
- Pastikan focus state terlihat & kontras teks ≥ 4.5:1.

---

## 12. Responsif

- **Mobile-first.** Uji di lebar **375 / 768 / 1024 / 1440 px**.
- Di mobile, **jangan** lebih dari 2 kolom yang mepet (`grid-cols-2`, bukan 4).
- Gambar dengan rasio tetap: `aspect-[4/5]` + `object-cover` agar tidak gepeng.
- Navbar: menu desktop `hidden md:flex`, menu mobile pakai toggle beranimasi.

---

## 13. Aset

- Semua aset statis di `public/` → diakses dengan path absolut `/…` (tanpa import).
  - `public/logos/` → logo (utama, ikon, monokrom).
  - `public/showcase/` → gambar galeri konten.
- Gambar galeri / below-the-fold: `loading="lazy"`.
- Logo di background gelap: `style={{ filter: 'brightness(0) invert(1)' }}` (versi putih).

---

## 14. ✅ Checklist Pre-Delivery

Sebelum menganggap section/fitur selesai:

- [ ] Pakai token warna & `SectionHeading` (bukan heading manual)
- [ ] Tidak ada emoji sebagai ikon (pakai Lucide / BrandIcons)
- [ ] Semua elemen klik punya `cursor-pointer`
- [ ] Link WhatsApp via `waLink()` — tidak ada nomor hardcoded
- [ ] Hover state halus (transition 200–300ms)
- [ ] Body text `text-slate-600/700` (kontras ≥ 4.5:1, bukan opacity soup)
- [ ] Scroll-reveal terpasang & `prefers-reduced-motion` dihormati
- [ ] Responsif rapi di 375 / 768 / 1024 / 1440 px
- [ ] `alt` / `aria-label` lengkap
- [ ] `npm run build` hijau tanpa error TS

---

## 15. Referensi

- **Design system lengkap:** [`design-system/MASTER.md`](design-system/MASTER.md)
- **Business plan & harga:** [`../Plan.md`](../Plan.md)
- **Brand voice (bahasa santai, hook):** [`../konten-sosmed/README.md`](../konten-sosmed/README.md)
- **Pola desain:** Trust & Authority + Feature-Rich Showcase (UI UX Pro Max)

> **Prinsip utama:** *elegan tapi hangat* — desain premium & rapi, tapi copy tetap pakai bahasa yang akrab buat UMKM. Konsisten > kreatif sendiri-sendiri.
