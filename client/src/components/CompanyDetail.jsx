"use client";

import useCompany from "@/hooks/useCompany";
import Grid from "./Grid";
import Map from "./Map";

export default function CompanyDetail({ id }) {
  const company = useCompany(id);

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

  if (!company.id) {
    return <p>Loading...</p>;
  }
  return (
    <div className=" justify-center items-center flex flex-col">
      <div className=" mt-40 flex flex-col items-center">
        <div className=" w-3/4 mt-4 mb-2 bg-slate-50 rounded-lg shadow-md flex">
          <div className="flex h-full w-full flex-col ">
            <div className="flex justify-center items-center mt-60">
              <img
                src={company.imageUrl}
                className="flex top-32 absolute rounded-full w-[400px] h-[400px] shadow-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center">
              <div className=" flex flex-col gap-y-2">
                <div>
                  <h1 className=" tracking-wide font-semibold text-xl text-center mx-64 mt-4 ">
                    {company.description}
                  </h1>
                </div>
                <div className=" items-center justify-center flex flex-row gap-56 mt-4 ">
                  <div>
                    <h1 className=" tracking-wide font-bold text-lg text-center">
                      Email
                    </h1>
                    <h1 className=" tracking-wide font-semibold text-base">
                      {company.email}{" "}
                    </h1>
                  </div>
                </div>
                <div className=" items-center justify-center flex flex-row gap-56 mt-4 mb-10">
                  <div>
                    <h1 className=" tracking-wide font-bold text-lg text-center">
                      Address
                    </h1>
                    <h1 className=" tracking-wide font-semibold text-base">
                      {company.address}
                    </h1>
                  </div>
                  <div>
                    <h1 className=" tracking-wide font-bold text-lg text-center">
                      Phone Number
                    </h1>
                    <h1 className=" tracking-wide font-semibold text-base">
                      {company.phoneNumber}
                    </h1>
                  </div>
                </div>
                <div className=" flex flex-col items-center justify-center mb-4">
                  {company.distance && (
                    <h1>Distance {company.distance?.text}</h1>
                  )}
                  <div>
                    <Map location={company.location} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-3/4 items-center justify-center mt-10 ">
        <Grid value="detail" />
      </div>
    </div>
  );
}
