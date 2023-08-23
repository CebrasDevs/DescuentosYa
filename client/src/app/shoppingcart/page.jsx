"use client";
import ShoppingCart from "../../components/ShoppingCart";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function pageShoppingCart() {
    // const router = useRouter();
    // useEffect(() => {
    //     const retrievedCookie = Cookies.get("accessTrue");
    //     if (!retrievedCookie) {
    //         router.push("/");
    //     }
    // }, []);

    return (
        <>
            <ShoppingCart />
        </>
    );
}
