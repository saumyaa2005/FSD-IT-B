const container = document.getElementById("productContainer");

products.forEach(product => {
  container.innerHTML += `
    <div class="wishlist-card" onclick="openProduct(${product.id})">
      <img src="${product.image}">
      <p>${product.name}</p>
      <span>${product.offer}</span>
    </div>
  `;
});

function openProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product.html";
}
