"use client";

import useCompany from "@/hooks/useCompany";
import Grid from "./Grid";
import Map from "./Map";

export default function CompanyDetail({ id }) {
    const company = useCompany(id);

    function formatedCuit(cuit){
        if (cuit.length !== 11) {
            return "El CUIT debe tener 11 caracteres";
        }
        const cuitFormated = `${cuit.substr(0, 2)}-${cuit.substr(2, 8)}-${cuit.substr(10, 1)}`;
        return cuitFormated;
    }

    if (!company.id) {
        return <p>Loading...</p>;
    }
    return (
        <div className="mt-10 pb-10 bg-slate-100 rounded-lg shadow-md w-3/4 mx-auto">
            <div className="flex flex-col items-center mb-10">
                <div className="flex mt-5">
                    <div className="w-[45%] mx-auto">
                        <img src={company.imageUrl} />
                    </div>
                    <div className="w-[45%] mx-auto flex flex-col justify-center">
                        <h1>Company Name: {company.name} </h1>
                        <h1>Email: {company.email} </h1>
                        <h1>CUIT: {formatedCuit(company.cuit)} </h1>
                        <h1>Address: {company.address} </h1>
                        <h1>Company Description: {company.description} </h1>
                        <h1>Phone Number: {company.phoneNumber} </h1>
                    </div>
                    <div>
                        <Map location={company.location} />
                    </div>
                </div>
            </div>
            <Grid value="detail" />
        </div>
    );
}
