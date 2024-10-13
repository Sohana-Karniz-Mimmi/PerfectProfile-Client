import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LoadingSpinner from '../Shared/LoadingSpinner';
import toast from 'react-hot-toast';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  useEffect(() => {
    if (!user) {
      toast.error('You have to log in first');
      setTimeout(() => {
        document.getElementById("my_modal_3").showModal();
      }, 3000);
    }
  }, [user]); 


  return (
    <Navigate to={`/`} state={location?.pathname || '/'}>
    </Navigate>
  );
};

PrivetRoute.propTypes = {
  children: PropTypes.node
};

export default PrivetRoute;
