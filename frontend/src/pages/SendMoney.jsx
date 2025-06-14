import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import { ArrowRight, DollarSign, ArrowLeft, User, Shield, Clock } from "lucide-react"

const SendMoney = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name = searchParams.get("name")

  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleTransfer = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      await axios.post(
        `${API_URL}/api/v1/account/transfer`,
        {
          to: id,
          amount: Number.parseFloat(amount),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      )
      setSuccess(true)
      setTimeout(() => {
        navigate("/dashboard", { replace: true })
      }, 2000)
    } catch (error) {
      console.error("Transfer failed:", error)
      setError("Transfer failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="font-poppins min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 text-center border border-white/20 max-w-md w-full">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Transfer Successful!</h2>
          <p className="text-gray-600 mb-6">
            ₹{amount} has been successfully sent to {name}
          </p>
          <div className="animate-pulse text-blue-500">Redirecting to dashboard...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="font-poppins min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Send Money
          </div>
          <div></div>
        </div>

        {/* Send Money Form */}
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-white/20">
          {/* Recipient Info */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-blue-600">
                  {name ? name[0].toUpperCase() : <User className="w-8 h-8" />}
                </span>
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold">{name || "Unknown User"}</h3>
                <p className="text-blue-100">Recipient</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">{error}</div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="amount">
                  Amount (₹)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value)
                      setError("")
                    }}
                    type="number"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 text-lg font-semibold"
                    id="amount"
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                  />
                </div>
                {amount && (
                  <p className="mt-2 text-sm text-gray-600">
                    You're sending ₹{Number.parseFloat(amount || 0).toLocaleString()} to {name}
                  </p>
                )}
              </div>

              {/* Security Features */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Bank-level security encryption
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  Instant transfer processing
                </div>
              </div>

              <button
                onClick={handleTransfer}
                disabled={isLoading || !amount}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center ${
                  isLoading || !amount ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                ) : (
                  <ArrowRight className="w-5 h-5 mr-2" />
                )}
                {isLoading ? "Processing..." : "Send Money"}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="mt-6 grid grid-cols-4 gap-3">
          {[100, 500, 1000, 2000].map((quickAmount) => (
            <button
              key={quickAmount}
              onClick={() => setAmount(quickAmount.toString())}
              className="bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20 rounded-xl py-3 px-4 text-center transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-sm font-semibold text-gray-700">₹{quickAmount}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">Transfers are processed instantly and securely</p>
        </div>
      </div>
    </div>
  )
}

export default SendMoney
