import React from 'react';;
import MyResumeBanner from './MyResumeBanner';
import Container from '../../Shared/Container';
import ManageResume from './ManageResume';

const MyResume = () => {
    return (
        <Container>
            <MyResumeBanner/>
            <ManageResume />
        </Container>
    );
};

export default MyResume;