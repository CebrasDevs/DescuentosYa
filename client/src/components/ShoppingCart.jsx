"use client";
import { deleteShoppingCartItem, increaseItemQuantity, decreaseItemQuantity } from "@/redux/actions";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { URL_BASE } from "@/utils/const";


export default function ShoppingCart() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const activeUser = useSelector((state) => state.activeUser);
  const [counters, setCounters] = useState(shoppingCart.map(() => 1)); //creo un counter para cada item, iniciado en 1


  //aca se coloca la public key de mp
  initMercadoPago('TEST-ab84421f-0743-4e17-af16-5e47420efd52');


  const handleCounter = function (event, index) { //cada vez que clickea el counter local y el quantity global cambian, el esta local hace que React actualice componentes y evita que el renderizado del esta global se vea con demoras.
    if (event.target.name === "minus" && shoppingCart[index].quantity > 1) {
      let countersCopy = [...counters];
      countersCopy[index] = counters[index] - 1;
      setCounters(countersCopy);
      dispatch(decreaseItemQuantity(index))
    } else {
      let countersCopy = [...counters];
      countersCopy[index] = counters[index] + 1;
      setCounters(countersCopy);
      dispatch(increaseItemQuantity(index))
    }
  };

  const handleDelete = function (id) {
    dispatch(deleteShoppingCartItem(id));
  };

  const products = shoppingCart?.map((element, index) => ({
    id: element.item.id,
    title: element.item.name,
    unit_price: element.item.price,
    quantity: shoppingCart[index].quantity,
    category_id: element.item.category,
    description: "DescuentosYa",
  }));

  const user = {
    id: activeUser.id,
    email: activeUser.email,
    name: activeUser.name,
  };


  const handleCheckout = () => {
    axios.post(`${URL_BASE}/payment/create-order`, { products, user })
      .then(response => {
        console.log(response.data)
        window.location.href = response.data.response.body.init_point; // redirecciona la pagina a la ventana de Mercado de Pago
      })
      .catch((error) => console.log(error.message));
  };

  const handleCheckoutPP = () => {
    axios.post(`${URL_BASE}/payment/create-payment`, { products })
      .then(response => {
        window.location.href = response.data;
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="min-h-[60vh]">
      {shoppingCart?.map((item, index) => {

        return (
          <div className="m-10 mt-10 p-4 flex justify-center text-center flex-wrap rounded bg-violet-200" key={index}>
            <h2 className="m-10 justify-center">Product name: {item.item.name}</h2>
            <h2 className="m-10 justify-center">Price: ${item.item.price}</h2>
            <h2 className="m-10 justify-center">
              Total Price: ${(item.item.price * shoppingCart[index].quantity).toFixed(2)}
            </h2>
            <div>
              <button
                className="m-10"
                name="minus"
                onClick={(event) => handleCounter(event, index)}
                disabled={shoppingCart[index].quantity === 1}
              >
                {" "}
                -{" "}
              </button>

              {shoppingCart[index].quantity}

              <button
                className="m-10"
                name="plus"
                onClick={(event) => handleCounter(event, index)}
              >
                {" "}
                +{" "}
              </button>
            </div>

            <button
              className="h-1/4 w-20 mt-10 rounded text-white  bg-gray-400 hover:bg-red-500"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <div>
        {shoppingCart.length ? (
          <div>
            <button id='checkout' onClick={handleCheckout} className="ml-20 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800">
              Checkout Mercado Pago
            </button>

            <button id='checkoutpp' onClick={handleCheckoutPP} className="ml-20 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800">
              Checkout PayPal
            </button>
          </div>

          ) : (
            <Link href={"/"}>
              <h2>Shopping Cart is empty, try adding products or services!</h2>
            </Link>
        )}
      </div>
      <div id="wallet_container"></div>
    </div>
  );
}
