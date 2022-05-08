import React from "react";
import HeaderImg from "../assets/header.svg";
import Image from "next/image";
import classes from "../styles/header.module.css";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div className={classes.Header}>
      <div className="absolute top-[40%] left-[30%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-transparent text-[10rem] stroke-h ">TECH STORE</h1>
        <p className="text-[#B3541E] text-[2rem] italic mt-[-2rem] stroke-h">
          your one stop online shop for tech gadgets
        </p>
      </div>
      <Link href={"/products"}>
        <a className="flex items-center text-[#B3541E] bg-white border-none py-4 px-6 text-lg rounded-3xl absolute bottom-80 left-[9rem]">
          Check Products
          <FiArrowRight className="ml-[.5rem]" />
        </a>
      </Link>

      <div className="absolute top-[11rem] right-[20rem]">
        <Image src={HeaderImg} className={classes.svg} />
      </div>
    </div>
  );
}

export default Header;
