import img1 from '../../assets/consultation/job-market.png'
import img2 from '../../assets/consultation/team.png'
import img3 from '../../assets/consultation/timetable.png'
import img4 from '../../assets/consultation/success.png'
const WhyNeedSection = () => {
    return (
        <div>
          <h1 className="font-bold lg:text-4xl mt-24 text-2xl text-center ">Why Seek Help from Resume <span className=" border-b-4 rounded-sm border-primary">Experts</span> <span>
               ?
              </span></h1>

             {/* feature section */}
              <div 
             
              className='grid grid-cols-1 lg:grid-cols-2 gap-9  lg:pl-24 mt-10 p-2 lg:p-16 items-center justify-center '>
                {/* feature 1 */}
                <div className="flex gap-4">
                    <div>
                        <img className='w-36 h-28  lg:h-36' src={img1} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Stand Out in a Competitive Market</h1>
                        <p className='text-gray-500'>In today’s world, standing out among hundreds of applicants is essential. Our consultants know what employers are looking for and can help you  highlights your strengths and unique value.</p>
                    </div>
                </div>
                {/* feature 2 */}
                <div className="flex gap-4">
                    <div>
                        <img className='w-36  h-28 lg:h-36' src={img2} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Tailored Guidance from Experts</h1>
                        <p className='text-gray-500'>Generic resume advice doesn’t cut it anymore. Our team of experienced consultants will provide personalized, actionable feedback in the session based on your career goals and industry demands.</p>
                    </div>
                </div>
                {/* feature 3 */}
                <div className="flex gap-4">
                    <div>
                        <img className='w-36 h-28  lg:h-36' src={img3} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Save Time and Avoid Costly Mistakes</h1>
                        <p className='text-gray-500'>Writing the perfect resume can be time-consuming, especially when you’re unsure of what works. Let our experts guide you to avoid common mistakes, saving you time and ensuring your resume leaves a lasting impression.</p>
                    </div>
                </div>
                {/* feature 4 */}
                <div className="flex gap-1">
                    <div>
                        <img className='w-36  h-28 lg:h-36' src={img4} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Increase Your Chances of Success</h1>
                        <p className='text-gray-500'>With years of experience, our consultants understand what makes resumes effective. Whether you’re just starting out or aiming for your next career move, our consultancy services can boost your chances of landing that dream job.</p>
                    </div>
                </div>


              </div>
          </div>
    );
};

export default WhyNeedSection;