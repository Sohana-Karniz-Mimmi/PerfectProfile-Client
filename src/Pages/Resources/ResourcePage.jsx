import { Helmet } from "react-helmet-async";

import { lazy } from "react";

const Container = lazy(() => import("../../Shared/Container"));
const Categories = lazy(() => import("./Categories"));
const InterviewsResources = lazy(() => import("./InterviewsResources"));
const JobResources = lazy(() => import("./JobResources"));
const ResentBlog = lazy(() => import("./ResentBlog"));
const ResourceBanner = lazy(() => import("./ResourceBanner"));
const Resumes = lazy(() => import("./Resumes"));
const TopResume = lazy(() => import("./TopResume"));
const Careers = lazy(() => import("./Careers"));

const ResourcePage = () => {
  return (
    <div>
      <Helmet>
        <title>Resource - PerfectProfile</title>
      </Helmet>
      <div>
        <ResourceBanner />
      </div>
      {/* <div>
        <HeadingResource />
      </div> */}
      {/* <div>
        <EditorPicks />
      </div> */}
      <div>
        <Container></Container>
        <ResentBlog />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Resumes />
      </div>
      <div>
        <Container></Container>
        <InterviewsResources />
      </div>
      <div>
        <JobResources />
      </div>
      <div>
        <Container>
          <Careers />
        </Container>
      </div>
      <div>
        <TopResume />
      </div>
    </div>
  );
};

export default ResourcePage;
