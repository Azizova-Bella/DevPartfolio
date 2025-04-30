'use client'

import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Telegram bot integration
    const telegramMessage = `New message from ${formData.name} (${formData.email}):%0A%0A${formData.message}`
    window.open(`https://t.me/TJKGuideBot?start=${telegramMessage}`, '_blank')
    
    // Email fallback
    const mailtoLink = `mailto:azizovabella14@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? I'm here to help! Reach out through any channel.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Telegram Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
                <MessageSquare className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Telegram
              </h3>
              <p className="text-gray-400 mb-3">
                Chat with me instantly
              </p>
              <a
                href="https://t.me/TJKGuideBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group"
              >
                @TJKGuideBot
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-900/30 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
                <Mail className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email
              </h3>
              <p className="text-gray-400 mb-3">
                Send me a message
              </p>
              <a
                href="mailto:azizovabella14@gmail.com"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group"
              >
                azizovabella14@gmail.com
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-900/30 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                <MapPin className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-gray-400 mb-3">
                Based in
              </p>
              <span className="text-gray-200">
                Tajikistan
              </span>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-4 border border-purple-500/20">
                <Phone className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-400 mb-3">
                Available by request
              </p>
              <span className="text-gray-200">
                Contact me first
              </span>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition duration-300"
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white outline-none transition duration-300"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-blue-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="group-hover:translate-x-1 transition-transform">
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage