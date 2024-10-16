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
          className="bg-gradient-to-r from-secondary/70 to-white min-h-16 lg:w-1/3 w-full rounded-lg p-5 font-lora"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-lg text-balck/70 font-bold">Total User</h3>

              <p className="text-3xl font-semibold md:text-2xl">{user}</p>
            </div>
            <div>
              <FaUsers className="text-5xl text-secondary" />
            </div>
          </div>
          <p className="flex justify-center items-center gap-1 text-lg pt-7 font-semibold">
            <IoTrendingUpOutline className="text-secondary" />{" "}
            <span className="text-secondary font-bold">8.07%</span> Grouth From
            Yesterday{" "}
          </p>
        </div>
        {/* card 2 */}
        <div
          className="bg-gradient-to-r from-primary/70 to-white min-h-16 lg:w-1/3 w-full rounded-lg p-5 font-lora"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-lg text-balck/70 font-bold">Premium User</h3>
              <p className="text-3xl font-semibold">{totalPremiumUser}</p>
            </div>
            <div>
              <GrMoney className="text-5xl text-primary" />
            </div>
          </div>
          <p className="flex justify-center items-center gap-1 text-lg pt-7 font-semibold">
            <IoTrendingUpOutline className="text-secondary" />{" "}
            <span className="text-secondary font-bold">8.07%</span> Grouth From
            Yesterday{" "}
          </p>
        </div>
        {/* card 3 */}
        <div
          className="bg-gradient-to-r from-violet-400 to-white bg-opacity-70 min-h-16 lg:w-1/3 w-full  rounded-lg p-5 font-lora"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-lg text-balck/70 font-bold">
                Total Template
              </h3>
              <p className="text-3xl font-semibold">{templates?.length}</p>
            </div>
            <div>
              <LuLayoutTemplate className="text-5xl text-violet-500" />
            </div>
          </div>
          <p className="flex justify-center items-center gap-1 text-lg pt-7 font-semibold">
            <FaCrown className="text-primary" />
            {""}
            Included Premium
            Templates{" "}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 mt-6 flex items-center justify-center w-full border">
        <HeadingChart />
      </div>
      <div className="bg-white rounded-lg p-5 mt-6 flex items-center justify-center w-full border mb-10">
        <PieChartForUser />
      </div>
    </section>
  );
};

export default HeadingCard;
