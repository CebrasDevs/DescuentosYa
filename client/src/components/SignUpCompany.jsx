import { useState } from "react";
import { formatCompany } from "@/utils/formatUtils";
import validateCompany from "@/utils/validateCompany";

export default function SignUpCompany () {
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        description: '',
        cuit: '',
        address: '',
        phoneNumber: '',
        imageUrl: ''
    });
    const isNotReady = (
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.companyName ||
        errors.cuit ||
        errors.address ||
        errors.imageUrl
    );

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validateCompany({
                ...input,
                [e.target.name]: e.target.value
            })
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        const formattedCompany = formatCompany(input);
        window.alert(`Company ${input.companyName} submitted successfully (provisory)`);
        //devolver el formattedCompany al backend
        console.log(formattedCompany);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Email:</p>
                <input type="text" name="email" value={input.email} onChange={handleInputChange}/>
                {errors.email && <p>{errors.email}</p>}

                <p>Password:</p>
                <input type="password" name="password" value={input.password} onChange={handleInputChange}/>
                {errors.password && <p>{errors.password}</p>}

                <p>Confirm password:</p>
                <input type="password" name="confirmPassword" value={input.confirmPassword} onChange={handleInputChange}/>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                <p>Company name:</p>
                <input type="text" name="companyName" value={input.companyName} onChange={handleInputChange}/>
                {errors.companyName && <p>{errors.companyName}</p>}

                <p>Description of the company:</p>
                <input type="text" name="description" value={input.description} onChange={handleInputChange}/>
                {errors.description && <p>{errors.description}</p>}

                <p>CUIT:</p>
                <input type="text" name="cuit" value={input.cuit} onChange={handleInputChange}/>
                {errors.cuit && <p>{errors.cuit}</p>}

                <p>Address:</p>
                <input type="text" name="address" value={input.address} onChange={handleInputChange}/>
                {errors.address && <p>{errors.address}</p>}

                <p>Phone number:</p>
                <input type="text" name="phoneNumber" value={input.phoneNumber} onChange={handleInputChange}/>
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

                <p>Company logo:</p>
                <input type="text" name="imageUrl" value={input.imageUrl} onChange={handleInputChange}/>
                {errors.imageUrl && <p>{errors.imageUrl}</p>}

                <button disabled={isNotReady}>Submit</button>
            </form>
        </div>
    );
};