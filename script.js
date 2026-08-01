const catalog = {
  categories: [
    {
      id: "internet-only",
      label: "Internet Only",
      subtitle:
        "Solusi internetan cepat, stabil, dan tanpa ribet untuk kebutuhan harian rumah atau kosan.",
      packages: [
        {
          id: "io-20mbps",
          title: "Paket EZnet Telkomsel (20 Mbps)",
          price: "Rp170.000",
          priceUnit: "/bulan",
          promoTag: "PROMO",
          details: ["Tersedia di kota tertentu", "Biaya Pasang Rp99.000", "Harga sesuai area pasang"],
          bonus: null,
          ctaLabel: "Pilih Paket 20 Mbps"
        },
        {
          id: "io-50mbps",
          title: "Paket Internet Only (50 Mbps)",
          price: "Rp230.000",
          priceUnit: "/bulan",
          promoTag: "PROMO",
          details: ["Up to 50 Mbps", "Biaya Pasang Rp99.000", "Ideal untuk 5 perangkat"],
          bonus: null,
          ctaLabel: "Pilih Paket 50 Mbps"
        },
        {
          id: "io-75mbps",
          title: "Paket Internet Only (75 Mbps)",
          price: "Rp250.000",
          priceUnit: "/bulan",
          promoTag: "PROMO",
          details: ["Up to 75 Mbps", "Biaya Pasang Rp99.000", "Ideal untuk 7 perangkat"],
          bonus: null,
          ctaLabel: "Pilih Paket 75 Mbps"
        },
        {
          id: "io-150mbps",
          title: "Paket Internet Only (150 Mbps)",
          price: "Rp325.000",
          priceUnit: "/bulan",
          promoTag: null,
          details: ["Up to 150 Mbps", "Biaya Pasang Rp99.000", "Ideal untuk 15 perangkat"],
          bonus: null,
          ctaLabel: "Pilih Paket 150 Mbps"
        },
        {
          id: "io-200mbps",
          title: "Paket Internet Only (200 Mbps)",
          price: "Rp490.000",
          priceUnit: "/bulan",
          promoTag: null,
          details: ["Up to 200 Mbps", "Biaya Pasang Rp99.000", "Ideal untuk 20 perangkat"],
          bonus: null,
          ctaLabel: "Pilih Paket 200 Mbps"
        }
      ]
    },
    {
      id: "indihome-dynamic",
      label: "IndiHome Dynamic",
      subtitle:
        "Internet WiFi super cepat untuk rumah + dapet Ekstra Kuota HP Telkomsel untuk seluruh anggota keluarga!",
      packages: [
        {
          id: "dyn-50-15",
          title: "IndiHome Dynamic (50 Mbps - 15GB)",
          price: "Rp270.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 50 Mbps"],
          bonus: "Kuota Keluarga 15 GB",
          ctaLabel: "Pilih Paket 50 Mbps (15GB)"
        },
        {
          id: "dyn-50-30",
          title: "IndiHome Dynamic (50 Mbps - 30GB)",
          price: "Rp295.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 50 Mbps"],
          bonus: "Kuota Keluarga 30 GB",
          ctaLabel: "Pilih Paket 50 Mbps (30GB)"
        },
        {
          id: "dyn-75-15",
          title: "IndiHome Dynamic (75 Mbps - 15GB)",
          price: "Rp285.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 75 Mbps"],
          bonus: "Kuota Keluarga 15 GB",
          ctaLabel: "Pilih Paket 75 Mbps (15GB)"
        },
        {
          id: "dyn-75-30",
          title: "IndiHome Dynamic (75 Mbps - 30GB)",
          price: "Rp310.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 75 Mbps"],
          bonus: "Kuota Keluarga 30 GB",
          ctaLabel: "Pilih Paket 75 Mbps (30GB)"
        },
        {
          id: "dyn-100-15",
          title: "IndiHome Dynamic (100 Mbps - 15GB)",
          price: "Rp325.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 100 Mbps"],
          bonus: "Kuota Keluarga 15 GB",
          ctaLabel: "Pilih Paket 100 Mbps (15GB)"
        },
        {
          id: "dyn-100-30",
          title: "IndiHome Dynamic (100 Mbps - 30GB)",
          price: "Rp350.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 100 Mbps"],
          bonus: "Kuota Keluarga 30 GB",
          ctaLabel: "Pilih Paket 100 Mbps (30GB)"
        },
        {
          id: "dyn-150-15",
          title: "IndiHome Dynamic (150 Mbps - 15GB)",
          price: "Rp355.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 150 Mbps"],
          bonus: "Kuota Keluarga 15 GB",
          ctaLabel: "Pilih Paket 150 Mbps (15GB)"
        },
        {
          id: "dyn-150-30",
          title: "IndiHome Dynamic (150 Mbps - 30GB)",
          price: "Rp380.000",
          priceUnit: "/bulan",
          installFee: "Rp99.000",
          promoTag: null,
          details: ["Up to 150 Mbps"],
          bonus: "Kuota Keluarga 30 GB",
          ctaLabel: "Pilih Paket 150 Mbps (30GB)"
        }
      ]
    }
  ]
};

