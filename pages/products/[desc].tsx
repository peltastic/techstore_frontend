import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { MdAdd } from "react-icons/md";
import { useQuery, useMutation } from "react-query";
import { splitNumber } from "../../utils/functions";
import { useDispatch } from "react-redux";
import {
  incrementCartCount,
  decrementCartCount,
} from "../../redux/reducers/user";
import {
  addCart,
  checkCart,
  increaseCart,
  decreaseCart,
} from "../../api/requests/cart";
import { getProduct } from "../../api/requests/product";
import classes from "../../styles/button.module.css";
import styles from "../../styles/desc.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AiOutlineMinus } from "react-icons/ai";
import Messages from "../../components/Messages";
import Button from "../../components/Button";

type Props = {};

function Description({}: Props) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userInfo);
  const token = useSelector((state: RootState) => state.user.token);
  const router = useRouter();
  const { desc } = router.query;
  const [data, setData] = useState<any>("");
  const [initialPrice, setInitialPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const productQuery = useQuery("product", () => getProduct({ id: desc }), {
    onSuccess: (data) => {
      const res = data?.data;
      console.log(res);
      setData(res?.data[0]);
      setInitialPrice(res?.data[0].price);
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });
  const checCartQuery = useQuery(
    "checkCart",
    () => {
      let token = sessionStorage.getItem("token");
      if (!token || !user.userId || !desc) {
        return;
      }
      return checkCart({ token: token, userId: user.userId, productId: desc });
    },
    {
      onSuccess: (data) => {
        if (data?.data) {
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
    onSuccess: () => {
      dispatch(incrementCartCount());
    },
  });
  const increaseMutation = useMutation(increaseCart, {
    onSuccess: () => {
      setTotalPrice((prevState: number): number => {
        if (prevState) {
          if (price) {
            return (prevState += price);
          }
          return (prevState += initialPrice);
        }
        return (prevState = initialPrice * 2);
      });
    },
  });
  const decreaseMutation = useMutation(decreaseCart, {
    onSuccess: () => {
      if (cartCount <= 1) {
        dispatch(decrementCartCount());
      }
      setTotalPrice((prevState: number): number => {
        if (cartCount <= 1) {
          return prevState;
        }
        if (price) {
          return (prevState -= price);
        }
        return (prevState -= initialPrice);
      });
    },
  });
  const increaseCartHandler = () => {
    setCartCount((prevState: number): number => {
      return prevState + 1;
    });

    if (!user.userId || !desc || !token) {
      return;
    }

    if (cartCount === 0) {
      mutate({
        body: {
          userId: user.userId,
          productId: desc,
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
    if (!desc) {
      return;
    }
    productQuery.refetch();
  }, [desc]);
  useEffect(() => {
    if (!desc || !user.userId) {
      return;
    }
    checCartQuery.refetch();
  }, [desc, user.userId]);

  const addCartHandler = () => {
    if (user.userId) {
      if (!data?.product_id || !user.userId) {
        return;
      }

      if (token) {
        mutate({
          body: {
            userId: user.userId,
            productId: data?.product_id,
          },
        });
        setCartCount(1);
      }
    } else {
      setShowMessage(!showMessage);
    }
  };

  return (
    <>
      {showMessage ? <Messages className=" bg-red-500" name="Sign In" /> : null}
      <div
        className={`text-white mt-[12rem] border mx-auto w-[90%] flex flex-wrap ${styles.Container}`}
      >
        <div className={`${styles.ImageContainer} w-[70%] pl-5`}>
          <div className="w-[60%] mx-auto">
            <img src={data?.product_image} alt="" className="" />
          </div>
        </div>

        <div className={`${styles.DescContainer} w-[30%] relative`}>
          <h1 className="text-3xl mb-6">{data?.name}</h1>
          <p className="text-xl">{data?.desc}</p>
          <p className="my-8 text-xl">
            N{totalPrice ? splitNumber(totalPrice) : splitNumber(initialPrice)}
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
              <Button
                class="rounded-full"
                clicked={decreaseCartHandler}
                content={<AiOutlineMinus className="m-auto text-5xl" />}
                disabled={cartCount === 0}
              />
              <p>{cartCount}</p>
              <Button
                class="rounded-full"
                clicked={increaseCartHandler}
                content={<MdAdd className="m-auto text-5xl" />}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}

export default Description;
