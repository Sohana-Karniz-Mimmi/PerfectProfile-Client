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
import Heading from "../../Shared/Heading";
import Button from "../../Shared/Button/Button";


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

                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className=" text-center mt-24 max-w-lg sm:text-lg/relaxed font-montserrat">
                                Get to know our talented team.
                            </p>
                            <h1 data-aos="fade-up" data-aos-duration="500" className="text-3xl sm:text-5xl mt-2 font-lora">
                                MORE ABOUT US
                            </h1>

                        </div>
                    </div>
                </div>

            </section>


            {/* About Our Company */}
            <Container>
                <div className="space-y-6 sm:space-y-12">
                    <div className="text-center mb-12">

                        <Heading 
                        title={'About our company'}
                        subtitle={'We provide the best online resume builder and free expert career advice to guide you through the recruitment process to land your dream job.'}
                        className={'lg:w-[645px] md:w-[550px] mx-auto'}
                        />

                    </div>

                    <AboutCompany img={certified} heading={`Our mission`} text={`We empower job seekers with the tools they need to achieve their career goals. Our team of experts is dedicated to helping you every step of the way, from providing tools to create a showstopping resume and cover letter to offering professional interview tips and career guidance.`} />
                    <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-4">
                        <div className="xl:max-w-[580px] md:max-w-[380px]">
                            <img src={vision} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 font-lora">Our vision</h2>
                            <p className="xl:max-w-[547px] md:max-w-[380px] text-sm md:text-[17px] md:mb-0 mb-6 mt-4 font-montserrat font-light text-gray-800">We envision a world where every job seeker has access to the resources they need to succeed, and we are committed to being the driving force behind this change. Our goal is to help job seekers present their skills and experience in the best possible light, giving them the confidence and competitive edge to land their dream job.</p>
                        </div>

                    </div>
                    <AboutCompany img={mission} heading={`Certified Professional Resume Writers (CPRW)`} text={`At MyPerfectResume, we take pride in our commitment to providing you with the most reliable and up-to-date career advice and job search resources. Our dedication to excellence is reflected in our rigorous editorial process. Learn more about our editorial process and the standards we uphold to ensure the quality of our content.`} />

                    {/* Button */}
                    <div className="relative z-10 text-center !mt-16">
                        <Button 
                        route={'/contact'} 
                        text={"Contact Us"} 
                        className={'px-16 rounded-full'}/>
                        {/* <Link to={'/contact'} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 px-16 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                            Contact Us
                        </Link> */}
                    </div>

                </div>

                <Team></Team>

         
                <div className="">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] text-center">

                            <Heading 
                            title={'Have questions? We are here for you'}
                            subtitle={'At MyPerfectResume, we’re here to support every step of your career journey. Let’s get in touch!'}
                            className={'lg:w-[600px] md:w-[550px] mx-auto'}
                            />
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