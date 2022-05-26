import { useEffect, useState } from "react";
import Nav from "../../../../components/Nav";
import { MdAdd } from "react-icons/md";
import { useQuery, useMutation } from "react-query";
import { useDispatch } from "react-redux";
import {
  incrementCartCount,
} from "../../../../redux/reducers/user";
import {
  addCart,
  checkCart,
  increaseCart,
  decreaseCart,
} from "../../../../api/requests/cart";
import { getProduct } from "../../../../api/requests/product";
import classes from "../../../../styles/button.module.css";
import styles from "../../../../styles/desc.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { AiOutlineMinus } from "react-icons/ai";
import Messages from "../../../../components/Messages";
type Props = {};

function Description({}: Props) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfo);
  const router = useRouter();
  const { category, desc } = router.query;
  const [data, setData] = useState<any>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const { refetch } = useQuery(
    "product",
    () => getProduct({ table: category, id: desc }),
    {
      onSuccess: (data) => {
        console.log(data?.data);
        const res = data?.data;
        setData(res?.data);
      },
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  const checCartQuery = useQuery(
    "checkCart",
    () => {
      let token = sessionStorage.getItem("token");
      if (!token || !user.userId || !desc) {
        console.log("3");
        return;
      }
      return checkCart({ token: token, userId: user.userId, productId: desc });
    },
    {
      onSuccess: (data) => {
        if (data?.data) {
          console.log(data);
          setTotalPrice(data?.data.total_price);
          setCartCount(data?.data.count);
          setPrice(data?.data.price);
        }
      },
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const { mutate } = useMutation(addCart, {
    onSuccess: (data) => {
      dispatch(incrementCartCount());
    },
  });
  const increaseMutation = useMutation(increaseCart, {
    onSuccess: () => {
      setTotalPrice((prevState: number): number => prevState += price);
    },
  });
  const decreaseMutation = useMutation(decreaseCart, {
    onSuccess: () => {
      setTotalPrice((prevState: number): number => prevState - price);
    },
  });
  const increaseCartHandler = () => {
    setCartCount((prevState: number): number => {
      return prevState + 1;
    });

    let token = sessionStorage.getItem("token");
    if (!user.userId || !desc || !token) {
      return;
    }

    if (cartCount === 0) {
      mutate({
        token: token,
        body: {
          userId: user.userId,
          productId: desc,
          category: category,
        },
      });
    } else {
      increaseMutation.mutate({
        token: token,
        userId: user.userId,
        productId: desc,
      });
    }
  };
  const decreaseCartHandler = () => {
    setCartCount((prevState: number): number => {
      return prevState - 1;
    });
    let token = sessionStorage.getItem("token");
    if (!user.userId || !desc || !token) {
      return;
    }
    decreaseMutation.mutate({
      token: token,
      userId: user.userId,
      productId: desc,
    });
  };

  useEffect(() => {
    if (!category || !desc) {
      return;
    }
    refetch();
  }, [category, desc]);
  useEffect(() => {
    if (!desc || !user.userId) {
      console.log("l");
      return;
    }
    console.log("2");
    checCartQuery.refetch();
  }, [desc, user.userId]);

  const addCartHandler = () => {
    if (user.userId) {
      let token: string;
      if (!data?.product_id || !user.userId || !category) {
        return;
      }
      const tokenSes = sessionStorage.getItem("token");
      if (tokenSes) {
        token = tokenSes;
        mutate({
          token: token,
          body: {
            userId: user.userId,
            productId: data?.product_id,
            category: category,
          },
        });
        setCartCount(1);
      } else {
        console.log("signup");
      }
    } else {
      setShowMessage(!showMessage);
    }
  };

  return (
    <>
      {showMessage ? <Messages className=" bg-red-500" name="Sign In" /> : null}
      <Nav />
      <div
        className={`text-white mt-[7rem]  w-[90%] h-[80vh] flex flex-wrap ${styles.Container}`}
      >
        <div className="w-[50%] pl-5">
          <div className="w-[50%] mx-auto">
            <img src={data?.product_image} alt="" className="h-full" />
          </div>
        </div>

        <div className="w-[50%] relative">
          <h1 className="text-3xl mb-6">{data?.name}</h1>
          <p className="text-xl">{data?.desc}</p>
          <p className="my-8 text-xl">
            N{totalPrice ? totalPrice : data?.price}
          </p>
          {cartCount < 1 ? (
            <button
              onClick={addCartHandler}
              className={`${classes.Button} px-10 py-4 rounded-full mt-[2rem]`}
            >
              Add to cart
            </button>
          ) : null}
          {cartCount ? (
            <div className="w-[60%] flex items-center text-3xl justify-between">
              <button
                disabled={cartCount === 0}
                onClick={decreaseCartHandler}
                className="bg-[#B3541E] rounded-full h-16 w-16"
              >
                <AiOutlineMinus className="m-auto text-5xl" />
              </button>
              <p>{cartCount}</p>
              <button
                onClick={increaseCartHandler}
                className="bg-[#B3541E] rounded-full h-16 w-16"
              >
                <MdAdd className="m-auto text-5xl" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Description;
