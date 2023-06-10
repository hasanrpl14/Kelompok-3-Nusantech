import React from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const logo = "../assets/admin.png";
  return (
    <div className="bg-slate-950 h-screen w-full flex justify-evenly     items-center">
      <div className="logo-admin">
        <img src={logo} className="w-96  " alt="" />
      </div>
      <div className="card-form w-[450px] h-auto">
        <form action="" className="p-10 bg-slate-400 rounded-lg">
          <h1 className="font-semibold text-4xl flex justify-center mb-10 text-black">
            SignIn
          </h1>

          <div className="mb-5 ">
            <input
              type="text"
              id="email"
              required
              placeholder="Username"
              className="w-full p-2.5 rounded-md bg-white"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              id="email"
              required
              placeholder="Password"
              className="w-full p-2.5 rounded-md bg-white"
            />
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="text-white py-2.5 px-10 rounded-md bg-sky-700 hover:bg-sky-500 hover:ring-2 hover:ring-bg-sky-200 hover:text-slate-800 hover:font-bold"
          >
            submit
          </button>

          <h3 className="text-center text-gray-600 mt-5">
            only admin to Join!
          </h3>
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;
