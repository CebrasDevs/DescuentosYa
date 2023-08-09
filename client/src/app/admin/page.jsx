"use client" // lo defino use client porque tengo que verificar que el usuario activo tiene role ADMIN, buscar otra alternativa
import Dashboard from "@/components/Dashboard";
import { useSelector } from "react-redux";
import Link from "next/link"

export default function AdminPage() {
  const activeUser = useSelector((state) => state.activeUser);
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
