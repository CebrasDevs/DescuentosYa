"use client";
import { useDispatch, useSelector } from "react-redux";
import { addShoppinCartItem } from "@/redux/actions";
import Link from "next/link";

export default function ItemDetail({ data }) {
    console.log(data);
  const dispatch = useDispatch();
  const allShoppingItems = useSelector((state)=> state.allShoppingItems)
  

  const handleAddItem = function (itemFound) {
    if (!allShoppingItems.includes(itemFound)) {
      dispatch(addShoppinCartItem(itemFound));
    } else {
      alert("Item already added in shopping cart");
    }
  };

  const handleGenerateCode = function () {
    //logica de generacion de codigo, charlar
  };

  if (data.price !== 0) {
    //esto es un servicio
    return (
      <div className="bg-violet-200 flex justify-center m-5">
        <img className="m-5" src={data.url_image} />
        <div className="columns-1 m-5">
          <h1>
            Aprovecha el {data.discount} % de descuento en {data.category}{" "}
            en {data.name}{" "}
          </h1>
          <h1>{data.description}</h1>
          <h1>${data.price}</h1>
          <Link href={"/shoppingcart"} className="text-blue-700">
            <button onClick={() => handleAddItem(data)}>
              Agregar al carrito
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
  //si la company ofrece productos:
  return (
    <div className="bg-violet-200 flex justify-center m-5">
      <img className="m-5" src={data.url_image} />
      <div className="columns-1 m-5">
        <h1>
          Aprovecha el {data.discount} % de descuento en la seccion{" "}
          {data.category} en {data.name}{" "}
        </h1>
        <button onClick={handleGenerateCode}>Generar Codigo</button>
      </div>
    </div>
  );
}
