"use client";
import { FaUserEdit } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModifyMemberProfile from "./ModifyMemberProfile";
import { splitName } from "@/utils/formatUtils";
import { setFiltersProfile } from "@/redux/actions";

export default function UserProfile() {
  const activeUser = useSelector((state) => state.activeUser);
  const filtersProfile = useSelector((state) => state.filtersProfile);
  const dispatch = useDispatch();

  const [modify, setModify] = useState(false);
  const modifyHandler = () => {
    setModify(true);
  };

  useEffect(() => {
    dispatch(setFiltersProfile({ property: "All", value: "" }));
  }, [activeUser]);

  const handleSearchChange = (e) => {
    dispatch(
      setFiltersProfile({
        property: e.target.name,
        value: e.target.value.trim(),
      })
    );
  };

  const handleSetModify = () => {
    setModify(false);
  };

  if (activeUser.role === "MEMBER") {
    const { firstName, lastName } = splitName(activeUser);
    return (
      <div className="flex flex-col items-center">
        <div
          id="data"
          className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md"
        >
          <div className="flex justify-between border-b-2">
            <h1 className="p-4 font-bold text-xl">DATA</h1>
            <TiArrowBack
              onClick={() => {
                setModify(false);
              }}
              className="m-5 text-2xl hover: cursor-pointer"
            />
          </div>
          <div className="flex h-[550px] ">
            <div className="flex justify-center items-center w-1/2">
              <img
                src={activeUser.imageUrl}
                className="p-5 w-[300px] rounded-lg"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              {modify ? (
                <div>
                  <ModifyMemberProfile
                    memberData={activeUser}
                    handleSave={handleSetModify}
                  />
                </div>
              ) : (
                <div className="w-3/4">
                  <div>
                    <h1>
                      Name: {lastName}, {firstName}{" "}
                    </h1>
                    <h1>Email: {activeUser.email} </h1>
                    <h1>DNI: {activeUser.dni} </h1>
                    <h1>Address: {activeUser.address} </h1>
                    <h1></h1>
                    <h1>Phone Number: {activeUser.phoneNumber} </h1>
                    <h1>Last payment: {activeUser.lastPayment}</h1>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={modifyHandler}>
                      <FaUserEdit size={30} className="hover:text-blue-500" />
                    </button>
                  </div>
                </div>
              )}
              <div id="vouchers"></div>
            </div>
          </div>
        </div>
        {/* PARTE DE LOS VOUCHER DEL USUARIO */}
        <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">My Vouchers</h1>
          {activeUser.vouchers.length !== 0 ? (
            <>
              <div className="flex justify-center h-10 my-10">
                <input
                  type="search"
                  name="vouchers"
                  placeholder="Search by Name"
                  onInput={handleSearchChange}
                />
              </div>
              <div className="items-center">
                {filtersProfile.vouchers?.map((voucher, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center border border-black rounded-lg m-2"
                    >
                      <img
                        className="w-[100px] h-[100px] m-5 rounded-lg"
                        src={voucher.item.imageUrl}
                      />
                      <h2 className="ml-2">Voucher: {voucher.item.name}</h2>
                      <h2 className="ml-2">
                        | Company:{" "}
                        <Link
                          className="hover:text-blue-500"
                          href={`/brands/${voucher.company.id}`}
                        >
                          {voucher.company.name}
                        </Link>
                      </h2>
                      <h2 className="ml-2">
                        | Expiration date: {voucher.expirationDate}
                      </h2>
                      <h2 className="ml-2">
                        |{" "}
                        <Link
                          className="hover:text-blue-500"
                          href={`/profile/myVoucher/${voucher.item.id}?userId=${activeUser.id}`}
                        >
                          Detail
                        </Link>
                      </h2>
                      <h2 className="ml-2">
                        |{" "}
                        <Link className="hover:text-blue-500" href={"#"}>
                          Renew
                        </Link>
                      </h2>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center my-10 font-semibold text-xl">
                You haven't generated vouchers
              </h1>
              <div id="orders"></div>
            </>
          )}
        </div>
        {/* PARTE DE LAS COMPRAS DEL USUARIO */}
        {console.log(activeUser.shoppings)}
        <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">My Orders</h1>
          {activeUser.shoppings.length !== 0 ? (
            <>
              <div className="flex justify-center h-10 my-10">
                <input
                  type="search"
                  name="search"
                  placeholder="Search by Name"
                />
                {/* <button onClick={handleClick}>Search</button> */}
              </div>
              <div className="items-center">
                {activeUser.shoppings?.map((buys, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center border border-black rounded-lg m-2"
                    >
                      {buys.items?.map((item, index) => {
                        return (
                          <img
                            key={index}
                            className="w-[100px] h-[100px] m-5 rounded-lg"
                            src={item.imageUrl}
                            alt=""
                          />
                        );
                      })}
                      <h1 className="ml-2">Way to Pay: {buys.wayToPay}</h1>
                      <h1 className="ml-2">| State: {buys.state}</h1>
                      <h2 className="ml-2">
                        |{" "}
                        <Link
                          className="hover:text-blue-500"
                          href={`/profile/myPurchase/${buys.items[0].id}?userId=${activeUser.id}`}
                        >
                          Detail
                        </Link>
                      </h2>
                      <h2 className="ml-2">
                        |{" "}
                        <Link className="hover:text-blue-500" href={"#"}>
                          Buy again
                        </Link>
                      </h2>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center my-10 font-semibold text-xl">
                You haven't bought anything
              </h1>
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
}
