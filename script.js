const products = [
    { name: "Wireless Earbuds", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355404238/QJ/XE/HG/25006117/jbl-tune-125-true-wireless-in-ear-earbuds.jpeg", description: "Top audio gear", offline: "Reliance Digital, MG Road" },
    { name: "USB-C Adapter", image: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw4cd20b4b/images/hi-res/8/24ab26877cf66a7a_AVI207-UsbC5in1Adapter-Front-Ortho-Webgg01.jpg?sw=700&sh=700&sm=fit&sfrm=png", description: "Connect multiple devices", offline: "Croma, City Mall" },
    { name: "iPhone", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_bIfpKz4-QSLYGAvOZfj-S3y3yOasu3Gt8cH0dU1djVJYaGbHx4uygaXRhbjDDwNhp8_ct-sGadTOh_uzDVYM2tSlJq5i2KvSNwoGpW25k3BOF0YSZKfH5Ljs", description: "Apple iPhone 13", offline: "Apple Store, Sector 17" },
    { name: "Face Serum", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVpvoysozA5KaBM_FvKbdFdYQTHewdiMApAlnruU_dtmRZ0uGrcLyc1-r3ont19Xw2B-UmxRzmPWtvEZHPS6VWyRV72ko3GH72xb8zSwMVxO6c_3w_KRAgEQ", description: "For glowing skin", offline: "Health & Glow, Mall Road" },
    { name: "Shoes", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuPcvWkkyR5P4MVAx62G12qImBbAkmJe02xq4WH1akSPkP3ysCH__o-m2O4l-VwJB3Gi0dp5oz9l1-aGqRngu6hNCtdwtLsgj-85doW7jbHfCENnjClasAnlA", description: "Comfortable running shoes", offline: "Nike Store, High Street" }
];

function handleUserQuery() {
    const query = document.getElementById("userQuery").value.toLowerCase();
    const responseEl = document.getElementById("assistantResponse");
    responseEl.style.display = "block";

    for (const p of products) {
        if (query.includes(p.name.toLowerCase()) || query.includes("suggest") && query.includes(p.name.split(" ")[0].toLowerCase()) || query.includes("trending") && query.includes(p.name.split(" ")[0].toLowerCase())) {
            responseEl.innerHTML = \`
                <strong>\${p.name}</strong><br>
                \${p.description}<br>
                <img src="\${p.image}" alt="\${p.name}" style="width:100px;"><br>
                <a href="https://www.google.com/search?q=\${encodeURIComponent(p.offline)}" target="_blank">\${p.offline}</a>
            \`;
            return;
        }
    }
    responseEl.innerText = "Sorry, I couldn't find anything matching your query.";
}

window.onload = function () {
    const container = document.getElementById("suggestions");
    products.forEach(p => {
        container.innerHTML += \`
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="\${p.image}" class="card-img-top" alt="\${p.name}">
                    <div class="card-body">
                        <h5 class="card-title">\${p.name}</h5>
                        <p class="card-text">\${p.description}</p>
                        <a href="https://www.google.com/search?q=\${encodeURIComponent(p.offline)}" target="_blank" class="btn btn-sm btn-outline-primary">Buy Offline</a>
                    </div>
                </div>
            </div>
        \`;
    });
};