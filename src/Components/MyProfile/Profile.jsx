import BeforeEditingProfile from "./BeforeEditingProfile";
import SitebarProfileRoute from "./SitebarProfileRoute";

const Profile = () => {
  return (
    <div>
      <div className=" flex  w-full ">
        {" "}
        <div className="w-1/6 p-4 md:p-8 min-h-screen bg-slate-100 ">
          <SitebarProfileRoute />
        </div>
        <div className=" p-4  bg-slate-50 shadow-white w-4/6">
          <div className="flex justify-between mt-4 text-4xl font-montserrat">
            <h1>My Profile</h1>
          </div>
          <hr className="border-dashed my-6 border-slate-600" />
          <div>
            <BeforeEditingProfile />
          </div>
        </div>
        <div className="w-1/6 bg-slate-50"></div>
      </div>
    </div>
  );
};

export default Profile;
