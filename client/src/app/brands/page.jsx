"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function brands() {
    const companies = useSelector((state) => state.companies);
    
    return (
        <div className="grid grid-cols-5 gap-10 p-24 items-center justify-center drop-shadow-xl ">
            {companies.map((company, index) => (
                <div key={index} className="bg-transparent shadow-xl h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-70 ">
                    <Link href={`/brands/${company.id}`}>
                        <img className="h-full w-full object-cover" src={company.imageUrl} alt={company.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
