import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useRouter } from "next/router";
import classes from "../styles/nav.module.css";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setUserInfo, setInitialCartCount } from "../redux/reducers/user";
import Messages from "../components/Messages";
import NavMobile from "./NavMobile";
import Backdrop from "./Backdrop";

type Props = {
  admin: boolean;
};

function Nav(props: Props) {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.user.userInfo);
  const cartCount = useSelector((state: RootState) => state.user.cartCount);
  const router = useRouter();
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const logout = () => {
    sessionStorage.removeItem("token");
    dispatch(
      setUserInfo({
        username: "",
        userId: "",
        email: "",
        userRole: 0,
      })
    );
    dispatch(setInitialCartCount(0));
    router.push("/");
  };

  const cartHandler = () => {
    if (userData.userId) {
      router.push("/cart");
    } else {
      setShowMessage(!showMessage);
    }
  };
  return (
    <>
      {showMessage ? (
        <Messages className=" bg-[#ffffff]" name="Sign In" link="/login" />
      ) : null}
      <div
        className={`${classes.NavMobileIcon}  z-[80]`}
        onClick={() => setShowNav(!showNav)}
      >
        <div className={`${showNav ? classes.Top : null}`}></div>
        <div className={`${showNav ? classes.Middle : null}`}></div>
        <div className={`${showNav ? classes.Below : null}`}></div>
      </div>
      <NavMobile
        logout={logout}
        show={showNav}
        isAdmin={props.admin}
        userId={!!userData.userId}
        clicked={() => setShowNav(!showNav)}
      />
      {showNav ? <Backdrop /> : null}
      <nav
        className={`${classes.Nav} w-full  px-16 py-8  flex items-center text-white fixed top-0 left-0 z-20 bg-[#fffdfd]`}
      >
        <p className="text-[#e23e3e] text-4xl mr-10">cesorys</p>
        <ul className="flex text-[1.3rem] mt-[.5rem] mr-auto text-[#b8b8b8]">
          <li className="mr-[1rem]">
            <Link href={"/"}>
              <a className="text-black">Home</a>
            </Link>
          </li>

          <li className="mr-[1rem]">
            <Link href={"/products"}>
              <a>Shop</a>
            </Link>
          </li>
          <li className="mr-[1rem]">About Us</li>
          <li className="mr-[1rem]">Contact</li>
        </ul>
        <div className="flex items-center">
          {props.admin && userData.userId ? (
            <Link href={"/admin"}>
              <a>
                <button
                  className={`mr-10 text-2xl rounded-full px-6 py-2 ${classes.Admin}`}
                >
                  Admin
                </button>
              </a>
            </Link>
          ) : null}
        </div>
        {!userData.userId ? (
          <Link href={"/login"}>
            <a className="mr-[3rem] text-[1.3rem] text-black">Login</a>
          </Link>
        ) : null}
        {userData.userId ? (
          <button className="mx-[4rem]" onClick={logout}>
            Logout
          </button>
        ) : null}
        <div
          className={`${classes.CartContainer} relative cursor-pointer`}
          onClick={cartHandler}
        >
          <AiOutlineShopping
            className={`${classes.Cart}  text-4xl z-50 text-black`}
          />
          <div className="h-[1.5rem] w-[1.5rem] flex justify-center items-center absolute top-[-7px] right-[-7px] px-[.5px] py-[.5px] rounded-full">
            <p className=" text-sm text-black text-center">{cartCount || 0}</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
