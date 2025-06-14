
import { useState } from "react"
import {
  CreditCard,
  Smartphone,
  Wallet,
  Moon,
  Sun,
  Send,
  Shield,
  Zap,
  Check,
  Clock,
  Globe,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Service = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      icon: <Wallet className="w-16 h-16" />,
      title: "Digital Wallet",
      description: "Store, manage, and spend your money with complete security and convenience.",
      features: [
        "Multi-currency support",
        "Biometric authentication",
        "Real-time balance tracking",
        "Expense categorization",
        "Budget management tools",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Send className="w-16 h-16" />,
      title: "Money Transfer",
      description: "Send money instantly to anyone, anywhere in the world from your home with zero fees .",
      features: [
        "Instant transfers",
        "Global reach (190+ countries)",
        "Zero transaction fees",
        "Real-time notifications",
        "Transfer history tracking",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <CreditCard className="w-16 h-16" />,
      title: "Bill Payments",
      description: "Pay all your bills in one place with automated scheduling and reminders.",
      features: [
        "Auto-pay scheduling",
        "Bill reminders",
        "Multiple payment methods",
        "Payment history",
        "Cashback rewards",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Mobile Recharge",
      description: "Quick and easy mobile recharges for all operators with exclusive offers.",
      features: [
        "All operators supported",
        "Instant recharge",
        "Special offers & cashback",
        "Recharge history",
        "Auto-recharge options",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Security & Insurance",
      description: "Advanced security features and transaction insurance for peace of mind.",
      features: [
        "256-bit encryption",
        "Fraud protection",
        "Transaction insurance",
        "24/7 monitoring",
        "Secure backup & recovery",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "Investment & Savings",
      description: "Grow your money with smart investment options and high-yield savings.",
      features: [
        "High-yield savings account",
        "Mutual fund investments",
        "Goal-based savings",
        "Investment tracking",
        "Expert financial advice",
      ],
      color: "from-teal-500 to-blue-500",
    },
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for personal use",
      features: ["Digital wallet", "Basic money transfers", "Bill payments", "Mobile recharge", "Email support"  , "Ticket Booking" , "Online Shopping "],
      popular: false,
      buttonText: "Get Started",
      buttonStyle: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "Best for frequent users",
      features: [
        "Everything in Basic",
        "Unlimited free transfers",
        "Priority customer support",
        "Advanced analytics",
        "Cashback rewards",
        "Investment options",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
    },
    {
      name: "Business",
      price: "$29.99",
      period: "/month",
      description: "Designed for businesses",
      features: [
        "Everything in Premium",
        "Multi-user accounts",
        "Bulk payments",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle: "bg-gray-600 hover:bg-gray-700",
    },
  ]

  const faqs = [
    {
      question: "How secure are my transactions?",
      answer:
        "We use bank-level 256-bit encryption and multi-factor authentication to ensure your transactions are completely secure. All data is encrypted both in transit and at rest.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! Our Basic plan is completely free, and Premium/Business plans have transparent pricing with no surprise charges. International transfers may have minimal fees depending on the destination.",
    },
    {
      question: "How long do transfers take?",
      answer:
        "Domestic transfers are instant, while international transfers typically take 1-3 business days depending on the destination country and local banking systems.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your Premium or Business subscription at any time. There are no cancellation fees, and you'll continue to have access until the end of your billing period.",
    },
    {
      question: "What customer support do you offer?",
      answer:
        "We offer 24/7 customer support via chat and email for all users. Premium and Business users get priority support with faster response times.",
    },
    {
      question: "Is my money insured?",
      answer:
        "Yes, all funds in your Wallet Go account are insured up to $250,000 through our banking partners and additional transaction insurance coverage.",
    },
  ]

  return (
    <div className={`flex flex-col bg-[#F2EEEC] min-h-screen transition-all duration-500 ${isDarkMode ? "dark" : ""} font-poppins`}>
      
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* Hero Section */}
      <section className="min-h-screen  pt-[20vh] pb-16 bg-gradient-to-tr  dark:from-purple-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Comprehensive financial solutions designed to simplify your life and secure your future
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-500" />
                Bank-level Security
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                Instant Processing
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-500" />
                Global Reach
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-500" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-[#F2EEEC] bg-gradient-to-br dark:from-purple-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200/50 dark:border-slate-600/50"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-8 w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r bg-[#F2EEEC] dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                  plan.popular
                    ? "border-blue-500 dark:border-blue-400 ring-4 ring-blue-500/20"
                    : "border-gray-200/50 dark:border-slate-600/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-800 dark:text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 dark:text-gray-300 ml-1">{plan.period}</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full ${plan.buttonStyle} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F2EEEC] bg-gradient-to-r dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br bg-gray-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-gray-200/50 dark:border-slate-600/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-300 dark:hover:bg-slate-700/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-300 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F2EEEC] bg-gradient-to-r dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-500 mb-8 max-w-3xl mx-auto">
            Join millions of users who trust Wallet Go for their financial needs. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default Service
