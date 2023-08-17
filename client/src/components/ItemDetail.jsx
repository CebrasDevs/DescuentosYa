"use client";
import { useDispatch, useSelector } from "react-redux";
import { addShoppingCartItem } from "@/redux/actions";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import ModifiedItem from "./ModifiedItem";
import { FaEdit } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";

export default function ItemDetail({ data }) {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state) => state.shoppingCart);
    const activeUser = useSelector((state) => state.activeUser);

    const router = useRouter();

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
      } else {
        // El itemFound no coincide con ningún atributo 'item' en shoppingCart
        let newItem = { item: itemFound, quantity: 1 };
        Cookies.set("shoppingCart", JSON.stringify([...shoppingCart, newItem]));
        dispatch(addShoppingCartItem(itemFound));
        router.push("/shoppingcart");
      }
    }
  };

    const handleGenerateCode = function () {
        const retrievedCookie = Cookies.get("accessTrue");
        if (!retrievedCookie) {
            router.push(`/login?detail=true&itemId=${data.id}`);
        } else {
            //logica de generacion de codigo, charlar
        }
    };

    const modifyHandler = () => {
        setModify(true);
    };

    if (data.price !== 0) {
        //esto es un servicio
        return (
            <section className=" flex w-full h-full justify-center">
                {modify ? (
                    <div className=" flex justify-center w-3/5 h-full bg-white rounded-2xl shadow-xl my-14 ">
                        <div className=" w-1/2 h-full">
                            <img
                                className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
                                src={data.imageUrl}
                            ></img>
                        </div>
                        <ModifiedItem data={data} type={"service"} handleSave={handleSetModify} />
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
                    <div className=" relative flex justify-center w-3/5 min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
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
                                <h1 className=" font-semibold text-lg mt-12">
                                    Aprovecha el
                                    <span className=" text-red-600"> {data.discount}% </span>
                                    de descuento en la seccion {data.category} en {data.name}
                                </h1>
                                <h1 className=" mt-10 font-extrabold text-5xl tracking-wider">${data.price} </h1>
                            </div>
                            <div className="font-semibold mt-10">
                                <h2>{data.description}</h2>
                            </div>
                            <div className=" absolute right-10 bottom-10 flex">
                                {activeUser.role === "ADMIN" || activeUser.role === "COMPANY" ? null : (
                                    <Link href={"/shoppingcart"}>
                                        <button
                                            className=" flex text-center gap-2 items-center py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                                            onClick={() => handleAddItem(data)}
                                        >
                                            Add to Cart <BsCart3 className=" text-xl" />
                                        </button>
                                    </Link>
                                )}
                                {activeUser.id === data.companyId || activeUser.role === "ADMIN" ? (
                                    <button onClick={modifyHandler}>
                                        <FaEdit className="ml-5 text-2xl hover: cursor-pointer" />
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    }
  

  //si la company ofrece productos:
  return (
    <section className=" flex w-full h-full justify-center">
      {modify ? (
        <div className=" flex justify-center w-3/5 h-full bg-white rounded-2xl shadow-xl my-14 ">
          <div className=" w-1/2 h-full">
            <img
              className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
              src={data.imageUrl}
            ></img>
          </div>
          <ModifiedItem data={data} type={"product"} />
        </div>
      ) : (
        <div className=" relative flex justify-center w-3/5 min-h-[500px] bg-white rounded-2xl shadow-xl my-14 ">
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
              <h1 className=" font-semibold text-lg mt-12">
                Aprovecha el
                <span className=" text-red-600"> {data.discount}% </span>
                de descuento en la seccion {data.category} en {data.name}
              </h1>
              {data.price > 0 && (
                <h1 className=" mt-10 font-extrabold text-5xl tracking-wider">
                  ${data.price}{" "}
                </h1>
              )}
            </div>
            <div className=" absolute right-10 bottom-10 flex">
              <button
                className="py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                onClick={handleGenerateCode}
              >
                Get Voucher
              </button>
              {activeUser.id === data.companyId ||
              activeUser.role === "ADMIN" ? (
                <button onClick={modifyHandler}>
                  <FaEdit size={30} className="ml-6" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
