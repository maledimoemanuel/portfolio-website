const express = require("express");
const nodemailer = require("nodemailer");
const Message = require("../models/message");
const router = express.Router();

const validateMessage = ( req, res, next ) => {
  const { name, email, message } = req.body;

  if( !name, !email, !message){
    return res.status(400).json("All fields required!")
  }
  next();
}

// Get all messages
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 }) 
      .skip((page - 1) * limit) 
      .limit(Number(limit)); 
    const totalMessages = await Message.countDocuments();
    res.json({
      total: totalMessages,
      page: Number(page),
      limit: Number(limit),
      messages,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new message
router.post("/", validateMessage, async (req, res) => {
  const { name, email, message } = req.body;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email address." });
  }

  try {
    const newMessage = new Message({ name, email, message, createdAt: new Date() });
    await newMessage.save();
    // Send the message to my Gmail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.MY_EMAIL, 
        pass: process.env.APP_PASSWORD, 
      },
    });
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.MY_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    
    await transporter.sendMail(mailOptions);
    res.status(201).json({ success: true, message: "Message sent successfully!", data: newMessage })
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to save the message. Please try again." });
  }
});

module.exports = router;
