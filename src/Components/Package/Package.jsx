import priceImg from "../../assets/pricingCard.png";
import { SiTicktick } from "react-icons/si";
import Container from "../../Shared/Container";
import { Link } from "react-router-dom";
import { useState } from 'react'
import CheckoutForm from "../Payment/CheckoutForm";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

// import PackageModal from "./PackageModal";

const Package = () => {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpen2nd, set2ndIsOpen] = useState(false)

  return (
    <Container className="">
      <div
        id="price"
        className="flex lg:flex-row flex-col justify-between  gap-8 lg:py-10 py-10"
      >
        <div className="space-y-7 card lg:w-1/3 w-full lg:h-[39rem] md:h-[41rem] h-[41rem]  px-3">
          <h1 className="text-4xl font-lora font-bold">Our Pricing</h1>
          <p className="text-gray-600 font-montserrat">
            In PerfectProfile, users can choose from flexible plans that provide
            full access to professional templates and additional advanced
            features. Whether monthly plan or the yearly plan to save 20%, users
            can easily create and optimize their resumes with premium tools.
          </p>

          <Link
            to="/predefined-templates"
            className="px-5 py-2.5 h-24 relative rounded group overflow-hidden  bg-cyan-50 border-2 border-[#2CACD5]  text-[#2CACD5] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#2CACD5] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white ">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-xl font-montserrat mt-2">Lets Build Resume</p>
                <p className="font-medium text-center w-3/4 mx-auto">
                  With Unlimited Predefined Templates
                </p>
              </div>
            </span>
          </Link>

          <div>
            <Link to="" className="font-roboto font-bold hover:underline">
              Terms & Conditions
            </Link>
            <p className="font-light font-roboto text-xs text-gray-700">
              Subject to change with perior notice
            </p>
          </div>
        </div>
        {/* standard */}
        <div className=" bg-base-100 lg:w-1/3 w-full lg:h-[43rem] md:h-[41rem]  h-[39rem]  shadow-xl relative transition-transform duration-300 hover:scale-105">
          <div className="flex justify-end ">
            <figure>
              <img src={priceImg} alt="price" />
            </figure>
          </div>

          <div className="absolute top-6 right-10  flex flex-col  items-end ">
            <p className="font-bold text-white text-5xl font-montserrat">
              $9.99
            </p>
            <p className="bg-gradient-to-br from-[#01afe9] to-[#02aae2] bg-clip-text font-bold text-xl font-montserrat text-black/60">
              /month
            </p>
          </div>
          <div className="card-body">
            <h2 className="text-3xl px-5 font-roboto font-extrabold text-blue-950 mb-4">
              Monthly Pack
            </h2>

            <div>
              <p className="text-gray-600 mb-4 mt-2 px-5 font-montserrat">
                Unlock all premium features with our affordable monthly package.
                Build, customize, and optimize your resume effortlessly to stand
                out from the competition!
              </p>
              <ul className="px-5 mt-2 font-roboto">
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  <span>Unlimited access to professional templates</span>
                </li>
                <li className="font-medium text-gray-600 flex items-center gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  Real time editing
                </li>
                <li className="font-medium text-gray-600 flex items-center gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  Get one-to-one coaching
                </li>
                <li className="font-medium text-gray-600 flex items-center gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  Custom sections and many more
                </li>
              </ul>
            </div>
            <div className=" justify-center mt-4">
              {/* standard button */}

              <button
                onClick={() => setIsOpen(true)}
                className="relative inline-block font-montserrat text-lg group ml-5"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#2CACD5] transition-colors duration-300 ease-out border-2 border-[#2CACD5] rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0  w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2CACD5] group-hover:-rotate-180 ease"></span>
                  <span className="relative">Buy Now</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2CACD5] rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>

              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
              >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <CheckoutForm></CheckoutForm>
                  </DialogPanel>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
        {/* premium */}
        <div className=" bg-base-100 lg:w-1/3 w-full lg:h-[43rem] md:h-[41rem] h-[41rem] relative  shadow-xl transition-transform duration-300 hover:scale-105">
          <div className="flex justify-end ">
            <figure>
              <img src={priceImg} alt="price" />
            </figure>
          </div>

          <div className="absolute top-6 right-10 flex flex-col  items-end">
            <p className="font-bold text-white font-montserrat  text-5xl">
              $7.99
            </p>
            <p className="bg-gradient-to-br from-[#01afe9] to-[#02aae2] bg-clip-text font-bold text-black/60 font-montserrat text-xl">
              /month
            </p>
          </div>

          <div className="">
            <div className="flex  items-center lg:gap-16 gap-8 px-5 relative">
              <h2 className="font-extrabold text-3xl font-roboto text-blue-950 mb-3">
                Yearly Pack
              </h2>
              <p className="px-2 absolute right-4 mb-3 py-1 bg-gradient-to-r text-center from-primary to-secondary hover:bg-gradient-to-l text-white rounded-full shadow-lg font-montserrat md:font-medium font-light md:text-base text-xs">
                Save 20%
              </p>
            </div>
            <div>
              <p className=" text-gray-600 mb-9 mt-2 font-montserrat px-5 ">
                Enjoy all premium features while saving 20%! Unlock all premium
                features with our affordable yearly package. Build, customize,
                and optimize your resume effortlessly!
              </p>
              <ul className="px-5 font-roboto">
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  <span>Unlimited access to professional templates</span>
                </li>
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  <span>Real time editing</span>
                </li>
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1 text-secondary" />
                  <span>Get one-to-one coaching</span>
                </li>
                <li className="font-medium  text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className=" mt-1 text-secondary" />
                  <span>Custom sections and many more</span>
                </li>
              </ul>
            </div>
            <div className="px-5 justify-center mt-4">
              <button
                onClick={() => set2ndIsOpen(true)}
                class="relative inline-block text-lg group"
              >
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#2CACD5] transition-colors duration-300 ease-out border-2 border-[#2CACD5] rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2CACD5] group-hover:-rotate-180 ease"></span>
                  <span class="relative font-montserrat">Buy Now</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2CACD5] rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
              <Dialog
                open={isOpen2nd}
                onClose={() => set2ndIsOpen(false)}
                className="relative z-50"
              >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <CheckoutForm></CheckoutForm>
                  </DialogPanel>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Package;
