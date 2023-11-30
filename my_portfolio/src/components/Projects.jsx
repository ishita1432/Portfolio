import React from 'react'



const Projects = () => {
  const projects = [
    {
      img: "data.png",
      title: "Data Science Salary Trend",
      desc: " A Tableau dashboard illustrating data science salary trends, highlighting factors such as experience, location, and industry variations for comprehensive insights. ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: "couture.png",
      title: "Couture",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/ishita1432/Couture",
    },
    {
      img: "image_captioning.png",
      title: "Image captioning",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    
  ]; 

  return (
    <section className=" text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl text-teal-400 font-bold mb-5  pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className='w-full h-full' />
              <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto border-2 px-3 bg-black border-teal-400  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <h4 className=' font-bold text-lg px-2 text-teal-400'>{project.title}</h4>
                <p className="py-3 px-2 mb-2 text-white text-sm">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-3 py-1 md:py-2 bg-teal-400 text-black mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-3 py-1 md:py-2 bg-teal-400  text-black mr-5 font-bold">
                  
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
