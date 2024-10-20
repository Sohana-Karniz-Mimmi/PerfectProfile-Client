import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../../Shared/Button/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
const CheckoutForm = () => {
  const { user } = useAuth();
  // console.log();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const [productName, setProductName] = useState("");

  //   transaction id
  function generateTransactionId() {
    const random = Math.floor(Math.random() * 1000000);
    return `TRAN${random}`;
  }
  const tran_id = generateTransactionId();
  console.log(tran_id);

  //   package checkbox
  const handleCheckboxChange = (e) => {
    const { id } = e.target;
    setProductName(id);
    if (!id) {
      toast.error("Please select a package option before proceeding.");
    }
  };
  console.log(productName);

  const getPrice = () => {
    if (productName === "standard") {
      return 9.99;
    } else if (productName === "premium") {
      return 7.99;
    }
    return 0;
  };

  console.log(getPrice());

  //   form submit
  const onSubmit = (data) => {
    const { email, phone, cardNumber, date } = data;
    console.log(data);
    const amount = getPrice();

    // console.log(amount);

    axiosPublic
      .post("/create-payment", {
        amount: amount,
        currency: "USD",
        tran_id,
        userName: user.displayName,
        email,
        phone,
        productName,
      })
      .then((res) => {
        console.log(res);

        const redirectUrl = res.data.paymentUrl;
        console.log(redirectUrl);

        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });

    // update user profile in db
    axiosPublic
      .put(`/user/${user.email}`, {
        productName,
        amount,
        createdAt:
          existingUser?.createdAt || new Date().toISOString().split("T")[0]
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="relative mx-auto w-[25rem] h-[30rem]  bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full ">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-3xl text-center font-bold text-primary sm:text-3xl">
              Checkout Form
            </h1>

            {/* checkbox */}
            <ul className="flex justify-center mt-6 gap-5 items-center">
              <li>
                <input
                  type="checkbox"
                  id="standard"
                  value=""
                  className="hidden peer"
                  checked={productName === "standard"}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="standard"
                  className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 ${
                    productName === "standard"
                      ? "border-primary"
                      : "border-gray-200"
                  } rounded-lg cursor-pointer  hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 `}
                >
                  <div className="block text-center">
                    <h1 className="font-semibold text-xl">Standard </h1>
                    <p className="font-bold">$9.99</p>
                  </div>
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  id="premium"
                  value=""
                  className="hidden peer"
                  checked={productName === "premium"}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="premium"
                  className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 ${
                    productName === "premium"
                      ? "border-primary"
                      : "border-gray-200"
                  } rounded-lg cursor-pointer  hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 `}
                >
                  <div className="block text-center">
                    <h1 className="font-semibold text-xl">Premium</h1>
                    <p className="font-bold">$7.99</p>
                  </div>
                </label>
              </li>
            </ul>

            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="mt-7 flex flex-col space-y-4"
            >
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.capler@fang.com"
                  {...register("email", { required: true })}
                  //   required
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-primary"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold text-gray-500"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  placeholder="+880 1111111111"
                  {...register("phone", { required: true })}
                  //   required
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-primary"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  href="#"
                  className="whitespace-nowrap text-primary underline "
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                //   onClick={handleCreatePayment}
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 text-base md:text-xl font-montserrat font-semibold shadow-lg transform transition duration-500 hover:scale-105"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
