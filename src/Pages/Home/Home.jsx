import Package from "../../Components/Package/Package";
import Banner from "../../Components/Home/Banner";
import Templates from "../../Components/TemplateComponents/Templates";
import Testomonial from "../../Components/Testomonial/Testomonial.Jsx";



const Home = () => {
  return (
    <div className=" py-4">
      <div className="bg-[#F9FAFF]">
        <Banner/>
      </div>
      
      <Templates/>
      <Package></Package>

      <Testomonial/>
    </div>
  );
};

export default Home;
