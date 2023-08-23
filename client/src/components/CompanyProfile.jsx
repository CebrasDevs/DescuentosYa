"use client";
import { FaUserEdit } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyItem, setFiltersProfile } from "@/redux/actions";
import Link from "next/link";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import ModifyCompanyProfile from "./ModifyCompanyProfile";

export default function CompanyProfile() {
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state.activeUser);
  const filtersProfile = useSelector((state) => state.filtersProfile);

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

  const [modify, setModify] = useState(false);
  const modifyHandler = () => {
    setModify(true);
  };

  const handleSetModify = () => {
    setModify(false);
  };

  function formatedCuit(cuit) {
    if (cuit.length !== 11) {
      return "El CUIT debe tener 11 caracteres";
    }
    const cuitFormated = `${cuit.substr(0, 2)}-${cuit.substr(
      2,
      8
    )}-${cuit.substr(10, 1)}`;
    return cuitFormated;
  }

  if (activeUser.role === "COMPANY") {
    return (
      <div className=" mt-60 flex flex-col items-center">
        <div
          id="data"
          className=" w-3/4 mt-4 mb-2 bg-slate-50 rounded-lg shadow-md flex"
        >
          <div className="flex h-full w-full flex-col ">
            <div className=" flex flex-row w-full">
              <div className=" w-1/2">
                <TiArrowBack
                  size={35}
                  onClick={() => {
                    setModify(false);
                  }}
                  className="ml-5 my-5 text-2xl hover:cursor-pointer hover:text-violet-500 "
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
                  <ModifyCompanyProfile
                    companyData={activeUser}
                    handleSave={handleSetModify}
                  />
                </div>
              ) : (
                <div className="w-full">
                  <div className=" flex flex-col gap-y-6">
                    <div className=" flex flex-row justify-center">
                      <h1 className=" tracking-wide font-semibold text-5xl">
                        {activeUser.name}
                      </h1>
                    </div>
                    <div>
                      <h1 className=" tracking-wide font-semibold text-xl text-center mx-64 mt-4 ">
                        {activeUser.description}
                      </h1>
                    </div>
                    <div className=" items-center justify-center flex flex-row gap-56 mt-4 ">
                      <div>
                        <h1 className=" tracking-wide font-bold text-lg text-center">
                          Email
                        </h1>
                        <h1 className=" tracking-wide font-semibold text-base">
                          {activeUser.email}{" "}
                        </h1>
                      </div>
                      <div>
                        <h1 className=" tracking-wide font-bold text-lg text-center">
                          CUIT
                        </h1>
                        <h1 className=" tracking-wide font-semibold text-base">
                          {formatedCuit(activeUser.cuit)}
                        </h1>
                      </div>
                    </div>
                    <div className=" items-center justify-center flex flex-row gap-56 mt-4 mb-10">
                      <div>
                        <h1 className=" tracking-wide font-bold text-lg text-center">
                          Address
                        </h1>
                        <h1 className=" tracking-wide font-semibold text-base">
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
                    </div>
                  </div>
                </div>
              )}
              <div id="items"></div>
            </div>
          </div>
        </div>

        <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md pb-10">
          <h1 className="border-b-2 p-4 font-bold text-xl">ITEMS</h1>
          {activeUser.items.length !== 0 ? (
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
                  name="items"
                  className="h-14 w-full rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Search items"
                  onInput={handleSearchChange}
                />
              </div>
              <div>
                <Grid value="profile" itemsFiltered={filtersProfile.items} />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center my-10 font-semibold text-xl">
                You haven't added any items yet
              </h1>
            </>
          )}

          <div id="sales"></div>
        </div>

        <div className=" w-3/4 mt-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">SALES</h1>
          {activeUser.sales.length !== 0 ? (
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  name="search"
                  className="h-14 w-full rounded-md py-4 pl-12 pr-8 outline-none focus:ring-2 focus:ring-violet-400"
                  placeholder="Search sales"
                />
              </div>
              <div className="items-center">
                {activeUser.sales?.map((sale, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col border border-black rounded-lg m-2"
                    >
                      {sale.items?.map((item, index) => {
                        return (
                          <div key={index} className="flex items-center">
                            <img
                              className="w-[100px] h-[100px] m-5 rounded-lg"
                              src={item.imageUrl}
                              alt=""
                            />
                            <h1 className="ml-2">
                              Way to Pay: {sale.wayToPay}
                            </h1>
                            <h1 className="ml-2">| State: {sale.state}</h1>
                            <h1 className="ml-2">| User: {sale.user.name}</h1>
                            <h2 className="ml-2">
                              |{" "}
                              <Link className="hover:text-blue-500" href={"#"}>
                                Detail
                              </Link>
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center my-10 font-semibold text-xl">
                You haven't made any sales yet
              </h1>
              <div id="vouchers"></div>
            </>
          )}
        </div>

        <div className=" w-3/4 mt-10 bg-slate-50  rounded-lg shadow-md">
          <h1 className="border-b-2 p-4 font-bold text-xl">VOUCHERS</h1>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                      className="flex items-center border border-black rounded-lg m-2"
                    >
                      <img
                        className="w-[100px] h-[100px] m-5 rounded-lg"
                        src={voucher.item.imageUrl}
                      />
                      <h2 className="ml-2">Voucher: {voucher.item.name}</h2>
                      <h2 className="ml-2">
                        | Expiration date: {voucher.expirationDate}
                      </h2>
                      <h1 className="ml-2">| User: {voucher.user.name}</h1>
                      <h2 className="ml-2">
                        |{" "}
                        <Link className="hover:text-blue-500" href={"#"}>
                          Detail
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
                You haven't made any vouchers yet
              </h1>
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
}
