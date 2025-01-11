import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("https://maledimoemanuel-portfolio-backend.onrender.com/api/messages", formData);
      if(response.data.success){
        alert("Thank you for contacting me! Your message has been sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen contact-container px-4 sm:px-8"
    >
      <h2 className="text-4xl sm:text-6xl font-bold text-gray-700 mb-8">Contact Me</h2>
      <p className="text-base sm:text-lg text-gray-700 text-center mb-8">
        I'm always open to discussing exciting projects, collaboration <br></br>opportunities, or answering any questions you might have. Feel <br></br>free to reach out, and I’ll get back to you as soon as possible!
      </p>
      <form
        className="w-full sm:w-3/4 lg:w-2/3 max-w-lg bg-indigo-500 p-8 shadow-lg rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
      <div className="flex flex-col sm:flex-row justify-center my-8 pb-10 space-y-4 sm:space-y-0 sm:space-x-6">
        <ul className="flex space-x-6 text-white text-2xl">
          <li className="hover:text-gray-700">
            <a href="https://github.com/maledimoemanuel" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="hover:text-gray-700">
            <a href="https://linkedin.com/in/emanuel-maledimo-13770b200" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:text-gray-700">
            <a href="mailto:maledimoemanuel@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </li>
          <li className="hover:text-gray-700">
            <a href="tel:+27790378046" target="_blank" rel="noopener noreferrer">
              <FaPhone />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
