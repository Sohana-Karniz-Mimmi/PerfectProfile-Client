import { Link } from "react-router-dom";
import errorImg from "../assets/error/404-page-not-found.svg";
import { IoIosArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <img src={errorImg} alt="404 Not Found" className="w-full h-auto" />
      </div>
      <p className="text-center text-gray-600 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to={`/`}>
        <button className="text-center my-4 py-2 px-4 border bg-secondary text-white font-bold font-lora hover:bg-primary flex items-center">
          <IoIosArrowRoundBack className="text-3xl" />
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
