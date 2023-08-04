'use client'

import { useState } from "react"
import { formatItem } from "@/utils/formatUtils";
import { useSelector } from "react-redux";
import validateItem from "@/utils/validateItem";

export default function CreateItem() {
    const categories = useSelector((state) => state.categories);
    const allCategories = ['Choose category', ...categories];
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        category: 'Choose category',
        description: '',
        price: '',
        discount: '',
        imageUrl: ''
    });
    const isNotReady = (
        errors.name ||
        errors.category ||
        errors.price ||
        errors.discount ||
        errors.imageUrl
    );

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validateItem({
                ...input,
                [e.target.name]: e.target.value
            })
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        const formattedItem = formatItem(input);
        window.alert(`Item ${input.name} created successfully (provisory)`);
        //devolver el formattedItem al backend
        console.log(formattedItem);
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit new Item</h2>

            <p>Product name:</p>
            <input type="text" name="name" value={input.name} onChange={handleChange}/>
            {errors.name && <p>{errors.name}</p>}

            <p>Category:</p>
            <select name="category" value={input.category} onChange={handleChange}>
                {
                    allCategories?.map((category) => {
                        return <option key={category}>{category}</option>
                    })
                }
            </select>
            {errors.category && <p>{errors.category}</p>}

            <p>Product description:</p>
            <input type="text" name="description" value={input.description} onChange={handleChange}/>
            {errors.description && <p>{errors.description}</p>}

            <p>Original price:</p>
            <input type="text" name="price" value={input.price} onChange={handleChange}/>
            {errors.price && <p>{errors.price}</p>}

            <p>Discount applied:</p>
            <input type="text" name="discount" value={input.discount} onChange={handleChange}/>
            {errors.discount && <p>{errors.discount}</p>}

            <p>Item image:</p>
            <input type="text" name="imageUrl" value={input.imageUrl} onChange={handleChange}/>
            {errors.imageUrl && <p>{errors.imageUrl}</p>}

            <button disabled={isNotReady}>Create</button>
        </form>
    );
};