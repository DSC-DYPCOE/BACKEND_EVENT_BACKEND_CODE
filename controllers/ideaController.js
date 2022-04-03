const Idea = require("../models/IdeaModel");

const getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({}).sort("-createdAt");
    res.status(200).json({ ideas, nbHits: ideas.length });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const createIdea = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "please provide both name and description" });
  }
  try {
    const idea = await Idea.create({ name, description });
    res.status(201).json({ idea, message: "idea created successfully" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  getAllIdeas,
  createIdea,
};
