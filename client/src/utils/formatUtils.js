
export function formatCompany(company) {
    const {
        email, 
        password, 
        companyName, 
        description, 
        cuit, 
        address,
        location, //se agrega la pueda propiedad para la ubicacion de la compañia 
        phoneNumber, 
        imageUrl
    } = company;
    const parsedCuit = String(cuit);
    const parsedPhoneNumber = String(phoneNumber);

    return {
        email: email,
        password: password,
        companyName: companyName,
        description: description,
        cuit: parsedCuit,
        address: address,
        location,
        phoneNumber: parsedPhoneNumber,
        imageUrl: imageUrl
    };
};

export function formatModifyCompany(company) {
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

    return {
        email: email,
        companyName: companyName,
        description: description,
        cuit: cuit,
        address: address,
        phoneNumber: phoneNumber,
        imageUrl: imageUrl
    };
};

export function phoneNumberWithoutHyphens(company){
    return{
        phoneNumber: company.phoneNumber.split('-').join('')
    }
}

export function splitName(member){
  let splitedName = member.name.split(', ')
    return{
        firstName: splitedName[0],
        lastName: splitedName[1],
    }
}

export function phoneNumberWithoutDots(member){
    return{
        phoneNumber: member.phoneNumber.split('.').join('')
    }
}
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

    const parsedDni = String(dni);
    const parsedPhoneNumber = String(phoneNumber);
    const fullName = `${firstName}, ${lastName}`;

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

export function formatModifyMember(member){
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

    const fullName = `${firstName}, ${lastName}`;

    return {
        email: email,
        dni: dni,
        name: fullName,
        address: address,
        phoneNumber: phoneNumber,
        imageUrl: imageUrl
    };
};

export function formatItem(item) {

    const {
        userId,
        id: id,
        name,
        categoryId,
        description,
        price,
        discount,
        imageUrl
    } = item;

    const parsedPrice = parseFloat(price).toFixed(2);
    const parsedDiscount = Number(discount);
    
    return {
        userId: userId,
        id: id,
        name: name,
        categoryId: categoryId,
        description: description,
        price: parsedPrice,
        discount: parsedDiscount,
        imageUrl: imageUrl
    };
};