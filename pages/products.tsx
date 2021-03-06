import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useQuery } from "react-query";
import { getProducts } from "../api/requests/product";
import ProductLoader from "../components/ProductLoader";
import classes from "../styles/products.module.css";
import Filter from "../components/Filter";

export type Filter = {
  category: string;
  type: string;
};

const device_type = ["", "Laptops", "Phones"];
const category = ["", "Gaming", "Regular"];

function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [drop, setDrop] = useState<string>("");
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
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [filterOptions]);
  const dropHandler = (filter_name: string) =>
    setDrop(filter_name === drop ? "" : filter_name);
  const filterOptionsHandler = (option: string, value: string) => {
    if (value === "All") {
      return setFilterOptions({ ...filterOptions, [option]: "" });
    }
    setFilterOptions({ ...filterOptions, [option]: value });
  };
  return (
    <>
      <div className="flex absolute top-[10rem] left-[5rem]">
        <Filter
          dropHand={dropHandler}
          drop={drop}
          filter_name="Device Type"
          filters={device_type}
          clicked={filterOptionsHandler}
          filterOption={filterOptions}
          type="products"
        />
        <Filter
          dropHand={dropHandler}
          drop={drop}
          filter_name="Category"
          filters={category}
          clicked={filterOptionsHandler}
          filterOption={filterOptions}
          type="products"
        />
      </div>
      <div className=" text-white">
        <div
          className={`${classes.Products} ${
            isLoading ? "justify-center" : ""
          } px-8 mt-[15rem] flex flex-wrap w-full mx-auto`}
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
    </>
  );
}

export default Products;
