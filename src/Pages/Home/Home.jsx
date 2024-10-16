import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Home/Banner";
import PremiumFeature from "../../Components/Home/PremiumFeature";
import StepsOfResume from "../../Components/Home/StepsOfResume";
import Testomonial from "../../Components/Testomonial/Testomonial";
// import Chat from "../../Components/LiveChat/NewChatComponent/RightSte/Chat";

const Home = () => {
  return (
    <div className=" py-4">
      <Helmet>
        <title>Home - PerfectProfile</title>
      </Helmet>
      <div className="bg-[#F9FAFF]">
        <Banner />
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
      {/* <div>
        <Chat />
      </div> */}
    </div>
  );
};

export default Home;
