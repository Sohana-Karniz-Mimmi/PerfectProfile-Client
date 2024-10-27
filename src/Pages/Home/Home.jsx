import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Home/Banner";
import PremiumFeature from "../../Components/Home/PremiumFeature";
import StepsOfResume from "../../Components/Home/StepsOfResume";
import Testomonial from "../../Components/Testomonial/Testomonial";
// import Chat from "../../Components/LiveChat/Chat";
import PremiumModal from "../../Components/Modal/PremiumModal";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";
import Feature from "../../Components/Home/Feature";
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
      <div>{/* <Chat /> */}</div>
      <div>
        <StepsOfResume />
      </div>
      <div>
        <PremiumFeature />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Testomonial></Testomonial>
      </div>
      {/* <div>
        <Chat />
      </div> */}
      {/* Scroll Top to Bottom*/}
      <div>
        <ScrollToTop
          smooth
          color="white"
          component={<FaArrowUp size={20} color="#090909" />}
          style={{
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00C8AA",
            height: "36px",
            width: "36px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
