import React from 'react';
import { FaBookOpen, FaChalkboardTeacher, FaPencilAlt } from 'react-icons/fa'; // React Icons

const tutorials = [
  {
    id: 1,
    icon: <FaBookOpen className="text-4xl text-primary mb-4" />,
    title: 'Resume Basics',
    description: 'Learn the essentials of creating a standout resume.',
    link: '#',
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher className="text-4xl text-primary mb-4" />,
    title: 'Advanced Formatting',
    description: 'Master advanced formatting techniques for a professional look.',
    link: '#',
  },
  {
    id: 3,
    icon: <FaPencilAlt className="text-4xl text-primary mb-4" />,
    title: 'Tailoring Your Resume',
    description: 'Learn how to tailor your resume for specific job applications.',
    link: '#',
  },
];

const InteractiveTutorials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Interactive Tutorials to Enhance Your Resume</h2>
        <p className="text-gray-500 mb-8">Explore our tutorials and improve your resume-building skills.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
             <button>
             {tutorial.icon}
             </button>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{tutorial.title}</h3>
              <p className="text-gray-600">{tutorial.description}</p>
              <a 
                href={tutorial.link} 
                className="mt-4 inline-block bg-secondary text-white py-2 px-4 rounded hover:bg-primary transition duration-300">
                Start Tutorial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTutorials;
