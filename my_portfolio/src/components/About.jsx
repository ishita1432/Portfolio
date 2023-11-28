import React from "react";
// Replace with the actual path to your image

const About = () => {
  return (
    <section id="about" className=" lg:ml-50 container flex justify-center mx-auto px-10 py-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 text-center md:text-left">
          <h2 className="text-4xl font-bold text-center text-accent pb-5">About Me</h2>
          <p className="text-lg text-white">
            I am a web developer with a passion for building beautiful and functional websites and web applications. I have experience with a variety of technologies, including ReactJS, Tailwind CSS, and Node.js. I am also skilled in Git and GitHub. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt harum soluta reiciendis ea, dolores nam quibusdam, possimus, voluptatibus enim magnam iure. Maiores, sint nulla! Modi ratione molestiae unde corporis laudantium.
          </p>
        </div>
        <div className="md:w-1/2 md:ml-30 text-center">
          <div className="w-40 h-40 rounded-full bg-teal-500 overflow-hidden mx-auto md:mx-0">
            <img src="ishi_bitmoji.png" alt="My Image" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
