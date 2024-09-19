/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 lg:px-8 ">
      {children}
    </div>
  );
};

export default Container;
