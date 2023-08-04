'use client'
import { useState } from "react"
import SignUpMember from "../../components/SignUpMember";
import SignUpCompany from "../../components/SignUpCompany";

export default function IsCompany () {
    const [IsCompany, setIsCompany] = useState(false);

    function handleChange(e) {
        const selectedOption = e.target.value === 'true';
        setIsCompany(selectedOption);
    };

    return (
        <div>
            <div className=" flex justify-center gap-12 my-4">
            <label className="py-2 px-6 font-bold rounded text-white  bg-violet-500 active:bg-violet-900 selection:bg-violet-900">
                <input
                    className=" hidden selection:bg-violet-900 "
                    type="radio" 
                    value="false"
                    checked={IsCompany === false}
                    onChange={handleChange}
                />
                Member
            </label>
            <label className="py-2 px-6 font-bold rounded text-white  bg-violet-500 active:bg-violet-900 selection:bg-violet-900 ">
                <input
                    className="hidden selection:bg-violet-900"
                    type="radio" 
                    value="true"
                    checked={IsCompany === true}
                    onChange={handleChange}
                />
                Company
            </label>
            </div>
            {
                IsCompany 
                    ? <SignUpCompany/>
                    : <SignUpMember/>
            }
        </div>
    )
}