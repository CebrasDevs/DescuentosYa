"use client";
import Link from "next/link";
import { getAverageRating } from "@/utils/formatUtils";
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Card({ item, value }) {
    const { averageRating } = getAverageRating(item);

    return (
        <Link href={`/${item.id}`}>
            <div className="card relative bg-white w-[250px] min-h-[350px] rounded-2xl shadow-lg hover:shadow-lg hover:scale-105 transition-transform ease-in-out duration-300">
                {value === "profile" && <FaEdit size={30} className="absolute -right-4 -top-4 hover:text-blue-600" />}
                <span className="absolute top-5 right-0 py-1 px-4 rounded-l-full bg-black text-center text-xl font-medium text-white border-violet-600 border-t-2 border-b-2 border-l-2">
                    {item.discount}% OFF
                </span>

                <img src={item.imageUrl} alt="" className="w-[250px] h-[250px] object-cover rounded-t-2xl" />

                <div className="bottom flex justify-between bg-violet-600 min-h-[100px] rounded-b-2xl">
                    <div className="title text-white flex flex-col ml-2 mt-2 mb-2 justify-between">
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <h2 className="text-sm">{item.distance?.text}</h2>
                    </div>
                    <div className="flex flex-col m-2 justify-between">
                        <div>
                            {averageRating === 0 || averageRating === "NaN" ? null : (
                                <div className="flex bg-white rounded-md py-1 px-3">
                                    <FaStar className="text-yellow-500 text-2xl" />
                                    <span className="rounded font-semibold ml-2">{averageRating}</span>
                                </div>
                            )}
                        </div>
                        <div className="text-2xl text-center font-bold text-slate-900">
                            {item.price === 0 ? null : (
                                <div className="text-white">
                                    <h3>${item.price}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}