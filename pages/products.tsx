import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../api/requests/product";
import ProductLoader from "../components/ProductLoader";
import classes from "../styles/products.module.css";

type Filter = {
  category: string;
  type: string;
};

function ProductType() {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const [filterOptions, setFilterOptions] = useState<Filter>({
    category: "",
    type: "",
  });
  const { refetch, isLoading } = useQuery(
    "products",
    () => {
      return getProducts({
        category: filterOptions.category,
        type: filterOptions.type,
      });
    },
    {
      onSuccess: (data) => {
        setProducts(data?.data.data);
        console.log(data);
      },
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="text-white">
      <div
        className={`${classes.Products} ${
          isLoading ? "justify-center" : ""
        } px-8 mt-[10rem] flex flex-wrap w-full mx-auto`}
      >
        {!isLoading ? (
          <>
            {products?.map((item: any, index: any) => {
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
          </>
        ) : (
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <ProductLoader />
            <p className="text-center -ml-[4rem] mt-8 glow text-xl">
              Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductType;
