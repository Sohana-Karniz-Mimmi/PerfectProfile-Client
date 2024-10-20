import { useEffect, useState } from "react";

const TopResume = () => {
  const [topResume, setTopResume] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetch("/topResume.json")
      .then((res) => res.json())
      .then((data) => {
        setTopResume(data);
      });
  }, []);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const showLessItems = () => {
    setVisibleCount((prevCount) => (prevCount > 9 ? prevCount - 3 : 9));
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center my-6">
          <h1 className="text-3xl md:text-4xl my-5 font-bold">
            Top Resume and CV Examples
          </h1>
          <p className="font-montserrat md:text-[17px] text-sm text-gray-800 font-light ">
            A superintendent is a top school district executive who oversees
            day-to-day operations, including the management of educational
            programs and facilities.Superintendents supervise staff, manage
            educational policies, organize board meetings and manage school
            budgets.{" "}
          </p>
        </div>
        <div className="p-4 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {topResume?.slice(0, visibleCount).map((src) => (
              <div key={src?.id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={src.image}
                  alt={src.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex">
                    <span className="block font-bold text-sm text-primary">
                      {src.type}
                    </span>
                    <span className="block ml-1 text-xs text-gray-600">
                      {src.time}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mt-2 text-secondary">
                    {src.title}
                  </h2>
                  <p className="text-gray-700 mt-2">{src.description}</p>
                  <div className="flex justify-between items-center mt-4 text-gray-500">
                    <span className="text-primary">{src.name}</span>
                    <span>{src.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center my-8">
          {visibleCount < topResume.length && (
            <button
              onClick={showMoreItems}
              className="py-2 px-4 bg-primary hover:bg-secondary text-white mx-2 rounded"
            >
              Show More
            </button>
          )}

          {visibleCount > 9 && (
            <button
              onClick={showLessItems}
              className="py-2 px-4 bg-primary hover:bg-secondary text-white mx-2 rounded"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TopResume;
