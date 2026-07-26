const sequelize = require("./src/config/database");
const Product = require("./src/models/Product");

const productsData = [
  {
    name: "Daikin Sensira 12000 BTU",
    category: "Split System",
    price: 489.0,
    image: "daikin_sensira.jpg",
    badge: "BEST SELLER",
    specs: "A+++, R32 Gas",
  },
  {
    name: "Carrier Infinity Centralized",
    category: "Central Units",
    price: 2150.0,
    image: "carrier_infinity.jpg",
    badge: "Industrial",
    specs: "Centralized System",
  },
  {
    name: "Mitsubishi Electric Multi",
    category: "Split System",
    price: 1240.0,
    image: "mitsubishi_multi.jpg",
    badge: "ECO-TECH",
    specs: "A++, Inverter",
  },
  {
    name: "LG Cassette Commercial 24k",
    category: "Central Units",
    price: 899.0,
    image: "lg_cassette.jpg",
    badge: "360 Air",
    specs: "Commercial Cassette",
  },
  {
    name: "Samsung Floor Standing AC",
    category: "Standing AC",
    price: 755.0,
    image: "samsung_floor.jpg",
    badge: "Fast Cool",
    specs: "Floor Standing",
  },
  {
    name: "Smart Control Hub Pro",
    category: "Smart Control",
    price: 129.0,
    image: "smart_hub.jpg",
    badge: "Wi-Fi",
    specs: "App-Connect",
  },
];

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    // Changed alter to force so it resets the table and clears duplicates on every run
    await sequelize.sync({ force: true });

    await Product.bulkCreate(productsData);
    console.log(
      "All 6 products have been successfully seeded into the database!",
    );

    process.exit(0);
  } catch (error) {
    console.error("Error occurred during the seeding process:", error);
    process.exit(1);
  }
}

seedDatabase();
