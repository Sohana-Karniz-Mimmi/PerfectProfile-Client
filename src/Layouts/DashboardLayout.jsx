import { Outlet } from 'react-router-dom'
import Sidebar from '../Pages/AdminDashboard/Sidebar'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store/Features/user/userSlice';

const DashboardLayout = () => {

  const dispatch = useDispatch();
  const size = 10;
  const filter = '';
  const search = '';

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, size, filter, search }));
  }, [dispatch, size, filter, search]);
  
  return (
    <div className='relative min-h-screen md:flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
