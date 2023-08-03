'use client'

import { useDispatch, useSelector } from "react-redux";
import { filterCards } from "@/redux/actions";

export default function Filters () {
    const dispatch = useDispatch();
    const activeFilters = useSelector((state) => state.activeFilters);
    const categories = useSelector((state) => state.categories);

    const discountOptions = ['All', '+25%', '+40%', '+50%'];
    const itemTypeOptions = ['All types', 'Products', 'Services'];
    const sortingOptions = ['Alphabetical', 'Highest discount'];
    const allCategories = ['All categories', ...categories];


    function handleChange(e) {
        dispatch(filterCards({
            ...activeFilters,
            [e.target.name]: e.target.value
            })
        );
    };


    return (
        <div>
            <p>Type:</p>
            <select value={activeFilters.chosenItemType} name="chosenItemType" onChange={handleChange}>
                {
                    itemTypeOptions.map((type) => {
                        return <option key={type}>{type}</option>
                    })
                }
            </select>

            <p>Category:</p>
            <select value={activeFilters.chosenCategory} name="chosenCategory" onChange={handleChange}>
                {
                    allCategories?.map((category) => {
                        return <option key={category}>{category}</option>
                    })
                }
            </select>

            <p>%Discount:</p>
            {
                discountOptions.map((discount) => {
                    return (
                        <label key={discount}>
                            <input 
                                type="radio" 
                                name="chosenDiscount"
                                checked={activeFilters.chosenDiscount === discount}
                                value={discount}
                                onChange={handleChange}
                            />
                            {discount}
                        </label>
                    )
                })
            }

            <p>Sort:</p>
            <select value={activeFilters.chosenSorting} name="chosenSorting" onChange={handleChange}>
                {
                    sortingOptions.map((sort) => {
                        return <option key={sort}>{sort}</option>
                    })
                }
            </select>
        </div>
    )
}