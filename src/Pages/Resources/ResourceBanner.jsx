import teamImg from "../../assets/Resource/career/pexels-tima-miroshnichenko-5453859.jpg";

const ResourceBanner = () => {
  return (
    <section
      className="text-white relative bg-cover bg-center bg-no-repeat h-[565px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${teamImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 sm:bg-transparent sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative h-full flex items-center justify-center">
        <div className="">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-center max-w-lg sm:text-lg/relaxed font-montserrat"
          >
            Resume and CV Building
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-3xl sm:text-5xl mt-2 font-lora"
          >
            CAREER CENTER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ResourceBanner;
