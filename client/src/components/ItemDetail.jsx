'use client'
import { useSelector, useDispatch } from "react-redux"
import { addShoppinCartItem } from "@/redux/actions";
import Link from "next/link";

export default function ItemDetail({id}){
    const dispatch = useDispatch();
    const allItems = useSelector((state)=> state.allItems)
    let itemFound = allItems.find((item)=> item.id === Number(id))

    const handleAddItem = function(itemFound){
        dispatch(addShoppinCartItem(itemFound))
    }

    const handleGenerateCode = function(){
        //logica de generacion de codigo, charlar
    }

    if(itemFound.price !== 0){//esto es un servicio
        return(
            <div>
                <h1>Imagen del servicio</h1>
                <h1>Aprovecha el {itemFound.discount} % de descuento en {itemFound.category} en {itemFound.company} </h1>
                <h1>{itemFound.description}</h1>
                <Link href={"/shoppingcart"} className="text-blue-700">
                    <button onClick={()=>handleAddItem(itemFound)}>Agregar al carrito</button>
                </Link>
            </div>
        )
    }
    //si la company ofrece productos:
    return(
        <div>
            <h1>Imagen del item</h1>
            <h1>Aprovecha el {itemFound.discount} % de descuento en la seccion {itemFound.category} en {itemFound.company} </h1>
            <button onClick={handleGenerateCode}>Generar Codigo</button>  
        </div>
    )
}