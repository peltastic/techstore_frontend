import Cart from "../components/Cart";
import Nav from "../components/Nav";
import { useQuery } from "react-query";
import { getCart } from "../api/requests/cart";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import classes from "../styles/cart.module.css";
import ProductLoader from "../components/ProductLoader";
import { BsCart3 } from "react-icons/bs";
import { setCheckout } from "../redux/reducers/cart";
import { splitNumber } from "../utils/functions";

type Props = {};

function Carts({}: Props) {
  const dispatch = useDispatch();
  let token: any;
  const [cartData, setCartData] = useState<any[]>([]);
  const userId = useSelector((state: RootState) => state.user.userInfo.userId);
  const checkout = useSelector((state: RootState) => state.cart.checkout);
  const { refetch, isLoading } = useQuery(
    "cart",
    () => {
      if (!userId || !token) {
        return;
      }
      return getCart({ token: token, userId: userId });
    },
    {
      enabled: false,
      onSuccess: (data) => {
        const res = data?.data;
        setCartData(res.data);
        const sum: number = checkoutSum(res?.data);
        dispatch(setCheckout(sum));
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (userId) {
      token = sessionStorage.getItem("token");
      refetch();
    }
  }, [userId]);
  const checkoutSum = (data: any[]): number => {
    let sum: number = 0;
    for (const el of data) {
      sum += el.total_price;
    }
    return sum;
  };
  return (
    <>
      <Nav />
      <button
        disabled={!!checkout}
        className="text-white text-2xl rounded-full bg-[#B3541E] fixed px-10 py-6 right-6 bottom-7"
      >
        Checkout {splitNumber(checkout)}
      </button>
      <div className={`${classes.CartContainer} mt-[10rem] mx-32`}>
        {cartData.length > 0 ? (
          <>
            {cartData.map((item, index) => {
              return (
                <Cart
                  key={index}
                  name={item?.product_name}
                  price={item?.price}
                  total_price={item?.total_price}
                  image={item?.product_image}
                  productId={item?.product_id}
                  count={item?.count}
                  cartId={item?.cartId}
                  category={item?.category}
                  type={item?.type}
                />
              );
            })}
          </>
        ) : (
          <>
            {isLoading ? (
              <>
                <ProductLoader type="cart" />
                <ProductLoader type="cart" />
                <ProductLoader type="cart" />
                <ProductLoader type="cart" />
              </>
            ) : (
              <div className="text-white fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <BsCart3 className="text-[30rem]" />
                <p className="text-center text-2xl mt-10">No Item in Cart</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Carts;
