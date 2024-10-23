import { Helmet } from "react-helmet-async";
import Container from "../../Shared/Container";
import Careers from "./Careers";
import Categories from "./Categories";
import EditorPicks from "./EditorPicks";
// import HeadingResource from "./HeadingResource";
import InterviewsResources from "./InterviewsResources";
import JobResources from "./JobResources";
import ResentBlog from "./ResentBlog";
import ResourceBanner from "./ResourceBanner";
import Resumes from "./Resumes";
import TopResume from "./TopResume";

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
      <div>
        <EditorPicks />
      </div>
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
