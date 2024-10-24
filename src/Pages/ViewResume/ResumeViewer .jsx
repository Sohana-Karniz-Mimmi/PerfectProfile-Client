import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShareResumeNavbar from "./ShareResumeNavbar";
import useAxiosPublic from "../../Hook/useAxiosPublic";

/******** Templates **********/
import Template1 from "../../Components/AllTemplates/Template1";
import Template2 from "../../Components/AllTemplates/Template2";
import Template3 from "../../Components/AllTemplates/Template3";
import Template4 from "../../Components/AllTemplates/Template4";
import Template5 from "../../Components/AllTemplates/Template5";
import Template6 from "../../Components/AllTemplates/Template6";
import { Helmet } from "react-helmet-async";
// import Template2, {ImageContext,} from "../../Components/AllTemplates/Template2";

const ResumeViewer = () => {
  const { link } = useParams();
  const [resumeData, setResumeData] = useState(null);
  const axiosPublic = useAxiosPublic()

  // useEffect(() => {
  //   const fetchResumeData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:5000/resume/${link}`);
  //       if (!response.ok) {
  //         throw new Error("Resume not found");
  //       }
  //       const data = await response.json();
  //       setResumeData(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  //   fetchResumeData();
  // }, [link]);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await axiosPublic.get(`/resume/${link}`);
        setResumeData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchResumeData();
  }, [link]);

  const templateID = resumeData?.templateItem;
  const showResume = resumeData;

  // console.log(showResume);
  // console.log(resumeData?.resumeLink);

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
    <>

      {resumeData && (
        <Helmet>
          <title>{`${resumeData?.name} - PerfectProfile`}</title>
        </Helmet>
      )}

      <div>
        <ShareResumeNavbar shareLink={resumeData?.resumeLink} />
        {/* <div className="my-12 mx-auto w-fit border border-secondary">{renderTemplate(templateID)}</div> */}

        <div>
          <div className="my-12 mx-auto w-fit border border-secondary hidden lg:block">
            {renderTemplate(templateID)}
          </div>

          <div className="my-12 mx-auto w-[500px] border border-secondary hidden md:block lg:hidden overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                transform: "scale(0.63)",
                transformOrigin: "top left",
                height: "560px",
              }}
            >
              {renderTemplate(templateID)}
            </div>
          </div>

          <div className="my-6 mx-auto w-[303px] overflow-hidden border border-secondary block md:hidden">
            <div
              className="w-full h-full"
              style={{
                transform: "scale(0.38)",
                transformOrigin: "top left",
                height: "380px",
              }}
            >
              {renderTemplate(templateID)}
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default ResumeViewer;
