"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import { ArrowRight, DollarSign } from "lucide-react"

export const SendMoney = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name = searchParams.get("name")

  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleTransfer = async () => {
    setIsLoading(true)
    try {
      await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      )
      navigate("/dashboard", { replace: true })
    } catch (error) {
      console.error("Transfer failed:", error)
      // Handle error (show error message to user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Send Money</h2>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">{name ? name[0].toUpperCase() : ""}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">{name}</h3>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block" htmlFor="amount">
                  Amount (in Rs)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    id="amount"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              <button
                onClick={handleTransfer}
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition duration-300 ${isLoading ? "opacity-75 cursor-not-allowed" : "hover:from-blue-600 hover:to-indigo-700"}`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    Initiate Transfer
                    <ArrowRight className="ml-2" size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 hover:text-blue-800 transition duration-200"
          >
            Cancel and return to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendMoney

