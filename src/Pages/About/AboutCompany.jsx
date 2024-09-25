const AboutCompany = ({text, heading, img}) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold">{heading}</h2>
                <p className="max-w-[547px] text-[17px] mt-6">{text}</p>
            </div>
            <div className="md:max-w-[580px]">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default AboutCompany;