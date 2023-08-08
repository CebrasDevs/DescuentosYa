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
    <div>
      {users.map((user) => {
        /* en un futuro name va a referir al nombre de un miembro y al nombre de una compañia */
        /* ideas: agregar searchBar / mostrar los que estan con status active primero */
        return (
          <div className="flex bg-violet-200 m-5">
            <h1 className="m-2">{user.name}</h1>
            <h1 className="m-2">{user.email}</h1>
            <h1 className="m-2">{user.role}</h1>
            <Link href={`/admin/${user.id}`}>
              <h1 className="mt-2">View detail</h1>
            </Link>
            <h1 className="m-2">
              Status: {user.enabled ? "active" : "disabled"}
            </h1>
            {user.enabled && (
              <button className="m-2 bg-red-500">Disable</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
