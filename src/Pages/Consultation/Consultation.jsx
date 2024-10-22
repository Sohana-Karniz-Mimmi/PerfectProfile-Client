import Container from "../../Shared/Container";
import ConsultationBanner from "./ConsultationBanner";
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




        </Container>
    );
};

export default Consultation;