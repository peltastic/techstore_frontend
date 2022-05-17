import { useEffect } from "react";
import { user, refresh } from "../api/requests/auth";
import { useQuery, useMutation } from "react-query";
import { setUserInfo } from "../redux/reducers/user";
import { setToken } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { privateInstance } from "../api/requests/config";
import { RootState } from "../redux/store";

type Props = {};

function Global({}: Props) {
  const tokenRed = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  let isToken: string | null;
  let token: string;
  let isRefresh: string | null;
  let refreshToken: string;
  if (typeof window !== "undefined") {
    isToken = localStorage.getItem("token");
    isRefresh = localStorage.getItem("refresh");
    if (isToken) {
      token = isToken;
    }
    if (isRefresh) {
      refreshToken = isRefresh;
    }
  }
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
  const { mutate } = useMutation(refresh, {
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("token", data.data.accessToken);
      dispatch(setToken(data.data.accessToken));
      refetch();
    },
  });
  privateInstance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      console.log(error, "errorr");
    }
  );
  privateInstance.interceptors.response.use(
    async (res) => {
      return res;
    },
    (err) => {
      console.log(err.response.status, "errrr");
      if (err.response.status === 401) {
        console.log("token expired");
        if (refreshToken) {
          mutate({ refreshToken: refreshToken });
        }
      }
    }
  );
  useEffect(() => {
    if (token) {
      refetch();
    }
  }, []);
  useEffect(() => {
    if (tokenRed) {
      refetch();
    }
  }, [tokenRed]);

  return <div></div>;
}

export default Global;
