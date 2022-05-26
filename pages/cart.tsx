import Cart from "../components/Cart";
import Nav from "../components/Nav";
import { useQuery } from "react-query";
import { getCart } from "../api/requests/cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import classes from "../styles/cart.module.css";
import ProductLoader from "../components/ProductLoader";

type Props = {};

function Carts({}: Props) {
  let token: any;
  const [cartData, setCartData] = useState<any[]>([]);
  const userId = useSelector((state: RootState) => state.user.userInfo.userId);
  const { refetch } = useQuery(
    "cart",
    () => {
      if (!userId || !token) {
        console.log("1");
        return;
      }
      console.log("3");
      return getCart({ token: token, userId: userId });
    },
    {
      enabled: false,
      onSuccess: (data) => {
        const res = data?.data;
        setCartData(res.data);
        console.log(res.data);
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (userId) {
      console.log("2");
      token = sessionStorage.getItem("token");
      refetch();
    }
  }, [userId]);
  return (
    <>
      <Nav />
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
        ) : <>
        <ProductLoader type="cart" />
        <ProductLoader type="cart" />
        <ProductLoader type="cart" />
        <ProductLoader type="cart" />
        </>}
      </div>
    </>
  );
}

export default Carts;
