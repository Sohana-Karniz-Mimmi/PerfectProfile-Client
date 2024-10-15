import avatar from "../../../../assets/profile image/FjU2lkcWYAgNG6d.jpg";
const UserList = () => {
  return (
    <div>
      <div className=" flex space-x-4 items-center text-white cursor-pointer hover:bg-gray-500 duration-300 ">
        <div class="relative">
          <div class="w-14 rounded-full">
            <img src={avatar} class="rounded-full" />
          </div>
          <span class="absolute top-1 left-[45px] block h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        </div>
        <div>
          <h1>Abu Sayem</h1>
          <span>online</span>
        </div>
        {/* <div class="relative">
            <div class="w-24 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                class="rounded-full"
              />
            </div>
            <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-gray-500 border-2 border-white"></span>
          </div> */}
      </div>
    </div>
  );
};

export default UserList;
