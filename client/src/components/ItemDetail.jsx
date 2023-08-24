"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addShoppingCartItem,
  getItemDetail,
  setActiveUser,
} from "@/redux/actions";
import Loading from "@/components/loading";
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
import EnableItem from "./Modals/Items/EnableItem";
import DisableItem from "./Modals/Items/DisableItem";
import QrGenerated from "./Modals/Items/QrGenerated";
import QrFailed from "./Modals/Items/QrFail";
import ItemCartAdditionFail from "./Modals/Items/CannotAdd";
import ItemSameCompanyAddition from "./Modals/Items/SameCompany";
axios.defaults.withCredentials = true;

export default function ItemDetail({ data }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const activeUser = useSelector((state) => state.activeUser);
  const router = useRouter();

  const { averageRating, reviews } = getAverageRating(data);
  const [addPermision, setAddPermision] = useState("pending");
  const [qrStatus, setQrStatus] = useState("pending");
  const [itemStatus, setItemStatus] = useState("pending");
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
        setAddPermision("already");
      } else if (
        shoppingCart.some(
          (shopping) => shopping.item.companyId !== itemFound.companyId
        )
      ) {
        setAddPermision("different");
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
    itemId: data.id,
  };

  const handleGenerateCode = async () => {
    const retrievedCookie = Cookies.get("accessTrue");
    if (!retrievedCookie) {
      router.push(`/login?detail=true&itemId=${data.id}`);
    } else {
      try {
        //logica de generacion de codigo, charlar
        const response = await axios.post(`${URL_BASE}/vouchers/`, voucher);
        if (response.status === 200) {
          setQrStatus("success");
          dispatch(setActiveUser(activeUser.id));
          
        }
      } catch (error) {
        setQrStatus("failed");
        console.log(error.message);
      }
    }
  };

  const modifyHandler = () => {
    setModify(true);
  };

  const handleItemEnable = async () => {
    try {
      if (data.enabled) {
        const response = await axios.patch(`${URL_BASE}/items/${data.id}`, {
          ...data,
          enabled: false,
        });
        if (response.status === 200) {
          dispatch(getItemDetail(data.id));
          dispatch(setActiveUser());
          setItemStatus("disabled");
        }
      } else {
        const response = await axios.patch(`${URL_BASE}/items/${data.id}`, {
          ...data,
          enabled: true,
        });
        if (response.status === 200) {
          dispatch(getItemDetail(data.id));
          dispatch(setActiveUser());
          setItemStatus("enabled");
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const close = (status) => {
    setItemStatus("pending");
    setQrStatus("pending");
    setAddPermision("pending");
  };
  
  if (!data.id) {
    return <Loading />;
  }
  if (data.price !== 0) {
    //esto es un servicio
    return (
      <section className=" flex w-full h-full justify-center drop-shadow-lg">
        {itemStatus === "enabled" && <EnableItem close={close} />}
        {itemStatus === "disabled" && <DisableItem close={close} />}
        {addPermision === "already" && <ItemCartAdditionFail close={close} />}
        {addPermision === "different" && <ItemSameCompanyAddition close={close} />}
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
          <div className="flex flex-col w-4/5 m-5">
            <div className=" relative flex justify-center w-full min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
              <div className=" w-1/2 h-full">
                <img
                  className="w-[650px] h-[500px] object-cover rounded-2xl mt-6 mb-6 ml-10 border-2 border-gray-300"
                  src={data.imageUrl}
                ></img>
              </div>
              <div className=" w-1/2 p-6 pr-16">
                <div className=" absolute text-5xl text-white right-0 top-4 bg-black p-5 pl-9 rounded-l-full font-bold drop-shadow-xl ">
                  {data.discount}% OFF
                </div>
                <div className=" py-10 ">
                  <p className=" font-bold text-5xl mr-44">{data.name}</p>
                </div>
                <div>
                  <h1 className=" font-semibold text-lg">
                    Discover the incredible
                    <span className="text-red-600"> {data.discount}% </span>
                    discount awaiting you in the {data.category} section at{" "}
                    {data.name}. Unveil the savings today!
                  </h1>
                  <div className="font-semibold text-lg mt-4">
                    <h2>{data.description}</h2>
                  </div>
                  <h1 className=" mt-28 font-extrabold text-6xl tracking-wider">
                    ${data.price}{" "}
                  </h1>
                </div>
                <div className=" absolute right-10 bottom-10 flex">
                  {activeUser.role === "ADMIN" ||
                  activeUser.role === "COMPANY" ? null : (
                    <button
                      className=" drop-shadow-xl flex text-center text-2xl mr-16 gap-2 items-center py-4 px-9 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                      onClick={() => handleAddItem(data)}
                    >
                      Add to Cart <BsCart3 className=" text-2xl" />
                    </button>
                  )}
                  {activeUser.id === data.companyId ||
                  activeUser.role === "ADMIN" ? (
                    <div className=" drop-shadow-lg flex flex-row gap-8 p-3 rounded-xl bg-violet-300 mr-8">
                      <label
                        className=" flex flex-col items-center justify-center"
                        onClick={modifyHandler}
                      >
                        <h1 className=" font-semibold text-lg">Edit Item</h1>
                        <FaEdit
                          size={28}
                          className="ml-3 text-2xl hover: cursor-pointer text-violet-700"
                        />
                      </label>

                      <label className="flex flex-col relative items-center">
                        <h1 className=" font-semibold text-lg">
                          Disable/Enable
                        </h1>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={!data.enabled}
                          onChange={handleItemEnable}
                        />
                        <span
                          className={`relative w-10 h-6 transition rounded-full mt-1 ${
                            data.enabled ? "bg-violet-600" : "bg-gray-500"
                          }`}
                        >
                          <span
                            className={`absolute ${
                              data.enabled ? "right-1" : "left-1"
                            } top-1 w-4 h-4 transition transform bg-white rounded-full duration-1000`}
                          ></span>
                        </span>
                      </label>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {data.review?.length ? ( //el usuario tiene que tener review
              <div className="flex gap-x-12">
                <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl my-14 p-5 w-full min-h-[500px] overflow-x-hidden">
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
                            <div className="flex ml-5">
                              {[1, 2, 3, 4, 5].map((starNumber) => {
                                return starNumber <= reviews[index] ? (
                                  <FaStar className="text-yellow-500" />
                                ) : (
                                  <FaStar />
                                );
                              })}
                            </div>
                            <h1 className="m-5 font-medium text-lg">
                              {" "}
                              {review.user.name}{" "}
                            </h1>
                            <h1 className="m-5">"{review.comment}"</h1>
                          </div>
                        );
                      }
                    })}
                </div>
                <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl my-14 p-5 w-1/5 min-h-[500px]">
                  <div className="flex items-center">
                    <h1 className="font-bold text-6xl text-violet-600 m-1">
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
                  <h1 className=" text-lg font-semibold">
                    {reviews.length} reviews
                  </h1>
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
      {itemStatus === "enabled" && <EnableItem close={close} />}
      {itemStatus === "disabled" && <DisableItem close={close} />}
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
            type={"product"}
            handleSave={handleSetModify}
          />
        </div>
      ) : (
        <div className="flex flex-col w-4/5 m-5">
          {qrStatus === "success" && <QrGenerated close={close} />}
          {qrStatus === "failed" && <QrFailed close={close} />}
          <div className=" relative flex justify-center w-full min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
            <div className=" w-1/2 h-full">
              <img
                className="w-[650px] h-[500px] object-cover rounded-2xl mt-6 mb-6 ml-10 border-2 border-gray-300"
                src={data.imageUrl}
              ></img>
            </div>
            <div className=" w-1/2">
              <div className=" absolute text-5xl text-white right-0 top-4 bg-black p-5 pl-9 rounded-l-full font-bold drop-shadow-xl ">
                {data.discount}% OFF
              </div>

              <div className=" py-14 ">
                <p className=" font-bold text-5xl mr-48">{data.name}</p>
              </div>
              <div className=" mr-28">
                <h1 className=" font-semibold text-lg mt-1">
                  Discover the incredible
                  <span className="text-red-600"> {data.discount}% </span>
                  discount awaiting you in the {data.category} section at{" "}
                  {data.name}. Unveil the savings today!
                </h1>
                {data.distance && (
                  <h1 className=" my-4 font-semibold text-lg">
                    Distance to you: {data.distance?.text}
                  </h1>
                )}
                {data.price > 0 && (
                  <h1 className=" mt-10 font-extrabold text-5xl tracking-wider">
                    ${data.price}{" "}
                  </h1>
                )}
                <div className="font-semibold text-lg mt-6">
                  <h2>{data.description}</h2>
                </div>
              </div>
              <div className=" absolute right-10 bottom-10 flex">
                {activeUser.role !== "COMPANY" &&
                  activeUser.role !== "ADMIN" && (
                    <button
                      className="py-2 px-4 text-2xl mr-16 drop-shadow-xl font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                      onClick={handleGenerateCode}
                    >
                      Get Voucher
                    </button>
                  )}
                {activeUser.id === data.companyId ||
                activeUser.role === "ADMIN" ? (
                  <div className=" drop-shadow-lg flex flex-row gap-8 p-3 rounded-xl bg-violet-300 mr-8">
                    <label
                      className=" flex flex-col items-center justify-center"
                      onClick={modifyHandler}
                    >
                      <h1 className=" font-semibold text-lg">Edit Item</h1>
                      <FaEdit
                        size={28}
                        className="ml-3 text-2xl hover: cursor-pointer text-violet-600"
                      />
                    </label>

                    <label className="flex flex-col relative items-center">
                      <h1 className=" font-semibold text-lg">Disable/Enable</h1>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={!data.enabled}
                        onChange={handleItemEnable}
                      />
                      <span
                        className={`relative w-10 h-6 transition rounded-full mt-1 ${
                          data.enabled ? "bg-violet-600" : "bg-gray-500"
                        }`}
                      >
                        <span
                          className={`absolute ${
                            data.enabled ? "right-1" : "left-1"
                          } top-1 w-4 h-4 transition transform bg-white rounded-full duration-1000`}
                        ></span>
                      </span>
                    </label>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {data.review?.length ? ( //el item tiene que tener review
            <div className="flex gap-x-12">
              <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl my-14 p-5 w-full min-h-[500px] overflow-x-hidden">
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
                          <div className="flex ml-5">
                            {[1, 2, 3, 4, 5].map((starNumber) => {
                              return starNumber <= reviews[index] ? (
                                <FaStar className="text-yellow-500" />
                              ) : (
                                <FaStar />
                              );
                            })}
                          </div>
                          <h1 className="m-5 font-medium text-lg">
                            {" "}
                            {review.user.name}{" "}
                          </h1>
                          <h1 className="m-5">"{review.comment}"</h1>
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="flex flex-col justify-center  items-center bg-white rounded-2xl shadow-xl my-14 p-5 w-1/5 min-h-[500px]">
                <div className="flex items-center">
                  <h1 className="font-bold text-6xl text-violet-600 m-1">
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
                <h1 className=" text-lg font-semibold">
                  {reviews.length} reviews
                </h1>
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
