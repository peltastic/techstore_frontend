import classes from "../styles/button.module.css";
import { FiArrowRight } from "react-icons/fi";
type Button = {
  content: string;
  type?: "link";
  class: string;
};

const Button = (props: Button) => {
  return (
    <button
      className={`${classes.Button} ${props.class} flex items-center text-[#fff]`}
    >
      {props.content}
      {props.type === "link" ? <FiArrowRight className="ml-4" /> : null}
    </button>
  );
};

export default Button;
