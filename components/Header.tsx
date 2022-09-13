import { useEffect } from "react";
import classes from "../styles/header.module.css";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Button from "./Button";
import HeroImg from "../assets/header.png";
import Image from "next/image";

function Header() {
  const controls = useAnimation();
  const subHeadingVariant = {
    hidden: { opacity: 0.6, y: 40, display: "none" },
    visible: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        delay: 2,
        type: "spring",
      },
    },
  };
  const headerVariant = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.1;
      return {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          x: {
            type: "spring",
          },
        },
      };
    },
  };
  useEffect(() => {
    controls.start("visible");
  }, []);

  const headerLeft = ["T", "E", "C", "H"];
  const headerRight = ["S", "T", "O", "R", "E"];

  return (
    <header className="h-[90vh] mt-[5rem] rounded-3xl bg-gradient-to-br from-[#cacaca] to-[#ebebeb]">
      <div className="w-full px-[15rem] pt-[15rem] relative">
        <h2 className="mb-6 font-bold text-2xl text-primary">GET</h2>
        <h2 className="font-bold text-6xl">YOUR TECH</h2>
        <h1 className="text-white text-[15rem] text-center -mt-[3rem] font-bold">
          ACCESORIES
        </h1>
        <div className="w-[45rem]  rotate-[25deg] absolute bottom-0 left-[40%] ">
          <Image src={HeroImg} alt="hero" />
        </div>
      </div>
      <div className="px-[15rem] mt-[1rem] flex items-start">
        <Button
          class="text-white bg-primary px-[1.5rem] mr-auto py-[1rem]"
          content="Shop Now"
        />
        <p className="text-[#707070] text-right">
          Buy Tech accessories for your devices,
          <br />
           like headphones, chargers,
          airpods and others at good proices{" "}
        </p>
      </div>
    </header>
  );
}

export default Header;
