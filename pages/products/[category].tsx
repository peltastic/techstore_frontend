import { useRouter } from "next/router";
import ProductOps from "../../components/ProductOps";

type Props = {};

function Category({}: Props) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <ProductOps
      class_left={category === "phones" ? "phones_gaming" : "laptops_gaming"}
      class_right={category=== "phones"?"phones_regular": "laptops_regular"}
      name_left="Gaming"
      name_right="Regular"
      route_left={`/products/${category}/gaming`}
      route_right={`/products/${category}/regular`}
    />
  );
}

export default Category;
