import React from "react";
import Product from "./Product";

type Props = {};

function Products({}: Props) {
  return (
    <div className="px-8 mt-24 flex">
      <Product
        name="iphone 12"
        desc="3gb ram 256gb Retina Display"
        price={400000}
        imageUrl="https://th.bing.com/th/id/R.cf054375eba9bbfbf19de6828af276c2?rik=PQLARDUckWCpmg&pid=ImgRaw&r=0"
      />
      <Product
        name="iphone 12 pro max"
        desc="4gb ram 64gb Retina Display"
        price={500000}
        imageUrl="https://www.slashgear.com/wp-content/uploads/2020/11/android-iphone-12-pro-1.jpg"
      />
    </div>
  );
}

export default Products;
