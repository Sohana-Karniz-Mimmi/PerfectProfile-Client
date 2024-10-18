import teen from "../../assets/Resource/teen-writing-resume.avif";
import cashier from "../../assets/Resource/5-common-questions-for-cashier.avif";
import examples from "../../assets/Resource/two-page-resume-example.avif";

const ResentBlog = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        Most Recent
      </h1>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Article 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={teen}
            alt="Teen Resume Examples"
          />
          <div className="p-5">
            <div className="flex items-center text-xs text-gray-500">
              <span className="text-blue-600 font-semibold">RESUMES</span>
              <span className="mx-1">•</span>
              <span>9 min read</span>
            </div>
            <h2 className="text-blue-900 font-bold text-lg mt-3">
              Teen Resume Examples, Templates & Guide
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Whether you're seeking a part-time job, internship, or volunteer
              opportunity, a resume is essential.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-700 font-semibold">
                Elizabeth Muenzen, CPRW
              </span>
              <span className="mx-1 text-gray-500">•</span>
              <span className="text-gray-500">Oct 16, 2024</span>
            </div>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={cashier}
            alt="Cashier Interview Questions"
          />
          <div className="p-5">
            <div className="flex items-center text-xs text-gray-500">
              <span className="text-blue-600 font-semibold">INTERVIEWS</span>
              <span className="mx-1">•</span>
              <span>10 min read</span>
            </div>
            <h2 className="text-blue-900 font-bold text-lg mt-3">
              Cashier Interview Questions and Answers
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Securing a cashier interview means your resume and cover letter
              stood out.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-700 font-semibold">
                Natalia Merced
              </span>
              <span className="mx-1 text-gray-500">•</span>
              <span className="text-gray-500">Oct 16, 2024</span>
            </div>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={examples}
            alt="Two-Page Resume Examples"
          />
          <div className="p-5">
            <div className="flex items-center text-xs text-gray-500">
              <span className="text-blue-600 font-semibold">RESUMES</span>
              <span className="mx-1">•</span>
              <span>6 min read</span>
            </div>
            <h2 className="text-blue-900 font-bold text-lg mt-3">
              Two-Page Resume Examples & Formatting Guide
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              A well-structured two-page resume allows you to showcase the
              breadth of your experiences.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-700 font-semibold">
                Nilda Melissa Diaz, CPRW
              </span>
              <span className="mx-1 text-gray-500">•</span>
              <span className="text-gray-500">Oct 09, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResentBlog;
