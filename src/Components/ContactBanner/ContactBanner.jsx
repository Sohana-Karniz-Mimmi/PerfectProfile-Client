import bg from "../../assets/templateBg.webp"

const ContactBanner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }} className="md:h-72 h-44 border">
            <div className="h-full border flex justify-center items-center">
                <h1 className="lg:text-5xl md:text-4xl text-2xl text-white font-bold uppercase">Contact Us</h1>
            </div>
        </div>
    );
};

export default ContactBanner;