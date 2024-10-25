import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

const Banner = lazy(() => import("../../Components/Home/Banner"));
const PremiumFeature = lazy(() =>
  import("../../Components/Home/PremiumFeature")
);
const StepsOfResume = lazy(() => import("../../Components/Home/StepsOfResume"));
const Testomonial = lazy(() =>
  import("../../Components/Testomonial/Testomonial")
);
const PremiumModal = lazy(() => import("../../Components/Modal/PremiumModal"));

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
        <Testomonial></Testomonial>
      </div>
      {/* <div>
        <Chat />
      </div> */}
    </div>
    // </Suspense>
  );
};

export default Home;
