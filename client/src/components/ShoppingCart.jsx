"use client";
import { deleteShoppingCartItem, createPreference, increaseItemQuantity, decreaseItemQuantity } from "@/redux/actions";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { URL_BASE } from "@/utils/const";


export default function ShoppingCart() {
  const dispatch = useDispatch();
  const ShoppingCart = useSelector((state) => state.ShoppingCart);
  const activeUser = useSelector((state) => state.activeUser);
  const [counters, setCounters] = useState(ShoppingCart.map(() => 1)); //creo un counter para cada item, iniciado en 1


  //aca se coloca la public key de mp
  initMercadoPago('TEST-ab84421f-0743-4e17-af16-5e47420efd52');


  const handleCounter = function (event, index) { //cada vez que clickea el counter local y el quantity global cambian, el esta local hace que React actualice componentes y evita que el renderizado del esta global se vea con demoras.
    if (event.target.name === "minus" && ShoppingCart[index].quantity > 1 ) {
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

  const products = ShoppingCart?.map((element, index) => ({
    id: element.item.id,
    title: element.item.name,
    unit_price: Math.ceil(element.item.price),
    quantity: ShoppingCart[index].quantity,
    category_id: element.item.category,
    description: "DescuentosYa",
  }));

  console.log(products)

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
      {ShoppingCart?.map((item, index) => {
        return (
          <div className="m-10 mt-10 p-4 flex justify-center text-center flex-wrap rounded bg-violet-200" key={index}>
            <h2 className="m-10 justify-center">Product name: {item.item.name}</h2>
            <h2 className="m-10 justify-center">Price: ${item.item.price}</h2>
            <h2 className="m-10 justify-center">
            Total Price: ${ (item.item.price * ShoppingCart[index].quantity).toFixed(2) }
            </h2>
            <div>
              <button
                className="m-10"
                name="minus"
                onClick={(event) => handleCounter(event, index)}
                disabled={ShoppingCart[index].quantity === 1}
              >
                {" "}
                -{" "}
              </button>

              {ShoppingCart[index].quantity}

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
        {ShoppingCart.length ? (
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
