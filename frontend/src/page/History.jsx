import React from "react";
import "../index.css";
// import Header from "../components/history-absend/Header";
// import Content from "../components/history-absend/Content";

const History = () => {
  //   const navigate = useNavigate();
  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="navbar bg-blue-500">
          <font></font>
          <div className="navbar-start">
            <font></font>
            <div className="dropdown">
              <font></font>
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <font></font>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                <font></font>
              </label>
              <font></font>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52"
              >
                <font></font>
                <li>
                  <a>Home</a>
                </li>
                <font></font>
                <li>
                  <a>Absen</a>
                </li>
                <font></font>
                <li>
                  <a>Profil</a>
                </li>
                <font></font>
              </ul>
              <font></font>
            </div>
            <font></font>
          </div>
          <font></font>
          {/* <Header /> */}
          {/* <Content /> */}

          <div className="navbar-center">
            <font></font>
            <a className="btn btn-ghost normal-case text-xl">ABSENSI</a>
            <font></font>
          </div>
          <font></font>
          <div className="navbar-end mr-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?pid=ImgDet&rs=1"
                    alt="Profile Picture"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-blue-500 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Area tanggal*/}
        <div className=" text-gray-500 justify-center flex">
          <div className="w-11/12 bg-slate-200 text-white flex items-center justify-between h-16 mt-5 rounded-2xl drop-shadow-lg grid grid-cols-3 grid-rows-1 gap-5 px-5">
            <input
              type="text"
              className="w-50 bg-transparent text-black"
              placeholder="Tanggal Awal"
            />
            <input type="date" className="w-50 bg-transparent text-black" />{" "}
            {/*ml- adalah margin left untuk meenggeser date kekiri*/}
            <div className="text-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:grid-cols-3">
              <button className="bg-blue-500 w-28 h-8 mx-2 rounded-lg">
                Tampilkan
              </button>
              <button className="bg-orange-400 w-28 h-8 mx-2 rounded-lg">
                Cetak
              </button>
              <button className="bg-green-500  w-28 h-8 mx-2  rounded-lg">
                Clear
              </button>
            </div>
          </div>
        </div>
        <br />
        <h1 className="ml-16 text-black font-semibold">Data Absensi</h1>

        {/* area kotak 2 */}
        <div className=" justify-center flex">
          {" "}
          {/* div untuk membuat kotak ke tengah tengah halaman web */}
          <div className="w-11/12 bg-slate-200 text-black  h-80 mt-5 rounded-2xl drop-shadow-lg">
            {/* kotak yg isinya ada input search dll */}

            <div className="flex items-center mt-4">
              {" "}
              {/* isi  di dalam kotak */}
              <h1 className="ml-6">Show</h1>
              <input
                className="ml-1 w-10 h-8 text-right rounded-full drop-shadow-lg"
                type="number"
              />
              <h1 className="ml-1">entries</h1>
              <input
                className="ml-auto mr-10 p-1 rounded-2xl text-white px-2"
                type="search"
                placeholder="  cari...."
              />
            </div>
            <br />

            <div className="flex items-center mb-2 ml-6 text-base">
              <span className="w-2/12 font-semibold">No</span>
              <span className="w-5/6 font-semibold">Tanggal</span>
              <span className="w-11/12 font-semibold">Absen Masuk</span>
              <span className="w-11/12 font-semibold">Absen Pulang</span>
              <span className="w-5/6 font-semibold">Status</span>
              <span className="w-5/6 font-semibold">Aksi</span>
            </div>
            <hr className=" h-0.5 border-t-0 bg-gray-300 my-3" />
            <div className="flex items-center mb-2 ml-6 text-sm">
              <span className="w-2/12">1</span>
              <span className="w-2/3">13 Mei 2023</span>
              <span className="w-1/4 text-center text-white bg-green-500  rounded-full">
                15:40:56
              </span>
              <span className="w-2/12 text-center text-white bg-blue-500  rounded-full ml-2">
                Telat
              </span>
              <span className="w-1/4 ml-32 text-center text-white bg-green-500  rounded-full">
                00:00:00
              </span>
              <span className="w-2/6 text-center text-white bg-blue-500  rounded-full ml-2">
                Pulang Cepat
              </span>
              <span className="w-5/6 ml-24">Status</span>
              {/* <span className="text-center text-white bg-green-500  rounded-full">00:00:00</span> */}
              <span className="mr-48 bg-green-500 w-28 rounded-l text-center text-white">
                /
              </span>
            </div>

            <div className="mt-14 ml-6 flex items-center">
              <h1>Showing 1 to 1 of entries</h1>
              <div className="ml-auto mr-10 ">
                <span className="mx-1 rounded-lg drop-shadow-lg bg-white text-sm font-semibold w-2/12 p-1">
                  Previous
                </span>
                <span className="mx-1 bg-blue-500 text-white  rounded-sm p-2">
                  1
                </span>
                <span className="mx-1 rounded-lg drop-shadow-lg bg-white text-sm font-semibold w-2/12 p-1">
                  Next
                </span>
              </div>
            </div>
            <hr className=" h-0.5 border-t-0 bg-gray-300 my-5" />

            <div className="flex items-center mb-2 ml-6 text-sm">
              <span className="ml-20 mr-1">Hadir :</span>
              <span className="mr-48 bg-green-500 w-8 rounded-l text-center text-white">
                1
              </span>
              <span className="mr-1">Terlambat :</span>
              <span className="mr-48 bg-blue-500 w-8 rounded-l text-center text-white">
                1
              </span>
              <span className="mr-1">Sakit :</span>
              <span className="mr-48 bg-orange-500 w-8 rounded-l text-center text-white">
                0
              </span>
              <span className="mr-1">Izin :</span>
              <span className="mr-48 bg-purple-500 w-8 rounded-l text-center text-white">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <div className="flex items-center mb-2 text-sm bg-orange-400 w-11/12 h-10 mt-5 rounded-lg">
            <h1 className="ml-6">
              ! Untuk Melihat foto absen klik pada waktu masuk/pulang
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
