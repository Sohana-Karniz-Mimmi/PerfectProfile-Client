/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-[93%] xl:px-0 px-2 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
