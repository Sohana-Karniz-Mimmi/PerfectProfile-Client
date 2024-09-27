import React, { useState } from "react";

const Summery = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (e) => {
    setEditorContent(e.target.innerHTML);
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 border rounded-lg p-4 bg-white shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by job title"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold">Popular Job Titles</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {[
              "Cashier",
              "Customer Service Representative",
              "Manager",
              "Server",
              "Retail Sales Associate",
            ].map((job) => (
              <li
                key={job}
                className="bg-gray-200 px-2 py-1 rounded-lg text-xs cursor-pointer hover:bg-gray-300"
              >
                {job}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-sm">Ready-to-use-examples</h4>
          <div className="flex flex-col gap-2">
            <div className="border p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span className="text-blue-600 font-semibold">
                Expert Recommended
              </span>
              <p className="text-xs">
                Pursuing full-time role that presents professional challenges
                and leverages interpersonal skills, effective time management,
                and problem-solving expertise.
              </p>
            </div>
            <div className="border p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span className="text-blue-600 font-semibold">
                Expert Recommended
              </span>
              <p className="text-xs">
                Demonstrates strong analytical, communication, and teamwork
                skills, with proven ability to quickly adapt to new
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rich Text Editor */}
      <div className="w-full md:w-2/3 border rounded-lg p-4 bg-white shadow-md">
        <h4 className="font-semibold mb-2 text-sm">Write your summary here</h4>
        <div className="border-b mb-4 pb-2">
          <button className="px-2 text-gray-500 hover:text-black font-bold">
            B
          </button>
          <button className="px-2 text-gray-500 hover:text-black italic">
            I
          </button>
          <button className="px-2 text-gray-500 hover:text-black underline">
            U
          </button>
          <button className="px-2 text-gray-500 hover:text-black line-through">
            S
          </button>
        </div>
        <div
          contentEditable
          suppressContentEditableWarning={true}
          className="w-full h-40 border p-4 outline-none overflow-y-auto rounded-md"
          onInput={handleEditorChange}
          placeholder="Write your summary here..."
        >
          Write your summary here...
        </div>
      </div>
    </div>
  );
};

export default Summery;
