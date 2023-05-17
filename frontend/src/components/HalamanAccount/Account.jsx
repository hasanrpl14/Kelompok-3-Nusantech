import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      {/* Sidebar */}
      <nav className="w-60 bg-gray-800 h-screen">
        <div className="flex flex-col h-full w-1/6 bg-gray-800 text-white">
          <div className=" p-10 -mb-15">
            <h1 className="text-3xl font-bold mb-4">Absensi</h1>
          </div>

          <ul className="flex flex-col">
            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a href="" onClick={() => navigate("/home")}>
                Dashboard
              </a>
            </li>
            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a href="" onClick={() => navigate("/account")}>
                Account
              </a>
            </li>
            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a href="#">Data Kelas</a>
            </li>
            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a href="#">Data</a>
            </li>
            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a>Data Absensi</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-10 w-screen h-28 bg-sky-700">
        <h1 className="font-bold text-3xl">Profile Account</h1>
        <div className="flex-2 mt-20">
          <div className="h-screen overflow-y-hidden">
            <div className="shadow-lg rounded-lg p-4">
              <div className="w-36 h-36">
                <img
                  src="https://img.icons8.com/?size=512&id=51987&format=png"
                  alt="Avatar"
                />
              </div>

              <p className="text-1xl font-bold text-gray-800">Username</p>
              <input
                id=""
                type="text"
                placeholder="Username"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-1xl font-bold text-gray-800">Email</p>
              <input
                id=""
                type="text"
                placeholder="Email"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-1xl font-bold text-gray-800">Phone Number</p>
              <input
                id=""
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-1xl font-bold text-gray-800">Address</p>
              <input
                id=""
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
