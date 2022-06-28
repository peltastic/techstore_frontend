import { useEffect, useState } from "react";
import Product from "../../../components/Product";
import Nav from "../../../components/Nav";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../../../api/requests/product";
import ProductLoader from "../../../components/ProductLoader";
import classes from "../../../styles/type.module.css";

function ProductType() {
  const router = useRouter();
  const { category, type } = router.query;
  const [products, setProducts] = useState<any[]>([]);
  const { refetch, isLoading } = useQuery(
    "products",
    () => {
      if (!category || !type) {
        return;
      }
      return getProducts({ category: category, type: type });
    },
    {
      onSuccess: (data) => {
        setProducts(data?.data.data);
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (!category || !type) {
      return;
    }
    refetch();
  }, [category, type]);

  return (
    <div className="text-white">
      <Nav />
      <div className={`${classes.Products} px-8 mt-[10rem] flex w-full flex-wrap  mx-auto`} >
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
          <>
            <ProductLoader type="product"/>
            <ProductLoader type="product"/>
            <ProductLoader type="product"/>
            <ProductLoader type="product"/>
            <ProductLoader type="product"/>
            <ProductLoader type="product"/>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductType;
