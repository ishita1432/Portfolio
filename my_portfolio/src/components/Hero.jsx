import React from "react";
import {Link} from "react-scroll";
const Hero = () => {
  return (
    <section id="hero" className="bg-black text-white py-10 lg:py-20   lg:px-20">
      <div className="container flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col lg:text-left text-center leading-relaxed">
          <h1 className="text-4xl md:text-5xl md:text-white  lg:mb-4 font-bold leading-tight">
            Hi <span class="wave">👋</span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">I'm{" "}
            <span className="text-teal-400">I</span>shita Sharma
            <br /></h1>
          <p className=" text-md lg:text-lg mb-6 leading-relaxed p-2 lg:p-0">
            Passionate about building websites and exploring AI. Let's create a tech-driven future together.
          </p>
          <div className="flex flex-row md:flex-row mx-auto lg:mx-0 gap-6 lg:gap-4    items-center">
            <Link
              to="contact" smooth={true} duration={800}
              className="btn bg-black border-teal-400 text-teal-400 border-2 py-2   md:mb-0 md:mr-2 hover:bg-teal-400 hover:text-black hover:border-teal-400 rounded text-md"
            >
              Work With Me
            </Link>
            <Link
              to="projects" smooth={true} duration={800}
              className="btn bg-black text-teal-400 border-teal-400 border-2  py-2 hover:bg-teal-400 hover:text-black hover:border-teal-400 rounded text-md"
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded-md shadow-md"
            alt="hero"
            src="hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;