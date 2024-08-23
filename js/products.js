const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

async function loadProducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const productsList = document.getElementById("products-list");
    const productTemplate = document.getElementById("product-template");

    productTemplate.classList.add('d-none');
    // Iterar sobre los productos y agregarlos al DOM
    data.products.forEach((product) => {
      // Clonar la plantilla de producto
      const productClone = productTemplate.cloneNode(true);
      productClone.classList.remove("d-none");
      productClone.style.display = 'flex';

      asdasdjasjdsjad


      asjdasjdjas
      // Modificar el contenido de la plantilla clonada
      productClone.querySelector("img").src = product.image;
      productClone.querySelector(".product-description").textContent = product.description;
      productClone.querySelector(".product-price").textContent = `Precio: ${product.cost} ${product.currency}`;
      testeando conflictos para aprender como funcionan
      // productClone.querySelector('.product-sold').textContent = `Vendidos: ${product.soldCount}`;

      // Añadir el producto clonado al contenedor principal
      productsList.appendChild(productClone);
    });
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

window.onload = loadProducts;

