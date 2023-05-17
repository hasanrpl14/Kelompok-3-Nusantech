import React from "react";
import "../../index.css";

const Header = () => {
  return (
    <div className="text-black h-screen px-10 py-5">
      <div className="w-full h-20 rounded-lg grid grid-cols-4 p-5 gap-5 mb-5">
        <div className="flex justify-center rounded-md items-center">
          <input
            type="text"
            className="w-full rounded-md"
            placeholder="TANGGAL AWAL"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="date"
            name="date"
            id="date"
            className="w-full rounded-md"
          />
        </div>
        <div className="flex justify-center space-x-5 items-center">
          <button className="w-1/2 py-3 bg-pink-400 rounded-md">
            Tampilkan
          </button>
          <button className="w-1/2 py-3 bg-pink-400 rounded-md">Cetak</button>
        </div>
        {/* <div className="flex justify-center space-x-5 items-center">
          <button className="w-40 py-3 bg-pink-400 rounded-md">Cetak</button>
        </div> */}
        <div className="flex justify-center items-center">
          <button className="w-full py-3 bg-pink-400 rounded-md">Clear</button>
        </div>
      </div>

      <div className="px-5 mb-5">
        <h2 className="font-semibold text-xl">Data Absend</h2>
      </div>

      <div className="w-full h-auto glass rounded-lg grid grid-cols-4 p-5 gap-5 mb-5">
        <div className="flex justify-center items-center bg-white">
          TANGGAL AWAL
        </div>
        <div className="flex justify-center items-center bg-white">
          TANGGAL AWAL
        </div>
        <div className="flex justify-center items-center bg-white">
          TANGGAL AWAL
        </div>
        <div className="flex justify-center items-center bg-white">
          TANGGAL AWAL
        </div>
        <div className="flex justify-center items-center bg-white">
          TANGGAL AWAL
        </div>
      </div>
    </div>
  );
};

export default Header;
