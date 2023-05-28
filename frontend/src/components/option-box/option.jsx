import React from "react";
import { useNavigate } from "react-router-dom";

const OptionBox = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="box bg-[#E8E8E8] w-11/12 pb-[3rem] px-5 py-5 ms-[3.5rem] absolute z-20 top-[4rem] rounded-[7px]  ">
        <div
          className="greating-tgl py-2 mb-4 flex justify-between items-center"
          style={{ borderBottom: "2px solid grey" }}
        >
          <span className="greating-name">
            <h3>Selamat Sore</h3>
            <h1 className="font-bold text-2xl">Name User</h1>
          </span>
          <span>
            <p>13 Maret 2025</p>
          </span>
        </div>
        <div className="option flex justify-evenly mt-[3rem]">
          <div className="justify-center flex flex-col items-center">
            <button onClick={() => navigate("/sebelum")} className="bg-[#3A7BB7] py-[40px] px-[40px]  rounded-lg">
              <img className="w-[3rem]" src="./assets/camera.png" alt="" />
            </button>
            <p className="p-absen">Absen</p>
          </div>
          <div className="justify-center flex flex-col items-center">
            <button onClick={() => navigate("/history")}className="bg-[#3DB73A] py-[40px] px-[40px]  rounded-lg">
              <img className="w-[2rem]" src="./assets/history.png" alt="" />
            </button>
            <p className="p-absen">History</p>
          </div>
          <div className="justify-center flex flex-col items-center">
            <button onClick={() => navigate("/account")} className="bg-[#a3307f] py-[40px] px-[40px]  rounded-lg">     
              <img src="./assets/logo.png" alt="" />
            </button>
            <p className="p-absen">Profile</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-[230px]">
        <div className="bg-[#3A7BB7] w-[36rem] py-[15px] px-[20px] rounded-md text-white text-center">
          Absen Masuk
        </div>
        <div className="bg-[#eeb03d] w-[36rem] py-[15px] px-[20px] rounded-md text-white text-center">
          Absen Pulang
        </div>
      </div>
      <div className="mt-7">
        <div className="flex items-center ms-[40px]">
          <h3>Absensi Bulan</h3>
          <select
            name="bulan"
            id=""
            className="bg-transparent border-none text-teal-600"
          >
            <option value="">Januari</option>
            <option value="">Februari</option>
            <option value="">Maret</option>
          </select>
          <span className="text-teal-600">2023</span>
        </div>
        <div className="flex flex-wrap justify-evenly mt-3">
          <button className="w-[270px] py-4  px-5 bg-green-600 rounded-md flex items-center text-white">
            <img src="./assets/logo.png" alt="" />
            <div className="flex flex-col ms-3  items-start">
              <h3 className="font-semibold">Hadir</h3>
              <p className="opacity-60">lorem</p>
            </div>
          </button>
          <button className="w-[270px] py-4  px-5 bg-slate-600 rounded-md flex items-center text-white">
            <img src="./assets/logo.png" alt="" />
            <div className="flex flex-col ms-3  items-start">
              <h3 className="font-semibold">Sakit</h3>
              <p className="opacity-60">lorem</p>
            </div>
          </button>
          <button className="w-[270px] py-4  px-5 bg-blue-600 rounded-md flex items-center text-white">
            <img src="./assets/logo.png" alt="" />
            <div className="flex flex-col ms-3 items-start">
              <h3 className="font-semibold">Izin</h3>
              <p className="opacity-60">lorem</p>
            </div>
          </button>
          <button className="w-[270px] py-4  px-5 bg-red-600 rounded-md flex items-center text-white">
            <img src="./assets/logo.png" alt="" />
            <div className="flex flex-col ms-3  items-start">
              <h3 className="font-semibold">Alpa</h3>
              <p className="opacity-60">lorem</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default OptionBox;
