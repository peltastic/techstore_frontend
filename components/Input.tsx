type Props = {
  type: string;
  placeholder: string | undefined;
  changed: (e: any) => void;
  value: string | number
  class: string 
};

function Input(props: Props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.changed}
      value={props.value}
      className={`${props.class} block rounded-3xl px-5 py-2 text-xl text-center text-[#514e4e]`}
    />
  );
}

export default Input;
