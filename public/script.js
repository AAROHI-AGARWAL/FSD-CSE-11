const productContainer =
    document.getElementById("product-container");

const cartCount =
    document.getElementById("cart-count");

const cartMessage =
    document.getElementById("cart-message");

const logoutButton =
    document.getElementById("logout");


let cart = [];


// Load products

async function loadProducts() {

    try {

        const response =
            await fetch("/api/products");

        const products =
            await response.json();


        productContainer.innerHTML =
            products.map(product => `

                <article class="product-card">

                    <img
                        class="product-image"
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <button
                        class="add-btn"
                        onclick="addToCart(
                            ${product.id},
                            '${product.name}'
                        )"
                    >
                        Add to Cart
                    </button>

                </article>

            `).join("");

    }

    catch (error) {

        productContainer.innerHTML =
            "<p>Unable to load products.</p>";

        console.error(error);

    }

}



// Add product to cart

async function addToCart(
    productId,
    productName
) {

    try {

        const response =
            await fetch("/api/cart", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    productId
                })

            });


        const result =
            await response.json();


        if (result.success) {

            cart.push(productName);

            cartCount.textContent =
                cart.length;

            cartMessage.textContent =
                `${productName} added to your cart.`;

        }

    }

    catch (error) {

        console.error(error);

        alert(
            "Could not add product to cart."
        );

    }

}



// Logout

logoutButton.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        alert("Logout clicked!");

    }
);


// Start

loadProducts();