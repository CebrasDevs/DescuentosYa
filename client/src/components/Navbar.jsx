"use client";
import Link from "next/link";
import { BsCart3, BsSearch } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/D-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { cleanActiveUser } from "@/redux/actions";
import { URL_BASE } from "@/utils/const";
import axios from "axios";
import Cookies from "js-cookie";
import { splitName } from "@/utils/formatUtils";
axios.defaults.withCredentials = true;

export default function Navbar() {
  const activeUser = useSelector((state) => state.activeUser);

  const cartItemCount = useSelector((state) => state.shoppingCart.length);

  const dispatch = useDispatch();

  const router = useRouter();

  const pathname = usePathname();

  const handleLogOut = async () => {
    try {
      const response = await axios.post(`${URL_BASE}/logout`, null);
      if (response.status === 200) {
        Cookies.remove("shoppingCart");
        dispatch(cleanActiveUser());
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let fullName;
  if (activeUser.role === "MEMBER") {
    fullName = splitName(activeUser);
  }

  return (
    <div className=" fixed top-0 left-0 right-0 z-50  shadow-lg">
      <div className="flex items-center w-full h-16 bg-slate-50">
        <div className=" flex w-3/4 m-auto items-center">
          <div className="flex items-center h-full ml-10 mr-auto">
            <Link href={"/"} className="flex items-center">
              <Image src={logo} alt="logo" width={50} />
              <h1 className="text-violet-600 font-bold text-2xl">DESCUENTOS</h1>
              &nbsp;&nbsp;
              <h1 className="font-bold text-2xl">YA</h1>
            </Link>
            <Link className="hover:text-blue-500 ml-10" href={"/howworks"}>
              How It Works
            </Link>
            <Link
              className="flex items-center hover:text-blue-500 ml-10"
              href={"/discounts"}
            >
              <BsSearch />
              <div className="ml-2">Browse Discounts</div>
            </Link>
            {activeUser.role === "ADMIN" && (
              <Link
                className="ml-10 font-medium hover:text-blue-500"
                href={`/admin`}
              >
                Dashboard
              </Link>
            )}
            {activeUser.role === "COMPANY" && (
              <Link
                href={`/profile`}
                className="ml-10 font-medium hover:text-blue-500"
              >
                My Items
              </Link>
            )}
          </div>
          <div className="flex items-center">
            {!activeUser.id ? (
              <>
                <Link
                  href={"/login"}
                  className="mr-10 font-medium hover:text-blue-500"
                >
                  Log in
                </Link>
                <Link
                  href={"/register"}
                  className="mr-10 font-medium hover:text-blue-500"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {activeUser.role === "COMPANY" && (
                  <Link
                    href={"/create"}
                    className="mr-10 py-2 px-4 font-bold rounded text-white  bg-violet-600 hover:bg-violet-800"
                  >
                    Post a Discount
                  </Link>
                )}
                {activeUser.role === "MEMBER" && (
                  <Link
                    href={"/shoppingcart"}
                    className="mr-10 font-bold hover:text-blue-500"
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#000000"
                      strokeWidth="0.00024000000000000003"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.24896 2.29245C1.8582 2.15506 1.43005 2.36047 1.29266 2.75123C1.15527 3.142 1.36068 3.57015 1.75145 3.70754L2.01266 3.79937C2.68026 4.03409 3.11902 4.18964 3.44186 4.34805C3.74509 4.49683 3.87876 4.61726 3.96682 4.74612C4.05708 4.87821 4.12678 5.05963 4.16611 5.42298C4.20726 5.80319 4.20828 6.2984 4.20828 7.03835V9.75999C4.20828 11.2125 4.22191 12.2599 4.35897 13.0601C4.50529 13.9144 4.79742 14.526 5.34366 15.1022C5.93752 15.7285 6.69032 16.0012 7.58656 16.1283C8.44479 16.25 9.53464 16.25 10.8804 16.25L16.2861 16.25C17.0278 16.25 17.6518 16.25 18.1568 16.1882C18.6925 16.1227 19.1811 15.9793 19.6076 15.6318C20.0341 15.2842 20.2731 14.8346 20.4455 14.3232C20.6079 13.841 20.7339 13.2299 20.8836 12.5035L21.3925 10.0341L21.3935 10.0295L21.4039 9.97726C21.5686 9.15237 21.7071 8.45848 21.7416 7.90037C21.7777 7.31417 21.711 6.73616 21.3292 6.23977C21.0942 5.93435 20.7639 5.76144 20.4634 5.65586C20.1569 5.54817 19.8103 5.48587 19.4606 5.44677C18.7735 5.36997 17.9389 5.36998 17.1203 5.36999L5.66809 5.36999C5.6648 5.33324 5.66124 5.29709 5.6574 5.26156C5.60367 4.76518 5.48725 4.31246 5.20527 3.89982C4.92109 3.48396 4.54324 3.21762 4.10261 3.00142C3.69052 2.79922 3.16689 2.61514 2.55036 2.39841L2.24896 2.29245ZM5.70828 6.86999H17.089C17.9454 6.86999 18.6991 6.87099 19.2939 6.93748C19.5895 6.97052 19.8107 7.01642 19.9661 7.07104C20.0931 7.11568 20.1361 7.15213 20.1423 7.1574C20.1422 7.15729 20.1426 7.15762 20.1423 7.1574C20.2037 7.23881 20.2704 7.38651 20.2444 7.80796C20.217 8.25153 20.1005 8.84379 19.9229 9.73372L19.9225 9.73594L19.4237 12.1561C19.2623 12.9389 19.1537 13.4593 19.024 13.8441C18.9009 14.2095 18.7853 14.3669 18.66 14.469C18.5348 14.571 18.3573 14.6525 17.9746 14.6993C17.5714 14.7487 17.0399 14.75 16.2406 14.75H10.9377C9.5209 14.75 8.53783 14.7482 7.79716 14.6432C7.08235 14.5418 6.70473 14.3576 6.43219 14.0701C6.11202 13.7325 5.93933 13.4018 5.83744 12.8069C5.72628 12.1578 5.70828 11.249 5.70828 9.75999L5.70828 6.86999Z"
                          fill="#111931"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.5002 21.75C6.25756 21.75 5.2502 20.7426 5.2502 19.5C5.2502 18.2573 6.25756 17.25 7.5002 17.25C8.74285 17.25 9.7502 18.2573 9.7502 19.5C9.7502 20.7426 8.74285 21.75 7.5002 21.75ZM6.7502 19.5C6.7502 19.9142 7.08599 20.25 7.5002 20.25C7.91442 20.25 8.2502 19.9142 8.2502 19.5C8.2502 19.0858 7.91442 18.75 7.5002 18.75C7.08599 18.75 6.7502 19.0858 6.7502 19.5Z"
                          fill="#111931"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.5002 21.7501C15.2576 21.7501 14.2502 20.7427 14.2502 19.5001C14.2502 18.2574 15.2576 17.2501 16.5002 17.2501C17.7428 17.2501 18.7502 18.2574 18.7502 19.5001C18.7502 20.7427 17.7428 21.7501 16.5002 21.7501ZM15.7502 19.5001C15.7502 19.9143 16.086 20.2501 16.5002 20.2501C16.9144 20.2501 17.2502 19.9143 17.2502 19.5001C17.2502 19.0859 16.9144 18.7501 16.5002 18.7501C16.086 18.7501 15.7502 19.0859 15.7502 19.5001Z"
                          fill="#111931"
                        ></path>{" "}
                      </g>
                    </svg>
                    {cartItemCount > 0 && (
                      <span className="bg-red-500 text-white rounded-full p-0.5 w-4 text-center ml-5 text-xs absolute top-2  ">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                )}
                <Link
                  href={activeUser.role !== "ADMIN" ? `/profile` : `/admin`}
                  className=" flex items-center font-medium hover:text-blue-500"
                >
                  <IoPerson className=" w-6 h-6 mr-3" />
                  <div>
                    {activeUser.role === "MEMBER" ? (
                      <h1>
                        {fullName.lastName}, {fullName.firstName}
                      </h1>
                    ) : (
                      <h1>{activeUser.name}</h1>
                    )}
                  </div>
                </Link>

                <h2
                  onClick={handleLogOut}
                  className="ml-10 font-medium hover:text-blue-500 hover:cursor-pointer"
                >
                  Log Out
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center w-full h-12 bg-neutral-800">
        <div className=" flex w-3/4 m-auto">
          {pathname === "/profile" ? (
            <>
              {activeUser.role === "COMPANY" && (
                <div className="flex h-full mr-auto text-white">
                  <div className="ml-10 py-3 px-6 border-x-2">MY PROFILE</div>
                  <a href={"#data"} className="hover:bg-neutral-600 py-3 px-6">
                    My Data
                  </a>
                  <a href={"#items"} className="hover:bg-neutral-600 py-3 px-6">
                    My Items
                  </a>
                  <a href={"#sales"} className="hover:bg-neutral-600 py-3 px-6">
                    My Sales
                  </a>
                  <a
                    href={"#vouchers"}
                    className="hover:bg-neutral-600 py-3 px-6"
                  >
                    My Vouchers
                  </a>
                </div>
              )}
              {activeUser.role === "MEMBER" && (
                <div className="flex h-full mr-auto text-white">
                  <div className="ml-10 py-3 px-6 border-x-2">MY PROFILE</div>
                  <a href={"#data"} className="hover:bg-neutral-600 py-3 px-6">
                    My Data
                  </a>
                  <a
                    href={"#vouchers"}
                    className="hover:bg-neutral-600 py-3 px-6"
                  >
                    My Vouchers
                  </a>
                  <a
                    href={"#orders"}
                    className="hover:bg-neutral-600 py-3 px-6"
                  >
                    My Orders
                  </a>
                </div>
              )}
              {activeUser.role === "ADMIN" && (
                <div className="flex h-full mr-auto text-white">
                  <div className="ml-10 py-3 px-6 border-x-2">MY PROFILE</div>
                  <a href={"#users"} className="hover:bg-neutral-600 py-3 px-6">
                    Users
                  </a>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex h-full mr-auto text-white">
                <Link
                  href={"/brands"}
                  className="ml-10 hover:bg-neutral-600 py-3 px-6"
                >
                  Find Companies
                </Link>
                <Link
                  href={"/about"}
                  className="hover:bg-neutral-600 py-3 px-6"
                >
                  About
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
