import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
// import { BsBook, BsGamepad, BsMusicNote, BsLeaf } from "react-icons/bs"; 
import { IoMail } from "react-icons/io5";

const NewTemplate = () => {
  return (
    <div className="w-[790px] flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg flex">
        
        <div className="w-1/3 bg-blue-600 p-6 text-white">
          <div className="text-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-32 h-32 mx-auto"
            />
            <h1 className="text-xl font-bold mt-4">Stephen Colbert</h1>
            <p className="text-sm text-gray-200">Front-end Developer</p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-bold">Contact</h2>
            <p className="mt-2">21 Street, Texas USA</p>
            <p className="mt-2">+324 4445678</p>
            <p className="mt-2">info@yourdomain.com</p>
            <p className="mt-2">www.yourdomain.com</p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-bold">Skill's</h2>
            <SkillBar skill="HTML" percentage={80} />
            <SkillBar skill="CSS" percentage={70} />
            <SkillBar skill="SASS" percentage={90} />
            <SkillBar skill="JS" percentage={60} />
            <SkillBar skill="JQUERY" percentage={88} />
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-bold">Social</h2>
            <div className="flex flex-col space-y-2 mt-2">
              <SocialLink platform="Facebook" icon={<FaFacebookF />} />
              <SocialLink platform="Twitter" icon={<FaTwitter />} />
              <SocialLink platform="Youtube" icon={<FaYoutube />} />
              <SocialLink platform="LinkedIn" icon={<FaLinkedinIn />} />
            </div>
          </div>
        </div>

       
        <div className="w-2/3 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600">About Us</h2>
            <p className="text-sm mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis illo fugit officiis distinctio culpa officia totam
              atque exercitationem inventore repudiandae?
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600">Work Experience</h2>
            <Experience
              yearRange="2019 - 2020"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatibus!"
            />
            <Experience
              yearRange="2020 - 2021"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatibus!"
            />
            <Experience
              yearRange="2021 - Present"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatibus!"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600">Education</h2>
            <Experience
              yearRange="2010 - 2021"
              description="Web Designing (Texas University). Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatibus!"
            />
            <Experience
              yearRange="2000 - 2010"
              description="Texas International School. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptatibus!"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600">Hobby</h2>
            <div className="flex space-x-4 mt-4">
              <Hobby icon={<IoMail />} />
              <Hobby icon={<IoMail />} />
              <Hobby icon={<IoMail />} />
              <Hobby icon={<IoMail />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage }) => (
  <div className="mt-2">
    <p className="text-sm">{skill}</p>
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-white h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const SocialLink = ({ platform, icon }) => (
  <p className="flex items-center space-x-2">
    {icon}
    <span>{platform}</span>
  </p>
);

const Experience = ({ yearRange, description }) => (
  <div className="mt-4">
    <p className="text-sm font-bold">{yearRange}</p>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

const Hobby = ({ icon }) => (
  <div className="flex justify-center items-center w-12 h-12 bg-blue-100 rounded-full">
    {icon}
  </div>
);

export default NewTemplate;
