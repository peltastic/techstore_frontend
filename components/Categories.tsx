import Product from "./Product";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../api/requests/product";
import Button from "./Button";
import EarphoneImg from "../assets/cat/earphones.png";
import HeadphoneImg from "../assets/cat/headphones.png";
import WatchesImg from "../assets/cat/watches.png";
import LaptopImg from "../assets/cat/laptops.png";
import GamingImg from "../assets/cat/gaming.png";
import SpeakerImg from "../assets/cat/speaker.png";
import Image from "next/image";
import Featured from "../components/Featured"

type Props = {
  // offset?: number;
  // limit?: number;
  // heading: string;
};

const Categories = (props: Props) => {
  return (
    <section className="flex flex-wrap bp2:flex-nowrap w-full">
      <div className="w-[100%] bp2:w-[50%] mt-10 flex flex-wrap bp6:mr-4">
        <div className="w-full flex flex-wrap xs:flex-nowrap mb-8">
          <div className="relative my-3 xs:my-0 text-white bp2:mr-4 w-full xs:w-[51%] bp2:w-[48%] bg-gradient-to-br from-[#000000] to-[#3b3b3b] rounded-3xl h-[30rem]">
            <div className="w-[30rem] absolute right-[-1rem]">
              <Image src={EarphoneImg} />
            </div>

            <div className="absolute left-[3rem] bottom-[3rem]">
              <p className="my-1">Enjoy</p>
              <p className="my-1 text-3xl">With</p>
              <p className="text-5xl bp1:text-6xl font-bold opacity-25 my-2">EARPHONE</p>
              <Button
                class="bg-primary my-3 px-[2.8rem] bp1:px-[3.6rem] py-[.8rem] bp1:py-[1.2rem] text-xl"
                content="Browse"
              />
            </div>
          </div>
          <div className="text-white relative xs:ml-4 xs:my-0 my-3 w-full xs:w-[51%] bp2:w-[48%] bg-gradient-to-br from-[#efc408] to-[#ffd000]  rounded-3xl h-[30rem]">
            <div className="w-[20rem] absolute right-[2rem]">
              <Image src={WatchesImg} />
            </div>
            <div className="absolute left-[3rem] bottom-[3rem]">
              <p className="my-1">New</p>
              <p className="my-1 text-3xl">Wear</p>
              <p className="text-5xl bp1:text-6xl font-bold opacity-25 my-2 text-white">
                WATCHES
              </p>
              <Button
                class="bg-white text-[#ffd000] my-3 px-[2.8rem] bp1:px-[3.6rem] py-[.8rem] bp1:py-[1.2rem] text-xl"
                content="Browse"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full bg-gradient-to-br from-[#cacaca] to-[#ebebeb] rounded-3xl h-[30rem]">
          <div className="w-[20rem] absolute right-[5rem] sm:right-[10rem] bottom-[3rem]">
            <Image src={GamingImg} />
          </div>
          <div className="absolute left-[3rem] bp1:left-[8rem] bottom-[4rem]">
            <p className="my-1">Best</p>
            <p className="my-1 text-3xl">Gaming</p>
            <p className=" text-5xl bp1:text-6xl font-bold opacity-80 my-2 text-white">
              MOBILES
            </p>
            <Button
              class="bg-white text-[#ffd000] my-3 px-[2.8rem] bp1:px-[3.6rem] py-[.8rem] bp1:py-[1.2rem] text-xl"
              content="Browse"
            />
          </div>
        </div>
      </div>
      <div className=" w-[100%] bp2:w-[50%] mt-10 flex flex-wrap bp2:ml-4">
        <div className="text-white relative w-full mb-8 bg-gradient-to-br from-[#d20303] to-[#ea4444] rounded-3xl h-[30rem]">
          <div className="w-[30rem] sm:w-[35rem] absolute right-0 sm:right-[2rem]">
            <Image src={LaptopImg} />
          </div>
          <div className="absolute left-[3rem] bp1:left-[8rem] bottom-[8rem] sm:bottom-[3rem]">
            <p className="my-1">Trend</p>
            <p className="my-1 text-3xl">Devices</p>
            <p className="text-5xl bp1:text-6xl font-bold opacity-25 my-2 text-white">
              LAPTOPS
            </p>
            <Button
              class="bg-white text-[#ffd000] my-3 px-[2.8rem] bp1:px-[3.6rem] py-[.8rem] bp1:py-[1.2rem]  text-xl" 
              content="Browse"
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap xs:flex-nowrap">
          <div className="relative my-3 xs:my-0 text-white bp2:mr-4 w-full xs:w-[51%] bp2:w-[48%] bg-gradient-to-br  from-[#03c806] to-[#03ab069f] rounded-3xl h-[30rem]">
            <div className="w-[20rem] absolute right-[0rem] top-[2rem]">
              <Image src={HeadphoneImg} />
            </div>
            <div className="absolute left-[3rem] bottom-[3rem]">
              <p className="my-1">Play</p>
              <p className="my-1 text-3xl">Your</p>
              <p className="text-5xl bp1:text-6xl font-bold opacity-25 my-2 text-white">
                HEADPHONES
              </p>
              <Button
                class="bg-white text-[#ffd000] my-3 px-[2.8rem] bp1:px-[3.6rem] py-[.8rem] bp1:py-[1.2rem]  text-xl"
                content="Browse"
              />
            </div>
          </div>
          <div className="text-white my-3 xs:my-0 relative xs:ml-4 w-full xs:w-[48%] bg-gradient-to-br from-[#2565c6] to-[#3873cb] rounded-3xl h-[30rem]">
            <div className="w-[20rem] absolute right-[1rem] top-[1rem]">
              <Image src={SpeakerImg} />
            </div>
            <div className="absolute left-[3rem] bottom-[3rem]">
              <p className="my-1">New</p>
              <p className="my-1 text-3xl">Amazing</p>
              <p className="text-5xl bp1:text-6xl font-bold opacity-25 my-2 text-white">
                SPEAKER
              </p>
              <Button
                class="bg-white text-[#ffd000] my-3 px-[2.8rem] bp1:px-[3.6rem] py-[.8rem] bp1:py-[1.2rem] text-xl"
                content="Browse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
