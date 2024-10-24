import React from 'react';;
import MyResumeBanner from './MyResumeBanner';
import Container from '../../Shared/Container';
import ManageResume from './ManageResume';
import ResumeTips from './ResumeTips';
import InteractiveTutorials from './InteractiveTutorials';

const MyResume = () => {
    return (
        <>
            <Container>
                <MyResumeBanner />
                <ManageResume />
            </Container>
            <ResumeTips />
          
        </>
    );
};

export default MyResume;