import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/TemplateSection/Template2";
import Template3 from "../../Components/TemplateSection/Template3";
import { FaEnvelope } from "react-icons/fa";
import { FaFileExport, FaShare } from "react-icons/fa6";

const FinalResume = () => {
  const [datas, setDatas] = useState([]);
  // Find common objects with the same _id in both arrays
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(data);

  //   Real time data change for template start here
  useEffect(() => {
    fetch("https://perfect-profile-server.vercel.app/predefined-templates")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("https://perfect-profile-server.vercel.app/share-resume")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const userResumeData = datas.find(
    (item) => item?.userData?.templateItem === id
  );
  const template = data.find((item1) => item1.templateItem === id);
  console.log(template);
  console.log(datas);
  const userData = userResumeData?.userData?.userData;
  console.log(userData);

  const renderTemplate = (id) => {
    if (id === "template1") {
      return <Template1 data={template} userData={userData} />;
    }
    if (id === "template2") {
      return <Template2 data={template} userData={userData} />;
    }
  };
  return (
    <div className="h-screen">
      <div className="py-8 px-4 bg-[#00000f]">
        <Link to="/">
          <h1 className="text-white text-xl font-bold inline-block">
            Perfect Profile
          </h1>
        </Link>
      </div>
      <section className="flex justify-between pt-12 gap-8">
        <div className="w-3/12"></div>
        <div className="w-6/12">{renderTemplate(id)}</div>
        <div className="w-3/12 flex flex-col items-end px-8 gap-4">
          <button className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2">
            <FaFileExport className="text-secondary" /> Export
          </button>
          <button className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2">
            <FaShare className="text-secondary" /> Share
          </button>
          <button className="w-36 px-8 border font-montserrat rounded-full text-center border-secondary text-secondary flex items-center gap-2">
            <FaEnvelope className="text-secondary" /> Email
          </button>
          <button className="w-36 px-8 py-2  font-montserrat rounded-full text-center bg-primary font-bold text-black">
            Finish
          </button>
        </div>
      </section>
    </div>
  );
};

export default FinalResume;
