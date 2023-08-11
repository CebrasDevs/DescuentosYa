"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/D-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { setActiveUser } from "@/redux/actions";
import { useEffect } from "react";
import { URL_BASE } from "@/utils/const";
import axios from "axios";

export default function Navbar() {
    const activeUser = useSelector((state) => state.activeUser);

    const dispatch = useDispatch();

    const params = useSearchParams();
    const profile = params.get("profile");

    useEffect(() => {
        if(localStorage.getItem("id")){
            dispatch(setActiveUser(localStorage.getItem("id")))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const handleLogOut = () => {
        localStorage.clear();
        axios.get(`${URL_BASE}/logout`);
        window.location.href = "http://localhost:3000";
    }

    return (
        <>
            <div className="flex fixed top-0 left-0 right-0 items-center w-full h-16 bg-slate-50 shadow-md z-10">
                <div className=" flex w-3/4 m-auto items-center">
                    <div className="flex items-center h-full ml-10 mr-auto">
                        <Link href={"/"} className="flex items-center">
                            <Image src={logo} alt="logo" width={50} />
                            <h1 className="text-violet-600 font-bold text-2xl">DESCUENTOS</h1>
                            &nbsp;&nbsp;
                            <h1 className="font-bold text-2xl">YA</h1>
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/"}>
                            How It Works
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/discounts"}>
                            Browse Discounts
                        </Link>
                        {activeUser.role === "ADMIN" && (
                            <Link className="hover:text-blue-500 ml-10" href={`/admin`}>
                                Dashboard
                            </Link>
                        )}
                        {activeUser.role === "COMPANY" && (
                            <Link href={`/profile?profile=true`} className="ml-10 font-medium hover:text-blue-500">
                                My Items
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center">
                        {!activeUser.id ? (
                            <>
                                <Link href={"/login"} className="mr-10 font-medium hover:text-blue-500">
                                    Log in
                                </Link>
                                <Link href={"/register"} className="mr-10 font-medium hover:text-blue-500">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <>
                                {activeUser.role === "COMPANY" && (
                                    <Link
                                        href={"/create"}
                                        className="mr-10 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800"
                                    >
                                        Post a Discount
                                    </Link>
                                )}
                                {activeUser.role === "MEMBER" && (
                                    <Link href={"/shoppingcart"} className="mr-10 font-medium hover:text-blue-500">
                                        <BsCart3 />
                                    </Link>
                                )}
                                <Link
                                    href={activeUser.role !== "ADMIN" ? `/profile?profile=true` : `/admin`}
                                    className=" flex items-center font-medium hover:text-blue-500"
                                >
                                    <IoPerson className=" mr-3" />
                                    <div>
                                        <h1>{activeUser.name}</h1>
                                        <h1>{activeUser.role.toLowerCase()}</h1>
                                    </div>
                                </Link>

                                <h2 onClick={handleLogOut} className="ml-10 font-medium hover:text-blue-500 hover:cursor-pointer">
                                    Log Out
                                </h2>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full h-12 bg-neutral-800 mt-16">
                <div className=" flex w-3/4 m-auto">
                    {profile === "true" ? (
                        <>
                            {activeUser.role === "COMPANY" && (
                                <div className="flex h-full mr-auto text-white">
                                    <div className="ml-10 py-3 px-6 border-x-2">MY PROFILE</div>
                                    <a href={"#data"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Data
                                    </a>
                                    <a href={"#items"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Items
                                    </a>
                                    <a href={"#sales"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Sales
                                    </a>
                                    <a href={"#vouchers"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Vouchers
                                    </a>
                                </div>
                            )}
                            {activeUser.role === "MEMBER" && (
                                <div className="flex h-full mr-auto text-white">
                                    <div className="ml-10 py-3 px-6 border-x-2">MY PROFILE</div>
                                    <a href={"#data"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Data
                                    </a>
                                    <a href={"#vouchers"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Vouchers
                                    </a>
                                    <a href={"#orders"} className="hover:bg-neutral-600 py-3 px-6">
                                        My Orders
                                    </a>
                                </div>
                            )}
                            {activeUser.role === "ADMIN" && (
                                <div className="flex h-full mr-auto text-white">
                                    <div className="ml-10 py-3 px-6 border-x-2">MY PROFILE</div>
                                    <a href={"#users"} className="hover:bg-neutral-600 py-3 px-6">
                                        Users
                                    </a>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="flex h-full mr-auto text-white">
                                <Link href={"/brands"} className="ml-10 hover:bg-neutral-600 py-3 px-6">
                                    Find Companies
                                </Link>
                                <Link href={"#"} className="hover:bg-neutral-600 py-3 px-6">
                                    Find Services
                                </Link>
                                <Link href={"#"} className="hover:bg-neutral-600 py-3 px-6">
                                    About
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
