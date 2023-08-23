"use client";
import { useDispatch, useSelector } from "react-redux";
import { addShoppingCartItem, getItemDetail, setActiveUser } from "@/redux/actions";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import ModifiedItem from "./ModifiedItem";
import { FaEdit } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { getAverageRating } from "@/utils/formatUtils";
import Cookies from "js-cookie";
import { URL_BASE } from "@/utils/const";
import { useRouter } from "next/navigation";
import axios from "axios";
axios.defaults.withCredentials = true;



export default function ItemDetail({ data }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const activeUser = useSelector((state) => state.activeUser);
  const router = useRouter();

  const { averageRating, reviews } = getAverageRating(data);

  const [modify, setModify] = useState(false);

  const handleSetModify = () => {
    setModify(false);
  };

  const handleAddItem = function (itemFound) {
    const retrievedCookie = Cookies.get("accessTrue");
    if (!retrievedCookie) {
      router.push(`/login?detail=true&itemId=${data.id}`);
    } else {
      if (shoppingCart.some((shopping) => shopping.item.id === itemFound.id)) {
        // El itemFound es igual al atributo 'item' de al menos un elemento en shoppingCart
        alert("Item already added in shopping cart");
      } else if (
        shoppingCart.some(
          (shopping) => shopping.item.companyId !== itemFound.companyId
        )
      ) {
        alert("Services from different companies cannot be added to the cart");
      } else {
        // El itemFound no coincide con ningún atributo 'item' en shoppingCart
        let newItem = { item: itemFound, quantity: 1 };
        Cookies.set("shoppingCart", JSON.stringify([...shoppingCart, newItem]));
        dispatch(addShoppingCartItem(itemFound));
        router.push("/shoppingcart");
      }
    }
  };
  const voucher = {
    userId: activeUser.id,
    itemId: data.id
  }
  
  const handleGenerateCode = async () => {
    const retrievedCookie = Cookies.get("accessTrue");
    if (!retrievedCookie) {
      router.push(`/login?detail=true&itemId=${data.id}`);
    }
    try{
      //logica de generacion de codigo, charlar
      const response = await axios.post(`${URL_BASE}/vouchers/`, voucher)
      if (response.status === 200){
        dispatch(setActiveUser(activeUser.id));
        alert('QR Generated');
      }
    }catch(error){
      console.log(error.message);
    }
    
  };

  const modifyHandler = () => {
    setModify(true);
  };

  const handleItemEnable = async() => {
    try {
      if (data.enabled) {
        const response = await axios.patch(`${URL_BASE}/items/${data.id}`, {
          ...data,
          enabled: false
        })
        if (response.status === 200) {
          dispatch(getItemDetail(data.id));
          dispatch(setActiveUser());
          alert("Item disabled successfully");
        }
      } else {
        const response = await axios.patch(`${URL_BASE}/items/${data.id}`, {
          ...data,
          enabled: true
        })
        if (response.status === 200) {
          dispatch(getItemDetail(data.id));
          dispatch(setActiveUser());
          alert("Item enabled successfully");
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  if (data.price !== 0) {
    //esto es un servicio
    return (
      <section className=" flex w-full h-full justify-center">
        {modify ? (
          <div className=" flex justify-center w-full h-full bg-white rounded-2xl shadow-xl my-14 ">
            <div className=" w-1/2 h-full">
              <img
                className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
                src={data.imageUrl}
              ></img>
            </div>
            <ModifiedItem
              data={data}
              type={"service"}
              handleSave={handleSetModify}
            />
            {activeUser.items.find((item) => item.id === data.id) ? (
              <TiArrowBack
                onClick={() => {
                  setModify(false);
                }}
                className="m-5 text-2xl hover: cursor-pointer"
              />
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col m-5">
            <div className=" relative flex justify-center w-full min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
              <div className=" w-1/2 h-full">
                <img
                  className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
                  src={data.imageUrl}
                ></img>
              </div>
              <div className=" w-1/2 p-6 pr-16">
                <div className=" absolute text-2xl text-white -right-4 -top-4 bg-black p-2 rounded-full font-bold">
                  {data.discount}%
                </div>
                <div className=" text-center p-6 pr-16 ">
                  <p className=" font-bold text-4xl">{data.name}</p>
                </div>
                <div>
                  <h1 className=" font-semibold text-lg mt-6">
                    Discover the incredible
                    <span className="text-red-600"> {data.discount}% </span>
                    discount awaiting you in the {data.category} section at {data.name}. Unveil the savings today!
                  </h1>
                  <div className="font-semibold text-lg mt-12">
                    <h2>{data.description}</h2>
                  </div>
                  <h1 className=" mt-10 font-extrabold text-5xl tracking-wider">
                    ${data.price}{" "}
                  </h1>
                </div>
                <div className=" absolute right-10 bottom-10 flex">
                  {activeUser.role === "ADMIN" ||
                  activeUser.role === "COMPANY" ? null : (
                    <button
                      className=" flex text-center gap-2 items-center py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                      onClick={() => handleAddItem(data)}
                    >
                      Add to Cart <BsCart3 className=" text-xl" />
                    </button>
                  )}
                  {activeUser.id === data.companyId ||
                    activeUser.role === "ADMIN" ? (
                      <div>
                        <button onClick={modifyHandler}>
                          <FaEdit className="ml-5 text-2xl hover: cursor-pointer" />
                        </button>

    

                        <label className="flex flex-col relative items-center">

                          <h1 className="m-2">Disable/Enable</h1>
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={!data.enabled}
                            onChange={handleItemEnable}
                          />
                          <span
                            className={`relative w-10 h-6 transition rounded-full ${
                              data.enabled ? "bg-blue-300" : "bg-gray-300"
                            }`}
                          >
                            <span className={`absolute ${
                              data.enabled ? "right-1" : "left-1"
                              } top-1 w-4 h-4 transition transform bg-white rounded-full duration-1000`}>
                            </span>
                          </span>
                        </label>
                        
                      </div>
                  ) : null}
                </div>
              </div>
            </div>
            {data.review?.length ? ( //el usuario tiene que tener review
              <div className="flex">
                <div className="flex flex-col justify-center items-center m-5 bg-white rounded-2xl shadow-xl my-14 p-5 w-4/5 min-h-[500px] overflow-scroll overflow-x-hidden">
                  <div className="h-3/5">
                    <h1 className="font-bold text-4xl mt-12 h-6">
                      Reviews from other shoppers
                    </h1>
                  </div>
                  {data.review
                    ?.filter((review) => review.enabled)
                    .map((review, index) => {
                      if (review.enabled) {
                        return (
                          <div className="border-b-2 m-5 w-full">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((starNumber) => {
                                return starNumber <= reviews[index] ? (
                                  <FaStar className="text-yellow-500" />
                                ) : (
                                  <FaStar />
                                );
                              })}
                            </div>
                            <h1 className="m-5"> {review.user.name} </h1>
                            <h1 className="m-5">"{review.comment}"</h1>
                          </div>
                        );
                      }
                    })}
                </div>
                <div className="flex flex-col justify-center  items-center m-5 bg-white rounded-2xl shadow-xl my-14 p-5 w-1/5 min-h-[500px]">
                  <div className="flex items-center">
                    <h1 className="font-semibold text-4xl text-violet-600 m-1">
                      {averageRating}
                    </h1>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((starNumber) => {
                      return (
                        <div className="m-1">
                          <FaStar
                            className={
                              starNumber <= averageRating
                                ? "text-yellow-500 text-2xl m-1"
                                : "text-2xl m-1"
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                  <h1>{reviews.length} reviews</h1>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </section>
    );
  }

  //si la company ofrece productos:
  return (
    <section className=" flex w-full h-full justify-center">
      {modify ? (
        <div className=" flex justify-center w-full h-full bg-white rounded-2xl shadow-xl my-14 ">
          <div className=" w-1/2 h-full">
            <img
              className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
              src={data.imageUrl}
            ></img>
          </div>
          <ModifiedItem data={data} type={"product"} />
        </div>
      ) : (
        <div className="flex flex-col m-5">
          <div className=" relative flex justify-center w-full min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
            <div className=" w-1/2 h-full">
              <img
                className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
                src={data.imageUrl}
              ></img>
            </div>
            <div className=" w-1/2 p-6 pr-16">
              <div className=" absolute text-2xl text-white -right-4 -top-4  bg-black p-2 rounded-full font-bold">
                {data.discount}%
              </div>

              <div className=" text-center p-6 pr-16 ">
                <p className=" font-bold text-4xl">{data.name}</p>
              </div>
              <div>
                <h1 className=" font-semibold text-lg mt-6">
                  Discover the incredible
                  <span className="text-red-600"> {data.discount}% </span>
                  discount awaiting you in the {data.category} section at {data.name}. Unveil the savings today!
                </h1>
                {data.distance && <h1>Distance: {data.distance?.text}</h1>}
                {data.price > 0 && (
                  <h1 className=" mt-10 font-extrabold text-5xl tracking-wider">
                    ${data.price}{" "}
                  </h1>
                )}
                <div className="font-semibold text-lg mt-12">
                    <h2>{data.description}</h2>
                  </div>
              </div>
              <div className=" absolute right-10 bottom-10 flex">
                {activeUser.role !== 'COMPANY' && activeUser.role !== 'ADMIN' && <button
                  className="py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                  onClick={handleGenerateCode}
                >
                  Get Voucher
                </button>}
                {activeUser.id === data.companyId ||
                  activeUser.role === "ADMIN" ? (
                    <div>
                      <button onClick={modifyHandler}>
                        <FaEdit size={30} className="ml-6" />
                      </button>
                      <label className="flex flex-col relative items-center">
                        <h1 className="m-2">Disable/Enable</h1>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={!data.enabled}
                          onChange={handleItemEnable}
                        />
                        <span
                          className={`relative w-10 h-6 transition rounded-full ${
                            data.enabled ? "bg-blue-300" : "bg-gray-300"
                          }`}
                        >
                          <span className={`absolute ${
                            data.enabled ? "right-1" : "left-1"
                          } top-1 w-4 h-4 transition transform bg-white rounded-full duration-1000`}>
                          </span>
                        </span>
                      </label>
                    </div>
                ) : null}
              </div>
            </div>
          </div>
          {data.review?.length ? ( //el item tiene que tener review
            <div className="flex">
              <div className="flex flex-col justify-center items-center m-5 bg-white rounded-2xl shadow-xl my-14 p-5 w-4/5 min-h-[500px] overflow-scroll overflow-x-hidden">
                <div className="h-3/5">
                  <h1 className="font-bold text-4xl mt-12 h-6">
                    Reviews from other shoppers
                  </h1>
                </div>
                {data.review
                  ?.filter((review) => review.enabled)
                  .map((review, index) => {
                    if (review.enabled) {
                      return (
                        <div className="border-b-2 m-5 w-full">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((starNumber) => {
                              return starNumber <= reviews[index] ? (
                                <FaStar className="text-yellow-500" />
                              ) : (
                                <FaStar />
                              );
                            })}
                          </div>
                          <h1 className="m-5"> {review.user.name} </h1>
                          <h1 className="m-5">"{review.comment}"</h1>
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="flex flex-col justify-center  items-center m-5 bg-white rounded-2xl shadow-xl my-14 p-5 w-1/5 min-h-[500px]">
                <div className="flex items-center">
                  <h1 className="font-semibold text-4xl text-violet-600 m-1">
                    {averageRating}
                  </h1>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((starNumber) => {
                    return (
                      <div className="m-1">
                        <FaStar
                          className={
                            starNumber <= averageRating
                              ? "text-yellow-500 text-2xl m-1"
                              : "text-2xl m-1"
                          }
                        />
                      </div>
                    );
                  })}
                </div>
                <h1>{reviews.length} reviews</h1>
              </div>
            </div>
          ) : (
            <h1> No reviews made yet </h1>
          )}
        </div>
      )}
    </section>
  );
}
