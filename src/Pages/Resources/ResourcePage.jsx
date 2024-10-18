import Container from "../../Shared/Container";
import Categories from "./Categories";
import EditorPicks from "./EditorPicks";
import HeadingResource from "./HeadingResource";
import ResentBlog from "./ResentBlog";

const ResourcePage = () => {
  return (
    <div>
      <div>
        <HeadingResource />
      </div>
      <div>
        <Container>
          <EditorPicks />
        </Container>
      </div>
      <div>
        <Container>
          <ResentBlog />
        </Container>
      </div>
      <div>
        <Container></Container>
        <Categories />
      </div>
    </div>
  );
};

export default ResourcePage;
