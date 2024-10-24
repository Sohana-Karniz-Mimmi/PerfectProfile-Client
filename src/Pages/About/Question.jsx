import { Link } from "react-router-dom";
import img from '../../assets/Images/About/customer-support.svg'
import img2 from '../../assets/Images/About/part-of-team.svg'

const Question = () => {
    return (
        <div className="md:flex-row flex flex-col gap-10 pb-10 lg:pb-20">
            <div className="bg-emerald-200 rounded-xl inset-0 p-8 space-y-3 text-center">
                <img className="mx-auto" src={img} alt="" />
                <h2 className="text-2xl font-bold">Customer support</h2>
                <p className="">Our dedicated customer support team is here to help with all of your account needs, seven days a week.</p>
                {/* Button */}
                <div className="relative z-10 text-center !mt-10">
                    <Link to={'/contact'} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 md:px-16 px-10 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="bg-emerald-100 rounded-xl inset-0 p-8 space-y-3 text-center">
                <img className="mx-auto" src={img2} alt="" />
                <h2 className="text-2xl font-bold">Join the team</h2>
                <p className="">Explore job openings across the globe and join us in helping job seekers unlock their career potential.</p>
                {/* Button */}
                <div className=" text-center !mb-5 !mt-10">
                    <Link to={'/consultation'} className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white py-3 md:px-16 px-10 rounded-full text-lg lg:text-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105">
                    Join our team
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Question;