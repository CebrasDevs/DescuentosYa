"use client" // lo defino use client porque tengo que verificar que el usuario activo tiene role ADMIN, buscar otra alternativa
import Dashboard from "@/components/Dashboard";
import { useSelector } from "react-redux";
import Link from "next/link"
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function AdminPage() {
  const activeUser = useSelector((state) => state.activeUser);

  useEffect(() => {
    const retrievedCookie = Cookies.get("accessTrue");
    if (!retrievedCookie) {
      window.location.href = "http://localhost:3000/";
    }
  }, []);


  if (activeUser.role === "ADMIN") { // el role del activeUser en el reducer tiene que ser 'ADMIN'
    return (
      <div>
        <Dashboard />
      </div>
    );
  } else {
      return (<div className="flex justify-center m-5">
                <h1 className="bg-black text-white p-5">Access denied</h1>
                <Link href='/'>
                    <button className="m-5">Back to Home?</button>
                </Link>
             </div>);
  }
}
