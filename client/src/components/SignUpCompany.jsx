import { useState } from "react";
import { formatCompany } from "@/utils/formatUtils";
import validateCompany from "@/utils/validateCompany";
import { URL_BASE } from "@/utils/const";
import axios from "axios";
import { useRouter } from "next/navigation";
//llamado a los nuevos componentes para agregar ubicacion a las comañias que se registren
import Map from "./Map";
import SuccessModal from "./Modals/Company/Success";
import FailureModal from "./Modals/Company/Failure";

export default function SignUpCompany() {
    const [companyCreated, setCompanyCreated] = useState("pending");
    const [imageFile, setImageFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        description: "",
        cuit: "",
        address: "",
        phoneNumber: "",
        /**
         * debe haber uno por defecto, el mapa no se renderiza sobre sin tener un valor inicial
        */
        location: { lat: -35.2931, lng: -65.5964 }
    });
    const isNotReady =
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.companyName ||
        errors.cuit ||
        errors.address ||
        errors.phoneNumber;

    const router = useRouter();

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validateCompany({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleImageChange(e) {
        setImageFile(e.target.files[0]);
    }
    /**
     * recibe el objeto {lat: valorFloat, lng: valorFloat }
     * @param {Object} newLocation 
     */
    function handleLocationChange(newLocation) {
        setInput({
            ...input,
            location: newLocation
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedCompany = formatCompany(input);
        const imageInput = document.getElementById("imageInput");
        try {
            if (imageInput.files.length === 0) {
                formattedCompany.imageUrl = "https://res.cloudinary.com/dwndzlcxp/image/upload/profileDefault_kxeuo5";
            } else {
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
            // ACA DEBE ESTAR LA RUTA PARA POSTEAR LA COMPAÑIA
            const response = await axios.post(`${URL_BASE}/companies`, formattedCompany);
            if (response.status === 200) {
                setErrors({});
                setCompanyCreated("success");
            }
        } catch (error) {
            setCompanyCreated("failure")
            console.log(error)
        }
    };

    const close = (status) => {
        setCompanyCreated("pending");
    }

    return (
        <section className=" bg-slate-200 dark:bg-white h-full">
            { companyCreated === "success" && <SuccessModal/> }
            { companyCreated === "failure" && <FailureModal close={close} /> }
            <div className="flex  justify-center   pb-32 bg-slate-200 ">
                <div className=" w-5/12 rounded-lg shadow dark:border bg-white">
                    <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl">
                            Create account
                        </h1>
                        <form onSubmit={handleSubmit} className=" relative">
                            <div className=" flex flex-row h-28 justify-between">
                                <div className=" w-2/5">
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">
                                        Company email
                                    </label>
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
                                    {errors.email && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.email}</p>
                                    )}
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
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={input.password}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required=""
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
                                        required=""
                                    />
                                    {errors.confirmPassword && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.confirmPassword}</p>
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
                                    {errors.cuit && (
                                        <p className=" text-red-600 text-sm font-semibold ">{errors.cuit}</p>
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
                            <div className=" h-28">
                                <div>
                                    <label className="block mb-2 text-m font-medium text-gray-900 ">Company logo</label>
                                    <input
                                        type="file"
                                        name="imageUrl"
                                        id="imageInput"
                                        placeholder="Company's logo"
                                        className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            <div className=" mb-10" > 
                                {/* se agrega la posibilidad de que la compañia pueda agregar su ubicacion marcando sobre el mapa */}
                                <div >
                                    <Map location={input.location} locationChange={handleLocationChange} editable={true} style={"signUpCompany"} />
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
