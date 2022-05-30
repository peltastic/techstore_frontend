import type { NextPage } from "next";
import { useMutation } from "react-query";
import { signUp, login } from "../api/requests/auth";
import { signinReq, signupReq } from "../api/types/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import Input from "../components/Input";
import classes from "../styles/login.module.css";
import Spinner from "../components/Spinner";

type Props = {};

const Login: NextPage = ({}: Props) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [signupState, setSignupState] = useState<signupReq>({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [signinState, setSigninState] = useState<signinReq>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const signupMutation = useMutation((body: signupReq) => signUp(body), {
    onSuccess: () => {
      setIsLogin(true);
    },
    onError: (error) => {
      const message: any = error;
      setErrorMessage(message.response.data.error);
    },
  });
  const { isLoading, mutate } = useMutation((body: signinReq) => login(body), {
    onSuccess: (data) => {
      setSigninState({ ...signinState, email: "", password: "" });
      const res: any = data;
      sessionStorage.setItem("token", res.data.accessToken);
      router.back();
    },
    onError: (error) => {
      const message: any = error;
      setErrorMessage(message.response.data.error);
    },
  });

  const onChange = (e: any, type: string): void => {
    setErrorMessage("");
    if (isLogin) {
      setSigninState({ ...signinState, [type]: e.target.value });
    } else {
      setSignupState({ ...signupState, [type]: e.target.value });
    }
  };

  const onSubmit = (e: any): void => {
    e.preventDefault();
    if (isLogin) {
      if (!signinState.email || !signinState.password) {
        setErrorMessage("Enter Empty Fields");
      } else {
        mutate(signinState);
      }
    } else {
      if (!signupState.email || !signupMutation) {
        setErrorMessage("Enter Empty Fields");
      } else {
        signupMutation.mutate(signupState);
        setSignupState({ ...signupState, email: "", password: "", name: "" });
      }
    }
  };

  let content;
  if (isLogin) {
    content = (
      <>
        <Input
          type="email"
          placeholder="Email"
          changed={(e) => onChange(e, "email")}
          value={signinState.email}
          class="w-[70%] m-auto   mb-8 "
          clicked={() => {
            return;
          }}
          show={""}
          section=""
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          changed={(e) => onChange(e, "password")}
          value={signinState.password}
          class="w-full m-auto   mb-8 "
          clicked={() => setShowPassword(!showPassword)}
          show={showPassword}
          section=""
        />
      </>
    );
  } else {
    content = (
      <>
        <Input
          type="text"
          placeholder="Username"
          changed={(e) => onChange(e, "name")}
          value={signupState.name}
          class="w-[70%] m-auto  mb-8 "
          clicked={() => {
            return;
          }}
          show={""}
          section=""
        />
        <Input
          type="email"
          placeholder="Email"
          changed={(e) => onChange(e, "email")}
          value={signupState.email}
          class="w-[70%] m-auto   mb-8 "
          clicked={() => {
            return;
          }}
          show={""}
          section=""
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          changed={(e) => onChange(e, "password")}
          value={signupState.password}
          class="w-full m-auto   mb-8 "
          clicked={() => setShowPassword(!showPassword)}
          show={showPassword}
          section=""
        />
      </>
    );
  }

  const activeStyle: string = " border-[#B3541E] border border-b-0 z-10";
  return (
    <div className="h-screen flex text-white ">
      <div className={` w-[50%] ${classes.LoginImage}`}></div>
      <div className={`${classes.Login} w-[50%] px-8 my-auto`}>
        <div className=" flex justify-center ">
          <button
            className={`px-6 py-3${isLogin ? activeStyle : null}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </button>
          <button
            className={`px-6 py-3 ${!isLogin ? activeStyle : null}`}
            onClick={() => setIsLogin(false)}
          >
            SIGN UP
          </button>
        </div>
        <div className="border-t border-t-[#B3541E] h-[20rem] px-6 py-11">
          <div className="text-white">
            <form onSubmit={onSubmit}>
              {content}
              <input
                type="submit"
                name="Next"
                className="cursor-pointer m-auto block border rounded-3xl px-5 py-2"
              />
            </form>
          </div>
          {errorMessage ? (
            <p className="text-center text-red-600 text-xl mt-6">
              {errorMessage}!
            </p>
          ) : null}
        </div>
        {isLoading || signupMutation.isLoading ? (
          <div className="flex items-center justify-center">
            {isLogin ? <p>Authorizing</p> : null}
            <Spinner />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
