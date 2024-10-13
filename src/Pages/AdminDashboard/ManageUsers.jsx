import { Helmet } from 'react-helmet-async'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserDataRow from './UserDataRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from '../../store/Features/user/userSlice';
// import LoadingSpinner from '../../Shared/LoadingSpinner';
const ManageUsers = () => {


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
  const [count, setCount] = useState(0)

  // useEffect to fetch users
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, size, filter, search }));
  }, [dispatch, currentPage, size, filter, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL
        }/users-count?filter=${filter}&search=${search}`
      )

      setCount(data.count)
    }
    getCount()
  }, [filter, search])


  // Pagination Button Handler
  const handlePaginationButton = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchUsers({ page: newPage, size, filter, search }));
    }
  };

  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages = [...Array(totalPages).keys()].map(element => element + 1)


  const handleReset = () => {
    setFilter('')
    setSearch('')
    
  }

  const handleSearch = e => {
    e.preventDefault()
    setSearch(searchText)
  }

  console.log(users)
  // if ( loading) return <LoadingSpinner />
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>

        <div className='flex items-center pt-8 pb-3 gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>Manage Users</h2>
        </div>

        <div className='flex w-full flex-col md:flex-row items-center gap-5'>
          <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
              }}
              value={filter}
              name='productName'
              id='productName'
              className='border px-4 py-3 rounded-sm'
            >
              <option value=''>Filter By Role</option>
              <option value='free'>Free</option>
              <option value='standard'>Standard</option>
              <option value='premium'>Premium</option>
            </select>
          </div>

          <form onSubmit={handleSearch} className='flex-grow'>
            <div className='flex p-1 overflow-hidden border focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                // onChange={e => setSearchText(e.target.value)}
                // value={searchText}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name='search'
                placeholder='Enter User Name'
                aria-label='Enter User Name'
              />
              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary hover:bg-secondary focus:[#FF0143] focus:outline-none'>
                Search
              </button>
            </div>
          </form>

          <button onClick={handleReset} className='px-1 md:px-4 py-3 text-sm font-medium rounded-sm border'>
            Reset
          </button>
        </div>

        <div className='pb-8 pt-2.5'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className='bg-gray-50'>
                  <tr>
                    {/* <th
                      scope='col'
                      className='pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      #
                    </th> */}
                    <th
                      scope='col'
                      className='pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='pr-5 pl-10 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='pl-6 pr-12 py-3 text-center border-b border-gray-200 text-gray-800  text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
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
        <div className='flex justify-center mt-12'>
         {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className='px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-primary rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-secondary hover:text-white'
          >
            <div className='flex items-center -mx-1'>
              <IoIosArrowBack />
            </div>
          </button>

          {/* Number of page */}
          {pages.map(btnNum => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${currentPage === btnNum ? 'bg-primary text-white' : ''} px-4 py-2 mx-1 border rounded-full sm:inline hover:bg-secondary hover:text-white`}
            >
              {btnNum}
            </button>
          ))}

         {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className='px-4 py-2 mx-1 text-white bg-primary rounded-full hover:bg-secondary disabled:cursor-not-allowed disabled:bg-gray-200'
          >
            <div className='flex items-center -mx-1'>
              <IoIosArrowForward />
            </div>
          </button>
        </div>

      </div>
    </>
  )
}

export default ManageUsers
