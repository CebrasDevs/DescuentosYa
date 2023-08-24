"use client";

import { useState } from "react";
import { formatItem } from "@/utils/formatUtils";
import { useDispatch, useSelector } from "react-redux";
import validateModifiedItem from "@/utils/validateModifiedItem";
import { getItemDetail, setActiveUser } from "@/redux/actions";
import { TiArrowBack } from "react-icons/ti";

import axios from "axios";
import { URL_BASE } from "@/utils/const";
axios.defaults.withCredentials = true;

export default function ModifiedItem({ data, type , handleSave}) {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories);
    const allCategories = ["Choose category", ...categories];
    const [imageFile, setImageFile] = useState(null);
    const [editImage, setEditImage] = useState(false);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: data.name,
        categoryId: data.category,
        description: data.description,
        price: data.price,
        discount: data.discount,
        imageUrl: data.imageUrl,
    });
    const isNotReady = errors.name || errors.category || errors.price || errors.discount || errors.imageUrl;

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateModifiedItem({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedItem = formatItem(input);
        try {
            if (editImage) {
                const cloudinaryFormData = new FormData();
                cloudinaryFormData.append("file", imageFile);
                cloudinaryFormData.append("upload_preset", "DescuentosYa");
                const cloudinaryResponse = await axios.post(
                    "https://api.cloudinary.com/v1_1/dwndzlcxp/image/upload",
                    cloudinaryFormData
                );
                formattedItem.imageUrl =
                    "https://res.cloudinary.com/dwndzlcxp/image/upload/" + cloudinaryResponse.data.public_id;
            }
            const response = await axios.patch(`${URL_BASE}/items/${data.id}`, formattedItem);
            if (response.status === 200) {
                setErrors({});
                dispatch(getItemDetail(data.id));
                dispatch(setActiveUser())
                handleSave();
            }
        } catch (error) {
            console.log(error);
        }
    };

    function handleImageChange(e) {
        setImageFile(e.target.files[0]);
    }

    function handleEditImage() {
        setEditImage(true);
    }
    return (
        <section className=" bg-slate-200 dark:bg-white h-full">
            <div className="flex  justify-center mt-12 pb-12 ">
                <div className="rounded-lg shadow dark:border bg-white">
                    <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl">
                                Modify Item
                            </h1>
                            <TiArrowBack className="text-2xl hover: cursor-pointer" onClick={()=>handleSave()}/>
                        </div>
                        <form onSubmit={handleSubmit} className=" relative">
                            <div className=" flex flex-row h-28 justify-between">
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">Product name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={input.name}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Your product name"
                                    />
                                    {errors.name && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.name}</p>
                                    )}
                                </div>
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">Category</label>
                                    <select
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        name="categoryId"
                                        value={input.categoryId}
                                        onChange={handleChange}
                                    >
                                        {allCategories?.map((category, index) => {
                                            return <option key={index}>{category}</option>;
                                        })}
                                    </select>
                                    {errors.category && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.category}</p>
                                    )}
                                </div>
                            </div>
                            <div className=" flex flex-row h-28 justify-between">
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">
                                        Product description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Product description"
                                        value={input.description}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    />
                                    {errors.description && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.description}</p>
                                    )}
                                </div>
                                {type !== "product" && (
                                    <div className=" w-2/5">
                                        <label className="block mb-2 text-m font-medium text-gray-900 ">
                                            Original Price
                                        </label>
                                        <input
                                            type="text"
                                            name="price"
                                            placeholder="Product price"
                                            value={input.price}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        />
                                        {errors.price && (
                                            <p className=" text-red-600 text-sm font-semibold ">{errors.price}</p>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className=" flex flex-row h-28 justify-between">
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">
                                        Discount applied
                                    </label>
                                    <input
                                        name="discount"
                                        value={input.discount}
                                        onChange={handleChange}
                                        type="text"
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder=" Product discount"
                                    />

                                    {errors.discount && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.discount}</p>
                                    )}
                                </div>
                            </div>
                            {!editImage ? (
                                <button className="m-5" onClick={handleEditImage}>
                                    Edit Image
                                </button>
                            ) : (
                                <div>
                                    <input
                                        type="file"
                                        name="imageUrl"
                                        for="Company Logo"
                                        className="m-2 bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        onChange={handleImageChange}
                                    />
                                    {errors.imageUrl && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.imageUrl}</p>
                                    )}
                                </div>
                            )}

                            <button
                                disabled={Object.values(input).length === 0 || isNotReady}
                                type="submit"
                                className="flex justify-center items-center w-1/2 h-12 mx-auto text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border disabled:opacity-50 disabled:cursor-not-allowed "
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
// <form onSubmit={handleSubmit}>
//     <h2>Submit new Item</h2>

//     <p>Product name:</p>
//     <input type="text" name="name" value={input.name} onChange={handleChange}/>
//     {errors.name && <p>{errors.name}</p>}

//     <p>Category:</p>
//     <select name="category" value={input.category} onChange={handleChange}>
//         {
//             allCategories?.map((category) => {
//                 return <option key={category}>{category}</option>
//             })
//         }
//     </select>
//     {errors.category && <p>{errors.category}</p>}

//     <p>Product description:</p>
//     <input type="text" name="description" value={input.description} onChange={handleChange}/>
//     {errors.description && <p>{errors.description}</p>}

//     <p>Original price:</p>
//     <input type="text" name="price" value={input.price} onChange={handleChange}/>
//     {errors.price && <p>{errors.price}</p>}

//     <p>Discount applied:</p>
//     <input type="text" name="discount" value={input.discount} onChange={handleChange}/>
//     {errors.discount && <p>{errors.discount}</p>}

//     <p>Item image:</p>
//     <input type="text" name="imageUrl" value={input.imageUrl} onChange={handleChange}/>
//     {errors.imageUrl && <p>{errors.imageUrl}</p>}

//     <button disabled={isNotReady}>Create</button>
// </form>
