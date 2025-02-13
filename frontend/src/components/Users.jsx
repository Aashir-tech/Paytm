// import { useEffect, useState } from "react"
// import { Button } from "./Button"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const Users = () => {
//     // Replace with backend call
//     const [users, setUsers] = useState([]);
//     const [filter , setFilter ] = useState("");

//     useEffect(() => {
//         axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter )
//             .then(response => {
//                 setUsers(response.data.user)
//             })
//     }, [filter])

//     return <>
//         <div className="font-bold mt-6 text-lg">
//             Users
//         </div>
//         <div className="my-2">
//             <input onChange={(e) => {
//                 setFilter(e.target.value)
//             }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
//         </div>
//         <div>
//             {users.map(user => <User user={user} />)}
//         </div>
//     </>
// }

// function User({user}) {
//     const navigate = useNavigate()

//     return <div className="flex justify-between">
//         <div className="flex">
//             <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
//                 <div className="flex flex-col justify-center h-full text-xl">
//                     {user.firstName[0]}
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center h-ful">
//                 <div>
//                     {user.firstName} {user.lastName}
//                 </div>
//             </div>
//         </div>

//         <div className="flex flex-col justify-center h-ful">
//             <Button onClick={() => {
//                navigate("/send?id=" + user._id + "&name=" + user.firstName)
//             }} label={"Send Money"} />
//         </div>
//     </div>
// }

// import { useEffect, useState } from "react";
// import { Button } from "./Button";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [filter, setFilter] = useState("");

//     useEffect(() => {
//         axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
//             .then(response => {
//                 setUsers(response.data.user);
//             });
//     }, [filter]);

//     return (
//         <div className="max-w-lg mx-auto p-4">
//             <div className="font-bold text-2xl text-gray-800 mb-4">
//                 Users
//             </div>
//             <input 
//                 onChange={(e) => setFilter(e.target.value)} 
//                 type="text" 
//                 placeholder="Search users..." 
//                 className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div className="mt-4 space-y-4">
//                 {users.map(user => <User key={user._id} user={user} />)}
//             </div>
//         </div>
//     );
// };

// function User({ user }) {
//     const navigate = useNavigate();

//     return (
//         <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
//             <div className="flex items-center">
//                 <div className="rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700 mr-3 shadow-sm">
//                     {user.firstName[0]}
//                 </div>
//                 <div className="text-lg font-medium text-gray-800">
//                     {user.firstName} {user.lastName}
//                 </div>
//             </div>
//             <Button onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)} label="Send Money" />
//         </div>
//     );
// }


import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {Search, Send} from 'lucide-react'

export const Users = ({ users, setFilter }) => {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="font-bold text-2xl px-4 py-3 dark:bg-gray-800 dark:text-gray-200 bg-gray-200 rounded-lg mb-6">Users</div>
        <div className="relative mb-6">
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-3 pl-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 transition-colors duration-200"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        </div>
        <div className="space-y-4">
          {users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </div>
      </div>
    )
  }
  
  const User = ({ user }) => {
    const navigate = useNavigate()
  
    return (
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg transition-colors duration-200">
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-xl font-semibold text-white mr-4 shadow-sm">
            {user.firstName[0]}
          </div>
          <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
            {user.firstName} {user.lastName}
          </div>
        </div>
        <button
          onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
          className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 shadow-md"
        >
          <Send size={18} className="mr-2" />
          Send Money
        </button>
      </div>
    )
  }
  
