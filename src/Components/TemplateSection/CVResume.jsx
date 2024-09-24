import React, { useState } from 'react';

const CVResume = () => {
    const [name, setName] = useState('John Doe');
    const [title, setTitle] = useState('Web Developer');
    const [email, setEmail] = useState('johndoe@example.com');
    const [phone, setPhone] = useState('(123) 456-7890');
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']);
    const [experience, setExperience] = useState([
        {
            title: 'Web Developer',
            company: 'ABC Company',
            duration: 'June 2022 - Present',
            responsibilities: [
                'Developed responsive websites using HTML, CSS, and JavaScript.',
                'Collaborated with designers to improve user experience.',
            ],
        },
        {
            title: 'Intern',
            company: 'XYZ Company',
            duration: 'January 2022 - May 2022',
            responsibilities: [
                'Assisted in website design and maintenance.',
                'Conducted user testing and provided feedback.',
            ],
        },
    ]);

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <header className="text-center mb-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-xl text-gray-600 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="Job Title"
                />
                <p className="text-gray-500">
                    Email: 
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b-2 border-gray-300 focus:outline-none"
                        placeholder="Email"
                    /> | Phone: 
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-b-2 border-gray-300 focus:outline-none"
                        placeholder="Phone Number"
                    />
                </p>
            </header>

            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b-2 border-green-500 pb-2 mb-4">Contact Information</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b-2 border-green-500 pb-2 mb-4">Skills</h2>
                <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b-2 border-green-500 pb-2 mb-4">Experience</h2>
                {experience.map((job, index) => (
                    <div className="mb-4" key={index}>
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        <p className="text-gray-600">{job.company} | {job.duration}</p>
                        <ul className="list-disc list-inside">
                            {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section>
                <h2 className="text-xl font-semibold border-b-2 border-green-500 pb-2 mb-4">Education</h2>
                <p className="font-bold">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600">University of Example | 2018 - 2022</p>
            </section>
        </div>
    );
};

export default CVResume;
