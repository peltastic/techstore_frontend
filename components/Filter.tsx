import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Filter } from "../pages/products";

type Props = {
  filters: string[];
  filter_name: string;
  drop?: string;
  dropHand: (filter_name: string) => void;
  clicked: (option: string, value: string) => void;
  filterOption: Filter;
  class?: string;
  type: "products" | "desc";
};

const Filter = (props: Props) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const option = props.filter_name === "Device Type" ? "category" : "type";
  const dropHandler = () => {
    if (props.type === "products") {
      props.dropHand(props.filter_name);
      return;
    }
    setDropDown(!dropDown);
  };
  return (
    <div className=" text-black w-[12rem] text-center mr-12">
      <button
        onClick={dropHandler}
        className={`${props.class} border rounded-full justify-center flex items-center border-black px-6 py-2 w-full`}
      >
        <p>{props.filter_name}</p>
        <IoIosArrowDown className="ml-6" />
      </button>

      <ul
        className={`${
          props.drop === props.filter_name ? "border text-white  h-auto py-2" : "h-0 py-0"
        } ${
          dropDown ? "border glow-border" : null
        } transition-all max-h-[70rem] bg-black relative z-50`}
      >
        {props.filters.map((el, index) => {
          return (
            <li
              className={`${
                props.drop === props.filter_name || dropDown
                  ? "block"
                  : "hidden"
              } py-1`}
              key={index}
            >
              <button
                className={`${
                  props.filterOption[option] === el.toLowerCase() || dropDown
                    ? "glow"
                    : null
                }`}
                onClick={() =>
                  props.clicked(option, el === "All" ? "" : el.toLowerCase())
                }
              >
                {el || "All"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
