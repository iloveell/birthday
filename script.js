/* RAMA 20 · THE EIGHT WORLDS
   Konten mudah diedit berada pada CONFIG. ORBIT menggunakan aturan front-end, bukan AI online. */
(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");

  const CONFIG = {
    recipient: "Rama",
    birthday: "19 Oktober 2026",
    age: 20,
    senderName: "", // Isi nama pengirim kalau ingin ditampilkan di surat final.
    audioSrc: "song.mp3",
    audioVolume: 0.35,
    finalUnlockCount: 4,
    storageKey: "rama20.eightworlds.v1",
    planets: [
      { id: "mercury", name: "Mercury", number: "01", tagline: "MOON MILK", title: "Si Abu-Abu Gemas", description: "Abu-abu lembut dengan kilau perak, kalem tapi tetap manis.", colors: ["#e1ddeb", "#b8b5cc", "#f6e8ef", "#b7bfd9"], dark: "#171521" },
      { id: "venus", name: "Venus", number: "02", tagline: "PEACHY PINK", title: "Si Peach Manis", description: "Peach dan pink lembut, rasanya kayak langit sore yang hangat.", colors: ["#ffc9c2", "#f2a7a0", "#ffe5c7", "#e9a4aa"], dark: "#24171e" },
      { id: "earth", name: "Earth", number: "03", tagline: "MINTY DAY", title: "Si Bumi Mint", description: "Mint, biru langit, dan hijau lembut. Adem kayak hari libur tanpa alarm.", colors: ["#a8e6cf", "#a8d8f0", "#e1f7d5", "#80c9c0"], dark: "#142423" },
      { id: "mars", name: "Mars", number: "04", tagline: "STRAWBERRY MILK", title: "Si Stroberi", description: "Merah muda stroberi yang ceria, buat kamu yang suka warna manis tapi tetap berani.", colors: ["#ffadad", "#f08080", "#ffd6a5", "#ed929e"], dark: "#28171d" },
      { id: "jupiter", name: "Jupiter", number: "05", tagline: "VANILLA CLOUD", title: "Si Vanilla", description: "Krem vanilla dan karamel muda, hangat seperti cookies yang baru matang.", colors: ["#f4d6a0", "#e9bd8d", "#fff0c9", "#d9ad83"], dark: "#282018" },
      { id: "saturn", name: "Saturn", number: "06", tagline: "LAVENDER DREAM", title: "Si Lavender", description: "Ungu pastel dan pink lembut, cocok buat suasana dreamy yang gemas.", colors: ["#d8c6ff", "#f3c4e8", "#fff0c9", "#b8a1e3"], dark: "#211b2d" },
      { id: "uranus", name: "Uranus", number: "07", tagline: "BABY BLUE", title: "Si Biru Awan", description: "Biru muda yang ringan, kayak awan kecil di langit cerah.", colors: ["#bde0fe", "#a2d2ff", "#eaf7ff", "#8ecae6"], dark: "#172431" },
      { id: "neptune", name: "Neptune", number: "08", tagline: "BLUEBERRY SKY", title: "Si Blueberry", description: "Biru periwinkle dan ungu muda, adem, manis, dan sedikit dreamy.", colors: ["#b8c0ff", "#c8b6ff", "#e7e8ff", "#929de8"], dark: "#181b32" }
    ],
    capsules: [
      { id: "signal", label: "SIGNAL 01", symbol: "◈", color: "#7de5e8", hint: "Sebuah sinyal pertama datang dari kejauhan.", title: "Sinyal diterima", eyebrow: "INCOMING SIGNAL / 001", reveal: "type", text: "Hai, Rama! Selamat ulang tahun ke-20 yaa 🎂 Semoga hari ini banyak ketawanya, makan enak, dan dapat hal-hal kecil yang bikin senang. Ini website kecil buat ngerayain hari spesialmu. Semoga kamu suka!" },
      { id: "orbit", label: "ORBIT 02", symbol: "◎", color: "#bba3ff", hint: "Sebuah orbit yang selalu menemukan jalannya.", title: "Orbit usia 20", eyebrow: "ORBITAL MESSAGE / 002", reveal: "fade", text: "Semoga di umur 20 ini banyak yang kamu pengenin pelan-pelan tercapai. Kalau lagi capek, istirahat dulu aja. Nggak perlu semuanya langsung beres. Semangat terus, yaa!" },
      { id: "echo", label: "ECHO 03", symbol: "≋", color: "#f2c985", hint: "Gema kecil yang membawa kata-kata baik.", title: "Gema harapan", eyebrow: "ECHO TRANSMISSION / 003", reveal: "echo", text: "Semoga makin sering ketawa daripada overthinking, makin banyak hari baiknya, dan selalu punya teman buat cerita atau sekadar ngobrol random wkwk." },
      { id: "terra", label: "TERRA 04", symbol: "◐", color: "#73d7b3", hint: "Sesuatu yang hangat dari planet biru.", title: "Cahaya dari Bumi", eyebrow: "EARTH ARCHIVE / 004", reveal: "fade", text: "Semoga kamu selalu ketemu orang-orang yang tulus, punya tempat buat cerita, dan nggak kehabisan alasan buat bahagia. Hal sederhana juga semoga sering bikin kamu senyum." },
      { id: "nova", label: "NOVA 05", symbol: "✧", color: "#ff9fc6", hint: "Satu bintang baru sedang bersiap menyala.", title: "Bintang baru", eyebrow: "STELLAR EVENT / 005", reveal: "nova", text: "Semoga tahun ini banyak kejutan baiknya, banyak pengalaman serunya, dan ada hal baru yang bikin kamu bangga sama diri sendiri. Pelan-pelan aja, yang penting tetap jalan." },
      { id: "unknown", label: "UNKNOWN 06", symbol: "✦", color: "#f0d29a", hint: "Transmisi terakhir menunggu empat artefak ditemukan.", title: "Surat dari semesta", eyebrow: "FINAL TRANSMISSION / 006", reveal: "type", final: true, text: "Rama, happy birthday yaa! 🥳 Selamat datang di umur 20. Semoga sehat terus, makin bahagia, rezekinya lancar, dan apa pun yang lagi kamu perjuangin bisa ketemu jalannya. Makasih udah jadi teman yang baik dan seru. Semoga kamu selalu dikelilingi orang-orang yang tulus, punya banyak cerita lucu, dan tetap jadi diri sendiri. Nggak usah ngerasa harus punya semua jawaban sekarang. Nikmatin prosesnya, jangan lupa istirahat, dan semoga tahun ini baik banget sama kamu. Sekali lagi, selamat ulang tahun, Rama! ♡" }
    ],
    memoryCards: [
      { id: "chapter", number: "ARCHIVE 01", title: "Bab yang sedang ditulis", description: "Setiap hari memberi ruang untuk cerita baru.", glyph: "I", content: "Bagian ini masih kosong karena ceritanya bisa kamu isi sendiri. Kalau ada foto atau momen yang pengen disimpan, tinggal ganti teks contoh ini." },
      { id: "small-things", number: "ARCHIVE 02", title: "Hal kecil, arti besar", description: "Momen sederhana juga layak disimpan.", glyph: "✳", content: "Kadang yang paling diingat justru obrolan random, bercanda nggak jelas, atau momen receh. Kalau punya cerita kayak gitu, boleh taruh di sini." },
      { id: "next-orbit", number: "ARCHIVE 03", title: "Orbit berikutnya", description: "Masih banyak kemungkinan yang menunggu.", glyph: "∞", content: "Semoga hal-hal yang kamu rencanain bisa berjalan baik. Kalau ternyata jalannya beda, nggak apa-apa. Masih banyak kesempatan buat nyoba lagi." },
      { id: "gratitude", number: "ARCHIVE 04", title: "Yang patut disyukuri", description: "Satu titik cahaya di antara banyak hal.", glyph: "✧", content: "Coba ingat satu hal yang bikin kamu bersyukur tahun ini. Nggak harus sesuatu yang besar, yang kecil-kecil juga boleh banget." },
      { id: "possibility", number: "ARCHIVE 05", title: "Pintu kemungkinan", description: "Ada banyak jalan yang belum dicoba.", glyph: "V", content: "Ada hal yang pengen kamu coba di umur 20? Simpan di sini dulu. Siapa tahu nanti bisa dicentang satu-satu." },
      { id: "letter", number: "ARCHIVE 06", title: "Catatan untuk diri sendiri", description: "Pesan yang bisa dibaca lagi nanti.", glyph: "R", content: "Hai, Rama di masa depan! Semoga kamu masih sering ketawa, masih punya hal yang bikin semangat, dan nggak lupa sama hal-hal kecil yang bikin bahagia. Kalau rencana berubah, semoga kamu tetap baik-baik aja dan bangga sama perjalananmu sendiri." }
    ],
    secretCodes: ["ORBIT", "STARDUST", "RAMA20"],
    guide: {
      welcome: "Hai, Rama! Pilih planet yang kamu suka, terus buka kapsul-kapsulnya buat lihat kejutan kecil ♡",
      start: "Belum ada kapsul dibuka nih. Pilih yang paling bikin penasaran!",
      mid: "Udah {n} kapsul dibuka! Bintangnya mulai nyala ✨",
      almost: "Dikit lagi! Buka {need} kapsul lagi buat buka pesan terakhir ♡",
      final: "Yeay, pesan terakhir udah bisa dibuka! Cek bagian hadiah terakhir ya 🎁",
      done: "Semua kapsul udah dibuka! Makasih udah main sampai akhir ♡",
      locked: "Pesan ini masih dikunci nih. Buka {need} kapsul dulu, ya. Sekarang baru {n}.",
      code: "Coba klik bintang yang nyala di peta. Ada kode kecil yang disembunyiin di sana 👀",
      memory: "Di sini ada enam kartu cerita. Klik salah satunya, ya. Teksnya masih contoh dan bisa kamu ganti kapan aja."
    }
  };

  const $ = (id) => document.getElementById(id);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const planetById = (id) => CONFIG.planets.find((planet) => planet.id === id) || CONFIG.planets[2];
  const capsuleById = (id) => CONFIG.capsules.find((capsule) => capsule.id === id);
  const ordinaryCapsules = CONFIG.capsules.filter((capsule) => !capsule.final);
  const finalCapsule = CONFIG.capsules.find((capsule) => capsule.final);
  const defaultState = () => ({ theme: "earth", opened: [], foundCodes: [], visited: ["arrival"], lastChapter: "arrival" });
  let state = loadState();
  let selectedPlanet = state.theme;
  let activeModal = null;
  let modalReturnFocus = null;
  let revealTimer = null;
  let toastTimer = null;
  let lastGuideMessage = "";
  let guideMuted = false;
  let lastFocusedElement = null;

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "null");
      if (!parsed || typeof parsed !== "object") return defaultState();
      const validCapsuleIds = CONFIG.capsules.map((item) => item.id);
      return {
        theme: CONFIG.planets.some((item) => item.id === parsed.theme) ? parsed.theme : "earth",
        opened: Array.isArray(parsed.opened) ? [...new Set(parsed.opened.filter((id) => validCapsuleIds.includes(id)))] : [],
        foundCodes: Array.isArray(parsed.foundCodes) ? [...new Set(parsed.foundCodes.filter((code) => CONFIG.secretCodes.includes(code)))] : [],
        visited: Array.isArray(parsed.visited) ? [...new Set(parsed.visited.filter((id) => $(id)))] : ["arrival"],
        lastChapter: $(parsed.lastChapter) ? parsed.lastChapter : "arrival"
      };
    } catch (_) { return defaultState(); }
  }
  function saveState() {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(state)); } catch (_) { /* Private browsing may block storage. */ }
  }
  function countOpened() { return ordinaryCapsules.filter((item) => state.opened.includes(item.id)).length; }
  function isFinalUnlocked() { return countOpened() >= CONFIG.finalUnlockCount; }
  function capsuleIsOpened(id) { return state.opened.includes(id); }

  /* ---------------- Theme system ---------------- */
  function applyTheme(id, announce = true) {
    const planet = planetById(id);
    state.theme = planet.id;
    selectedPlanet = planet.id;
    document.documentElement.dataset.planet = planet.id;
    const quickLabel = $("themeQuickLabel");
    if (quickLabel) quickLabel.textContent = `${planet.name} mode`;
    $$("[data-planet-select]").forEach((button) => {
      button.classList.toggle("selected", button.dataset.planetSelect === planet.id);
      button.setAttribute("aria-pressed", String(button.dataset.planetSelect === planet.id));
    });
    $$(".theme-option").forEach((button) => {
      const active = button.dataset.themeId === planet.id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    $("themeQuick").style.setProperty("--theme-color", planet.colors[0]);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", planet.dark);
    saveState();
    if (announce) showToast(`${planet.name} theme diaktifkan`);
    if (!guideMuted && announce) guideSay(`${planet.name}: ${planet.title}. ${planet.description}`);
  }
  function renderThemeOptions() {
    const host = $("themeOptions");
    host.innerHTML = "";
    CONFIG.planets.forEach((planet) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "theme-option";
      button.dataset.themeId = planet.id;
      button.style.setProperty("--theme-color", planet.colors[0]);
      button.style.setProperty("--theme-dark", planet.dark);
      button.setAttribute("aria-pressed", String(planet.id === state.theme));
      button.innerHTML = `<i class="theme-swatch" aria-hidden="true"></i><span><strong>${planet.name}</strong><small>${planet.tagline}</small></span>`;
      button.addEventListener("click", () => {
        applyTheme(planet.id);
        renderPlanetDetail(planet.id);
      });
      host.appendChild(button);
    });
  }
  function renderPlanetDetail(id) {
    const planet = planetById(id);
    selectedPlanet = planet.id;
    $("planetNumber").textContent = planet.number;
    $("planetTagline").textContent = planet.tagline;
    $("planetName").textContent = planet.name;
    $("planetDescription").textContent = planet.description;
    $("detailPlanetArt").style.setProperty("--planet", planet.colors[3]);
    const palette = $("detailPalette");
    palette.innerHTML = "";
    planet.colors.forEach((color) => {
      const swatch = document.createElement("i");
      swatch.style.setProperty("--swatch", color);
      swatch.title = color;
      palette.appendChild(swatch);
    });
    $$("[data-planet-select]").forEach((button) => button.classList.toggle("selected", button.dataset.planetSelect === planet.id));
  }
  $("themeQuick").addEventListener("click", () => {
    const panel = $("themePanel");
    panel.hidden = !panel.hidden;
    if (!panel.hidden) $("themeClose").focus();
  });
  $("themeClose").addEventListener("click", () => { $("themePanel").hidden = true; $("themeQuick").focus(); });
  $("applyPlanetTheme").addEventListener("click", () => {
    applyTheme(selectedPlanet);
    $("themePanel").hidden = true;
    showToast(`${planetById(selectedPlanet).name} menjadi tema aktif`);
  });
  $$("[data-planet-select]").forEach((button) => button.addEventListener("click", () => renderPlanetDetail(button.dataset.planetSelect)));

  /* ---------------- Chapter navigation ---------------- */
  const chapters = $$("main .chapter");
  const chapterIndex = (id) => chapters.findIndex((chapter) => chapter.id === id);
  function goToChapter(id, behavior = "smooth") {
    const chapter = $(id);
    if (!chapter) return;
    chapter.scrollIntoView({ behavior: reducedMotion ? "auto" : behavior, block: "start" });
    state.lastChapter = id;
    if (!state.visited.includes(id)) state.visited.push(id);
    saveState();
    closeMobileMenu();
  }
  function closeMobileMenu() {
    $("chapterNav").classList.remove("open");
    $("menuToggle").setAttribute("aria-expanded", "false");
    $("menuToggle").setAttribute("aria-label", "Buka navigasi");
  }
  $$("[data-nav]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    goToChapter(link.dataset.nav);
  }));
  $$("[data-go]").forEach((button) => button.addEventListener("click", () => goToChapter(button.dataset.go)));
  $("menuToggle").addEventListener("click", () => {
    const nav = $("chapterNav");
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    $("menuToggle").setAttribute("aria-expanded", String(open));
    $("menuToggle").setAttribute("aria-label", open ? "Tutup navigasi" : "Buka navigasi");
  });
  $("previousChapter").addEventListener("click", () => goToChapter(chapters[Math.max(0, currentChapterIndex() - 1)].id));
  $("nextChapter").addEventListener("click", () => goToChapter(chapters[Math.min(chapters.length - 1, currentChapterIndex() + 1)].id));
  function currentChapterIndex() {
    let index = 0;
    chapters.forEach((chapter, i) => { if (chapter.getBoundingClientRect().top < window.innerHeight * .52) index = i; });
    return index;
  }
  function updateScrollUI() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    $("scrollBar").style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`;
    $("topbar").classList.toggle("scrolled", window.scrollY > 30);
    const index = currentChapterIndex();
    $("chapterCurrent").textContent = String(index + 1).padStart(2, "0");
    $$("[data-nav]").forEach((link) => link.classList.toggle("active", link.dataset.nav === chapters[index].id));
  }
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        const chapter = entry.target.closest(".chapter");
        if (chapter && !state.visited.includes(chapter.id)) { state.visited.push(chapter.id); state.lastChapter = chapter.id; saveState(); }
      });
    }, { threshold: .13 });
    $$(".reveal").forEach((element) => revealObserver.observe(element));
  } else $$(".reveal").forEach((element) => element.classList.add("visible"));

  /* ---------------- Canvas atmosphere ---------------- */
  const starCanvas = $("starfield");
  const starContext = starCanvas.getContext("2d");
  const effectCanvas = $("effects");
  const effectContext = effectCanvas.getContext("2d");
  let stars = [];
  let particles = [];
  let effectsFrame = 0;
  let starsFrame = 0;
  const isSmallScreen = () => window.innerWidth < 700;
  function resizeCanvas(canvas, context) {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  function seedStars() {
    resizeCanvas(starCanvas, starContext);
    const total = reducedMotion ? 70 : (isSmallScreen() ? 85 : 165);
    stars = Array.from({ length: total }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, radius: Math.random() * 1.25 + .2, phase: Math.random() * Math.PI * 2, speed: Math.random() * .012 + .003 }));
  }
  function drawStars() {
    starContext.clearRect(0, 0, innerWidth, innerHeight);
    stars.forEach((star) => {
      if (!reducedMotion) star.phase += star.speed;
      starContext.globalAlpha = .3 + .7 * Math.abs(Math.sin(star.phase));
      starContext.fillStyle = star.radius > 1.1 ? "#c6e9ff" : "#ffffff";
      starContext.beginPath(); starContext.arc(star.x, star.y, star.radius, 0, Math.PI * 2); starContext.fill();
    });
    starContext.globalAlpha = 1;
    if (!reducedMotion) starsFrame = requestAnimationFrame(drawStars);
  }
  function resizeEffects() { resizeCanvas(effectCanvas, effectContext); }
  function spawnParticles(amount = 45, kind = "starburst") {
    if (reducedMotion) return;
    const cap = isSmallScreen() ? 70 : 130;
    const colors = ["#f4d9a1", "#7de5e8", "#bba3ff", "#ffffff", "#f2c985"];
    for (let i = 0; i < amount && particles.length < cap; i++) {
      particles.push({ x: kind === "rain" ? Math.random() * innerWidth : innerWidth * .5, y: kind === "rain" ? -10 : innerHeight * .48, vx: (Math.random() - .5) * (kind === "rain" ? 1.5 : 8), vy: kind === "rain" ? Math.random() * 2 + 1 : -Math.random() * 7 - 2, gravity: kind === "rain" ? .01 : .14, size: Math.random() * 3 + 1.5, color: colors[i % colors.length], life: 100 + Math.random() * 80, type: kind });
    }
    if (!effectsFrame) effectsFrame = requestAnimationFrame(drawEffects);
  }
  function drawEffects() {
    effectContext.clearRect(0, 0, innerWidth, innerHeight);
    particles = particles.filter((particle) => particle.life-- > 0 && particle.y < innerHeight + 30);
    particles.forEach((particle) => {
      particle.vy += particle.gravity; particle.x += particle.vx; particle.y += particle.vy;
      effectContext.globalAlpha = Math.min(1, particle.life / 30); effectContext.fillStyle = particle.color;
      if (particle.type === "rain") { effectContext.beginPath(); effectContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2); effectContext.fill(); }
      else effectContext.fillRect(particle.x, particle.y, particle.size * 1.7, particle.size * .7);
    });
    effectContext.globalAlpha = 1;
    if (particles.length) effectsFrame = requestAnimationFrame(drawEffects);
    else { cancelAnimationFrame(effectsFrame); effectsFrame = 0; effectContext.clearRect(0, 0, innerWidth, innerHeight); }
  }
  seedStars(); resizeEffects(); drawStars();
  window.addEventListener("resize", () => { cancelAnimationFrame(starsFrame); seedStars(); resizeEffects(); if (reducedMotion) drawStars(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(starsFrame); }
    else if (!reducedMotion) { cancelAnimationFrame(starsFrame); drawStars(); }
  });

  /* ---------------- Toast and ORBIT guide ---------------- */
  function showToast(message) {
    const toast = $("toast"); toast.textContent = message; toast.classList.add("visible");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
  }
  function guideSay(message) {
    if (!message || guideMuted) return;
    $("guideText").textContent = message;
    lastGuideMessage = message;
  }
  function guideHintText() {
    const n = countOpened();
    if (state.opened.includes(finalCapsule.id)) return CONFIG.guide.done;
    if (isFinalUnlocked()) return CONFIG.guide.final;
    if (n === 0) return CONFIG.guide.start;
    if (n >= CONFIG.finalUnlockCount - 1) return CONFIG.guide.almost.replace("{need}", CONFIG.finalUnlockCount).replace("{n}", n);
    return CONFIG.guide.mid.replace("{n}", n).replace("{need}", CONFIG.finalUnlockCount);
  }
  $("guideHint").addEventListener("click", () => {
    const text = currentChapterIndex() === 4 ? CONFIG.guide.code : currentChapterIndex() === 5 ? CONFIG.guide.memory : guideHintText();
    guideSay(text.replace("{n}", countOpened()).replace("{need}", CONFIG.finalUnlockCount));
  });
  $("guideMute").addEventListener("click", () => {
    guideMuted = !guideMuted;
    $("orbitGuide").classList.toggle("muted", guideMuted);
    $("guideMute").setAttribute("aria-pressed", String(guideMuted));
    $("guideMute").setAttribute("aria-label", guideMuted ? "Aktifkan ORBIT" : "Senyapkan ORBIT");
    $("guideMute").textContent = guideMuted ? "+" : "×";
    if (!guideMuted) guideSay(guideHintText());
  });

  /* ---------------- Modal controller ---------------- */
  function openModal({ eyebrow = "ARTIFACT REVEALED", title = "Penemuan", content = "", symbol = "✧", actions = true, onContinue = null, continueLabel = "Lanjutkan perjalanan", returnFocus = document.activeElement } = {}) {
    clearInterval(revealTimer); revealTimer = null;
    activeModal = { onContinue };
    modalReturnFocus = returnFocus;
    $("modalEyebrow").textContent = eyebrow;
    $("modalTitle").textContent = title;
    $("modalBody").innerHTML = "";
    if (typeof content === "string") {
      const paragraph = document.createElement("p"); paragraph.textContent = content; $("modalBody").appendChild(paragraph);
    } else if (content instanceof Node) $("modalBody").appendChild(content);
    $("modalArt").querySelector("span").textContent = symbol;
    $("modalActions").hidden = !actions;
    $("modalContinue").querySelector("span").textContent = continueLabel;
    $("modalLayer").hidden = false;
    document.body.style.overflow = "hidden";
    $("modalClose").focus();
  }
  function closeModal() {
    clearInterval(revealTimer); revealTimer = null;
    $("modalLayer").hidden = true;
    document.body.style.overflow = "";
    activeModal = null;
    if (modalReturnFocus && typeof modalReturnFocus.focus === "function") modalReturnFocus.focus();
  }
  $("modalClose").addEventListener("click", closeModal);
  $("modalBack").addEventListener("click", closeModal);
  $("modalContinue").addEventListener("click", () => {
    const callback = activeModal && activeModal.onContinue;
    closeModal();
    if (typeof callback === "function") callback();
    else {
      const currentIndex = currentChapterIndex();
      goToChapter(chapters[Math.min(chapters.length - 1, currentIndex + 1)].id);
    }
  });
  $("modalLayer").addEventListener("click", (event) => { if (event.target === $("modalLayer")) closeModal(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!$("modalLayer").hidden) closeModal();
      else if (!$("themePanel").hidden) { $("themePanel").hidden = true; $("themeQuick").focus(); }
      else closeMobileMenu();
    }
    if (event.key === "Tab" && !$("modalLayer").hidden) {
      const focusables = $$("button:not(:disabled):not([hidden]),a[href],input:not(:disabled)", $("modalCard")).filter((item) => item.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  /* ---------------- Blind box / artifact collection ---------------- */
  function renderCapsules() {
    const host = $("capsuleGrid"); host.innerHTML = "";
    CONFIG.capsules.forEach((capsule, index) => {
      const opened = capsuleIsOpened(capsule.id);
      const locked = capsule.final && !isFinalUnlocked() && !opened;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `capsule${opened ? " opened" : ""}${locked ? " locked" : ""}${capsule.final ? " final" : ""}`;
      button.dataset.capsuleId = capsule.id;
      button.style.setProperty("--capsule-color", capsule.color);
      button.style.setProperty("--float-delay", `${index * -.85}s`);
      button.style.setProperty("--float-time", `${6 + index * .55}s`);
      button.disabled = locked;
      const hint = opened ? "Artefak ditemukan · buka kembali" : locked ? `Terkunci · ${CONFIG.finalUnlockCount} artefak dibutuhkan` : capsule.hint;
      button.innerHTML = `<span class="capsule-symbol" aria-hidden="true">${capsule.symbol}</span><span class="capsule-label">${capsule.label}</span><span class="capsule-hint"></span>`;
      button.querySelector(".capsule-hint").textContent = hint;
      button.setAttribute("aria-label", `${capsule.label}. ${opened ? "Sudah ditemukan, tekan untuk membaca kembali" : locked ? "Terkunci" : capsule.hint}`);
      button.addEventListener("click", () => openCapsule(capsule.id, button));
      host.appendChild(button);
    });
    updateProgress();
  }
  function updateProgress() {
    const n = countOpened();
    const percent = Math.round(n / ordinaryCapsules.length * 100);
    $("vaultProgressText").textContent = `${String(n).padStart(2, "0")} / ${String(ordinaryCapsules.length).padStart(2, "0")} ARTIFACTS DISCOVERED`;
    $("vaultProgressBar").style.width = `${percent}%`;
    $("vaultProgressPercent").textContent = `${String(percent).padStart(2, "0")}%`;
    $("starsFound").textContent = String(n).padStart(2, "0");
    $("secretsFound").textContent = String(state.foundCodes.length).padStart(2, "0");
    $("artifactsFound").textContent = String(state.opened.length).padStart(2, "0");
    const finalOpen = isFinalUnlocked();
    $("openFinalGift").disabled = !finalOpen && !capsuleIsOpened(finalCapsule.id);
    $("finalStatus").textContent = capsuleIsOpened(finalCapsule.id) ? "TRANSMISSION DISCOVERED" : finalOpen ? "SIGNAL READY" : "SIGNAL SEALED";
    $("finalStatus").classList.toggle("ready", finalOpen || capsuleIsOpened(finalCapsule.id));
    $("finalIntro").textContent = capsuleIsOpened(finalCapsule.id) ? "Pesan terakhir telah ditemukan. Kamu bisa membacanya kembali kapan saja." : finalOpen ? "Sinyal stabil. Pesan terakhir siap dibuka." : `Temukan setidaknya ${CONFIG.finalUnlockCount} artefak untuk membuka transmisi terakhir.`;
    $("sealedLetter").classList.toggle("unsealed", finalOpen);
    $("constellationState").textContent = state.opened.includes(finalCapsule.id) ? "ALL SIGNALS FOUND" : finalOpen ? "FINAL SIGNAL READY" : `${n} SIGNAL${n === 1 ? "" : "S"} RECEIVED`;
    renderConstellation();
    saveState();
  }
  function revealText(text, mode, target, done) {
    clearInterval(revealTimer);
    if (reducedMotion || mode === "fade") {
      target.textContent = text;
      done();
      return;
    }
    if (mode === "type") {
      let i = 0; target.textContent = "";
      revealTimer = setInterval(() => {
        target.textContent = text.slice(0, i += 2);
        if (i >= text.length) { clearInterval(revealTimer); revealTimer = null; done(); }
      }, 18);
    } else if (mode === "echo") {
      const words = text.split(" "); let i = 0; target.textContent = "";
      revealTimer = setInterval(() => {
        target.textContent += `${words[i++] || ""} `;
        if (i >= words.length) { clearInterval(revealTimer); revealTimer = null; done(); }
      }, 170);
    } else {
      target.textContent = text; done();
    }
  }
  function openCapsule(id, returnFocus) {
    const capsule = capsuleById(id);
    if (!capsule) return;
    if (capsule.final && !isFinalUnlocked() && !capsuleIsOpened(id)) {
      guideSay(CONFIG.guide.locked.replace("{need}", CONFIG.finalUnlockCount).replace("{n}", countOpened()));
      showToast(`Temukan ${CONFIG.finalUnlockCount} artefak biasa terlebih dahulu.`);
      return;
    }
    const alreadyOpened = capsuleIsOpened(id);
    const content = document.createElement("div");
    content.className = "capsule-reveal-content";
    const text = document.createElement("p");
    text.className = "quote";
    text.textContent = alreadyOpened ? capsule.text : "Menyelaraskan sinyal...";
    content.appendChild(text);
    openModal({ eyebrow: capsule.eyebrow, title: capsule.title, content, symbol: capsule.symbol, continueLabel: "Lanjutkan perjalanan", returnFocus: returnFocus || document.activeElement, onContinue: () => {
      if (!alreadyOpened) {
        state.opened = [...new Set([...state.opened, capsule.id])];
        saveState();
        renderCapsules();
        spawnParticles(capsule.reveal === "nova" ? 90 : 40, "starburst");
        if (isFinalUnlocked()) guideSay(CONFIG.guide.final);
        else if (countOpened() === 1) guideSay("Artefak pertama ditemukan. Konstelasi mulai menyala.");
        else guideSay(guideHintText().replace("{n}", countOpened()).replace("{need}", CONFIG.finalUnlockCount));
      }
      renderCapsules();
      $("vaultMessage").textContent = `${capsule.label} ${alreadyOpened ? "dibaca kembali" : "berhasil ditemukan"}.`;
      if (capsule.final) {
        goToChapter("afterglow");
      } else {
        goToChapter("constellation");
      }
    }});
    if (!alreadyOpened) {
      const revealTarget = $("modalBody").querySelector(".quote");
      revealText(capsule.text, capsule.reveal, revealTarget, () => {
        if (capsule.reveal === "nova") spawnParticles(65, "starburst");
      });
    }
  }
  $("resetJourney").addEventListener("click", () => {
    const confirmed = window.confirm("Reset semua artefak, kode rahasia, dan progres perjalanan? Tema planet tidak akan diubah.");
    if (!confirmed) return;
    state.opened = []; state.foundCodes = []; state.visited = ["arrival"]; state.lastChapter = "arrival";
    saveState(); renderCapsules(); renderThemeOptions();
    $("vaultMessage").textContent = "Perjalanan direset. Semua artefak kembali menunggu untuk ditemukan.";
    guideSay(CONFIG.guide.start); showToast("Progres perjalanan telah direset.");
  });

  /* ---------------- Constellation map and secret codes ---------------- */
  const starPoints = [
    { x: 85, y: 105, capsule: "signal", code: "ORBIT" }, { x: 175, y: 60, capsule: "orbit" }, { x: 235, y: 145, capsule: "echo", code: "STARDUST" },
    { x: 340, y: 90, capsule: "terra" }, { x: 435, y: 155, capsule: "nova", code: "RAMA20" }, { x: 520, y: 85, capsule: "unknown" },
    { x: 125, y: 265, capsule: "signal" }, { x: 220, y: 330, capsule: "orbit" }, { x: 345, y: 280, capsule: "echo" }, { x: 465, y: 350, capsule: "terra" },
    { x: 545, y: 255, capsule: "nova" }, { x: 310, y: 410, capsule: "unknown" }
  ];
  const starLinks = [[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7],[7,8],[8,9],[9,10],[2,8],[3,8],[4,10],[8,11],[7,11]];
  function renderConstellation() {
    const lineGroup = $("constellationLines"), starGroup = $("constellationStars");
    lineGroup.innerHTML = ""; starGroup.innerHTML = "";
    starLinks.forEach(([a,b]) => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", starPoints[a].x); line.setAttribute("y1", starPoints[a].y); line.setAttribute("x2", starPoints[b].x); line.setAttribute("y2", starPoints[b].y);
      const litA = capsuleIsOpened(starPoints[a].capsule), litB = capsuleIsOpened(starPoints[b].capsule);
      if (litA && litB) line.classList.add("lit");
      lineGroup.appendChild(line);
    });
    starPoints.forEach((point, index) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", point.x); circle.setAttribute("cy", point.y); circle.setAttribute("r", index % 3 === 0 ? 3.5 : 2.5);
      if (capsuleIsOpened(point.capsule)) circle.classList.add("lit");
      if (point.code) {
        circle.classList.add("code-star"); circle.setAttribute("tabindex", "0"); circle.setAttribute("role", "button");
        circle.setAttribute("aria-label", `Bintang rahasia ${index + 1}`); circle.setAttribute("data-code", point.code);
        circle.addEventListener("click", () => discoverCode(point.code, circle));
        circle.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); discoverCode(point.code, circle); } });
      }
      starGroup.appendChild(circle);
    });
  }
  function discoverCode(code, target) {
    if (state.foundCodes.includes(code)) {
      openModal({ eyebrow: "SECRET CODE / ARCHIVED", title: "Kode sudah ditemukan", symbol: "✧", content: `Kode ${code} sudah ada di arsip rahasiamu. Kamu bisa terus menjelajahi peta untuk menemukan pesan lain.`, returnFocus: target });
      return;
    }
    state.foundCodes.push(code); saveState(); updateProgress();
    openModal({ eyebrow: "HIDDEN FREQUENCY DETECTED", title: "Kode kosmik ditemukan", symbol: "✦", content: createCodeContent(code), returnFocus: target, onContinue: () => { showToast(`Kode ${code} disimpan ke arsip perjalanan.`); } });
    spawnParticles(24, "starburst");
    guideSay(`Kode ${code} berhasil ditemukan. Satu lagi rahasia masuk ke arsipmu.`);
  }
  function createCodeContent(code) {
    const wrapper = document.createElement("div");
    const p = document.createElement("p"); p.textContent = "Satu frekuensi tersembunyi telah diselaraskan.";
    const badge = document.createElement("p"); badge.className = "secret-code"; badge.textContent = code;
    const desc = document.createElement("p"); desc.textContent = "Simpan simbol ini sebagai bagian dari peta perjalanan. Kode rahasia bersifat bonus dan tidak diperlukan untuk membuka ucapan utama.";
    wrapper.append(p, badge, desc); return wrapper;
  }
  $("hintCode").addEventListener("click", () => openModal({ eyebrow: "ORBIT / NAVIGATION CLUE", title: "Ikuti titik yang menyala", symbol: "⌖", content: "Pada peta konstelasi, beberapa bintang dapat dipilih. Coba tekan titik yang memiliki fokus saat kamu menavigasi dengan keyboard, atau sentuh bintang yang tersebar di peta. Setiap kode yang ditemukan akan masuk ke arsip perjalanan. Fitur ini hanya bonus, jadi kamu tetap bisa menyelesaikan ucapan tanpa menemukan semuanya.", returnFocus: $("hintCode") }));

  /* ---------------- Memory observatory ---------------- */
  function renderMemoryCards() {
    const host = $("memoryGrid"); host.innerHTML = "";
    CONFIG.memoryCards.forEach((memory) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "memory-card reveal"; button.dataset.memoryId = memory.id;
      button.innerHTML = `<span class="memory-visual" aria-hidden="true"><span class="memory-glyph"></span></span><span class="eyebrow"></span><h3></h3><p></p><span class="memory-open" aria-hidden="true">↗</span>`;
      button.querySelector(".memory-glyph").textContent = memory.glyph;
      button.querySelector(".eyebrow").textContent = memory.number;
      button.querySelector("h3").textContent = memory.title;
      button.querySelector("p").textContent = memory.description;
      button.addEventListener("click", () => openMemory(memory, button));
      host.appendChild(button);
      if ("IntersectionObserver" in window) memoryRevealObserver.observe(button);
      else button.classList.add("visible");
    });
  }
  const memoryRevealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: .1 }) : { observe() {} };
  function openMemory(memory, target) {
    openModal({ eyebrow: memory.number, title: memory.title, symbol: memory.glyph, content: createMemoryContent(memory), returnFocus: target, continueLabel: "Kembali ke observatorium" });
  }
  function createMemoryContent(memory) {
    const wrapper = document.createElement("div");
    const lead = document.createElement("p"); lead.className = "quote"; lead.textContent = memory.description;
    const body = document.createElement("p"); body.textContent = memory.content;
    const hint = document.createElement("p"); hint.textContent = "Konten contoh dapat diedit pada CONFIG.memoryCards di script.js. Untuk menampilkan foto nyata, kamu bisa menambahkan elemen gambar dan path aset sendiri.";
    wrapper.append(lead, body, hint); return wrapper;
  }

  /* ---------------- Final gift and afterglow ---------------- */
  function openFinalGift() {
    if (!isFinalUnlocked() && !capsuleIsOpened(finalCapsule.id)) {
      showToast(`Temukan ${CONFIG.finalUnlockCount} artefak biasa untuk membuka surat.`);
      guideSay(CONFIG.guide.locked.replace("{need}", CONFIG.finalUnlockCount).replace("{n}", countOpened()));
      return;
    }
    openCapsule(finalCapsule.id, $("openFinalGift"));
  }
  $("openFinalGift").addEventListener("click", openFinalGift);
  $("replayJourney").addEventListener("click", () => goToChapter("arrival"));
  $("downloadJourney").addEventListener("click", () => {
    const lines = ["RAMA 20 · CATATAN PERJALANAN", `Tanggal: ${CONFIG.birthday}`, `Artefak ditemukan: ${state.opened.length}/${CONFIG.capsules.length}`, `Kode rahasia: ${state.foundCodes.length}/${CONFIG.secretCodes.length}`, `Tema planet terakhir: ${planetById(state.theme).name}`, "", "ARTEFAK:", ...state.opened.map((id) => `- ${capsuleById(id)?.label || id}: ${capsuleById(id)?.title || ""}`), "", "KODE YANG DITEMUKAN:", ...state.foundCodes.map((code) => `- ${code}`), "", "Semoga semestamu selalu punya cahaya untuk ditemukan."];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "rama20-catatan-perjalanan.txt"; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
    showToast("Catatan perjalanan disiapkan.");
  });

  /* ---------------- Music controls ---------------- */
  const audio = $("birthdayAudio");
  audio.src = CONFIG.audioSrc;
  audio.volume = CONFIG.audioVolume;
  $("musicVolume").value = CONFIG.audioVolume;
  function setMusicStatus(text) { $("musicStatus").textContent = text; }
  $("musicToggle").addEventListener("click", async () => {
    if (!audio.paused) { audio.pause(); return; }
    try { await audio.play(); }
    catch (_) { setMusicStatus("song.mp3 belum tersedia"); showToast("Periksa song.mp3 di folder yang sama dengan index.html."); }
  });
  audio.addEventListener("play", () => { $("musicToggle").querySelector(".music-icon").textContent = "Ⅱ"; $("musicToggle").setAttribute("aria-label", "Jeda musik"); $("musicToggle").setAttribute("aria-pressed", "true"); setMusicStatus("Playing soundtrack"); });
  audio.addEventListener("pause", () => { $("musicToggle").querySelector(".music-icon").textContent = "▶"; $("musicToggle").setAttribute("aria-label", "Putar musik"); $("musicToggle").setAttribute("aria-pressed", "false"); if (!audio.error) setMusicStatus("Silent orbit"); });
  audio.addEventListener("error", () => setMusicStatus("song.mp3 belum tersedia"));
  $("musicMute").addEventListener("click", () => {
    audio.muted = !audio.muted;
    $("musicMute").setAttribute("aria-pressed", String(audio.muted));
    $("musicMute").setAttribute("aria-label", audio.muted ? "Suarakan musik" : "Bisukan musik");
    $("musicMute").style.color = audio.muted ? "var(--muted)" : "var(--accent)";
    showToast(audio.muted ? "Musik dibisukan." : "Musik diaktifkan kembali.");
  });
  $("musicVolume").addEventListener("input", (event) => { audio.volume = Number(event.target.value); if (audio.volume > 0 && audio.muted) audio.muted = false; });

  /* ---------------- Startup ---------------- */
  renderThemeOptions();
  renderPlanetDetail(state.theme);
  renderCapsules();
  renderMemoryCards();
  renderConstellation();
  applyTheme(state.theme, false);
  updateScrollUI();
  guideSay(CONFIG.guide.welcome);
  // Tambahkan mini-planet dekoratif pada epilog.
  const afterglow = $("afterglowPlanets");
  CONFIG.planets.forEach((planet, index) => {
    const dot = document.createElement("span");
    dot.style.setProperty("--size", `${8 + index * 2}px`);
    dot.style.setProperty("--x", `${9 + ((index * 13) % 82)}%`);
    dot.style.setProperty("--y", `${14 + ((index * 19) % 68)}%`);
    dot.style.setProperty("--pcolor", planet.colors[0]);
    afterglow.appendChild(dot);
  });
  if (CONFIG.senderName.trim()) {
    // Pengirim opsional dapat ditampilkan pada surat final tanpa mengarang identitas.
    CONFIG.capsules.find((item) => item.final).text += `\n\nDengan hangat, ${CONFIG.senderName.trim()}.`;
  }
})();
