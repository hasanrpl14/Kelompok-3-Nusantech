import React from "react";

function App() {

  return (
    <div className="mx-auto py-6 bg-sky-600 w-screen">
    <h1 className="text-2xl font-bold mb-4 " >Profile Account</h1>
    <div className="border border-gray-300 p-4">
      <div className="flex items-center mb-4">
        <img className="w-12 h-12 rounded-full mr-4" src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?pid=ImgDet&rs=1" alt="Profile Picture" />
        <div>
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-gray-600">User.@gmail.com</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
        <div className="flex items-center mb-2">
          <span className="w-1/4 font-medium">Name:</span>
          <span className="w-3/4">User</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="w-1/4 font-medium">Email:</span>
          <span className="w-3/4">User.@gmail.com</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="w-1/4 font-medium">Phone:</span>
          <span className="w-3/4">+6285712925067</span>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
