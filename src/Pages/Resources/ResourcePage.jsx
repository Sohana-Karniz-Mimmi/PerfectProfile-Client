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
        <EditorPicks />
      </div>
      <div>
        <ResentBlog />
      </div>
    </div>
  );
};

export default ResourcePage;
