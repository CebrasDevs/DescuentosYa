"use client";
import { getUsers } from "@/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector((state) => state.users);
  return (
    <div className="flex flex-col items-center">
      <div id="companies" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
      <h1 className="border-b-2 p-4 font-bold text-xl">COMPANIES</h1>
        <input className="m-2" type="search" name="search" placeholder="Search by Name" />
        {users.map((user) => {
          if(user.role === 'COMPANY'){
            return (
              <div className="flex bg-violet-200 m-5">
                <h1 className="m-2">{user.name}</h1>
                <h1 className="m-2">{user.email}</h1>
                <Link href={`/admin/${user.id}`}>
                  <h1 className="mt-2">View detail</h1>
                </Link>
                <h1 className="m-2">
                  Status: {user.enabled ? "active" : "disabled"}
                </h1>
                {user.enabled ? (
                  <button className="m-2 bg-red-500">Disable</button>
                ): (
                  <button className="m-2 bg-green-500">Enable</button>
                )}
              </div>
            );
          }
        })}
      </div>
      <div id="users" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
        <h1 className="border-b-2 p-4 font-bold text-xl">MEMBERS</h1>
        <input className="m-2" type="search" name="search" placeholder="Search by Name" />
        {users.map((user) => {
          if(user.role === 'MEMBER'){
            return (
              <div className="flex bg-violet-200 m-5">
                <h1 className="m-2">{user.name}</h1>
                <h1 className="m-2">{user.email}</h1>
                <Link href={`/admin/${user.id}`}>
                  <h1 className="mt-2">View detail</h1>
                </Link>
                <h1 className="m-2">
                  Status: {user.enabled ? "active" : "disabled"}
                </h1>
                {user.enabled ? (
                  <button className="m-2 bg-red-500">Disable</button>
                ): (
                  <button className="m-2 bg-green-500">Enable</button>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
