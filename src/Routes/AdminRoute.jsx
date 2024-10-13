import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useRole from '../Hook/useRole'
import LoadingSpinner from '../Shared/LoadingSpinner'
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role.role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}
