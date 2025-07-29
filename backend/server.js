const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db.js");

const app = express();
const authRoutes = require("./routes/authRoutes.js");
const incomeRoutes = require("./routes/IncomeRoutes.js");
const expenseRoutes = require("./routes/expenseRoutes.js");
const dashboardRoutes = require("./routes/dashboardRoutes.js");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"],
  })
);
app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
