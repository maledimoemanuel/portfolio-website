const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  skills: [
    {
      name: { type: String, required: true },
      icon: { type: String }, 
    }
  ]
});

module.exports = mongoose.model('Skill', skillSchema);
