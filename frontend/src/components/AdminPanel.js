import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPanel() {
  const [skills, setSkills] = useState([]);
  const [category, setCategory] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [message, setMessage] = useState("");

  // Fetch skills from the database
  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/skills");
      setSkills(response.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Add a new skill
  const handleAddSkill = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/skills", {
        category,
        skills: [{ name: newSkill }],
      });
      setMessage("Skill added successfully!");
      setSkills([...skills, response.data]); // Update local state
      setCategory("");
      setNewSkill("");
    } catch (error) {
      setMessage("Error adding skill: " + error.response?.data?.error || error.message);
    }
  };

  // Delete a skill
  const handleDeleteSkill = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/skills/${id}`);
      setMessage("Skill deleted successfully!");
      setSkills(skills.filter((skill) => skill._id !== id)); // Remove from local state
    } catch (error) {
      setMessage("Error deleting skill: " + error.response?.data?.error || error.message);
    }
  };

  // Update a skill
  const handleUpdateSkill = async (id, updatedSkill) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/skills/${id}`, updatedSkill);
      setMessage("Skill updated successfully!");
      setSkills(skills.map((skill) => (skill._id === id ? response.data : skill))); // Update local state
    } catch (error) {
      setMessage("Error updating skill: " + error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>{message}</p>

      {/* Add Skill Form */}
      <form onSubmit={handleAddSkill}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button type="submit">Add Skill</button>
      </form>

      {/* List of Skills */}
      <div>
        <h2>Skills</h2>
        {skills.map((skill) => (
          <div key={skill._id}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.skills.map((s, index) => (
                <li key={index}>
                  {s.name}{" "}
                  <button
                    onClick={() =>
                      handleUpdateSkill(skill._id, {
                        ...skill,
                        skills: skill.skills.filter((_, i) => i !== index),
                      })
                    }
                  >
                    Delete Skill
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => handleDeleteSkill(skill._id)}>Delete Category</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
