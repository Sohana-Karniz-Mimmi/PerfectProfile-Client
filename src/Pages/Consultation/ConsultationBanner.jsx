import { Link } from 'react-router-dom';
import img from '../../assets/banner/session-banner.png'
const ConsultationBanner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-5 lg:px-9 lg:py-9 py-5 mb-9 lg:mb-7 mt-6 rounded-lg bg-cyan-50 gap-5">
        <div className='pl-2'>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-lora ">Unlock resume success with our expert support</h1>
          <p className="text-gray-500 text-sm md:text-[15px] lg:text-base xl:w-[44rem] lg:w-[35rem] md:w-[25rem] font-montserrat mt-4">
          Crafting a standout resume can be challenging, but you don’t have to do it alone. Our team of experienced consultants is here to guide you every step of the way, helping you create a resume that highlights your skills and achievements. <br /><br />
          With our support, you’ll create a polished, professional document that showcases your strengths and sets you apart.
          </p>
         

          <div className="flex flex-col items-start  text-base  font-bold lg:font-semibold">
            <a href='#session'  className="mt-5  mb-3 lg:mb-0">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase font-lora lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105">
              Book a Session Now
              </button>
            </a>
          </div>
        </div>

        <div className="flex relative item-center justify-center">
          <img
            className="xl:h-[12rem] xl:w-[20rem] lg:h-[12rem] md:h-[10rem] h-36 w-52 md:w-[27rem] rounded-lg"
            src={img}
            alt=""
          />
          <div className='bg-[#3da4bb] hidden lg:w-[125px] w-[107px] lg:h-5 h-3 xl:flex gap-[15px] lg:gap-[5px] p-1 absolute lg:top-[20px] top-[18px] lg:right-[28px]  items-center justify-center right-[40px] text-white lg:text-[9px] text-[6px] rounded-sm'><ul className='list-disc list-inside flex items-center justify-center ' ><li>online</li></ul> Resume Session</div>
          
        </div>
      </div>
    );
};

export default ConsultationBanner;