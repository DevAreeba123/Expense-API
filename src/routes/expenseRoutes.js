const express = require("express");
const router = express.Router();
const{
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
} =  require("../controllers/expenseController.js");


router.get("/", getAllExpenses);
router.get("/:id", getExpense);
router.post("/", createExpense);
router.put ("/:id", updateExpense);
router.delete ("/:id", deleteExpense);

module.exports = router;