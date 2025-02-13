// export const Appbar = () => {
//     return <div className="shadow h-14 flex justify-between">
//         <div className="flex flex-col justify-center font-size  h-full ml-4">
//             Paytm App
//         </div>
//         <div className="flex">
//             <div className="flex flex-col justify-center h-full mr-4">
//                 Hello
//             </div>
//         <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2 mr-2">
//             <div className="flex flex-col justify-center h-full text-xl">
//                 U
//             </div>
//         </div>
//         </div>

//     </div>
// }

// export const Appbar = () => {
//     return (
//         <div className="shadow-md h-16 flex justify-between items-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//             <div className="text-2xl font-bold tracking-wide">
//                 Paytm App
//             </div>
//             <div className="flex items-center space-x-4">
//                 <div className="text-lg font-medium">
//                     Hello
//                 </div>
//                 <div className="rounded-full h-12 w-12 bg-white flex items-center justify-center text-blue-600 font-semibold shadow-md">
//                     U
//                 </div>
//             </div>
//         </div>
//     );
// };

import { Sun, Moon, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

export const Appbar = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div className="shadow-lg h-20 flex justify-between items-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white">
      <div className="text-2xl font-bold tracking-wide">
        <Link to = "/">
        Paytm App
        </Link>
        
        </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="text-lg font-medium">Hello, User</div>
        <button
          onClick={() => navigate("/profile")}
          className="rounded-full h-12 w-12 bg-white dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold shadow-md"
        >
          <UserCircle size={28} />
        </button>
      </div>
    </div>
  );
};
