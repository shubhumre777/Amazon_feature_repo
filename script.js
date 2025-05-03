
const products = [
  {
    name: "Wireless Earbuds",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355404238/QJ/XE/HG/25006117/jbl-tune-125-true-wireless-in-ear-earbuds.jpeg",
    description: "Top audio gear",
    availableOffline: "https://maps.app.goo.gl/kZ2YNCgzgExh1thq9",
    availableOnline: "https://www.amazon.in/s?k=wireless+earbuds"
  },
  {
    name: "USB-C Adapter",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcp76uMwx-Yl3WW47ET3PNJ0TvfNi5m15Uj-mwCZDNYs494i24OSixtGV8TM8tzk5CUgyYF0cI2o9u3bvXWILUQ2I6tfNJquUUP9ueVZ9KYRq1Kc5jQwv0",
    description: "Connect multiple devices",
    availableOffline: "https://maps.app.goo.gl/6UXDBEaJoKpByKKh7",
    availableOnline: "https://www.amazon.in/s?k=usb+c+adapter"
  },
  {
    name: "iPhone",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_bIfpKz4-QSLYGAvOZfj-S3y3yOasu3Gt8cH0dU1djVJYaGbHx4uygaXRhbjDDwNhp8_ct-sGadTOh_uzDVYM2tSlJq5i2KvSNwoGpW25k3BOF0YSZKfH5Ljs",
    description: "Premium smartphone",
    availableOffline: "https://maps.app.goo.gl/fm4vLWqZh1LHUEjA6",
    availableOnline: "https://www.amazon.in/s?k=iphone"
  },
  {
    name: "Face Serum",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVpvoysozA5KaBM_FvKbdFdYQTHewdiMApAlnruU_dtmRZ0uGrcLyc1-r3ont19Xw2B-UmxRzmPWtvEZHPS6VWyRV72ko3GH72xb8zSwMVxO6c_3w_KRAgEQ",
    description: "Skin care essential",
    availableOffline: "https://maps.app.goo.gl/3cnhRwBKm39KjRSY8",
    availableOnline: "https://www.amazon.in/s?k=face+serum"
  },
  {
    name: "Shoes",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuPcvWkkyR5P4MVAx62G12qImBbAkmJe02xq4WH1akSPkP3ysCH__o-m2O4l-VwJB3Gi0dp5oz9l1-aGqRngu6hNCtdwtLsgj-85doW7jbHfCENnjClasAnlA",
    description: "Trending sneakers",
    availableOffline: "https://maps.app.goo.gl/UarqFHJzD53asV8s8",
    availableOnline: "https://www.amazon.in/s?k=shoes"
  },
  {
    name: "Smart Watch",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSqe0_1U3Cg9y0YIXRx-4H8dSeUkdCtpNHxCHQer9pruODM5MwuWN9VQ9y4N7XFCZtP8AHpkU2wZqUd7xATSzB1F94UgpArKDqpds24CNnmD0iavogQcjO",
    description: "Track your fitness in style",
    availableOffline: "https://maps.app.goo.gl/6PQnjeQfutzPgkDc6",
    availableOnline: "https://www.amazon.in/s?k=smart+watch"
  },
  {
    name: "Bluetooth Speaker",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNBd_jAqqdYf4mYUdNhQCbQUk3eObGuyHeUQ9Oj2dr0vPXfFm6aIhc0j20bG0YYKCqOuidK4ZumgjSMLiwXVJVzrTKknWCQxp8jsTIlyM5P65cLoM4Qw079A",
    description: "Portable sound companion",
    availableOffline: "https://maps.app.goo.gl/wRWyURfWmAC38Hvs8",
    availableOnline: "https://www.amazon.in/s?k=bluetooth+speaker"
  },
  {
    name: "Laptop Stand",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTN2Uths8tmdH_IprYkuWdlUTHnjyI0gg1o2Rd1oBahbuJGUCXHf4pdb8wbaSXE_J_4d0t_-n5XMcQhaAMH0Hbafw5L44n5COQLaHPzNWPtLbPQ4BP0_IzR",
    description: "Ergonomic and foldable stand",
    availableOffline: "https://maps.app.goo.gl/4Lhvc6jL1YzJzyLZ7",
    availableOnline: "https://www.amazon.in/s?k=laptop+stand"
  },
  {
    name: "Amazon Fire TV Stick HD",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrnHMLXXMQPaaG-t0_BGJYhzMQuyPOfuynfCyh1qkJ2vZ1PZl0pJZL_E_7jgvJ9ooJOWH3lACvtOnDQVsNJH0iMZh8B6yeyg-glw-OOUBU-3_jsBufS7ijAw",
    description: "Enjoy the OTT's",
    availableOffline: "https://maps.app.goo.gl/PxKMh3PR3U4SFXjB9",
    availableOnline: "https://www.amazon.in/s?k=amazon+fire+tv+stick"
  },
  {
    name: "Cello Bottle",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRqU5Vimhhzvp6Qen1MeaeqRbR-OuMSOYv56QRGNfvGY4p0ne0gPZLDMDDoZ17ZHiOI6IMX3OLViZULE2ZMU92GerN9gGYLB3VAKI1dbsJ",
    description: "Crystal clear water",
    availableOffline: "https://maps.app.goo.gl/SB2XKLbn7kz8QcC37",
    availableOnline: "https://www.amazon.in/s?k=cello+bottle"
  },
  {
    name: "OnePlus Nord Buds 3",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/r/3/g/-original-imah4d4k5s3wtupu.jpeg?q=90&crop=false",
    description: "Truly Wireless Bluetooth Earbuds with Active Noise Cancellation and 43H Playtime",
    availableOffline: "https://maps.app.goo.gl/7oyi9VCFfCEY2cEt8",
    availableOnline: "https://www.amazon.in/dp/B0C9J2Y6Q4"
  },
  {
    name: "Noise Buds N1",
    image: "https://www.gonoise.com/cdn/shop/files/Slice_4_11cdef77-8ea4-4bd7-876a-eb4318af6864.webp?v=1708494131",
    description: "In-Ear True Wireless Earbuds with Chrome Finish and 40H Playtime",
    availableOffline: "https://maps.app.goo.gl/tZUV3aPkuEgGSU9R9",
    availableOnline: "https://www.amazon.in/dp/B0CQJWMMG7"
  },
  {
    name: "HP H150 Wireless Earbuds",
    image: "https://hpstorerajkot.com/wp-content/uploads/81bCIO4FzFL._SL1500_.jpg",
    description: "https://in-media.apjonlinecdn.com/catalog/product/3/_/3_8_1.png",
    availableOffline: "https://maps.app.goo.gl/4ixzoFB9mC2UVAn89",
    availableOnline: "https://www.amazon.in/dp/B0D7HYK4VV"
  },
  {
    name: "Apple AirPods Pro (2nd Generation)",
    image: "https://www.apple.com/v/airpods-pro/m/images/meta/og__eui2mpgzwyaa_overview.png",
    description: "Active Noise Cancellation and Adaptive Transparency",
    availableOffline: "https://maps.app.goo.gl/7sXt3LofpccSqRkv8",
    availableOnline: "https://www.amazon.in/dp/B0BDJ6K8D6"
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    image: "https://images.samsung.com/is/image/samsung/assets/in/2022-2h/galaxy-buds2-pro/galaxy-buds2-pro-color-view-white-mo.jpg",
    description: "Hi-Fi Sound Quality with Intelligent ANC",
    availableOffline: "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    availableOnline: "https://www.amazon.in/dp/B0B4F2TTTS"
  },
  {
    "name": "Sony WH-1000XM4",
    "image": "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
    "description": "Industry Leading Noise Cancellation Over-Ear Headphones",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0863TXGM3"
  },
  {
    name: "JBL Tune 230NC TWS",
    image: "https://images-cdn.ubuy.co.in/65be3ad7f98bd35738718c4b-jbl-tune-230nc-tws-true-wireless.jpg",
    description: "Active Noise Cancelling Earbuds with 40H Battery Life",
    availableOffline: "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    availableOnline: "https://www.amazon.in/dp/B09QZ6J2ZP"
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
            <a href="${p.availableOnline}" target="_blank" class="btn btn-warning btn-sm ms-2">Buy Online</a>
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
  content.innerHTML = `<h5>Trending In Your Area: ${product.name}</h5><img src="${product.image}" alt="${product.name}" style="width:100px; border-radius:8px;">`;
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 4000);
}

window.onload = showPopup;

async function handleAssistant() {
  const input = document.getElementById("assistantInput").value.trim();
  const responseDiv = document.getElementById("assistantResponse");
  if (!input) return;

  responseDiv.innerHTML = "Thinking...";

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(input.toLowerCase()));

  if (filteredProducts.length > 0) {
    const product = filteredProducts[0];
    responseDiv.innerHTML = `
      <h5>Suggestion:</h5>
      <p>We found the product: <strong>${product.name}</strong></p>
      <img src="${product.image}" alt="${product.name}" style="width:100px; border-radius:8px;">
      <p>
        <a href="${product.availableOffline}" target="_blank" class="btn btn-outline-primary btn-sm">Buy Offline</a>
        <a href="${product.availableOnline}" target="_blank" class="btn btn-warning btn-sm ms-2">Buy Online</a>
      </p>
    `;
  } else {
    responseDiv.innerHTML = "Sorry, no matching product found.";
  }
}
