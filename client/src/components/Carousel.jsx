"use client";
import Card from "./Card";
import usePaginate from "@/hooks/usePaginate";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";

// action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
export default function Carousel({ value }) {
    const { currentView } = usePaginate();
    const items = currentView;

    const companies = useSelector((state) => state.companies);

    return value === "discounts" ? (
        <div className="carousel flex items-center justify-start overflow-x-auto relative py-5">
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <Card item={item} />
                    </div>
                );
            })}
        </div>
    ) : (
        <div className="carousel flex items-center justify-start overflow-x-auto relative">
            {companies.map((company, index) => {
                return (
                    <div key={index}>
                        <div className="card bg-white w-[270px] rounded-lg m-2 shadow-md hover:shadow-xl">
                        <Link href={`/brands/${company.id}`}>
                            <img
                                className=" card w-[500px] h-[200px] bg-white shadow-xl rounded-lg"
                                src={company.imageUrl}
                                alt={company.companyName}
                            />
                        </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
