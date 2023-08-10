"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyItem } from "@/redux/actions";
import Link from "next/link";
import Grid from "./Grid";

export default function CompanyProfile() {
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state.activeUser);
  // const allItems = useSelector((state)=> state.allItems);
  // const company_items = allItems.filter((item)=> item.userId === activeUser.id);

  function handleDelete(id) {
    dispatch(deleteCompanyItem(id));
  }

  if (activeUser.role === "COMPANY") {
    return (
      <div className="flex flex-col items-center">
        <div
          id="data"
          className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md"
        >
          <h1 className="border-b-2 p-4 font-bold text-xl">DATA</h1>
          <div className="flex h-[300px] ">
            <div className="flex justify-center items-center w-1/2">
              <img src={activeUser.imageUrl} className="w-[300px]" />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h1>Company Name: {activeUser.name} </h1>
              <h1>Email: {activeUser.email} </h1>
              <h1>CUIT: {activeUser.cuit} </h1>
              <h1>Address: {activeUser.address} </h1>
              <h1>Company Description: {activeUser.description} </h1>
              <h1>Phone Number: {activeUser.phoneNumber} </h1>
            </div>
          </div>
        </div>

        <div
          id="items"
          className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md"
        >
          <h1 className="border-b-2 p-4 font-bold text-xl">ITEMS</h1>
          <div className="flex justify-center h-10">
            <input type="search" name="search" placeholder="Search by Name" />
            {/* <button onClick={handleClick}>Search</button> */}
          </div>
          <div>
            <Grid company={true} />
          </div>
        </div>

        <div id="sales" className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md h-[400px]">
          <h1 className="border-b-2 p-4 font-bold text-xl">SALES</h1>
          {/* {activeUser.items.map((item) => {
            return (
              <div className="flex items-center border border-black rounded-lg m-2">
                <img
                  className="w-[100px] h-[100px] m-5 rounded-lg"
                  src={item.imageUrl}
                />
                <h1 className="ml-2">{item.name}</h1>
                <Link href={`/brands/${voucher.item.user.id}`}>
                  <h2 className="ml-2">{voucher.item.user.name}</h2>
                </Link>
                <h2 className="ml-2">Detail</h2>
                <h2 className="ml-2">Buy again</h2>
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }
  return null;
}
