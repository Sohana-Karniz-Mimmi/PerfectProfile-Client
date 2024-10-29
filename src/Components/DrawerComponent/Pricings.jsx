import React from "react";
import premium from "../../assets/Images/About/premium1.png";
import { Link } from "react-router-dom";
const Pricings = () => {
  return (
    <div className="w-72 mx-auto ">
      <div className="space-y-2 p-3 border rounded-lg flex flex-col items-center justify-center ">
        <div className="rounded-lg overflow-hidden">
          <img
            className=" hover:scale-110 transition-all ease-in-out duration-700"
            src={premium}
            alt=""
          />
        </div>
        <h2 className="text-xl text-center font-lora font-bold">
          Get Premium Templates And Unlock Features
        </h2>
        <p className="w-full mx-auto text-gray-700 text-center font-montserrat text-sm">
          Experience unique templates and powerful tools to create a standout
          resume that impresses.
        </p>
        <Link to={"/pricing"}>
          <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 text-base px-5 font-montserrat font-semibold shadow-lg transform transition rounded-full duration-500 hover:scale-105">
            Upgrade Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pricings;