const pricingGrid = document.getElementById("pricing-grid");
const tabSubtitle = document.getElementById("tab-subtitle");
const tabs = Array.from(document.querySelectorAll(".tab"));
const output = document.getElementById("calculator-output");
const familySelect = document.getElementById("family-select");
const speedSelect = document.getElementById("speed-select");
const mobileBottomBar = document.getElementById("mobile-bottom-bar");
const heroSection = document.getElementById("hero");

let activeCategory = "internet-only";
let selectedPackageId = null;

function renderCategory(categoryId) {
  const category = catalog.categories.find((item) => item.id === categoryId);
  activeCategory = categoryId;
  tabSubtitle.textContent = category.subtitle;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.category === categoryId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  pricingGrid.innerHTML = category.packages
    .map((pkg) => {
      const isPromo = Boolean(pkg.promoTag);
      const isSelected = selectedPackageId === pkg.id;
      const isDynamicCategory = categoryId === "indihome-dynamic";
      const headerMarkup = isDynamicCategory
        ? `<div class="pricing-card__header">📶 <span>${pkg.bonus}</span></div>`
        : "";
      const detailMarkup = [
        ...(pkg.details || []).map((detail) => `<li>${detail}</li>`),
        ...(pkg.installFee ? [`<li>${pkg.installFee}</li>`] : [])
      ]
        .map((item) => item)
        .join("");

      return `
        <article class="pricing-card ${isPromo ? "pricing-card--promo" : ""} ${isSelected ? "selected" : ""}" data-package-id="${pkg.id}">
          ${headerMarkup}
          <div class="pricing-card__body">
            <h3 class="pricing-card__title">${pkg.title}</h3>
            <p class="pricing-card__price">${pkg.price}<span>${pkg.priceUnit}</span></p>
            <ul class="pricing-card__details">${detailMarkup}</ul>
            <div class="pricing-card__footer">
              <button class="pricing-card__cta" type="button">${pkg.ctaLabel}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  pricingGrid.querySelectorAll(".pricing-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".pricing-card__cta")) {
        selectedPackageId = card.dataset.packageId;
        highlightPackage(selectedPackageId);
      }
    });
  });
}

function highlightPackage(packageId) {
  selectedPackageId = packageId;
  document.querySelectorAll(".pricing-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.packageId === packageId);
  });

  const targetCard = document.querySelector(`[data-package-id="${packageId}"]`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function renderCalculator() {
  const familyMembers = Number(familySelect.value);
  const speed = Number(speedSelect.value);
  const dynamicCategory = catalog.categories.find((item) => item.id === "indihome-dynamic");
  const matches = dynamicCategory.packages.filter((pkg) =>
    pkg.details.some((detail) => detail.includes(`Up to ${speed} Mbps`))
  );

  output.classList.add("is-loading");
  setTimeout(() => {
    output.classList.remove("is-loading");

    if (!matches.length) {
      output.innerHTML = `
        <div class="calculator-empty">
          Belum ada rekomendasi pas — cek semua paket di bawah ini.
        </div>
        <a class="mini-card__button" href="#paket" role="button">Lihat semua paket</a>
      `;
      return;
    }

    const tier15 = matches.find((pkg) => pkg.bonus?.includes("15 GB"));
    const tier30 = matches.find((pkg) => pkg.bonus?.includes("30 GB"));
    const recommendation = familyMembers >= 4 ? tier30 || tier15 : tier15 || tier30;
    const recommendedLabel = familyMembers >= 4 ? "30GB" : "15GB";

    output.innerHTML = `
      <div class="recommendation-card">
        <p class="recommendation-card__text">Untuk ${familyMembers} anggota, disarankan ${recommendedLabel}.</p>
        <div class="mini-card-grid">
          ${tier15 ? `
            <div class="mini-card">
              <span class="mini-card__badge">15 GB</span>
              <h4>${tier15.title}</h4>
              <div class="mini-card__price">${tier15.price}</div>
              <button class="mini-card__button" data-package-id="${tier15.id}" type="button">Lihat Paket</button>
            </div>
          ` : ""}
          ${tier30 ? `
            <div class="mini-card">
              <span class="mini-card__badge">30 GB</span>
              <h4>${tier30.title}</h4>
              <div class="mini-card__price">${tier30.price}</div>
              <button class="mini-card__button" data-package-id="${tier30.id}" type="button">Lihat Paket</button>
            </div>
          ` : ""}
        </div>
      </div>
    `;

    output.querySelectorAll(".mini-card__button").forEach((button) => {
      button.addEventListener("click", () => {
        renderCategory("indihome-dynamic");
        highlightPackage(button.dataset.packageId);
      });
    });
  }, 150);
}

function observeHeroVisibility() {
  if (!heroSection) return;
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      mobileBottomBar.classList.toggle("visible", !entry.isIntersecting);
    },
    { threshold: 0.2 }
  );
  observer.observe(heroSection);
}

familySelect.addEventListener("change", renderCalculator);
speedSelect.addEventListener("change", renderCalculator);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderCategory(tab.dataset.category);
    if (tab.dataset.category === "indihome-dynamic") {
      renderCalculator();
    }
  });
});

renderCategory(activeCategory);
renderCalculator();
observeHeroVisibility();
