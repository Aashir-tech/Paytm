import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Mail, Phone, CreditCard, Edit2, LogOut, ChevronLeft } from "lucide-react";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_BACKEND_URL


  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/v1/user/profile`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition duration-200"
        >
          <ChevronLeft size={20} />
          <span>Back to Dashboard</span>
        </button>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 sm:p-10">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">User Profile</h1>
              <button className="text-white hover:text-blue-200 transition duration-200">
                <Edit2 size={24} />
              </button>
            </div>
            <div className="mt-6 flex items-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-blue-600 text-4xl font-bold">
                {user?.firstName[0]}
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-white">{`${user?.firstName} ${user?.lastName}`}</h2>
                <p className="text-blue-100">Member since {new Date(user?.createdAt).getFullYear()}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileItem icon={<Mail />} label="Email" value={user?.username} />
              <ProfileItem icon={<Phone />} label="Phone" value={user?.phoneNumber || "Not provided"} />
              <ProfileItem
                icon={<CreditCard />}
                label="Account Number"
                value={user?.accountId || "Not available"}
              />
              <ProfileItem icon={<User />} label="Username" value={user?.username || "Not set"} />
            </div>

            <div className="mt-10 flex justify-end">
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                <LogOut size={20} className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
    <div className="text-blue-500 mr-4">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

export default UserProfile;
