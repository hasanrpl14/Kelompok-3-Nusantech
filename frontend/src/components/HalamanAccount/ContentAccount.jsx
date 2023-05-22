import React from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  
  return (
    <div className="content">
      <div className="box bg-[#E8E8E8] w-11/12 pb-[3rem] px-5 py-5 ms-[3.5rem] absolute z-40 top-[4rem] rounded-[7px]">
       
        <div className="greating-tgl py-2 mb-4 flex justify-between items-center" style={{ borderBottom: "2px solid grey" }}>
          <span className="greating-name">
            <h3>Selamat Sore</h3>
          </span>
          <span>
            <p>13 Maret 2025</p>
          </span>  
        </div>
        
        <div className="flex overflow-y-hidden">
          <div className="shadow-lg rounded-lg p-4  items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="ml-10 mr-10 sm:w-1/2">
              <img
                className="h-96 w-96 sm:w-auto sm:h-auto rounded-full flex-shrink object-cover sm:min-w-min sm:min-h-min flex"
                src="https://i.pinimg.com/236x/5d/12/76/5d1276ca2f84bfe5b04803f640add5fe.jpg"
                alt="Avatar"
              />
            </div>

            <div className="sm:w-full">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">My Profile</h1>
              
              {/* Form input fields */}
              
              <div className="flex items-center justify-between">
                <p className="text-1xl font-bold text-gray-800 mr-4">Username:</p>
                <input
                  id=""
                  type="text"
                  placeholder="Username"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-1xl font-bold text-gray-800 mr-4">Email:</p>
                <input
                  id=""
                  type="text"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-1xl font-bold text-gray-800 mr-4">Phone Number:</p>
                <input
                  id=""
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-1xl font-bold text-gray-800 mr-4">Address:</p>
                <input
                  id=""
                  type="text"
                  placeholder="Address"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="flex justify-end mt-4">
                <button className="ml-10 w-40 h-10 text-white bg-blue-600 rounded-lg">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
