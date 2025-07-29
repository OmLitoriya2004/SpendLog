const express= require("express");
const router = express.Router();
const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} = require("../controllers/expenseControllers.js");
const { protect } = require("../middlewares/authMiddlewares.js");


router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.get("/downloadexcel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);

module.exports=router;