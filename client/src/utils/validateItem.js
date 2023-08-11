
// algunas regex para validar datos
const nameRegex = /^[0-9A-Za-z\s-]+$/;
const descriptionRegex = /^[0-9a-zA-Z \-\/\+\_\!\¡\¿]+$/;
const floatRegex = /^[0-9.]+$/;
const intRegex = /^[0-9]+$/;
const urlRegex = /^(ftp|http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/i;


export default function validateItem(item) {
    if (!item) {
        console.log('Invalid item input recieved (at utils/validateItem)');
        return {};
    };

    let errors = {};
    const {
        name,
        categoryId,
        description,
        price,
        discount,
        //imageUrl
    } = item;


    // VALIDO NAME
    if (!name.length) {
        errors.name = 'Required field';
    } else {
        if (!nameRegex.test(name)) {
            errors.name = 'Must contain only letters, numbers or "-"';
        };
        if (name.length > 70) {
            errors.name = 'Name must be shorter';
        };
    };
    // VALIDO CATEGORY
    if (categoryId === 'Choose category') {
        errors.categoryId = 'Please choose a category';
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
    // VALIDO PRICE
    if (!price.length) {
        errors.price = 'Required field';
    } else {
        if (!floatRegex.test(price)) {
            errors.price = 'Must be an integer or a decimal number';
        };
    };
    // VALIDO DISCOUNT
    if (!discount.length) {
        errors.discount = 'Required field';
    } else {
        if (!intRegex.test(discount)) {
            errors.discount = 'Must be an integer number';
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

