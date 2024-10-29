import img1 from '../../assets/consultation/job-market.png'
import img2 from '../../assets/consultation/team.png'
import img3 from '../../assets/consultation/timetable.png'
import img4 from '../../assets/consultation/success.png'
import {  motion } from "framer-motion";

const WhyNeedSection = () => {

    const features = [
        {
            key: 1,
            header: "Stand Out in a Competitive Market",
            subHeader : "In today’s world, standing out among hundreds of applicants is essential. Our consultants know what employers are looking for and can help you  highlights your strengths and unique value.",
            img : img1
        },
        {
            key: 2,
            header: "Tailored Guidance from Experts",
            subHeader : "Generic resume advice doesn’t cut it anymore. Our team of experienced consultants will provide personalized, actionable feedback in the session based on your career goals and industry demands.",
            img : img2
        },
        {
            key: 3,
            header: "Save Time and Avoid Costly Mistakes",
            subHeader : "Writing the perfect resume can be time-consuming, especially when you’re unsure of what works. Let our experts guide you to avoid common mistakes, saving you time and ensuring your resume leaves a lasting impression.",
            img : img3
        },
        {
            key: 4,
            header: "Increase Your Chances of Success",
            subHeader : "With years of experience, our consultants understand what makes resumes effective. Whether you’re just starting out or aiming for your next career move, our consultancy services can boost your chances of landing that dream job.",
            img : img4
        },
    ]



    return (
        <div>
          <h1 className="font-bold font-lora  lg:text-4xl lg:mt-28 mt-20 text-3xl text-center ">Why Seek Help from Resume <span className=" border-b-4 rounded-sm border-primary">Experts</span> <span>
               ?
              </span></h1>

             {/* feature section */}
              <div 
             
              className='grid grid-cols-1 lg:grid-cols-2 gap-9  lg:pl-24 mt-11 p-4 lg:p-16 items-center justify-center '>
                {/* features */}
                {
                    features.map(feature=> <>
                    <div className="flex flex-col md:flex-row gap-5 justify-center md:items-start p-3 text-center md:justify-start items-center md:text-start">
                    <motion.div
                     whileInView={{opacity : 1, y: 0}}
                     initial={{opacity : 0, y: -70}}
                     transition={{duration: 1.5}}
                    >
                        <img className='w-28 md-w-32 h-28  lg:h-32' src={feature.img} alt="" />
                    </motion.div>
                    <div className='md:w-[27rem] font-lora w-[18rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>{feature.header}</h1>
                        <p className='text-gray-500 font-montserrat text-sm md:text-base '>{feature.subHeader}</p>
                    </div>
                </div>
                    </>)
                }
              


              </div>
          </div>
    );
};

export default WhyNeedSection;