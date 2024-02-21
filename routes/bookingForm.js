const express = require("express");
const router = express.Router();

// Grab the controller functions
const { create } = require("../controllers/bookingForm");

// Create inquiry
router.post("/", create);

module.exports = router;
