import InputLive from "./InputLive";
import avatar from "../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
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
      <div className="w-screen flex">
        <div className="w-[25%] h-screen bg-gray-200">
          <div className="flex justify-center items-center my-8 gap-4">
            <div className="border-2 border-gray-500 p-2 rounded-full avatar-group ">
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
                    <div className="flex items-center ml-5 py-8 border-b border-b-gray-300 gap-4">
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
        <div className="w-[50%] h-screen"></div>
        <div className="w-[25%] h-screen"></div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default SocketChatLive;
