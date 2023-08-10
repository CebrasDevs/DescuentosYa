"use client";
import useCompany from "@/hooks/useCompany";

export default function Userdetail({ id }) {
  const user = useCompany(id);
  return (
    <div className="flex  justify-center items-center mt-10">
      <div className="bg-slate-50 rounded-lg shadow-md">
        <div className="flex flex-col items-center m-5">
          <h1>{user.name}</h1>
          <img src={user.imageUrl} />
        </div>
        <div className="m-5">
          {user.description && <h1>{user.description}</h1>}
          <h1>Email: {user.email}</h1>
          <h1>Phone number: {user.phoneNumber}</h1>
          {user.last_payment && <h1>Last payment: {user.last_payment}</h1>}
          <h1>Role: {user.role}</h1>
          {user.enabled ? <h1>Status: active</h1> : <h1>Status: disabled</h1>}
          <h1>
            SI ES COMPAÑIA SE MUESTRAN LAS VENTAS QUE TUVO, SI ES MIEMBRO SE
            MUESTRAN LAS COMPRAS
          </h1>
        </div>
      </div>
    </div>
  );
}
