'use client'
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyItem } from "@/redux/actions";


export default function CompanyProfile(){

    const dispatch = useDispatch();

    
    const activeUser = useSelector((state)=> state.activeUser);
    // const allItems = useSelector((state)=> state.allItems);
    // const company_items = allItems.filter((item)=> item.userId === activeUser.id);


    function handleDelete(id){
        dispatch(deleteCompanyItem(id));
    };

    if(activeUser.role === 'company'){
        return (
            <div>
                <div>
                    <h1>Imagen de la marca</h1>
                    <h1>Company Name: {activeUser.companyName} </h1>
                    <h1>Email: {activeUser.email} </h1>
                    <h1>CUIT: {activeUser.cuit} </h1>
                    <h1>Address: {activeUser.address} </h1>
                    <h1>Company Description: {activeUser.description} </h1>
                    <h1>Phone Number: {activeUser.phoneNumber} </h1>
                </div>

                <div>
                    {activeUser.Items?.map((item, index)=> {
                    return (
                    <div className="m-10 mt-10 p-4 flex justify-center text-center flex-wrap bg-violet-200" key={index}>
                        <h1 className="m-10 justify-center">{item.id}</h1>
                        <h1 className="m-10 justify-center">Imagen del servicio o producto</h1>
                        <h1 className="m-10 justify-center">Descripcion del producto o servicio{item.description}</h1>
                        <button onClick={()=>handleDelete(item.id)} className="h-1/4 w-20 mt-10 bg-red-500"> Delete </button>
                    </div>
                    )})}
                </div>
            </div>

        )
    } return null;
};
