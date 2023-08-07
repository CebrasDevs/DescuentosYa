"use client";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDetail, cleanCompanyDetail } from "@/redux/actions";
import { useEffect } from "react";

export default function CompanyDetail({ id }) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCompanyDetail(id))
    dispatch(cleanCompanyDetail())
  },[id])

  let companyDetail = useSelector((state) => state.companyDetail);

  return (
    <div className="flex m-5">
      <div className="mr-5">
        <img src={companyDetail.url_image}/>
        <h1 className="mb-10 justify-center">Company Name: {companyDetail.company_name} </h1>
        <h1 className="mb-10 justify-center">Email: {companyDetail.email} </h1>
        <h1 className="mb-10 justify-center">CUIT: {companyDetail.cuit} </h1>
        <h1 className="mb-10 justify-center">Address: {companyDetail.address} </h1>
        <h1 className="mb-10 justify-center">Company Description: {companyDetail.description} </h1>
        <h1 className="mb-10 justify-center">Phone Number: {companyDetail.phone} </h1>
      </div>

      <div>
        {companyDetail.Item?.map((item, index) => {
          return (
            <div
              className="mb-10 p-4 flex justify-center text-center flex-wrap bg-violet-200"
              key={index}
            >
              <h1 className="m-10 justify-center">{item.id}</h1>
              <h1 className="m-10 justify-center">
                <img src={item.url_image}/>
              </h1>
              <h1 className="m-10 justify-center"> {item.name} </h1>
              <h1 className="m-10 justify-center"> ${item.price} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}