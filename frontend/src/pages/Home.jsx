import { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Moon,
  Sun,
  Send,
  Star,
  Shield,
  Zap,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/images/logo.png";
import walletgo from "../../src/assets/images/walletlogo-light-sm.png";
import walletgodark from "../../src/assets/images/walletlogo-dark-sm.png";
import walletgofooterlogo from "../../src/assets/images/walletgofooterlogo.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const services = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Digital Wallet",
      description:
        "Securely store and manage your money with advanced encryption and biometric security.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Recharge",
      description:
        "Instant recharges for all mobile operators with exclusive cashback offers.",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Bill Payments",
      description:
        "Pay all your utility bills hassle-free with automated reminders and scheduling.",
    },
    {
      icon: <Send className="w-12 h-12" />,
      title: "Money Transfer",
      description:
        "Send money instantly to anyone, anywhere with zero transaction fees.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Transactions",
      description:
        "Bank-level security with 256-bit encryption and fraud protection.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Instant Processing",
      description: "Lightning-fast transactions processed in under 3 seconds.",
    },
  ];

  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "FinanceHub", logo: "FH" },
    { name: "PaySecure", logo: "PS" },
    { name: "MoneyFlow", logo: "MF" },
    { name: "CryptoBank", logo: "CB" },
    { name: "DigitalPay", logo: "DP" },
  ];

  return (
    <div
      className={`flex flex-col font-poppins min-h-screen transition-all duration-500 ${
        isDarkMode ? "dark " : "bg-[#F2EEEC]"
      }`} 
    >
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />


      {/* Hero Section */}
      <section className="pt-20 min-h-[130vh] text-center sm:text-left sm:min-h-screen flex items-center bg-gradient-to-tr  dark:from-purple-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto py-5 my-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center mx-10">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <br />
                  <span className="text-gray-800 dark:text-white">
                    Wallet Go
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your One-Stop Solution for Digital Payments. Experience the
                  future of finance with secure, instant, and seamless
                  transactions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/dashboard"
                  className="bg-white dark:bg-slate-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Money
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    1M+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Active Users
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    99.9%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    24/7
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Support
                  </div>
                </div>
              </div>
            </div>

            <img
              src={Logo}
              alt="Digital Wallet Illustration"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
          {/* <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl"></div> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br bg-[#F2EEEC] dark:from-purple-900 dark:via-slate-800 dark:to-slate-900">
        {/* dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover a comprehensive suite of financial services designed to
              make your life easier and more secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-slate-600/50"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-600 dark:hover:text-blue-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#F2EEEC] dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of companies that trust Wallet Go for their
              financial needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-slate-600/50"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
                    {partner.logo}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Wallet Go has transformed how we handle payments. Highly
              recommended!"
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              - Sarah Johnson, CEO of TechCorp
            </p>
          </div>
        </div>
      </section>
            
            {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
