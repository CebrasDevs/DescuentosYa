"use client"
import CompanyProfile from "@/components/CompanyProfile";
import UserProfile from "@/components/UserProfile";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function profile() {
    // useEffect(() => {
    //     const retrievedCookie = Cookies.get("accessTrue");
    //     if (!retrievedCookie) {
    //         window.location.href = "http://localhost:3000/";
    //     }
    // }, []);

    return (
        <>
            <UserProfile />
            <CompanyProfile />
        </>
    );
}
