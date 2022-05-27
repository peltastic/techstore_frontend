import { BsInstagram, BsTwitter, BsReddit } from "react-icons/bs";
type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex  sm:px-40 px-2 py-6 w-full">
      <h1 className="text-[2rem] mr-auto stroke-h text-[#B3541E]">
        TECH STORE
      </h1>
      <div className="flex items-center text-[#B3541E] text-3xl">
        <BsInstagram className="mx-[2rem] cursor-pointer" />
        <BsTwitter className="mx-[2rem] cursor-pointer" />
        <BsReddit className="mx-[2rem] cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
