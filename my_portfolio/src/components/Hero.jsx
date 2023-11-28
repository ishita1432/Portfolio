import React from "react";

const Hero = () => {
  return (
    <>
    <section id="hero">
      <div className="container mx-auto flex px-10  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pb-5 ">
          <h1 className="sm:text-4xl text-3xl mb-4 text-white space-y-5">
            Hi, <span className="waving-hand"  aria-label="Waving Hand">
  
    </span> I'm <span className="text-teal-400">I</span>shita Sharma.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
          Passionate about building websites and exploring machine learning. Let's create a tech-driven future together
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex btn text-teal-500 bg-black border-teal-400 border-2 py-2 px-6  hover:bg-teal-400 hover:text-black hover:border-teal-400 rounded text-md">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex btn text-teal-500 bg-black border-teal-400 border-2 py-2 px-6  hover:bg-teal-400 hover:text-black hover:border-teal-400 rounded text-md">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="hero.png"
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default Hero