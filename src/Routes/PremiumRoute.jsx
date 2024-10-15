import PropTypes from 'prop-types';
import PurchaseModal from "../Components/Modal/PurchaseModal";
import useAuth from "../Hook/useAuth";
import { useState } from 'react';

const PremiumRoute = ({ children, template }) => {
  const { user } = useAuth(); // ইউজার তথ্য
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  if (!user) {
    setShowLoginModal(true);
    return <LoginModal onClose={() => setShowLoginModal(false)} />;
  }

  if (template.package === "premium") {
    if (user.productName !== "standard" && user.productName !== "premium") {
      setShowPurchaseModal(true);
      return <PurchaseModal onClose={() => setShowPurchaseModal(false)} />;
    }
  }
  return children;
};

PremiumRoute.propTypes = {
  children: PropTypes.node,
  template: PropTypes.object.isRequired, 
};

export default PremiumRoute;
