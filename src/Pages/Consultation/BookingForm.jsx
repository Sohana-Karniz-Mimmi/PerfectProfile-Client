
const BookingForm = ({handleSubmit, user}) => {
    return (
        <div>
            <form
                    onSubmit={handleSubmit}
                    className="w-full mt-6 flex flex-col gap-3"
                  >
                    {/* basic info */}
                    <h1 className="mt-3 mb-1 font-semibold text-xl">Personal Information :</h1>
                    <div className="space-y-4">
                      <div className="relative">
                        <label
                          htmlFor="text"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          defaultValue={user?.displayName}
                          placeholder="Enter your name"
                          required
                          className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          defaultValue={user?.email}
                          id="email"
                          placeholder="Enter your email"
                          required
                          className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                      </div>
                      {/* phone */}
                      <div className="relative">
                        <label
                          htmlFor="number"
                          className="block  text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="Enter your Phone Number"
                          required
                          className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Career Information: */}
                    <div>
                      <h1 className="mb-5 mt-5 text-xl font-semibold">
                      Career Information & Goal:
                      </h1>
                      <div className="space-y-4">
                        {/* 1 */}
                        <div className="relative">
                        <label
                          htmlFor="text"
                          className="block text-sm font-medium text-gray-700"
                        >
                         Current Job Title(If Applicable)
                        </label>
                        <input
                          type="text"
                          name="currentJob"
                        //   defaultValue={user?.displayName}
                          placeholder="Enter your Current Job Position"
                          className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                      </div>

                        {/* 2 */}

                        <div className="relative">
                            <label
                              htmlFor="currentIndustry"
                              className="block text-sm font-medium text-gray-700"
                            >
                            Current Industry
                            </label>
                            <select
                              name="currentIndustry"
                              id="currentIndustry"
                              className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                            >
                              <option value="">Select Industry</option>
                              <option value="Technical">Technical</option>
                              <option value="Non-Technical">
                                Non-Technical
                              </option>
                            </select>
                          </div>

                          {/* 3 */}
                          <div className="relative">
                        <label
                          htmlFor="text"
                          className="block text-sm font-medium text-gray-700"
                        >
                         Desired Job Title
                        </label>
                        <input
                          type="text"
                          name="desiredJob"
                          placeholder="Enter your Desired Job Position"
                          className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                      </div>

                      {/* 4 */}
                      <div className="relative">
                            <label
                              htmlFor="desiredIndustry"
                              className="block text-sm font-medium text-gray-700"
                            >
                            Desired Industry
                            </label>
                            <select
                              name="desiredIndustry"
                              id="desiredIndustry"
                              className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                            >
                              <option value="">Select Desired industry</option>
                              <option value="Technical">Technical</option>
                              <option value="Non-Technical">
                                Non-Technical
                              </option>
                            </select>
                          </div>

                          {/* 5 */}
 <div className="relative">
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-gray-700"
                          >
                           Current Resume Link (If Applicable)
                          </label>
                          <input
                            type="url"
                            name="resume"
                            placeholder="Please Provide Resume Link"
                            
                            className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                          />
                        </div>

                        {/* 6 */}
                        <div className="relative">
                            <label
                              htmlFor="consultant"
                              className="block text-sm font-medium text-gray-700"
                            >
                            Select Consultant
                            </label>
                            <select
                              name="consultant"
                              id="consultant"
                              className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                            >
                              <option value="">Select A Consultant</option>
                              <option value="Humahsaa Khan">Humashaa Khan</option>
                              <option value="Shohana Akhter">
                               Shohana Akhter
                              </option>
                              {/* <option value="Non-Technical">
                               Shohana Akhter
                              </option> */}
                            </select>
                          </div>






                       
                      </div>
                    </div>

                    <div className="mt-4">
                      <button  type="submit"
                        
                        className="py-2 font-bold rounded-md w-full bg-secondary text-white hover:bg-transparent border hover:text-primary hover:border hover:border-primary ">
                          Submit Application

                      </button>
                    </div>
                  </form>
 
          
        </div>
    );
};

export default BookingForm;