import { Link } from "react-router-dom";
import img1 from '../../assets/4.png'
import img2 from '../../assets/1.png'
import img3 from '../../assets/3.png'
import Container from "../../Shared/Container";

const ResumeAbout = () => {
    return (
        <div className="bg-emerald-100 md:py-28">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="space-y-5 w-[360px]">
                        <h2 className="text-5xl font-medium">
                            Let your resume do the work.
                        </h2>
                        <p className="text-lg">
                            Join 5,000,000 job seekers worldwide and get hired faster with your best resume yet.
                        </p>
                        {/* Button */}
                        <div className="!mt-8">
                            <Link to={'#'} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-[10px] px-12 rounded-lg text-lg font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                                Create Resume
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <img className="w-[260px]" src={img1} alt="" />
                        <img className="w-[260px]"src={img2} alt="" />
                        <img className="w-[260px]" src={img3} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ResumeAbout;