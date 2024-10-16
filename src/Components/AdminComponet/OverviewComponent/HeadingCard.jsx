import { IoTrendingUpOutline } from "react-icons/io5";
import { GrMoney, GrTemplate } from "react-icons/gr";
import HeadingChart from "./HeadingChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPredefinedTemplates,
  selectTemplates,
} from "../../../store/Features/predefinedTemplates/templateSlice";
import PieChartForUser from "./PieChartForUser";
import { selectAllUsersState } from "../../../store/Features/user/userSlice";
import { FaCrown, FaUsers } from "react-icons/fa6";
import { LuLayoutTemplate } from "react-icons/lu";
import { RiVipCrownLine } from "react-icons/ri";

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
  console.log(templates);
  console.log(users);

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-16 gap-8  h-full rounded-lg text-neutral-700">
        {/* card 1 */}
        <div
          className="bg-gradient-to-r from-secondary/90 to-white  md:min-h-72 min-h-52 lg:w-1/3 w-full rounded-lg p-5 font-lora flex flex-col justify-between gap-8"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className=" font-lora flex justify-between">
            <div className="space-y-2">
              <h3 className="text-lg text-balck/80 font-bold">Total User</h3>
              <p className="!text-3xl font-semibold md:text-2xl">{user}</p>
            </div>
            <div>
              <FaUsers className="text-5xl text-secondary" />
            </div>
          </div>
          <div className="">
            <p className="flex items-center gap-1 md:text-lg text-base font-semibold">
              <IoTrendingUpOutline className="text-white font-extrabold text-2xl" />{" "}
              <span className="text-white font-bold">8.07%</span> Growth From
              Yesterday{" "}
            </p>{" "}
          </div>
        </div>
        {/* card 2 */}
        <div
          className="bg-gradient-to-r from-primary/90 to-white md:min-h-72 min-h-52 lg:w-1/3 w-full rounded-lg p-5 font-lora flex flex-col justify-between gap-8"
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
              <IoTrendingUpOutline className="text-white font-extrabold text-2xl" />{" "}
              <span className="text-white font-bold">8.07%</span> Growth From
              Yesterday{" "}
            </p>{" "}
          </div>
        </div>
        {/* card 3 */}
        <div
          className="bg-gradient-to-r from-violet-500 to-white md:min-h-72 min-h-52 lg:w-1/3 w-full  rounded-lg p-5 font-lora flex flex-col justify-between gap-8"
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
        </div>
      </div>
      <div
        className="bg-white rounded-lg p-5 mt-6 flex items-center justify-center w-full "
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <HeadingChart />
      </div>
      <div
        className="bg-white rounded-lg p-5 mt-6 flex items-center justify-center w-full  "
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <PieChartForUser />
      </div>
    </section>
  );
};

export default HeadingCard;
