'use client'
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import logo from "../assets/D-logo.jpg";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

// const links = [
//   {
//     label: "Home",
//     route: "/",
//   },
//   {
//     label: "About",
//     route: "/brands",
//   },
//   {
//     label: "profile",
//     route: "/profile",
//   },
//   {
//     label: "login",
//     route: "/login",
//   },
// ];
// {links.map(({ label, route }) => (
//  <Link href={route}>{label}</Link>
// ))}

export default function Navbar() {
    const activeUser = useSelector((state)=> state.activeUser)
    return (
        <>
            <div className="flex fixed top-0 left-0 right-0 items-center w-full h-16 bg-slate-50 shadow-md z-10">
                <div className=" flex w-3/4 m-auto items-center">
                    <div className="flex items-center h-full ml-10 mr-auto">
                        <Link href={"/"} className="flex items-center">
                            <Image src={logo} alt="logo" width={50} height={50} />
                            <h1 className="text-violet-600 font-bold text-2xl">DESCUENTOS</h1>&nbsp;&nbsp;<h1 className="font-bold text-2xl">YA</h1>
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"#"}>
                            How It Works
                        </Link>
                        <Link className="hover:text-blue-500 ml-10" href={"/discounts"}>
                            Browse Discounts
                        </Link>
                        {activeUser.role === 'ADMIN' && <Link className="hover:text-blue-500 ml-10" href={"/admin"}>
                            Dashboard
                        </Link>}
                    </div>
                    <div className="flex items-center">
                        <Link href={"/login"} className="mr-10 font-medium hover:text-blue-500">
                            Log in
                        </Link>
                        <Link href={"/register"} className="mr-10 font-medium hover:text-blue-500">
                            Sign Up
                        </Link>
                        <Link
                            href="/create"
                            className="mr-10 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800"
                        >
                            Post a Discount
                        </Link>
                        <Link href={"/shoppingcart"} className="mr-10 font-medium hover:text-blue-500">
                            <BsCart3 />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full h-12 bg-neutral-800 mt-16">
                <div className=" flex w-3/4 m-auto">
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
                </div>
            </div>
        </>
    );
}
