import React from "react";
import LeftSite from "./LeftSite";
import LeftSite1 from "./LeftSiteBar/LeftSite1";
import RightSite from "./RightSte/RightSite";

const MainChatBox = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div>
          <LeftSite1 />
        </div>
        <div className="w-[30%] bg-slate-600 p-2 items-center">
          <LeftSite />
        </div>
        <div className="w-[70%] bg-slate-900">
          <RightSite />
        </div>
      </div>
    </div>
  );
};

export default MainChatBox;
