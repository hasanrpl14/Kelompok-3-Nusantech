import React from "react";
import "../index.css";

const History = () => {
  return (
    <div className="text-black p-10">
      <div className="w-full h-20 bg-sky-500 rounded-lg grid grid-cols-4">
        <div className="">TANGGAL AWAL</div>
        <div className="">13-04-23</div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="mt-10">
        <h1>DATA ABSENSI</h1>
      </div>
      <div className="w-full h-80 bg-sky-500 rounded-lg grid grid-cols-4">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="w-full h-40 mt-10 bg-sky-500 rounded-lg grid grid-cols-4">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default History;
