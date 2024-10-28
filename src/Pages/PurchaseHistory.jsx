import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import foundImg from "../assets/error/download.jpeg";
const PurchaseHistory = () => {
  const [payments, setPayments] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
    axiosPublic
      .get(`/payment-transaction/${user?.email}`)
      .then((response) => {
        setPayments(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching payment data:", error);
      });
  }, [user, axiosPublic]);

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
      {payments.length > 0 ? (
        <>
          <div className="min-h-screen">
            <div className="max-w-5xl mx-auto my-10 p-4 md:p-6 bg-white border shadow-custom-light">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
                  P<span className="text-primary">P</span>
                </h1>
                <div className="md:text-right text-sm">
                  <p>Invoice Number: INV-01234</p>
                  <p>Date: October 24, 2024</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-lg font-bold">BILL TO:</h2>
                  <span>{user?.email}</span>
                  <p>Studio Shodwe Architecture</p>
                  <p>123 Anywhere St.,</p>
                  <p>Any City, ST 12345</p>
                </div>

                <div className="text-left md:text-right text-sm">
                  <h2 className="text-lg font-bold">PAYMENT INFORMATION:</h2>
                  <p>Bank: Bikash, Mobile Banking</p>
                  <p>
                    Name: <span>{user?.displayName}</span>
                  </p>
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
                    {payments.map((payment, index) => (
                      <tr
                        key={payment.tran_id}
                        className="border-t text-center"
                      >
                        <td className="px-2 md:px-4 py-2">{index + 1}</td>
                        <td className="px-2 md:px-4 py-2">
                          {payment.cus_name}
                        </td>
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
          </div>
        </>
      ) : (
        // Message when no purchase data is found
        <div className="my-8 flex flex-col items-center justify-center  ">
          <div>
            <img className="" src={foundImg} alt="" />
          </div>
          <div>
            <h2 className="text-5xl text-primary font-bold mb-4 text-center font-lora">
              No purchases yet!
            </h2>
            <p className="text-black mb-4 text-center">
              Explore our premium templates and make your first purchase to get
              started.
            </p>
            <Link
              to={`/pricing`}
              className="text-center items-center justify-center mx-auto flex flex-col"
            >
              <button className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary">
                Purchase
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseHistory;
