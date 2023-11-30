import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto lg:mx-40 pt-10 lg:pt-40 text-justify overflow-hidden">
      <div className="flex flex-col-reverse items-center  md:flex-row">
        <div className="md:w-5/6 md:pr-8 mx-auto md:mx-15 p-5">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-accent mb-5">About Me</h2>
          <p className="text-lg text-white ">
I'm Ishita Sharma – a tech enthusiast with a knack for making computers do cool stuff. I'm your go-to person for all things machine learning and web development. When I'm not training AI models, I'm busy building sleek websites with React.js and Tailwind CSS. 💻 I'm decent in data structures and algorithms, adding a touch of practicality to my coding adventures. 🚀</p>

<p className="text-lg text-white ">✨ Whether it's making machines smarter or building user-friendly websites, I bring a mix of creativity and practicality to the digital playground.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 mb-3 md:mb-0 md:mt-0 px-20 ">
          <div className="md:w-40 md:h-40 rounded-full bg-teal-500 overflow-hidden ">
            <img src="ishi_bitmoji.png" alt="My Image" className="object-cover w-33 h-33 lg:w-full lg:h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
