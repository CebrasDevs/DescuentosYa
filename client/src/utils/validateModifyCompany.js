// algunas regex para validar datos
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const descriptionRegex = /^[0-9a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ\s\-\,\.\'\!\¡\¿]+$/;
const addressRegex = /^[a-zA-Z0-9\s.,'-]+$/;
const passwordRegex = /^[0-9a-zA-z]+$/;
const intRegex = /^[0-9]+$/;
const urlRegex = /^(ftp|http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/i;

export default function validateModifyCompany(company) {
    if (!company) {
        console.log('Invalid company input recieved (at utils/validateCompany)');
        return {};
    };

    let errors = {};
    const {
    email,
    password,
    confirmPassword,
    companyName,
    description,
    cuit,
    address,
    phoneNumber,
    imageUrl
    } = company;

    // VALIDO EMAIL
    if (!email.length) {
        errors.email = 'Required field';
    } else {
        if (!emailRegex.test(email)) {
            errors.email = 'Must be a valid email';
        };
    };

    // VALIDO PASSWORD
    // if (!password.length) {
    //     errors.password = 'Required field';
    // } else {
    //     if (!passwordRegex.test(password)) {
    //         errors.password = 'Must contain only letters andnumbers';
    //     };
    //     if (password.length < 6 || password.length > 18) {
    //         errors.password = 'Must contain between 6 and 18characters';
    //     };
    // };
    // VALIDO CONFIRMPASSWORD
    // if (confirmPassword !== password) {
    //     errors.confirmPassword = 'Passwords do not match';
    // };

    // VALIDO COMPANYNAME
    if (!companyName.length) {
        errors.companyName = 'Required field';
    } else {
        if (companyName.length > 100) {
            errors.companyName = 'Company name too long';
        };
    };
    // VALIDO DESCRIPTION
    if (description.length) {
        if (!descriptionRegex.test(description)) {
            errors.description = 'Invalid character';
        };
        if (description.length > 250) {
            errors.description = 'Description must be shorter';
        };
    };
    // VALIDO CUIT
    if (!cuit.length) {
        errors.cuit = 'Required field';
    } else {
        if (cuit.length !== 11) {
            errors.cuit = 'CUIT number must contain 11 digits';
        } else if (!intRegex.test(cuit)) {
            errors.cuit = 'Must contain only numbers';
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
    if (!imageUrl.length) {
        errors.imageUrl = 'Required field';
    } else {
        if (!urlRegex.test(imageUrl)) {
            errors.imageUrl = 'Must be a valid url';
        };
    };
    return errors;
};