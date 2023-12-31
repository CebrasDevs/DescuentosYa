"use client";

import { useSelector, useDispatch } from "react-redux";
import { filterCards } from "@/redux/actions";
import Pagination from "./Pagination";

export default function Filters({ showModal }) {
    const activeFilters = useSelector((state) => state.activeFilters);
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const discountOptions = ["All", "25% or more", "35% or more", "45% or more"];
    const itemTypeOptions = ["All types", "Products", "Services"];
    const sortingOptions = ["Alphabetical", "Highest discount", "Closest first"];
    const allCategories = ["All categories", ...categories];

    function handleChange(e) {
        if (e.target.value === "Closest first" && !localStorage.getItem('userLocation')) {
            showModal(true)
        } else {
            dispatch(
                filterCards({
                    ...activeFilters,
                    [e.target.name]: e.target.value,
                })
            );
        }
    }
    return (
        <div className="sticky top-40 pb-10 rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="flex flex-col justify-center text-center ">
                <div className=" p-5">
                    <p className="font-medium mb-2 text-lg">Type:</p>
                    <select
                        value={activeFilters.chosenItemType}
                        name="chosenItemType"
                        onChange={handleChange}
                        className="py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                    >
                        {itemTypeOptions.map((type) => {
                            return <option key={type}>{type}</option>;
                        })}
                    </select>
                </div>
                <div className=" p-5">
                    <p className="font-medium mb-2 text-lg">Category:</p>
                    <select
                        value={activeFilters.chosenCategory}
                        name="chosenCategory"
                        onChange={handleChange}
                        className="py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                    >
                        {allCategories?.map((category) => {
                            return <option key={category}>{category}</option>;
                        })}
                    </select>
                </div>
                <div className=" p-5">
                    <p className="font-medium mb-2 text-lg">Discount:</p>
                    {discountOptions.map((discount) => {
                        return (
                            
                            <label className="flex justify-center mt-2" key={discount}>
                                <input
                                    className=" w-10 cursor-pointer"
                                    type="radio"
                                    name="chosenDiscount"
                                    checked={activeFilters.chosenDiscount === discount}
                                    value={discount}
                                    onChange={handleChange}
                                />
                                {discount}
                            </label>
                        );
                    })}
                </div>
                <div className=" p-6">
                    <p className="font-medium mb-2 text-lg">Sort:</p>
                    <select
                        className=" py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800 cursor-pointer"
                        value={activeFilters.chosenSorting}
                        name="chosenSorting"
                        onChange={handleChange}
                    >
                        {sortingOptions.map((sort) => {
                            return <option key={sort}>{sort}</option>;
                        })}
                    </select>
                </div>
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    );
}
