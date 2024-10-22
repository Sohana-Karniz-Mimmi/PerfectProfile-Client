import { Helmet } from "react-helmet-async";
import AddConsultant from "./AddConsultant";

const ManageConsultants = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Manage Users</title>
      </Helmet>
      <div className="flex items-center pb-2 gap-x-3">
        <h2 className="text-3xl text-primary mx-auto font-bold font-lora ">
          Manage Users
        </h2>
        
      </div>

      <AddConsultant></AddConsultant>
    </div>
  );
};

export default ManageConsultants;
