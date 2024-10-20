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
    <Container  className="">
      <div id="price" className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:py-10 py-10">
        <div className="space-y-7 card w-[21rem] lg:w-96 px-3">
          <h1 className="text-4xl font-bold">Our Pricing</h1>
          <p className="text-gray-600">
            In PerfectProfile, users can choose from flexible plans that provide
            full access to professional templates and additional advanced
            features. Whether monthly plan or the yearly plan to save 20%, users
            can easily create and optimize their resumes with premium tools.
          </p>

          <Link
            to='/predefined-templates'
            className="px-5 py-2.5 h-24 relative rounded group overflow-hidden  bg-cyan-50 border-2 border-[#2CACD5]  text-[#2CACD5] inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#2CACD5] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white ">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-xl mt-2">Lets Build Resume</p>
                <p className="font-medium">with Unlimited Predefined Templates</p>
              </div>
            </span>
          </Link>

          <div>
            <Link to="" className=" font-bold">
              Terms & Conditions
            </Link>
            <p className="font-medium text-gray-400">
              Subject to change with perior notice
            </p>
          </div>
        </div>
        {/* standard */}
        <div className=" bg-base-100 w-[21rem] h-[37rem] lg:w-96 shadow-xl relative transition-transform duration-300 hover:scale-105">
          <div className="flex justify-end ">
            <figure>
              <img src={priceImg} alt="price" />
            </figure>
          </div>

          <div className="absolute top-6 right-10  flex flex-col  items-end ">
            <p className="font-bold text-white text-5xl">$9.99</p>
            <p className="bg-gradient-to-br from-[#01afe9] to-[#02aae2] text-transparent bg-clip-text font-bold text-xl">
              /month
            </p>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-3xl px-5 text-blue-950 mb-2">
              Monthly Pack 
            </h2>

            <div>
              <p className="text-gray-600 mb-4 mt-2 px-5">
                Unlock all premium features with our affordable monthly package.
                Build, customize, and optimize your resume effortlessly to stand
                out from the competition!
              </p>
              <ul className="px-5 mt-2">
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1" />
                  <span>Unlimited access to professional templates</span>
                </li>
                <li className="font-medium text-gray-600 flex items-center gap-2">
                  <SiTicktick />
                  Real time editing
                </li>
                <li className="font-medium text-gray-600 flex items-center gap-2">
                  <SiTicktick />
                  Get one-to-one coaching
                </li>
                <li className="font-medium text-gray-600 flex items-center gap-2">
                  <SiTicktick />
                  Custom sections and more
                </li>
              </ul>
            </div>
            <div className=" justify-center mt-4">
              {/* standard button */}

              <button 
              onClick={() => setIsOpen(true)} 
              className="relative inline-block text-lg group ml-5">
                 <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#2CACD5] transition-colors duration-300 ease-out border-2 border-[#2CACD5] rounded-lg group-hover:text-white">
                   <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                   <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2CACD5] group-hover:-rotate-180 ease"></span>
                   <span className="relative">Get Started</span>
                 </span>
                 <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2CACD5] rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>


              <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
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
        <div className=" bg-base-100 w-[21rem] h-[37rem] relative lg:w-96 shadow-xl transition-transform duration-300 hover:scale-105">
          <div className="flex justify-end ">
            <figure>
              <img src={priceImg} alt="price" />
            </figure>
          </div>

          <div className="absolute top-6 right-10 flex flex-col  items-end">
            <p className="font-bold text-white  text-5xl">$7.99</p>
            <p className="bg-gradient-to-br from-[#01afe9] to-[#02aae2] text-transparent bg-clip-text font-bold text-xl">
              /month
            </p>
          </div>

          <div className="">
            <div className="flex  items-center lg:gap-16 gap-8 px-5 ">
              <h2 className="font-bold text-3xl text-blue-950 mb-2">
                Yearly Pack
              </h2>
              <p className=" px-3 py-1 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white rounded-full shadow-lg font-medium">
                save 20%
              </p>
            </div>
            <div>
              <p className=" text-gray-600 mb-4 mt-2 px-5">
                Enjoy all premium features while saving 20%! Unlock all premium features with our affordable yearly package.
                Build, customize, and optimize your resume effortlessly!
              </p>
              <ul className="px-5">
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1" />
                  <span>Unlimited access to professional templates</span>
                </li>
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1" />
                  <span>Real time editing</span>
                </li>
                <li className="font-medium text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className="mt-1" />
                  <span>Get one-to-one coaching</span>
                </li>
                <li className="font-medium  text-gray-600 flex items-baseline gap-2">
                  <SiTicktick className=" mt-1" />
                  <span>Custom sections and many more</span>
                </li>
              </ul>
            </div>
            <div className="px-5 justify-center mt-4">
              <button onClick={() => set2ndIsOpen(true)}   class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#2CACD5] transition-colors duration-300 ease-out border-2 border-[#2CACD5] rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2CACD5] group-hover:-rotate-180 ease"></span>
                  <span class="relative">Get Started</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2CACD5] rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
              <Dialog open={isOpen2nd} onClose={() => set2ndIsOpen(false)} className="relative z-50">
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
