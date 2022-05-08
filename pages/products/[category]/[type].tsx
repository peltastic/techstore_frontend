import React from "react";
import Products from "../../../components/Products";
import Nav from "../../../components/Nav";
type Props = {};

function ProductType({}: Props) {
  return (
    <div className="text-white">
      <Nav />
      <Products />
    </div>
  );
}

export default ProductType;
