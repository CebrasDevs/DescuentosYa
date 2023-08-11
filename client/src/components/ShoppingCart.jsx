"use client";
import { deleteShoppingCartItem, createPreference } from "@/redux/actions";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { URL_BASE } from "@/utils/const";


export default function ShoppingCart() {
  const dispatch = useDispatch();
  const allShoppingItems = useSelector((state) => state.allShoppingItems);
  const activeUser = useSelector((state) => state.activeUser);
  const [counters, setCounters] = useState(allShoppingItems.map(() => 1)); //creo un counter para cada item, iniciado en 1


  //aca se coloca la public key de mp
  initMercadoPago('TEST-ab84421f-0743-4e17-af16-5e47420efd52');

  const handleCounter = function (event, index) {
    if (event.target.name === "minus" && counters[index] > 1) {
      let countersCopy = [...counters];
      countersCopy[index] = counters[index] - 1;
      setCounters(countersCopy);
    } else {
      let countersCopy = [...counters];
      countersCopy[index] = counters[index] + 1;
      setCounters(countersCopy);
    }
  };

  const handleDelete = function (id) {
    dispatch(deleteShoppingCartItem(id));
  };

  const products = allShoppingItems?.map((item) => ({
    id: item.id,
    title: item.name,
    unit_price: Math.ceil(item.price),
    quantity: 1,
    category_id: item.category,
    description: "DescuentosYa",
  }));

  const user = {
    email: activeUser.email,
    name: activeUser.name,
  };
  

  const handleCheckout = () => {
    const response = axios.post(`${URL_BASE}/payment/create-order`, { products, user })
      .then(response => {
        console.log(response.data)
        window.location.href = response.data.response.body.init_point; // redirecciona la pagina a la ventana de Mercado de Pago
      })
      .catch((error) => console.log(error.message));
  };


  return (
    <div>
      {allShoppingItems?.map((item, index) => {
        return (
          <div className="m-10 mt-10 p-4 flex justify-center text-center flex-wrap rounded bg-violet-200" key={index}>
            <h2 className="m-10 justify-center">Product name: {item.name}</h2>
            <h2 className="m-10 justify-center">Price: ${item.price}</h2>
            <h2 className="m-10 justify-center">
              Total Price: ${item.price * counters[index]}
            </h2>
            <div>
              <button
                className="m-10"
                name="minus"
                onClick={(event) => handleCounter(event, index)}
                disabled={counters[index] === 1}
              >
                {" "}
                -{" "}
              </button>

              {counters[index]}

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
        {allShoppingItems.length ? (
          <button id='checkout' onClick={handleCheckout} className="ml-20 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800">
            Checkout
          </button>

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
