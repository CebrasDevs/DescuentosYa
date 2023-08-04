const { updateUsersHelper } = require("../../helpers");

module.exports = async (dataCompany) => {
  //si la propiedad existe, debe cumplir con su tipo de dato en caso que no corresponda ingresa a error
  if (
    isNaN(dataCompany.id) ||
    (dataCompany.email && dataCompany.email !== "string") ||
    (dataCompany.password && typeof dataCompany.password !== "string") ||
    dataCompany.enabled ||
    (dataCompany.cuit && isNaN(dataCompany.cuit)) ||
    (dataCompany.companyName && typeof dataCompany.companyName !== "string") ||
    (dataCompany.address && typeof dataCompany.address !== "string")
  )
    throw new Error("Incomplete data or incorrect");
  const updatedCompany = await updateUsersHelper(dataCompany);
  let {
    id,
    email,
    enabled,
    role,
    cuit,
    company_name: companyName,
    url_image: urlImage,
    address,
    phone,
    description,
  } = updatedCompany;
  return {
    id,
    email,
    enabled,
    role,
    cuit,
    companyName,
    urlImage,
    address,
    phone,
    description,
  };
};
