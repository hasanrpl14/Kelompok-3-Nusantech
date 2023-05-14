import React from "react";
import "./Absensi.css";
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
      <div className=" container">
        <p className="text-left text-slate-600">Selamat Pagi</p>
        <p className="text-left text-slate-600">(Nama User)</p>
        <p className="text-right text-slate-600">{getCurrentDate()}</p>
        <hr />
        <div className="content">{/* Isi dari web Anda */}</div>
        <div className="absen-button-container">
          <button className="absen-button">Absen masuk</button>
        </div>
      </div>
    </div>
  );
};

export default Absensi;
