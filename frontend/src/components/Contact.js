import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { FiMail, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await axios.post(
        'https://maledimoemanuel-portfolio-backend.onrender.com/api/messages',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Thank you! Your message has been sent.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        success: false,
        message: error.response?.data?.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto"
            >
              {/* Status Message */}
              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className="flex items-center gap-2">
                    {status.success ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaExclamationCircle className="text-red-500" />
                    )}
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <FiUser className="text-gray-400" />
                    <span>Your Name</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <FiMail className="text-gray-400" />
                    <span>Email Address</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="john@gmail.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  <div className="flex items-center gap-2">
                    <FiMessageSquare className="text-gray-400" />
                    <span>Your Message</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Hello Noah, I'd like to talk about..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h3>
              
              <div className="space-y-6">
                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Find me online</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/maledimoemanuel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/emanuel-maledimo-13770b200" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="mailto:maledimoemanuel@gmail.com" 
                      className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all"
                      aria-label="Gmail"
                    >
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;