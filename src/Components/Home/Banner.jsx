import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
   
            <section
                className="relative "
            >
                <div
                    className="absolute inset-0 "
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 pb-32 sm:px-6 lg:flex justify-between lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold  sm:text-5xl">
                        Make your <br /> professional resume 

                            <strong className="block font-extrabold text-blue-600"> in minutes  </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-gray-600 sm:text-xl/relaxed">
                        From generating bullet points to automatic formatting, our resume builder will help you make a professional resume quickly and effortlessly.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to={`#`}
                                href="#"
                                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            >
                                Get Started
                            </Link>

                            <Link to={'/template'}
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                            >
                                Browse Templates
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-[600px]">
                        <img src="https://cdn-images.zety.com/images/zety/landings/builder/hero-image-desktop@3x.webp" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;