const ProfileInfo = () => {
  return (
    <div className="md:mt-6 mt-28 lg:px-8 md:px-4 px-2">
      <h1 className="text-3xl font-bold font-lora">Contact Info</h1>
      <div id="profile" className="lg:w-1/2 w-full py-8">
        <div className="">
          <div className="my-4">
            <label className="block text-lg mb-2 font-bold font-montserrat">
              Mobile Telephone
            </label>
            {/* <label className="block text-red-600 text-lg font-bold -mb-[29px] ml-[332px]">
          *
        </label> */}

            <input
              type="text"
              placeholder="Mobile Telephone"
              className="border border-gray-200 rounded-md py-4 px-3 w-full focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg mb-2 font-bold font-montserrat">
              Country
            </label>
            {/* <label className="block text-red-600 text-lg font-bold -mb-[29px] ml-[332px]">
          *
        </label> */}

            <input
              type="text"
              placeholder="Bangladesh"
              className="border border-gray-200 rounded-md py-4 px-3 w-full focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg mb-2 font-bold font-montserrat">
              Zip/Code
            </label>
            {/* <label className="block text-red-600 text-lg font-bold -mb-[29px] ml-[332px]">
          *
        </label> */}

            <input
              type="text"
              placeholder="Zip/Code"
              className="border border-gray-200 rounded-md py-4 px-3 w-full focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg mb-2 font-bold font-montserrat">
              State/Province
            </label>
            {/* <label className="block text-red-600 text-lg font-bold -mb-[29px] ml-[332px]">
          *
        </label> */}

            <input
              type="text"
              placeholder="State......."
              className="border border-gray-200 rounded-md py-4 px-3 w-full focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg mb-2 font-bold font-montserrat">
              City
            </label>
            {/* <label className="block text-red-600 text-lg font-bold -mb-[29px] ml-[332px]">
          *
        </label> */}

            <input
              type="text"
              placeholder="City......"
              className="border border-gray-200 rounded-md py-4 px-3 w-full focus:outline-none focus:border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
