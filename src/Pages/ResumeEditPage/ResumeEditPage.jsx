import { useEffect, useState } from "react";
import Template from "../../Components/TemplateEdit/Template/Template";
import ContentForm from "../../Components/TemplateEdit/ContentForm/ContentForm";
import Heading from "../../Components/TemplateEdit/Steps/Heading";
import Skill from "../../Components/TemplateEdit/Steps/Skill";
import Summery from "../../Components/TemplateEdit/Steps/Summery";
import Language from "../../Components/TemplateEdit/Steps/Language";
import Experience from "../../Components/TemplateEdit/Steps/Experience";
import Education from "../../Components/TemplateEdit/Steps/Education";
import CheckoutStepper from "../../Components/TemplateEdit/CheckoutStepper";
import Container from "../../Shared/Container";

const ResumeEditPage = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("/templateData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const checkout_step = [
    {
      name: "Heading",
      Component: () => <Heading></Heading>,
    },
    {
      name: "Experience",
      Component: () => <Experience></Experience>,
    },
    {
      name: "Education",
      Component: () => <Education></Education>,
    },
    {
      name: "Skills",
      Component: () => <Skill></Skill>,
    },
    {
      name: "Summary",
      Component: () => <Summery></Summery>,
    },
  ];

  console.log(datas);
  return (
    <div className="lg:m-16">
      <Container className="">
        <CheckoutStepper stepConfig={checkout_step} />
      </Container>
    </div>
  );
};

export default ResumeEditPage;
