import React from "react";
import "./Absensi.css";
import { Link } from "react-router-dom";

const Absensi = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-blue-500 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div>
            <a className="text-xl font-semibold text-neutral-800 dark:text-neutral-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300 focus:outline-none focus:text-neutral-700 dark:focus:text-neutral-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10a3 3 0 11-6 0 3 3 0 016 0zM12 12a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <div className="container">
        <p className="text-left text-slate-600">Selamat Pagi</p>
        <p className="text-left text-slate-600">(Nama User)</p>
        <p className="text-right text-slate-600">{getCurrentDate()}</p>
        <hr />
        <div className="content">
          {/* Isi dari web Anda */}
        </div>
        <div className="absen-button-container">
          <button className="absen-button">Absen masuk</button>
        </div>
      </div>
    </div>
  );
};

export default Absensi;
