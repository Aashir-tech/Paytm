"use client";

import { useState } from "react";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HeadphonesIcon,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you can implement proper notification)
    alert("Message sent successfully! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "support@walletgo.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+91 9936000032",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: "Pune , India",
      description: "Come say hello at our office",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Support Hours",
      details: "24/7 Available",
      description: "We're here when you need us",
    },
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking 'Forgot Password' on the login page and following the instructions sent to your email.",
    },
    {
      question: "What are your transaction fees?",
      answer:
        "We offer competitive rates with transparent pricing. Basic transfers are free, while international transfers have minimal fees starting from $2.99.",
    },
    {
      question: "How secure is my money?",
      answer:
        "Your funds are protected by bank-level security, 256-bit encryption, and are insured up to $250,000 through our banking partners.",
    },
  ];

  return (
    <div
      className={`flex flex-col font-poppins min-h-screen transition-all duration-500 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Hero Section */}
      <section className="mt-10 pt-20 pb-16 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-500" />
                Live Chat Available
              </div>
              <div className="flex items-center">
                <HeadphonesIcon className="w-5 h-5 mr-2 text-green-500" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-500" />
                Quick Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-slate-600/50 text-center"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-6 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 dark:bg-gradient-to-r bg-[#F2EEEC] dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Fill out the form below and we'll get back to you within 24
                hours. For urgent matters, please call our support line.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Frequently Asked Questions
                </h3>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-slate-600/50"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-slate-600/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Located in the heart of the financial district, we're always happy
              to meet in person.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-slate-600/50">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.55822970981!2d73.90382071145!3d18.618832083226806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c71e08905091%3A0x51ca0d931361c1bc!2sAjeenkya%20DY%20Patil%20University!5e0!3m2!1sen!2sin!4v1749880268385!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Contact;
