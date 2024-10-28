import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PaymentHistoryDataRow = ({ indx, payment }) => {
    return (
        <tr className="">
            <td className='text-center font-medium px-4 py-1 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-500 whitespace-no-wrap'>{indx + 1}</p>
            </td>
            <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm ">
                <p className="text-gray-500 whitespace-no-wrap ">{payment?.cus_name}</p>
            </td>
            <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-500 whitespace-no-wrap ">{payment?.cus_email}</p>
            </td>
            <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                <p
                    className={`capitalize w-28 mx-auto text-center px-1 py-1 rounded-full text-xs font-medium `}
                    // ${user?.role === 'admin' && 'text-emerald-500 bg-emerald-100/60'} ${user?.role === 'user' && 'text-pink-500 bg-pink-100/60'} ${user?.role === 'consultant' && 'text-blue-500 bg-blue-100/60'} ${user?.role === 'Hybrid' && 'text-violet-500 bg-violet-100/60'}
                >
                    {payment?.amount}
                </p>
            </td>
            <td className=" px-4 py-3 border-b border-gray-200 bg-white text-sm">
                <p
                    className={`capitalize w-28 mx-auto px-5 text-center py-1 rounded-full text-xs font-medium`}
                    // ${user.productName === 'free' && 'text-violet-500 bg-violet-100/60'} ${user.productName === 'premium' && 'text-[#FE784A] bg-[#FE784A]/10'} ${user.productName === 'standard' && 'text-blue-500 bg-blue-100/60'} ${user.productName === 'Hybrid' && 'text-[#FE784A] bg-[#FE784A]/20'}
                >
                    {payment?.tran_id}</p>
            </td>
            <td className="px-4 text-center py-3 border-b border-gray-200 bg-white text-sm">
                <p
                    className={`capitalize w-28 mx-auto px-5 text-center py-1 rounded-full text-xs font-medium  ${payment.product_name === 'premium' && 'text-[#FE784A] bg-[#FE784A]/10'} ${payment.product_name === 'standard' && 'text-blue-500 bg-blue-100/60'} `}
                >{payment?.product_name}</p>
            </td>
        </tr>
    );
};

PaymentHistoryDataRow.propTypes = {
    payment: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    indx: PropTypes.node.isRequired,
};

export default PaymentHistoryDataRow;
