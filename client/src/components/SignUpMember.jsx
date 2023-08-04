import { useState } from "react";
import { formatMember } from "@/utils/formatUtils";
import validateMember from "@/utils/validateMember";

export default function SignUpMember() {
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
    imageUrl: "",
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
      validateMember({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formattedMember = formatMember(input);
    window.alert(
      `Member ${
        (input.firstName, input.lastName)
      } submitted successfully (provisory)`
    );
    //devolver el formattedMember al backend
    console.log(formattedMember);
  }

  return (
    <section className=" bg-slate-200 dark:bg-white h-full">
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
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={input.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@mail.com"
                    required=""
                  />
                  {errors.email && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    DNI
                  </label>
                  <input
                    type="text"
                    name="dni"
                    id="dni"
                    value={input.dni}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Your DNI"
                    required=""
                  />
                  {errors.dni && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.dni}
                    </p>
                  )}
                </div>
              </div>
              <div className=" flex flex-row h-28 justify-between">
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Password
                  </label>
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
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.password}
                    </p>
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
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row h-28 justify-between">
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Your first name"
                    required=""
                  />
                  {errors.firstName && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Your last name"
                    required=""
                  />
                  {errors.lastName && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row h-28 justify-between">
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Adress
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={input.address}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Your Adress"
                    required=""
                  />
                  {errors.address && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className=" w-2/5">
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Your phone number"
                    required=""
                  />
                  {errors.phoneNumber && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className=" h-28">
                <div>
                  <label className="block mb-2 text-m font-medium text-gray-900 ">
                    Profile Picture
                  </label>{" "}
                  <input
                  placeholder="Your picture"
                    type="text"
                    name="imageUrl"
                    for="Your picture"
                    className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={input.imageUrl}
                    onChange={handleInputChange}
                  />
                  {errors.imageUrl && (
                    <p className=" text-red-600 text-sm font-semibold ">
                      {errors.imageUrl}
                    </p>
                  )}
                </div>
              </div>
              <button
                disabled={isNotReady}
                type="submit"
                className=" mt-2 ml-48 self-center w-1/2 h-12 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700  hover:border "
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-700 text-center mt-6 ">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline "
                >
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
