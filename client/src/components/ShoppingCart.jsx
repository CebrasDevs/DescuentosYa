"use client";
import { deleteShoppingCartItem } from "@/redux/actions";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const allShoppingItems = useSelector((state) => state.allShoppingItems);
  const [counters, setCounters] = useState(allShoppingItems.map(() => 1)); //creo un counter para cada item, iniciado en 1

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

  return (
    <div>
      {allShoppingItems?.map((item, index) => {
        return (
          <div className="m-10 mt-10 p-4 flex justify-center text-center flex-wrap bg-violet-200">
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
              className="h-1/4 w-20 mt-10 bg-red-500"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}

      <div>
        {allShoppingItems.length ? (
          <button>Checkout</button>
        ) : (
          <Link href={"/"}>
            <h2>Shopping Cart is empty, try adding products or services!</h2>
          </Link>
        )}
      </div>
    </div>
  );
}
