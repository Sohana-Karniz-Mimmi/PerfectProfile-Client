import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ text, className, route }) => {
  return (
    <Link to={route}>
      <button
        className={`bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 text-base md:text-xl font-montserrat font-semibold shadow-lg transform transition duration-500 hover:scale-105 ${className}`}>
        {text}
      </button>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  route: PropTypes.string,
};

export default Button;
