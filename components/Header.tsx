import classes from "../styles/header.module.css";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div className={`${classes.Header} flex h-[95vh] mt-[5rem]`}>
      <div className={`w-[40%] mt-[10%] ml-[9rem] ${classes.Heading}`}>
        <h1 className="text-transparent text-[5rem] stroke-h ">TECH STORE</h1>
        <p className="text-[#B3541E] text-[1.5rem] italic ">
          your one stop online shop for tech gadgets
        </p>
      <Link href={"/products"}>
        <a className=" mt-[5rem] flex items-center text-[#B3541E] bg-white border-none py-4 px-6 text-lg rounded-3xl w-[13rem]">
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
