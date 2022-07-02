import classes from "../styles/product.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function ProductLoader() {
  const controls = useAnimation();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 2,
            bounce: 0,
            repeat: Infinity,
          },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <div className={`w-[30%] ${classes.ProductLoader} mr-[4rem]`}>
      <motion.svg
        initial="hidden"
        animate={controls}
        // width="428"
        height="316"
        viewBox="0 0 428 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_113_4)">
          <motion.rect
            variants={draw}
            custom={0.5}
            x="3.5"
            y="7.5"
            width="405"
            height="293"
            stroke="white"
            stroke-width="2"
            shape-rendering="crispEdges"
          />
        </g>
        <motion.rect
          variants={draw}
          custom={0.5}
          x="23.5"
          y="22.5"
          width="367"
          height="261"
          stroke="white"
          stroke-opacity="0.34"
          stroke-width="2"
        />
        <defs>
          <filter
            id="filter0_d_113_4"
            x="0"
            y="0"
            width="428"
            height="316"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="8" dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_113_4"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_113_4"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
}

export default ProductLoader;
