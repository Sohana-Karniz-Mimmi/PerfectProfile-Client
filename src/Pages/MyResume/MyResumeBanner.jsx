import img from "../../assets/pricing banner.png";
const MyResumeBanner = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mb-14 items-center px-5 md:px-9 lg:h-72 mt-9 py-6 rounded-lg gap-4 bg-cyan-50" 
    style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Manage Your Resume</h1>
        <p className="text-gray-500 text-sm md:text-[15px] lg:text-base xl:w-[44rem] lg:w-[35rem] md:w-[28rem] mt-4">
        Effortlessly manage multiple copies of your resumes with our advanced resume management system. You can save, edit, and update your resumes with ease, enabling you to monitor changes and revert to earlier drafts as needed. Streamline your job application process and maintain clarity and confidence in your resume management.
        </p>
      </div>
      <div className="">
        <img className="xl:h-52 xl:w-[20rem] lg:h-40 md:h-32 md:w-[40rem] h-32  rounded-lg" src={img} alt="" />
      </div>
    </div>
  );
};

export default MyResumeBanner;
