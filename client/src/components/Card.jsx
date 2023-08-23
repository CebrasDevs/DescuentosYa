"use client";
import Link from "next/link";
import { getAverageRating } from "@/utils/formatUtils";
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Card({ item, value }) {
  const { averageRating } = getAverageRating(item);
  
  return (
    <Link href={`/${item.id}`}>
      <div className="relative bg-violet-600 w-[270px] h-[340px] rounded-lg shadow-xl hover:shadow-2xl overflow-hidden">
        {value === "profile" && (
          <FaEdit
            size={30}
            className="absolute -right-4 -top-4 hover:text-blue-600"
          />
        )}
        <span className="absolute top-5 -right-0 p-2 rounded-l-full bg-black pl-4 pr-3 text-center text-2xl font-bold  text-white">
          {item.discount}% OFF
        </span>
        <div className="flex justify-center items-center h-[230px] bg-white">
          <img
            src={item.imageUrl}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>

        <div className="bottom flex flex-row w-full my-3 ">
            
          <div className="title text-white font-bold text-2xl w-2/3 flex justify-center text-center ">
            <h1 className="drop-shadow-xl">{item.name}</h1>
          </div>
          

          <div className=" flex flex-col gap-y-4 w-1/3 items-center ">
            <div className="flex flex-row rounded-lg bg-white px-1 drop-shadow-xl items-center justify-center text-center ">
                <FaStar className="text-yellow-500 text-xl m-1" />
                <span className="text-lg font-bold mr-1 mt-0.5">
                    {averageRating >= 0 ? averageRating : 0}
                </span>
            </div>
            <div className="text-4xl font-bold drop-shadow-lg ">
              {item.price === 0 ? (
                null
              ) : (
                  <h3 className=" text-white">${item.price}</h3>
              )}
            </div>
          </div>

        </div>
          { value === 'profile' &&
            <h1 className="m-2">{item.enabled ? "enabled" : "disabled"}</h1>
          }
      </div>
    </Link>
  );
}
