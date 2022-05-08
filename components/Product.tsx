import React from "react";
// import { MdAdd } from "react-icons/md";
import { useRouter } from "next/router";

type Props = {
  name: string;
  desc: string;
  price: number;
  imageUrl: string;
};

function Product(props: Props) {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);
  return (
    <div
      className="w-[30%] border text-white border-[#B3541E] h-[40rem] relative mx-8"
      onClick={() => router.push(`/products/${category}/regular/${props.name}`)}
    >
      <h1 className="text-center my-4 text-2xl">{props.name}</h1>
      <div className="h-[70%] ">
        <img src={props.imageUrl} className="h-full mx-auto block" />
      </div>
      <div className="border w-full text-[1.5rem] flex absolute bottom-0 left-0 px-6 py-4">
        <p className="mr-auto">N{props.price}</p>
        <p>{props.desc}</p>
        {/* <div className=" w-[70%] justify-between flex items-center">
          <button className="bg-[#B3541E] rounded-full p-[.1rem]">
            <MdAdd />
          </button>
          <p>2</p>
          <button className="bg-[#B3541E] rounded-full p-[.1rem]">
            <MdAdd />
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product;
