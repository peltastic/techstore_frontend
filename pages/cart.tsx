import Carts from "../components/Carts";
import Nav from "../components/Nav";

type Props = {};

function Cart({}: Props) {
  return (
    <>
      <Nav />
      <div className="mt-[10rem] mx-32">
        <Carts />
      </div>
    </>
  );
}

export default Cart;
