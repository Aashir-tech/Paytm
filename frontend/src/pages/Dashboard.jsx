// import axios from "axios"
// import { Appbar } from "../components/Appbar"

// import { useEffect, useState } from "react"

// export const Dashboard = () => {

//     const [value, setValue ] = useState("")

//     useEffect(() => {
//
//     }, [])

//     return <div>
//         <Appbar />
//         <Balance value={value} />
//         <Users />
//     </div>
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { Appbar } from "../components/Appbar";
import { Navigation2Icon } from "lucide-react";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  //   const [balance, setBalance] = useState(10000) // Example balance
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/user/bulk?filter=` + filter)
      .then((response) => {
        setUsers(response.data.user);
      });

    axios
      .get(`${API_URL}/api/v1/account/balance`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setValue(Math.trunc(response.data.balance));
      });

      const handleBack = () => {
        navigate("/" , {replace : true});
      }

      window.addEventListener('popstate' , handleBack);

      return () => {
        window.removeEventListener('popstate' , handleBack);
      }

  }, [filter , navigate]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Appbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-8">
        <Balance value={value} />
        <Users users={users} setFilter={setFilter} />
      </main>
    </div>
  );
};
