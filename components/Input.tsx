type Props = {
  type: string;
  placeholder: string;
  changed: (e: any) => void;
  value: string
};

function Input(props: Props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.changed}
      value={props.value}
      className="block m-auto mb-8 w-[70%] rounded-3xl px-5 py-2 text-xl text-center text-[#514e4e]"
    />
  );
}

export default Input;
