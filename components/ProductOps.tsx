import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import classes from "../styles/productOps.module.css"

type Props = {
  class_left: string;
  class_right: string;
  name_left: string;
  name_right: string;
  route_left: string;
  route_right: string;
};

function ProductOps(props: Props) {
  return (
    <div className={`${classes.Container} flex flex-wrap justify-center w-full h-screen my-auto`}>
      <div
        className={`${props.class_left} ml-[5rem] mr-[-6rem] relative ${classes.Ops} ${classes.OpsLeft} w-[50%] h-[70vh]  my-auto`}
      >
        <div className="absolute text-white top-[50%] left-[30%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-[2rem] mb-[2rem]">{props.name_left}</h1>
          <Link href={props.route_left}>
            <a className={`${classes.Glow} flex font-bold text-[1.2rem] items-center bg-transparent px-[2rem] rounded-[2rem] py-[.7rem]`}>
              Next
              <FiArrowRight className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${props.class_right} ${classes.Ops} ${classes.OpsRight} relative mr-[5rem] ml-[-6rem] w-[50%] h-[70vh] border border-[#B3541E] my-auto`}
      >
        <div className="absolute text-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-[2rem] mb-[2rem]">{props.name_right}</h1>
          <Link href={props.route_right}>
            <a className={`${classes.Glow} flex justify-center font-bold text-[1.2rem] items-center bg-transparent text-[#ffffff] px-[2rem] rounded-[2rem] py-[.7rem]`}>
              Next
              <FiArrowRight className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductOps;
