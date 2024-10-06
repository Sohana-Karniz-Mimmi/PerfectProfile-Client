import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Template1 from '../../Components/TemplateSection/Template1';
import Template2 from '../../Components/TemplateSection/Template2';
import ShareResumeNavbar from './ShareResumeNavbar';

const ResumeViewer = () => {
    const { link } = useParams();
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/resume/${link}`);
                if (!response.ok) {
                    throw new Error('Resume not found');
                }
                const data = await response.json();
                setResumeData(data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchResumeData();
    }, [link]);

    const templateID = resumeData?.userData?.templateItem
    const showResume = resumeData?.userData

    const renderTemplate = (templateID) => {
        if (templateID === "template1") {
            return <Template1 userData={showResume} />;
        }
        if (templateID === "template2") {
            return <Template2 userData={showResume} />;
        }
    }

    return (
        <div>
            <ShareResumeNavbar />
            <div className='py-12' >{renderTemplate(templateID)}</div>
        </div>
    );
};

export default ResumeViewer;
