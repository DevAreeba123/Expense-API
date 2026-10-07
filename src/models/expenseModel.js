const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ["income", "expense"],
            default: "expense",
        },
    },
    { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;