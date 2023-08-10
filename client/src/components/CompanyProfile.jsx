"use client";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyItem } from "@/redux/actions";
import Link from "next/link";
import Grid from "./Grid";
import { useState } from "react";

export default function CompanyProfile() {
    const dispatch = useDispatch();

    const activeUser = useSelector((state) => state.activeUser);

    const [modify, setModify] = useState(false);
    const modifyHandler = () => {
        setModify(true);
    };

    function handleDelete(id) {
        dispatch(deleteCompanyItem(id));
    }

    if (activeUser.role === "COMPANY") {
        return (
            <div className="flex flex-col items-center">
                <div id="data" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">DATA</h1>
                    <div className="flex h-[300px] ">
                        <div className="flex justify-center items-center w-1/2">
                            <img src={activeUser.imageUrl} className="w-[300px]" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            {modify ? (
                                <div>ACA HAY QUE IMPORTAR UNA COPIA DEL FORM DE SING UP COMPANY</div>
                            ) : (
                                <div className="w-3/4">
                                    <div>
                                        <h1>Company Name: {activeUser.name} </h1>
                                        <h1>Email: {activeUser.email} </h1>
                                        <h1>CUIT: {activeUser.cuit} </h1>
                                        <h1>Address: {activeUser.address} </h1>
                                        <h1>Company Description: {activeUser.description} </h1>
                                        <h1>Phone Number: {activeUser.phoneNumber} </h1>
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={modifyHandler}>
                                            <FaUserEdit size={30} className="hover:text-blue-500" />
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div id="items"></div>
                        </div>
                    </div>
                    
                </div>

                <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">ITEMS</h1>
                    <div className="flex justify-center h-10">
                        <input type="search" name="search" placeholder="Search by Name" />
                        {/* <button onClick={handleClick}>Search</button> */}
                    </div>
                    <div>
                        <Grid value="profile" />
                    </div>
                    <div id="sales"></div>
                </div>

                <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">SALES</h1>
                    <div className="flex justify-center h-10">
                        <input type="search" name="search" placeholder="Search by Name" />
                        {/* <button onClick={handleClick}>Search</button> */}
                    </div>
                    <div className="items-center">
                        {activeUser.sales?.map((sale, index) => {
                            return (
                                <div key={index} className="flex items-center border border-black rounded-lg m-2">
                                    {sale.items?.map((item, index) => {
                                        return (
                                            <img
                                                key={index}
                                                className="w-[100px] h-[100px] m-5 rounded-lg"
                                                src={item.imageUrl}
                                                alt=""
                                            />
                                        );
                                    })}
                                    <h1 className="ml-2">Way to Pay: {sale.wayToPay}</h1>
                                    <h1 className="ml-2">| State: {sale.state}</h1>
                                    <h1 className="ml-2">| User: {sale.user.name}</h1>
                                    <h2 className="ml-2">
                                        |{" "}
                                        <Link className="hover:text-blue-500" href={"#"}>
                                            Detail
                                        </Link>
                                    </h2>
                                </div>
                            );
                        })}
                        <div id="vouchers"></div>
                    </div>
                </div>
                
                <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">VOUCHERS</h1>
                    <div className="flex justify-center h-10">
                        <input type="search" name="search" placeholder="Search by Name" />
                        {/* <button onClick={handleClick}>Search</button> */}
                    </div>
                    <div className="items-center">
                        {activeUser.vouchers?.map((voucher, index) => {
                            return (
                                <div key={index} className="flex items-center border border-black rounded-lg m-2">
                                    <img className="w-[100px] h-[100px] m-5 rounded-lg" src={voucher.item.imageUrl} />
                                    <h2 className="ml-2">Voucher: {voucher.item.name}</h2>
                                    <h2 className="ml-2">| Expired: {voucher.expirationDate}</h2>
                                    <h1 className="ml-2">| User: {voucher.user.name}</h1>
                                    <h2 className="ml-2">| <Link className="hover:text-blue-500" href={"#"}>Detail</Link></h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
