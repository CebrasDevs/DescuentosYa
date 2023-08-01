'use client'
import { useState } from "react"
import SignUpMember from "../components/SignUpMember";
import SignUpCompany from "../components/SignUpCompany";

export default function IsCompany () {
    const [IsCompany, setIsCompany] = useState(false);

    function handleChange(e) {
        const selectedOption = e.target.value === 'true';
        setIsCompany(selectedOption);
    };

    return (
        <div>
            <label>
                <input 
                    type="radio" 
                    value="false"
                    checked={IsCompany === false}
                    onChange={handleChange}
                />
                Member
            </label>
            <label>
                <input 
                    type="radio" 
                    value="true"
                    checked={IsCompany === true}
                    onChange={handleChange}
                />
                Company
            </label>
            {
                IsCompany 
                    ? <SignUpCompany/>
                    : <SignUpMember/>
            }
        </div>
    )
}