import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { useRouter } from "next/router";
import classes from "../styles/nav.module.css";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { user } from "../api/requests/auth";
import { setUserInfo, setInitialCartCount } from "../redux/reducers/user";
import Messages from "../components/Messages";
import NavMobile from "./NavMobile";
import Backdrop from "./Backdrop";

function Nav() {
  const dispatch = useDispatch();

  let token: string;

  const userData = useSelector((state: RootState) => state.user.userInfo);
  const cartCount = useSelector((state: RootState) => state.user.cartCount);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const { refetch } = useQuery("user", () => user(token), {
    enabled: false,
    onSuccess: (data) => {
      if (data) {
        const res = data.data;
        dispatch(
          setUserInfo({
            username: res.user_name,
            userId: res.user_id,
            email: res.email,
            userRole: res.user_role,
          })
        );
        dispatch(setInitialCartCount(res.cart_count));
      }
    },
  });
  useEffect(() => {
    if (userData.userRole === 5180) {
      setIsAdmin(true);
    }
  }, [userData]);
  useEffect(() => {
    const tokenRes = sessionStorage.getItem("token");
    if (tokenRes) {
      token = tokenRes;
    }
    if (token) {
      refetch();
    }
  }, []);
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
      {showMessage ? <Messages className=" bg-red-500" name="Sign In" /> : null}
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
        isAdmin={isAdmin}
        userId={!!userData.userId}
        clicked={() =>setShowNav(!showNav)}
      />
      {showNav ? <Backdrop /> : null}
      <nav
        className={`${classes.Nav} w-full  px-16 py-11  flex items-center text-white fixed top-0 left-0 z-20 bg-[#040303]`}
      >
        <Image src={Logo} alt="" />
        <ul className="flex m-auto text-[1.5rem]">
          <li className="mx-[4rem]">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>

          <li className="mx-[4rem]">
            <Link href={"/products"}>
              <a>Products</a>
            </Link>
          </li>
          {!userData.userId ? (
            <li className="mx-[4rem]">
              <Link href={"/login"}>
                <a>Sign In</a>
              </Link>
            </li>
          ) : null}
          {userData.userId ? (
            <li className="mx-[4rem]">
              <button onClick={logout}>Logout</button>
            </li>
          ) : null}
        </ul>
        <div className="flex items-center">
          {isAdmin && userData.userId ? (
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
      </nav>
      <div
        className={`${classes.CartContainer} ml-auto fixed z-50 top-[3.1rem] right-8 cursor-pointer`}
        onClick={cartHandler}
      >
        <BsCart3 className={`${classes.Cart} text-4xl z-50 text-white`} />
        <div className="h-[1.5rem] w-[1.5rem] flex justify-center items-center absolute top-[-7px] right-[-7px] bg-[#B3541E] px-[.5px] py-[.5px] rounded-full">
          <p className=" text-white text-sm  text-center">{cartCount}</p>
        </div>
      </div>
    </>
  );
}

export default Nav;
