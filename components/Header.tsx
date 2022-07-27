import { useEffect } from "react";
import classes from "../styles/header.module.css";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Button from "./Button";

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
    <div
      className={`${classes.Header} items-center w-full flex h-[95vh] mt-[5rem] overflow-hidden`}
    >
      <div
        className={`w-[40%] mr-auto -mt-[5rem]  ml-[4rem] ${classes.Heading}`}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          className="text-white text-[8rem] glow flex "
        >
          {headerLeft.map((el, index) => (
            <motion.h1
              className=""
              variants={headerVariant}
              custom={index}
              key={index}
            >
              <span>{el}</span>
            </motion.h1>
          ))}
          &nbsp;
          {headerRight.map((el, index) => (
            <motion.h1
              className=""
              variants={headerVariant}
              custom={index + 4}
              key={index}
            >
              <span>{el}</span>
            </motion.h1>
          ))}
        </motion.div>
        <motion.p
          variants={subHeadingVariant}
          initial="hidden"
          animate="visible"
          className={`text-[1.5rem] mb-10 italic text-white md:glow`}
        >
          your one stop online shop for tech gadgets
        </motion.p>
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          transition={{ delay: 3, type: "spring" }}
          className="opacity-0 w-full mt-[4rem] sm:w-auto flex lg:block justify-center"
        >
          <Link href={"/products"}>
            <a>
              <Button
                content="Check Products"
                type="link"
                class="px-[2rem] py-4 md:py-3  rounded-full text-xl"
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
