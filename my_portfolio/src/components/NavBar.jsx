import React from "react";
import "../index.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-black shadow-lg bg-fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-teal-500"
                fill="text-teal-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass font-bold  rounded-box w-52">
              <li className=" text-teal-500 hover:bg-teal-500 hover:text-black">
                <a>Home</a>
              </li>
              <li className="text-teal-500 hover:bg-teal-500 hover:text-black">
                <a>About</a>
              </li>
              <li className="text-teal-500 hover:bg-teal-500 hover:text-black">
                <a>Skills</a>
              </li>
              <li className="text-teal-500 hover:bg-teal-500 hover:text-black">
                <a>Projects</a>
              </li>
              <li className="text-teal-500 hover:bg-teal-500 hover:text-black">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <h1 className="text-white text-4xl font-bold">ishita<span className="text-accent">.</span></h1>
        </div>
        <div className="navbar-center lg:flex ">
          <ul className="menu menu-horizontal font-extrabold text-md">
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <a>Home</a>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <a>About</a>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <a>Skills</a>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <a>Projects</a>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-2 border-teal-400 bg-black text-teal-400 hover:bg-teal-400 hover:text-black hover:border-teal-400">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
