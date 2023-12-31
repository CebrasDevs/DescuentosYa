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

  const handleSetModify = () => {
    setModify(false);
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

  if (activeUser.role === "MEMBER") {
    const { firstName, lastName } = splitName(activeUser);
    return (
      <div className="flex flex-col items-center text-center mt-60">
        <div
          id="data"
          className=" w-3/4 mt-4 mb-2 bg-slate-50 rounded-lg shadow-md flex"
        >
          <div className="flex h-full w-full flex-col ">
            <div className=" flex flex-row w-full">
              <div className="w-1/2">
                <TiArrowBack
                  size={35}
                  onClick={() => {
                    setModify(false);
                  }}
                  className="ml-5 my-5 text-2xl hover:cursor-pointer hover:text-violet-500"
                />
              </div>
              <div className=" flex justify-end w-1/2 ">
                <button onClick={modifyHandler}>
                  <FaUserEdit
                    size={35}
                    className=" hover:text-violet-500 mr-5 my-5"
                  />
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-60">
              <img
                src={activeUser.imageUrl}
                className="flex top-32 absolute w-[400px] rounded-full shadow-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center">
              {modify ? (
                <div className="h-full">
                  <ModifyMemberProfile
                    memberData={activeUser}
                    handleSave={handleSetModify}
                  />
                </div>
              ) : (

                <div className="w-full drop-shadow-md">
                  <div className=" flex flex-row justify-center">
                    <h1 className=" tracking-wide font-semibold text-5xl">
                      {lastName}, {firstName}{" "}
                    </h1>
                  </div>
                  <div className=" flex flex-row justify-between my-16 mx-20">
                    <div>
                      <h1 className=" tracking-wide font-bold text-lg text-center">
                        Email
                      </h1>
                      <h1 className=" tracking-wide font-semibold text-base">
                        {activeUser.email}
                      </h1>
                    </div>
                    <div>
                      <h1 className=" tracking-wide font-bold text-lg text-center">
                        DNI
                      </h1>
                      <h1 className=" tracking-wide font-semibold text-base">
                        {activeUser.dni}
                      </h1>
                    </div>
                    <div>
                      <h1 className=" tracking-wide font-bold text-lg text-center">
                        Address
                      </h1>
                      <h1 className=" tracking-wide font-semibold text-base text-center">
                        {activeUser.address}
                      </h1>
                    </div>
                    <div>
                      <h1 className=" tracking-wide font-bold text-lg text-center">
                        Phone Number
                      </h1>
                      <h1 className=" tracking-wide font-semibold text-base">
                        {activeUser.phoneNumber}
                      </h1>
                    </div>
                    <div>
                    <h1 className=" tracking-wide font-bold text-lg text-center">
                      Last payment
                    </h1>
                    <h1 className=" tracking-wide font-semibold text-base">
                      {" "}
                      {activeUser.lastPayment}
                    </h1>
                    </div>
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
              <div className="relative flex w-2/6 m-auto items-center justify-between rounded-md border border-gray-400 shadow-lg mt-4 mb-10">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="search"
                  name="vouchers"
                  className="h-14 w-full rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Search vouchers"
                  onInput={handleSearchChange}
                />
              </div>
              <div className="items-center">
                {filtersProfile.vouchers?.map((voucher, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center border border-t-gray-300 mt-4 rounded-lg shadow-xl drop-shadow-lg m-2"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-gray-200 to-transparent"></div>
                      <img
                        className="w-[100px] h-[100px] m-5 rounded-lg"
                        src={voucher.item.imageUrl}
                      />
                      <h2 className="ml-2">Voucher: {voucher.item.name}</h2>
                      <h2 className="ml-2">
                        | Company:{" "}
                        <Link
                          className="hover:text-blue-500"
                          href={`/brands/${voucher.company?.id}`}
                        >
                          {voucher.company?.name}
                        </Link>
                      </h2>
                      {voucher.enabled ? (
                        <div className="flex">
                          <h2 className="ml-2 ">| Expires:</h2>&nbsp;
                          <h2 className="text-green-600">
                            {" "}
                            {voucher.expirationDate}
                          </h2>
                        </div>
                      ) : (
                        <div className="flex">
                          <h2 className="ml-2 ">| Expired on:</h2>&nbsp;
                          <h2 className="text-red-600">
                            {" "}
                            {voucher.expirationDate}
                          </h2>
                        </div>
                      )}
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
                        <Link
                          className="hover:text-blue-500"
                          href={`/${voucher.item.id}`}
                        >
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
        <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">My Orders</h1>
          {activeUser.shoppings.length !== 0 ? (
            <>
              <div className="relative flex w-2/6 m-auto items-center justify-between rounded-md border border-gray-400 shadow-lg mt-4 mb-10">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="search"
                  name="shoppings"
                  className="h-14 w-full rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Search orders"
                  onInput={handleSearchChange}
                />
              </div>

              {filtersProfile.shoppings?.map((buys, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center border border-t-gray-300 mt-4 rounded-lg shadow-xl drop-shadow-lg m-2"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-gray-200 to-transparent"></div>
                    {buys.items?.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <img
                            className="w-[100px] h-[100px] m-5 rounded-lg"
                            src={item.imageUrl}
                            alt=""
                          />

                          <h1 className="ml-2">Way to Pay: {buys.wayToPay}</h1>
                          <h1 className="ml-2">| State: {buys.state}</h1>
                          <h2 className="ml-2">
                            |{" "}
                            <Link
                              className="hover:text-blue-500"
                              href={`/profile/myPurchase/${buys.items[index].id}?userId=${activeUser.id}`}
                            >
                              Detail
                            </Link>
                          </h2>
                          <h2 className="ml-2">
                            |{" "}
                            <Link
                              className="hover:text-blue-500"
                              href={`/${item.id}`}
                            >
                              Buy again
                            </Link>
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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
