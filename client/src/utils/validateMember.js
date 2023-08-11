
// algunas regex para validar datos
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ']+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const addressRegex = /^[a-zA-Z0-9\s.,'-]+$/;
const passwordRegex = /^[0-9a-zA-z]+$/;
const intRegex = /^[0-9]+$/;
const urlRegex = /^(ftp|http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/i;

export default function validateMember(member) {
    if (!member) {
        console.log('Invalid member input recieved (at utils/validateMember)');
        return {};
    };

    let errors = {};
    const {
    email,
    password,
    confirmPassword,
    dni,
    firstName,
    lastName,
    address,
    phoneNumber
    } = member;

    // VALIDO EMAIL
    if (!email.length) {
        errors.email = 'Required field';
    } else {
        if (!emailRegex.test(email)) {
            errors.email = 'Must be a valid email';
        };
    };
    // VALIDO PASSWORD
    if (!password.length) {
        errors.password = 'Required field';
    } else {
        if (!passwordRegex.test(password)) {
            errors.password = 'Must contain only letters and numbers';
        };
        if (password.length < 6 || password.length > 18) {
            errors.password = 'Must contain between 6 and 18 characters';
        };
    };
    // VALIDO CONFIRMPASSWORD
    if (confirmPassword !== password) {
        errors.confirmPassword = 'Passwords do not match';
    }
    // VALIDO DNI
    if (!dni.length) {
        errors.dni = 'Required field';
    } else {
        if (dni.length < 7 || dni.length > 8) {
            errors.dni = 'Invalid DNI number';
        } else if (!intRegex.test(dni)) {
            errors.dni = 'Must contain only numbers';
        };
    };
    // VALIDO FIRSTNAME
    if (!firstName.length) {
        errors.firstName = 'Required field';
    } else {
        if (!nameRegex.test(firstName)) {
            errors.firstName = 'Invalid name';
        }
        if (firstName.length > 50) {
            errors.firstName = 'First name too long';
        };
    };
    // VALIDO LASTNAME
    if (!lastName.length) {
        errors.lastName = 'Required field';
    } else {
        if (!nameRegex.test(lastName)) {
            errors.lastName = 'Invalid name';
        }
        if (lastName.length > 50) {
            errors.lastName = 'Last name too long';
        };
    };
    // VALIDO ADDRESS
    if (!address.length) {
        errors.address = 'Required field';
    } else {
        if (!addressRegex.test(address)) {
            errors.address = 'Invalid address';
        };
        if (address.length > 100) {
            errors.address = 'Address too long';
        };
    };
    // VALIDO PHONENUMBER
    if (phoneNumber.length) {
        if (phoneNumber.length < 6) {
            errors.phoneNumber = 'Phone number too short';
        };
        if (phoneNumber.length > 15) {
            errors.phoneNumber = 'Phone number too long';
        };
        if (!intRegex.test(phoneNumber)) {
            errors.phoneNumber = 'Must contain only numbers';
        };
    };
    // VALIDO IMAGEURL
    // if (!imageUrl.length) {
    //     errors.imageUrl = 'Required field';
    // } else {
    //     if (!urlRegex.test(imageUrl)) {
    //         errors.imageUrl = 'Must be a valid url';
    //     };
    // };
    return errors;
};

