import Dashboard from "../components/Dashboard";
import Nav from "../components/Nav";
import Input from "../components/Input";
import classes from "../styles/addProduct.module.css";
import { IoAddSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import { uploadFile } from "../firebase/upload";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { addProduct } from "../api/requests/product";
import { ProductReq } from "../api/types/product";

type Props = {};
type Product = {
  name: string;
  desc: string;
  brand: string;
  price: number;
  category: string;
  type: string;
  image: any;
};

function AddProducts({}: Props) {
  const [productData, setProductData] = useState<Product>({
    name: "",
    desc: "",
    brand: "",
    price: 0,
    category: "",
    type: "",
    image: "",
  });
  const [uploadErrMessage, setUploadErrMessage] = useState<string>("");

  const [imagePreview, setImagePreview] = useState<any>("");

  const { isError, data, mutate, isSuccess, isLoading } =
    useMutation(uploadFile);
  const metadata = data?.metadata.fullPath;
  const upload = useMutation(addProduct, {
    onSuccess: () => {
      setProductData({
        name: "",
        desc: "",
        brand: "",
        price: 0,
        category: "",
        type: "",
        image: "",
      });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      getDownloadURL(ref(storage, metadata))
        .then((url) => {
          setProductData({ ...productData, image: url });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isSuccess]);

  const onChangeHandler = (e: any, type: string): void => {
    setProductData({ ...productData, [type]: e.target.value });
  };

  const onChangeFile = (e: any): void => {
    const file = e.target.files[0];
    setImagePreview(file);
    mutate(file);
  };
  const onSubmit = (): void => {
    if (
      !productData.brand ||
      !productData.category ||
      !productData.desc ||
      !productData.image ||
      !productData.name ||
      !productData.price ||
      !productData.type
    ) {
      setUploadErrMessage("Complete the Form");
    } else {
      const body: ProductReq = {
        name: productData.name,
        price: productData.price,
        category: productData.category,
        productType: productData.type,
        productBrand: productData.brand,
        productImageFileUrl: productData.image,
        desc: productData.desc,
      };
      const token = sessionStorage.getItem("token");
      if (token) {
        upload.mutate({ token: token, body: body });
      }
    }
  };

  return (
    <>
      <Nav />
      <div className={`flex ${classes.Container} flex-wrap w-full mt-[7.5rem]`}>
        <div className={`${classes.DashboardContainer} w-[50%]`}>
          <Dashboard username="pelz" title="Add Products" />
          <div className="w-[full] h-[30rem] relative">
            <div className=" text-white w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {isLoading ? <h1 className="text-center">Uploading...</h1> : null}
              {isSuccess ? <h1 className="text-center">Uploaded!</h1> : null}
              <h1 className="mb-6 text-red-700">{uploadErrMessage}</h1>
              <h1 className="text-center">
                Click on the button below to upload product to store after
                filling the form
              </h1>
              <button
                onClick={onSubmit}
                className="text-white flex mx-auto items-center bg-[#B3541E] px-6 py-2 text-lg rounded-full mt-6"
              >
                Upload
                <BsUpload className="ml-4" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${classes.ProductContainer} text-white w-[40%] mx-auto px-[2rem]`}
        >
          <h1 className="text-white text-4xl text-center mb-11">ADD PRODUCT</h1>
          <div className="flex items-center w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Name :</p>
            <Input
              type="text"
              class="w-full"
              changed={(e) => onChangeHandler(e, "name")}
              value={productData.name}
              placeholder={""}
              clicked={()=>{return}}
              show=""
              section="add"
            />
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Description :</p>
            <Input
              type="text"
              class="w-full"
              changed={(e) => onChangeHandler(e, "desc")}
              value={productData.desc}
              placeholder={""}
              clicked={()=>{return}}
              show=""
              section="add"
            />
          </div>
          <div className="flex items-center w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Brand :</p>
            <Input
              type="text"
              class="w-full"
              changed={(e) => onChangeHandler(e, "brand")}
              value={productData.brand}
              placeholder={""}
              clicked={()=>{return}}
              show=""
              section="add"
            />
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Price:</p>
            <Input
              type="number"
              class="w-full"
              changed={(e) => onChangeHandler(e, "price")}
              value={productData.price}
              placeholder={""}
              clicked={()=>{return}}
              show=""
              section="add"
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
                  className={`h-[1.5rem] w-[1.5rem] ml-[2rem] block rounded-full ${
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
                  } h-[1.5rem] w-[1.5rem] ml-[2rem] block rounded-full border-[#B3541E] border`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center  w-full mb-[2rem]">
            <p className="mr-auto text-2xl">Product Image :</p>
            <div className="w-[50%] flex justify-center  ">
              <div
                className={`mx-auto items-center border flex px-[2rem] ${
                  imagePreview ? "bg-[#B3541E]" : null
                }`}
              >
                <input
                  type="file"
                  className={`${classes.FileInput} ${
                    imagePreview ? "text-white" : "text-[#B3541E]"
                  }  mx-auto`}
                  onChange={onChangeFile}
                  accept="image/png, image/jpeg"
                />
                {!imagePreview ? (
                  <IoAddSharp className="text-3xl text-[#B3541E]" />
                ) : (
                  <IoMdCheckmark className="text-3xl text-white" />
                )}
              </div>
            </div>
          </div>
          {isLoading ? (
            <p className="text-center text-2xl text-[#B3541E]">Uplaoding...</p>
          ) : null}
          {productData.image ? (
            <p className="text-center text-2xl mb-4">Image Preview</p>
          ) : null}
          {productData.image ? (
            <img src={productData.image} className="mx-auto" alt="" />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default AddProducts;
