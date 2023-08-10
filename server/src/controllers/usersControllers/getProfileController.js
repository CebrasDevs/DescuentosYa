const { getUsersHelper } = require('../../helpers');
const {
    structureMember,
    structureCompany,
    structureAdmin
} = require("../../utils/profileUtils");

module.exports = async (id) => {
    // El booleano fullDetail permite recibir la cascada completa de informacion
    // Recibo el combo completo de informacion de usuario (usar con cautela)
    const fullDetail = true;

    

    const user = (await getUsersHelper({id: + id}, fullDetail))[0];

    if (user.role === 'MEMBER') {
        return structureMember(user);

    } else if (user.role === 'COMPANY') {
        return structureCompany(user);
        
    } else if (user.role === 'ADMIN') {
        return structureAdmin(user);

    } else if (!user.role) {
        throw Error("User fetched from database has 'undefined' or 'null' role field");

    } else throw Error("User fetched from database has invalid role value");
};