"use client";
import {
  deleteShoppingCartItem,
  createPreference,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/redux/actions";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { URL_BASE } from "@/utils/const";
import Cookies from "js-cookie";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const activeUser = useSelector((state) => state.activeUser);
  const [counters, setCounters] = useState(shoppingCart.map(() => 1)); //creo un counter para cada item, iniciado en 1

  //aca se coloca la public key de mp
  initMercadoPago("TEST-ab84421f-0743-4e17-af16-5e47420efd52");

  const handleCounter = function (event, index) {
    //cada vez que clickea el counter local y el quantity global cambian, el esta local hace que React actualice componentes y evita que el renderizado del esta global se vea con demoras.
    if (event.target.name === "minus" && shoppingCart[index].quantity > 1) {
      let countersCopy = [...counters];
      countersCopy[index] = counters[index] - 1;
      setCounters(countersCopy);
      dispatch(decreaseItemQuantity(index));
    } else {
      let countersCopy = [...counters];
      countersCopy[index] = counters[index] + 1;
      setCounters(countersCopy);
      dispatch(increaseItemQuantity(index));
    }
    Cookies.set("shoppingCart", JSON.stringify(shoppingCart));
  };

  const handleDelete = function (id) {
    // CAPTURAR COOKIE, SACAR JSON Y CAPTURAR CONTENIDO, FILTRAR TODOS LOS DISTINTOS
    let shoppingCartDelete = shoppingCart.filter(
      (shopping) => shopping.item.id !== id
    );
    Cookies.set("shoppingCart", JSON.stringify(shoppingCartDelete));
    dispatch(deleteShoppingCartItem(id));
  };

  const products = shoppingCart?.map((element, index) => ({
    id: element.item?.id,
    title: element.item?.name,
    unit_price: Math.ceil(element.item?.price),
    quantity: shoppingCart[index].quantity,
    category_id: element.item?.category,
    description: "DescuentosYa",
  }));

  const user = {
    email: activeUser.email,
    name: activeUser.name,
  };

  const handleCheckout = () => {
    const response = axios
      .post(`${URL_BASE}/payment/create-order`, { products, user })
      .then((response) => {
        console.log(response.data);
        window.location.href = response.data.response.body.init_point; // redirecciona la pagina a la ventana de Mercado de Pago
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className=" flex">
      <div className=" flex flex-col w-3/4 h-full min-h-[70vh] max-h-[70vh] bg-white border border-gray-200 shadow-lg ml-12 mt-20 rounded-lg items-center overflow-y-auto ">
        {shoppingCart?.map((item, index) => {
          return (
            <div
              className=" flex flex-row w-11/12 border-b-2 border-gray-400 p-4 "
              key={index}
            >
              <div className=" flex w-1/4 items-center ">
                <img
                  className=" h-36 rounded-md border shadow-md "
                  src={item.item.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex w-1/4 flex-col gap-8 px-4 py-4 text-center justify-center items-center">
                <span className="font-bold tracking-wide text-2xl">
                  {item.item.name}
                </span>
                <p className="text-lg font-bold">${item.item.price}</p>
              </div>
              <div className=" flex flex-row items-center text-xl">
                <div className=" text-center justify-center items-center">
                  <button
                    className=" font-semibold text-2xl m-10"
                    name="minus"
                    onClick={(event) => handleCounter(event, index)}
                    disabled={shoppingCart[index].quantity === 1}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
                <div>
                  {shoppingCart[index].quantity}

                  <button
                    className=" font-semibold text-2xl m-10"
                    name="plus"
                    onClick={(event) => handleCounter(event, index)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
              <div className="flex w-1/4 px-4 py-4 text-center justify-center items-center">
                <h2 className=" text-lg font-semibold">Total Price: $</h2>
                <h2 className=" justify-center text-lg font-semibold">
                  {(item.item.price * shoppingCart[index].quantity).toFixed(2)}
                </h2>
              </div>
              <div className=" flex items-center ">
                <button
                  className=" relative rounded-full text-white bg-red-600 hover:bg-red-900 ml-8 w-12 h-12 "
                  onClick={() => handleDelete(item.item.id)}
                >
                  <BsTrash className=" ml-2 text-3xl" />
                </button>
              </div>
            </div>
          );
        })}
        <div></div>
        <div id="wallet_container"></div>
      </div>
      <div className=" flex flex-col w-1/5 h-full min-h-[70vh] rounded-2xl bg-gray-300 border border-gray-200 ml-4 mt-20 text-center items-center">
        {shoppingCart.length ? (
          <button
            id="checkout"
            onClick={handleCheckout}
            className=" py-3 w-3/4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800"
          >
            Checkout
          </button>
        ) : (
          <Link href={"/"}>
            <h2 className=" font-bold text-4xl">
              Shopping Cart is empty, try adding products or services!
            </h2>
          </Link>
        )}
      </div>
    </div>
  );
}
