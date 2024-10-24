import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import Container from "../../Shared/Container";
import img from "../../assets/feature/favorite (2).png";
import img2 from "../../assets/feature/review.png";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { axiosPublic } from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Favorite = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [favorites, setFavorites] = useState([]);

  const { data: templates = [], refetch } = useQuery({
    queryKey: ["templates"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-favorites/${user.email}`);
      console.log(res.data);

      return res.data;
    },
  });

  console.log(templates);

  const handleDelete = (template) => {
    // Optimistic UI update (remove the template from the favorites list)
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav._id !== template._id)
    );

    // Send the delete request
    axiosPublic
      .delete(`/my-favorites/${template._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Removed From Favorite");
        }
      })
      .catch((error) => {
        // If there's an error, re-add the item back to the state or handle the error
        console.error("Error removing favorite:", error);
        toast.error("Failed to remove from favorites.");
      })
      .finally(() => {
        // Always refetch to ensure data sync
        refetch();
      });
  };

  return (
    <Container>
      <Helmet>
        <title>Favorite - PerfectProfile</title>
      </Helmet>
      {/* banner */}
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-9 py-8 mb-9 lg:mb-7 mt-6 rounded-lg bg-cyan-50 gap-5"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
      >
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Favorite Resume Templates</h1>
          <p className="text-gray-500 text-sm md:text-[15px] lg:text-base lg:w-[43rem] mt-3">
            Curate your perfect collection of resume templates with ease. Here,
            you can find all your favorite designs saved in one place.
          </p>
          <p className="text-gray-500 text-sm md:text-[15px] lg:text-base lg:w-[43rem] mt-2">
            Find the perfect template that resonates with your personality, and
            start building your dream resume today!
          </p>

          <div className="flex flex-col md:items-start items-center text-base  font-bold lg:font-semibold">
            <Link to={`/pricing`} className="mt-5 ">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="flex item-center justify-center">
          <img
            className="xl:h-52 h-44 w-44 lg:w-64 rounded-lg"
            src={img2}
            alt=""
          />
          {/* <img className="h-full w-full rounded-lg" src={img2} alt="" /> */}
        </div>
      </div>
      {templates.length === 0 && (
        <>
          <p className="lg:mt-20 text-center font-bold lg:text-4xl md:text-3xl text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            No Favorite Resume Template
          </p>
          <div className="  text-center mt-5 ">
            <Link
              to={`/predefined-templates`}
              class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span class="w-full h-full bg-gradient-to-br from-primary  to-secondary group-hover:from-secondary   group-hover:to-primary absolute"></span>
              <span class="relative px-5 py-2 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-black uppercase group-hover:text-white">
                  Browse templates
                </span>
              </span>
            </Link>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 gap-9 mb-9 lg:grid-cols-3 md:grid-cols-2 p-2 xl:p-20 pl-0 xl:pl-36">
        {templates.map((template) => (
          <div key={template._id}>
            <div className="relative group h-[450px] border-secondary border">
              <button
                onClick={() => handleDelete(template)} // Pass the whole template object
                className="absolute text-3xl top-[6px] right-2 p-1 bg-white rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip-favorite"
              >
                {favorites[template._id] ? (
                  <FaRegStar className="text-cyan-400" />
                ) : (
                  <FaStar className="text-cyan-400" />
                )}
              </button>

              {/* Tooltip for Favorite Button */}
              <span className="tooltip-text-favorite hidden absolute -top-7 right-0 bg-primary text-white text-xs rounded py-1 px-2">
                Remove From Favorite
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
              {template.package === "premium" && (
                <>
                  <FaCrown className="absolute bottom-4 right-4 text-yellow-400 text-2xl bg-yellow-100 p-1 rounded-full tooltip-crown" />

                  <span className="tooltip-text-crown hidden absolute bottom-12 right-4 bg-gray-700 text-white text-xs rounded py-1 px-2">
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
    </Container>
  );
};

export default Favorite;
