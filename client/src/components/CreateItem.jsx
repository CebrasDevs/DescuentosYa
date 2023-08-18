"use client";

import { useState } from "react";
import { formatItem } from "@/utils/formatUtils";
import { useSelector } from "react-redux";
import validateItem from "@/utils/validateItem";
import { setActiveUser } from "@/redux/actions";
import Cookies from "js-cookie";
import axios from "axios";
import { URL_BASE } from "@/utils/const";
import ItemSuccess from "./Modals/Company/ItemSuccess";
import ItemFailure from "./Modals/Company/ItemFailure";

export default function CreateItem() {
    const retrievedCookie = Cookies.get("accessTrue");
    const parsedValue = JSON.parse(retrievedCookie);

    const categories = useSelector((state) => state.categories);
    const allCategories = ["Choose category", ...categories];
    const [itemCreated, setItemCreated] = useState("pending");
    const [imageFile, setImageFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        userId: parsedValue.id,
        name: "",
        categoryId: "Choose category",
        description: "",
        price: "",
        discount: "",
    });
    const isNotReady = errors.name || errors.categoryId || errors.price || errors.discount;

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateItem({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleImageChange(e) {
        setImageFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedItem = formatItem(input);
        const imageInput = document.getElementById("imageInput");
        try {
            if (imageInput.files.length === 0) {
                formattedItem.imageUrl = "https://res.cloudinary.com/dwndzlcxp/image/upload/itemDefault_tiigtj";
            } else {
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
            const response = await axios.post(`${URL_BASE}/items`, formattedItem);
            if (response.status === 200) {
                dispatch(setActiveUser(input.userId));
                setErrors({});
                setInput({
                    name: "",
                    categoryId: "Choose category",
                    description: "",
                    price: "",
                    discount: "",
                });
                setItemCreated("success");
            }
        } catch (error) {
            console.log(error);
            setItemCreated("failure");
            
        }
    };

    const close = (status) => {
        setItemCreated("pending");
    }

    return (
        <section className=" bg-slate-200 dark:bg-white h-full">
            { itemCreated === "success" && <ItemSuccess close={close} />}
            { itemCreated === "failure" && <ItemFailure close={close} /> }
            <div className="flex justify-center mt-12 pb-12 bg-slate-200 ">
                <div className=" w-5/12 mt-10 rounded-lg shadow dark:border bg-white">
                    <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl">
                            Create Item
                        </h1>
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
                                            return (
                                                <option value={index} key={category}>
                                                    {category}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {errors.categoryId && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.categoryId}</p>
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
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">
                                        Product image
                                    </label>
                                    <input
                                        accept="image/*"
                                        name="imageUrl"
                                        id="imageInput"
                                        onChange={handleImageChange}
                                        type="file"
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder=" Product image"
                                    />
                                </div>
                            </div>

                            <button
                                disabled={!Object.values(input).every((value) => value !== "") || isNotReady}
                                type="submit"
                                className="flex justify-center items-center w-1/2 h-12 mx-auto text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border disabled:opacity-50 disabled:cursor-not-allowed "
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
