const { updateUsersHelper } = require("../../helpers");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-ZÀ-ÿ\s'-]*$/;
module.exports = async (dataCompany) => {
  //si la propiedad existe, debe cumplir con su tipo de dato en caso que no corresponda ingresa a error
  if (
    isNaN(dataCompany.id) ||
    (dataCompany.email && !regexEmail.test(dataCompany.email)) ||
    (dataCompany.password && !isNaN(dataCompany.password)) ||
    dataCompany.enabled ||
    (dataCompany.dni_cuit && isNaN(dataCompany.dni_cuit)) ||
    (dataCompany.name && !regexName.test(dataCompany.name)) ||
    (dataCompany.address && !isNaN(dataCompany.address))
  )
    throw new Error("Incomplete data or incorrect");
  let { id } = dataCompany;
  const updatedCompany = await updateUsersHelper(id, dataCompany);
  let {
    email,
    enabled,
    role,
    dni_cuit,
    name,
    urlImage,
    address,
    phoneNumber,
    description
  } = updatedCompany;
  return {
    id,
    email,
    enabled,
    role,
    cuit: dni_cuit,
    name,
    urlImage,
    address,
    phoneNumber,
    description
  };
};
