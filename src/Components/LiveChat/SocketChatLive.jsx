// import InputLive from "./InputLive";
import avatar from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
import { FiPhoneOutgoing } from "react-icons/fi";
import { IoSendSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

const SocketChatLive = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: avatar,
    },
    {
      name: "Mary",
      status: "Available",
      img: avatar,
    },
    {
      name: "Alexander",
      status: "Available",
      img: avatar,
    },
  ];
  return (
    <div>
      {/* <div className="bg-primary h-screen flex justify-center items-center">
        <div className="bg-white w-[400px] h-[600px] shadow-lg shadow-black flex flex-col justify-center items-center"> */}
      {/* <h2 className="text-3xl">Welcome</h2>
          <h2 className="">Sign up now to get started</h2> */}
      {/* <InputLive /> */}

      {/* sitebar chat box */}
      <div className="w-screen flex">
        <div className="w-[25%] h-screen bg-slate-200">
          <div className="flex justify-center items-center my-8 gap-4">
            <div className="border-2 border-gray-500 p-2 rounded-full  ">
              <img src={avatar} width={75} height={75} alt="" />
            </div>
            <div>
              <h3 className="text-2xl">Tutorial Dev</h3>
              <p className="text-lg font-light">My Account</p>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div>
            <h1 className="text-lg  ml-5">Messages</h1>
            <div>
              {contacts?.map(({ name, status, img }) => {
                return (
                  <div className="cursor-pointer">
                    <div className="flex items-center ml-5 py-8  border border-b-gray-300 gap-4">
                      <div className="border-2 border-gray-500 p-2 rounded-full avatar-group">
                        <img src={img} width={50} height={50} alt="" />
                      </div>
                      <div>
                        <h3 className="text-lg">{name}</h3>
                        <p className="text-sm font-light">{status}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-screen bg-white flex flex-col items-center">
          {/* chat box heading*/}
          <div className="w-[75%] bg-slate-100 h-[80px] my-14 rounded-full flex items-center shadow-sm">
            <div>
              <img
                className="cursor-pointer"
                width={60}
                height={60}
                src={avatar}
                alt=""
              />
            </div>
            <div className="ml-6 mr-auto">
              <h3 className="text-lg font-semibold">Alexander</h3>
              <p className=" text-sm font-light text-gray-600">online</p>
            </div>
            <div className="cursor-pointer">
              <FiPhoneOutgoing />
            </div>
          </div>
          {/* live chat box  */}
          <div className="h-[75%]  w-full overflow-scroll">
            <div className=" p-14">
              <div className=" max-w-[50%] bg-slate-300 rounded-b-lg rounded-tr-xl p-4 mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="max-w-[50%] bg-blue-600 rounded-b-lg rounded-tl-xl ml-auto p-4 text-white mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className=" max-w-[50%] bg-slate-300 rounded-b-lg rounded-tr-xl p-4 mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="max-w-[50%] bg-blue-600 rounded-b-lg rounded-tl-xl ml-auto p-4 text-white mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className=" max-w-[50%] bg-slate-300 rounded-b-lg rounded-tr-xl p-4 mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="max-w-[50%] bg-blue-600 rounded-b-lg rounded-tl-xl ml-auto p-4 text-white mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className=" max-w-[50%] bg-slate-300 rounded-b-lg rounded-tr-xl p-4 mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="max-w-[50%] bg-blue-600 rounded-b-lg rounded-tl-xl ml-auto p-4 text-white mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="p-14 w-full flex items-center">
            <input
              type="text"
              placeholder="type a massage...."
              className="w-[75%] p-4 border-0 shadow-md rounded-full bg-slate-100 focus:ring-0 focus:border-0 outline-none"
            />
            <div className="ml-2 text-4xl p-4 cursor-pointer text-slate-500">
              <IoSendSharp />
            </div>
            <div className=" text-3xl cursor-pointer text-slate-500">
              <CiCirclePlus />
            </div>
          </div>
        </div>
        <div className="w-[25%] h-screen bg-slate-200"></div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default SocketChatLive;
