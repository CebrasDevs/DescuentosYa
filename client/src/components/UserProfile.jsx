"use client";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import Grid from "./Grid";
import Link from "next/link";

export default function UserProfile() {
  const activeUser = useSelector((state) => state.activeUser);

  if (activeUser.role === "MEMBER") {
    return (
      <div className="flex flex-col items-center">
        <div
          id="data"
          className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md"
        >
          <h1 className="border-b-2 p-4 font-bold text-xl">DATA</h1>
          <div className="flex h-[300px] ">
            <div className="flex justify-center items-center w-1/2">
              <img src={activeUser.imageUrl} className="p-5 w-[300px] rounded-lg" />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h1>Company Name: {activeUser.name} </h1>
              <h1>Email: {activeUser.email} </h1>
              <h1>DNI: {activeUser.dni_cuit} </h1>
              <h1>Address: {activeUser.address} </h1>
              <h1></h1>
              <h1>Phone Number: {activeUser.phoneNumber} </h1>
              <h1>Last payment: {activeUser.lastPayment}</h1>
            </div>
          </div>
        </div>
{/* PARTE DE LOS VOUCHER DEL USUARIO */}
        <div id="orders" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">My Vouchers</h1>
          <div className="flex justify-center h-10">
            <input type="search" name="search" placeholder="Search by Name" />
            {/* <button onClick={handleClick}>Search</button> */}
          </div>
          <div className="items-center">
            {activeUser.Voucher.map((voucher)=>{return(
            <div className="flex items-center border border-black rounded-lg m-2">
                <img className="w-[100px] h-[100px] m-5 rounded-lg" src={voucher.item.imageUrl}/>
                <h1 className="ml-2">{voucher.item.name}</h1>
                <Link href={`/brands/${voucher.item.user.id}`}>
                    <h2 className="ml-2">{voucher.item.user.name}</h2>
                </Link>
                <h2 className="ml-2">Detail</h2>
                <h2 className="ml-2">Buy again</h2>

            </div>)})}
          </div>
        </div>
        {/* PARTE DE LAS COMPRAS DEL USUARIO */}
        <div id="orders" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">My Orders</h1>
          <div className="flex justify-center h-10">
            <input type="search" name="search" placeholder="Search by Name" />
            {/* <button onClick={handleClick}>Search</button> */}
          </div>
          <div className="items-center">
            {activeUser.Shopping.map((i)=>{return(
            <div className="flex items-center border border-black rounded-lg m-2">
                <img className="w-[100px] h-[100px] m-5 rounded-lg" src={i.Item_Shopping[0].item.imageUrl}/>
                <h1 className="ml-2">{i.Item_Shopping[0].item.name}</h1>
                <Link href={`/brands/${i.Item_Shopping[0].item.user.id}`}>
                    <h2 className="ml-2">{i.Item_Shopping[0].item.user.name}</h2>
                </Link>
                <h2 className="ml-2">Detail</h2>
                <h2 className="ml-2">Buy again</h2>

            </div>)})}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
