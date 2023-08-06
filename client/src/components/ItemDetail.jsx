"use client";
import { useDispatch, useSelector } from "react-redux";
import { addShoppinCartItem } from "@/redux/actions";
import {BsCart3} from "react-icons/bs"
import Link from "next/link";

export default function ItemDetail({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  const allShoppingItems = useSelector((state) => state.allShoppingItems);

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
      <section className=" flex w-full h-full justify-center">
      <div className=" flex justify-center w-3/5 h-full bg-white rounded-2xl shadow-xl my-14 ">
        <div className=" w-1/2 h-full">
          <img
            className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
            src={data.url_image}
          ></img>
        </div>
        <div className=" w-1/2 p-6 pr-16">
          <div className=" absolute text-2xl text-white right-96 top-44  bg-black p-2 rounded-full font-bold">
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
          <div className=" mt-28 ml-80 right-0">
          <Link href={"/shoppingcart"}>
            <button
              className=" flex text-center gap-2 items-center py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
              onClick={() => handleAddItem(data)}
            >
               Add to Cart <BsCart3 className=" text-xl"/>  
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    );
  }

  //si la company ofrece productos:
  return (
    <section className=" flex w-full h-full justify-center">
      <div className=" flex justify-center w-3/5 h-full bg-white rounded-2xl shadow-xl my-14 ">
        <div className=" w-1/2 h-full">
          <img
            className="w-10/12 rounded-2xl mt-6 mb-6 ml-10 mr-6 border-2 border-gray-300"
            src={data.url_image}
          ></img>
        </div>
        <div className=" w-1/2 p-6 pr-16">
          <div className=" absolute text-2xl text-white right-96 top-44  bg-black p-2 rounded-full font-bold">
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
            {data.price > 0 && <h1 className=" mt-10 font-extrabold text-5xl tracking-wider">${data.price} </h1>}
          </div>
          <div className=" mt-36 ml-80 right-0">
            <button
              className="py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
              onClick={handleGenerateCode}
            >
              Generate Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}