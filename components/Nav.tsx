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
import { setUserInfo } from "../redux/reducers/user";
type Props = {};

function Nav({}: Props) {
  const dispatch = useDispatch();

  let token: string;

  const userData = useSelector((state: RootState) => state.user.userInfo);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>();

  const { refetch } = useQuery("user", () => user(token), {
    enabled: false,
    onSuccess: (data) => {
      if (data) {
        console.log("done");
        const res = data.data;
        dispatch(
          setUserInfo({
            username: res.user_name,
            userId: res.user_id,
            email: res.email,
            userRole: res.user_role,
          })
        );
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
  return (
    <nav className="w-full border-b-[#B3541E] px-8 py-6 border-b flex items-center text-white fixed top-0 left-0 z-20 bg-[#040303]">
      <Image src={Logo} alt="" />
      <ul className="flex m-auto text-[1.2rem]">
        <li className="mx-[4rem]">
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>

        <li className="mx-[4rem]">
          <Link href={"/"}>
            <a>Phones</a>
          </Link>
        </li>
        <li className="mx-[4rem]">
          <Link href={"/"}>
            <a>Laptops</a>
          </Link>
        </li>
        {!userData.userId ? (
          <li className="mx-[4rem]">
            <Link href={"/login"}>
              <a>Sign In</a>
            </Link>
          </li>
        ) : null}
      </ul>
      <div className="flex items-center">
        {isAdmin ? (
          <Link href={"/admin"}>
            <a>
              <button
                className={`mr-10 rounded-3xl px-6 py-2 ${classes.Admin}`}
              >
                Admin
              </button>
            </a>
          </Link>
        ) : null}
        <div
          className="ml-auto relative cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <BsCart3 className="text-2xl" />
          <div className="h-[15px] w-[15px] flex justify-center items-center absolute top-[-7px] right-[-7px] bg-[#B3541E] px-[.5px] py-[.5px] rounded-full">
            <p className="  text-sm  text-center">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
