const express = require("express");
const router = express.Router();

// controller imports
const { getAllIdeas, createIdea } = require("../controllers/ideaController");

router.route("/").get(getAllIdeas).post(createIdea);

module.exports = router;
