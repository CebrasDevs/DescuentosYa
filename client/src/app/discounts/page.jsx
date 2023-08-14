"use client"
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
    }

    return (
        <div className="grid grid-cols-4 gap-4 w-4/5 m-auto pb-32">
            <div className=" mt-20 bg-gradient-to-b from-violet-200 to-slate-200 rounded-lg sticky">
                <Filters />
            </div>
            <div className="col-span-3">
                <div className="flex justify-center h-10 my-4">
                    <input type="search" onInput={handleChange} name="search" placeholder="Search by Name" className="text-center"/>
                    {/* <button onClick={handleClick}>Search</button> */}
                </div>
                <Grid />
            </div>
        </div>
    );
}
