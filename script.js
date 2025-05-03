const products = [
  {
    name: "Wireless Earbuds",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355404238/QJ/XE/HG/25006117/jbl-tune-125-true-wireless-in-ear-earbuds.jpeg",
    description: "Top audio gear",
    availableOffline: "https://maps.app.goo.gl/kZ2YNCgzgExh1thq9"
  },
  {
    name: "USB-C Adapter",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcp76uMwx-Yl3WW47ET3PNJ0TvfNi5m15Uj-mwCZDNYs494i24OSixtGV8TM8tzk5CUgyYF0cI2o9u3bvXWILUQ2I6tfNJquUUP9ueVZ9KYRq1Kc5jQwv0",
    description: "Connect multiple devices",
    availableOffline: "https://maps.app.goo.gl/6UXDBEaJoKpByKKh7"
  },
  {
    name: "iPhone",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_bIfpKz4-QSLYGAvOZfj-S3y3yOasu3Gt8cH0dU1djVJYaGbHx4uygaXRhbjDDwNhp8_ct-sGadTOh_uzDVYM2tSlJq5i2KvSNwoGpW25k3BOF0YSZKfH5Ljs",
    description: "Premium smartphone",
    availableOffline: "https://maps.app.goo.gl/fm4vLWqZh1LHUEjA6"
  },
  {
    name: "Face Serum",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVpvoysozA5KaBM_FvKbdFdYQTHewdiMApAlnruU_dtmRZ0uGrcLyc1-r3ont19Xw2B-UmxRzmPWtvEZHPS6VWyRV72ko3GH72xb8zSwMVxO6c_3w_KRAgEQ",
    description: "Skin care essential",
    availableOffline: "https://maps.app.goo.gl/3cnhRwBKm39KjRSY8"
  },
  {
    name: "Shoes",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuPcvWkkyR5P4MVAx62G12qImBbAkmJe02xq4WH1akSPkP3ysCH__o-m2O4l-VwJB3Gi0dp5oz9l1-aGqRngu6hNCtdwtLsgj-85doW7jbHfCENnjClasAnlA",
    description: "Trending sneakers",
    availableOffline: "https://maps.app.goo.gl/UarqFHJzD53asV8s8"
  }
];

function renderProducts(filtered = products) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  filtered.forEach(p => {
    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.description}</p>
            <a href="${p.availableOffline}" target="_blank" class="btn btn-outline-primary btn-sm">Buy Offline</a>
          </div>
        </div>
      </div>`;
  });
}
renderProducts();

function searchProduct() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(input));
  renderProducts(filtered);
}

function toggleAI() {
  const box = document.getElementById("aiBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

async function handleAssistant() {
  const input = document.getElementById("assistantInput").value.trim();
  const responseDiv = document.getElementById("assistantResponse");
  if (!input) return;

  responseDiv.innerHTML = "Thinking...";

  const result = await fetch("https://api.codex.jaagrav.in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: input })
  });

  const data = await result.json();
  const reply = data.text;
  responseDiv.innerHTML = reply || "Sorry, something went wrong.";
}
