import { useEffect, useState } from "react";
import ResumeTemplates from "../../Components/TemplateSection/ResumeTemplates";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";
import Container from "../../Shared/Container";
import TemplateBanner from "./TemplateBanner";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import "./template.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import toast from "react-hot-toast";
const Template = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);

  const [predefinedTemplate, setPredefinedTemplate] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic(`/predefined-templates`);
      setPredefinedTemplate(data);
    };
    getData();
  }, []);

  //   add to favorite
  const handleFavorite = (_id) => {
    if (user) {
      setFavorites((prev) => {
        const isFavorite = !prev[_id];
        if (isFavorite) {
          toast.success("Added to the favorite");
        } else {
          toast.success("Removed from the favorite");
        }
        return {
          ...prev,
          [_id]: isFavorite, // Toggle favorite status for this template ID
        };
      });
    } else {
      toast.error("You have to login first");
      document.getElementById("my_modal_3").showModal();
    }

    console.log(_id);
  };

  // filter
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Free + Premium"); // Set default to "Free + Premium"

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle radio button selection and update the dropdown label
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setIsOpen(false); // Close the dropdown when an option is selected
  };

  // pagination
  const pages = [1, 2, 3, 4];

  return (
    <Container>
      <TemplateBanner></TemplateBanner>
      {/* <Template2></Template2> */}
      {/* <ResumeTemplates></ResumeTemplates> */}

      {/* filter */}

   

      <div className="w-[79rem] mt-12 justify-end flex item-end">
            <select
              name='category'
              id='category'
              className='border  px-4 py-2 rounded-lg '
            >
              {/* <option value=''>Filter By Category</option> */}
              <option value='Free + Premium'>Free + Premium</option>
              <option value='Free'>Free</option>
              <option value='Premium'>Premium</option>
            </select>
          </div>

          
      {/* <div className="w-[79rem] mt-12 justify-end flex item-end">
      <div className="relative">
      
        <button
          onClick={toggleDropdown}
          className="border px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-primary hover:text-white"
        >
          {selectedValue} 
        </button>

        {isOpen && (
          <ul className="absolute z-10 w-full mt-1 border rounded-lg bg-white">
            <li
              onClick={() => handleSelection('Free + Premium')}
              className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
            >
              Free + Premium
            </li>
            <li
              onClick={() => handleSelection('Free')}
              className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
            >
              Free
            </li>
            <li
              onClick={() => handleSelection('Premium')}
              className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
            >
              Premium
            </li>
          </ul>
        )}
      </div>
          </div> */}
          

      <div className="mt-12 grid grid-cols-3 px-32 gap-8">
        {predefinedTemplate?.map((template) => (
          <div key={template._id}>
            <div className="relative group w-[350px] h-[450px]">
              {/* Favorite Button with Tooltip */}
              {/* <button className="absolute text-3xl top-[6px] right-3 text-red-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip-favorite">
          <GrFavorite />
        </button> */}
              <button
                onClick={() => handleFavorite(template._id)}
                className="absolute text-3xl top-[6px] right-2 rounded-full   z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip-favorite"
              >
                {/* {
            isFavorite?   <FaRegStar className="text-primary"/> : <FaStar className="text-primary"/>
        } */}
                {favorites[template._id] ? (
                  <FaStar className="text-primary" />
                ) : (
                  <FaRegStar className="text-primary" />
                )}
                {/* <FaRegStar className="text-primary"/> */}
              </button>

              {/* Tooltip for Favorite Button */}
              <span className="tooltip-text-favorite hidden absolute -top-7 right-0 bg-gray-700 text-white text-xs rounded py-1 px-2">
                Add to Favorite
              </span>

              {/* Hover Effect with "Use Template" Button */}
              <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                <Link to={`resume/edit/${template.templateItem}`}>
                  <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Use Template
                  </button>
                </Link>
              </div>

              {/* Crown Icon for Premium Templates with Tooltip */}
              <FaCrown className="absolute bottom-4 right-4 text-yellow-400 text-2xl bg-yellow-100 p-1 rounded-full tooltip-crown" />

              {/* Tooltip for Crown Button */}
              <span className="tooltip-text-crown hidden absolute bottom-12 right-4 bg-gray-700 text-white text-xs rounded py-1 px-2">
                Premium
              </span>

              {/* Template Image */}
              <img
                className="w-full h-full group-hover:bg-opacity-45"
                src={template.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-24 mb-20">
        <button className="px-4 mx-1 text-white disabled:text-white capitalize bg-primary rounded-md disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white hover:bg-secondary  hover:text-white">
          <div className="flex items-center -mx-1">
            <span className="mx-1">
              <FaArrowLeft />
            </span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            key={btnNum}
            className={`hidden px-3 py-1 mx-1 border-2 rounded-full transition-colors duration-300 transform   sm:inline hover:bg-primary  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button className="px-4 mx-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary disabled:hover:bg-secondary disabled:hover:text-white hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:bg-primary">
          <div className="flex items-center -mx-1">
            <span className="mx-1">
              <FaArrowRight />
            </span>
          </div>
        </button>
      </div>
      {/* <div className="flex justify-center items-center mt-20 mb-16">
          <div className="flex gap-5">
            <button
              className="btn bg-primary text-white px-6 hover:bg-secondary"
            >
              <FaArrowLeft />
            </button>
            <p>
                1 0f 3
            </p>
            <button
              className="btn bg-primary text-white px-6 hover:bg-secondary"
            >
              <FaArrowRight />
            </button>
          </div>
        </div> */}
    </Container>
  );
};

export default Template;
