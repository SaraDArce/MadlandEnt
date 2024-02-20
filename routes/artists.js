const express = require("express");
const router = express.Router();

// Grab the controller functions
const {
  index,
  getArtistByName,
  create,
  update,
  destroy,
} = require("../controllers/artists");

// Get all artists
router.get("/", index);

router.get("/:artist", getArtistByName);

// Create artist
router.post("/", create);

// Update artist
router.put("/:id", update);

// Delete an artist entry
router.delete("/:id", destroy);

module.exports = router;
