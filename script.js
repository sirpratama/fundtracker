const img = {
  fundtracker: "assets/fundtracker-mark.svg",
  stockbit: "assets/stockbit.svg",
  andry: "assets/pilots/andry-hakim.jpg",
  hengky: "assets/pilots/hengky-adinata.jpg",
  david: "assets/pilots/david-noah.jpg",
  belvin: "assets/pilots/belvin-tannadi.jpg",
  commodity: "assets/portfolios/commodity-driven.svg",
  mbg: "assets/portfolios/mbg-proxy.svg",
  nickel: "assets/portfolios/nickel-ev-chain.svg",
  bank: "assets/portfolios/bank-dividend-core.svg",
  infra: "assets/portfolios/nusantara-infra.svg",
  cpo: "assets/portfolios/cpo-export-basket.svg",
  dataCenter: "assets/portfolios/data-center-proxy.svg",
  sharia: "assets/portfolios/sharia-leaders.svg",
  bumn: "assets/portfolios/bumn-dividend.svg",
  ramadan: "assets/portfolios/ramadan-consumer.svg"
};

const featured = [
  { title: "Commodity - Driven", author: "Andry Hakim", image: "assets/featured/commodity-coal.jpg", avatar: img.andry },
  { title: "MBG - Proxy", author: "Hengky Adinata", image: "assets/featured/bgn-logo.png", avatar: img.hengky, visual: "logo" },
  { title: "Nickel EV Chain", author: "David Noah", image: "assets/featured/nickel-ore.jpg", avatar: img.david },
  { title: "Bank Dividend Core", author: "Belvin", image: "assets/featured/bni-logo.svg", avatar: img.belvin, visual: "logo" }
];

const topPerformers = [
  { metric: "+42.7%", title: "Commodity - Driven", author: "Andry Hakim", image: "assets/top-performers/commodity-driven.jpg" },
  { metric: "+36.2%", title: "MBG - Proxy", author: "Hengky Adinata", image: "assets/top-performers/mbg-proxy.png" },
  { metric: "+31.4%", title: "Nickel EV Chain", author: "David Noah", image: "assets/top-performers/nickel-ev-chain.jpg" },
  { metric: "+26.8%", title: "Nusantara Infra", author: "FundTracker Research", image: "assets/top-performers/nusantara-infra.svg" },
  { metric: "+23.6%", title: "CPO Export Basket", author: "Andry Hakim", image: "assets/top-performers/cpo-export-basket.jpg" },
  { metric: "+19.5%", title: "Data Center Proxy", author: "David Noah", image: "assets/top-performers/data-center-proxy.svg" },
  { metric: "+17.3%", title: "Sharia Leaders", author: "Belvin", image: "assets/top-performers/sharia-leaders.jpg" },
  { metric: "+15.8%", title: "BUMN Dividend", author: "Hengky Adinata", image: "assets/top-performers/bank-dividend-core.svg" }
];

const popular = [
  { metric: "Rp142.8B", suffix: " Dana Terpantau", title: "Commodity - Driven", author: "Andry Hakim", image: "assets/popular/commodity-popular.jpg" },
  { metric: "Rp118.4B", suffix: " Dana Terpantau", title: "Bank Dividend Core", author: "Belvin", image: "assets/popular/bumn-popular.svg" },
  { metric: "Rp96.7B", suffix: " Dana Terpantau", title: "MBG - Proxy", author: "Hengky Adinata", image: "assets/popular/mbg-popular.png" },
  { metric: "Rp82.2B", suffix: " Dana Terpantau", title: "Nickel EV Chain", author: "David Noah", image: "assets/popular/nickel-popular.jpg" },
  { metric: "Rp74.9B", suffix: " Dana Terpantau", title: "BUMN Dividend", author: "FundTracker Research", image: "assets/popular/bumn-popular.svg" },
  { metric: "Rp63.1B", suffix: " Dana Terpantau", title: "CPO Export Basket", author: "Andry Hakim", image: "assets/popular/cpo-popular.jpg" },
  { metric: "Rp51.6B", suffix: " Dana Terpantau", title: "Sharia Leaders", author: "Belvin", image: "assets/popular/sharia-popular.jpg" },
  { metric: "Rp44.8B", suffix: " Dana Terpantau", title: "Ramadan Consumer", author: "FundTracker Research", image: "assets/popular/ramadan-popular.jpg" }
];

const pilots = [
  { name: "Andry Hakim", count: "8 IDX Portfolios", image: img.andry },
  { name: "Hengky Adinata", count: "6 IDX Portfolios", image: img.hengky },
  { name: "David Noah", count: "5 IDX Portfolios", image: img.david },
  { name: "Belvin", count: "4 IDX Portfolios", image: img.belvin }
];

function featureCard(item) {
  return `
    <a class="feature-card" href="#" aria-label="${item.title}">
      <img class="${item.visual === "logo" ? "feature-logo-image" : item.visual === "app" ? "feature-app-image" : ""}" src="${item.image}" alt="${item.visual === "app" ? `${item.title} app prototype` : `${item.title} image`}" loading="lazy" />
      <div class="feature-content">
        <span class="feature-badge">IDX Theme</span>
        <p class="feature-title">${item.title}</p>
        <div class="byline"><span>by</span><img src="${item.avatar}" alt="" loading="lazy" /><span>${item.author}</span></div>
      </div>
    </a>`;
}

function rankItem(item, index) {
  const extra = index > 3 ? " is-extra" : "";
  return `
    <a class="rank-item${extra}" href="#">
      <div class="rank-avatar"><img src="${item.image}" alt="${item.title} Image" loading="lazy" /></div>
      <div>
        <p class="metric-line"><span class="metric">${item.metric}</span>${item.suffix ? `<span class="metric-suffix">${item.suffix}</span>` : ""}</p>
        <p class="rank-title">${item.title}</p>
        <p class="rank-author">${item.author}</p>
      </div>
      <span class="chevron" aria-hidden="true"></span>
    </a>`;
}

function pilotCard(item) {
  return `
    <a class="pilot-card" href="#" aria-label="${item.name}">
      <img src="${item.image}" alt="${item.name} Image" loading="lazy" />
      <div><p class="pilot-name">${item.name}</p><p class="pilot-count">${item.count}</p></div>
    </a>`;
}

document.querySelector("#featuredGrid").innerHTML = featured.map(featureCard).join("");
document.querySelector("#topPerformers").innerHTML = topPerformers.map(rankItem).join("");
document.querySelector("#popularList").innerHTML = popular.map(rankItem).join("");
document.querySelector("#pilotTrack").innerHTML = [...pilots, ...pilots, ...pilots].map(pilotCard).join("");

const tabs = [...document.querySelectorAll(".tabs button")];
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => {
      button.classList.remove("active");
      button.removeAttribute("aria-selected");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
  });
});

const moreButton = document.querySelector("#moreButton");
const performance = document.querySelector(".performance-section");
moreButton.addEventListener("click", () => {
  const expanded = performance.classList.toggle("expanded");
  moreButton.textContent = expanded ? "Less" : "More";
});
