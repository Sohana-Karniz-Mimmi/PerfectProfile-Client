import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Home/Banner";
import PremiumFeature from "../../Components/Home/PremiumFeature";
import StepsOfResume from "../../Components/Home/StepsOfResume";
import Testomonial from "../../Components/Testomonial/Testomonial";
// import Chat from "../../Components/LiveChat/Chat";
import PremiumModal from "../../Components/Modal/PremiumModal";
// import Chat from "../../Components/LiveChat/Chat";

const Home = () => {
  return (
    <div className=" py-4">
      <Helmet>
        <title>Home - PerfectProfile</title>
      </Helmet>
      <PremiumModal /> 
      <div className="bg-[#F9FAFF]">
        <Banner />
      </div>
      <div>
        {/* <Chat /> */}
      </div>
      <div>
        <StepsOfResume />
      </div>
      <div>
        <PremiumFeature />
      </div>
      <div>
        <Testomonial></Testomonial>
      </div>
    </div>
  );
};

export default Home;
