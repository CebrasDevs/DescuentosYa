import { useState } from "react";
import { formatMember } from "@/utils/formatUtils";
import validateMember from "@/utils/validateMember";
import { URL_BASE } from "@/utils/const";
import axios from "axios";
import { useRouter } from "next/navigation";
import SuccessModal from "./Modals/User/Success";
import FailureModal from "./Modals/User/Failure";
axios.defaults.withCredentials = true;

export default function SignUpMember() {
    const [userCreated, setUserCreated] = useState("pending");
    const [imageFile, setImageFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        dni: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
    });
    const isNotReady =
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.dni ||
        errors.firstName ||
        errors.lastName ||
        errors.address ||
        errors.phoneNumber;

    const router = useRouter();

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateMember({
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
        const formattedMember = formatMember(input);
        const imageInput = document.getElementById("imageInput");
        try {
            if (imageInput.files.length === 0) {
                formattedMember.imageUrl = "https://res.cloudinary.com/dwndzlcxp/image/upload/profileDefault_kxeuo5";
            } else {
                const cloudinaryFormData = new FormData();
                cloudinaryFormData.append("file", imageFile);
                cloudinaryFormData.append("upload_preset", "DescuentosYa");
                const cloudinaryResponse = await axios.post(
                    "https://api.cloudinary.com/v1_1/dwndzlcxp/image/upload",
                    cloudinaryFormData, { withCredentials: false }
                );
                formattedMember.imageUrl =
                    "https://res.cloudinary.com/dwndzlcxp/image/upload/" + cloudinaryResponse.data.public_id;
            }

            const response = await axios.post(`${URL_BASE}/members`, formattedMember);
            if (response.status === 200) {
                setErrors({});
                setUserCreated("success");
            }
        } catch (error) {
            console.log(error)
            setUserCreated("failure");
        }
    };

    const close = (status) => {
        setUserCreated("pending");
    }

    return (

        <section className=" bg-slate-200 dark:bg-white h-full">
            {userCreated === "success" && <SuccessModal />}
            {userCreated === "failure" && <FailureModal close={close} />}
            <div className="flex  justify-center   pb-32 bg-slate-200 ">
                <div className=" w-5/12 rounded-lg shadow dark:border bg-white">
                    <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl">
                            Create account
                        </h1>
                        <form onSubmit={handleSubmit} className=" relative">
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
                                    {errors.email && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.email}</p>
                                    )}
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
                            <div className=" flex flex-row h-28 justify-between">
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={input.password}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    />
                                    {errors.password && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.password}</p>
                                    )}
                                </div>
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="••••••••"
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    />
                                    {errors.confirmPassword && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.confirmPassword}</p>
                                    )}
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
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">Address</label>
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
                            <div className=" h-28">
                                <div>
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">
                                        Profile Picture
                                    </label>
                                    <input
                                        placeholder="Your picture"
                                        type="file"
                                        name="imageUrl"
                                        id="imageInput"
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            <button
                                disabled={!Object.values(input).every((value) => value !== "") || isNotReady}
                                type="submit"
                                className="flex justify-center items-center w-1/2 h-12 mx-auto text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border disabled:opacity-50 disabled:cursor-not-allowed "
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-700 text-center mt-6 ">
                                Already have an account?{" "}
                                <a href="/login" className="font-medium text-primary-600 hover:underline ">
                                    Login here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
