import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
type Props = {};

function Nav({}: Props) {
  return (
    <nav className="w-full border-b-[#B3541E] px-8 py-6 border-b flex items-center text-white fixed top-0 left-0 z-20 bg-[#040303]">
      <Image src={Logo} alt="" />
      <ul className="flex m-auto text-[1.2rem]">
        <li className="mx-[4rem]">
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>

        <li className="mx-[4rem]">
          <Link href={"/"}>
            <a>Phones</a>
          </Link>
        </li>
        <li className="mx-[4rem]">
          <Link href={"/"}>
            <a>Laptops</a>
          </Link>
        </li>
        <li className="mx-[4rem]">
          <Link href={"/login"}>
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
      <div className="ml-auto relative">
        <BsCart3 className="text-2xl" />
        <div className="h-[15px] w-[15px] flex justify-center items-center absolute top-[-7px] right-[-7px] bg-[#B3541E] px-[.5px] py-[.5px] rounded-full">
          <p className="  text-sm  text-center">0</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
