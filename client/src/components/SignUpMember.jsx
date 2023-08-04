import { useState } from "react";
import { formatMember } from "@/utils/formatUtils";
import validateMember from "@/utils/validateMember";

export default function SignUpMember () {
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        dni: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        imageUrl: ''
    });
    const isNotReady = (
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.dni ||
        errors.firstName ||
        errors.lastName ||
        errors.address ||
        errors.imageUrl
    );

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validateMember({
                ...input,
                [e.target.name]: e.target.value
            })
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        const formattedMember = formatMember(input);
        window.alert(`Member ${input.firstName, input.lastName} submitted successfully (provisory)`);
        //devolver el formattedMember al backend
        console.log(formattedMember);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Email: </p>
            <input type="text" name="email" value={input.email} onChange={handleInputChange}/>
            {errors.email && <p>{errors.email}</p>}

            <p>Password: </p>
            <input type="password" name="password" value={input.password} onChange={handleInputChange}/>
            {errors.password && <p>{errors.password}</p>}

            <p>Confirm password:</p>
            <input type="password" name="confirmPassword" value={input.confirmPassword} onChange={handleInputChange}/>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

            <p>DNI: </p>
            <input type="text" name="dni" value={input.dni} onChange={handleInputChange}/>
            {errors.dni && <p>{errors.dni}</p>}

            <p>First name: </p>
            <input type="text" name="firstName" value={input.firstName} onChange={handleInputChange}/>
            {errors.firstName && <p>{errors.firstName}</p>}

            <p>Last name: </p>
            <input type="text" name="lastName" value={input.lastName} onChange={handleInputChange}/>
            {errors.lastName && <p>{errors.lastName}</p>}

            <p>Address: </p>
            <input type="text" name="address" value={input.adress} onChange={handleInputChange}/>
            {errors.address && <p>{errors.address}</p>}

            <p>Phone number: </p>
            <input type="text" name="phoneNumber" value={input.phoneNumber} onChange={handleInputChange}/>
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            
            <p>Profile picture:</p>
            <input type="text" name="imageUrl" value={input.imageUrl} onChange={handleInputChange}/>
            {errors.imageUrl && <p>{errors.imageUrl}</p>}

            <button disabled={isNotReady}>Submit</button>
        </form>
    );
};