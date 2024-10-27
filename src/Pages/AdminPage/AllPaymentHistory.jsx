import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPayments,
  setCurrentPage,
} from "../../store/Features/Payment/PaymentSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PaymentHistoryDataRow from "./PaymentHistoryDataRow";
import { Helmet } from "react-helmet-async";

const AllPaymentHistory = () => {
  const dispatch = useDispatch();
  const { payments, totalPages, currentPage, loading, error } = useSelector(
    (state) => state.payment
  );

  const itemsPerPage = 10; // Or any limit you'd like

  useEffect(() => {
    dispatch(fetchPayments({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage]);

  // Function to handle page change
  const handlePaginationButton = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page)); // Update the current page in Redux
      dispatch(fetchPayments({ page, limit: 10 })); // Fetch new payments for the selected page
    }
  };

  // Create an array of page numbers to map over for buttons
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <section className="container mx-auto md:p-6 p-2 md:mt-0 mt-20 ">
      <Helmet>
        <title>Purchase History - Perfect Profile</title>
      </Helmet>

      <div className="flex items-center gap-x-3">
        <h2 className="2xl:text-2xl text-xl text-gray-800 font-bold font-lora ">Purchase History</h2>
      </div>

      <div className="pb-8 px-2 md:px-0 pt-2.5">
        <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead className="bg-gray-50 ">
                <tr className=" text-sm">
                  <th scope='col'
                    className='text-center px-4 py-3.5  border-b border-gray-200 text-gray-800 xl:text-lg text-sm  uppercase font-lora font-bold'
                  >
                    Serial
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm  uppercase font-lora font-bold"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm uppercase font-lora font-bold"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800 xl:text-lg text-sm uppercase font-lora font-bold text-center"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  xl:text-lg text-sm uppercase font-lora font-bold text-center"
                  >
                    Transaction
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-4 py-3.5  border-b border-gray-200 text-gray-800  text-center xl:text-lg text-sm uppercase font-lora font-bold"
                  >
                    Subscription
                  </th>


                </tr>
              </thead>
              <tbody className="font-montserrat">
                {payments?.map((payment, indx) => (
                  <PaymentHistoryDataRow
                    key={payment?._id}
                    payment={payment}
                    indx={indx}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-primary rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-secondary hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <IoIosArrowBack />
          </div>
        </button>

        {/* Number of page */}
        <div className="hidden lg:flex">
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${currentPage === btnNum ? "bg-primary text-white" : ""
                } px-4 py-2 mx-1 border rounded-full sm:inline hover:bg-secondary hover:text-white hidden`}
            >
              {btnNum}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-white bg-primary rounded-full hover:bg-secondary disabled:cursor-not-allowed disabled:bg-gray-200"
        >
          <div className="flex items-center -mx-1">
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    </section>
  );
};

export default AllPaymentHistory;
