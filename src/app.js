const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/documents", documentRoutes); 

// Make the uploads folder statically accessible to serve files (PDFs/images) to the frontend
app.use("/uploads", express.static("uploads"));

module.exports = app;
