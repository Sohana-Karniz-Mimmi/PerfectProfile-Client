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

const HeadingCard = () => {
  const user = useSelector((state) => state?.users?.totalUsers);
  const dispatch = useDispatch();
  const templates = useSelector(selectTemplates); // Access templates from Redux store

  const users = useSelector(selectAllUsersState);

  // Count the occurrences of each productName
  const userCounts = users.reduce(
    (acc, user) => {
      acc[user.productName] = (acc[user.productName] || 0) + 1;
      return acc;
    },
    { standard: 0, free: 0, premium: 0 }
  );

  const totalPremiumUser = userCounts.standard + userCounts.premium;

  useEffect(() => {
    dispatch(fetchPredefinedTemplates()); // Fetch predefined templates when component loads
  }, [dispatch]);
  console.log(templates);

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 w-full h-full py-10 rounded-lg text-neutral-700 flex-wrap">
        {/* card 1 */}
        <div className="bg-white min-h-16 rounded-lg p-5 font-lora"
          style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-lg text-balck/70 font-bold">Total User</h3>

              <p className="text-3xl font-semibold md:text-2xl">{user}</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  opacity="0.21"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
                  fill="#8280FF"
                />
                <path
                  opacity="0.587821"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.6667 23.3333C20.6667 26.2789 23.0545 28.6667 26 28.6667C28.9455 28.6667 31.3333 26.2789 31.3333 23.3333C31.3333 20.3878 28.9455 18 26 18C23.0545 18 20.6667 20.3878 20.6667 23.3333ZM34 28.6667C34 30.8758 35.7909 32.6667 38 32.6667C40.2091 32.6667 42 30.8758 42 28.6667C42 26.4575 40.2091 24.6667 38 24.6667C35.7909 24.6667 34 26.4575 34 28.6667Z"
                  fill="#8280FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.9778 31.3333C19.6826 31.3333 14.5177 34.5687 14.0009 40.9323C13.9727 41.2789 14.6356 42 14.97 42H36.9956C37.9972 42 38.0128 41.194 37.9972 40.9333C37.6065 34.3909 32.3616 31.3333 25.9778 31.3333ZM45.2746 42L40.1333 42C40.1333 38.9988 39.1417 36.2291 37.4683 34.0008C42.0103 34.0505 45.7189 36.3469 45.998 41.2C46.0092 41.3955 45.998 42 45.2746 42Z"
                  fill="#8280FF"
                />
              </svg>
            </div>
          </div>
          <p className="flex justify-center items-center gap-1 text-lg pt-7 font-semibold">
            <IoTrendingUpOutline className="text-secondary" />{" "}
            <span className="text-secondary font-bold">8.07%</span> Grouth From
            Yesterday{" "}
          </p>
        </div>
        {/* card 2 */}
        <div className="bg-white min-h-16 rounded-lg p-5 font-lora"
          style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-lg text-balck/70 font-bold">Premium User</h3>
              <p className="text-3xl font-semibold">{totalPremiumUser}</p>
            </div>
            <div>
              <GrMoney className="w-[60px] h-[55px] text-[#8280FF]" />
            </div>
          </div>
          <p className="flex justify-center items-center gap-1 text-lg pt-7 font-semibold">
            <IoTrendingUpOutline className="text-secondary" />{" "}
            <span className="text-secondary font-bold">8.07%</span> Grouth From
            Yesterday{" "}
          </p>
        </div>
        {/* card 3 */}
        <div className="bg-white min-h-16 rounded-lg p-5 font-lora"
          style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-3">
              <h3 className="text-lg text-balck/70 font-bold">
                Total Template
              </h3>
              <p className="text-3xl font-semibold">{templates?.length}</p>
            </div>
            <div>
              <GrTemplate className="w-[60px] h-[55px] text-[#8280FF]" />
            </div>
          </div>
          <p className="flex justify-center items-center gap-1 text-lg pt-7 font-semibold">
            Included <span className="text-secondary font-bold">Premium</span>{" "}
            Templates
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 flex items-center justify-center w-full border">
        <HeadingChart />
      </div>
      <div className="bg-white rounded-lg p-5 flex items-center justify-center w-full border mt-10 mb-10">
        <PieChartForUser />
      </div>
    </section>
  );
};

export default HeadingCard;
