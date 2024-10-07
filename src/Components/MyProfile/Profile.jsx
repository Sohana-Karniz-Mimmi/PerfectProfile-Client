import Container from "../../Shared/Container";
import BeforeEditingProfile from "./BeforeEditingProfile";

const Profile = () => {
  return (
    <div>
      {/* <div className=" flex  gap-8 w-full justify-center "> */}
      {/* <div className="w-1/6 p-4 md:p-8 min-h-screen ">
          <h1 className="text-center ">This is site bar</h1>
        </div> */}
      <Container>
        <div className=" p-4 border">
          <div className="flex justify-between mt-4 text-4xl font-montserrat">
            <h1>My Profile</h1>
          </div>
          <hr className="border-dashed my-6 border-slate-600" />
          <div>
            <BeforeEditingProfile />
          </div>
        </div>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default Profile;
