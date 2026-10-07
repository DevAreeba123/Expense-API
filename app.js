require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db.js");
const expenseRoutes = require("./src/routes/expenseRoutes.js");

connectDB();

const app = express();

app.use(express.json());

app.use("/expenses", expenseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});