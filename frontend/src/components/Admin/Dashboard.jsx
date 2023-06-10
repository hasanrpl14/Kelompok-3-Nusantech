import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faGear, faUser, faLocationDot, } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney , faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const Dashboard = () => {
  return ( 
    <>
    <div className="flex h-screen">
    <div className=" h-screen w-1/5 bg-slate-200 fixed">
        <h1 className="pt-4 font-semibold uppercase flex justify-center  text-xl">Admin</h1><br />
    <div className="flex flex-col items-start pl-4">
        <div className="w-4/5 p-2 hover:bg-white  transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faHouseChimney} style={{color: "#000000",}} />
            <a href="#" className="font-bold text-base ml-2">Beranda</a>
        </div>
        <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faDatabase} style={{color: "#000000",}} />
            <a href="admindatakaryawan" className="font-bold text-base ml-2">Data Karyawan</a>
        </div>
        <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faCalendarDays} style={{color: "#000000",}}/>
            <a href="admindatauser" className="font-bold text-base ml-2">Data User</a>
        </div>
        <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faSquareCheck} style={{color: "#000000",}}/>
            <a href="admindatajabatan" className="font-bold text-base ml-2">Data Jabatan</a>
        </div>
        <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faCalendarDays} style={{color: "#000000",}}/>
            <a href="admindataabsen" className="font-bold text-base ml-2">Data Absen</a>
        </div>
         <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}}/>
            <a href="admindataketerangan" className="font-bold text-base ml-2">Data Keterangan</a>
        </div>
        <div className="pt-3 w-4/5 p-2 hover:bg-white transition duration-300 ease-in-out rounded-lg">
            <FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#000000",}}/>
            <a href="#" className="font-bold text-base ml-2">Keluar</a>
        </div>
        </div>
    </div>
    <div>
        
    </div>
<div className="w-4/5 fixed ml-[17rem]">
<div className="navbar bg-gradient-to-r from-cyan-400 to-blue-500 h-[4rem]"> 
  <div className="navbar-start">
    <h1 className="text-white text-xl font-semibold pl-5">Karyawan</h1>
   </div>
  
</div>
<div className="pl-4 pt-3 flex">
        <div className="bg-blue-500 w-[16rem] h-[8rem] flex  items-center justify-center">
          {/* <div className="flex"> */}
            {/* <h1 className="font-bold text-2xl text-white pr-40">4</h1> */}
          <img className="w-5/12" src="https://bprgita.co.id/wp-content/uploads/2020/01/57314-Converted-4-600x481.png" alt="" />
          {/* </div> */}
          </div>
    </div>
</div>
          
  
{/* 4 kotak */}
    
    </div> 
   

    
    </>
    
  )
}

export default Dashboard