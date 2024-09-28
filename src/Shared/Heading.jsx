import PropTypes from 'prop-types'
const Heading = ({ title, subtitle, headingClassName, className }) => {
  return (
    <div className='text-center' >
      <div className={`font-bold tracking-tight text-gray-900 lg:text-[40px] md:text-4xl text-3xl font-lora md:pt-20 pt-10 ${headingClassName}`}>{title}</div>
      <div className={`font-light mt-2 font-montserrat md:text-lg text-base text-gray-800 ${className}`}>{subtitle}</div>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
}
export default Heading
