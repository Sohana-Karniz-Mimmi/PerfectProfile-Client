import { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LoadingSpinner from '../Shared/LoadingSpinner';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const PremiumRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const template = location.state?.template;

  if (loading) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
    if (!user) {
      toast.error('You have to log in first');
      setTimeout(() => {
        document.getElementById("my_modal_3").showModal();
      }, 1000);
     
    } else if (template?.package === "premium") {
      if (user.productName !== "standard" && user.productName !== "premium") {
        setTimeout(() => {
          document.getElementById("premium-modal").showModal(); //
          console.log('Premium user not available');
        }, 1000);
        
      }
    }
  }, [user, template]);

    if (user && (user.productName === "standard" || user.productName === "premium" || !template?.package)) {
      return children;
    }

  return <Navigate to={`/`} state={location?.pathname || '/'} />;
};

PremiumRoute.propTypes = {
  children: PropTypes.node
};

export default PremiumRoute;
