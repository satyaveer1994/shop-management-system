const express = require("express");
const {
  createBill,
  getBills,
  getBillById,
} = require("../controller/billController");
const router = express.Router();

router.post("/createbill", createBill);
router.get("/getbill", getBills);
router.get("/:id", getBillById);

module.exports = router;
