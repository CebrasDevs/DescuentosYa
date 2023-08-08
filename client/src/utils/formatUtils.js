
export function formatCompany(company) {
    const {
        email, 
        password, 
        companyName, 
        description, 
        cuit, 
        address, 
        phoneNumber, 
        imageUrl
    } = company;
    const parsedCuit = Number(cuit);
    const parsedPhoneNumber = Number(phoneNumber);

    return {
        email: email,
        password: password,
        companyName: companyName,
        description: description,
        cuit: parsedCuit,
        address: address,
        phoneNumber: parsedPhoneNumber,
        imageUrl: imageUrl
    };
};

export function formatMember(member) {
    const {
        email,
        password,
        dni,
        firstName,
        lastName,
        address,
        phoneNumber,
        imageUrl
    } = member;

    const parsedDni = Number(dni);
    const parsedPhoneNumber = Number(phoneNumber);
    const fullName = `${lastName}, ${firstName}`;

    return {
        email: email,
        password: password,
        dni: parsedDni,
        name: fullName,
        address: address,
        phoneNumber: parsedPhoneNumber,
        imageUrl: imageUrl
    };
};

export function formatItem(item) {
    //!FALTA AGREGAR el companyName cuando tenga manera de chequear cual es el nombre de la empresa que esta logueada
    const {
        name,
        category,
        description,
        price,
        discount,
        imageUrl
    } = item;

    const parsedPrice = parseFloat(price).toFixed(2);
    console.log(parsedPrice)
    const parsedDiscount = Number(discount);
    return {
        userId: 2,
        name: name,
        category: category,
        description: description,
        price: parsedPrice,
        discount: parsedDiscount,
        imageUrl: imageUrl
    };
};