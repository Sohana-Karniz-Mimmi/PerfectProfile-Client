import React, { useEffect } from "react";
import UserTable from "../../Components/AdminComponet/AllUser/UserTable";


const AllUserPage = () => {


  return (
    <div className="p-5">
      <h1 className="font-bold text-5xl font-nunito py-10">All User</h1>
      <div className="bg-white p-3">
        <UserTable />
      </div>
    </div>
  );
};

export default AllUserPage;
