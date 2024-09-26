import Banner from "../../Components/Home/Banner";
import PremiumFeature from "../../Components/Home/PremiumFeature";
import Package from "../../Components/Package/Package";
import Testomonial from "../../Components/Testomonial/Testomonial";
// import ResumeTemplates from "../../Components/TemplateSection/ResumeTemplates";
// import CVResume from "../../Components/TemplateSection/CVResume";



const Home = () => {
  return (
    <div className=" py-4">
      <div className="bg-[#F9FAFF]">
        <Banner />
      </div>
      <div>
        <PremiumFeature />
      </div>
      <Package />
      <div>
        <Testomonial></Testomonial>
      </div>
      {/* <ResumeTemplates></ResumeTemplates> */}
      

    </div>
  );
};

export default Home;
