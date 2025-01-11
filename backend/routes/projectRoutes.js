const express = require("express");
const Project = require("../models/projects"); 

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
    try {
        const allProjects = await Project.find(); 
        res.json(allProjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new project
router.post("/", async (req, res) => {
    const { name, description, demoLink, githubRepo, image } = req.body;
    try {
        const newProject = new Project({ name, description, demoLink, githubRepo, image }); // Use Project model
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a project
router.delete("/:id", async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id); // Use Project model
        res.status(200).json({ message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
