import { BsInstagram, BsTwitter, BsReddit } from "react-icons/bs";
type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col sm:flex-row px-12 sm:px-40 py-10 w-full">
      <h1 className="text-[2rem] mb-5 sm:mb-0 glow mr-auto">
        TECH STORE
      </h1>
      <div className="flex glow items-center text-2xl">
       <p className="px-4">INSTAGRAM</p>
       <p className="px-4">TWITTER</p>
       <p className="px-4">YOUTUBE</p>
      </div>
    </div>
  );
}

export default Footer;
