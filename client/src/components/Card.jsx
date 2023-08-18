"use client";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

// action que me llene un arreglo EG de items ni bien se levante el front, me traigo ese EG
export default function Card({ item, value }) {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href={`/${item.id}`}
      >
        <img src={item.imageUrl} className="object-cover" alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {item.discount}% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href={`/${item.id}`}>
          <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
          <h6>{item.category}</h6>
        </a>
        <div className=" mt-2 mb-5 flex flex-col gap-y-3 items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-slate-900">
              {item.price === 0 ? (
                <div>{item.discount}% OFF</div>
              ) : (
                <div className="flex flex-row gap-8">
                  <div className=" font-normal text-red-600 tracking-tighter">
                    {item.discount}% OFF
                  </div>
                  <div>${item.price}</div>
                </div>
              )}
            </span>
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
        {value === "profile" && (
          <Link
            href={`/${item.id}`}
            className="absolute -right-4 -top-4 hover:text-blue-600"
          >
            <FaEdit size={30} />
          </Link>
        )}
        <Link
          href={`/${item.id}`}
          className="flex items-center justify-center rounded-md bg-violet-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-300"
        >
          View Item
        </Link>
      </div>
    </div>
  );
}

// <div classNameName="relative card bg-white w-[270px] h-[400px] rounded-lg m-2 shadow-md hover:shadow-xl hover:scale-105 transition-transform ease-in-out duration-300">
//     {value === "profile" && (
//         <Link href={`/${item.id}`} classNameName="absolute -right-4 -top-4 hover:text-blue-600">
//             <FaEdit size={30}/>
//         </Link>
//     )}
//     <div classNameName="top border-b flex justify-center">
//         <img src={item.imageUrl} alt="" classNameName="w-[270px] h-[250px] rounded-t-lg object-cover" />
//     </div>
//     <div classNameName="bottom flex flex-col justify-center items-start px-4 mt-4">
//         <div classNameName="title font-semibold text-lg">{item.name}</div>
//         <div classNameName="category font-light">{item.category}</div>
//         <div classNameName="flex my-2">
//             <div classNameName="discount mr-14 text-red-500 font-medium">
//                 {item.price === 0 ? (
//                     <div>{item.discount}% discount</div>
//                 ) : (
//                     <div classNameName="flex flex-col">
//                         <div>{item.discount}% discount</div>
//                         <div>${item.price}</div>
//                     </div>
//                 )}
//             </div>
//             <Link href={`/${item.id}`} classNameName="text-blue-600">
//                 View
//             </Link>
//         </div>
//     </div>
// </div>
