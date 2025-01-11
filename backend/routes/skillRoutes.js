const express = require("express");
const Skill = require("../models/Skill");

const router = express.Router();

// Get all skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new skill category
router.post("/", async (req, res) => {
  const { category, skills } = req.body;
  try {
    const newSkill = new Skill({ category, skills });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a skill category or specific skills
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a skill category
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Skill.findByIdAndDelete(id);
    res.json({ message: "Skill category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
