
import classes from "../styles/messages.module.css";

export default function Messages(props: any) {
  return (
    <div className={`fixed bottom-[1rem]  right-0 ${props.className} rounded-l-full w-[20rem] z-50 px-8 py-[3rem] ${classes.Messages}`}>
      <h1 className="mx-auto text-center text-white text-4xl">{props.name}</h1>
    </div>
  );
}
