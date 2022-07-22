import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useQuery } from "react-query";
import {
  setUserInfo,
  setInitialCartCount,
  setToken,
} from "../redux/reducers/user";
import { user } from "../api/requests/auth";
import Nav from "./Nav";
import { privateInstance } from "../api/requests/config";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  let token: string;

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userInfo);
  const tokenData = useSelector((state: RootState) => state.user.token);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
      dispatch(setToken(token));
      refetch();
      privateInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }, [tokenData]);
  return (
    <>
      <Nav admin={isAdmin} />
      {children}
    </>
  );
};

export default Layout;
