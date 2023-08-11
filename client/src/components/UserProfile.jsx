"use client";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import ModifyMemberProfile from "./ModifyMemberProfile";

export default function UserProfile() {
    const activeUser = useSelector((state) => state.activeUser);

    const [modify, setModify] = useState(false);
    const modifyHandler = () => {
        setModify(true);
    };

    if (activeUser.role === "MEMBER") {
        return (
            <div className="flex flex-col items-center">
                <div id="data" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">DATA</h1>
                    <div className="flex h-[550px] ">
                        <div className="flex justify-center items-center w-1/2">
                            <img src={activeUser.imageUrl} className="p-5 w-[300px] rounded-lg" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            {modify ? (
                                <div>
                                    <ModifyMemberProfile memberData={activeUser}/>
                                </div>
                            ) : (
                                <div className="w-3/4">
                                    <div>
                                        <h1>Company Name: {activeUser.name} </h1>
                                        <h1>Email: {activeUser.email} </h1>
                                        <h1>DNI: {activeUser.dni} </h1>
                                        <h1>Address: {activeUser.address} </h1>
                                        <h1></h1>
                                        <h1>Phone Number: {activeUser.phoneNumber} </h1>
                                        <h1>Last payment: {activeUser.lastPayment}</h1>
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={modifyHandler}>
                                            <FaUserEdit size={30} className="hover:text-blue-500" />
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div id="vouchers"></div>
                        </div>
                    </div>
                </div>
                {/* PARTE DE LOS VOUCHER DEL USUARIO */}
                <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">My Vouchers</h1>
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
                                    <h2 className="ml-2">
                                        | Company:{" "}
                                        <Link className="hover:text-blue-500" href={`/brands/${voucher.company.id}`}>{voucher.company.name}</Link>
                                    </h2>
                                    <h2 className="ml-2">| Expired: {voucher.expirationDate}</h2>
                                    <h2 className="ml-2">| <Link className="hover:text-blue-500" href={"#"}>Detail</Link></h2>
                                    <h2 className="ml-2">| <Link className="hover:text-blue-500" href={"#"}>Renew</Link></h2>
                                </div>
                            );
                        })}
                        <div id="orders"></div>
                    </div>
                </div>
                {/* PARTE DE LAS COMPRAS DEL USUARIO */}
                <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="border-b-2 p-4 font-bold text-xl">My Orders</h1>
                    <div className="flex justify-center h-10">
                        <input type="search" name="search" placeholder="Search by Name" />
                        {/* <button onClick={handleClick}>Search</button> */}
                    </div>
                    <div className="items-center">
                        {activeUser.shoppings?.map((buys, index) => {
                            return (
                                <div key={index} className="flex items-center border border-black rounded-lg m-2">
                                    {buys.items?.map((item, index) => {
                                        return (
                                            <img
                                                key={index}
                                                className="w-[100px] h-[100px] m-5 rounded-lg"
                                                src={item.imageUrl}
                                                alt=""
                                            />
                                        );
                                    })}
                                    <h1 className="ml-2">Way to Pay: {buys.wayToPay}</h1>
                                    <h1 className="ml-2">| State: {buys.state}</h1>
                                    <h2 className="ml-2">| <Link className="hover:text-blue-500" href={"#"}>Detail</Link></h2>
                                    <h2 className="ml-2">| <Link className="hover:text-blue-500" href={"#"}>Buy again</Link></h2>
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
