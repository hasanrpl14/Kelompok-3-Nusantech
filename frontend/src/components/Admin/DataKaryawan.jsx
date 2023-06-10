import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGear, faUser, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney, faArrowRightFromBracket, faCalendarDays, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const DataKaryawan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionn, setSelectedOptionn] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeN = (event) => {
    setSelectedOptionn(event.target.value);
  };

  const handleUpload = () => {
    console.log(selectedFile);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="h-screen w-1/5 bg-gray-200 fixed">
          <h1 className="pt-4 font-semibold uppercase flex justify-center text-xl">Admin</h1><br />
          <div className="flex flex-col items-start pl-4">
            <div className="w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faHouseChimney} style={{ color: "#000000" }} />
              <a href="dashboard" className="font-bold text-base ml-2">Beranda</a>
            </div>
            <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
              <FontAwesomeIcon icon={faDatabase} style={{ color: "#000000" }} />
              <a href="#" className="font-bold text-base ml-2">Data Karyawan</a>
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
          <div className="navbar bg-gradient-to-r from-cyan-400 to-blue-500 h-16 fixed w-4/5">
            <div className="navbar-start">
              <input className="ml-8 p-2 px-3 w-52 focus:outline-none text-xs placeholder cursor-pointer" type="search" placeholder="Cari ID atau nama karyawan" />
              <div className="bg-blue-600 py-1 px-3 cursor-pointer">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[8rem] mr-[3rem]">
          <card className="w-[57rem] h-auto  mr-6 pr-6 bg-gray-200 flex flex-col rounded-xl uppercase">
            <div className="flex mt-6">
              <h1 className="pl-8">Nip</h1>
              <input type="number" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Username</h1>
              <input type="text" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Password</h1>
              <input type="password" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Nama</h1>
              <input type="text" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Tempat dan Tanggal Lahir</h1>
              <input type="text" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Jenis Kelamin</h1>
              <select
                id="selectBox"
                className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value=""></option>
                <option value="option1">Laki - Laki</option>
                <option value="option2">Perempuan</option>
              </select>
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Alamat</h1>
              <textarea className="bg-white ml-auto px-3 py-1 w-[27rem] h-14 focus:outline-none rounded-md resize-none"></textarea>
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">No.Telepon</h1>
              <input type="number" className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md" />
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Jabatan</h1>
              <select
                id="selectBox"
                className="bg-white ml-auto px-3 py-1 w-[27rem] focus:outline-none rounded-md"
                value={selectedOptionn}
                onChange={handleOptionChangeN}
              >
                <option value=""></option>
                <option value="option3">Ceo</option>
                <option value="option4">Sekretaris</option>
              </select>
            </div>
            <div className="flex mt-5">
              <h1 className="pl-8">Foto</h1>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
            </div>
            <div className="flex mt-5">
              <button className="bg-blue-600 ml-6 px-3 py-1 w-20 text-white focus:outline-none rounded-md">Simpan</button>
              <button className="bg-red-500 ml-5 px-3 py-1 w-20 text-white focus:outline-none rounded-md">Batal</button>
            </div>
            <br />
          </card>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[4rem]">
        <table className="bg-red-400 w-[57.5rem] rounded-lg ml-[17rem]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 tracking-wide text-left">Nip</th>
              <th className="p-3 tracking-wide text-left">Nama</th>
              <th className="p-3 tracking-wide text-left">Tempat & Tanggal Lahir</th>
              <th className="p-3 tracking-wide text-left">Jenis Kelamin</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">10</td>
              <td className="p-3 text-sm text-gray-700">Aqua</td>
              <td className="p-3 text-sm text-gray-700">Jateng / 19-9-2022</td>
              <td className="p-3 text-sm text-gray-700">Laki - laki</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="p-3 text-sm text-gray-700">10</td>
              <td className="p-3 text-sm text-gray-700">Aqua</td>
              <td className="p-3 text-sm text-gray-700">Jateng / 19-9-2022</td>
              <td className="p-3 text-sm text-gray-700">Laki - laki</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">10</td>
              <td className="p-3 text-sm text-gray-700">Aqua</td>
              <td className="p-3 text-sm text-gray-700">Jateng / 19-9-2022</td>
              <td className="p-3 text-sm text-gray-700">Laki - laki</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><br />
    </>
  );
};

export default DataKaryawan;

