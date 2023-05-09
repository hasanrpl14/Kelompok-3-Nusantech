import React from "react";
import "../../index.css";
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
              id="usernamesignin"
              placeholder="username"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              id="passwordsignin"
              placeholder="password"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <div className="bg-sky-700 flex justify-center items-center p-3 w-28 rounded-md mb-5">
            <button onClick={() => navigate("/")} className="text-white">
              submit
            </button>
          </div>

          <div className="text-white">
            <span>
              create new account,{" "}
              <button
                className="text-sky-400 hover:text-sky-300"
                onClick={() => navigate("/")}
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
