import { NextPage } from "next";
import Nav from "../components/Nav";
import ProductOps from "../components/ProductOps";

type Props = {};

const Products: NextPage = (props: Props) => {
  return (
    <>
      <Nav />
      <ProductOps
        class_left="phones"
        class_right="laptops"
        name_left="Phones"
        name_right="Laptops"
        route_left="/products/phones"
        route_right="/products/laptops"
      />
    </>
  );
};

export default Products;
