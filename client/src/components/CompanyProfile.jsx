'use client'
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyItem } from "@/redux/actions";
import Link from "next/link";


export default function CompanyProfile(){

    const dispatch = useDispatch();

    
    const activeUser = useSelector((state)=> state.activeUser);
    // const allItems = useSelector((state)=> state.allItems);
    // const company_items = allItems.filter((item)=> item.userId === activeUser.id);


    function handleDelete(id){
        dispatch(deleteCompanyItem(id));
    };

    if(activeUser.role === 'COMPANY'){
        return (
            <div>
                <div>
                    <img src={activeUser.imageUrl}/>
                    <h1>Company Name: {activeUser.companyName} </h1>
                    <h1>Email: {activeUser.email} </h1>
                    <h1>CUIT: {activeUser.cuit} </h1>
                    <h1>Address: {activeUser.address} </h1>
                    <h1>Company Description: {activeUser.description} </h1>
                    <h1>Phone Number: {activeUser.phoneNumber} </h1>
                </div>

                <div id="items" className="transition ease-in-out">
                    {activeUser.Items?.map((item, index)=> {
                    return (
                    <div className="m-10 mt-10 p-4 flex justify-center text-center flex-wrap bg-violet-200" key={index}>
                        <h1 className="m-10 justify-center">{item.id}</h1>
                        <h1 className="m-10 justify-center">Imagen del servicio o producto</h1>
                        <h1 className="m-10 justify-center">Descripcion del producto o servicio  {item.description}</h1>
                        <button onClick={()=>handleDelete(item.id)} className="h-1/4 w-20 mt-10 bg-red-500"> Delete </button>
                        <Link href={`/${item.id}`}>
                            Edit
                        </Link>
                    </div>
                    )})}
                </div>
            </div>

        )
    } return null;
};
