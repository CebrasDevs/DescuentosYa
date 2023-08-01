import { useState } from "react";

export default function SignUpCompany () {
    const [input, setInput] = useState({
        email: '',
        password: '',
        companyName: '',
        description: '',
        cuit: '',
        address: '',
        phoneNumber: '',
        discount: ''
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        window.alert("Company submitted successfully (testing)");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="text" name="email" value={input.email} onChange={handleInputChange}/>


                <label>Password: </label>
                <input type="password" name="password" value={input.password} onChange={handleInputChange}/>


                <label>Company name: </label>
                <input type="text" name="companyName" value={input.companyName} onChange={handleInputChange}/>


                <label>Description of the company: </label>
                <input type="text" name="description" value={input.description} onChange={handleInputChange}/>


                <label>CUIT: </label>
                <input type="text" name="cuit" value={input.cuit} onChange={handleInputChange}/>


                <label>Address: </label>
                <input type="text" name="address" value={input.address} onChange={handleInputChange}/>


                <label>Phone number: </label>
                <input type="text" name="phoneNumber" value={input.phoneNumber} onChange={handleInputChange}/>


                <label>Discount applied (%): </label>
                <input type="text" name="discount" value={input.discount} onChange={handleInputChange}/>

                <button>Submit</button>
            </form>
        </div>
    );
};