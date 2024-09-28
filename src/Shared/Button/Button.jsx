import PropTypes from 'prop-types';

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 text-base lg:text-xl font-montserrat font-semibold shadow-lg transform transition duration-500 hover:scale-105 ${className}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
