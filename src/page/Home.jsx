import React from "react";
import "../index.css";

const Home = () => {
  return (
    <div className="flex">
     
      {/* Sidebar */}
      <nav className="w-60 bg-gray-800 h-screen">
      <div className="flex flex-col h-full w-1/6 bg-gray-800 text-white">
  <div className="p-4">
    <img src="D:/GITHUB/project nusntech/Kelompok-3-Nusantech/src/asset" alt="" className="h-12 w-12 mb-4" />
  </div>
  <ul className="flex flex-col">
    <li className="p-4 rounded-xl hover:bg-gray-700 w-screen">
      <a href="#">Dashboard</a>
    </li>
    <li className="w-screen p-4 rounded-xl hover:bg-gray-700">
      <a href="#">Data Siswa</a>
    </li>
    <li className="w-screen p-4 rounded-xl hover:bg-gray-700">
      <a href="#">Data Kelas</a>
    </li>
    <li className="w-screen p-4 rounded-xl hover:bg-gray-700">
      <a href="#">Data Absensi</a>
    </li>
  </ul>
</div>
      </nav>
      
      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Absensi</h1>
      </div>
    </div>
  );
};

export default Home;
