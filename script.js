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
  },
  {
    name: "Smart Watch",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSqe0_1U3Cg9y0YIXRx-4H8dSeUkdCtpNHxCHQer9pruODM5MwuWN9VQ9y4N7XFCZtP8AHpkU2wZqUd7xATSzB1F94UgpArKDqpds24CNnmD0iavogQcjO",
    description: "Track your fitness in style",
    availableOffline: "https://maps.app.goo.gl/6PQnjeQfutzPgkDc6"
  },
  {
    name: "Bluetooth Speaker",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNBd_jAqqdYf4mYUdNhQCbQUk3eObGuyHeUQ9Oj2dr0vPXfFm6aIhc0j20bG0YYKCqOuidK4ZumgjSMLiwXVJVzrTKknWCQxp8jsTIlyM5P65cLoM4Qw079A",
    description: "Portable sound companion",
    availableOffline: "https://maps.app.goo.gl/wRWyURfWmAC38Hvs8"
  },
  {
    name: "Laptop Stand",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTN2Uths8tmdH_IprYkuWdlUTHnjyI0gg1o2Rd1oBahbuJGUCXHf4pdb8wbaSXE_J_4d0t_-n5XMcQhaAMH0Hbafw5L44n5COQLaHPzNWPtLbPQ4BP0_IzR",
    description: "Ergonomic and foldable stand",
    availableOffline: "https://maps.app.goo.gl/4Lhvc6jL1YzJzyLZ7"
  },
  {
    name: "Amazon Fire TV Stick HD",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrnHMLXXMQPaaG-t0_BGJYhzMQuyPOfuynfCyh1qkJ2vZ1PZl0pJZL_E_7jgvJ9ooJOWH3lACvtOnDQVsNJH0iMZh8B6yeyg-glw-OOUBU-3_jsBufS7ijAw",
    description: "Enjoy the OTT's",
    availableOffline: "https://maps.app.goo.gl/PxKMh3PR3U4SFXjB9"
  },
  {
    name: "Cello Bottle",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRqU5Vimhhzvp6Qen1MeaeqRbR-OuMSOYv56QRGNfvGY4p0ne0gPZLDMDDoZ17ZHiOI6IMX3OLViZULE2ZMU92GerN9gGYLB3VAKI1dbsJ",
    description: "Crystal clear water",
    availableOffline: "https://maps.app.goo.gl/SB2XKLbn7kz8QcC37"
  }
];

const GEMINI_API_KEY = "AIzaSyBl-0xuiuGNbOkkkLQfz_aq8_h14Jlk3dE";

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

function showPopup() {
  const product = products[Math.floor(Math.random() * products.length)];
  const popup = document.getElementById("popup");
  const content = document.getElementById("popupContent");
  content.innerHTML = `<h5>Trending Now: ${product.name}</h5><img src="${product.image}" alt="${product.name}" style="width:100px; border-radius:8px;">`;
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 4000);
}
window.onload = showPopup;
async function handleAssistant() {
  const input = document.getElementById("assistantInput").value.trim();
  const responseDiv = document.getElementById("assistantResponse");
  if (!input) return;

  responseDiv.innerHTML = "Thinking...";

  const result = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: input }] }] })
    }
  );

  const data = await result.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
  responseDiv.innerHTML = reply || "Sorry, something went wrong.";
}
