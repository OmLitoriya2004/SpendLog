const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddlewares.js");
const {getDashboardData}=require("../controllers/dashboardControllers.js");

router.get("/", protect, getDashboardData);

module.exports = router;