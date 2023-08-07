'use client'
import { FaUserEdit } from "react-icons/fa"
import { useSelector } from "react-redux";

export default function UserProfile() {

    const activeUser = useSelector((state) => state.activeUser);

    if(activeUser.role === 'member'){
        return (
            <div className=" absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2/4 flex shadow-lg">
                <FaUserEdit className="flex absolute h-8 w-8 -right-3 -top-4 bg-white rounded-full border-2 border-neutral-900 cursor-pointer" />
                <div className=" h-1/2 w-5/12 bg-gradient-to-b from-orange-400 to-orange-300 p-8 text-center items-center justify-center rounded-tl-2xl rounded-bl-2xl">
                    <img
                        className=" rounded-full mb-5"
                        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                        alt="defaultprofilepic"
                    />
                    <h3 className=" font-bold text-3xl">Alberto Gentile</h3>
                </div>
                <div className=" w-7/12 bg-white rounded-br-2xl rounded-tr-2xl p-10">
                    <div>
                        <h3 className=" text-2xl font-sans tracking-wider">Information</h3>
                        <div className=" border-t-2 border-gray-600">
                            <div className=" mt-4 border-b-2 p-6 border-gray-400">
                                <h3 className=" text-lg font-medium">Info 1</h3>
                                <p>Info 1</p>
                            </div>
                            <div className=" mt-4 border-b-2 p-6 border-gray-400">
                                <h3 className=" text-lg font-medium">Info 2</h3>
                                <p>Info 2</p>
                            </div>
                            <div className=" mt-4 border-b-2 p-6">
                                <h3 className=" text-lg font-medium">Info 3</h3>
                                <p>Info 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } return null;
}
