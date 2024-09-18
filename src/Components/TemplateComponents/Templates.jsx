import bg from "../../assets/templateBg.webp";
import Container from "../../Shared/Container";
import resu1 from "../../assets/resu1.webp";
import resu2 from "../../assets/resu2.webp";
import resu3 from "../../assets/resu3.webp";
import resu4 from "../../assets/resu4.webp";
import resu5 from "../../assets/resu5.webp";
import resu6 from "../../assets/resu6.webp";
import { useState } from "react";
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
      style={{ background: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundPosition:"center", backgroundSize: "cover"}}
      className="  min-h-screen"
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center  min-h-screen p-10 ">
          <div className="max-w-full  lg:max-w-[33rem] space-y-3 text-center lg:text-left">
            <h2 className="font-bold text-[3.375rem] text-white leading-tight">
              Every detail on your resume, built to perfection
            </h2>
            <p className="text-white text-[1.25rem] pb-[1rem]">
              Our resume templates are based on what employers actually look for
              in a candidate. How do we know? We’ve talked with thousand of
              employers to get the answers.
            </p>
            <button className="btn text-gray-900 bg-white font-bold px-5 py-2 text-lg">
              Create My Resume
            </button>
          </div>
          <div className=" lg:max-w-[33.375rem] w-full overflow-hidden items-center">
            <div className="flex items-center justify-center object-cover">
              {resuImage?.map(
                (img, idx) =>
                  currentImage === idx && (
                    <img className="h-full rounded-lg" key={idx} src={img} alt="resume image" />
                  )
              )}
            </div>
            <div className="flex justify-end mt-8">
              <div className="cursor-pointer">
                <MdOutlineArrowLeft
                  className="text-6xl text-white"
                  onClick={prevSlide}
                />
              </div>
              <div className="cursor-pointer">
                <MdOutlineArrowRight
                  className="text-6xl text-white"
                  onClick={nextSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Templates;
