
import React from 'react';

const skills = [
  {
    name: 'C',
    logo: 'c-logo.png',
  },
  {
    name: 'Python',
    logo: 'python.png',
  },
  {
    name: 'Java',
    logo: 'java-logo.svg',
  },
  {
    name: 'HTML',
    logo: 'html5.png',
  },
  {
    name: 'CSS',
    logo: 'CSS3.png',
  },
  {
    name: 'JavaScript',
    logo: 'js-logo.png',
  },
  {
    name: 'MySql',
    logo: 'mysql.jpg',
  },
  {
    name: 'Bootstrap',
    logo: 'bootstrap_logo.png',
  },
  
  {
    name: 'Django',
    logo: 'Django.png',
  },
  {
    name: 'Tableau',
    logo: 'tableau.png',
  },
 
  {
    name: 'ReactJS',
    logo: 'reactjs.png',
  },
  {
    name: 'TailwindCSS',
    logo: 'tailwindcss.png',
  },
  
];

const SkillCard = ({ name, logo }) => (
  <div className="p-6 lg:p-10 lg:w-full h-50  ">
    <div className="bg-white/20 rounded-lg  shadow-lg lg:p-1 p-2  transition-transform transform hover:scale-110 h-full">
      <img src={logo} alt={name} className="w-12 h-10 mx-auto mb-2 mt-5 " />
      <h3 className="text-md font-semibold  text-white text-center">{name}</h3>
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className=" pt-40 md:py-30">
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold text-center text-accent mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} logo={skill.logo} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;