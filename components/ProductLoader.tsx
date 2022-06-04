import classes from "../styles/product.module.css";

type Props = {
  type: string;
};
function ProductLoader(props: Props) {
  return (
    <>
      {props.type === "product" ? (
        <div className={`${classes.ProductLoader} mx-4 my-2 items-center mb-24 flex justify-center flex-col w-[30%]`}>
          <div
            className={`w-[50%] mx-4 mb-7 my-2 animate-pulse bg-slate-400 h-[15rem]`}
          ></div>
          <div className="w-[70%] mx-4 my-2 animate-pulse bg-slate-700 h-[2rem]"></div>
          <div className="w-[30%] mx-4 my-2 animate-pulse bg-slate-700 h-[2rem]"></div>
        </div>
      ) : null}
      {props.type === "cart" ? (
        <div className="w-[90%] bg-slate-700 h-[15rem] animate-pulse my-10 mx-auto"></div>
      ) : null}
    </>
  );
}

export default ProductLoader;
