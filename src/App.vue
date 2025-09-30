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
  <section
    id="hero"
    class="relative h-[calc(100vh-64px)] isolate overflow-hidden"
  >
    <!-- Slides -->
    <div class="absolute inset-0">
      <div class="absolute inset-0">
        <img
          v-for="(img, index) in images"
          :key="img"
          :src="img"
          alt="Hero slide"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          :class="current === index ? 'opacity-100' : 'opacity-0'"
        />
      </div>
      <div class="absolute inset-0 bg-black/50 pointer-events-none"></div>
    </div>


    <!-- Content -->
    <div class="relative z-10 h-full">
      <div class="container max-w-screen-xl h-full flex items-center">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 text-sm font-semibold text-white/95 bg-white/15 border border-white/20 rounded-full px-3 py-1 mb-4"
          >
            <span class="w-2 h-2 bg-[#d48715] rounded-full"></span>
            Your Trusted Security Partner
          </span>

          <h1 class="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Mitra Anda dalam
            <span class="block">Solusi Keamanan</span>
            <span class="block">Terintegrasi</span>
          </h1>

          <p class="mt-4 max-w-2xl text-white/85">
            RAPID ACTION menghadirkan layanan keamanan terpadu untuk aset dan
            operasional Anda dengan tim terlatih dan SOP yang jelas.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="#services"
              class="inline-flex items-center px-5 py-3 rounded-2xl font-semibold bg-[#d48715] text-white hover:brightness-110"
            >
              Lihat Layanan
            </a>
            <a
              href="#contact"
              class="inline-flex items-center px-5 py-3 rounded-2xl font-semibold bg-[#267510] text-white hover:brightness-110"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination / indicator -->
    <div
      class="absolute z-20 bottom-6 left-6 md:left-12 text-white/85 flex items-center gap-3 text-sm select-none"
      @mouseenter="pause()" @mouseleave="play()"
    >
      <!-- Prev -->
      <button
        type="button"
        class="tabular-nums font-semibold px-2 py-1 rounded-md hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
        @click="prev"
        aria-label="Slide sebelumnya"
      >
        {{ pad(current + 1) }}
      </button>

      <!-- Bars -->
      <div class="inline-flex items-center gap-1" role="tablist" aria-label="Pilih slide">
        <button
          v-for="(img, index) in images"
          :key="index"
          type="button"
          role="tab"
          :aria-selected="current === index"
          :aria-label="`Pilih slide ${index + 1}`"
          class="h-[3px] w-6 rounded transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          :class="current === index ? 'bg-white/90 w-10' : 'bg-white/40 hover:bg-white/60'"
          @click="setIndex(index)"
        />
      </div>

      <!-- Next -->
      <button
        type="button"
        class="tabular-nums px-2 py-1 rounded-md hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
        @click="next"
        aria-label="Slide berikutnya"
      >
        {{ pad(images.length) }}
      </button>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="py-16 bg-white">
    <div class="container max-w-screen-xl">
      <!-- Judul -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#253380]">
          Layanan
        </h2>
        <p class="mt-3 text-lg text-[#253380]/70 max-w-2xl mx-auto">
          RAPID ACTION menyediakan berbagai layanan keamanan terpadu
          yang dirancang untuk menjaga aset, lingkungan kerja, dan operasional bisnis Anda.
        </p>
      </div>

      <!-- Grid layanan -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card -->
        <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#253380]">Manajemen Satpam</h3>
          <p class="mt-3 text-[#253380]/80 leading-relaxed">
            Program ini dirancang untuk menangani seluruh aspek pengelolaan
            dan pengawasan personil Satpam, mulai dari proses seleksi hingga
            pelaksanaan tugas di lapangan. Dengan sistem yang terstruktur,
            RAPID ACTION membantu klien mengurangi beban pengelolaan keamanan,
            sehingga klien dapat fokus pada kegiatan inti usahanya.
          </p>
        </article>

        <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#253380]">Audit Keamanan</h3>
          <p class="mt-3 text-[#253380]/80 leading-relaxed">
            Evaluasi sistem keamanan secara berkala untuk mencegah risiko
            dan memastikan peningkatan berkelanjutan di lokasi klien.
          </p>
        </article>

        <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#253380]">Patroli</h3>
          <p class="mt-3 text-[#253380]/80 leading-relaxed">
            Tim patroli aktif melakukan kunjungan ke seluruh site untuk
            memastikan kedisiplinan, kesiapsiagaan, dan kenyamanan lingkungan kerja.
          </p>
        </article>

        <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#253380]">
            Standard Operating Procedure (SOP)
          </h3>
          <p class="mt-3 text-[#253380]/80 leading-relaxed">
            Setiap personil dibekali SOP sesuai fungsi pengamanan, agar siap
            menghadapi situasi seperti pencurian, demonstrasi, atau bencana lainnya.
          </p>
        </article>

        <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#253380]">Customer Care</h3>
          <p class="mt-3 text-[#253380]/80 leading-relaxed">
            Tim kami siap menanggapi keluhan dengan cepat dan solusi yang tepat,
            demi menjaga kepuasan dan kenyamanan klien.
          </p>
        </article>

        <article class="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-bold text-[#253380]">Sistem Laporan Kinerja</h3>
          <p class="mt-3 text-[#253380]/80 leading-relaxed">
            Setiap hari, anggota Satpam mencatat seluruh hasil laporan kerja mereka.
            Laporan tersebut kemudian diperiksa dan disempurnakan oleh Komandan Regu (Danru)
            sebelum diserahkan kepada Koordinator Lapangan. Setelah menerima laporan tertulis,
            Koordinator Lapangan membawa dokumen tersebut ke Kantor Pusat (Mako) untuk dievaluasi.
            Hasil evaluasi disusun menjadi laporan mingguan dan bulanan yang disampaikan kepada klien.
            Selain itu, Mako juga siap menerima masukan atau laporan klien 24 jam penuh.
          </p>
        </article>
      </div>
    </div>
  </section>


  <!-- ABOUT -->
  <section id="about" class="py-16 bg-white">
    <div class="container max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <!-- Text -->
    <div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#253380]">
        Tentang <span class="text-[#d48715]">RAPID ACTION</span>
      </h2>

      <p class="mt-6 text-lg leading-relaxed text-[#253380]/80 max-w-prose">
        RAPID ACTION adalah divisi layanan keamanan dari
        <span class="font-semibold">PT Cipta Jasa Adidaya Indonesia (RAPID GROUP)</span>, 
        yang berfokus pada penyediaan jasa pengamanan profesional untuk mendukung
        keamanan aset, lingkungan kerja, dan operasional bisnis Anda.
      </p>

      <p class="mt-4 text-lg leading-relaxed text-[#253380]/80 max-w-prose">
        Dengan mengutamakan kedisiplinan, respons cepat, serta personel yang terlatih,
        kami berkomitmen memberikan solusi keamanan terpadu yang andal dan
        disesuaikan dengan kebutuhan tiap klien.
      </p>

      <p class="mt-4 text-lg leading-relaxed text-[#253380]/80 max-w-prose">
        Sebagai bagian dari RAPID GROUP, kami menjunjung tinggi etos kerja profesional,
        budaya kerja proaktif, dan sistem pengawasan untuk memastikan keamanan yang
        konsisten, efisien, dan terpercaya.
      </p>
    </div>

    <!-- Image / Illustration -->
    <div class="relative">
      <!-- Ganti src sesuai asset kamu -->
      <img
        :src="aboutImg"
        alt="Tim keamanan RAPID ACTION"
          class="rounded-2xl shadow-xl object-cover w-full h-[350px] md:h-[450px]"
        />
        <!-- Optional accent decoration -->
        <div class="absolute -bottom-6 -right-6 w-40 h-40 bg-[#d48715]/20 rounded-2xl -z-10"></div>
      </div>
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
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import hero1 from './assets/hero1.jpg'
import hero2 from './assets/hero2.webp'
import hero3 from './assets/hero3.jpg'
import aboutImg from './assets/about.jpg'

const images = [hero1, hero2, hero3]
const current = ref(0)
let timer = null
const AUTOPLAY_MS = 5000

function play() {
  stop()
  timer = setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, AUTOPLAY_MS)
}
function stop() {
  if (timer) { clearInterval(timer); timer = null }
}
function resetAutoplay() {
  // restart setelah interaksi manual
  play()
}
function next() {
  current.value = (current.value + 1) % images.length
  resetAutoplay()
}
function prev() {
  current.value = (current.value - 1 + images.length) % images.length
  resetAutoplay()
}
function setIndex(i) {
  current.value = i
  resetAutoplay()
}
const pad = (n) => String(n).padStart(2, '0')

onMounted(play)
onBeforeUnmount(stop)

/* form/contact variables kamu tetap di sini */
const form = reactive({ name: '', email: '', company: '', message: '' })
const sent = ref(false)
const year = new Date().getFullYear()
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
