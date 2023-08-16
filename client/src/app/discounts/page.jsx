"use client";
import Filters from "@/components/Filters";
import Grid from "@/components/Grid";
import { getItemsByName } from "@/redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function discounts() {
  // const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  // const handleClick = () => {
  //     dispatch(getItemsByName(search));
  // }
  const handleChange = (e) => {
    // const value = e.target.value;
    // setSearch(value);
    dispatch(getItemsByName(e.target.value));
  };

  return (
    <div className="grid grid-cols-4 w-full pb-32">
      <div className=" my-36 w-full rounded-lg sticky">
        <Filters />
      </div>
      <div className="col-span-3 mr-36">
        <div className="relative mx-auto flex w-2/6 items-center justify-between rounded-md border shadow-lg mt-10">
          <svg
            className="absolute left-2 block h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input
            type="search"
            name="search"
            onInput={handleChange}
            className="h-14 w-full rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
            placeholder="Find your next discount"
          />
        </div>
        {/* <div className="flex justify-center h-10 my-6">
                    <input type="search" onInput={handleChange} name="search" placeholder="Search by Name" className="text-center"/>
                     <button onClick={handleClick}>Search</button>
                </div> */}
        <Grid />
      </div>
    </div>
  );
}
