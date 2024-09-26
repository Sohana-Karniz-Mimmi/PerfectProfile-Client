import { useEffect, useState } from "react";
import Template from "../../Components/TemplateEdit/Template/Template";
import ContentForm from "../../Components/TemplateEdit/ContentForm/ContentForm";

const ResumeEditPage = () => {
  const [datas, setData] = useState([]);
  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    fetch("/templateData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(datas);
  return (
    <main className="flex justify-between items-center flex-col-reverse lg:flex-row gap-10 m-3 lg:m-16">
      {/* left side section  */}
      <section>
        <Template data={datas[0]} />
      </section>
      {/* right side section  */}
      <section className="flex-[4]">
        {/* Form Fields */}
        <ContentForm/>
      </section>
    </main>
  );
};

export default ResumeEditPage;
