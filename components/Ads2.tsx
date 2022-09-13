import React from "react";
import AdsImg from "../assets/watch.png";
import Button from "./Button";
import Image from "next/image";

type Props = {};

const Ads2 = (props: Props) => {
  return (
    <section className=" relative w-full mt-[15rem] mb-[5rem]">
      <div className="rounded-3xl bg-[#03ab069f] flex items-center w-full h-[40rem] px-[10rem] ">
        <div className="absolute w-[40rem] left-[20%] -top-[30%]">
          <Image src={AdsImg} />
        </div>
        <div className="text-white   mr-auto">
          <p className="opacity-80 ml-2">20% off</p>
          <p className="font-bold text-[10rem] -mt-[2rem]">HAPPY</p>
          <p className="font-bold text-[10rem] -mt-[6rem]">HOURS</p>
          <p className="opacity-80 -mt-[2rem] ml-2">10 Jul - 15 Dec</p>
        </div>
        <div className="text-white w-[30%]">
          <p>Cesory</p>
          <p className="text-[5rem]">Summer Sale</p>
          <p>
            Company that's grown from 270 to 480 employees in <br /> the last 12
            monnths{" "}
          </p>
          <Button
            class=" text-primary px-[2rem] py-[1rem] my-[2rem] bg-white"
            content="Shop"
          />
        </div>
      </div>
    </section>
  );
};

export default Ads2;
