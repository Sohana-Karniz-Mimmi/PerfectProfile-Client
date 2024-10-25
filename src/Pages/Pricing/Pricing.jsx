import { lazy, Suspense } from "react";
const Package = lazy(() => import("../../Components/Package/Package"));
const Container = lazy(() => import("../../Shared/Container"));
const Pricing2ndBanner = lazy(() => import("./Pricing2ndBanner"));
const PricingBanner = lazy(() => import("./PricingBanner"));

import loadingGif from "../../assets/loading.gif";

const Pricing = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <img className="h-64" src={loadingGif} alt="loading..." />
        </div>
      }
    >
      <Container>
        <Pricing2ndBanner></Pricing2ndBanner>
        <Package></Package>
        <PricingBanner></PricingBanner>
      </Container>
    </Suspense>
  );
};

export default Pricing;
