import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import ResumeTemplate from "./ResumeTemplate";
import { useNavigate } from "react-router-dom";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import Template4 from "./Template4";
// import Template5 from "./Template5";
// import Template6 from "./Template6";

const ResumeTemplates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./templateData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
 

  return (
    <Container>
      <div>
        <h1 className="font-bold text-5xl mt-10 text-center mb-10">
          Predefined Templates
        </h1>
      </div>
      <div className="grid grid-cols-1  p-20 lg:grid-cols-2 gap-11 justify-around">
        {
            data.length > 0 && (
                <>
                <Template1 data = {data[0]} />
                <Template2 data = {data[1]} />
                <Template3 data = {data[2]} />
                <Template4 data = {data[3]} />
                {/* <Template5 data = {data[4]} /> */}
                {/* <Template6 data = {data[5]} /> */}
                </>
            )
        }
    
      </div>
    </Container>
  );
};

export default ResumeTemplates;
