import img from "../../assets/pricing banner.png";
const MyResumeBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mb-52 lg:mb-7 items-center px-2 lg:px-9 h-80 lg:h-72 mt-9 py-6 rounded-lg bg-cyan-50" 
    style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <div>
        <h1 className="text-4xl font-bold ">Manage Your Resume</h1>
        <p className="text-gray-500 w-80 lg:w-[44rem] mt-4">
        Effortlessly manage multiple copies of your resumes with our advanced resume management system. You can save, edit, and update your resumes with ease, enabling you to monitor changes and revert to earlier drafts as needed. Streamline your job application process and maintain clarity and confidence in your resume management.
        </p>
      </div>
      <div className="p-10 lg:p-12 ">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default MyResumeBanner;
