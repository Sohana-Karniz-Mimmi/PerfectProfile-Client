import img1 from '../../assets/feature/feature1.png'
import img2 from '../../assets/feature/feature2.png'
import img3 from '../../assets/feature/feature3.png'
import img4 from '../../assets/feature/feature4.png'
import img5 from '../../assets/feature/feature5.png'
import img6 from '../../assets/feature/feature6.png'
import {  motion } from "framer-motion";

const Banner2 = () => {
    return (
        <div className="mb-40 mt-36 ">           
          <div>
          <h1 className="font-bold text-4xl text-center ">Why <span className=" border-b-4 rounded-sm border-primary">Choose</span> <span>
                P<span>er</span>fect
                <span className="text-primary">Profile</span>?
              </span></h1>

             {/* feature section */}
              <motion.div 
              whileInView={{opacity : 1, y: 0}}
              initial={{opacity : 0, y: 100}}
              transition={{duration: 1.5}}
              className='grid grid-cols-2 gap-7 pl-24 mt-10 mb-[20rem] p-16 items-center justify-center '>
                {/* feature 1 */}
                <div className="flex gap-4">
                    <div>
                        <img className='w-36 h-36' src={img1} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Professional Resume Templates</h1>
                        <p className='text-gray-500'>Access a curated collection of stylish and modern templates designed to make your resume stand out.Whether it's a classic black-and-white template, or something a bit more outside the box, we have what you need!</p>
                    </div>
                </div>
                {/* feature 2 */}
                <div className="flex gap-4">
                    <div>
                        <img className='w-36 h-36' src={img2} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Real Time Resume Editing</h1>
                        <p className='text-gray-500'>Customize every aspect of your resume with our user-friendly editor. Whether you want to tweak the font or layout, PerfectProfile provides the flexibility to make your resume truly your own.</p>
                    </div>
                </div>
                {/* feature 3 */}
                <div className="flex gap-4">
                    <div>
                        <img className='w-36 h-36' src={img3} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Personalized Resume Coaching</h1>
                        <p className='text-gray-500'>We offer one-on-one coaching to help you craft the perfect resume. Our expert coaches guide you through each section, providing personalized advice tailored to your career goals. </p>
                    </div>
                </div>
                {/* feature 4 */}
                <div className="flex gap-1">
                    <div>
                        <img className='w-36 h-36' src={img4} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Real Time Collaboration</h1>
                        <p className='text-gray-500'>Whether you're getting feedback from a mentor, collaborating with a colleague, or working alongside a career coach, everyone review your resume.Ensuring your resume is polished to perfection with input from trusted collaborators.</p>
                    </div>
                </div>
                {/* feature 5 */}
                <div className="flex gap-2">
                    <div>
                        <img className='w-36 h-36' src={img5} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Instant PDF Download & Share Links</h1>
                        <p className='text-gray-500'>Download your resume in high-quality PDF format or generate a shareable link, making it easy to send your resume to recruiters instantly</p>
                    </div>
                </div>
                {/* feature 6 */}
                <div className="flex gap-2">
                    <div>
                        <img className='w-36 h-36' src={img6} alt="" />
                    </div>
                    <div className='w-[27rem] space-y-2'>
                        <h1 className='font-bold text-2xl'>Flexible Pricing Plans</h1>
                        <p className='text-gray-500'>Choose a plan that aligns with your career goals and budget.From a free plan that gives you access to essential tools, to premium packages with enhanced customization and real-time collaboration, we ensure there's an option for everyone.</p>
                    </div>
                </div>

              </motion.div>
          </div>

 {/* SVG Wave Background */}
 <div className="z-[-1] absolute bottom-32  w-full left-0">
        <div className="transform scale-x-[-1]">
          <svg
            className="shape-svg-bottom"
            x="0px"
            y="0px"
            viewBox="0 0 1000 199"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#4bccef", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#51e2c2", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad3)"
              d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
            ></path>
          </svg>
        </div>

        <div className="shape-space h-60 bg-gradient-to-r from-[#51E2C2] to-[#4BCCEF]"></div>

        <div className="shape-svg shape-svg-premium-bottom w-full mt-0 pb-0">
          <svg
            className="shape-svg-mid"
            viewBox="0 0 1920 140.049"
            x="0px"
            y="0px"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#51e2c2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4bccef", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad2)"
              d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z"
              transform="translate(0 -350.829)"
            />
          </svg>
        </div>
      </div>
              
        </div>
    );
};

export default Banner2;