const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to fetch all products
router.get("/", productController.getAllProducts);

// Route to create a new product
router.post("/", productController.createProduct);

// Route to fetch a single product by ID
router.get("/:id", productController.getProductById);

module.exports = router;
