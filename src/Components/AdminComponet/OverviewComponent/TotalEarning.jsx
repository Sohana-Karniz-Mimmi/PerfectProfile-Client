import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentData } from "../../../store/Features/Payment/PaymentSlice";
import bankCard from "../../../assets/bankcard.png";

const TotalEarning = () => {
  const dispatch = useDispatch();

  const { totalAmount, status, error } = useSelector((state) => state.payment);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPaymentData()); // Fetch payment data when the component loads
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="rounded-lg p-5 font-lora min-h-[15vh]" >
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
