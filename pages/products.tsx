import { NextPage } from "next";
import ProductOps from "../components/ProductOps";

const Products: NextPage = () => {
  return (
    <>
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
