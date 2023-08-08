"use client";

import { useEffect, useState } from "react";
import { formatItem } from "@/utils/formatUtils";
import { useDispatch, useSelector } from "react-redux";
import validateModifiedItem from "@/utils/validateModifiedItem";
import { getCategories, getDiscounts } from "@/redux/actions";

import axios from "axios";

export default function ModifiedItem({ data, type }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);
  const allCategories = ["Choose category", ...categories];
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: data.name,
    category: data.category,
    description: data.description,
    price: data.price,
    discount: data.discount,
    imageUrl: data.url_image,
  });
  const isNotReady =
    errors.name ||
    errors.category ||
    errors.price ||
    errors.discount ||
    errors.imageUrl;

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
      const response = await axios.patch(
        `http://localhost:3001/items/${data.id}`,
        formattedItem
      );
      if (response.status === 200) {
        window.alert("The item was modified successfully");
        setErrors({});
        setInput({
          name: "",
          category: "Choose category",
          description: "",
          price: "",
          discount: "",
          imageUrl: "",
        });
        dispatch(getDiscounts())
      }
    } catch (error) {
        console.log(error.message)
      window.alert(error.response.data);
    }
  };

  return (
    <section className=" bg-slate-200 dark:bg-white h-full">
      <div className="flex  justify-center mt-12 pb-12 bg-slate-200 ">
        <div className=" w-8/12 rounded-lg shadow dark:border bg-white">
          <div className="w-220 p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl">
              Modify Item
            </h1>
            <form onSubmit={handleSubmit} className=" relative">
              <div className=" flex flex-row h-28 justify-between">
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Product name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Your product name"
                  />
                  {errors.name && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Category
                  </label>
                  <select
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    name="category"
                    value={input.category}
                    onChange={handleChange}
                  >
                    {allCategories?.map((category, index) => {
                      return (
                        <option key={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                  {errors.category && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.category}
                    </p>
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
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.description}
                    </p>
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
                      <p className=" text-red-600 text-sm font-semibold ">
                        {errors.price}
                      </p>
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
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.discount}
                    </p>
                  )}
                </div>
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Product image
                  </label>
                  <input
                    name="imageUrl"
                    value={input.imageUrl}
                    onChange={handleChange}
                    type="text"
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder=" Product image"
                  />

                  {errors.imageUrl && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.imageUrl}
                    </p>
                  )}
                </div>
              </div>

              <button
                disabled={
                  Object.values(input).length === 0 ||
                  isNotReady
                }
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
