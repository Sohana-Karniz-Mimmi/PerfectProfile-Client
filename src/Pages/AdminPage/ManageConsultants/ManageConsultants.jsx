import { Helmet } from "react-helmet-async";
import AddConsultant from "./AddConsultant";
import Container from "../../../Shared/Container";

const ManageConsultants = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Manage Consultants</title>
      </Helmet>
      <div className="flex items-center">
        <h2 className="text-3xl text-primary mx-auto font-bold font-lora ">
          Manage Consultants
        </h2>
        
      </div>

      <AddConsultant></AddConsultant>
    </div>
  );
};

export default ManageConsultants;
