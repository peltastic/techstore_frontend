import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import classes from "../../styles/heading.module.css";

const Heading = () => {
  const controls = useAnimation();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.1;
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
      {/* <div className={`${classes.Heading}`}> */}
      <div className={`w-[80%] mx-auto sm:w-auto mb-10`}>
      <motion.svg
      
      initial="hidden"
      animate={controls}
       viewBox="0 0 869 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
variants={draw}
custom={0.5} d="M561.523 12.002L561.477 123.222" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={0.5} x1="512" y1="9.5" x2="608" y2="9.5" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={1.5} x1="802.547" y1="12.0032" x2="802.5" y2="123.224" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M794.48 13.5005L868.122 14.4106" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={2} x1="795.093" y1="117.428" x2="868.734" y2="118.338" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={0.5} x1="795" y1="62.4277" x2="849" y2="62.4277" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M140.547 8.00293L140.5 119.223" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M132.48 9.50049L206.122 10.4106" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={1} x1="133.093" y1="113.428" x2="206.734" y2="114.338" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={1} x1="133" y1="58.4272" x2="187" y2="58.4272" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={0.5} x1="52.0234" y1="12.0032" x2="51.9765" y2="123.224" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={1.5} x1="-1.64457e-10" y1="9.5" x2="96" y2="9.5" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={2.5} x1="326.547" y1="10.0032" x2="326.5" y2="121.224" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={1.5} x1="384.547" y1="9.00316" x2="384.5" y2="120.224" stroke="#dbd7d7" stroke-width="15"/>
<motion.line 
variants={draw}
custom={0.5} x1="323" y1="58.5" x2="377" y2="58.5" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M292 117C262.177 117 238 95.9187 238 61.92C238 27.9214 262.177 9 292 9" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M472.82 64.137C454.489 55.2047 444.86 37.2266 451.314 23.9818C457.768 10.737 477.86 7.24107 496.191 16.1734" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M471.459 64.0081C489.669 73.1825 498.954 91.2354 492.198 104.33C485.442 117.425 465.203 120.604 446.993 111.429" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M686.5 61.5C686.5 77.2086 682.242 91.0908 675.751 100.827C669.225 110.615 661.034 115.5 653 115.5C644.966 115.5 636.775 110.615 630.249 100.827C623.758 91.0908 619.5 77.2086 619.5 61.5C619.5 45.7914 623.758 31.9092 630.249 22.1732C636.775 12.3848 644.966 7.5 653 7.5C661.034 7.5 669.225 12.3848 675.751 22.1732C682.242 31.9092 686.5 45.7914 686.5 61.5Z" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M724.159 72.6729L763.893 120.621" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M726.047 6L725.998 121.22" stroke="#dbd7d7" stroke-width="15"/>
<motion.path
variants={draw}
custom={0.5} d="M719 69.1937C743.853 69.1937 764 56.2068 764 40.1867C764 24.1666 743.853 11.1797 719 11.1797" stroke="#dbd7d7" stroke-width="15"/>
</motion.svg>
      </div>
    </>
  );
};

export default Heading;
