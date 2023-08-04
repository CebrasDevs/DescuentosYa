'use client'
import { useSelector, useDispatch } from "react-redux"
import { addShoppinCartItem } from "@/redux/actions";
import Link from "next/link";

export default function ItemDetail({id}){
    const dispatch = useDispatch();
    const allItems = useSelector((state)=> state.allItems)
    const allShoppingItems = useSelector((state)=> state.allShoppingItems)
    let itemFound = allItems.find((item)=> item.id === Number(id))

    const handleAddItem = function(itemFound){
        if(!allShoppingItems.includes(itemFound)){
            dispatch(addShoppinCartItem(itemFound))
        }else{
            alert('Item already added in shopping cart')
        }
    }

    const handleGenerateCode = function(){
        //logica de generacion de codigo, charlar
    }

    if(itemFound.price !== 0){//esto es un servicio
        return(
            <div className="bg-violet-200 flex justify-center m-5">
                <img className="m-5" src={itemFound.img}/>
                <div className="columns-1 m-5">
                    <h1>Aprovecha el {itemFound.discount} % de descuento en {itemFound.category} en {itemFound.name} </h1>
                    <h1>{itemFound.description}</h1>
                    <Link href={"/shoppingcart"} className="text-blue-700">
                        <button onClick={()=>handleAddItem(itemFound)}>Agregar al carrito</button>
                    </Link>
                </div>
            </div>
        )
    }
    //si la company ofrece productos:
    return(
        <div className="bg-violet-200 flex justify-center m-5">
            <img className="m-5" src={itemFound.img}/>
            <div className="columns-1 m-5">
                <h1>Aprovecha el {itemFound.discount} % de descuento en la seccion {itemFound.category} en {itemFound.name} </h1>
                <button onClick={handleGenerateCode}>Generar Codigo</button>  
            </div>
        </div>
    )
}