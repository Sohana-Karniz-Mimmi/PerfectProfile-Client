const ProfileInfo = () => {
  return (
    <div
      id="profile"
      className=" mx-auto items-center justify-center flex mt-16"
    >
      <div className=" p-20 shadow-2xl ">
        <h1 className="text-3xl font-bold font-montserrat">Contact Info</h1>
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
            className="border border-secondary rounded-md py-4 px-3 w-[820px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="border border-secondary rounded-md py-4 px-3 w-[820px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="border border-secondary rounded-md py-4 px-3 w-[820px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="border border-secondary rounded-md py-4 px-3 w-[820px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="border border-secondary rounded-md py-4 px-3 w-[820px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
