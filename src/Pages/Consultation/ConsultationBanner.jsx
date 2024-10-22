import { Link } from 'react-router-dom';
import img from '../../assets/banner/session-banner.png'
const ConsultationBanner = () => {
    return (
        <div className="flex flex-col  lg:flex-row justify-between items-center px-2 lg:px-9 py-8 mb-9 lg:mb-7 h-[34rem] lg:h-[19rem] mt-6 rounded-lg bg-cyan-50">
        <div>
          <h1 className="font-bold text-4xl">Struggling with Your Resume? Let Us Help!</h1>
          <p className="text-gray-500 lg:w-[43rem] w-80 mt-5">
          Crafting a standout resume can be challenging, but you don’t have to do it alone. Our team of experienced consultants is here to guide you every step of the way, helping you create a resume that highlights your skills and achievements. Whether you're starting from scratch or refining an existing resume, our personalized sessions offer tailored advice to ensure your resume shines. Book a consultation today and take the first step toward landing your dream job!
          </p>
         

          <div className="flex flex-col  items-start  text-base  font-bold lg:font-semibold">
            <Link  className="mt-5  mb-10 lg:mb-0">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105">
              Book a Session Now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex relative item-center justify-center">
          <img
            className="lg:h-[16rem] h-44 w-44 lg:w-[27rem] rounded-lg"
            src={img}
            alt=""
          />
          <p className='bg-[#3da4bb] flex gap-[39px] p-1 absolute top-6 right-[51px] text-white text-[9px] rounded-sm'><ul className='list-disc list-inside ' ><li>online</li></ul> Resume Session</p>
          
        </div>
      </div>
    );
};

export default ConsultationBanner;