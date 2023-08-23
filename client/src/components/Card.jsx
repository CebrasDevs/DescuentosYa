"use client";
import Link from "next/link";
import { getAverageRating } from "@/utils/formatUtils";
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Card({ item, value }) {
  const { averageRating } = getAverageRating(item);
  
  return (
    <Link href={`/${item.id}`}>
      <div className="card relative bg-white w-[270px] min-h-[410px] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform ease-in-out duration-300">
        {value === "profile" && (
          <FaEdit
            size={30}
            className="absolute -right-4 -top-4 hover:text-blue-600"
          />
        )}
        <span className="absolute -top-1 -left-1 m-2 p-1 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {item.discount}% OFF
        </span>
        <div className="flex justify-center items-center h-[270px]">
          <img
            src={item.imageUrl}
            alt=""
            className="w-[250px] h-[250px] object-cover rounded-t-md"
          />
        </div>

        <div className="bottom border-t flex flex-row  justify-center min-h-[90px] w-full items-center mx-2">
            
          <div className="title font-semibold text-lg w-2/3 flex justify-between items-center">
            <h1 className="ml-2">{item.name}</h1>
          </div>
          

          <div className=" my-2 flex flex-col w-1/3 items-center mr-4">
            <div className="flex items-center">
                <FaStar className="text-yellow-500 text-2xl m-1" />
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {averageRating >= 0 ? averageRating : 0}
                </span>
            </div>
            <div className="text-2xl text-center font-bold text-slate-900">
              {item.price === 0 ? (
                null
              ) : (
                <div className="flex flex-row gap-8">
                  <h3>${item.price}</h3>
                </div>
              )}
            </div>
          </div>

        </div>
          { value === 'profile' &&
            <h1 className="m-2">{item.enabled ? "enabled" : "disabled"}</h1>
          }

        <div className="flex justify-center bottom-0">
          <button className="w-[90%] rounded-md bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800">
            View Item
          </button>
        </div>
      </div>
    </Link>
  );
}
