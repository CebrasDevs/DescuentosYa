"use client";
import { getCompanies } from "@/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function brands() {
    const companies = useSelector((state) => state.companies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompanies());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    
    return (
        <div className="grid grid-cols-2 gap-20 p-24 items-center justify-center ">
            {companies.map((company, index) => (
                <div key={index} className="bg-white shadow-xl h-64 rounded-lg overflow-hidden cursor-pointer ">
                    <Link href={`/brands/${company.id}`}>
                        <img className="h-full w-full object-cover" src={company.imageUrl} alt={company.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
