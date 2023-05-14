import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../layouts/navbar/navbar";

const Absensi = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Navbar />
      <div className=" box bg-[#E8E8E8] w-11/12 pb-[3rem] px-5 py-5 ms-[3.5rem] absolute z-20 top-[4rem] rounded-[7px]">
        <div
          className="greating-tgl py-2 mb-4 flex justify-between items-center"
          style={{ borderBottom: "2px solid grey" }}
        >
          <span className="greating-name">
            <h3>Selamat Sore</h3>
            <h1 className="font-bold text-2xl">(Nama User)</h1>
          </span>
          <span>
            <p>{getCurrentDate()}</p>
          </span>
        </div>
        <div
          className="content w-[20rem] h-[20rem] mx-auto rounded-[5px]"
          style={{ border: "2px solid grey" }}
        >
          {/* Isi dari web Anda */}
        </div>
        <div className="absen-button-container flex justify-center mt-5">
          <button className="bg-[green] text-white px-[5rem] py-3 rounded-[5px] mx-auto">
            Absen masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Absensi;
