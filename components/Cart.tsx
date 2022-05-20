import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { useMutation } from "react-query";
import { increaseCart, decreaseCart, addCart } from "../api/requests/cart";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
type Props = {
  productId: string;
  image: string;
  total_price: number;
  price: number
  name: string;
  count: number;
  cartId: string;
  category: string;
};

function Cart(props: Props) {
  const userId = useSelector((state: RootState) => state.user.userInfo.userId);
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (props.count) {
      setCurrentCount(props.count);
    }
  }, [props.count]);
  const { mutate } = useMutation(addCart, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const increaseMutation = useMutation(increaseCart, {
    onSuccess: () => {
      console.log(props.price)
      setTotalPrice((prevState: number): number => prevState += props.price);
    },
  });
  const decreaseMutation = useMutation(decreaseCart, {
    onSuccess: () => {
      console.log(props.price)
      setTotalPrice((prevState: number): number => prevState -= props.price);
    },
  });
  const increaseCartHandler = () => {
    setCurrentCount((prevState: number): number => {
      return prevState + 1;
    });

    let token = sessionStorage.getItem("token");
    if (!userId || !props.productId || !token) {
      return;
    }
    if (currentCount === 0) {
      mutate({
        token: token,
        body: {
          userId: userId,
          productId: props.productId,
          category: props.category,
        },
      });
    } else {
      increaseMutation.mutate({
        token: token,
        userId: userId,
        productId: props.productId,
      });
    }
  };
  const decreaseCartHandler = () => {
    setCurrentCount((prevState: number): number => {
      return prevState - 1;
    });
    let token = sessionStorage.getItem("token");
    if (!userId || !props.productId || !token) {
      return;
    }
    decreaseMutation.mutate({
      token: token,
      userId: userId,
      productId: props.productId,
    });
  };
  return (
    <div className="w-[80%] mx-auto text-white flex items-center justify-between border mb-8 border-[#B3541E] h-[10rem] px-16 py-4">
      <img className="h-full" src={props.image} alt="" />
      <p className="text-4xl">{props.name}</p>
      <div className="w-[30%] h-[90%] flex flex-col justify-between items-center">
        <p className="text-4xl">N{totalPrice? totalPrice: props.total_price}</p>
        <div className="flex w-full justify-around items-center">
          <button
            className="bg-[#B3541E] rounded-full p-1"
            onClick={decreaseCartHandler}
            disabled={currentCount === 0}
          >
            <AiOutlineMinus className="text-3xl" />
          </button>
          <p className="text-4xl">{currentCount}</p>
          <button
            className="bg-[#B3541E] rounded-full p-1"
            onClick={increaseCartHandler}
          >
            <MdAdd className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
