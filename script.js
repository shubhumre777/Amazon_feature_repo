const products = [
  {
    name: "Wireless Earbuds",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355404238/QJ/XE/HG/25006117/jbl-tune-125-true-wireless-in-ear-earbuds.jpeg",
    description: "Top audio gear",
    availableOffline: "https://www.reliancedigital.in/"
  },
  {
    name: "USB-C Adapter",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcp76uMwx-Yl3WW47ET3PNJ0TvfNi5m15Uj-mwCZDNYs494i24OSixtGV8TM8tzk5CUgyYF0cI2o9u3bvXWILUQ2I6tfNJquUUP9ueVZ9KYRq1Kc5jQwv0",
    description: "Connect multiple devices",
    availableOffline: "https://www.croma.com/"
  },
  {
    name: "iPhone",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_bIfpKz4-QSLYGAvOZfj-S3y3yOasu3Gt8cH0dU1djVJYaGbHx4uygaXRhbjDDwNhp8_ct-sGadTOh_uzDVYM2tSlJq5i2KvSNwoGpW25k3BOF0YSZKfH5Ljs",
    description: "Premium smartphone",
    availableOffline: "https://www.reliancedigital.in/"
  },
  {
    name: "Face Serum",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVpvoysozA5KaBM_FvKbdFdYQTHewdiMApAlnruU_dtmRZ0uGrcLyc1-r3ont19Xw2B-UmxRzmPWtvEZHPS6VWyRV72ko3GH72xb8zSwMVxO6c_3w_KRAgEQ",
    description: "Skin care essential",
    availableOffline: "https://www.nykaa.com/"
  },
  {
    name: "Shoes",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuPcvWkkyR5P4MVAx62G12qImBbAkmJe02xq4WH1akSPkP3ysCH__o-m2O4l-VwJB3Gi0dp5oz9l1-aGqRngu6hNCtdwtLsgj-85doW7jbHfCENnjClasAnlA",
    description: "Trending sneakers",
    availableOffline: "https://www.bata.in/"
  },
  {
    name: "Smart Watch",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSqe0_1U3Cg9y0YIXRx-4H8dSeUkdCtpNHxCHQer9pruODM5MwuWN9VQ9y4N7XFCZtP8AHpkU2wZqUd7xATSzB1F94UgpArKDqpds24CNnmD0iavogQcjO",
    description: "Track your fitness in style",
    availableOffline: "https://www.croma.com/"
  },
  {
    name: "Bluetooth Speaker",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNBd_jAqqdYf4mYUdNhQCbQUk3eObGuyHeUQ9Oj2dr0vPXfFm6aIhc0j20bG0YYKCqOuidK4ZumgjSMLiwXVJVzrTKknWCQxp8jsTIlyM5P65cLoM4Qw079A",
    description: "Portable sound companion",
    availableOffline: "https://www.reliancedigital.in/"
  },
  {
    name: "Laptop Stand",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTN2Uths8tmdH_IprYkuWdlUTHnjyI0gg1o2Rd1oBahbuJGUCXHf4pdb8wbaSXE_J_4d0t_-n5XMcQhaAMH0Hbafw5L44n5COQLaHPzNWPtLbPQ4BP0_IzR",
    description: "Ergonomic and foldable stand",
    availableOffline: "https://www.amazon.in/"
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

function handleAssistant() {
  const query = document.getElementById("assistantInput").value.toLowerCase();
  const responseDiv = document.getElementById("assistantResponse");
  let found = false;
  for (const p of products) {
    if (query.includes(p.name.toLowerCase()) || query.includes("trending") && p.name === "Wireless Earbuds") {
      responseDiv.innerHTML = `<strong>${p.name}:</strong> ${p.description}<br><img src="${p.image}" width="100"/><br><a href="${p.availableOffline}" target="_blank">Available here</a>`;
      found = true;
      break;
    }
  }
  if (!found) responseDiv.innerHTML = "Sorry, I couldn’t find anything helpful.";
}
