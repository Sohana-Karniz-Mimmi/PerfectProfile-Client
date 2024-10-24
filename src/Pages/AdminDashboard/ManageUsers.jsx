import { Helmet } from "react-helmet-async";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import UserDataRow from "./UserDataRow";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
} from "../../store/Features/user/userSlice";
import { FaSearch } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import useAxiosPublic from "../../Hook/useAxiosPublic";
// import LoadingSpinner from '../../Shared/LoadingSpinner';
const ManageUsers = () => {

  const axiosPublic = useAxiosPublic()
  
  /****Use Search and filter****/
  const dispatch = useDispatch();

  // Redux selectors
  const users = useSelector(selectAllUsers);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);

  // Define filter, search, and size using useState
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(10);
  const [count, setCount] = useState(0);

  // useEffect to fetch users
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, size, filter, search }));
  }, [dispatch, currentPage, size, filter, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosPublic(`/users-count?filter=${filter}&search=${search}`
      );

      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  // Pagination Button Handler
  const handlePaginationButton = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchUsers({ page: newPage, size, filter, search }));
    }
  };

  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages = [...Array(totalPages).keys()].map((element) => element + 1);

  const handleReset = () => {
    setFilter("");
    setSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  // console.log(users);
  // if ( loading) return <LoadingSpinner />
  return (
    <>
      <div className="container mx-auto">
        <Helmet>
          <title>Manage Users</title>
        </Helmet>

        <div className="flex items-center pb-6 gap-x-3">
          <h2 className="text-2xl font-bold font-lora ">Manage Users</h2>
        </div>

        <div className="flex w-full flex-col md:flex-row items-center gap-3">
          <div className="md:max-w-sm relative flex items-center font-roboto font-medium text-base w-full">
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                dispatch(fetchUsers({ page: 1 }));
              }}
              value={filter}
              name="productName"
              id="productName"
              className="border w-full appearance-none cursor-pointer focus:outline-none px-4 py-3 rounded"
            >
              <option value="">Filter By Role</option>
              <option value="free">Free</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
            <span className="absolute text-xl right-3 pointer-events-none">
              <IoFilter />
            </span>
          </div>

          <form
            onSubmit={handleSearch}
            className="flex-grow font-roboto font-medium w-full"
          >
            <div className="flex overflow-hidden rounded border">
              <input
                className="px-6 py-3 w-full placeholder-gray-300 bg-white outline-none focus:placeholder-transparent placeholder:font-normal focus:outline-none rounded"
                type="text"
                // onChange={e => setSearchText(e.target.value)}
                // value={searchText}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                placeholder="Search by name, email, role..."
                aria-label="Enter User Name"
              />
              <button className="px-3 py-3 text-sm font-medium tracking-wider uppercase rounded bg-none transition-colors duration-300 transform focus:outline-none">
                <FaSearch className="font-bold" />
              </button>
            </div>
          </form>

          <button
            onClick={handleReset}
            className="px-2 md:px-4 font-roboto justify-center flex items-center gap-1 md:max-w-sm w-full py-3 text-base font-medium rounded border"
          >
            <TbRefresh /> Reset
          </button>
        </div>

        <div className="pb-8 px-2 md:px-0 pt-2.5">
          <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-300 ">
                  <tr className=" text-sm">
                    {/* <th
                      scope='col'
                      className='pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      #
                    </th> */}
                    <th
                      scope="col"
                      className="pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm  uppercase font-lora font-bold"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm uppercase font-lora font-bold"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm uppercase font-lora font-bold"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left xl:text-lg text-sm uppercase font-lora font-bold"
                    >
                      Subscription Plan
                    </th>

                    
                  </tr>
                </thead>
                <tbody className="font-montserrat">
                  {users?.map((user, indx) => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      indx={indx}
                      // refetch={fetchBookings}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-primary rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-secondary hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <IoIosArrowBack />
            </div>
          </button>

          {/* Number of page */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-primary text-white" : ""
              } px-4 py-2 mx-1 border rounded-full sm:inline hover:bg-secondary hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-white bg-primary rounded-full hover:bg-secondary disabled:cursor-not-allowed disabled:bg-gray-200"
          >
            <div className="flex items-center -mx-1">
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
