// spell-checker: disable
import React from "react";
import "./Feature.css";
import Container from "../../Shared/Container";

const Feature = () => {
  const data = [
    {
      feature: "Live Preview System",
      image_url: "https://i.ibb.co.com/25xrSth/file.png",
    },
    {
      feature: "Template Customization",
      image_url: "https://i.ibb.co.com/6Zpw8Cy/curriculum.png",
    },
    {
      feature: "Consultancy for Resume Building Guidance",
      image_url: "https://i.ibb.co.com/30ZNZzq/operator.png",
    },
    {
      feature: "Version Control",
      image_url: "https://i.ibb.co.com/8KTpzw4/integration.png",
    },
    {
      feature: "Multiple Export Options",
      image_url: "https://i.ibb.co.com/gJWXG4Q/export.png",
    },
  ];

  return (
    <>
      <Container>
        <div className="programs-container">
          <h2 className="title  font-bold">Our Features</h2>
          <ul className="cards">
            {data.map((item, index) => (
              <li key={index} className="card" style={{ "--index": index + 1 }}>
                <div className="card__content border-2 ">
                  <div className="flex justify-between  items-center">
                    <div className="">
                      <span className="">{item?.feature}</span>
                      <h3 className="card-title text-xl md:text-3xl lg:text-5xl ">
                        {item.feature}
                      </h3>
                      {/* <p className="card-description">
                  {item.degree}
                  <br />
                  {item.session}
                  </p> */}
                    </div>
                    <div className="ml-12">
                      <img
                        className=" w-10 md:w-32 lg:w-60 text-white"
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
      </Container>
    </>
  );
};

export default Feature;
