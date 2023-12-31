
// algunas regex para validar datos
const nameRegex = /^[0-9A-Za-z\s-]+$/;
const descriptionRegex = /^[0-9a-zA-Z \-\/\+\_\!\¡\¿,.?]+$/;
const floatRegex = /^[0-9.]+$/;
const intRegex = /^[0-9]+$/;
const urlRegex = /^(ftp|http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/i;


export default function validateModifiedItem(item) {
    if (!item) {
        console.log('Invalid item input recieved (at utils/validateItem)');
        return {};
    };

    let errors = {};
    const {
        name,
        category,
        description,
        price,
        discount,
        imageUrl
    } = item;


    // VALIDO NAME
    if (name.length) {
        if (!nameRegex.test(name)) {
            errors.name = 'Must contain only letters, numbers or "-"';
        };
        if (name.length > 70) {
            errors.name = 'Name must be shorter';
        };
    };
    // VALIDO CATEGORY
    if (category === 'Choose category') {
        errors.category = 'Please choose a category';
    };
    // VALIDO DESCRIPTION
    if (description && description.length) {
        if (!descriptionRegex.test(description)) {
            errors.description = 'Invalid character';
        };
        if (description.length > 250) {
            errors.description = 'Description must be shorter';
        };
    };
    // VALIDO PRICE
    if (price.length) {
        if (!floatRegex.test(price)) {
            errors.price = 'Must be an integer or a decimal number';
        };
    };
    // VALIDO DISCOUNT
    if (discount.length){
        if (!intRegex.test(discount)) {
            errors.discount = 'Must be an integer number';
        };
    };
    // VALIDO IMAGEURL
    if (imageUrl.length){
        if (!urlRegex.test(imageUrl)) {
            errors.imageUrl = 'Must be a valid url';
        };
    };
    console.log(errors)
    return errors;
};