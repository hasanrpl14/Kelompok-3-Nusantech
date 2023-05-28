import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="hero h-screen w-full flex justify-center items-center">
      <div className="card-form w-[450px] h-auto">
        <form action="" className="p-10">
          <h1 className="font-semibold text-4xl flex justify-center mb-10 text-white">
            SignIn
          </h1>

          <div className="mb-5">
            <input
              type="text"
              id="email"
              required
              placeholder="Username"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              id="email"
              required
              placeholder="Password"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <button
            onClick={() => navigate("/homeUser")}
            className="text-white py-2.5 px-10 rounded-md bg-sky-700 hover:bg-sky-500 hover:ring-2 hover:ring-bg-sky-200 hover:text-slate-800 hover:font-bold"
          >
            submit
          </button>

          <div className="text-white">
            <span>
              create new account,{" "}
              <button
                type="submit"
                className="text-sky-400 hover:text-sky-300"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
