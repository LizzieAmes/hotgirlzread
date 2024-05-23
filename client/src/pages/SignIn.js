// src/pages/SignIn.js
// import React from 'react';

// const SignIn = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-pink-100">
//       <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
//         <h1 className="text-2xl font-bold text-purple-600">Sign In 🦋</h1>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Email"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Password"
//             />
//           </div>
//           <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-black-600 text-center mb-8 mb-8 font-poppins">
          Sign In 🦋
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-poppins">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 mb-2 font-poppins">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-pink-300"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300 mb-8 font-poppins">
            Sign In
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default SignIn;
