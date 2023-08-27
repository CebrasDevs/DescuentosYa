/**
 * se encarga de retornar un objeto con las propiedades distintas a null
 * controlamos que el envio al backend sea con datos distintos de nulos 
 * @param {object} objectValues 
 */
export default function inputsFormatted(objectValues) {
    let dataFilter = {};
    for (const property in objectValues) {
        if (!(objectValues[property] === null || objectValues[property] === undefined)) {
            dataFilter[property] = objectValues[property]
        };
    };
    return dataFilter;
};