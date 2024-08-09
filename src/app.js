const express = require("express");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const billRoutes = require("./routes/billRoutes");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/items", itemRoutes);
app.use("/api/bills", billRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = app;
