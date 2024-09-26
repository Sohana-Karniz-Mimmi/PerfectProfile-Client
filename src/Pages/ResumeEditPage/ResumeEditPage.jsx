const ResumeEditPage = () => {
  return (
    <main className="flex justify-between gap-10 ">
      {/* left side section  */}
      <section className="bg-slate-900 flex-1 flex items-start justify-start">
        <div className="min-h-screen bg-gray-900 text-white">
          {/* For larger screens, show timeline vertically; for smaller screens, place it on top */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start">
            {/* Timeline for small screens - horizontal layout */}
            <div className="w-full flex justify-between lg:hidden bg-gray-800 py-4">
              {[
                "Heading",
                "Professional Experience",
                "Education",
                "Skills",
                "Summary",
                "Finalize",
              ].map((step, index) => (
                <div key={index} className="text-center px-4">
                  <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-xs mt-2">{step}</p>
                </div>
              ))}
            </div>

            {/* Sidebar for large screens */}
            <div className="hidden lg:block lg:w-64 p-4 bg-gray-800">
              <ul>
                {[
                  "Heading",
                  "Professional Experience",
                  "Education",
                  "Skills",
                  "Summary",
                  "Finalize",
                ].map((step, index) => (
                  <li key={index} className="mb-6">
                    <div className="flex items-center">
                      <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="ml-4">{step}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Resume completion */}
              <div className="mt-8">
                <p className="text-sm">RESUME COMPLETENESS:</p>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 p-6">{/* Your main content here */}</div>
          </div>

          {/* Footer links */}
          <div className="text-center text-xs mt-8 lg:mt-auto p-4 bg-gray-800">
            <p className="mb-2">
              Terms and Conditions | Privacy Policy | Accessibility | Contact Us
            </p>
            <p>© 2024, Works Limited. All rights reserved.</p>
          </div>
        </div>
      </section>
      {/* right side section  */}
      <section className="flex-[4]"></section>
    </main>
  );
};

export default ResumeEditPage;
