import classes from "../styles/header.module.css";

import Link from "next/link";
import Heading from "./headersvg/Heading";
import { motion, Variant } from "framer-motion";
import Button from "./Button";

function Header() {
  const subHeadingVariant = {
    hidden: { opacity: 0.6, y: 40, display: "none" },
    visible: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        delay: 2.5,
        opacity: {
          repeat: Infinity,
          duration: 2,
          type: "tween",
          ease: [0.17, 0.67, 0.83, 0.67],
        },
      },
    },
  };

  return (
    <div
      className={`${classes.Header} items-center w-full flex h-[95vh] mt-[5rem] overflow-hidden`}
    >
      <div className={`w-[40%] -mt-[5rem]  ml-[4rem] ${classes.Heading} `}>
        <div className=" mx-auto w-full">
          <Heading />
        </div>
        <motion.p
          variants={subHeadingVariant}
          initial="hidden"
          animate="visible"
          className={`text-[1.5rem] mb-10 italic ${classes.Glow}`}
        >
          your one stop online shop for tech gadgets
        </motion.p>
        <motion.div
          animate={{ x: 20, opacity: 1 }}
          transition={{ delay: 3 }}
          className="opacity-0 w-full sm:w-auto flex sm:block justify-center -ml-[2rem]"
        >
          <Link href={"/products"}>
            <a>
              <Button
                content="Check Product"
                type="link"
                class="px-[2rem] py-3  rounded-full text-xl"
              />
            </a>
          </Link>
        </motion.div>
      </div>

      <div className={`${classes.HeaderImg} w-[60%] h-full`}></div>
    </div>
  );
}

export default Header;
