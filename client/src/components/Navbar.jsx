"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/D-logo.jpg";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
    const activeUser = useSelector((state) => state.activeUser);
    const params = useSearchParams();
    const role = params.get("user");

    return (
        <>
            <div className="flex fixed top-0 left-0 right-0 items-center w-full h-16 bg-slate-50 shadow-md z-10">
                <div className=" flex w-3/4 m-auto items-center">
                    <div className="flex items-center h-full ml-10 mr-auto">
                        <Link href={"/"} className="flex items-center">
                            <Image src={logo} alt="logo" width={50} />
                            <h1 className="text-violet-600 font-bold text-2xl">DESCUENTOS</h1>&nbsp;&nbsp;
                            <h1 className="font-bold text-2xl">YA</h1>
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/"}>
                            How It Works
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/discounts"}>
                            Browse Discounts
                        </Link>
                        {activeUser.role === "ADMIN" && (
                            <Link className="hover:text-blue-500 ml-10" href={"/admin"}>
                                Dashboard
                            </Link>
                        )}
                        {activeUser.role === "COMPANY" && (
                            <Link href={`/profile?user=${activeUser.role}`} className="ml-10 font-medium hover:text-blue-500">
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
                                <Link
                                    href={"/create"}
                                    className="mr-10 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800"
                                >
                                    Post a Discount
                                </Link>
                                {activeUser.role === "MEMBER" && (
                                    <Link href={"/shoppingcart"} className="mr-10 font-medium hover:text-blue-500">
                                        <BsCart3 />
                                    </Link>
                                )}
                                <Link href={`/profile?user=${activeUser.role}`} className=" flex items-center font-medium hover:text-blue-500">
                                    <IoPerson className=" mr-3"/>
                                    <h1>{activeUser.name}</h1>
                                </Link>
                                
                                <Link href={"/logout"} className="ml-10 font-medium hover:text-blue-500">
                                    Log Out
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full h-12 bg-neutral-800 mt-16">
                <div className=" flex w-3/4 m-auto">
                    {role !== "COMPANY" ? (
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
                    ) : (
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
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
