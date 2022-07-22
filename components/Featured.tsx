import Product from "./Product";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../api/requests/product";

const Featured = () => {
  const [productsList, setProductList] = useState<any[]>([]);
  const { data } = useQuery("featured", () => getProducts({ limit: 3 }));
  useEffect(() => {
    setProductList(data?.data.data);
  }, [data]);
  return (
    <section className="text-white w-full mt-28 mb-28">
      <h1 className="text-center mb-24 text-3xl glow ">Featured Products</h1>
      <div className="text-white flex-wrap justify-center md:justify-start flex items-center">
        {productsList?.map((item, index) => {
          return (
            <Product
              key={index}
              name={item?.name}
              price={item?.price}
              image={item?.product_image}
              id={item?.product_id}
              category={item?.category}
              type={item?.product_type}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
