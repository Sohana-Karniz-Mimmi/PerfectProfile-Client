import { useRef, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { FiEdit } from "react-icons/fi";
import img from "../../assets/consultation/profile.png";
import { TiCameraOutline } from "react-icons/ti";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const Profile = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [image, setImage] = useState(null)

    const formRef = useRef(null);

    const handleReset = (e) => {
        e.preventDefault()
      formRef.current.reset();
    };

    const handleImageUpload = async (e) => {
      const file = {image : e.target.files[0]};
  
      const res = await axiosPublic.post(img_hosting_api, file, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      // console.log(data?.image);
  
      if (res.data.success) {
        const image = res.data.data.display_url;
  console.log("image",image)
        setImage(image);
      }
      
    };

    // update profile data in db
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const expertise = form.expertise.value;
    const experience = form.experience.value;
    const facebook = form.facebook.value;
    const about = form.about.value;
    const twitter = form.twitter.value;
    const linkdin = form.linkdin.value;
 
        const consultantData = {
          name,
          email,
          number,
          experience,
          expertise,      
          address,
          facebook,
          about,
          twitter,
          linkdin,
          image    
        }
      
    console.log(consultantData)


       axiosPublic.patch(`/consultant-info-update/user/${user?.email}`, consultantData)
      .then(res => {
          console.log(res.data);
          toast.success("Your information has been updated");
        });
 }



  


  return (
    <div className="min-h-screen">
      <div className="mx-auto  px-10">
       <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full  mt-6  flex flex-col gap-3 "
       >
       <div className="flex justify-start items-center gap-[34rem] ">
       <div >
          <h1 className="text-3xl font-bold text-secondary flex justify-center items-center gap-3 font-lora">Edit Profile <FiEdit /></h1>
          <img src="" alt="" />
        </div>

        {/* img */}

 
       <div className="relative ">
       <img
              className="rounded-full  lg:w-[10rem] h-40 w-36 cursor-pointer"
              src={ img}
              alt=""
              id="profile"
              onClick={() => document.getElementById("imageUpload").click()}
            />
            <TiCameraOutline className="absolute text-gray-600 text-4xl top-24" />

            <input
              type="file"
              id="imageUpload"
              name="image"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
       </div>






       </div>

        {/* form */}

        
          {/* basic info */}
          <h1 className="mt-3 mb-1 font-semibold text-xl">
            Personal Information :
          </h1>
          <div className="space-y-4">
           {/* 1st row */}
           <div className="flex items-center justify-start gap-12">
           <div className="relative">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Enter your name"
                required
                className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                id="email"
                placeholder="Enter your email"
                required
                className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
           </div>
          {/* 2nd row */}
          <div className="flex justify-start items-center gap-12">
              {/* phone */}
              <div className="relative">
              <label
                htmlFor="number"
                className="block  text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter Your Phone Number"
                
                className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            {/* address */}
             
              <div className="relative">
              <label
                htmlFor="text"
                className="block  text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Please Provide Your Address"
                
                className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>

          </div>
          </div>

          {/* bio */}

          <div className="mb-4">
                  <label
                    htmlFor="about"
                    className="block  text-sm font-medium text-gray-700"
                  >
                    About Me:
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    
                    className="mt-1 block w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Enter your message"
                    rows="3"
                  />
                  
                </div>

  

          {/* Career Information: */}
          <div>
            <h1 className="mb-5 mt-5 text-xl font-semibold">
              Career Information:
            </h1>
            <div className="space-y-4">
             <div className="flex justify-start items-center gap-12">
                  {/* 1 */}
              <div className="relative">
                <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">
                  Area of Expertise
                </label>
                <select
                  name="expertise"
                  id="expertise"
                  className="mt-1 block w-full md:w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                >
                  <option value="">Select Area</option>
                  <option value="Technical">Technical</option>
                  <option value="Non-Technical">Non-Technical</option>
                </select>
              </div>

              {/* 2 */}
              <div className="relative">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <select
                  name="experience"
                  id="experience"
                  className="mt-1 block w-full md:w-[424px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0 - 1 year</option>
                  <option value="1-2">1 - 2 years</option>
                  <option value="2-3">2 - 3 years</option>
                  <option value="3-4">3 - 4 years</option>
                  <option value="4-5">4 - 5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

             </div>

             

              

            <div>
                <h1 className="mb-5 mt-12 text-xl font-semibold">Socials :</h1>

                <div className="flex justify-start items-center gap-10">
                     {/* facebook */}
              <div className="relative">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facebook
                </label>
                <input
                  type="url"
                  name="facebook"
                  placeholder="Facebook Profile Link"
                  className="mt-1 block w-[270px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
                     {/* twitter */}
              <div className="relative">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Twitter
                </label>
                <input
                  type="url"
                  name="twitter"
                  placeholder="Twitter Profile Link"
                  className="mt-1 block w-[270px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
                     {/* linkdin */}
              <div className="relative">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Linkdin
                </label>
                <input
                  type="url"
                  name="linkdin"
                  placeholder="Linkdin Profile Link"
                  className="mt-1 block w-[270px] px-3 py-2 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
                </div>
            </div>

           
            </div>
          </div>

          <div className="mt-12 flex justify-end  items-start ml-[29rem]  w-[27rem] gap-7 ">
            <button
              onClick={handleReset}
              className="py-2 font-bold rounded-md w-full border-secondary text-secondary hover:bg-secondary border hover:border hover:border-secondary hover:text-white "
            >
             Cancel
            </button>
            <button
              type="submit"
              className="py-2 font-bold rounded-md w-full bg-secondary text-white hover:bg-transparent border hover:text-secondary hover:border hover:border-secondary "
            >
              Save
            </button>
           
          </div>
        
       </form>
      </div>
    </div>
  );
};

export default Profile;
