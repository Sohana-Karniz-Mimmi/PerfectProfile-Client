import resume1 from "../../assets/Resource/how-to-write-a-resume-1.avif";
import resume2 from "../../assets/Resource/update-and-fix-resume.avif";
import resume3 from "../../assets/Resource/how-to-write-a-cover-letter-hero-MPR.avif";
import resume4 from "../../assets/Resource/ai-resume-skill-generator.avif";
import resume5 from "../../assets/Resource/one-page-resume-example.avif";

const EditorPicks = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-5xl my-5 font-bold ">Editors' Picks</h1>

      {/* Parent container for two sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left section (featured article) */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-lg shadow-md">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={resume1}
                alt="Resume Guide"
              />
            </div>
            <div className="p-5">
              <h2 className="text-blue-900 font-bold text-lg mt-4">
                How to Write a Resume (Examples & Guide)
              </h2>
              <p className="text-gray-500 mt-1 text-sm">
                Approximately 40% of hiring managers spend less than a minute
                reviewing a resume. To make a lasting impression...
              </p>
              <div className="flex items-center text-gray-400 mt-2 text-xs">
                <span className="text-blue-600">RESUMES</span>
                <span className="mx-1">•</span>
                <span>15 min read</span>
                <span className="mx-1">•</span>
                <span>Sep 13, 2024</span>
              </div>
              <p className="text-gray-700 mt-2 font-semibold">
                Kellie Hanna, CPRW
              </p>
            </div>
          </div>
        </div>

        {/* Right section (list of articles) */}
        <div className="space-y-8">
          {[resume2, resume3, resume4, resume5].map((image, index) => (
            <div key={index} className="flex space-x-4">
              <div className="w-1/3 h-32 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={`Article ${index + 1}`}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-blue-900 font-bold text-sm">
                  {index === 0 && "Guide to Update & Fix Your Resume"}
                  {index === 1 &&
                    "How to Write a Cover Letter: Examples For..."}
                  {index === 2 && "AI Resume Skills Generator"}
                  {index === 3 && "One-Page Resume Guide: Templates & Examples"}
                </h3>
                <div className="flex items-center text-gray-400 text-xs mt-1">
                  <span className="text-blue-600">RESUMES</span>
                  <span className="mx-1">•</span>
                  <span>
                    {index === 0
                      ? "8 min read"
                      : index === 1
                      ? "14 min read"
                      : index === 2
                      ? "2 min read"
                      : "8 min read"}
                  </span>
                  <span className="mx-1">•</span>
                  <span>
                    {index === 0
                      ? "May 06, 2024"
                      : index === 1
                      ? "Sep 13, 2024"
                      : index === 2
                      ? "Oct 08, 2024"
                      : "Mar 30, 2024"}
                  </span>
                </div>
                <p className="text-gray-700 mt-2 font-semibold">
                  {index === 0 && "Kellie Hanna, CPRW"}
                  {index === 1 && "Kellie Hanna, CPRW"}
                  {index === 2 && "Natalia Merced"}
                  {index === 3 && "Elizabeth Muenzen, CPRW"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorPicks;
