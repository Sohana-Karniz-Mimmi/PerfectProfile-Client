
const Template1 = ({data}) => {
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
      jobTitle,
      languages,
      extraCurricularActivities,
    } = data;
    return (
        <div className="w-[35rem] h-[41rem] mx-auto  bg-slate-50 shadow-2xl rounded-lg  ">
        <div className="">
              {/* Header - Personal Info */}
              <header className="text-center  bg-blue-200  py-4">
             <h1 className="text-2xl font-bold text-blue-900 uppercase">{name}</h1>
             <p className="font-semibold uppercase">{jobTitle}</p>
             <p className="font-medium text-sm ">{email} | {phone} | {address}</p>
           </header>
     <div className="px-10 py-3 ">
      
           {/* Career Objective */}
           {careerObjective && (
             <section className="mb-1">
               <h2 className=" uppercase text-sm  font-bold text-blue-900 border-b border-blue-950 ">Career Objective</h2>
               <p className="mt-1 text-sm">{careerObjective}</p>
             </section>
           )}
     
           {/* skills */}
           {skills && skills.length > 0 && (
             <section className="mb-1">
               <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">skills</h2>
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
             <section className="mb-1">
               <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">Education</h2>
               <ul className=" text-sm ">
                 {education.map((edu, index) => (
                   <li key={index}>
                     <h3 className=" font-semibold">{edu.degree} - {edu.institution} <span className="text-gray-500">({edu.year})</span></h3>
                   </li>
                 ))}
               </ul>
             </section>
           )}
     
           {/* Certifications */}
           {certifications && certifications.length > 0 && (
             <section className="mb-1">
               <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">Certifications</h2>
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
             <section className="mb-1">
               <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">Work Experience</h2>
               <ul className="mt-1 text-sm ">
                 {workExperience.map((exp, index) => (
                   <li key={index}>
                     <h3 className=" font-semibold">{exp.jobTitle} - {exp.company} <span className="text-gray-500">({exp.years})</span> </h3>
                     <p className="text-gray-600  text-sm">{exp.description}</p>
                   </li>
                 ))}
               </ul>
             </section>
           )}
     
           {/* Extra Curricular Activities */}
           {extraCurricularActivities && extraCurricularActivities.length > 0 && (
             <section className="mb-1">
               <h2 className=" font-bold text-sm uppercase text-blue-900 border-b border-blue-950 ">Extra Curricular Activities</h2>
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
             <section className="mb-1">
               <h2 className=" uppercase text-sm font-bold text-blue-900 border-b border-blue-950 ">language</h2>
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
         </div>
    );
};

export default Template1;