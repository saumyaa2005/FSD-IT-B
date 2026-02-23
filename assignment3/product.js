const id = localStorage.getItem("selectedProduct");
const product = products.find(p => p.id == id);

const container = document.getElementById("productDetails");

if(product){
  container.innerHTML = `
    <div class="detail-card">
      <img src="${product.image}">
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <p>${product.description}</p>
      <p><strong>${product.offer}</strong></p>
      <button onclick="goBack()">Back</button>
    </div>
  `;
}

function goBack() {
  window.location.href = "index.html";
}
