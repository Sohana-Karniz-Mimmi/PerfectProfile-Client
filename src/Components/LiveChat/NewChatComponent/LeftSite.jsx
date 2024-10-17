import Search from "./LeftSiteBar/Search";
import User from "./LeftSiteBar/User";
const LeftSite = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white my-5 ">Chats</h1>
      <Search />
      <hr className="my-5" />
      <div
        className="flex flex-col gap-6  overflow-y-auto "
        style={{ maxHeight: "calc(80vh" }}
      >
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default LeftSite;
