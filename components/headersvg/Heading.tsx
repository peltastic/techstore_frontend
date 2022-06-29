import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import classes from "../../styles/heading.module.css";

const Heading = () => {
  const controls = useAnimation();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          repeat: Infinity,
        },
      };
    },
  };
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <div className={`${classes.Heading}`}>
        <motion.svg
          initial="hidden"
          animate={controls}
          width="789"
          height="134"
          viewBox="0 0 1589 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M564.523 12.0022L564.477 123.223"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={0.5}
              x1="515"
              y1="12"
              x2="611"
              y2="12"
              stroke="white"
              strokeWidth="20"
            />
          </g>
          <g filter="url(#filter1_d_109_51)">
            <motion.line
              variants={draw}
              custom={2.5}
              x1="813.047"
              y1="12.0021"
              x2="813"
              y2="123.223"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="809.449"
              y1="17.0004"
              x2="883.091"
              y2="17.9105"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="809.062"
              y1="119.928"
              x2="882.704"
              y2="120.838"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="809"
              y1="64.9275"
              x2="863"
              y2="64.9275"
              stroke="white"
              strokeWidth="20"
            />
          </g>
          <g filter="url(#filter2_d_109_51)">
            <motion.line
              variants={draw}
              custom={2.5}
              x1="52.5234"
              y1="12.0021"
              x2="52.4765"
              y2="123.223"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="3"
              y1="12"
              x2="99"
              y2="12"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="143.047"
              y1="6.00211"
              x2="143"
              y2="117.223"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="139.449"
              y1="11.0004"
              x2="213.091"
              y2="11.9105"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="139.062"
              y1="113.928"
              x2="212.704"
              y2="114.838"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="139"
              y1="58.9275"
              x2="193"
              y2="58.9275"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="327.047"
              y1="10.0021"
              x2="327"
              y2="121.223"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="385.047"
              y1="9.00211"
              x2="385"
              y2="120.223"
              stroke="white"
              strokeWidth="20"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="326"
              y1="61"
              x2="380"
              y2="61"
              stroke="white"
              strokeWidth="20"
            />
            <motion.path
              variants={draw}
              custom={1.5}
              d="M295 117C265.177 117 241 95.9187 241 61.92C241 27.9214 265.177 9 295 9"
              stroke="white"
              strokeWidth="20"
            />
          </g>
          <g filter="url(#filter3_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M475.82 64.137C457.489 55.2047 447.86 37.2266 454.314 23.9818C460.768 10.737 480.86 7.24107 499.191 16.1734"
              stroke="white"
              strokeWidth="20"
            />
            <motion.path
              variants={draw}
              custom={2.5}
              d="M474.459 64.0079C492.669 73.1823 501.954 91.2353 495.198 104.33C488.442 117.425 468.203 120.604 449.993 111.429"
              stroke="white"
              strokeWidth="20"
            />
          </g>
          <g filter="url(#filter4_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M692 66C692 80.8104 687.675 94.0121 680.932 103.385C674.185 112.766 665.304 118 656 118C646.696 118 637.815 112.766 631.068 103.385C624.325 94.0121 620 80.8104 620 66C620 51.1896 624.325 37.9879 631.068 28.6146C637.815 19.2336 646.696 14 656 14C665.304 14 674.185 19.2336 680.932 28.6146C687.675 37.9879 692 51.1896 692 66Z"
              stroke="white"
              strokeWidth="20"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter5_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M733.159 74.3582L772.893 120.642"
              stroke="white"
              strokeWidth="20"
            />
            <motion.path
              variants={draw}
              custom={1.5}
              d="M728.047 10L728 121.22"
              stroke="white"
              strokeWidth="20"
            />
            <motion.path
              variants={draw}
              custom={1.5}
              d="M728 71C752.853 71 773 58.464 773 43C773 27.536 752.853 15 728 15"
              stroke="white"
              strokeWidth="20"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_109_51"
              x="512"
              y="7"
              width="104"
              height="124.225"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_109_51"
              x="805"
              y="12"
              width="83.1525"
              height="121.838"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <motion.filter
              variants={draw}
              custom={1.5}
              id="filter2_d_109_51"
              x="0"
              y="4"
              width="395.047"
              height="127.225"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </motion.filter>
            <filter
              id="filter3_d_109_51"
              x="444.306"
              y="6.22607"
              width="63.1184"
              height="123.426"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_109_51"
              x="612"
              y="9"
              width="90"
              height="122"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_109_51"
              x="720"
              y="9.99792"
              width="63"
              height="121.901"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
          </defs>
        </motion.svg>
      </div>
      <div className={`${classes.HeadingLg}`}>
        <motion.svg
          initial="hidden"
          animate={controls}
          width="389"
          height="134"
          viewBox="0 0 989 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M564.523 12.0022L564.477 123.223"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={0.5}
              x1="515"
              y1="12"
              x2="611"
              y2="12"
              stroke="white"
              strokeWidth="15"
            />
          </g>
          <g filter="url(#filter1_d_109_51)">
            <motion.line
              variants={draw}
              custom={2.5}
              x1="813.047"
              y1="12.0021"
              x2="813"
              y2="123.223"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="809.449"
              y1="17.0004"
              x2="883.091"
              y2="17.9105"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="809.062"
              y1="119.928"
              x2="882.704"
              y2="120.838"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="809"
              y1="64.9275"
              x2="863"
              y2="64.9275"
              stroke="white"
              strokeWidth="15"
            />
          </g>
          <g filter="url(#filter2_d_109_51)">
            <motion.line
              variants={draw}
              custom={2.5}
              x1="52.5234"
              y1="12.0021"
              x2="52.4765"
              y2="123.223"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="3"
              y1="12"
              x2="99"
              y2="12"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="143.047"
              y1="6.00211"
              x2="143"
              y2="117.223"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="139.449"
              y1="11.0004"
              x2="213.091"
              y2="11.9105"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="139.062"
              y1="113.928"
              x2="212.704"
              y2="114.838"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="139"
              y1="58.9275"
              x2="193"
              y2="58.9275"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="327.047"
              y1="10.0021"
              x2="327"
              y2="121.223"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="385.047"
              y1="9.00211"
              x2="385"
              y2="120.223"
              stroke="white"
              strokeWidth="15"
            />
            <motion.line
              variants={draw}
              custom={2.5}
              x1="326"
              y1="61"
              x2="380"
              y2="61"
              stroke="white"
              strokeWidth="15"
            />
            <motion.path
              variants={draw}
              custom={1.5}
              d="M295 117C265.177 117 241 95.9187 241 61.92C241 27.9214 265.177 9 295 9"
              stroke="white"
              strokeWidth="15"
            />
          </g>
          <g filter="url(#filter3_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M475.82 64.137C457.489 55.2047 447.86 37.2266 454.314 23.9818C460.768 10.737 480.86 7.24107 499.191 16.1734"
              stroke="white"
              strokeWidth="15"
            />
            <motion.path
              variants={draw}
              custom={2.5}
              d="M474.459 64.0079C492.669 73.1823 501.954 91.2353 495.198 104.33C488.442 117.425 468.203 120.604 449.993 111.429"
              stroke="white"
              strokeWidth="15"
            />
          </g>
          <g filter="url(#filter4_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M692 66C692 80.8104 687.675 94.0121 680.932 103.385C674.185 112.766 665.304 118 656 118C646.696 118 637.815 112.766 631.068 103.385C624.325 94.0121 620 80.8104 620 66C620 51.1896 624.325 37.9879 631.068 28.6146C637.815 19.2336 646.696 14 656 14C665.304 14 674.185 19.2336 680.932 28.6146C687.675 37.9879 692 51.1896 692 66Z"
              stroke="white"
              strokeWidth="15"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter5_d_109_51)">
            <motion.path
              variants={draw}
              custom={1.5}
              d="M733.159 74.3582L772.893 120.642"
              stroke="white"
              strokeWidth="15"
            />
            <motion.path
              variants={draw}
              custom={1.5}
              d="M728.047 10L728 121.22"
              stroke="white"
              strokeWidth="15"
            />
            <motion.path
              variants={draw}
              custom={1.5}
              d="M728 71C752.853 71 773 58.464 773 43C773 27.536 752.853 15 728 15"
              stroke="white"
              strokeWidth="15"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_109_51"
              x="512"
              y="7"
              width="104"
              height="124.225"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_109_51"
              x="805"
              y="12"
              width="83.1525"
              height="121.838"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <motion.filter
              variants={draw}
              custom={1.5}
              id="filter2_d_109_51"
              x="0"
              y="4"
              width="395.047"
              height="127.225"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </motion.filter>
            <filter
              id="filter3_d_109_51"
              x="444.306"
              y="6.22607"
              width="63.1184"
              height="123.426"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_109_51"
              x="612"
              y="9"
              width="90"
              height="122"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_109_51"
              x="720"
              y="9.99792"
              width="63"
              height="121.901"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_109_51"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_109_51"
                result="shape"
              />
            </filter>
          </defs>
        </motion.svg>
      </div>
    </>
  );
};

export default Heading;
