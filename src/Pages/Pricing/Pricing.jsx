import { Helmet } from "react-helmet-async";
import Package from "../../Components/Package/Package";
import Container from "../../Shared/Container";
import Pricing2ndBanner from "./Pricing2ndBanner";
import PricingBanner from "./PricingBanner";

const Pricing = () => {

    return (
        <>
            <Helmet>
                <title>Pricing - PerfectProfile</title>
            </Helmet>
            <Container>
                <Pricing2ndBanner></Pricing2ndBanner>
                <Package></Package>
                <PricingBanner></PricingBanner>
            </Container>
        </>
    );
};

export default Pricing;