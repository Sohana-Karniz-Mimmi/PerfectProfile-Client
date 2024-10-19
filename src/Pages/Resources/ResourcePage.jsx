import Container from "../../Shared/Container";
import Careers from "./Careers";
import Categories from "./Categories";
import EditorPicks from "./EditorPicks";
import HeadingResource from "./HeadingResource";
import InterviewsResources from "./InterviewsResources";
import JobResources from "./JobResources";
import ResentBlog from "./ResentBlog";
import Resumes from "./Resumes";

const ResourcePage = () => {
  return (
    <div>
      <div>
        <HeadingResource />
      </div>
      <div>
        <Container></Container>
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
    </div>
  );
};

export default ResourcePage;
