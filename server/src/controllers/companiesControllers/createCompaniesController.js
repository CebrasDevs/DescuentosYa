const { createUsersHelper } = require("../../helpers");
const { registerCompanies } = require("../../utils/emailUtils");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-ZÀ-ÿ\s'-]*$/;
module.exports = async (dataCompany) => {
  if (
    !regexEmail.test(dataCompany.email) ||
    !dataCompany.password || !isNaN(dataCompany.password) ||
    !dataCompany.dni_cuit || isNaN(+dataCompany.dni_cuit) ||
    !regexName.test(dataCompany.name) ||
    !dataCompany.address || !isNaN(dataCompany.address) ||
    !dataCompany.longitude || isNaN(dataCompany.longitude) || // verificamos que exista, y que sea un numero
    !dataCompany.latitude || isNaN(dataCompany.latitude)
  )
    throw new Error("Incomplete data or incorrect");
  dataCompany.role = "COMPANY";
  const newCompany = await createUsersHelper(dataCompany);
  // agregamos el envio de email de bienvenida
  await registerCompanies(newCompany.email, newCompany.name);
  let {
    id,
    email,
    enabled,
    role,
    dni_cuit,
    name,
    imageUrl,
    address,
    longitude, //lo obtenemos del resultado de la insercion
    latitude,
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
    location: { lng: longitude, lat: latitude }, // se retorna con el formato esperado en front
    phoneNumber,
    description
  };
};
