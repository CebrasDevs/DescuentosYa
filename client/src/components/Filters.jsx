'use client'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filters () {
    const dispatch = useDispatch();
    const discountOptions = ['25%', '40%', '50%'];
    const itemTypeOptions = ['All types', 'Products', 'Services'];
    const orderOptions = ['Alphabetical', 'Highest discount'];

    //* Descomentar estas lineas cuando esten listos los estados globales para filtrar
    // const { allCategories } = useSelector((state) => state);
    // const { chosenItemType, chosenDiscount, chosenCategory, chosenOrder } = useSelector((state) => state.activeFilters);
    // const categories = ['All categories', ...allCategories];

    //* Quitar esta linea cuando haya conectado los estados de redux
    const provisoryCategories = ['All categories', 'Cleaning', 'Apparel', 'Food', 'Health & Wellness'];

    //!FALTA agregar los atributos "value={estado global}" a los <select>
    return (
        <div>
            <select>
                {
                    itemTypeOptions.map((type, index) => {
                        return <option key={index} name="itemType">{type}</option>
                    })
                }
            </select>
            <select>
                {
                    provisoryCategories.map((category, index) => {
                        return <option key={index} name="category">{category}</option>
                    })
                }
            </select>
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
            <select>
                {
                    orderOptions.map((order, index) => {
                        return <option key={index} name="order">{order}</option>
                    })
                }
            </select>
        </div>
    )
}