import React from "react";
import Input from "./Input";

type Props = {
  login: boolean;
};

function Login(props: Props) {

  let content;
  if (props.login) {
    content = (
      <>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </>
    );
  } else {
    content = (
      <>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </>
    );
  }
  return (
    <div className="text-white">
      {content}
      <button className="m-auto block border rounded-3xl px-5 py-2">
        Next
      </button>
    </div>
  );
}

export default Login;
