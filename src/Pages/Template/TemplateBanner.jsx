import { Link } from 'react-router-dom';
import img from '../../assets/banner/template-banner.png'
const TemplateBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-9 py-4 mb-[21rem] lg:mb-1 h-[26rem] lg:h-[15rem] mt-6 rounded-lg bg-cyan-50">
        <div>
          <h1 className="font-bold text-4xl">
          Choose the Perfect Template for Your Career
            
          </h1>
          <p className="text-gray-500 lg:w-[43rem] w-80 mt-3">
          Your resume is the key to making a great first impression. PerfectProfile offers a wide range of professionally designed templates that cater to all industries and career levels.
          </p>
          <p className="text-gray-500 lg:w-[43rem] w-80 mt-2">
           Unlock access to Premium Templates by upgrading to a <span className='font-bold text-black'>Premium Plan</span>. With these high-quality designs, give your resume a polished look. 
          </p>
  
          <div className="flex flex-col  items-start  text-base  font-bold lg:font-semibold">
           
            <Link className="mt-5  mb-16 lg:mb-0">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 px-4  uppercase lg:text-base font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                Upgrade Now
              </button>
            </Link>
          </div>
        </div>
  
        <div className="">
          <img className="h-72 w-[28rem] rounded-lg" src={img} alt="" />
        </div>
      </div>
    );
};

export default TemplateBanner;