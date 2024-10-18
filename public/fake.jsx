import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useRole from './../../Hook/useRole';
import useAuth from "../../Hook/useAuth";

// Custom navigation buttons
const CustomPrevButton = (props) => (

  <button
    className="prev absolute z-10 lg:left-24 left-4 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10094; */}
    <FaArrowLeft className="text-xl text-white"></FaArrowLeft>
  </button>
);

const CustomNextButton = (props) => (
  <button
    className="next absolute z-10 lg:right-24 right-4 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md"
    onClick={props.onClick}
  >
    {/* &#10095; */}
    <FaArrowRight className="text-xl text-white"></FaArrowRight>
  </button>
);

export default function App() {

  const [role] = useRole()
  const {user} = useAuth();

  const axiosPublic = useAxiosPublic();
  const [predefinedTemplate, setPredefinedTemplate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic(`/predefined-templates`);
      setPredefinedTemplate(data);
    }
    getData();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleLoginModal = () => {
    if (!user) {
      toast.error('You have to log in first')
      setTimeout(() => {
        document.getElementById("my_modal_3").showModal();
      }, 2000);
    } 
  };

  const handleTemplateClick = () => {
    if (!user) {
      setShowModal(true);
    } else if (template.package === 'premium' && (user.productName === 'standard' || user.productName === 'premium')) {
      window.location.href = `/resume/edit/${template.templateItem}`;
    } else if (template.package === 'premium') {
      setShowModal(true);
    } else {
      window.location.href = `/resume/edit/${template.templateItem}`;
    }
  };

  // console.log(predefinedTemplate);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1441: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {predefinedTemplate?.map((template) => (
          <SwiperSlide key={template._id}>
            <div className="relative group">
              <div className="absolute h-full w-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-opacity duration-300">
                {template.package === "premium" ? (
                  (role.productName === "standard" || role.productName === "premium") ? (
                    <Link to={`resume/edit/${template.templateItem}`}>
                      <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Use Template
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Use Template
                    </button>
                  )
                ) : (
                  <Link to={`resume/edit/${template.templateItem}`}>
                    <button className="bg-primary text-white font-montserrat md:font-bold font-semibold rounded py-2 px-3 md:py-3 md:px-6 text-[14px] md:text-base lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Use Template
                    </button>
                  </Link>
                )}
              </div>
              <img className="w-full size" src={template.image} alt={template.name} />
            </div>
          </SwiperSlide>
        ))}

        {/* Modal */}
        {showModal && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-lg font-bold">Premium Package Required</h2>
              <p className="mt-2">To use this template, you need to purchase the premium package.</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <Link to={'/pricing'}>
                  <button className="bg-primary text-white py-2 px-4 rounded">
                    Purchase Package
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}


        {/* Custom navigation buttons */}
        <CustomPrevButton />
        <CustomNextButton />
      </Swiper>
    </>
  );
}


const renderTemplate = (id, template, userData) => {
  switch (id) {
    case "template1":
      return <Template1 data={template} userData={userData} />;
    case "template2":
      return <MyTemplate data={template} userData={userData} />;
    case "template3":
      return <Template3 data={template} userData={userData} />;
    case "template4":
      return <Template4 data={template} userData={userData} />;
    case "template5":
      return <Template5 data={template} userData={userData} />;
    case "template6":
      return <Template6 data={template} userData={userData} />;
    default:
      return null; // যদি কোনও টেমপ্লেট না মিলে
  }
};

{myResumeTemplates?.map(template => (
  <div key={template._id} className={`relative bg-white rounded-lg p-4 flex flex-col items-center transition-transform transform overflow-hidden ${myResumeTemplate === template._id ? 'border-2 border-blue-500' : ''}`}
    style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
      
    <div className="w-[275px] h-[330px] overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          transform: 'scale(0.35)', 
          transformOrigin: 'top left',
          height: '400px',
        }}
      >
        {/* এখানে renderTemplate ফাংশন ব্যবহার করে সঠিক টেমপ্লেট রেন্ডার করা হবে */}
        {renderTemplate(template.templateItem, template, user)}
      </div>
    </div>

    <div className="absolute inset-0 flex justify-between items-start opacity-0 hover:opacity-100 transition-opacity p-5">
      <input
        type="checkbox"
        className="form-checkbox text-black bg-white border-gray-300 focus:ring-offset-2 w-6 h-6"
        onChange={(e) => handleCheckboxChange(e, template._id)}
        checked={myResumeTemplate === template._id}
      />
      <div className="flex space-x-2">
        <button className="text-black hover:text-yellow-500 bg-white p-2 rounded-xl">
          <FaStar size={20} />
        </button>
        <Link to={`/resume/edit/${template.templateItem}?resumeId=${template._id}`}>
          <button className="text-black hover:text-primary bg-white p-2 rounded-xl">
            <FiEdit size={20} />
          </button>
        </Link>
      </div>
    </div>
  </div>
))}



