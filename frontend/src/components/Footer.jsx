import React from "react";
import walletgofooterlogo from "../../src/assets/images/walletgofooterlogo.png";
import walletgo from "../../src/assets/images/walletlogo-light-sm.png";
import { Facebook, Instagram, Twitter } from "lucide-react";


const Footer = ({isDarkMode}) => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#F2EEEC] text-slate-900 dark:bg-black dark:text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              {isDarkMode ? (
                <img src={walletgofooterlogo} alt="" width={100} />
              ) : (
                <img src={walletgo} alt="" width={100} />
              )}
              <p className="text-slate-800 dark:text-gray-400 leading-relaxed">
                Your trusted digital payment partner, making financial
                transactions simple, secure, and seamless.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">
                    <Facebook />
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">
                    <Twitter />
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">
                    <Instagram />
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Digital Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Money Transfer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Bill Payments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Mobile Recharge
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-800 dark:text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-slate-800 dark:text-gray-400">
              &copy; 2024 Wallet Go. All rights reserved. Made with ❤️ for
              better financial experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
