import React from 'react';
import consultant from '../../assets/Images/About/consultant.jpg';
import { Link } from 'react-router-dom';

const Designs = () => {
    return (
      <div className="w-72 mx-auto ">
        <div className="space-y-2 p-3 border rounded-lg flex flex-col items-center justify-center">
          <div className="rounded-lg overflow-hidden">
            <img
              className="hover:scale-110 transition-all ease-in-out duration-1000"
              src={consultant}
              alt=""
            />
          </div>
          <h2 className="text-xl text-center font-lora font-bold">
            Transform Your Resume With Expert Consultancy
          </h2>
          <p className="w-5/6 mx-auto text-gray-700 text-center font-montserrat text-sm">
            Our experts provide insights to make your resume stand out from the
            rest.
          </p>
          <Link to={"/consultants"}>
            <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-2 text-base px-5 font-montserrat font-semibold shadow-lg transform transition rounded-full duration-500 hover:scale-105">
              Book Consultant
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Designs;