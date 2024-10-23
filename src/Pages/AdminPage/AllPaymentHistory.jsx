import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayments, setCurrentPage } from "../../store/Features/Payment/PaymentSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    <section className="container px-4 mx-auto">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <button className="flex items-center gap-x-2">
                          <span>Serial</span>
                        </button>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      User Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Email ID
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Amount
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Transaction ID
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Purchase Plan
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments?.map((payment, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>{idx + 1}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {payment?.cus_name}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 ">
                          <h2 className="text-sm font-normal">
                            {payment?.cus_email}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              {payment?.amount}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {payment?.tran_id}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>{payment?.product_name}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      {pages.map((btnNum) => (
        <button
          onClick={() => handlePaginationButton(btnNum)}
          key={btnNum}
          className={`hidden ${
            currentPage === btnNum ? 'bg-primary text-white' : ''
          } px-4 py-2 mx-1 border rounded-full sm:inline hover:bg-secondary hover:text-white`}
        >
          {btnNum}
        </button>
      ))}

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
