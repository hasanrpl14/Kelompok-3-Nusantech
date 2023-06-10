import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGear, faUser, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney, faArrowRightFromBracket, faCalendarDays, faSquareCheck } from "@fortawesome/free-solid-svg-icons";


const Dataaketerangan = () => {
  return (
    <>
    <div className="flex">
    <div className="h-screen w-1/5 bg-gray-200 fixed">
      <h1 className="pt-4 font-semibold uppercase flex justify-center text-xl">Admin</h1><br />
      <div className="flex flex-col items-start pl-4">
        <div className="w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
          <FontAwesomeIcon icon={faHouseChimney} style={{ color: "#000000" }}  />
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
          <a href="#" className="font-bold text-base ml-2">Data Keterangan</a>
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
      <div className="flex justify-center mt-24">
        <table className=" w-[57.5rem] rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
                <th className="p-3 tracking-wide text-left">No</th>
                <th className="p-3 tracking-wide text-left">Id Karyawan</th>
                <th className="p-3 tracking-wide text-left">Nama</th>
                <th className="p-3 tracking-wide text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">1</td>
              <td className="p-3 text-sm text-gray-700">11</td>
              <td className="p-3 text-sm text-gray-700">aqua</td>
              <td className="p-3 text-sm text-gray-700">sakit</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-3 text-sm text-gray-700">1</td>
              <td className="p-3 text-sm text-gray-700">10</td>
              <td className="p-3 text-sm text-gray-700">mizone</td>
              <td className="p-3 text-sm text-gray-700">izin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</>
  )
}

export default Dataaketerangan