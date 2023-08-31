"use client";
import Link from "next/link";
import { getAverageRating } from "@/utils/formatUtils";
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Card({ item, value }) {
  const { averageRating } = getAverageRating(item);

  return (
    <Link href={`/${item.id}`}>
      <div className="card relative bg-white w-[250px] min-h-[350px] rounded-2xl shadow-lg drop-shadow-lg hover:shadow-lg hover:scale-105 transition-transform ease-in-out duration-300">
        <span className="absolute drop-shadow-lg top-5 right-0 py-1.5 pl-4 pr-2 shadow-lg rounded-l-full bg-black text-center text-2xl font-bold text-white ">
          {item.discount}% OFF
        </span>

        <img
          src={item.imageUrl}
          alt=""
          className="w-[250px] h-[230px] object-cover rounded-t-2xl"
        />

        <div className="bottom flex justify-between bg-violet-600 min-h-[120px] rounded-b-2xl">
          <div className="title text-white flex flex-col ml-2 mt-2 mb-2 justify-between">
            <h1 className=" drop-shadow-md font-semibold text-lg">
              {item.name}
            </h1>
            <h2>{item.distance?.text}</h2>
          </div>
          <div className="flex flex-col m-2 justify-between">
            <div>
              {averageRating === 0 || averageRating === "NaN" ? null : (
                <div className="flex bg-white rounded-md py-1 px-3 drop-shadow-lg">
                  <FaStar className="text-yellow-500 text-xl mt-0.5" />
                  <span className="rounded font-semibold ml-2">
                    {averageRating}
                  </span>
                </div>
              )}
            </div>
            <div className="text-2xl text-center font-bold text-slate-900">
              {item.price === 0 ? null : (
                <div className="text-white text-3xl drop-shadow-md">
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
