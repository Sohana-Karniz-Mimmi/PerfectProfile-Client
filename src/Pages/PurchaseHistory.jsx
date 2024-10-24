import { useEffect, useState } from "react";
// import useAxiosPublic from "../Hook/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";

const PurchaseHistory = () => {
  const [payments, setPayments] = useState([]);
  // const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/payment-transaction/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPayments(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching payment data:", error);
      });
  }, [user]);

  console.log(payments);

  const totalAmount = Array.isArray(payments)
    ? payments.reduce((total, payment) => {
        return total + parseFloat(payment?.amount || 0);
      }, 0)
    : 0;

  return (
    <>
      <Helmet>
        <title>Invoice - PerfectProfile</title>
      </Helmet>
      <div className="max-w-5xl mx-auto my-10 p-4 md:p-6 bg-white shadow-lg border border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
            PERFECT <span className="text-primary">PROFILE</span>
          </h1>
          <div className="text-right text-sm">
            <p>Invoice Number: INV-01234</p>
            <p>Date: October 24, 2024</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">BILL TO:</h2>
            <p>Studio Shodwe Architecture</p>
            <p>123 Anywhere St.,</p>
            <p>Any City, ST 12345</p>
          </div>

          <div className="text-right text-sm">
            <h2 className="text-lg font-bold">PAYMENT INFORMATION:</h2>
            <p>Bank: Bikash, Mobile Banking</p>
            <p>Name: Md.Rokonuzzaman Sayem</p>
            <p>Account: 0123 4567 8901</p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="font-lora">
              <tr className="bg-gray-100">
                <th className="px-2 md:px-4 py-2">SL</th>
                <th className="px-2 md:px-4 py-2">Customer Name</th>
                <th className="px-2 md:px-4 py-2">Product Name</th>
                <th className="px-2 md:px-4 py-2 lg:table-cell">
                  Transaction Id
                </th>
                <th className="px-2 md:px-4 py-2 md:table-cell">Price</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(payments) &&
                payments.map((payment, index) => (
                  <tr key={payment.tran_id} className="border-t text-center">
                    <td className="px-2 md:px-4 py-2">{index + 1}</td>
                    <td className="px-2 md:px-4 py-2">{payment.cus_name}</td>
                    <td className="px-2 md:px-4 py-2">
                      {payment.product_name}
                    </td>
                    <td className="px-2 md:px-4 py-2 lg:table-cell">
                      {payment.tran_id}
                    </td>
                    <td className="px-2 md:px-4 py-2 md:table-cell">
                      {payment.amount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Total Section */}
        <div className="mt-6 flex justify-between">
          <div></div>
          <div className="text-right">
            <div className="flex justify-between text-lg md:text-xl font-bold">
              <span>TOTAL:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-8">
          <p className="text-sm font-bold">TERM AND CONDITIONS:</p>
          <p className="text-sm">
            Payment is due 30 days from the invoice date.
          </p>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
