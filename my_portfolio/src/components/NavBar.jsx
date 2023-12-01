import React from "react";
import "../index.css";
import {Link} from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 z-10 navbar bg-black shadow-lg ">
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
              <li className="rounded-full text-teal-500 hover:bg-teal-500 hover:text-black">
                <a href="#hero">Home</a>
              </li>
              <li className="rounded-full text-teal-500 hover:bg-teal-500 hover:text-black">
                <a href="#about">About</a>
              </li>
              <li className="rounded-full text-teal-500 hover:bg-teal-500 hover:text-black">
                <a href="#skills">Skills</a>
              </li>
              <li className="rounded-full text-teal-500 hover:bg-teal-500 hover:text-black">
                <a href="#projects">Projects</a>
              </li>
              <li className="rounded-full text-teal-500 hover:bg-teal-500 hover:text-black">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <h1 className="text-white text-4xl font-bold">ishita<span className="text-accent">.</span></h1>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal font-extrabold text-md">
          <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
              
            <li className="rounded-lg text-teal-500 hover:bg-teal-500 hover:text-black">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="Ishita-Sharma-FlowCV-Resume.pdf" target="_blank" className="btn border-2 border-teal-400 bg-black text-teal-400 hover:bg-teal-400 hover:text-black hover:border-teal-400">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
