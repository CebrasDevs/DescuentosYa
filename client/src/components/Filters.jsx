'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filters () {
    const dispatch = useDispatch();
    const discountOptions = ['All', '+25%', '+40%', '+50%'];
    const itemTypeOptions = ['All types', 'Products', 'Services'];
    const sortingOptions = ['Alphabetical', 'Highest discount'];

    //* Descomentar estas lineas cuando esten listos los estados globales para filtrar
    // const { allCategories } = useSelector((state) => state);
    // const { chosenItemType, chosenDiscount, chosenCategory, chosenSorting } = useSelector((state) => state.activeFilters);
    // const categories = ['All categories', ...allCategories];

    //* Quitar esta linea cuando haya conectado los estados de redux
    const provisoryCategories = ['All categories', 'Cleaning', 'Apparel', 'Food', 'Health & Wellness'];

    //!FALTA agregar los atributos "value={estado global}" a los <select>
    return (
        <div>
            <p>Type:</p>
            <select>
                {
                    itemTypeOptions.map((type, index) => {
                        return <option key={index} name="itemType">{type}</option>
                    })
                }
            </select>
            <p>Category:</p>
            <select>
                {
                    provisoryCategories.map((category, index) => {
                        return <option key={index} name="category">{category}</option>
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
                                name="discount"
                                value={discount}
                            />
                            {discount}
                        </label>
                    )
                })
            }
            <p>Sort:</p>
            <select>
                {
                    sortingOptions.map((sort, index) => {
                        return <option key={index} name="order">{sort}</option>
                    })
                }
            </select>
        </div>
    )
}