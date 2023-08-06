"use client";
import usePaginate from "@/hooks/usePaginate";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export default function Pagination() {
  const { handleOnClick, currentPage, numberOfPages } = usePaginate();

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        name="previous"
        className="flex items-center gap-2 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
        onClick={handleOnClick}
      >
        <BsArrowLeft strokeWidth={2} className="h-4 w-4" /> PREV
      </button>
      <div className="flex items-center gap-2">
        <span className=" font-bold">
          {" "}
          {currentPage} / {numberOfPages}{" "}
        </span>
      </div>
      <button
        name="next"
        className="flex items-center gap-2 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
        onClick={handleOnClick}
      >
        NEXT
        <BsArrowRight strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
};
