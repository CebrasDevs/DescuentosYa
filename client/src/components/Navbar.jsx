"use client";
import Link from "next/link";
import { BsCart3, BsWindowSidebar } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/D-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { cleanActiveUser, setActiveUser, setShoppingCart } from "@/redux/actions";
import { useEffect } from "react";
import { URL_BASE } from "@/utils/const";
import axios from "axios";
import Cookies from "js-cookie";
import { splitName } from "@/utils/formatUtils";
import { useLoadScript } from "@react-google-maps/api";

export default function Navbar() {
    useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY });
    const activeUser = useSelector((state) => state.activeUser);

    const dispatch = useDispatch();

    const router = useRouter();
    const params = useSearchParams();
    const profile = params.get("profile");

    useEffect(() => {
        // Acceder a una cookie
        const retrievedCookie = Cookies.get("accessTrue");
        if (retrievedCookie) {
            const parsedValue = JSON.parse(retrievedCookie);
            dispatch(setActiveUser(parsedValue.id));
        }
        const cart = Cookies.get("shoppingCart");
        if (cart) {
          const cartValue = JSON.parse(cart);
          dispatch(setShoppingCart(cartValue));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const handleLogOut = () => {
        Cookies.remove("accessTrue");
        Cookies.remove("shoppingCart");
        axios.post(`${URL_BASE}/logout`);
        router.push("/");
        dispatch(cleanActiveUser());
    };

    let fullName;
    if (activeUser.role === "MEMBER") {
        fullName = splitName(activeUser);
    }

    return (
        <div className=" fixed top-0 left-0 right-0 z-50  shadow-lg"> 
            <div className="flex items-center w-full h-16 bg-slate-50">
                <div className=" flex w-3/4 m-auto items-center">
                    <div className="flex items-center h-full ml-10 mr-auto">
                        <Link href={"/"} className="flex items-center">
                            <Image src={logo} alt="logo" width={50} />
                            <h1 className="text-violet-600 font-bold text-2xl">DESCUENTOS</h1>
                            &nbsp;&nbsp;
                            <h1 className="font-bold text-2xl">YA</h1>
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/howworks"}>
                            How It Works
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/discounts"}>
                            Browse Discounts
                        </Link>
                        {activeUser.role === "ADMIN" && (
                            <Link className="ml-10 font-medium hover:text-blue-500" href={`/admin`}>
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
                                        {activeUser.role === "ADMIN" || activeUser.role === "MEMBER" ? (
                                            <h1>{fullName.lastName}, {fullName.firstName}</h1>
                                        ) : (
                                            <h1>{activeUser.name}</h1>
                                        )}
                                        <h1>{activeUser.role.toLowerCase()}</h1>
                                    </div>
                                </Link>

                                <h2
                                    onClick={handleLogOut}
                                    className="ml-10 font-medium hover:text-blue-500 hover:cursor-pointer"
                                >
                                    Log Out
                                </h2>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full h-12 bg-neutral-800">
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
                                <Link href={"/about"} className="hover:bg-neutral-600 py-3 px-6">
                                    About
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
