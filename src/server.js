const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database connected & synced successfully with PostgreSQL.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
