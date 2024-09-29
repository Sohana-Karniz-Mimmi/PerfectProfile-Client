const AboutCompany = ({text, heading, img}) => {
    return (
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold font-lora text-gray-900">{heading}</h2>
                <p className="xl:max-w-[547px] font-montserrat md:max-w-[380px] md:text-[17px] text-sm md:mb-0 mb-6 mt-4 text-gray-800 font-light">{text}</p>
            </div>
            <div className="xl:max-w-[580px] md:max-w-[380px]">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default AboutCompany;