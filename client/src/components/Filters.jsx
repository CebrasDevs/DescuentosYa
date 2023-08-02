'use client'

import { useDispatch, useSelector } from "react-redux";
import { filterCards } from "@/redux/actions";

export default function Filters () {
    const dispatch = useDispatch();
    const { allCategories, activeFilters } = useSelector((state) => state);

    const discountOptions = ['All', '+25%', '+40%', '+50%'];
    const itemTypeOptions = ['All types', 'Products', 'Services'];
    const sortingOptions = ['Alphabetical', 'Highest discount'];
    const categories = ['All categories', ...allCategories];

    

    //* Quitar esta linea cuando haya conectado los estados de redux
    // const provisoryCategories = ['All categories', 'Cleaning', 'Apparel', 'Food', 'Health & Wellness'];


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
            <select value={activeFilters.chosenItemType} onChange={handleChange}>
                {
                    itemTypeOptions.map((type) => {
                        return <option key={type} name="chosenItemType" value={type}>{type}</option>
                    })
                }
            </select>

            <p>Category:</p>
            <select value={activeFilters.chosenCategory} onChange={handleChange}>
                {
                    categories?.map((category) => {
                        return <option key={category} name="chosenCategory" value={category}>{category}</option>
                    })
                }
            </select>

            <p>%Discount:</p>
            {
                discountOptions.map((discount, index) => {
                    return (
                        <label>
                            <input 
                                key={index}
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
            <select value={activeFilters.chosenSorting} onChange={handleChange}>
                {
                    sortingOptions.map((sort) => {
                        return <option key={sort} name="chosenSorting" value={sort}>{sort}</option>
                    })
                }
            </select>
        </div>
    )
}