
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
    "name": "OnePlus Nord Buds 3",
    "image": "https://www.oneplus.in/product/oneplus-nord-buds-3",
    "description": "Truly Wireless Bluetooth Earbuds with Active Noise Cancellation and 43H Playtime",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0C9J2Y6Q4"
  },
  {
    "name": "Noise Buds N1",
    "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/BudsN1-Black01_600x.png",
    "description": "In-Ear True Wireless Earbuds with Chrome Finish and 40H Playtime",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0CQJWMMG7"
  },
  {
    "name": "HP H150 Wireless Earbuds",
    "image": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08397887.png",
    "description": "Wireless in-Ear Earbuds Compatible with Multiple Devices",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0D7HYK4VV"
  },
  {
    "name": "Apple AirPods Pro (2nd Generation)",
    "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2nd-gen-hero-202209_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1660803972361",
    "description": "Active Noise Cancellation and Adaptive Transparency",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0BDJ6K8D6"
  },
  {
    "name": "Samsung Galaxy Buds2 Pro",
    "image": "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-buds2-pro-r510-sm-r510nzaainu-thumb-533x533.png",
    "description": "Hi-Fi Sound Quality with Intelligent ANC",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0B4F2TTTS"
  },
  {
    "name": "Sony WH-1000XM4",
    "image": "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
    "description": "Industry Leading Noise Cancellation Over-Ear Headphones",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0863TXGM3"
  },
  {
    "name": "Bose QuietComfort Earbuds II",
    "image": "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_earbuds_ii/product_silo_images/qce_ii_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png",
    "description": "Personalized Noise Cancellation and High-Fidelity Audio",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B0B6Z2GQ5S"
  },
  {
    "name": "JBL Tune 230NC TWS",
    "image": "https://in.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1d9c7a3a/JBL_Tune_230NC_TWS_Product_Image_Hero_Black.png",
    "description": "Active Noise Cancelling Earbuds with 40H Battery Life",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B09QZ6J2ZP"
  },
  {
    "name": "Realme Buds Air 3",
    "image": "https://image01.realme.net/general/20220304/1646374259316.png",
    "description": "ANC Enabled Earbuds with 42dB Noise Cancellation",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B09V3JY5QG"
  },
  {
    "name": "Anker Soundcore Liberty Air 2 Pro",
    "image": "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg",
    "description": "True Wireless Earbuds with Targeted Active Noise Cancellation",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B08G4K8CY8"
  },
  {
    "name": "Sennheiser Momentum True Wireless 3",
    "image": "https://assets.sennheiser.com/img/16644/product_detail_x2_desktop_MTW3_black_front.png",
    "description": "Premium Sound with Adaptive Noise Cancellation",
    "availableOffline": "https://maps.app.goo.gl/6YxVqz5v1Jkz3KjL9",
    "availableOnline": "https://www.amazon.in/dp/B09V3JY5QG"
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
