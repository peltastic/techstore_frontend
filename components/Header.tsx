import classes from "../styles/header.module.css";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Heading from "./headersvg/Heading";

type Props = {};

function Header({}: Props) {
  return (
    <div
      className={`${classes.Header} items-center w-full flex h-[95vh] mt-[5rem]`}
    >
      <div className={`w-[40%] -mt-[5rem]  ml-[4rem] ${classes.Heading} `}>
        <div className=" mx-auto w-full">
        <Heading />
        </div>
        <p className={`-[1.5rem] italic ${classes.Glow}`}>
          your one stop online shop for tech gadgets
        </p>
        <Link href={"/products"}>
          <a className=" mt-[5rem] flex items-center font-bold text-[#B3541E] bg-white border-none py-4 px-6 text-lg rounded-3xl w-[14rem]">
            Check Products
            <FiArrowRight className="ml-[.5rem]" />
          </a>
        </Link>
      </div>

      <div className={`${classes.HeaderImg} w-[60%] h-full`}></div>
    </div>
  );
}

export default Header;
