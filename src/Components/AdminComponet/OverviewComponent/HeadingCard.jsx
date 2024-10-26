import { IoTrendingUpOutline } from "react-icons/io5";
import { GrMoney, GrTemplate } from "react-icons/gr";
import HeadingChart from "./HeadingChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import bankCard from "../../../assets/bankcard.png";

import {
  fetchPredefinedTemplates,
  selectTemplates,
} from "../../../store/Features/predefinedTemplates/templateSlice";
import PieChartForUser from "./PieChartForUser";
import { selectAllUsersState } from "../../../store/Features/user/userSlice";
import { FaUsers } from "react-icons/fa6";
import { LuLayoutTemplate } from "react-icons/lu";
import { RiVipCrownLine } from "react-icons/ri";
import TotalEarning from "./TotalEarning";
import { HiTemplate } from "react-icons/hi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const HeadingCard = () => {
  const user = useSelector((state) => state?.users?.totalUsers);
  const dispatch = useDispatch();
  const templates = useSelector(selectTemplates); // Access templates from Redux store

  const users = useSelector(selectAllUsersState);

  // Count the occurrences of each productName
  const userCounts = users?.reduce(
    (acc, user) => {
      acc[user?.productName] = (acc[user?.productName] || 0) + 1;
      return acc;
    },
    { standard: 0, free: 0, premium: 0 }
  );

  const totalPremiumUser = userCounts?.standard + userCounts?.premium;

  useEffect(() => {
    dispatch(fetchPredefinedTemplates()); // Fetch predefined templates when component loads
  }, [dispatch]);
  // console.log(templates);
  // console.log(users);

  return (
    <section className="">
      {/* <div className="flex flex-col xl:flex-row justify-between gap-5 h-full rounded-lg text-neutral-700 "> */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 h-full rounded-lg text-neutral-700 ">
        {/* card 1 */}


        <div
          className=" p-5 font-lora flex flex-col justify-center gap-8 rounded-2xl bg-white"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="font-roboto flex items-center justify-between ">
            <div className="space-y-2">
              <h3 className="text-xl text-black/80 font-bold">Total User</h3>
            </div>
            <button className="bg-violet-100/60 p-3 rounded-full">
              <FaUsers className="text-violet-500 text-xl" />
            </button>

          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold md:text-4xl font-roboto">{user}</p>
            <p className="flex items-center gap-1 font-semibold px-2 bg-[#FE784A]/20 rounded-full h-5">
              <IoTrendingUpOutline className="text-lg p-0 text-[#FE784A]" />
              <span className="p-0 text-[#FE784A] text-xs"> 8.07%</span>
            </p>{" "}
          </div>
        </div>

        {/* card 2 */}
        {/* <div
          className=" p-5 font-lora flex flex-col justify-center gap-8"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className=" font-lora flex justify-between">
            <div className="space-y-2">
              <h3 className="text-lg text-balck/80 font-bold">Premium User</h3>
              <p className="!text-3xl font-semibold md:text-2xl">
                {totalPremiumUser}
              </p>
            </div>
            <div>
              <RiVipCrownLine className="text-5xl text-primary" />
            </div>
          </div>
          <div className="">
            <p className="flex items-center gap-1 md:text-lg text-base font-semibold">
              <IoTrendingUpOutline className="text-primary font-extrabold text-2xl" />{" "}
              <span className="text-primary font-bold">8.07%</span> Growth From
              Yesterday{" "}
            </p>{" "}
          </div>
        </div> */}


        <div
          className=" p-5 font-lora flex flex-col justify-center gap-8 rounded-2xl bg-white"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="font-roboto flex items-center justify-between ">
            <div className="space-y-2">
              <h3 className="text-xl text-black/80 font-bold">Premium User</h3>
            </div>
            <button className=" bg-[#00C8AA]/15 p-3 rounded-full">
              <RiVipCrownLine  className="text-[#00C8AA] text-xl" />
            </button>

          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold md:text-4xl font-roboto">{totalPremiumUser}</p>
            <p className="flex items-center gap-1 font-semibold px-2 bg-[#00C8AA]/20 rounded-full h-5">
              <IoTrendingUpOutline className="text-lg p-0 text-[#2CACD5]" />
              <span className="p-0 text-[#00C8AA] text-xs"> 8.07%</span>
            </p>{" "}
          </div>
        </div>

        {/* card 3 */}
        <div
          className=" p-5 font-lora flex flex-col justify-center gap-8 rounded-2xl bg-white"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="font-roboto flex items-center justify-between ">
            <div className="space-y-2">
              <h3 className="text-xl text-black/80 font-bold">Total Templates</h3>
            </div>
            <button className="bg-[#FE784A]/15 p-3 rounded-full">
              <HiTemplate  className="text-[#FE784A] text-xl" />
            </button>

          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold md:text-4xl font-roboto">{templates?.length}</p>
            <p className="flex items-center gap-1 font-semibold px-2 bg-[#FE784A]/20 rounded-full h-5">
              <IoTrendingUpOutline className="text-lg p-0 text-[#FE784A]" />
              <span className="p-0 text-[#FE784A] text-xs"> 8.07%</span>
            </p>{" "}
          </div>
        </div>
        {/* <div
          className="p-5 font-lora flex flex-col justify-center gap-8 "
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className=" font-lora flex justify-between">
            <div className="space-y-2">
              <h3 className="text-lg text-balck/80 font-bold">
                Total Templates
              </h3>
              <p className="!text-3xl font-semibold md:text-2xl">
                {templates?.length}
              </p>
            </div>
            <div>
              <LuLayoutTemplate className="text-5xl text-violet-500" />
            </div>
          </div>
          <div className="">
            <p className="flex items-center gap-1 md:text-lg text-base font-semibold">
              {" "}
              Include Premium Templates{" "}
            </p>{" "}
          </div>
        </div> */}

        {/* card 4 */}
       
        <div
          className=" p-5 font-lora flex flex-col justify-center gap-8 rounded-2xl bg-white"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="font-roboto flex items-center justify-between ">
            <div className="space-y-2">
              <h3 className="text-xl text-black/80 font-bold">Earnings</h3>
            </div>
            <button className=" bg-[#2CACD5]/15 p-3 rounded-full">
              <FaMoneyCheckDollar  className="text-[#2CACD5] text-xl" />
            </button>

          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold md:text-4xl font-roboto">{user}</p>
            <p className="flex items-center gap-1 font-semibold px-2 bg-[#2CACD5]/20 rounded-full h-5">
              <IoTrendingUpOutline className="text-lg p-0 text-[#2CACD5]" />
              <span className="p-0 text-[#2CACD5] text-xs"> 8.07%</span>
            </p>{" "}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1  xl:grid-cols-5 gap-10 ">
        <div
          className="bg-white rounded-lg p-5 mt-6 flex items-center justify-center w-full xl:col-span-3 "
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <HeadingChart />
        </div>
        <div className="xl:col-span-2">
          <div
            className="bg-white rounded-lg p-5 mt-6 flex items-center justify-center w-full"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <PieChartForUser />
          </div>
          {/* <div
            className="rounded-lg p-5 mt-6 flex items-center  w-full"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", background: `url(${bankCard})`, backgroundPosition: "top", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          >
            <TotalEarning />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeadingCard;
