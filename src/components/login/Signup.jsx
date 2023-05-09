import React from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="hero h-screen w-full flex justify-center items-center">
      <div className="card-form w-[450px] h-auto">
        <form action="" className="p-10">
          <h1 className="font-semibold text-4xl flex justify-center mb-10 text-white">
            SignUp
          </h1>

          <div className="mb-5">
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <div className="mb-5">
            <input
              type="number"
              id="email"
              placeholder="Phone number"
              min={0}
              className="w-full p-2.5 rounded-md active:appearance-none"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              id="email"
              placeholder="Password"
              className="w-full p-2.5 rounded-md"
            />
          </div>

          <div className="mb-5">
            <textarea
              name="text"
              id="textarea"
              className="w-full h-20 resize-none p-2.5 rounded-md"
              cols="auto"
              placeholder="Address"
              rows="5"
            ></textarea>
          </div>

          <button
            onClick={() => navigate("/")}
            className="text-white bg-sky-700 flex justify-center items-center p-3 w-28 rounded-md mb-5"
          >
            submit
          </button>

          <div className="text-white">
            <span>
              already have account,{" "}
              <button
                className="text-sky-400 hover:text-sky-300"
                onClick={() => navigate("/")}
              >
                SignIn
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
