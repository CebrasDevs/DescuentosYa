const fs = require("fs");
const puppeteer = require("puppeteer");
const { registerShopping } = require("./emailUtils");
const uploadCloudinary = require("./cloudinaryUtils");
const moment = require("moment-timezone");
const argTime = moment.tz("America/Argentina/Buenos_Aires");


const htmlTemplate = fs.readFileSync(__dirname + "/emailTemplate.html", "utf-8");

/**
 * 
 * @param {string} userName nombre del comprador
 * @param {Array} items arreglo de objetos Items junto con la propiedad quantity
 * @param {*} totalPrice precio total de la compra
 * @param {*} wayToPay descripcion de la forma de pago
 * @param {*} state estado de la compra
 * @returns se retorna el PDF resultante para el comprador
 */
const registerShoppingPDF = async (userName, items, totalPrice, wayToPay, state, userEmail) => {
    try {
        //generamos el mensaje para el template
        let message = `
            <h3><b>Date: </b>${argTime.format("llll")}</h3>
            <h3>Items: </h3>
            <ul>
            ${items.map((item) => (
            `<li>
                <b>${item.name}</b>
                <ul>
                    <li><b>Description:</b> ${item.description}, <br></li>
                    <li><b>Price:</b> $${item.unit_price} per unit, <br></li>
                    <li><b>Quantity:</b>${item.quantity}, <br></li>
                    <li><b>Company:</b> ${item.companyName}</li>
                    <li><b>Email company:</b> ${item.user.email}</li>
                </ul>
            </li>`
        )).join("")}
            </ul>
            <hr>
            Total Price: $${totalPrice}<br /> Way to pay: ${wayToPay}<br /> State: ${state}
        `
        //enviamos las variables al template
        const formattedPdf = htmlTemplate
            .replace("${title}", "Ticket, DescuentosYa!")
            .replace("${userName}", userName)
            .replace("${message}", message)
            .replace("${link}", 'https://descuentos-ya.vercel.app/discounts')
            .replace("${linkText}", 'Checkout our new discounts');
        const objectPdf = await createPdf(formattedPdf);
        await registerShopping(userEmail, formattedPdf, objectPdf);
        const url = await uploadCloudinary(objectPdf.pdf, objectPdf.namePdf, "raw");
        return url;
    } catch (error) {
        console.log(`Error al generar PDF`, error);
    };
};

const createPdf = async (htmlContent) => {
    try {
        // ejecutamos puppeteer para generar PDF
        const generatePdf = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
        // generamos la pagina en blanco del PDF
        const pagePdf = await generatePdf.newPage();
        // agregamos el contenido del html generado
        await pagePdf.setContent(htmlContent);
        // y lo genera con las opciones definidas por parametro
        const resultPdf = await pagePdf.pdf({ format: 'A4' });
        await generatePdf.close();
        // instanciamos el nombre del pdf

        const filename = `${argTime.getDate()}-${argTime.getMonth()}-${argTime.getFullYear()}T${argTime.getHours()}-HS${argTime.getMinutes()}-MM${argTime.getSeconds()}-SS`;

        // por ultimo se genera el archivo en la ruta mencionada
        // fs.writeFileSync(`PDF/${filename}.pdf`, resultPdf, 'binary');
        return { pdf: resultPdf, namePdf: filename };
    } catch (error) {
        console.log('Error pdf: ' + error.message);
    }
}

module.exports = { registerShoppingPDF }
