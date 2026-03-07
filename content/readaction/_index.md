---
title: "ReadAction"
date: 2022-06-13T20:55:37+01:00
layout: "readaction-layout"
image: "/readaction/cover.jpeg"
showHero: false
---

{{< rawhtml >}}
<!-- WRITING CHALLENGE GENERATOR v3 -->
<!-- Partially generated with claude.ai (i prefer to be honest) -->
<style>
  #wc-hero {
    background-image: var(--wc-bg-img);
    background-size: cover;
    background-position: center;
  }
  #hero:empty { display: none; }
</style>

<div class="not-prose my-8">
  <!-- HERO BANNER with background image + overlay -->
  <div
    id="wc-hero"
    class="relative rounded-2xl overflow-hidden mb-6 shadow-lg"
  >
    <!-- dark overlay so text stays readable over any image -->
    <div class="absolute inset-0 bg-neutral-900/60 dark:bg-neutral-950/70"></div>

    <!-- Hero text -->
    <div class="relative z-10 px-8 py-10 text-center">
      <h2 class="text-2xl font-bold tracking-tight text-primary-400 mb-1 drop-shadow-md">
        ✍️ Générateur aléatoire de contraintes d'écriture (Beta)
      </h2>
      <p class="text-sm text-neutral-200 italic">
        Créez un nouvel ensemble de contraintes et commencez à écrire !
      </p>
    </div>
  </div>

  <!-- CARD -->
  <div class="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-md overflow-hidden max-w-3xl mx-auto">

    <!-- accent bar -->
    <div class="h-1 w-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600"></div>

    <!-- card label -->
    <div class="px-6 pt-5 pb-0">
      <span class="text-xs font-mono font-medium tracking-widest uppercase text-primary-500 dark:text-primary-400">
        Vos résultats :
      </span>
    </div>

    <!-- ── Constraints area ── -->
    <div id="wc-list" class="px-6 pt-3 pb-2">

      <!-- Placeholder -->
      <div id="wc-placeholder" class="py-8 text-center text-neutral-400 dark:text-neutral-500 italic text-sm">
        Appuyez sur le bouton ci-dessous pour générer vos contraintes.
      </div>

    </div>

    <!-- ── Buttons ── -->
    <div class="px-6 pb-4 flex flex-wrap gap-3 justify-center items-center">
      <button
        onclick="wcGenerate()"
        class="inline-flex items-center gap-2 px-6 py-1 rounded-xl bg-primary-600 hover:bg-primary-500 active:scale-95 text-white text-sm font-mono font-medium tracking-wide transition-all duration-150 shadow-sm"
      >
        Générez votre challenge !
      </button>
      <button
        id="wc-copy-btn"
        onclick="wcCopy()"
        class="hidden inline-flex items-center gap-2 px-6 py-1 rounded-xl border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-primary-400 hover:text-primary-500 text-sm font-mono tracking-wide transition-all duration-150"
      >
        Copier les résultats
      </button>
    </div>

  </div>
</div>


<!-- Loading parameters -->
<script src="./fr-constraints.js"></script>

<script>
/* ================================================================
   Apply background image to hero — FIX: removed wc-body-bg reference
   ================================================================ */
(function () {
  const hero = document.getElementById('wc-hero');
  if (WC_COVER_IMAGE) {
    hero.style.setProperty('--wc-bg-img', `url('${WC_COVER_IMAGE}')`);
  } else {
    hero.style.background = '#262626';
  }
})();

/* ================================================================
   GENERATOR LOGIC
   ================================================================ */
let wcRollCount = 0;
let wcLast = null;

function wcPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function wcGenerate() {
  const raw = wcPick(WC_CONSTRAINTS.mustInclude);

  wcRollCount++;
  wcLast = {
    wordCount: wcPick(WC_CONSTRAINTS.wordCount),
    genre:     wcPick(WC_CONSTRAINTS.genre),
    pov:       wcPick(WC_CONSTRAINTS.pov),
    setting:   wcPick(WC_CONSTRAINTS.setting),
    include: typeof raw === "function" ? raw() : raw,
  };
  wcRender(wcLast);
}

function wcRender(c) {
  const tiles = [
    { label: "Longueur",      value: c.wordCount.value, hint: c.wordCount.hint, highlight: false },
    { label: "Genre / Style", value: c.genre.value,     hint: c.genre.hint,     highlight: false },
    { label: "Point de vue",  value: c.pov.value,       hint: c.pov.hint,       highlight: false },
    { label: "Cadre",         value: c.setting.value,   hint: c.setting.hint,   highlight: false },
    { label: "À inclure",     value: c.include,         hint: null,             highlight: false  },
  ];

  document.getElementById('wc-placeholder')?.remove();

  // Layout: row 1 = first 3 tiles, row 2 = last 2 tiles centered
  const list = document.getElementById('wc-list');
  list.innerHTML = `
    <div style="display:flex; flex-wrap:wrap; gap:12px; justify-content:center; padding: 8px 0 4px;">
      ${tiles.map((tile, i) => `
        <div
          class="wc-row opacity-0 translate-y-2 transition-all duration-300"
          style="
            transition-delay: ${i * 60}ms;
            flex: 1 1 calc(33% - 12px);
            min-width: 160px;
            max-width: ${i >= 3 ? '240px' : '100%'};
            background: rgba(0,0,0,0.25);
            border: 1px solid rgba(0,0,0,0.5);
            border-radius: 12px;
            padding: 14px 16px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <div class="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2">
            ${tile.label}
          </div>
          <div class="text-sm font-semibold text-neutral-800 dark:text-neutral-100 leading-snug">
            ${tile.highlight
              ? `<span class="inline-block bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md px-2 py-0.5 italic font-medium">${tile.value}</span>`
              : tile.value
            }
          </div>
          ${tile.hint ? `<div class="text-xs font-mono text-neutral-400 dark:text-neutral-500 mt-1">${tile.hint}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;

  requestAnimationFrame(() => {
    list.querySelectorAll('.wc-row').forEach(el => {
      el.getBoundingClientRect();
      el.classList.remove('opacity-0', 'translate-y-2');
    });
  });

  document.getElementById('wc-copy-btn').classList.remove('hidden');
}

function wcCopy() {
  if (!wcLast) return;
  const c = wcLast;
  const text = [
    `Challenge d'écriture :`,
    ``,
    `- Longueur : ${c.wordCount.value}`,
    `- Genre : ${c.genre.value}`,
    `- Point de vue : ${c.pov.value}`,
    `- Cadre : ${c.setting.value}`,
    `- À inclure : ${c.include}`,
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('wc-copy-btn');
    btn.textContent = '✓ Copié !';
    setTimeout(() => { btn.textContent = 'Copier les résultats'; }, 2000);
  });
}
</script>
{{< /rawhtml >}}