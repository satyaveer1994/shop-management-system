const express = require("express");
const {
  addItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controller/itemController");
const router = express.Router();

router.post("/additem", addItem);
router.get("/getitems", getItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
