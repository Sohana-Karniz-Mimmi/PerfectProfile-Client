import { Link } from "react-router-dom";
import img1 from '../../assets/Images/ResumeTemplate/4.png'
import img2 from '../../assets/Images/ResumeTemplate/1.png'
import img3 from '../../assets/Images/ResumeTemplate/3.png'
import Container from "../../Shared/Container";
import Button from "../../Shared/Button/Button";

const ResumeAbout = () => {
    return (
        <div className="bg-emerald-100 md:py-28 py-14">
            <Container>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 md:w-1/2 xl:w-2/5">
                        <div className="mx-auto mb-10 w-full max-w-[370px]">
                            <div className="space-y-5">
                                <h2 className="font-lora md:text-5xl text-3xl font-medium">
                                    Let your resume do the work.
                                </h2>
                                <p className="font-montserrat text-base">
                                    Join 5,000,000 job seekers worldwide and get hired faster with your best resume yet.
                                </p>
                                {/* Button */}
                                <div className="!mt-8">

                                    <Button 
                                    route={'/template'} 
                                    text={"Create Resume"}
                                    className={'py-[10px] px-12 rounded-lg md:text-lg'}
                                    />
                                    
                                    {/* <Link to={'#'} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-[10px] px-12 rounded-lg text-lg font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                                        Create Resume
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2 xl:w-1/5">
                        <div className="mb-10 w-full max-w-[260px]">
                            <img className="w-[260px]" src={img1} alt="" />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 xl:w-1/5">
                        <div className="mb-10 w-full max-w-[260px]">
                            <img className="w-[260px]" src={img2} alt="" />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 xl:w-1/5">
                        <div className="mb-10 w-full max-w-[260px]">
                            <img className="w-[260px]" src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ResumeAbout;