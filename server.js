const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


// Product API
app.get("/api/products", (req, res) => {

    res.json([
        {
            id: 1,
            name: "Novel",
            price: 499,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 2,
            name: "Heels",
            price: 1299,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 3,
            name: "T-Shirt",
            price: 699,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 4,
            name: "Jeans",
            price: 1499,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80"
        },

        {
            id: 5,
            name: "Hoodie",
            price: 1599,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80"
        }
    ]);

});


// Add to cart API
app.post("/api/cart", (req, res) => {

    const { productId } = req.body;

    res.json({
        success: true,
        message: `Product ${productId} added to cart`
    });

});


// Send index.html for other routes
app.get("*splat", (req, res) => {

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );

});


// Start server
app.listen(PORT, () => {

    console.log(
        `Shopping App running at http://localhost:${PORT}`
    );

});