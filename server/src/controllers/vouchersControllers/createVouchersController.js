const { createVouchersHelper, getVouchersHelper } = require('../../helpers');
//2023-04-14T17:36:40.426
module.exports = async (voucher) => {
    if (
        isNaN(voucher.itemId) ||
        isNaN(voucher.userId)

    ) throw new Error("Incomplete data or incorrect");


    const previousVouchers = await getVouchersHelper({ userId: + voucher.userId, itemId: + voucher.itemId });

    // si no viene vacio
    if (previousVouchers.length !== 0) {

        //obtengo el ultimo voucher agregado
        const lastVoucher = previousVouchers[previousVouchers.length - 1];

        //obtengo la expiration date del ultimo voucher agregado
        const lastExpirationDate = lastVoucher.expirationDate;

        // Calculo el número de milisegundos que hay en dos días
        const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;

        const currentDate = new Date(); // obtengo la fecha actual

        // calculo en milisegundos la diferencia entre las fechas de expiracion
        const dateDifference = Math.abs(currentDate - lastExpirationDate);

        if (dateDifference >= twoDaysInMilliseconds) {
            // Hay dos días de diferencia entre las fechas

            let { id, userId, itemId, code, expirationDate } = res;

            return {
                id, userId, itemId, code, expirationDate
            };

        } else throw new Error("voucher already exists");
    }

    const res = await createVouchersHelper(voucher);

    let { id, userId, itemId, code, expirationDate } = res;

    return {
        id, userId, itemId, code, expirationDate
    };


} // vamos a dejar pendiente aplicar la funcionalidad de la propiedad enabled 