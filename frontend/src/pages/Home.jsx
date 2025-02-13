import { useState } from "react"
import { CreditCard, Smartphone, Wallet, Moon, Sun, Send } from "lucide-react"
import { Link } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import {Signin} from './Signin'
import {Signup} from './Signup'
import {SendMoney} from './SendMoney'

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">PaytmClone</div>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Contact
              </a>
            </li>
            {/* <li>
              <Link
                to="/dashboard"
                className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-full transition duration-300"
              >
                Dashboard
              </Link>
            </li> */}
            <li>
              <Link to="/signin" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition duration-300">
                Login
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 dark:bg-gray-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to PaytmClone</h1>
          <p className="text-xl mb-8">Your One-Stop Solution for Digital Payments</p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg">
              Get Started
            </Link>
            <Link to="/dashboard" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 shadow-lg flex items-center">
              <Send size={20} className="mr-2" />
              Send Money
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <Wallet className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Digital Wallet</h3>
              <p className="dark:text-gray-300">Securely store and manage your money digitally.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Mobile Recharge</h3>
              <p className="dark:text-gray-300">Quick and easy recharges for all mobile operators.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <CreditCard className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Bill Payments</h3>
              <p className="dark:text-gray-300">Pay all your utility bills hassle-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <svg className="w-32 h-32 mx-auto mb-4" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#00BAF2" />
            <path d="M30 50 L70 50 M50 30 L50 70" stroke="white" strokeWidth="8" />
          </svg>
          <h2 className="text-3xl font-bold dark:text-white">PaytmClone</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Simplifying Digital Payments</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">PaytmClone</h3>
            <p>Your trusted digital payment partner.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 PaytmClone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

