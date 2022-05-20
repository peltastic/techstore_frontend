import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useMutation, useQuery } from "react-query";
import {
  addCart,
  increaseCart,
  decreaseCart,
  checkCart,
} from "../api/requests/cart";
import { AiOutlineMinus } from "react-icons/ai";

type Props = {
  name: string;
  image: string;
  price: number;
  id: string;
  category: string;
};

function Product(props: Props) {
  const userId = useSelector((state: RootState) => state.user.userInfo.userId);
  const router = useRouter();
  const { category } = router.query;
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0)
  const { refetch } = useQuery(
    props.id,
    () => {
      let token = sessionStorage.getItem("token");
      if (!token || !userId || !props.id) {
        return;
      }
      return checkCart({ token: token, userId: userId, productId: props.id });
    },
    {
      onSuccess: (data) => {
        if (data?.data) {
          console.log(data);
          setTotalPrice(data?.data.total_price);
          setCartCount(data?.data.count);
          setPrice(data?.data.price)
        }
      },
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  const { mutate } = useMutation(addCart, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const increaseMutation = useMutation(increaseCart, {
    onSuccess: () => {
      setTotalPrice((prevState: number): number => prevState += price);
    },
  });
  const decreaseMutation = useMutation(decreaseCart, {
    onSuccess: () => {
      setTotalPrice((prevState: number): number => prevState -= price);
    },
  });
  const increaseCartHandler = () => {
    setCartCount((prevState: number): number => {
      return prevState + 1;
    });

    let token = sessionStorage.getItem("token");
    if (!userId || !props.id || !token) {
      return;
    }
    if (cartCount === 0) {
      mutate({
        token: token,
        body: {
          userId: userId,
          productId: props.id,
          category: props.category,
        },
      });
    } else {
      increaseMutation.mutate({
        token: token,
        userId: userId,
        productId: props.id,
      });
    }
  };
  const decreaseCartHandler = () => {
    setCartCount((prevState: number): number => {
      return prevState - 1;
    });
    let token = sessionStorage.getItem("token");
    if (!userId || !props.id || !token) {
      return;
    }
    decreaseMutation.mutate({
      token: token,
      userId: userId,
      productId: props.id,
    });
  };
  useEffect(() => {
    if (!userId || !props.id) {
      return;
    }
    console.log(props.name);
    refetch();
  }, []);
  return (
    <div className="w-[30%] cursor-pointer border text-white border-[#B3541E]  relative mx-8">
      <div
        className="h-[70%] "
        onClick={() => router.push(`/products/${category}/regular/${props.id}`)}
      >
        <img src={props.image} className="h-full mx-auto block" />
      </div>
      <h1 className="text-center mt-[2rem] text-2xl">{props.name}</h1>
      <div className=" w-full text-[1.5rem] flex absolute justify-center bottom-0 left-0 px-6 py-4 ">
        <p className={`${cartCount ? "mr-auto" : null}`}>
          N{totalPrice ? totalPrice : props.price}
        </p>
        {cartCount ? (
          <div className=" w-[50%] justify-between flex items-center">
            <button
              onClick={decreaseCartHandler}
              className="bg-[#B3541E] rounded-full p-[.1rem]"
              disabled={cartCount === 0}
            >
              <AiOutlineMinus />
            </button>
            <p>{cartCount}</p>
            <button
              onClick={increaseCartHandler}
              className="bg-[#B3541E] rounded-full p-[.1rem]"
            >
              <MdAdd />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Product;
