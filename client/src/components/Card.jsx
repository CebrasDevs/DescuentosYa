"use client";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

// action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
export default function Card({ item, value }) {
    return (
        <Link href={`/${item.id}`}>
            <div className="card relative bg-white w-[270px] min-h-[455px] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform ease-in-out duration-300">
                {value === "profile" && <FaEdit size={30} className="absolute -right-4 -top-4 hover:text-blue-600" />}
                <span className="absolute -top-1 -left-1 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {item.discount}% OFF
                </span>
                <div className="flex justify-center items-center h-[270px]">
                    <img src={item.imageUrl} alt="" className="w-[250px] h-[250px] object-cover rounded-t-md" />
                </div>
                <div className="bottom border-t flex flex-col justify-center px-4">
                    <div className="title font-semibold text-lg">{item.name}</div>
                    <div className="category font-light">{item.category}</div>
                    <div className=" my-2 flex flex-col gap-y-3 items-center justify-between">
                        <div className="text-2xl text-center font-bold text-slate-900">
                            {item.price === 0 ? (
                                <h3>{item.discount}% OFF</h3>
                            ) : (
                                <div className="flex flex-row gap-8">
                                    <h3 className=" font-normal text-red-600 tracking-tighter">{item.discount}% OFF</h3>
                                    <h3>${item.price}</h3>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                    5.0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="flex items-center justify-center">
                    <button className="w-[90%] rounded-md bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800">
                        View Item
                    </button>
                </div>
            </div>
        </Link>
    );
}