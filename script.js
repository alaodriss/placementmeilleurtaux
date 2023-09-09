
document.addEventListener("DOMContentLoaded", function () {
    // Charger le fichier JSON localement
    fetch("data/dataMock.json")
      .then((response) => response.json())
      .then((data) => {
        const productList = data.produits;
        const productContainer = document.getElementById("product-list");
  
        // Parcourir les produits et les afficher
        productList.forEach((product) => {
          const productItem = document.createElement("div");
          productItem.className = "product-item";
  
          // Afficher les détails du produit
          productItem.innerHTML = `
            <img src="${product.icon}" alt="${product.text}">
            <div>
                <h2>${product.text}</h2>
                <p>${product.description}</p>
            </div> 
            <i class="fa-solid fa-arrow-right" style="color: #000;">
          `;
  
          productContainer.appendChild(productItem);
        });
      })
      .catch((error) =>
        console.error("Erreur lors du chargement du JSON :", error)
      );
  });
  