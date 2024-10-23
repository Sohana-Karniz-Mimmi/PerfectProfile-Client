import { useEffect, useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";
import invoiceImg from "../assets/invoice/Letter Head.png";
const PurchaseHistory = () => {
  const [payments, setPayments] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axiosPublic.get(
          `/payment-transaction/${user?.email}`
        );
        setPayments(response.data);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPayment();
  }, [axiosPublic]);

  const totalAmount = payments.reduce((total, payment) => {
    return total + parseFloat(payment?.amount || 0);
  }, 0);

  return (
    <>
      <Helmet>
        <title>Invoice - PerfectProfile</title>
      </Helmet>
      <div
        className="max-w-7xl mx-auto my-10 p-4 md:p-6 bg-white shadow-lg border border-gray-300 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${invoiceImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
            PERFECT <span className="text-primary">PROFILE</span>
          </h1>
          <div className="text-right text-sm">
            <p>Invoice Number: INV-01234</p>
            <p>Date: October 24, 2024</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-4">
          {/* Bill To Section */}
          <div>
            <h2 className="text-lg font-bold">BILL TO:</h2>
            <p>Studio Shodwe Architecture</p>
            <p>123 Anywhere St.,</p>
            <p>Any City, ST 12345</p>
          </div>
          {/* Payment Information */}
          <div className="text-right text-sm">
            <h2 className="text-lg font-bold">PAYMENT INFORMATION:</h2>
            <p>Bank: Bikash, Mobile Banking</p>
            <p>Name: Md. Rokonuzzaman Sayem</p>
            <p>Account: 0123 4567 8901</p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 md:px-4 py-2">SL</th>
                <th className="px-2 md:px-4 py-2">Customer Name</th>
                <th className="px-2 md:px-4 py-2">Email</th>
                <th className="px-2 md:px-4 py-2">Product Name</th>
                <th className="px-2 md:px-4 py-2">Transaction Id</th>
                <th className="px-2 md:px-4 py-2">Status</th>
                <th className="px-2 md:px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, index) => (
                <tr key={payment.tran_id} className="border-t">
                  <td className="px-2 md:px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-2 md:px-4 py-2">{payment.cus_name}</td>
                  <td className="px-2 md:px-4 py-2">{payment.cus_email}</td>
                  <td className="px-2 md:px-4 py-2">{payment.product_name}</td>
                  <td className="px-2 md:px-4 py-2">{payment?.tran_id}</td>
                  <td className="px-2 md:px-4 py-2">{payment.status}</td>
                  <td className="px-2 md:px-4 py-2">${payment?.amount}</td>
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
