import { Link } from 'react-router-dom';
import img from '../../assets/banner/session-banner.png'
const MyResumeConsultationBanner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-9 py-8 mb-9 lg:mb-20 lg:h-[20rem] mt-6 rounded-lg bg-cyan-50 gap-5">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Struggling with Your Resume? Our Experts Are Here to Help.</h1>
          <p className="text-gray-500  text-sm md:text-[15px] lg:text-base  xl:w-[44rem] lg:w-[43rem] md:w-[28rem] mt-5">
          Crafting a standout resume can be challenging, but you don’t have to do it alone. Our team of experienced consultants is here to guide you every step of the way, helping you create a resume that highlights your skills and achievements. Whether you're starting from scratch or refining an existing resume, our personalized sessions offer tailored advice to ensure your resume shines. Book a consultation today and take the first step toward landing your dream job!
          </p>
         

          <div className="flex flex-col md:items-start items-center text-base  font-bold lg:font-semibold">
            <a href='#session'  className="mt-5 ">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105">
              Book a Session Now
              </button>
            </a>
          </div>
        </div>

        <div className="flex relative item-center justify-center">
          <img
            className="lg:h-[16rem] h-44 w-80 lg:w-[27rem] rounded-lg"
            src={img}
            alt=""
          />
          <div className='bg-[#3da4bb] lg:w-[125px] w-[107px] lg:h-5 h-3 flex gap-[15px] p-1 absolute lg:top-[26px] top-[18px] lg:right-[42px]  items-center justify-center right-[40px] text-white lg:text-[9px] text-[6px] rounded-sm'><ul className='list-disc list-inside flex items-center justify-center ' ><li>online</li></ul> Resume Session</div>
          
        </div>
      </div>
    );
};

export default MyResumeConsultationBanner;