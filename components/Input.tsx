import { BiHide, BiShowAlt } from "react-icons/bi";
type Props = {
  type: string;
  placeholder: string 
  changed: (e: any) => void;
  value: string | number;
  class: string;
  clicked: () => void | string;
  show: boolean | string;
  section: string
};

function Input(props: Props) {
  return (
    <div
      className={`
      ${props.section === "add"? "w-[60%]": null}
      ${
        props.placeholder === "Password"  ? "w-[70%] mx-auto" : null
      } relative`}
    >
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.changed}
        value={props.value}
        className={`${props.class} block rounded-3xl px-5 py-2 text-xl text-center text-[#514e4e]`}
      />
      {props.placeholder === "Password" ? (
        <>
          {props.show ? (
            <BiShowAlt onClick={props.clicked} className="absolute top-[50%] right-7 cursor-pointer text-3xl  text-black -translate-y-[50%] " />
          ) : (
            <BiHide onClick={props.clicked} className="absolute top-[50%] right-7 cursor-pointer text-3xl  text-black -translate-y-[50%] " />
          )}
        </>
      ) : null}
    </div>
  );
}

export default Input;
