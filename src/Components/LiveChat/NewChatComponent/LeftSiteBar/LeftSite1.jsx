import { CiLogout } from "react-icons/ci";

const LeftSite1 = () => {
  return (
    <div className="h-full flex flex-col items-center justify-between">
      {/* Empty space at the top */}
      <div className="flex-grow"></div>

      {/* Logout and Search button at the bottom */}
      <div className="mb-4 flex flex-col items-center">
        <div></div>
        <div className="px-1 py-1">
          <button className="text-4xl p-2 hover:bg-slate-300 rounded-lg">
            <CiLogout className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSite1;
