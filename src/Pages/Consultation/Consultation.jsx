import Container from "../../Shared/Container";
import ConsultationBanner from "./ConsultationBanner";
import FAQ from "./FAQ";
import HowWorks from "./HowWorks";
import Team from "./Team";
import WhyNeedSection from "./WhyNeedSection";

const Consultation = () => {
    return (
        <Container>
            {/* banner */}
            <ConsultationBanner></ConsultationBanner>
            <WhyNeedSection></WhyNeedSection>
            <Team></Team>
            <HowWorks></HowWorks>
            <FAQ></FAQ>




        </Container>
    );
};

export default Consultation;