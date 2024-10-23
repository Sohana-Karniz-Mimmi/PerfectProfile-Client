import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayments } from "../../../store/Features/Payment/PaymentSlice";

const TotalEarning = () => {
  const dispatch = useDispatch();

  const { totalAmount, status, error, currentPage } = useSelector(
    (state) => state.payment
  );

  useEffect(() => {
    dispatch(fetchPayments({ page: currentPage, limit: 10 })); // Fetch payment data when the component loads
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  console.log("totalamount", totalAmount);
  
  return (
    <div className="rounded-lg p-5 font-lora min-h-[15vh]">
      <div className=" font-lora flex justify-between">
        <div className="space-y-2">
          <h3 className="text-lg text-balck/80 font-bold">Total Income</h3>
          <p className="!text-3xl font-semibold md:text-2xl">${totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalEarning;
