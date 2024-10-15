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
  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
    if (!user) {
      toast.error('You have to log in first');
      setTimeout(() => {
        document.getElementById("my_modal_3").showModal();
      }, 3000);
     
    } else if (template?.package === "premium") {
      if (user.productName !== "standard" && user.productName !== "premium") {
        setTimeout(() => {
          setShowModal(true)
          console.log('Premium user not available');
        }, 3000);
        
      }
    }
  }, [user, template]);

  {/* Modal */}
  {showModal && (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-bold">Premium Package Required</h2>
        <p className="mt-2">To use this template, you need to purchase the premium package.</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <Link to={'/pricing'}>
            <button className="bg-primary text-white py-2 px-4 rounded">
              Purchase Package
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}

    // যদি ব্যবহারকারী সঠিক হয় এবং টেমপ্লেট প্রিমিয়াম হয়, তাহলে শিশুদের রিটার্ন করুন
    if (user && (user.productName === "standard" || user.productName === "premium" || !template?.package)) {
      return children;
    }

  return <Navigate to={`/`} state={location?.pathname || '/'} />;
};

PremiumRoute.propTypes = {
  children: PropTypes.node
};

export default PremiumRoute;
