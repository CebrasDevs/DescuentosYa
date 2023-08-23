"use client";
import { getUsers, getUsersByName } from "@/redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { URL_BASE } from "@/utils/const";
import DisableModal from "./Modals/Admin/Disable";
import EnableModal from "./Modals/Admin/Enable";
axios.defaults.withCredentials = true;

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [userStatus, setUserStatus] = useState("pending");

  const users = useSelector((state) => state.users);

  users.sort((a, b) => a.id - b.id); // esto lo pongo porque cuando se hacia disabled en un user se volvia a acomodar todo distinto, en cambio aplicando sort se quedan todos en el mismo lugar, es para que se vea bien

  const handleSearch = (e) => {
    dispatch(getUsersByName(e.target.value));
  };

  const handleDisable = async (userId) => {
    try {
      const response = await axios.patch(`${URL_BASE}/users/${userId}`, {
        enabled: false,
      });
      if (response.status === 200) {
        setUserStatus("desabling");
        dispatch(getUsers()); // actualizo el estado global
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnable = async (userId) => {
    try {
      const response = await axios.patch(`${URL_BASE}/users/${userId}`, {
        enabled: true,
      });
      if (response.status === 200) {
        setUserStatus("enabling");
        dispatch(getUsers()); // actualizo el estado global de users
      }
    } catch (error) {
      console.log(error);
    }
  };

  const close = (status) => {
    setUserStatus("pending");
  };

  return (
    <div className="flex flex-col items-center">
      {userStatus === "enabling" && <EnableModal close={close} />}
      {userStatus === "desabling" && <DisableModal close={close} />}
      <input
        className="h-14 mt-5 rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
        type="search"
        name="search"
        onInput={handleSearch}
        placeholder="Search by Name"
      />
      <div
        id="companies"
        className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md"
      >
        <h1 className="border-b-2 p-4 font-bold text-xl">COMPANIES</h1>
        <div className="grid grid-cols-5 justify-items-center items-center bg-gray-300 p-2">
          <h1 className="font-bold m-2">Name</h1>
          <h1 className="font-bold m-2">Email</h1>
          <h1 className="font-bold m-2">Detail</h1>
          <h1 className="font-bold m-2">Status</h1>
        </div>
        {users.map((user) => {
          if (user.role === "COMPANY") {
            return (
              <div className="grid grid-cols-5 justify-items-center items-center m-5 border-b-2">
                <h1 className="m-2 text-lg font-medium mr-6">{user.name}</h1>
                <h1 className="m-4 font-medium">{user.email}</h1>
                <Link href={`/admin/${user.id}`}>
                  <h1 className="m-2 font-medium underline">View detail</h1>
                </Link>
                <h1
                  className={`ml-3 ${
                    user.enabled ? "text-green-600 font-extrabold text-lg" : "text-red-600 font-extrabold text-lg"
                  }`}
                >
                  {user.enabled ? "ACTIVE" : "DISABLED"}
                </h1>

                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={!user.enabled}
                      onChange={() => {
                        if (user.enabled) {
                          setUserStatus("disabling");
                          handleDisable(user.id);
                        } else {
                          setUserStatus("enabling");
                          handleEnable(user.id);
                        }
                      }}
                    />
                    <span
                      className={`relative w-10 h-6 transition rounded-full ${
                        user.enabled ? "bg-violet-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute ${
                          user.enabled ? "right-1" : "left-1"
                        } top-1 w-4 h-4 transition transform bg-white rounded-full duration-1000`}
                      ></span>
                    </span>
                  </label>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div id="users" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
        <h1 className="border-b-2 p-4 font-bold text-xl">MEMBERS</h1>
        <div className="grid grid-cols-5 justify-items-center items-center bg-gray-300 p-2">
          <h1 className="font-bold m-2">Name</h1>
          <h1 className="font-bold m-2">Email</h1>
          <h1 className="font-bold m-2">Detail</h1>
          <h1 className="font-bold m-2">Status</h1>
        </div>
        {users.map((user) => {
          if (user.role === "MEMBER") {
            return (
              <div className="grid grid-cols-5 justify-items-center items-center m-5 border-b-2">
                <h1 className="m-2">{user.name}</h1>
                <h1 className="mr-4">{user.email}</h1>
                <Link href={`/admin/${user.id}`}>
                  <h1 className="m-2 underline">View detail</h1>
                </Link>
                <h1 className={`ml-3 ${
                    user.enabled ? "text-green-600 font-extrabold text-lg" : "text-red-600 text-lg font-extrabold"
                  }`}>{user.enabled ? "ACTIVE" : "DISABLED"}</h1>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      className="sr-only cursor-pointer"
                      checked={!user.enabled}
                      onChange={() => {
                        if (user.enabled) {
                          setUserStatus("disabling");
                          handleDisable(user.id);
                        } else {
                          setUserStatus("enabling");
                          handleEnable(user.id);
                        }
                      }}
                    />
                    <span
                      className={`relative w-10 h-6 transition rounded-full ${
                        user.enabled ? "bg-violet-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute ${
                          user.enabled ? "right-1" : "left-1"
                        } top-1 w-4 h-4 transition transform bg-white rounded-full duration-1000`}
                      ></span>
                    </span>
                  </label>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
