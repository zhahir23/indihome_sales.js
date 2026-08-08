const catalog = {
  categories: [
    {
      id: "all-packages",
      label: "Semua Paket",
      subtitle: "Bandingkan seluruh paket internet dan hiburan dalam satu layar.",
      packages: [
        {
          id: "all-internet-50-75",
          categoryId: "internet",
          categoryLabel: "Internet",
          title: "Internet",
          speedLabel: "50 → 75 Mbps",
          speedValue: 75,
          price: "Rp230.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 50 → 75 Mbps",
          description: "Paket internet rumah yang stabil"
        },
        {
          id: "all-internet-75-100",
          categoryId: "internet",
          categoryLabel: "Internet",
          title: "Internet",
          speedLabel: "75 → 100 Mbps",
          speedValue: 100,
          price: "Rp250.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 75 → 100 Mbps",
          description: "Cocok untuk rumah dengan beberapa perangkat"
        },
        {
          id: "all-internet-100-150",
          categoryId: "internet",
          categoryLabel: "Internet",
          title: "Internet",
          speedLabel: "100 → 150 Mbps",
          speedValue: 150,
          price: "Rp290.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 100 → 150 Mbps",
          description: "Kecepatan lebih nyaman untuk keluarga"
        },
        {
          id: "all-internet-150-200",
          categoryId: "internet",
          categoryLabel: "Internet",
          title: "Internet",
          speedLabel: "150 → 200 Mbps",
          speedValue: 200,
          price: "Rp325.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 150 → 200 Mbps",
          description: "Ideal untuk kebutuhan streaming dan work from home"
        },
        {
          id: "all-internet-200-300",
          categoryId: "internet",
          categoryLabel: "Internet",
          title: "Internet",
          speedLabel: "200 → 300 Mbps",
          speedValue: 300,
          price: "Rp490.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 200 → 300 Mbps",
          description: "Pilihan premium untuk rumah besar"
        },
        {
          id: "all-game-50-75",
          categoryId: "internet-game",
          categoryLabel: "Internet + Game",
          title: "Internet + Game",
          speedLabel: "50 → 75 Mbps",
          speedValue: 75,
          price: "Rp290.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 50 → 75 Mbps",
          description: "Lebih stabil untuk bermain game online"
        },
        {
          id: "all-game-75-100",
          categoryId: "internet-game",
          categoryLabel: "Internet + Game",
          title: "Internet + Game",
          speedLabel: "75 → 100 Mbps",
          speedValue: 100,
          price: "Rp310.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 75 → 100 Mbps",
          description: "Nyaman untuk multiplayer dan streaming"
        },
        {
          id: "all-game-100-150",
          categoryId: "internet-game",
          categoryLabel: "Internet + Game",
          title: "Internet + Game",
          speedLabel: "100 → 150 Mbps",
          speedValue: 150,
          price: "Rp350.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 100 → 150 Mbps",
          description: "Pas bagi rumah yang aktif online"
        },
        {
          id: "all-game-150-200",
          categoryId: "internet-game",
          categoryLabel: "Internet + Game",
          title: "Internet + Game",
          speedLabel: "150 → 200 Mbps",
          speedValue: 200,
          price: "Rp385.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 150 → 200 Mbps",
          description: "Menunjang banyak perangkat dan game"
        },
        {
          id: "all-game-200-300",
          categoryId: "internet-game",
          categoryLabel: "Internet + Game",
          title: "Internet + Game",
          speedLabel: "200 → 300 Mbps",
          speedValue: 300,
          price: "Rp550.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 200 → 300 Mbps",
          description: "Pilihan premium untuk pengalaman gaming"
        },
        {
          id: "all-maxstream-50-75",
          categoryId: "internet-maxstream",
          categoryLabel: "Internet + MAXstream TV",
          title: "Internet + MAXstream TV",
          speedLabel: "50 → 75 Mbps",
          speedValue: 75,
          price: "Rp345.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 50 → 75 Mbps",
          description: "Paket hiburan rumah dengan TV digital"
        },
        {
          id: "all-maxstream-75-100",
          categoryId: "internet-maxstream",
          categoryLabel: "Internet + MAXstream TV",
          title: "Internet + MAXstream TV",
          speedLabel: "75 → 100 Mbps",
          speedValue: 100,
          price: "Rp365.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 75 → 100 Mbps",
          description: "Cocok untuk keluarga yang suka menonton"
        },
        {
          id: "all-maxstream-100-150",
          categoryId: "internet-maxstream",
          categoryLabel: "Internet + MAXstream TV",
          title: "Internet + MAXstream TV",
          speedLabel: "100 → 150 Mbps",
          speedValue: 150,
          price: "Rp405.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 100 → 150 Mbps",
          description: "Kualitas streaming lebih lancar"
        },
        {
          id: "all-maxstream-150-200",
          categoryId: "internet-maxstream",
          categoryLabel: "Internet + MAXstream TV",
          title: "Internet + MAXstream TV",
          speedLabel: "150 → 200 Mbps",
          speedValue: 200,
          price: "Rp460.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 150 → 200 Mbps",
          description: "Paket rumah dengan banyak aktivitas"
        },
        {
          id: "all-maxstream-200-300",
          categoryId: "internet-maxstream",
          categoryLabel: "Internet + MAXstream TV",
          title: "Internet + MAXstream TV",
          speedLabel: "200 → 300 Mbps",
          speedValue: 300,
          price: "Rp625.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 200 → 300 Mbps",
          description: "Untuk rumah besar dan banyak pengguna"
        },
        {
          id: "all-movie-50-75",
          categoryId: "internet-movie",
          categoryLabel: "Internet + Movie Complete",
          title: "Internet + Movie Complete",
          speedLabel: "50 → 75 Mbps",
          speedValue: 75,
          price: "Rp349.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 50 → 75 Mbps",
          description: "Paket lengkap untuk hiburan rumah"
        },
        {
          id: "all-movie-75-100",
          categoryId: "internet-movie",
          categoryLabel: "Internet + Movie Complete",
          title: "Internet + Movie Complete",
          speedLabel: "75 → 100 Mbps",
          speedValue: 100,
          price: "Rp369.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 75 → 100 Mbps",
          description: "Cocok untuk menonton dan browsing"
        },
        {
          id: "all-movie-100-150",
          categoryId: "internet-movie",
          categoryLabel: "Internet + Movie Complete",
          title: "Internet + Movie Complete",
          speedLabel: "100 → 150 Mbps",
          speedValue: 150,
          price: "Rp409.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 100 → 150 Mbps",
          description: "Ideal untuk streaming sekaligus browsing"
        },
        {
          id: "all-movie-150-200",
          categoryId: "internet-movie",
          categoryLabel: "Internet + Movie Complete",
          title: "Internet + Movie Complete",
          speedLabel: "150 → 200 Mbps",
          speedValue: 200,
          price: "Rp439.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 150 → 200 Mbps",
          description: "Paket nyaman untuk aktivitas rumah"
        },
        {
          id: "all-movie-200-300",
          categoryId: "internet-movie",
          categoryLabel: "Internet + Movie Complete",
          title: "Internet + Movie Complete",
          speedLabel: "200 → 300 Mbps",
          speedValue: 300,
          price: "Rp609.000",
          priceUnit: "/bulan",
          ctaLabel: "Lihat Paket 200 → 300 Mbps",
          description: "Pilihan premium untuk keluarga besar"
        }
      ]
    },
    {
      id: "internet",
      label: "Internet",
      subtitle: "Paket internet rumah dengan kecepatan stabil untuk kebutuhan harian.",
      packages: [
        { id: "internet-50-75", title: "Internet", speedLabel: "50 → 75 Mbps", speedValue: 75, price: "Rp230.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 50 → 75 Mbps", description: "Paket internet rumah yang stabil" },
        { id: "internet-75-100", title: "Internet", speedLabel: "75 → 100 Mbps", speedValue: 100, price: "Rp250.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 75 → 100 Mbps", description: "Cocok untuk rumah dengan beberapa perangkat" },
        { id: "internet-100-150", title: "Internet", speedLabel: "100 → 150 Mbps", speedValue: 150, price: "Rp290.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 100 → 150 Mbps", description: "Kecepatan lebih nyaman untuk keluarga" },
        { id: "internet-150-200", title: "Internet", speedLabel: "150 → 200 Mbps", speedValue: 200, price: "Rp325.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 150 → 200 Mbps", description: "Ideal untuk streaming dan work from home" },
        { id: "internet-200-300", title: "Internet", speedLabel: "200 → 300 Mbps", speedValue: 300, price: "Rp490.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 200 → 300 Mbps", description: "Pilihan premium untuk rumah besar" }
      ]
    },
    {
      id: "internet-game",
      label: "Internet + Game",
      subtitle: "Paket yang tetap lancar untuk aktivitas online, streaming, dan gaming.",
      packages: [
        { id: "game-50-75", title: "Internet + Game", speedLabel: "50 → 75 Mbps", speedValue: 75, price: "Rp290.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 50 → 75 Mbps", description: "Lebih stabil untuk bermain game online" },
        { id: "game-75-100", title: "Internet + Game", speedLabel: "75 → 100 Mbps", speedValue: 100, price: "Rp310.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 75 → 100 Mbps", description: "Nyaman untuk multiplayer dan streaming" },
        { id: "game-100-150", title: "Internet + Game", speedLabel: "100 → 150 Mbps", speedValue: 150, price: "Rp350.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 100 → 150 Mbps", description: "Pas bagi rumah yang aktif online" },
        { id: "game-150-200", title: "Internet + Game", speedLabel: "150 → 200 Mbps", speedValue: 200, price: "Rp385.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 150 → 200 Mbps", description: "Menunjang banyak perangkat dan game" },
        { id: "game-200-300", title: "Internet + Game", speedLabel: "200 → 300 Mbps", speedValue: 300, price: "Rp550.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 200 → 300 Mbps", description: "Pilihan premium untuk pengalaman gaming" }
      ]
    },
    {
      id: "internet-maxstream",
      label: "Internet + MAXstream TV",
      subtitle: "Paket lengkap untuk kebutuhan internet rumah plus hiburan TV.",
      packages: [
        { id: "maxstream-50-75", title: "Internet + MAXstream TV", speedLabel: "50 → 75 Mbps", speedValue: 75, price: "Rp345.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 50 → 75 Mbps", description: "Paket hiburan rumah dengan TV digital" },
        { id: "maxstream-75-100", title: "Internet + MAXstream TV", speedLabel: "75 → 100 Mbps", speedValue: 100, price: "Rp365.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 75 → 100 Mbps", description: "Cocok untuk keluarga yang suka menonton" },
        { id: "maxstream-100-150", title: "Internet + MAXstream TV", speedLabel: "100 → 150 Mbps", speedValue: 150, price: "Rp405.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 100 → 150 Mbps", description: "Kualitas streaming lebih lancar" },
        { id: "maxstream-150-200", title: "Internet + MAXstream TV", speedLabel: "150 → 200 Mbps", speedValue: 200, price: "Rp460.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 150 → 200 Mbps", description: "Paket rumah dengan banyak aktivitas" },
        { id: "maxstream-200-300", title: "Internet + MAXstream TV", speedLabel: "200 → 300 Mbps", speedValue: 300, price: "Rp625.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 200 → 300 Mbps", description: "Untuk rumah besar dan banyak pengguna" }
      ]
    },
    {
      id: "internet-movie",
      label: "Internet + Movie",
      subtitle: "Paket lengkap untuk internet rumah dan hiburan film keluarga.",
      packages: [
        { id: "movie-50-75", title: "Internet + Movie Complete", speedLabel: "50 → 75 Mbps", speedValue: 75, price: "Rp349.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 50 → 75 Mbps", description: "Paket lengkap untuk hiburan rumah" },
        { id: "movie-75-100", title: "Internet + Movie Complete", speedLabel: "75 → 100 Mbps", speedValue: 100, price: "Rp369.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 75 → 100 Mbps", description: "Cocok untuk menonton dan browsing" },
        { id: "movie-100-150", title: "Internet + Movie Complete", speedLabel: "100 → 150 Mbps", speedValue: 150, price: "Rp409.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 100 → 150 Mbps", description: "Ideal untuk streaming sekaligus browsing" },
        { id: "movie-150-200", title: "Internet + Movie Complete", speedLabel: "150 → 200 Mbps", speedValue: 200, price: "Rp439.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 150 → 200 Mbps", description: "Paket nyaman untuk aktivitas rumah" },
        { id: "movie-200-300", title: "Internet + Movie Complete", speedLabel: "200 → 300 Mbps", speedValue: 300, price: "Rp609.000", priceUnit: "/bulan", ctaLabel: "Lihat Paket 200 → 300 Mbps", description: "Pilihan premium untuk keluarga besar" }
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

let activeCategory = "all-packages";
let selectedPackageId = null;

function parsePrice(value) {
  return Number(String(value).replace(/\D/g, ""));
}

function renderCategory(categoryId) {
  const category = catalog.categories.find((item) => item.id === categoryId);
  if (!category) return;

  activeCategory = categoryId;
  tabSubtitle.textContent = category.subtitle;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.category === categoryId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  pricingGrid.innerHTML = category.packages
    .map((pkg) => {
      const isSelected = selectedPackageId === pkg.id;
      const headerMarkup = "";
      const detailMarkup = [
        `<li>${pkg.speedLabel}</li>`,
        `<li>Biaya pasang Rp99.000</li>`,
        `<li>${pkg.description || "Harga sesuai area pasang"}</li>`
      ].join("");
      // create a WhatsApp link that pre-fills a message with package info
      const waHref =
        "https://wa.me/6281234567890?text=" +
        encodeURIComponent(`Halo, saya mau pesan paket ${pkg.title} ${pkg.speedLabel}`);

      return `
        <article class="pricing-card ${isSelected ? "selected" : ""}" data-package-id="${pkg.id}">
          ${headerMarkup}
          <div class="pricing-card__body">
            <h3 class="pricing-card__title">${pkg.title}</h3>
            <p class="pricing-card__price">${pkg.price}<span>${pkg.priceUnit}</span></p>
            <ul class="pricing-card__details">${detailMarkup}</ul>
            <div class="pricing-card__footer">
              <a class="pricing-card__cta" href="${waHref}" target="_blank" rel="noreferrer">${pkg.ctaLabel}</a>
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
  const requestedLabel = {
    50: "50 → 75 Mbps",
    75: "75 → 100 Mbps",
    100: "100 → 150 Mbps",
    150: "150 → 200 Mbps",
    200: "200 → 300 Mbps",
    300: "200 → 300 Mbps"
  }[speed];

  const matches = catalog.categories
    .filter((item) => item.id !== "all-packages")
    .flatMap((category) =>
      category.packages
        .filter((pkg) => pkg.speedLabel === requestedLabel)
        .map((pkg) => ({ ...pkg, categoryId: category.id, categoryLabel: category.label }))
    );

  output.classList.add("is-loading");
  setTimeout(() => {
    output.classList.remove("is-loading");

    if (!matches.length) {
      output.innerHTML = `
        <div class="calculator-empty">
          Belum ada rekomendasi untuk kecepatan ini — cek semua paket di bawah ini.
        </div>
        <a class="mini-card__button" href="#paket" role="button">Lihat semua paket</a>
      `;
      return;
    }

    const sortedMatches = [...matches].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const cheapest = sortedMatches[0];
    const recommendedLabel = familyMembers >= 4 ? "paket premium" : "paket hemat";

    output.innerHTML = `
      <div class="recommendation-card">
        <p class="recommendation-card__text">Untuk ${familyMembers} anggota, ${recommendedLabel} untuk ${speed} Mbps adalah ${cheapest.title}.</p>
        <div class="mini-card-grid">
          <div class="mini-card">
            <span class="mini-card__badge">${cheapest.categoryLabel}</span>
            <h4>${cheapest.speedLabel}</h4>
            <div class="mini-card__price">${cheapest.price}</div>
            <button class="mini-card__button" data-package-id="${cheapest.id}" data-category-id="${cheapest.categoryId}" type="button">Lihat Paket</button>
          </div>
        </div>
      </div>
    `;

    output.querySelectorAll(".mini-card__button").forEach((button) => {
      button.addEventListener("click", () => {
        renderCategory(button.dataset.categoryId);
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
    renderCalculator();
  });
});

renderCategory(activeCategory);
renderCalculator();
observeHeroVisibility();
