import BeforeEditingProfile from "./BeforeEditingProfile";

const Profile = () => {
  return (
    <div>
      <div className=" flex  gap-8 w-full justify-center">
        <div className="w-1/6 p-4 md:p-8 min-h-screen bg-secondary">
          <h1 className="text-center ">This is site bar</h1>
        </div>
        <div className="w-1/2 p-4  bg-primary">
          <div className="flex justify-between mt-4 text-white">
            <h1>My Profile</h1>
          </div>
          <hr className="border-dashed my-6" />
          <div>
            <BeforeEditingProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
