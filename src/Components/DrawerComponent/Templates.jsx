import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../Hook/useAxiosPublic";
import Container from "../../Shared/Container";
import { FaCrown, FaRegStar, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const {user} = useAuth();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic(`/predefined-templates`);
      setTemplates(data);
    };
    getData();
  }, []);
  console.log(templates);

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
          // axiosPublic.patch(`/templates/${user.email}/${template._id}`, {
          //   isFavorite : true
          // })

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
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-2 gap-3 mb-6 p-1 ">
          {templates?.map((template) => (
            <div key={template._id}>
              <div className="relative group 2xl:h-[185px] xl:h-[200px] lg:h-[165px] border-secondary border">
                <button
                  onClick={() => handleFavorite(template)} // Pass the whole template object
                  className="absolute bg-black/90 top-[6px] right-2 rounded-full p-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip-favorite"
                >
                  {favorites[template._id] ? (
                    <FaStar className="text-secondary font-bold" />
                  ) : (
                    <FaRegStar className="text-secondary font-bold" />
                  )}
                </button>

                {/* Tooltip for Favorite Button */}
                <span className="tooltip-text-favorite hidden absolute -top-7 right-0 bg-primary text-white text-xs rounded py-1 px-2">
                  Add to Favorite
                </span>

                {/* Hover Effect with "Use Template" Button */}
                <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                  {/* <Link to={`/resume/edit/${template.templateItem}`}> */}
                  {/* <button
                    onClick={() => handleTemplateClick(template)}
                    className="bg-primary text-white font-montserrat font-bold rounded py-2 px-3 text-[14px]  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Use Template
                  </button> */}
                  {/* </Link> */}
                </div>

                {/* Crown Icon for Premium Templates with Tooltip */}
                {template.package === "premium" && (
                  <>
                    <FaCrown className="absolute bottom-2 right-2 text-yellow-400 text-2xl bg-black/80 p-1 rounded-full tooltip-crown" />

                    <span className="tooltip-text-crown hidden absolute bottom-12 right-4 bg-primary text-white text-xs rounded py-1 px-2">
                      Premium
                    </span>
                  </>
                )}

                {/* Template Image */}
                <img
                  className="w-full h-full group-hover:bg-opacity-45"
                  src={template.image}
                  alt="template"
                />
              </div>
            </div>
          ))}
        </div>
        

        {/* pagination */}
        <div className="flex justify-center mt-16 lg:mt-24 mb-12 lg:mb-20">
          {/* prev button */}
          {/* <button
              disabled={currentPage === 1}
              onClick={() => handlePagination(currentPage - 1)}
              className="px-4 mx-1 text-white disabled:text-white capitalize bg-primary rounded-md disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white hover:bg-secondary  hover:text-white"
            >
              <div className="flex items-center -mx-1">
                <span className="mx-1">
                  <FaArrowLeft />
                </span>
              </div>
            </button> */}
          {/* numbers */}
          {/* {pages.map((btnNum) => (
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
            ))} */}
          {/* next button */}
          {/* <button
              disabled={currentPage === numofPage}
              onClick={() => handlePagination(currentPage + 1)}
              className="px-4 mx-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary disabled:hover:bg-primary disabled:hover:text-white hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:bg-primary"
            >
              <div className="flex items-center -mx-1">
                <span className="mx-1">
                  <FaArrowRight />
                </span>
              </div>
            </button> */}
        </div>
      </Container>
    </div>
  );
};

export default Templates;
