"use client";
import Link from "next/link";

// action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
export default function Card({ item }) {
    return (
        <div className="card bg-white w-[270px] rounded-lg m-2 shadow-md hover:shadow-xl">
            <div className="top border-b flex justify-center">
              <img src={item.img} alt="" className="w-[250px] h-[250px] object-cover" />
            </div>
            <div className="bottom flex flex-col justify-center items-start px-4 mt-4">
              <div className="title font-semibold text-lg">{item.name}</div>
                <div className="category font-light">{item.category}</div>
                <div className="flex my-2">
                  <div className="discount mr-14 text-red-500 font-medium">{item.discount}% discount</div>
                  <Link href={`/${item.id}`} className="text-blue-600">View</Link>
                </div>
            </div>
        </div>
    );
}
