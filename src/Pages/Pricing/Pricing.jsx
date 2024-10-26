import { lazy, Suspense } from "react";
const Package = lazy(() => import("../../Components/Package/Package"));
const Container = lazy(() => import("../../Shared/Container"));
const Pricing2ndBanner = lazy(() => import("./Pricing2ndBanner"));
const PricingBanner = lazy(() => import("./PricingBanner"));

import loadingGif from "../../assets/loading.gif";

const Pricing = () => {
  return (
    <Container>
      <Pricing2ndBanner></Pricing2ndBanner>
      <Package></Package>
      <PricingBanner></PricingBanner>
    </Container>
  );
};

export default Pricing;
