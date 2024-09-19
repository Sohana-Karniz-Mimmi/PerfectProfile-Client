import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return (
      <Navigate
        to="/signIn"
        state={location?.pathname || "/"}
        replace
      ></Navigate>
    );
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
