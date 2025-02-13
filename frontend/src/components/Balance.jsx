// export const Balance = ({value}) => {
//     return <div className="flex p-4">
//         <div className="font-bold text-sm">
//             Your balance is 
//         </div>
//         <div className="font-semibold ml-4 text-sm">
//             Rs {value}
//         </div>
//     </div>
// }

// export const Balance = ({ value }) => {
//     return (
//         <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-sm mx-auto">
//             <div className="font-bold text-lg text-gray-700">
//                 Your balance is
//             </div>
//             <div className="font-semibold ml-4 text-lg text-green-600">
//                 Rs {value}
//             </div>
//         </div>
//     );
// };

export const Balance = ({ value }) => {
    return (
      <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md mx-auto mb-8 transition-colors duration-200">
        <div className="font-bold text-xl text-gray-800 dark:text-gray-200">Your balance</div>
        <div className="font-semibold text-2xl text-green-600 dark:text-green-400">₹{value.toLocaleString()}</div>
      </div>
    )
  }
   