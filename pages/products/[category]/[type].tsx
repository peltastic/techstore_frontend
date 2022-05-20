import { useEffect, useState } from "react";
import Product from "../../../components/Product";
import Nav from "../../../components/Nav";
type Props = {};
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../../../api/requests/product";

function ProductType({}: Props) {
  const router = useRouter();
  const { category, type } = router.query;
  const [products, setProducts] = useState<any[]>([]);
  const { refetch } = useQuery(
    "products",
    () => {
      if (!category || !type) {
        return
      }
      return getProducts({ category: category, type: type })
    },
    {
      onSuccess: (data) => {
        console.log(data?.data.data);
        setProducts(data?.data.data);
      },
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (!category || !type) {
      return
    }
    refetch();
  }, [category, type]);

  return (
    <div className="text-white">
      <Nav />
      {products ? (
        <div className="px-8 mt-24 flex">
          {products?.map((item: any, index: any) => {
            return (
              <Product
                key={index}
                name={item?.name}
                price={item?.price}
                image={item?.product_image}
                id={item?.product_id}
                category={item?.category}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default ProductType;
