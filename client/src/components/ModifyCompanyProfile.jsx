"use client";
import { useState } from "react";
import { formatModifyCompany, phoneNumberWithoutHyphens } from "@/utils/formatUtils";
import validateModifyCompany from "@/utils/validateModifyCompany";
import axios from "axios";
import { URL_BASE } from "@/utils/const";
import { useDispatch } from "react-redux";
import { setActiveUser } from "@/redux/actions";

export default function ModifyCompanyProfile({ companyData, handleSave }) {
    const { phoneNumber } = phoneNumberWithoutHyphens(companyData);
    const dispatch = useDispatch();
    const [imageFile, setImageFile] = useState(null);
    const [editImage, setEditImage] = useState(false);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: companyData.email,
        companyName: companyData.name,
        description: companyData.description,
        cuit: companyData.cuit,
        address: companyData.address,
        phoneNumber: phoneNumber,
        imageUrl: companyData.imageUrl,
    });
    const isNotReady =
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.companyName ||
        errors.cuit ||
        errors.address ||
        errors.imageUrl;

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateModifyCompany({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleImageChange(e) {
        setImageFile(e.target.files[0]);
    }

    function handleEditImage() {
        setEditImage(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedCompany = formatModifyCompany(input);
        try {
            if (editImage) {
                const cloudinaryFormData = new FormData();
                cloudinaryFormData.append("file", imageFile);
                cloudinaryFormData.append("upload_preset", "DescuentosYa");
                const cloudinaryResponse = await axios.post(
                    "https://api.cloudinary.com/v1_1/dwndzlcxp/image/upload",
                    cloudinaryFormData
                );
                formattedCompany.imageUrl =
                    "https://res.cloudinary.com/dwndzlcxp/image/upload/" + cloudinaryResponse.data.public_id;
            }
            const response = await axios.patch(`${URL_BASE}/companies/${companyData.id}`, formattedCompany);
            if (response.status === 200) {
                dispatch(setActiveUser(companyData.id));
                alert(`Company successfully modified`);
                setErrors({});
                handleSave();
            }
        } catch (error) {
            alert(`Error modifying company`);
        }
    };

    return (
        <div className="m-1">
            <div className="rounded-lg shadow dark:border bg-white">
                <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="relative">
                        <div className=" flex flex-row h-28 justify-between">
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Company email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={input.email}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="name@company.com"
                                    required=""
                                />
                                {errors.email && <p className=" text-red-600 text-sm font-semibold ">{errors.email}</p>}
                            </div>
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    value={input.companyName}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Company's name"
                                    required=""
                                />
                                {errors.companyName && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.companyName}</p>
                                )}
                            </div>
                        </div>
                        <div className=" flex flex-row h-28 justify-between">
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">
                                    Company Description
                                </label>
                                <input
                                    name="description"
                                    value={input.description}
                                    onChange={handleInputChange}
                                    type="text"
                                    id="companyName"
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Company's description"
                                    required=""
                                />

                                {errors.description && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.description}</p>
                                )}
                            </div>
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">CUIT</label>
                                <input
                                    type="text"
                                    name="cuit"
                                    value={input.cuit}
                                    id="cuit"
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Company's CUIT"
                                    required=""
                                />
                                {errors.cuit && <p className=" text-red-600 text-sm font-semibold ">{errors.cuit}</p>}
                            </div>
                        </div>
                        <div className="flex flex-row h-28 justify-between">
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Adress</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={input.address}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Company's Adress"
                                    required=""
                                />
                                {errors.address && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.address}</p>
                                )}
                            </div>
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={input.phoneNumber}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Company's phone number"
                                    required=""
                                />
                                {errors.phoneNumber && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.phoneNumber}</p>
                                )}
                            </div>
                        </div>
                        <div className=" h-22">
                            <div>
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Company logo</label>
                                {!editImage ? (
                                    <button onClick={handleEditImage}>Edit Image</button>
                                ) : (
                                    <div>
                                        <input
                                            type="file"
                                            name="imageUrl"
                                            for="Company Logo"
                                            placeholder="Company's logo"
                                            className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                            onChange={handleImageChange}
                                        />
                                        {errors.imageUrl && (
                                            <p className=" text-red-600 text-sm font-semibold ">{errors.imageUrl}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                disabled={isNotReady}
                                type="submit"
                                className=" mt-2 ml-2 self-center w-1/2 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border "
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
