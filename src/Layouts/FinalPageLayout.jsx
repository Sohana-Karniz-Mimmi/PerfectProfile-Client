import React from 'react';
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';

const FinalPageLayout = () => {
    return (
      <div className="">
        <div className="min-h-screen 2xl:max-w-[2150px] mx-auto">
          
        </div>

        <div>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default FinalPageLayout;