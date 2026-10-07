const Expense = require("../models/expenseModel.js");

const getAllExpenses = async (req, res) => {
    try {
        const filter = {};

        if (req.query.title) {
            filter.title = req.query.title;
        }
        if (req.query.category) {
            filter.category = req.query.category;
        }
        if (req.query.type) {
            filter.type = req.query.type;
        }

        const expenses = await Expense.find(filter);
        res.send(expenses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).send("Expense not found");
        }

        res.send(expense);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createExpense = async (req, res) => {
    try {
        await Expense.create(req.body);
        res.status(201).send("Data inserted Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!expense) {
            return res.status(404).send("Expense not found");
        }

        res.send(expense);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if (!expense) {
            return res.status(404).send("Expense not found");
        }

        res.send("Expense Deleted Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
};