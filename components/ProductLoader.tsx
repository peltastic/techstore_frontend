import classes from "../styles/product.module.css";

type Props = {
  type: string;
};
function ProductLoader(props: Props) {
  return (
    <>
      {props.type === "product" ? (
        <div
          className={`${classes.ProductLoader} w-[30%] mx-4 my-2 animate-pulse bg-slate-700 h-[30rem]`}
        ></div>
      ) : null}
      {
        props.type === "cart" ?
        <div className="w-[90%] bg-slate-700 h-[15rem] animate-pulse my-10 mx-auto"></div>
        : null
      }
    </>
  );
}

export default ProductLoader;
