const products = [
    {
        name: "Wired Gaming Headset for PS4 and Xbox",
        price: 1790,
        oldPrice: 2560,
        discount: "30%",
        rating: "(42)",
        colors: {
            Red: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQP4-uNWGP68lNdLZ9J7y98P9dhWw98MYoFIf5-wjHA&s",
            Blue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtaOhxmFsqcLs3L0IbWXpUajt4RFSUnoWYdK61rAhQA&s=10",
            Black: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxQZn_6fKd4P3ViJZFHkv5HeSVadsagw0JkNoQ5GlrA&s=10",
        },
        description: "Comfortable gaming headset with padded ear cups, a microphone and clear sound for gaming, calls and music."
    },
    {
        name: "Colorful Over Ear Headphones with Mic",
        price: 1739,
        oldPrice: 3499,
        discount: "50%",
        rating: "(15)",
        colors: {
            Red: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrFUkzQ1MFaIXk2VDu0lPoJjnnKDasNDmxiIcZLN9Cg&s=10",
            Blue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlujVtD7-IBvAutSj43KBT2SD42bUIpYX_GUQBKL0ZNw&s=10",
            Black: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSQlOYSq7Dj8_ZXVfwidH_B8WyZn1dVtUEp4_colZNw&s=10",
        },
        description: "Stylish over-ear headphones for comfortable listening, music, videos and everyday entertainment."
    },
    {
        name: "Over Ear Headphones for Laptop and Phone",
        price: 1648,
        oldPrice: 3400,
        discount: "52%",
        rating: "(28)",
        colors: {
            Red: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi-a-prBQtGhhFHBGV_JSrbHoFGENQZHVKjSbEuvjbQ&s=10",
            Blue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUpYXc9O0-xRj9gQqo84J0DlgcH70pfnEHnbmXRkU1w&s=10",
            Black: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6M660oaccmWXMDS3k6GDMMeVtoSG6__ZrJ6J7uhCHbg&s=10"
        },
        description: "Modern headphones with cushioned ear pads for laptops, phones and entertainment."
    }
];

let visibleProducts = [...products];
let selectedProduct = null;
let cartCount = 0;

function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return;
    }

    list.forEach(product => {
        const index = products.indexOf(product);

        container.insertAdjacentHTML("beforeend", `
            <article class="card">

                <div class="product-image"
                     onclick="showDetails(${index})">
                    <img class="main-image"
                         src="${product.colors.Blue}"
                         alt="${product.name}">
                    <span class="discount">-${product.discount}</span>
                </div>

                <h3 onclick="showDetails(${index})">
                    ${product.name}
                </h3>

                <p class="description">${product.description}</p>

                <div class="color-options">
                    <span class="color-label">Color:</span>

                    <button class="color-circle selected"
                        style="background:red"
                        title="Red"
                        onclick="selectColor(event,${index},'Red',this)">
                    </button>

                    <button class="color-circle"
                        style="background:blue"
                        title="Blue"
                        onclick="selectColor(event,${index},'Blue',this)">
                    </button>

                    <button class="color-circle"
                        style="background:black"
                        title="Black"
                        onclick="selectColor(event,${index},'Black',this)">
                    </button>

                    <span class="color-name">Red</span>
                </div>

                <div class="price">
                    Rs. ${product.price.toLocaleString()}
                </div>

                <span class="old-price">
                    Rs. ${product.oldPrice.toLocaleString()}
                </span>

                <span style="font-size:12px">
                    -${product.discount}
                </span>

                <div class="delivery">✓ Delivery options available</div>

                <div class="rating">
                    ★★★★★ <span>${product.rating}</span>
                </div>

                <button class="card-button details-btn"
                    onclick="showDetails(${index})">
                    View Details
                </button>

                <button class="card-button add-btn"
                    onclick="addProductToCart(event,${index})">
                    Add to Cart
                </button>

            </article>
        `);
    });
}

function selectColor(event, index, color, button) {
    event.stopPropagation();

    const card = button.closest(".card");

    card.querySelectorAll(".color-circle").forEach(circle => {
        circle.classList.remove("selected");
    });

    button.classList.add("selected");

    card.querySelector(".color-name").textContent = color;
    card.querySelector(".main-image").src = products[index].colors[color];

    card.dataset.color = color;
}

function showDetails(index) {
    selectedProduct = products[index];

    const card = document.querySelectorAll(".card")[
        visibleProducts.indexOf(selectedProduct)
    ];

    let color = card?.dataset.color || "Red";

    document.getElementById("detailImage").src = selectedProduct.colors[color];
    document.getElementById("detailName").textContent = selectedProduct.name;
    document.getElementById("detailPrice").textContent = "Rs. " + selectedProduct.price.toLocaleString();
    document.getElementById("detailDescription").textContent = selectedProduct.description;
    document.getElementById("detailColor").textContent = color;
    document.getElementById("popup").style.display = "flex";
}

function closeDetails() {
    document.getElementById("popup").style.display = "none";
}

function addProductToCart(event, index) {
    event.stopPropagation();
    selectedProduct = products[index];
    addToCart();
}

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
    alert(selectedProduct.name + " added to cart!");
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const query = document.getElementById("searchInput")
        .value.toLowerCase().trim();

    visibleProducts = products.filter(product =>
        (product.name + " " + product.description)
            .toLowerCase().includes(query)
    );

    displayProducts(visibleProducts);
});

function filterPrice() {
    const min = Number(document.getElementById("min").value) || 0;
    const max = Number(document.getElementById("max").value) || Infinity;

    visibleProducts = products.filter(product =>
        product.price >= min && product.price <= max
    );

    displayProducts(visibleProducts);
}

displayProducts(visibleProducts);
