/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    // max-w-[93%]
    <div className="max-w-7xl mx-auto xl:px-0 px-2 lg:px-9">{children}</div>
  );
};

export default Container;
