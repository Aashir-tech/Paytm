"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Wallet,
  Send,
  CreditCard,
  TrendingUp,
  User,
  Settings,
  LogOut,
  Search,
  Bell,
  Moon,
  Sun,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Home,
} from "lucide-react";
import walletgo from "../../src/assets/images/walletgodashboardlogo.png";
import walletgodark from "../../src/assets/images/walletlogo-dark-sm.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [balance, setBalance] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [filter, setFilter] = useState("");
  const [showBalance, setShowBalance] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const userId = localStorage.getItem("userId");
        // Fetch users
        const usersResponse = await axios.get(
          `${API_URL}/api/v1/user/bulk?filter=${filter}`
        );
        const users = usersResponse.data.user.filter(
          (user) => user._id !== userId
        );
        // console.log("Users : " , users);
        setUsers(users);
        setCurrentUser(userId ? true : false);

        // Fetch balance
        const balanceResponse = await axios.get(
          `${API_URL}/api/v1/account/balance`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(Math.trunc(balanceResponse.data.balance));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    const handleBack = () => {
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handleBack);
    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [filter, navigate]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(false);
    navigate("/signin", { replace: true });
  };

  const quickActions = [
    {
      icon: <Send className="w-6 h-6" />,
      label: "Send Money",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      label: "Pay Bills",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Plus className="w-6 h-6" />,
      label: "Add Money",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Invest",
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentTransactions = [
    {
      type: "sent",
      name: "Ankit Pasi",
      amount: 250,
      time: "2 hours ago",
      icon: <ArrowUpRight className="w-4 h-4" />,
    },
    {
      type: "received",
      name: "Azeem Khan",
      amount: 500,
      time: "5 hours ago",
      icon: <ArrowDownLeft className="w-4 h-4" />,
    },
    {
      type: "sent",
      name: "Rehan Ladaf",
      amount: 75,
      time: "1 day ago",
      icon: <ArrowUpRight className="w-4 h-4" />,
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (currentUser) {
    return (
      <div
        className={`min-h-screen transition-all duration-500 ${
          isDarkMode ? "dark" : ""
        } font-poppins`}
      >
        <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
          {/* Header */}
          <header className="bg-white dark:bg-[#050D2A] shadow-sm border-b border-gray-200 dark:border-slate-700">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                {isDarkMode ? (
                <img src={walletgodark} alt="logo" width={100} />
              ) : (
                <img src={walletgo} alt="logo" width={100} />
              )}
                </div>

                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300"
                  onClick={() => navigate('/')}
                  >
                    <Home size={20} />
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <button
                    onClick={() => navigate("/profile")}
                    className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300"
                  >
                    <User size={20} />
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors duration-300"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-6 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Balance Card */}
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-blue-100 mb-2">Total Balance</p>
                      <div className="flex items-center space-x-4">
                        <h2 className="text-4xl font-bold">
                          {showBalance
                            ? `₹${balance.toLocaleString()}`
                            : "₹••••••"}
                        </h2>
                        <button
                          onClick={() => setShowBalance(!showBalance)}
                          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                        >
                          {showBalance ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </div>
                    <Wallet className="w-16 h-16 text-white/80" />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-slate-700/50">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-slate-600/50"
                      >
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {action.icon}
                        </div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">
                          {action.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Transactions */}
                {/* <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-slate-700/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Recent Transactions
                    </h3>
                    <button className="text-blue-500 hover:text-blue-600 font-semibold">
                      View All
                    </button>
                  </div>

                  <div className="space-y-4">
                    {recentTransactions.map((transaction, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-xl"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-2 rounded-full ${
                              transaction.type === "sent"
                                ? "bg-red-100 text-red-600"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {transaction.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                              {transaction.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {transaction.time}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`font-bold ${
                            transaction.type === "sent"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {transaction.type === "sent" ? "-" : "+"}₹
                          {transaction.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Send Money */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-slate-700/50">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Send Money
                  </h3>

                  <div className="relative mb-6">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {users.map((user) => (
                      <div
                        key={user._id}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                            {user.firstName[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {user.username}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            navigate(
                              `/send?id=${user._id}&name=${user.firstName}`
                            )
                          }
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Send
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  } else {
    navigate("/signin" , {replace : true});
  }
};

export default Dashboard;
