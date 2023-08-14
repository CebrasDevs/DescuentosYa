'use client'

import CreateItem from "@/components/CreateItem";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Create() {
    const router = useRouter();
    useEffect(() => {
        const retrievedCookie = Cookies.get("accessTrue");
        if (!retrievedCookie) {
            router.push("/");
        }
    }, []);
    return (
        <div>
            <CreateItem />
        </div>
    );
}
