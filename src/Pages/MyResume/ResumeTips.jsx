import React from 'react';
import Heading from '../../Shared/Heading';
import Button from '../../Shared/Button/Button';
import user from '../../assets/My Resume/user.svg'
import skill from '../../assets/My Resume/light-bulb.svg'
import experience from '../../assets/My Resume/briefcase.svg'

const ResumeTips = () => {
    const tips = [
        {
            id: 1,
            icon: user,
            title: 'Personal Information',
            description: 'Include your full name, email address, and a professional-sounding phone number.',
        },
        {
            id: 2,
            icon: experience,
            title: 'Work Experience',
            description: 'Highlight your relevant work experience, focusing on achievements and responsibilities.',
        },
        {
            id: 3,
            icon: skill,
            title: 'Skills Section',
            description: 'List your relevant skills, and ensure they match the job description.',
        },
    ];

    return (
        <section className="py-12 mt-20 bg-gradient-to-r from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-2 lg:px-9 text-center">
                <Heading headingClassName={`md:pt-0 pt-0`} title={`Resume Writing Tips`} subtitle={`Enhance your resume with expert tips to effectively showcase your skills and grab the attention of potential employers.`} className={`mb-8 md:w-[600px] mx-auto`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tips.map((tip) => (
                        <div key={tip.id} className="bg-white border p-6 rounded-lg"
                        >
                            <img className='h-10 w-10 mb-4' src= {tip.icon}alt="" />
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
                <Button className={`py-2 px-6 rounded mt-14`} text={` Get More Tips`}/>
            </div>
        </section>
    );
};

export default ResumeTips;
