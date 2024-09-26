import { Helmet } from "react-helmet-async";
import teamImg from '../../assets/Images/About/team.jpg'
import vision from '../../assets/Images/About/our-vision.png'
import mission from '../../assets/Images/About/our-mission.png'
import certified from '../../assets/Images/About/certified-professionals.png'
import { Link, ScrollRestoration } from "react-router-dom";
import Team from './Team';
import AboutCompany from "./AboutCompany";
import Container from "../../Shared/Container";
import Question from "./Question";
import ResumeAbout from "./ResumeAbout";


const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us- PerfectProfile</title>
            </Helmet>
            <ScrollRestoration />

            <section className="text-white relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + teamImg + ')' }}>

                <div
                    className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                >
                </div>

                <div
                    className="relative lg:h-screen lg:items-center lg:px-8"
                >
                    <div className='flex items-center justify-center h-[400px]'>

                        <div>

                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className=" text-center mt-24 max-w-lg sm:text-lg/relaxed">
                                Get to know our talented team.
                            </p>
                            <h1 data-aos="fade-up" data-aos-duration="500" className="text-3xl sm:text-5xl mt-2">
                                MORE ABOUT US
                            </h1>

                        </div>
                    </div>
                </div>

            </section>


            {/* About Our Company */}
            <Container>
                <div className="mt-12 md:mt-24 space-y-6 sm:space-y-12">
                    <div className="text-center mb-12">

                        <h2 className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2">About our company</h2>
                        <p className="lg:w-[623px] lg:text-[16px] md:w-[550px] text-sm  w-80 mx-auto ">We provide the best online resume builder and free expert career advice to guide you through the recruitment process to land your dream job.</p>
                    </div>

                    <AboutCompany img={certified} heading={`Our mission`} text={`We empower job seekers with the tools they need to achieve their career goals. Our team of experts is dedicated to helping you every step of the way, from providing tools to create a showstopping resume and cover letter to offering professional interview tips and career guidance.`} />
                    <div className="md:flex justify-between items-center">
                        <div className="md:max-w-[580px]">
                            <img src={vision} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Our vision</h2>
                            <p className="max-w-[547px] text-[17px] mt-6">We envision a world where every job seeker has access to the resources they need to succeed, and we are committed to being the driving force behind this change. Our goal is to help job seekers present their skills and experience in the best possible light, giving them the confidence and competitive edge to land their dream job.</p>
                        </div>

                    </div>
                    <AboutCompany img={mission} heading={`Certified Professional Resume Writers (CPRW)`} text={`At MyPerfectResume, we take pride in our commitment to providing you with the most reliable and up-to-date career advice and job search resources. Our dedication to excellence is reflected in our rigorous editorial process. Learn more about our editorial process and the standards we uphold to ensure the quality of our content.`} />

                    {/* Button */}
                    <div className="relative z-10 text-center !mt-16">
                        <Link to={'/contact'} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 px-16 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                            Contact Us
                        </Link>
                    </div>

                </div>

                <Team></Team>

                {/* Get In Touch */}
                <div className="">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] text-center">

                            <h2 className="mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                            >
                                Do you have any questions? We are here for you
                            </h2>
                            <p className="text-body-color ">
                                At MyPerfectResume, we’re here to support every step of your career journey. Let’s get in touch!
                            </p>
                        </div>
                    </div>
                    <Question />



                </div>

            </Container>
            <ResumeAbout />

        </>
    );
};

export default About;