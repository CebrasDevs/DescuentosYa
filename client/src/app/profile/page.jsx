"use client"
import CompanyProfile from "@/components/CompanyProfile";
import UserProfile from "@/components/UserProfile";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function profile() {
    const router = useRouter();
    useEffect(() => {
        const retrievedCookie = Cookies.get("accessTrue");
        if (!retrievedCookie) {
            router.push("/");
        }
    }, []);

    return (
        <>
            <UserProfile />
            <CompanyProfile />
        </>
    );
}
