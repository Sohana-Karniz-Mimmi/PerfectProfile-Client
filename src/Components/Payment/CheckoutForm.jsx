// import {  CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAxiosPublic from "../../Hook/useAxiosPublic";
// import useAuth from "../../Hook/useAuth";

// const CheckoutForm = () => {
//     const [error, setError] = useState('');
//     const [clientSecret, setClientSecret] = useState('')
//     const [transactionId, setTransactionId] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();
//     const axiosPublic = useAxiosPublic();
//     const { user } = useAuth()
//     const navigate = useNavigate();

//     const totalPrice = 7.99

//     useEffect(() => {
//         if (totalPrice > 0) {
//             axiosPublic.post('/create-payment-intent', { price: totalPrice })
//                 .then(res => {
//                     console.log(res.data.clientSecret);
//                     setClientSecret(res.data.clientSecret);
//                 })
//         }

//     }, [axiosSecure, totalPrice])

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement)

//         if (card === null) {
//             return
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             console.log('payment error', error);
//             setError(error.message);
//         }
//         else {
//             console.log('payment method', paymentMethod)
//             setError('');
//         }

//         // confirm payment
//         // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//         //     payment_method: {
//         //         card: card,
//         //         billing_details: {
//         //             email: user?.email || 'anonymous',
//         //             name: user?.displayName || 'anonymous'
//         //         }
//         //     }
//         // })

//         // if (confirmError) {
//         //     console.log('confirm error')
//         // }
//         // else {
//         //     console.log('payment intent', paymentIntent)
//         //     if (paymentIntent.status === 'succeeded') {
//         //         console.log('transaction id', paymentIntent.id);
//         //         setTransactionId(paymentIntent.id);

//         //         // now save the payment in the database
//         //         // const payment = {
//         //         //     email: user.email,
//         //         //     price: totalPrice,
//         //         //     transactionId: paymentIntent.id,
//         //         //     date: new Date(), // utc date convert. use moment js to 
//         //         //     cartIds: cart.map(item => item._id),
//         //         //     menuItemIds: cart.map(item => item.menuId),
//         //         //     status: 'pending'
//         //         // }

//         //         // const res = await axiosSecure.post('/payments', payment);
//         //         // console.log('payment saved', res.data);
//         //         // refetch();
//         //         // if (res.data?.paymentResult?.insertedId) {
//         //         //     Swal.fire({
//         //         //         position: "top-end",
//         //         //         icon: "success",
//         //         //         title: "Thank you for the taka paisa",
//         //         //         showConfirmButton: false,
//         //         //         timer: 1500
//         //         //     });
//         //         //     navigate('/dashboard/paymentHistory')
//         //         // }

//         //     }
//         // }

//     }




//     return (
//         <form onSubmit={handleSubmit} >
//            {/* <div className="flex flex-col">
//            <CardElement
//              className="flex flex-col space-y-4"
//                 options={{
//                     style: {
//                         base: {
//                             fontSize: '16px',
//                             color: '#424770',
//                             display: 'flex',      
//                             flexDirection: 'column', 
//                             '::placeholder': {
//                                 color: '#aab7c4',
//                             },
//                         },
//                         invalid: {
//                             color: '#9e2146',
//                         },
//                     },
//                 }}
//             />
//            </div> */}
//         {/* <PaymentElement />   */}
//         {/* || !elements */}
//         <button className="btn bg-primary" type="submit" disabled={!stripe || !clientSecret}>
//           Pay
//         </button>
//         {/* Show error message to your customers */}
//         <p>{error}</p>
//         {/* {errorMessage && <div>{errorMessage}</div>} */}
//       </form>
//     );
// };

// export default CheckoutForm;