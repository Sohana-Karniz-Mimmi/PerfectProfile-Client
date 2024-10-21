import { useEffect, useState } from "react";
import ResumeTemplates from "../../Components/TemplateSection/ResumeTemplates";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2nd";
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
import Banner2 from "./Banner2";
const Template = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);

  const [predefinedTemplate, setPredefinedTemplate] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic(
        `/templates?page=${currentPage}&size=${itemPerPage}&filter=${filter}`
      );
      setPredefinedTemplate(data);
    };
    getData();
  }, [currentPage, itemPerPage, filter]);
console.log(predefinedTemplate)
console.log(filter)
  //   add to favorite
  const handleFavorite = (template) => {
    const { _id, image, package: templatePackage } = template;
    console.log(template);

    if (user) {
      setFavorites((prev) => {
        const isFavorite = !prev[_id];

        if (isFavorite) {
          // Send the template data to the backend
          axiosPublic.post("/my-favorites", {
            email: user.email,
            templateId: _id,
            image,
            templatePackage,
          });

          toast.success("Added to the favorite");
        } else {
          toast.success("Removed from the favorite");
        }

        return { ...prev, [_id]: isFavorite }; // Update favorite state
      });
    } else {
      toast.error("You have to login first");
      document.getElementById("my_modal_3").showModal();
    }
  };

  // pagination

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosPublic(`/templates-count?filter=${filter}`);
      setCount(data.count);
    };
    getCount();
  }, [filter]);

  const numofPage = Math.ceil(count / itemPerPage);
  const pages = [
    ...Array(numofPage)
      .keys()]
      .map((element) => element + 1)
  
  const handlePagination = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  // filter

  return (
    <Container>
      <TemplateBanner></TemplateBanner>

      {/* filter */}
      <div className="w-[79rem] mt-12 justify-end flex item-end">
        <select
           onChange={e => {
            setFilter(e.target.value)
            setCurrentPage(1)
          }}
          name="package"
          id="package"
          value={filter}
          className="border  px-4 py-2 rounded-lg "
        >
          {/* <option value=''>Filter By Category</option> */}
          <option value="">Free + Premium</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div className="mt-12 grid grid-cols-3 px-32 gap-8">
        {predefinedTemplate?.map((template) => (
          <div key={template._id}>
            <div className="relative group w-[350px] h-[450px]">
              <button
                onClick={() => handleFavorite(template)} // Pass the whole template object
                className="absolute text-3xl bg-white top-[6px] right-2 rounded-lg p-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip-favorite"
              >
                {favorites[template._id] ? (
                  <FaStar className="text-cyan-400" />
                ) : (
                  <FaRegStar className="text-cyan-400" />
                )}
            </button>

              {/* Tooltip for Favorite Button */}
              <span className="tooltip-text-favorite hidden absolute -top-7 right-0 bg-primary text-white text-xs rounded py-1 px-2">
                Add to Favorite
              </span>

              {/* Hover Effect with "Use Template" Button */}
              <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                <Link to={`/resume/edit/${template.templateItem}`}>
                  <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Use Template
                  </button>
                </Link>
              </div>

              {/* Crown Icon for Premium Templates with Tooltip */}
              {template.package === "premium" && (
                <>
                  <FaCrown className="absolute bottom-4 right-4 text-yellow-400 text-2xl bg-yellow-100 p-1 rounded-full tooltip-crown" />

                  <span className="tooltip-text-crown hidden absolute bottom-12 right-4 bg-primary text-white text-xs rounded py-1 px-2">
                    Premium
                  </span>
                </>
              )}

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
        {/* prev button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="px-4 mx-1 text-white disabled:text-white capitalize bg-primary rounded-md disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white hover:bg-secondary  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">
              <FaArrowLeft />
            </span>
          </div>
        </button>
        {/* numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePagination(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum
                ? "bg-primary text-white border-primary"
                : ""
            } px-3 py-1 mx-1 border-2 rounded-full transition-colors duration-300 transform   sm:inline hover:bg-primary  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* next button */}
        <button
          disabled={currentPage === numofPage}
          onClick={() => handlePagination(currentPage + 1)}
          className="px-4 mx-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary disabled:hover:bg-primary disabled:hover:text-white hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:bg-primary"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">
              <FaArrowRight />
            </span>
          </div>
        </button>
      </div>

      <Banner2></Banner2>
    </Container>
  );
};

export default Template;
