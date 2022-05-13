import { useEffect } from "react";
import { user } from "../api/requests/auth";
import { useQuery } from "react-query";
import { setUserInfo } from "../redux/reducers/user";
import { useDispatch } from "react-redux";

type Props = {};

function Global({}: Props) {
  const dispatch = useDispatch();
  let token: string | null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const { refetch } = useQuery("user", () => user(token), {
    enabled: false,
    onSuccess: (data) => {
      const res = data.data;
      dispatch(
        setUserInfo({
          username: res.user_name,
          userId: res.user_id,
          email: res.email,
          userRole: res.user_role,
        })
      );
    },
  });
  useEffect(() => {
    if (token) {
      refetch();
    }
  }, []);

  return <div></div>;
}

export default Global;
