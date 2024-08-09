const Bill = require("../models/bill");
const Item = require("../models/item");

// Create a new bill
exports.createBill = async (req, res) => {
  try {
    const { items } = req.body;
    let totalAmount = 0;

    // Fetch item details and calculate total
    const updatedItems = await Promise.all(
      items.map(async (item) => {
        const itemDetails = await Item.findById(item.itemId);
        if (!itemDetails || itemDetails.quantity < item.quantity) {
          throw new Error(
            `Insufficient quantity for item: ${
              itemDetails ? itemDetails.name : "Unknown Item"
            }`
          );
        }

        item.name = itemDetails.name; // Add item name
        item.price = itemDetails.price;
        item.total = item.quantity * item.price;
        totalAmount += item.total;

        // Update inventory
        itemDetails.quantity -= item.quantity;
        await itemDetails.save();

        return item;
      })
    );

    // Create bill
    const newBill = new Bill({ items: updatedItems, totalAmount });
    await newBill.save();

    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bills
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific bill by ID
exports.getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
