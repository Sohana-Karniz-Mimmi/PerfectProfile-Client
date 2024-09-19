import bg from "../../assets/templateBg.webp";
import Container from "../../Shared/Container";
import resu1 from "../../assets/resu1.webp";
import resu2 from "../../assets/resu2.webp";
import resu3 from "../../assets/resu3.webp";
import resu4 from "../../assets/resu4.webp";
import resu5 from "../../assets/resu5.webp";
import resu6 from "../../assets/resu6.webp";
import { useEffect, useState } from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
const Templates = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const resuImage = [resu1, resu2, resu3, resu4, resu5, resu6];

  const nextSlide = () => {
    setCurrentImage(
      currentImage === resuImage.length - 1 ? 0 : currentImage + 1
    );
  };
  const prevSlide = () => {
    setCurrentImage(
      currentImage === 0 ? resuImage.length - 1 : currentImage - 1
    );
  };

  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="  min-h-screen"
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center  min-h-screen p-10 ">
          <div className="max-w-full  lg:max-w-[33rem] space-y-3 text-center lg:text-left">
            <h2 className="font-bold text-[2rem] md:text-[2.5rem] lg:text-[3.375rem] text-white leading-tight">
              Every detail on your resume, built to perfection
            </h2>
            <p className="text-white text-[.85rem] md:text-[1.25rem] pb-[1rem]">
              Our resume templates are based on what employers actually look for
              in a candidate. How do we know? We’ve talked with thousand of
              employers to get the answers.
            </p>
            <button className="btn text-gray-900 bg-white font-bold px-5 py-2 text-lg">
              Create My Resume
            </button>
          </div>
          <div className=" lg:max-w-[33.375rem] w-full overflow-hidden items-center">
            <div className="flex items-center justify-center object-cover transition-all duration-300">
              {resuImage?.map(
                (img, idx) =>
                  currentImage === idx && (
                    <div  key={idx} className="relative overflow-hidden">
                      <img
                        className="h-full rounded-lg"
                       
                        src={img}
                        alt="resume image"
                      />
                      <div className="absolute h-full w-full bg-black/70 flex items-center justify-center -bottom-10 rounded-lg hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                        <button className="btn -bottom-10  bg-blue-600 text-white font-bold uppercase border-none hover:bg-blue-800 hover:px-5 transition-all duration-300">
                          Use this Template
                        </button>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="flex justify-end mt-8">
              {currentImage !== 0 ? (
                <div className="cursor-pointer transition-all duration-300">
                  <MdOutlineArrowLeft
                    className="text-6xl text-white"
                    onClick={prevSlide}
                  />
                </div>
              ) : (
                <div className="">
                  <MdOutlineArrowLeft className="text-6xl text-gray-400" />
                </div>
              )}
              {currentImage !== resuImage.length - 1 ? (
                <div className="cursor-pointer">
                  <MdOutlineArrowRight
                    className="text-6xl text-white"
                    onClick={nextSlide}
                  />
                </div>
              ) : (
                <div className="">
                  <MdOutlineArrowRight className="text-6xl text-gray-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Templates;
