import React from "react";
import jana from "../../assets/jana.jpg";
import QR from "../../assets/QR.png";
import "./Profile.css";
import { Link } from "react-router-dom";

export const ProfilePart = () => {
  return (
    <div>
      <div className="text-center text-lg text-slate-400 pt-5">
        <div>
          {" "}
          <Link className="hover:text-slate-200 " to="/">
            {" "}
            Home
          </Link>{" "}
          <span>&#47;</span>
          <Link className="hover:text-slate-200 " to="/profile">
            {" "}
            Profile
          </Link>
        </div>
      </div>
      <div className="text-center text-2xl pt-4 text-[#b100e7]">
        <p>Profile</p>
      </div>
      <div className="w-full max-w-screen-xl my-14  mx-auto p-4 md:py-8">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-around">
          <div className="flex flex-wrap justify-center">
            <img class="w-52 h-64 rounded-xl" src={jana} alt="description" />
            <div className="flex flex-col ml-52  text-center">
              <div className="mt-3 text-3xl  md:text-5xl  text-[#276bd9]">
                Janapriya Sp
              </div>
              <div className=" text-sm text-[#fee33c]">Gamer</div>
              <div className="mt-9 text-lg text-gray-300 font-bold">
                {" "}
                E-League ID :
                <span className="text-white font-extralight mx-4 ">
                  ELP2023001
                </span>{" "}
              </div>
              <div className="mt-3 text-lg text-gray-300 font-bold">
                {" "}
                Mail ID :
                <span className="text-white font-extralight mx-4 ">
                  janapriya1121@gmail.com
                </span>{" "}
              </div>
              <div className="mt-3 text-lg text-gray-300 font-bold">
                {" "}
                Phone No :
                <span className="text-white font-extralight mx-4 ">
                  7299417451
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img class="w-60 h-64" src={QR} alt="description" />
            <button className="Btn mt-3"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
