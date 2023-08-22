"use client";
import { useState } from "react";
import SignUpMember from "./SignUpMember";
import SignUpCompany from "./SignUpCompany";

export default function IsCompany() {
  const [IsCompany, setIsCompany] = useState(false);

  function handleChange(e) {
    const selectedOption = e.target.value === "true";
    setIsCompany(selectedOption);
  }

  return (
    <div>
      <div className=" flex justify-center gap-12 my-4 mt-32">
        <label className={`cursor-pointer py-2 px-6 font-bold rounded text-white bg-${IsCompany ? 'violet-500' : 'violet-900'} hover:bg-violet-700 `}>
          <input
            className={
              IsCompany ? "hidden bg-violet-900" : "hidden bg-violet-500"
            }
            type="radio"
            value="false"
            checked={IsCompany === false}
            onChange={handleChange}
          />
          Member
        </label>
        <label className={`cursor-pointer py-2 px-6 font-bold rounded text-white bg-${!IsCompany ? 'violet-500' : 'violet-900'} hover:bg-violet-700 `}>
          <input
            className={`hidden ${IsCompany} ? bg-violet-900`}
            type="radio"
            value="true"
            checked={IsCompany === true}
            onChange={handleChange}
          />
          Company
        </label>
      </div>
      {IsCompany ? <SignUpCompany /> : <SignUpMember />}
    </div>
  );
}
