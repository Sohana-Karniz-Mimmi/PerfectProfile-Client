import avatar from "../../../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
const ChatUser = () => {
  return (
    <div>
      <div className=" flex space-x-4 items-center text-white cursor-pointer hover:bg-gray-500 duration-300 p-5">
        <div class="relative">
          <div class="w-14 rounded-full">
            <img src={avatar} class="rounded-full" />
          </div>
          <span class="absolute top-1 left-[45px] block h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        </div>
        <div>
          <h1 className="font-bold">Abu Sayem</h1>
          <span>online</span>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
