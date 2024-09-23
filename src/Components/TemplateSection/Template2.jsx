import img from '../../assets/medical-assistant-resume-template.svg'
const Template2 = ({data}) => {
    console.log(data);
    const {
      _id,
      name,
      careerObjective,
      email,
      phone,
      address,
      education,
      certifications,
      workExperience,
      skills,
      languages,
      extraCurricularActivities,
    } = data;
    return (
        <div className="w-[35rem] mx-auto  bg-slate-50 shadow-2xl rounded-lg py-10 px-12 ml-10 ">
        <div className="">
              {/* Header - Personal Info */}
              <header className="text-center mb-7 bg-blue-200 rounded-md p-3">
             <h1 className="text-3xl font-bold text-blue-900 uppercase">{name}</h1>
             <p className="font-medium text-sm mt-2">{email} | {phone} | {address}</p>
           </header>
     
           {/* Career Objective */}
           {careerObjective && (
             <section className="mb-2">
               <h2 className=" uppercase font-bold text-blue-900 border-b border-blue-950 ">Career Objective</h2>
               <p className="mt-1 text-sm">{careerObjective}</p>
             </section>
           )}
     
           {/* skills */}
           {skills && skills.length > 0 && (
             <section className="mb-2">
               <h2 className=" uppercase font-bold text-blue-900 border-b border-blue-950 ">skills</h2>
               <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                 {skills.map((skill, index) => (
                   <li key={index} className='pl-2'>
                     <h3 className=" font-semibold inline-block">{skill}</h3>
                   </li>
                 ))}
               </ul>
             </section>
           )}
           {/* Education */}
           {education && education.length > 0 && (
             <section className="mb-2">
               <h2 className=" uppercase font-bold text-blue-900 border-b border-blue-950 ">Education</h2>
               <ul className="mt-1 text-sm ">
                 {education.map((edu, index) => (
                   <li key={index}>
                     <h3 className=" font-semibold">{edu.degree} - {edu.institution} <span className="text-gray-500">({edu.year})</span></h3>
                     <p className="text-gray-600 mt-1 text-sm">{edu.details}</p>
                   </li>
                 ))}
               </ul>
             </section>
           )}
     
           {/* Certifications */}
           {certifications && certifications.length > 0 && (
             <section className="mb-2">
               <h2 className=" uppercase font-bold text-blue-900 border-b border-blue-950 ">Certifications</h2>
               <ul className="mt-1 text-sm space-y-1">
                 {certifications.map((cert, index) => (
                   <li key={index}>
                     <h3 className=" font-semibold">{cert.title} - {cert.institution} <span className="text-gray-500">({cert.year})</span></h3>
                   </li>              ))}
               </ul>
             </section>
           )}
     
           {/* Work Experience */}
           {workExperience && workExperience.length > 0 && (
             <section className="mb-2">
               <h2 className=" font-bold uppercase text-blue-900 border-b border-blue-950 ">Work Experience</h2>
               <ul className="mt-1 text-sm space-y-1">
                 {workExperience.map((exp, index) => (
                   <li key={index}>
                     <h3 className=" font-semibold">{exp.jobTitle} - {exp.company} <span className="text-gray-500">({exp.years})</span> </h3>
                     <p className="text-gray-600 mt-1 text-sm">{exp.description}</p>
                   </li>
                 ))}
               </ul>
             </section>
           )}
     
           {/* Extra Curricular Activities */}
           {extraCurricularActivities && extraCurricularActivities.length > 0 && (
             <section className="mb-2">
               <h2 className=" font-bold uppercase text-blue-900 border-b border-blue-950 ">Extra Curricular Activities</h2>
               <ul className="mt-1 text-sm space-y-1">
               {extraCurricularActivities.map((activityItem, index) => (
           <li key={index} className="text-gray-600">
             <strong>{activityItem.activity}</strong> - {activityItem.description}
           </li>
         ))}
               </ul>
             </section>
           )}

             {/* languages */}
             {languages && languages.length > 0 && (
             <section className="mb-2">
               <h2 className=" uppercase font-bold text-blue-900 border-b border-blue-950 ">language</h2>
               <ul className="mt-1 text-sm  grid grid-cols-2 justify-between list-disc list-inside">
                 {languages.map((language, index) => (
                   <li key={index} className='pl-2'>
                     <h3 className=" font-semibold inline-block">{language}</h3>
                   </li>
                 ))}
               </ul>
             </section>
           )}
        </div>
         </div>
    );
};

export default Template2;