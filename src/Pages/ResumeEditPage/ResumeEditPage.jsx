import { useEffect, useState } from "react";
import Template from "../../Components/TemplateEdit/Template/Template";

const ResumeEditPage = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("/templateData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(datas);
  return (
    <main className="flex justify-between gap-10 ">
      {/* left side section  */}
      <section>
        <Template data={datas[0]} />
      </section>
      {/* right side section  */}
      <section className="flex-[4]"></section>
    </main>
  );
};

export default ResumeEditPage;
