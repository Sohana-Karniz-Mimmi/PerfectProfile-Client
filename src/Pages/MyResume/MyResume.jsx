import React from 'react';;
import MyResumeBanner from './MyResumeBanner';
import Container from '../../Shared/Container';
import ManageResume from './ManageResume';
import ResumeTips from './ResumeTips';
import InteractiveTutorials from './InteractiveTutorials';
import MyResumeConsultationBanner from './MyResumeConsultationBanner';
import { Helmet } from 'react-helmet-async';

const MyResume = () => {
    return (
        <>

            <Helmet>
                <title>My Resume - PerfectProfile</title>
            </Helmet>

            <Container>
                <MyResumeBanner />
                <ManageResume />
            </Container>
            <ResumeTips />
            <Container>
                <MyResumeConsultationBanner />
            </Container>
        </>
    );
};

export default MyResume;