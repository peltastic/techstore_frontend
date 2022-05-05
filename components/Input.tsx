import React from "react";

type Props = {
  type: string;
  placeholder: string;
};

function Input(props: Props) {
  return <input type={props.type} placeholder={props.placeholder} className="block m-auto mb-8 w-[70%] rounded-3xl px-5 py-2 text-xl text-center"/>;
}

export default Input;
