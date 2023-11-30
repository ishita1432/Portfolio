import React from "react";
import {AiFillGithub, AiFillMail, AiFillLinkedin} from "react-icons/ai"
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS service and template IDs
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-teal-400 font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-teal-400 md:w-3/4 leading-[2]">
      Satisfied with me? Please contact me
      </p>
      {/* social icons */}
      <div className="flex text-teal-400 ">
        <a href="https://www.linkedin.com/in/joshua-harris-321a24190/" className="transition-transform transform hover:scale-110 " target="_blank" rel="noreferrer">
          <AiFillLinkedin size={40}/>
        </a>
        <a className="ml-4 transition-transform transform hover:scale-110 " href="https://github.com/ishita1432"  target="_blank" rel="noreferrer">
        <AiFillGithub size={40}/>
        </a>
        <a className="ml-4 transition-transform transform hover:scale-110 " href="mailto:ishita.sharma1432002@gmail.com" target="_blank" rel="noreferrer">
        <AiFillMail size={40}/>
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-teal-400 text-2xl mb-6">Contact me, let's make magic together</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name:" value={formData.name}
              onChange={handleChange} className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" value={formData.email}
              onChange={handleChange} className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" value={formData.message}
              onChange={handleChange} className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-black text-teal-400 border-2 border-teal-400 py-2 px-12 rounded  hover:bg-teal-400 hover:text-black hover:border-teal-400 block" >
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;