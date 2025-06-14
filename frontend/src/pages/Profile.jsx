import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
  User,
  Mail,
  Phone,
  CreditCard,
  Edit2,
  LogOut,
  ChevronLeft,
  Calendar,
  Shield,
  Award,
  Settings,
} from "lucide-react"

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${API_URL}/api/v1/user/profile`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        console.log(response.data)
        setUser(response.data)
      } catch (error) {
        console.error("Failed to fetch user data:", error)
        navigate("/signin")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/signin")
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  const profileStats = [
    {
      label: "Account Age",
      value: `${new Date().getFullYear() - new Date(user?.createdAt).getFullYear()} years`,
      icon: <Calendar className="w-5 h-5" />,
    },
    { label: "Security Level", value: "High", icon: <Shield className="w-5 h-5" /> },
    { label: "Member Status", value: "Premium", icon: <Award className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/20 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold"
            >
              <ChevronLeft size={20} />
              <span>Back to Dashboard</span>
            </button>

            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              User Profile
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Edit2 size={16} />
              <span>{isEditing ? "Cancel" : "Edit"}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-white/20 mb-8">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-blue-600 text-6xl font-bold shadow-2xl">
                    {user?.firstName?.[0]}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="text-center md:text-left text-white">
                  <h1 className="text-4xl font-bold mb-2">{`${user?.firstName} ${user?.lastName}`}</h1>
                  <p className="text-blue-100 text-lg mb-4">{user?.username}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Verified Account</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Premium Member</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-8 bg-white/50">
              <div className="grid md:grid-cols-3 gap-6">
                {profileStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/60 rounded-2xl border border-white/20">
                    <div className="text-blue-500 mb-2 flex justify-center">{stat.icon}</div>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                <Settings className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-6">
                <ProfileField
                  icon={<User className="w-5 h-5" />}
                  label="Full Name"
                  value={`${user?.firstName} ${user?.lastName}`}
                  isEditing={isEditing}
                />
                <ProfileField
                  icon={<Mail className="w-5 h-5" />}
                  label="Email Address"
                  value={user?.username}
                  isEditing={isEditing}
                />
                <ProfileField
                  icon={<Phone className="w-5 h-5" />}
                  label="Phone Number"
                  value={user?.phoneNumber || "Not provided"}
                  isEditing={isEditing}
                />
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Account Information</h2>
                <CreditCard className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-6">
                <ProfileField
                  icon={<CreditCard className="w-5 h-5" />}
                  label="Account ID"
                  value={user?.accountId || "Not available"}
                  isEditing={false}
                />
                <ProfileField
                  icon={<Calendar className="w-5 h-5" />}
                  label="Member Since"
                  value={new Date(user?.createdAt).toLocaleDateString()}
                  isEditing={false}
                />
                <ProfileField
                  icon={<Shield className="w-5 h-5" />}
                  label="Account Status"
                  value="Active & Verified"
                  isEditing={false}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Update Profile
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <LogOut size={20} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileField = ({ icon, label, value, isEditing }) => (
  <div className="flex items-center p-4 bg-gray-50/80 rounded-xl border border-gray-200/50">
    <div className="text-blue-500 mr-4">{icon}</div>
    <div className="flex-1">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      {isEditing ? (
        <input
          type="text"
          defaultValue={value}
          className="w-full font-medium text-gray-800 bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      ) : (
        <p className="font-medium text-gray-800">{value}</p>
      )}
    </div>
  </div>
)

export default Profile
