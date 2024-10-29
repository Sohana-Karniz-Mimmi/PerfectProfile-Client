import React from "react";
import "./Feature.css";
import Container from "../../Shared/Container";
import Heading from "../../Shared/Heading";

const Feature = () => {
  const data = [
    {
      feature: "Live Preview System",
      // image_url: "https://i.ibb.co.com/25xrSth/file.png",
      // image_url: "https://i.ibb.co.com/F0RZ6Rb/Customization-2.png",
      image_url: "https://i.ibb.co.com/yf0wz3B/11.png",
      description: (
        <>
          Instant feedback allows you to see real-time updates as you edit,
          making it easy to tailor your resume with various templates and
          styles.
        </>
      ),
    },
    {
      feature: "Template Customization",
      // image_url: "https://i.ibb.co.com/7pg0PbD/Customization-2.png",
      image_url: "https://i.ibb.co.com/mBrsbXQ/Customization.png",
      // image_url: "https://i.ibb.co.com/7pg0PbD/Customization-2.png",
      // image_url: "https://i.ibb.co.com/ZK5gG5x/Version.png",
      // image_url: "https://i.ibb.co.com/6Zpw8Cy/curriculum.png",
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
      // image_url: "https://i.ibb.co.com/30ZNZzq/operator.png",
      image_url: "https://i.ibb.co.com/Kzqk9nm/Guidance-3.png",
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
      image_url: "https://i.ibb.co.com/Pj90SYM/Version-2.png",
      // image_url: "https://i.ibb.co.com/8KTpzw4/integration.png",
      description: (
        <>
          Our version control feature allows you to easily revert to previous
          drafts, making resume updates and revisions efficient and hassle-free.
        </>
      ),
    },
    {
      feature: "Multiple Export Options",
      // image_url: 'https://i.ibb.co.com/QFMD4n3/1.png',
      image_url: "https://i.ibb.co.com/1MrynwS/13.png",
      description: (
        <>
          Our multiple export options ensure your resume is compatible with any
          platform, making sharing and submitting easy.
        </>
      ),
    },
  ];

  return (
    <Container>
      <div id="feature" className="programs-container ">
        {/* <h2 className="title font-bold">Our Features</h2> */}

        {/* Top Text Section */}
        <div className="mb-15">
          <Heading
            title={"Our Main Features"}
            subtitle={
              "Create standout resumes effortlessly with real-time previews, customizable templates, personalized guidance, version control, and multiple export options."
            }
            className={"max-w-3xl mx-auto mb-12 md:w-[600px]"}
          />
        </div>

        <ul className="cards">
          {data.map((item, index) => (
            <li key={index} className="card " style={{ "--index": index + 1 }}>
              <div className="card__content  xl:w-[1000px] lg:w-[780px] md:w-[500px] w-[280px] mx-auto">
                <div className="bg-white border-t-4 border-b-0 md:h-40 h-28 rounded-t-2xl border-primary">
                  <h1 className="text-primary p-0 card-title md:text-3xl text-lg lg:text-4xl font-bold mt-2 md:pt-14 pt-10 md:pl-5 pl-2 font-lora">
                    {item?.feature}
                  </h1>
                </div>
                <div className="flex justify-between lg:pb-0 pb-7 lg:space-y-0 lg:space-x-5 lg:h-52">
                  <div className="text-left max-w-xs lg:max-w-none">
                    <p className="card-description md:text-base break-words mt-2 pt-5 md:pl-5 pl-2 text-sm text-gray-800 font-montserrat lg:w-5/6">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-5 lg:mt-0">
                    {" "}
                    {/* Add mt-5 for spacing on smaller screens */}
                    <img
                      className=" md:w-[21rem] w-[32rem] md:px-6 px-0 md:h-36 lg:h-40 text-white lg:-mt-52 -mt-36"
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
  );
};

export default Feature;
