"use client";

import useCompany from "@/hooks/useCompany";

export default function CompanyDetail({ id }) {

    const companyDetail = useCompany(id);
    
    return (
        <div className="flex m-5">
            <div className="mr-5">
                <img src={companyDetail.imageUrl} />
                <h1 className="mb-10 justify-center">Company Name: {companyDetail.name} </h1>
                <h1 className="mb-10 justify-center">Email: {companyDetail.email} </h1>
                <h1 className="mb-10 justify-center">CUIT: {companyDetail.cuit} </h1>
                <h1 className="mb-10 justify-center">Address: {companyDetail.address} </h1>
                <h1 className="mb-10 justify-center">Company Description: {companyDetail.description} </h1>
                <h1 className="mb-10 justify-center">Phone Number: {companyDetail.phoneNumber} </h1>
            </div>

            <div>
                {companyDetail.Item?.map((item, index) => {
                    return (
                        <div className="mb-10 p-4 flex flex-col justify-center text-center flex-wrap bg-slate-50 rounded-lg shadow-2xl" key={index}>
                            <div className="flex justify-center">
                                    <img src={item.url_image} className="rounded-lg" />
                            </div>
                            <div className="flex justify-center">
                                <h1 className="m-10"> {item.name} </h1>
                                <h1 className="m-10">
                                    {item.price === 0 ? (
                                        <div>{item.discount}% discount</div>
                                    ) : (
                                        <div className="flex flex-col">
                                            <div>{item.discount}% discount</div>
                                            <div>${item.price}</div>
                                        </div>
                                    )}{" "}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
