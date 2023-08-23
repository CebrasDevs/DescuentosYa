const { createCompaniesController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let {
      email,
      password,
      cuit,
      imageUrl,
      companyName,
      address,
      location, // extraemos la propiedad de la peticion
      phoneNumber,
      description
    } = req.body;
    let dataCompany = {
      email,
      password,
      dni_cuit: cuit,
      imageUrl,
      name: companyName,
      address,
      longitude: location.lng, // separamos los datos para validarlos en el controlador
      latitude: location.lat,
      phoneNumber,
      description
    };
    const newCompany = await createCompaniesController(dataCompany);
    return res.status(200).json(newCompany);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
