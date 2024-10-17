import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import Container from "../../Shared/Container";
import img from '../../assets/feature/favorite.png'
import img2 from '../../assets/feature/favorite2.jpg'

const Favorite = () => {
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: templates = [], refetch } = useQuery({
    queryKey: ["templates"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-favorites/${user.email}`);
      console.log(res.data);

      return res.data;
    },
  });

  console.log(templates);
    return (
        <Container>

            {/* banner */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-9 py-4 mb-[21rem] lg:mb-1 h-[26rem] lg:h-[15rem] mt-6 rounded-lg bg-cyan-50">
        <div>
          <h1 className="font-bold text-4xl">
          Favorite Resume Templates
            
          </h1>
          <p className="text-gray-500 lg:w-[43rem] w-80 mt-3">
          Curate your perfect collection of resume templates with ease. Here, you can find all your favorite designs saved in one place. 
          </p>
          <p className="text-gray-500 lg:w-[43rem] w-80 mt-2">
          Find the perfect template that resonates with your personality, and start building your dream resume today!
          </p>
  
          <div className="flex flex-col  items-start  text-base  font-bold lg:font-semibold">
           
            <Link to={`/predefined-templates`} className="mt-5  mb-16 lg:mb-0">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                Browse Templates
              </button>
            </Link>
          </div>
        </div>
  
        <div className="flex item-center justify-center">
          <img className="h-full w-full rounded-lg" src={img} alt="" />
          <img className="h-full w-full rounded-lg" src={img2} alt="" />
        </div>
      </div>

            {
                templates.map(template=>(
                    <div key={template._id}>
                    <div className="relative group w-[350px] h-[450px]">
                    
                    {/* <button
          onClick={() => handleFavorite(template)} // Pass the whole template object
          className="absolute text-3xl top-[6px] right-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip-favorite"
        >
          {favorites[template._id] ? (
            <FaStar className="text-cyan-400" />
          ) : (
            <FaRegStar className="text-cyan-400" />
          )}
        </button> */}
        
        
                      {/* Tooltip for Favorite Button */}
                      {/* <span className="tooltip-text-favorite hidden absolute -top-7 right-0 bg-gray-700 text-white text-xs rounded py-1 px-2">
                        Add to Favorite
                      </span> */}
        
                      {/* Hover Effect with "Use Template" Button */}
                      <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                        <Link to={`resume/edit/${template.templateItem}`}>
                          <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Use Template
                          </button>
                        </Link>
                      </div>
        
                      {/* Crown Icon for Premium Templates with Tooltip */}
                      {
          template.package === "premium" && (
            <>
              <FaCrown className="absolute bottom-4 right-4 text-yellow-400 text-2xl bg-yellow-100 p-1 rounded-full tooltip-crown" />
        
              <span className="tooltip-text-crown hidden absolute bottom-12 right-4 bg-gray-700 text-white text-xs rounded py-1 px-2">
                Premium
              </span>
            </>
          )
        }
        
        
                      {/* Template Image */}
                      <img
                        className="w-full h-full group-hover:bg-opacity-45"
                        src={template.image}
                        alt=""
                      />
                    </div>
                  </div>
                ))
            }
            
        </Container>
    );
};

export default Favorite;