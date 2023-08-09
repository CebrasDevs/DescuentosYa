const { createUsersHelper } = require("../../helpers");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-ZÀ-ÿ\s'-]*$/;
module.exports = async (dataCompany) => {
  if (
    !regexEmail.test(dataCompany.email) ||
    (dataCompany.password && !isNaN(dataCompany.password)) ||
    !dataCompany.dni_cuit || isNaN(+dataCompany.dni_cuit) ||
    !regexName.test(dataCompany.name) ||
    (dataCompany.address && !isNaN(dataCompany.address))
  )
    throw new Error("Incomplete data or incorrect");
  dataCompany.role = "COMPANY";
  const newCompany = await createUsersHelper(dataCompany);
  let {
    id,
    email,
    enabled,
    role,
    dni_cuit,
    name,
    imageUrl,
    address,
    phoneNumber,
    description
  } = newCompany;
  return {
    id,
    email,
    enabled,
    role,
    cuit: dni_cuit,
    name,
    imageUrl,
    address,
    phoneNumber,
    description
  };
};
