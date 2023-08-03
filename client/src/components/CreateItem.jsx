'use client'

import { useState } from "react"
import { formatItem } from "@/utils/formatUtils";

export default function CreateItem() {
    const [input, setInput] = useState({
        name: '',
        category: '',
        description: '',
        price:'',
        discount: ''
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const formattedItem = formatItem(input);
        window.alert(`Item ${input.name} created successfully (provisory)`);
        //devolver el formattedItem al backend
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit new Item</h2>

            <p>Product name:</p>
            <input type="text" name="name" value={input.name} onChange={handleChange}/>


            <p>Category:</p>
            <input type="text" name="category" value={input.category} onChange={handleChange}/>


            <p>Product description:</p>
            <input type="text" name="description" value={input.description} onChange={handleChange}/>


            <p>Original price:</p>
            <input type="text" name="price" value={input.price} onChange={handleChange}/>


            <p>Discount applied:</p>
            <input type="text" name="discount" value={input.discount} onChange={handleChange}/>

            <button>Create</button>
        </form>
    )
}