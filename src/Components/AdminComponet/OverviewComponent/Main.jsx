import React from "react";
import HeadingCard from "./HeadingCard";
import UserTrends from "./UserTrends";
import AdminHeader from "./AdminHeader";

const Main = () => {
  return (
    <div className="md:mt-0 mt-14 ">
      <AdminHeader />
      <div className="md:p-6 p-2">
        <HeadingCard />
        <UserTrends />
      </div>
    </div>
  );
};

export default Main;
