import Dashboard from "../components/Dashboard";
import Nav from "../components/Nav";
import Input from "../components/Input";
import classes from "../styles/addProduct.module.css";
import { IoAddSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { uploadFile } from "../firebase/upload";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";

type Props = {};
type Product = {
  name: string;
  desc: string;
  brand: string;
  price: number;
  category: string;
  type: string;
  imageFile: any;
};

function AddProducts({}: Props) {
  const [productData, setProductData] = useState<Product>({
    name: "",
    desc: "",
    brand: "",
    price: 0,
    category: "",
    type: "",
    imageFile: "",
  });

  const [imagePreview, setImagePreview] = useState<string>("");

  const { isError, data, mutate, isSuccess, isLoading } =
    useMutation(uploadFile);
  const metadata = data?.metadata.fullPath;
  useEffect(() => {
    if (isSuccess) {
      getDownloadURL(ref(storage, metadata))
        .then((url) => {
          setImagePreview(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isSuccess]);

  const onChangeHandler = (e: any, type: string) => {
    setProductData({ ...productData, [type]: e.target.value });
  };

  const onChangeFile = (e: any) => {
    const file = e.target.files[0];
    setProductData({ ...productData, imageFile: file });
    mutate(file);
  };

  return (
    <>
      <Nav />
      <div className="flex w-full mt-[5.5rem]">
        <div className="w-[50%]">
          <Dashboard username="pelz" title="Add Products" />
        </div>
        <div className="text-white w-[40%] mx-auto px-[2rem] ">
          <h1 className="text-white text-4xl text-center my-6 mb-11">
            ADD PRODUCT
          </h1>
          <div className="flex items-center w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Name :</p>
            <Input
              type="text"
              class="w-[60%]"
              changed={(e) => onChangeHandler(e, "name")}
              value={productData.name}
              placeholder={""}
            />
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Description :</p>
            <Input
              type="text"
              class="w-[60%]"
              changed={(e) => onChangeHandler(e, "desc")}
              value={productData.desc}
              placeholder={""}
            />
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Brand :</p>
            <Input
              type="text"
              class="w-[60%]"
              changed={(e) => onChangeHandler(e, "brand")}
              value={productData.brand}
              placeholder={""}
            />
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Price:</p>
            <Input
              type="number"
              class="w-[60%]"
              changed={(e) => onChangeHandler(e, "price")}
              value={productData.price}
              placeholder={""}
            />
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Category :</p>
            <div className="  items-center flex  w-[60%]">
              <div className="flex items-center mx-[4rem]">
                <p className="text-2xl">Phones</p>
                <div
                  onClick={() =>
                    setProductData({ ...productData, category: "phones" })
                  }
                  className={` w-[1.5rem] block h-[1.5rem] ml-[2rem] rounded-full ${
                    productData.category === "phones" ? "bg-[#B3541E]" : null
                  } border-[#B3541E] relative border`}
                ></div>
              </div>
              <div className="flex items-center mx-[4rem]">
                <p className="text-2xl">Laptops</p>
                <div
                  onClick={() =>
                    setProductData({ ...productData, category: "laptops" })
                  }
                  className={`h-[15px] w-[15px] ml-[2rem] block rounded-full ${
                    productData.category === "laptops" ? "bg-[#B3541E]" : null
                  } border-[#B3541E] border`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Type :</p>
            <div className="  items-center flex  w-[60%]">
              <div
                onClick={() =>
                  setProductData({ ...productData, type: "gaming" })
                }
                className="flex items-center mx-[4rem] cursor-pointer"
              >
                <p className="text-2xl">Gaming</p>
                <div
                  className={` w-[1.5rem] block h-[1.5rem] ml-[2rem] rounded-full ${
                    productData.type === "gaming" ? "bg-[#B3541E]" : null
                  } border-[#B3541E] relative border`}
                ></div>
              </div>
              <div className="flex items-center mx-[4rem]">
                <p className="text-2xl">Regular</p>
                <div
                  onClick={() =>
                    setProductData({ ...productData, type: "regular" })
                  }
                  className={`${
                    productData.type === "regular" ? "bg-[#B3541E]" : null
                  } h-[15px] w-[15px] ml-[2rem] block rounded-full border-[#B3541E] border`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Image :</p>
            <div className="w-[50%] flex justify-center  ">
              <div
                className={`mx-auto items-center border flex px-[2rem] ${
                  productData.imageFile ? "bg-[#B3541E]" : null
                }`}
              >
                <input
                  type="file"
                  className={`${classes.FileInput} ${
                    productData.imageFile ? "text-white" : "text-[#B3541E]"
                  }  mx-auto`}
                  onChange={onChangeFile}
                  accept="image/png, image/jpeg"
                />
                {!productData.imageFile ? (
                  <IoAddSharp className="text-3xl text-[#B3541E]" />
                ) : (
                  <IoMdCheckmark className="text-3xl text-white" />
                )}
              </div>
            </div>
          </div>
          {isLoading ? <p className="text-center text-2xl text-[#B3541E]">Uplaoding...</p> : null}
          {imagePreview? <p className="text-center text-2xl mb-4">Image Preview</p>: null }
          {imagePreview ? <img src={imagePreview} className="mx-auto" alt="" /> : null}
        </div>
      </div>
    </>
  );
}

export default AddProducts;
