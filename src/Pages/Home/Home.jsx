import Package from "../../Components/Package/Package";
import Banner from "../../Components/Home/Banner";
import Templates from "../../Components/TemplateComponents/Templates";
import Testomonial from "../../Components/Testomonial/Testomonial.Jsx";



const Home = () => {
  return (
    <div className="bg-black text-white py-4">
      This Is Home page
  

      <div>
        <Banner/>
      </div>
      
      <Templates/>
      <Package></Package>

      <Testomonial/>
    </div>
  );
};

export default Home;
