import type { NextPage } from "next";
import LoginPage from "../components/Login";
import { useState } from "react";

type Props = {};

const Login: NextPage = ({}: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const activeStyle: string = " border border-b-0 z-10"
  const isLoginHandler = (val: boolean) => {
    setIsLogin(val);
  };
  return (
    <div className="h-screen flex text-white ">
      <div className="border w-[50%]"></div>
      <div className="w-[50%] px-8  my-auto">
        <div className=" flex justify-center ">
          <button
            className={`px-6 py-3${isLogin?activeStyle :null}`}
            onClick={() => isLoginHandler(true)}
          >
            LOGIN
          </button>
          <button className={`px-6 py-3 ${!isLogin?activeStyle :null}`}  onClick={() => isLoginHandler(false)}>
            SIGN UP
          </button>
        </div>
        <div className="border px-6 py-11">
          <LoginPage login={isLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
