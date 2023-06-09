// "use client";
import React from "react";
import "../index.css";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="w-60 bg-gray-800 h-screen">
        <div className="flex flex-col h-full w-1/6 bg-gray-800 text-white">
          <div className=" p-10 -mb-15">
            <h1 className="text-3xl font-bold mb-4">Absensi</h1>
          </div>

          <ul className="flex flex-col">
            <li className="p-4 rounded-xl w-60 hover:bg-gray-700 ">
              <a href="#">Dashboard</a>
            </li>

            <li className=" rounded-xl h-14 w-60 hover:bg-gray-700">
              <button
                className="p-4 w-full h-full flex justify-start items-center"
                onClick={() => navigate("/account")}
              >
                Account
              </button>
            </li>

            <li className="rounded-xl h-14 w-60 hover:bg-gray-700">
              <button
                className="p-4 w-full h-full flex justify-start items-center"
                onClick={() => navigate("/history")}
              >
                History
              </button>
            </li>

            <li className=" p-4 rounded-xl w-60 hover:bg-gray-700">
              <a href="#">Data Kelas</a>
            </li>

            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a href="#">Data </a>
            </li>

            <li className="p-4 rounded-xl w-60 hover:bg-gray-700">
              <a>Data Absensi</a>
            </li>
          </ul>

          <ul>
            <li> {/* <Link to="/Signin"> signin </Link> */}</li>
          </ul>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex-1 p-10"></div>
    </div>
  );
};

export default Home;
