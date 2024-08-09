const mongoose = require("mongoose");

const billItemSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
});

const billSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  items: [billItemSchema],
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
