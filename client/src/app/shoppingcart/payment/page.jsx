"use client"
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function payment() {
    useEffect(() => {
        const retrievedCookie = Cookies.get("accessTrue");
        if (!retrievedCookie) {
            window.location.href = "http://localhost:3000/";
        }
    }, []);
    return <></>;
}
