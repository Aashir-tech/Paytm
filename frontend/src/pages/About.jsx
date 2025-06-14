import { useState } from "react";
import {
  Moon,
  Sun,
  Users,
  Target,
  Award,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import Mission from "../assets/images/mission.png";
import Me from "../assets/images/Me.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const stats = [
    {
      number: "10+",
      label: "Active Users",
      icon: <Users className="w-8 h-8" />,
    },
    { number: "50+", label: "Countries", icon: <Globe className="w-8 h-8" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-8 h-8" /> },
    {
      number: "$10B+",
      label: "Processed",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security First",
      description:
        "We prioritize the security of your financial data with bank-level encryption and advanced fraud protection.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description:
        "Experience instant transactions and real-time processing that keeps up with your busy lifestyle.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Customer Focused",
      description:
        "Our dedicated support team is available 24/7 to ensure you have the best experience possible.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description:
        "Send money anywhere in the world with competitive rates and transparent pricing.",
    },
  ];

  const team = [
    {
      name: "Aashir Haris",
      role: "CEO & Founder",
      image: "",
      bio: "Software Engineer",
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen transition-all duration-500 ${
        isDarkMode ? "dark" : ""
      } font-poppins`}
    >
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />


      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                About Wallet Go
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              We're revolutionizing digital payments by making financial
              transactions simple, secure, and accessible to everyone,
              everywhere.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                At Wallet Go, we believe that everyone deserves access to
                simple, secure, and affordable financial services. Our mission
                is to break down barriers and create a world where money moves
                as freely as information.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Founded in 2024, we've grown from a small startup to a trusted
                platform serving millions of users worldwide. Our commitment to
                innovation, security, and customer satisfaction drives
                everything we do.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-yellow-500" />
                <span className="text-lg font-semibold text-gray-800 dark:text-white">
                  Soon to be Winner of Best Payments App 2024
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={Mission}
                alt="Our Mission"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core principles guide our decisions and shape the way we
              serve our customers every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-slate-600/50 text-center"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F2EEEC] dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in finance, technology, and customer service.
            </p>
          </div>

          <div className="w-[30vw] mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border text-center"
              >
                <img
                  src={member.image || Me}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-500 dark:text-blue-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-gradient-to-r bg-[#F2EEEC] dark:bg-slate-900 dark:to-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 dark:text-white ">
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto dark:text-white">
            Experience the future of digital payments. Join millions of users
            who trust Wallet Go for their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;
