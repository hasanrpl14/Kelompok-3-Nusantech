import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGear, faUser, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney, faArrowRightFromBracket, faCalendarDays, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Datauser = () => {

  return (
    <>
      <div className="flex">
        <div className="h-screen w-1/5 bg-gray-200 fixed">
          <h1 className="pt-4 font-semibold uppercase flex justify-center text-xl">Admin</h1><br />
          <div className="flex flex-col items-start pl-4">
            <div className="w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faHouseChimney} style={{ color: "#000000" }} />
              <a href="dashboard" className="font-bold text-base ml-2">Beranda</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faDatabase} style={{ color: "#000000" }} />
              <a href="admindatakaryawan" className="font-bold text-base ml-2">Data Karyawan</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#000000" }} />
              <a href="admindatauser" className="font-bold text-base ml-2">Data User</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#000000" }} />
              <a href="admindatajabatan" className="font-bold text-base ml-2">Data Jabatan</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#000000" }} />
              <a href="admindataabsen" className="font-bold text-base ml-2">Data Absen</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000" }} />
              <a href="admindataketerangan" className="font-bold text-base ml-2">Data Keterangan</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#000000" }} />
              <a href="#" className="font-bold text-base ml-2">Keluar</a>
            </div>
          </div>
        </div>
        <div className="w-4/5 ml-[20%]">
          <div className="navbar bg-gradient-to-r from-cyan-400 to-blue-500 h-16 fixed w-full">
          </div>
          <div className="flex mt-20 justify-center">
            <div className="card w-[57rem] h-44 ml-8 mr-6 pr-6 bg-gray-200 flex flex-col rounded-xl uppercase">
              <div className="flex mt-5">
                <h1 className="pl-8">Username</h1>
                <input type="text" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
              </div>
              <div className="flex mt-5">
                <h1 className="pl-8">Password</h1>
                <input type="password" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
              </div>
              <div className="flex mt-5">
                <button className="bg-blue-600 ml-6 px-3 py-1 w-20 text-white focus:outline-none rounded-md">Simpan</button>
                <button className="bg-red-500 ml-5 px-3 py-1 w-20 text-white focus:outline-none rounded-md">Batal</button>
              </div>
              <br />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <table className=" w-[57.5rem] rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                    <th className="p-3 tracking-wide text-left">No</th>
                    <th className="p-3 tracking-wide text-left">Id</th>
                    <th className="p-3 tracking-wide text-left">Username</th>
                    <th className="p-3 tracking-wide text-left">Password</th>
                    <th className="p-3 tracking-wide text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700">1</td>
                  <td className="p-3 text-sm text-gray-700">2</td>
                  <td className="p-3 text-sm text-gray-700">admin</td>
                  <td className="p-3 text-sm text-gray-700">admin123</td>
                  <td className="p-3 text-sm text-gray-700">
                  <button className="bg-red-500 px-3 py-1 w-16 text-white focus:outline-none rounded-md">Aksi</button>
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="p-3 text-sm text-gray-700">1</td>
                  <td className="p-3 text-sm text-gray-700">2</td>
                  <td className="p-3 text-sm text-gray-700">admin</td>
                  <td className="p-3 text-sm text-gray-700">admin123</td>
                  <td className="p-3 text-sm text-gray-700">
                  <button className="bg-red-500 px-3 py-1 w-16 text-white focus:outline-none rounded-md">Aksi</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datauser;

