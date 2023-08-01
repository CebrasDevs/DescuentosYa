import { useState } from "react";

export default function SignUpMember () {
    const [input, setInput] = useState({
        email: '',
        password: '',
        dni: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        window.alert("Member submitted successfully (testing)");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="text" name="email" value={input.email} onChange={handleInputChange}/>
            

            <label>Password: </label>
            <input type="password" name="password" value={input.password} onChange={handleInputChange}/>


            <label>DNI: </label>
            <input type="text" name="dni" value={input.dni} onChange={handleInputChange}/>


            <label>First name: </label>
            <input type="text" name="firstName" value={input.firstName} onChange={handleInputChange}/>

            <label>Last name: </label>
            <input type="text" name="lastName" value={input.lastName} onChange={handleInputChange}/>


            <label>Address: </label>
            <input type="text" name="address" value={input.adress} onChange={handleInputChange}/>


            <label>Phone number: </label>
            <input type="text" name="phoneNumber" value={input.phoneNumber} onChange={handleInputChange}/>

            <button>Submit</button>
        </form>
    );
};