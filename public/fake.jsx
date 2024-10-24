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
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FiEdit } from "react-icons/fi";
import { LuShare } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import toast from "react-hot-toast";
import Banner2 from "./Banner2";
import CheckoutForm from "../../Components/Payment/CheckoutForm";
import useRole from "../../Hook/useRole";
const Template = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [role] = useRole();
  const { user } = useAuth();
  const [modalContent, setModalContent] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2nd, set2ndIsOpen] = useState(false);

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

  const handleTemplateClick = (template) => {
    if (!user) {
      toast.error("You have to login first");
      document.getElementById("my_modal_3").showModal();
      return;
    }
    if (template.package === "premium" && role.productName === "premium") {
      window.location.href = `/resume/edit/${template.templateItem}`;
      return;
    }
    if (template.package === "premium" && role.productName === "standard") {
      window.location.href = `/resume/edit/${template.templateItem}`;
      return;
    }

    if (template.package === "premium") {
      setModalContent(template?.image);
      set2ndIsOpen(true);
      return;
    }

    if (template.package === "free") {
      window.location.href = `/resume/edit/${template?.templateItem}`;
      return;
    }

    setModalContent("To use this template, please check your package.");
    set2ndIsOpen(true);
  };

  // paginatio
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
    <div>
      <Container>
        <TemplateBanner></TemplateBanner>

        {/* filter */}
        <div className="lg:w-[79rem] lg:mt-12 mt-20 justify-end flex item-end">
          <select
            onChange={e => {
              setFilter(e.target.value)
              setCurrentPage(1)
            }}
            name="package"
            id="package"
            value={filter}
            className="border border-primary px-4 py-2 rounded-lg "
          >
            {/* <option value=''>Filter By Category</option> */}
            <option value="">Free + Premium</option>
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 lg:px-32 gap-8">
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
                  {/* <Link to={`/resume/edit/${template.templateItem}`}> */}
                    <button
                     onClick={() => handleTemplateClick(template)}
                    className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Use Template
                    </button>
                  {/* </Link> */}
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
        <div className="flex justify-center mt-16 lg:mt-24 mb-12 lg:mb-20">
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
              className={`hidden ${currentPage === btnNum
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
      </Container>
      <Banner2></Banner2>

      <Dialog
        open={isOpen2nd}
        onClose={() => set2ndIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className=" space-y-4 border bg-white p-12">
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
              <div className="bg-white p-6 rounded-md flex md:flex-row flex-col items-center w-full lg:max-w-4xl mx-auto relative">
                {/* Close Icon */}
                <button
                  onClick={() => set2ndIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white hover:bg-black hover:bg-opacity-50 p-1 rounded-full transition duration-300 "
                >
                  <IoMdClose className="text-xl " />
                </button>

                {/* Image Section */}
                <div className="md:w-1/2 w-full p-4">
                  <img
                    src={modalContent}
                    alt="Premium Template"
                    className="w-[300px] h-[400px] rounded-md shadow-md"
                  />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 w-full p-4 space-y-4">
                  {/* Premium Icon and Heading */}
                  <div className="flex items-center gap-1 px-2 bg-black bg-opacity-60 rounded-full w-fit">
                    <FaCrown className="text-yellow-500 text-base" />
                    <span className="text-sm text-white">Pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-bold">
                      Professional Modern Resume
                    </h2>
                  </div>

                  {/* Description */}
                  <span className="block text-lg font-medium text-gray-600">
                    Premium templates designed to showcase your skills with a
                    modern and professional look.
                  </span>

                  {/* Use Template Button */}
                  <div className="md:flex-row flex flex-col items-center w-full gap-2">
                    <div className="card-actions justify-center ">
                      <button
                        onClick={() => (setIsOpen(true), set2ndIsOpen(false))}
                        className="bg-primary text-white py-2 px-4 rounded-lg md:w-[300px] font-semibold hover:bg-primary-dark transition flex justify-center items-center gap-2"
                      >
                        <FaCrown className="text-xl" />
                        Use This Template
                      </button>
                    </div>

                    <div className="flex gap-2 items-center">
                      <button
                        onClick={handleFavorite}
                        className=" hover:text-primary border bg-white p-2 rounded-xl"
                      >
                        <FaRegStar size={20} />
                      </button>

                      <button className=" hover:text-primary border bg-white p-2 rounded-xl">
                        <HiDotsHorizontal size={20} />
                      </button>
                    </div>
                    <div></div>
                  </div>

                  {/* Feature 1 */}
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MdOutlineColorLens className="text-xl text-black" />
                    <p>100% fully customizable</p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center space-x-2 text-gray-700">
                    <FiEdit className="text-xl text-black" />
                    <p>Edit and download on the go</p>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center space-x-2 text-gray-700">
                    <LuShare className="text-xl text-black" />
                    <p>Share and publish anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50 ">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <CheckoutForm></CheckoutForm>
          </DialogPanel>
        </div>
      </Dialog>


    </div>
  );
};

export default Template;
