"use client";
import { useState } from "react";

// const allShoppingItems = useSelector((state)=> state.allShoppingItems);
//me traigo el arreglo de items del carrito del estado global (useSelector)

export default function ShoppingCart() {
  const [allShoppingItems, setAllShoppingItems] = useState([
    {
      id: 1,
      userId: 2,
      description: "coca cola 1,5lt",
      name: "bebida cola",
      price: 350,
    },
    {
      id: 2,
      userId: 3,
      description: "fanta 1,5lt",
      name: "bebida gasificada",
      price: 400,
    },
  ]);

  const [counters, setCounters] = useState(allShoppingItems.map(() => 1));//creo un counter para cada item, iniciado en 1

  const handleCounter = function (event, index) {
   

    if (event.target.name === "minus" && counters[index] > 1) {
      let countersCopy = [...counters]; /* [2,2] */
      countersCopy[index] = counters[index] - 1; /* [1,2] */
      setCounters(countersCopy);  /* [1,2] */
    } else {
        let countersCopy = [...counters]; /* [2,2] */
        countersCopy[index] = counters[index] + 1; /* [3,2] */
        setCounters(countersCopy);  /* [3,2] */
    }
  };

  const handleDelete = function (id) {
    //despacho una action que me borre un elemento (objeto) del arreglo de items del carrito (EG)
    setAllShoppingItems(allShoppingItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {allShoppingItems?.map((item, index) => {
        return (
          <div className="mt-10">
            <h2>Product name: {item.name}</h2>
            <h2>Price: {item.price} $</h2>
            <h2>Total Price:{item.price * counters[index]} $</h2>
            <div>
              <button
                className="m-10"
                name="minus"
                onClick={(event) => handleCounter(event, index)}
                disabled={counters[index] === 1}
              > - </button>
              
              {counters[index]}
              
              <button
                className="m-10"
                name="plus"
                onClick={(event) => handleCounter(event, index)}
              > + </button>
            </div>
            <button
              className="bg-red-500"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}

      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
