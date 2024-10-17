import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Template1 from "../../Components/TemplateSection/Template1";
import Template2 from "../../Components/FinalPageTemplate/Template2";
import ShareResumeNavbar from "./ShareResumeNavbar";
import Template4 from "../../Components/TemplateSection/Template4";
import Template3 from "../../Components/TemplateSection/Template3";
import Template5 from './../../Components/TemplateSection/Template5';
import Template6 from "../../Components/TemplateSection/Template6";
import MyTemplate from "../../assets/MyTemplate";

const ResumeViewer = () => {
  const { link } = useParams();
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(`https://perfect-profile-server.vercel.app/resume/${link}`);
        if (!response.ok) {
          throw new Error("Resume not found");
        }
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchResumeData();
  }, [link]);

  const templateID = resumeData?.templateItem;
  const showResume = resumeData;

  // console.log(templateID);
  // console.log(showResume);
  console.log(resumeData?.resumeLink);

  const renderTemplate = (templateID) => {
    if (templateID === "template1") {
      return < Template1 userData={showResume} />;
    }
    if (templateID === "template2") {
      return <Template2 userData={showResume} />;
    }
    if (templateID === "template3") {
      return <Template3 userData={showResume} />;
    }
    if (templateID === "template4") {
      return <Template4 userData={showResume} />;
    }
    if (templateID === "template5") {
      return <Template5 userData={showResume} />;
    }
    if (templateID === "template6") {
      return <Template6 userData={showResume} />;
    }
  };

  return (
    <div>
      <ShareResumeNavbar shareLink={resumeData?.resumeLink} />
      <div className="py-12">{renderTemplate(templateID)}</div>
    </div>
  );
};

export default ResumeViewer;
