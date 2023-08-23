"use client";
import { useState } from "react";
import { formatModifyMember, splitName, phoneNumberWithoutDots } from "@/utils/formatUtils";
import axios from "axios";
import validateModifyMember from "@/utils/validateModifyMember";
import { URL_BASE } from "@/utils/const";
import { useDispatch } from "react-redux";
import { setActiveUser } from "@/redux/actions";
axios.defaults.withCredentials = true;

export default function ModifyMemberProfile({ memberData, handleSave }) {
    const dispatch = useDispatch();
    const { firstName, lastName } = splitName(memberData);
    const { phoneNumber } = phoneNumberWithoutDots(memberData);
    const [imageFile, setImageFile] = useState(null);
    const [editImage, setEditImage] = useState(false);

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: memberData.email,
        password: memberData.password,
        confirmPassword: memberData.password,
        dni: memberData.dni,
        firstName: firstName,
        lastName: lastName,
        address: memberData.address,
        phoneNumber: phoneNumber,
        imageUrl: memberData.imageUrl,
    });
    const isNotReady =
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.dni ||
        errors.firstName ||
        errors.lastName ||
        errors.address ||
        errors.imageUrl;

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateModifyMember({
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
        const formattedMember = formatModifyMember(input);
        try {
            if (editImage) {
                const cloudinaryFormData = new FormData();
                cloudinaryFormData.append("file", imageFile);
                cloudinaryFormData.append("upload_preset", "DescuentosYa");
                const cloudinaryResponse = await axios.post(
                    "https://api.cloudinary.com/v1_1/dwndzlcxp/image/upload",
                    cloudinaryFormData
                );
                formattedMember.imageUrl =
                    "https://res.cloudinary.com/dwndzlcxp/image/upload/" + cloudinaryResponse.data.public_id;
            }

            const response = await axios.patch(`${URL_BASE}/members/${memberData.id}`, formattedMember);
            if (response.status === 200) {
                dispatch(setActiveUser());
                alert("Member successfully modified");
                setErrors({});
                handleSave();
            }
        } catch (error) {
            alert("Error modifying member");
        }
    };

    return (
        <div className="m-1">
            <div className="rounded-lg shadow dark:border bg-white">
                <div className="md:space-y-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="">
                        <div className=" flex flex-row h-28 justify-between">
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Your email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={input.email}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="name@mail.com"
                                />
                                {errors.email && <p className=" text-red-600 text-sm font-semibold ">{errors.email}</p>}
                            </div>
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">DNI</label>
                                <input
                                    type="text"
                                    name="dni"
                                    id="dni"
                                    value={input.dni}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Your DNI"
                                />
                                {errors.dni && <p className=" text-red-600 text-sm font-semibold ">{errors.dni}</p>}
                            </div>
                        </div>

                        <div className="flex flex-row h-28 justify-between">
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={input.firstName}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Your first name"
                                />
                                {errors.firstName && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.firstName}</p>
                                )}
                            </div>
                            <div className=" w-2/5">
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={input.lastName}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Your last name"
                                />
                                {errors.lastName && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.lastName}</p>
                                )}
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
                                    placeholder="Your Adress"
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
                                    placeholder="Your phone number"
                                />
                                {errors.phoneNumber && (
                                    <p className=" text-red-600 text-sm font-semibold ">{errors.phoneNumber}</p>
                                )}
                            </div>
                        </div>
                        <div className=" h-22">
                            <div>
                                <label className="block mb-2 text-m font-medium text-gray-900 ">Profile Picture</label>

                                {!editImage ? (
                                    <button onClick={handleEditImage}>Edit Image</button>
                                ) : (
                                    <div>
                                        <input
                                            placeholder="Your picture"
                                            type="file"
                                            name="imageUrl"
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
