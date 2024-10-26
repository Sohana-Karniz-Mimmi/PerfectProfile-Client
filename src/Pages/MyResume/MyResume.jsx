import React, { lazy } from "react";
const MyResumeBanner = lazy(() => import("./MyResumeBanner"));
const Container = lazy(() => import("../../Shared/Container"));
const ManageResume = lazy(() => import("./ManageResume"));
const ResumeTips = lazy(() => import("./ResumeTips"));
const MyResumeConsultationBanner = lazy(() =>
  import("./MyResumeConsultationBanner")
);

import { Helmet } from "react-helmet-async";

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
