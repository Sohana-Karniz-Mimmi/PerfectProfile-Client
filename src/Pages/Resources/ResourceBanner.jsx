import teamImg from "../../assets/Resource/career/pexels-tima-miroshnichenko-5453859.jpg";

const ResourceBanner = () => {
  return (
    <section
      className="text-white relative bg-cover bg-center bg-no-repeat h-[565px]"
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" +
          teamImg +
          ")",
      }}
    >
      <div className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative lg:h-screen lg:items-center lg:px-8">
        <div className="flex items-center justify-center h-[400px]">
          <div>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className=" text-center mt-24 max-w-lg sm:text-lg/relaxed font-montserrat"
            >
              Resume and CV Building
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-3xl sm:text-5xl mt-2 font-lora"
            >
              CAREER CENTERS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceBanner;
