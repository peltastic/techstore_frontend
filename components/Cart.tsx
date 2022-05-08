import { MdAdd } from "react-icons/md";
type Props = {};

function Cart({}: Props) {
  return (
    <div className="w-[80%] mx-auto text-white flex items-center justify-between border border-[#B3541E] h-[20rem] px-16 py-4">
      <img
        className="h-full"
        src="https://th.bing.com/th/id/R.cf054375eba9bbfbf19de6828af276c2?rik=PQLARDUckWCpmg&pid=ImgRaw&r=0"
        alt=""
      />
      <p className="text-4xl">iPhone 12</p>
      <div className="w-[30%] h-[90%] flex flex-col justify-between items-center">
        <p className="text-4xl">N12</p>
        <div className="flex w-full justify-around items-center">
          <button className="bg-[#B3541E] rounded-full ">
            <MdAdd  className="text-6xl"/>
          </button>
          <p className="text-4xl">2</p>
          <button className="bg-[#B3541E] rounded-full ">
            <MdAdd className="text-6xl"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
