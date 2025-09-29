<template>
  <!-- NAV -->
  <header class="sticky top-0 z-50 bg-[#253380]/95 text-[#e8e9eb] backdrop-blur border-b border-black/10">
    <div class="container max-w-screen-xl flex items-center justify-between h-16">
      <a href="#hero" class="font-extrabold tracking-wide flex items-center gap-2">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
        RAPID ACTION
      </a>
      <nav>
        <ul class="flex items-center gap-6 text-brand-white/90">
          <li><a href="#services" class="px-3 py-2 rounded-lg hover:bg-white/10 text-[#e8e9eb]">Layanan</a></li>
          <li><a href="#about" class="px-3 py-2 rounded-lg hover:bg-white/10 text-[#e8e9eb]">Tentang</a></li>
          <li><a href="#contact" class="px-3 py-2 rounded-lg hover:bg-white/10 text-[#e8e9eb]">Kontak</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- HERO -->
  <section id="hero" class="py-12 md:py-20 bg-white">
    <div class="container max-w-screen-xl">
      <span class="inline-flex items-center gap-2 text-sm font-semibold text-[#253380] bg-[#253380]/10 border border-[#253380]/15 rounded-full px-3 py-1 mb-4">
        <span class="w-2 h-2 bg-[#d48715] rounded-full"></span>
        Your Trusted Security Partner
      </span>

      <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl text-[#253380]">
        Solusi Keamanan Profesional untuk Aset dan Operasional Bisnis Anda
      </h1>

      <p class="mt-4 max-w-3xl text-[#253380]/80">
        RAPID ACTION adalah divisi layanan keamanan…
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a href="#services" class="inline-flex items-center px-5 py-3 rounded-2xl font-semibold bg-[#d48715] text-white hover:brightness-110">Lihat Layanan</a>
        <a href="#contact" class="inline-flex items-center px-5 py-3 rounded-2xl font-semibold bg-[#267510] text-white hover:brightness-110">Hubungi Kami</a>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="py-10 bg-white">
  <div class="container max-w-screen-xl">
    <h2 class="text-2xl md:text-3xl font-bold text-[#253380]">Layanan</h2>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-card">
        <h3 class="text-xl font-bold text-[#253380]">Manajemen Satpam</h3>
        <p class="mt-2 text-[#253380]/80">Seleksi, pelatihan, SOP, …</p>
      </article>
      <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-card">
        <h3 class="text-xl font-bold text-[#253380]">Manajemen Satpam</h3>
        <p class="mt-2 text-[#253380]/80">Seleksi, pelatihan, SOP, …</p>
      </article>
      <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-card">
        <h3 class="text-xl font-bold text-[#253380]">Manajemen Satpam</h3>
        <p class="mt-2 text-[#253380]/80">Seleksi, pelatihan, SOP, …</p>
      </article>
    </div>
  </div>
</section>

  <!-- ABOUT -->
  <section id="about" class="py-10 bg-white">
    <div class="container max-w-screen-xl">
      <h2 class="text-2xl md:text-3xl font-bold text-[#253380]">Tentang RAPID ACTION</h2>
      <p class="mt-4 max-w-3xl text-[#253380]/80">…</p>
    </div>
  </section>

  <footer class="border-t border-white/15 py-6 bg-[#1d2a7a] text-brand-white/80">
    <div class="container max-w-screen-xl flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
      <p>© {{ year }} RAPID ACTION. Your Trusted Security Partner.</p>
      <p>Office: (+62) 2264403681 | Security Coordinator: (+62) 82116516962</p>
    </div>
  </footer>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', company: '', message: '' })
const sent = ref(false)
const year = new Date().getFullYear()
const submit = () => {
  sent.value = true
  setTimeout(() => (sent.value = false), 3000)
}
</script>

<style scoped>
/* Komponen utilitas Tailwind */
.btn-primary {
  @apply inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold bg-brand-orange text-white hover:brightness-110 transition;
}
.btn-secondary {
  @apply inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold bg-brand-green text-white hover:brightness-110 transition;
}
.card {
  @apply bg-white/10 border border-white/20 rounded-2xl p-6 shadow-card;
}
.card-title {
  @apply text-lg md:text-xl font-bold;
}
.card-text {
  @apply mt-2 text-brand-white/80;
}
.input {
  @apply w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-brand-white placeholder:text-brand-white/60 outline-none focus:border-brand-orange;
}
</style>
