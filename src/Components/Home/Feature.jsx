import React from "react";
import "./Feature.css";
import Container from "../../Shared/Container";
import pdf from "../../assets/MainFeature Icon/icons8-pdf-100.png";

const Feature = () => {
  const data = [
    {
      feature: "Template Customization",
      // image_url:
      //   "https://i.ibb.co.com/Fbt4X6Z/template-vs-custom-site-graphic-01.png",
      image_url: "https://i.ibb.co.com/6Zpw8Cy/curriculum.png",
      description: (
        <>
          Choose from a variety of templates to suit your personal style and
          career goals, making it easy to tailor your resume with various
          templates and styles.
        </>
      ),
    },
    {
      feature: "One to One Guidance",
      image_url: "https://i.ibb.co.com/30ZNZzq/operator.png",
      description: (
        <>
          Our consultancy service offers personalized advice to help you
          showcase your strengths effectively, making your resume more
          attractive to employers.
        </>
      ),
    },
    {
      feature: "Version Control",
      image_url: "https://i.ibb.co.com/8KTpzw4/integration.png",
      description: (
        <>
          Our version control feature allows you to easily revert to previous
          drafts, making resume updates and revisions efficient and hassle-free.
        </>
      ),
    },
  ];

  return (
    <div className="programs-container ">
      <h2 className="title font-bold">Our Features</h2>
      <p className="text-gray-800 text-[15px] font-montserrat text-center mb-12">
        Our features are designed to make resume building effortless and
        impactful. From customizable templates to one-on-one guidance, and
        seamless version control.
      </p>
      <ul className="cards">
        {data.map((item, index) => (
          <li key={index} className="card" style={{ "--index": index + 1 }}>
            <div className="card__content   xl:w-[980px] mx-auto">
              <div className="bg-white border-t-4 border-b-0 h-40 rounded-t-2xl border-primary">
                <h1 className="text-primary card-title text-2xl md:text-3xl lg:text-4xl font-bold mt-2 pt-14 pl-5 font-lora">
                  {item?.feature}
                </h1>
              </div>
              <div className="flex flex-col lg:flex-row items-center md:px-5 space-y-5 lg:space-y-0 lg:space-x-5 h-auto lg:h-52">
                <div className="text-center lg:text-left max-w-xs lg:max-w-none">
                  <p className="card-description text-base md:text-lg break-words mt-2 pt-5 font-montserrat lg:w-5/6">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-5 lg:mt-0">
                  <img
                    className="w-40 h-40 md:w-56 md:h-56 lg:w-[22rem] lg:h-44 -mt-0 lg:-mt-52"
                    src={item.image_url}
                    alt={item.feature}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature;
