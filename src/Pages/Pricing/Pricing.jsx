import Package from "../../Components/Package/Package";
import Container from "../../Shared/Container";
import Pricing2ndBanner from "./Pricing2ndBanner";
import PricingBanner from "./PricingBanner";

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