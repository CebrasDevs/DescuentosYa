const fs = require("fs");
const { createTransport } = require("nodemailer");
const emailTemplate = fs.readFileSync(__dirname + "/emailTemplate.html", "utf-8");
require("dotenv").config();
const { EMAIL_PASSWORD, EMAIL_USER, EMAIL_HOST, EMAIL_PORT } = process.env;

const transporter = createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: { pass: EMAIL_PASSWORD, user: EMAIL_USER }
});

/**
 * envia email cuando el usuario se registra en el sitio web
 * @param {string} toEmail email del usuario a quien se le envia el email
 * @param {string} userName nombre del usuario a quien se le envia email
 */
const registerMembers = async (toEmail, userName) => {
    try {
        let message =
        `<p>We're thrilled to have you as part of DescuentosYa!. You're now officially one of the smart shoppers who unlock fantastic discounts and exclusive deals.</p>
            <p>At DescuentosYa!, we're all about helping you save big while enjoying your shopping sprees. Your membership opens the door to a world of exciting bargains and perks that are waiting just for you.</p>
            <p>If you ever need assistance or have any questions, our super-friendly support team is here to help. Don't hesitate to reach out!</p>
            <p>Thanks for choosing DescuentosYa! as your ultimate shopping sidekick. Get ready for awesome savings and fantastic shopping experiences.</p>
            <p>Cheers,</p>
        <p>DescuentosYa! Team</p>`;
        let webSite = "https://descuentos-ya.vercel.app/";
        let webSiteName = "Descuentos Ya!";
        await sendMail(toEmail, userName, "Welcome to DescuentosYa!", message, webSite, webSiteName);
    } catch (error) {
        console.log(`Error al registrar usuario ${toEmail}:`, error);
    };
};

/**
 * envia email cuando el usuario se registra en el sitio web
 * @param {string} toEmail email del usuario a quien se le envia el email
 * @param {string} companyName nombre del usuario a quien se le envia email
 */
const registerCompanies = async (toEmail, companyName) => {
    try {
        let message =
        `<p>We're excited to welcome your company to DescuentosYa!. You're now part of our network of smart businesses offering fantastic services and products.</p>
        <p>At DescuentosYa!, we're dedicated to helping you showcase your offerings to our community of shoppers. Your membership grants you access to a platform where you can share exciting deals and exclusive offers.</p>
        <p>If you ever need any assistance or have questions about using our platform, our support team is here to assist you. Feel free to reach out anytime!</p>
        <p>Thank you for choosing DescuentosYa! to connect with a wider audience and boost your business. Get ready to provide fantastic experiences to our members.</p>
        <p>Cheers,</p>
        <p>DescuentosYa! Team</p>`;
        let webSite = "https://descuentos-ya.vercel.app/";
        let webSiteName = "Descuentos Ya!";
        await sendMail(toEmail, companyName, "Welcome to DescuentosYa!", message, webSite, webSiteName);
    } catch (error) {
        console.log(`Error al registrar usuario ${toEmail}:`, error);
    };
};

/**
 * al generarse una compra, enviamos los avisos por email 
 * @param {string} toEmail email del usuario miembro o la compania
 * @param {html} htmlContent html generado en el paso anterior a la hora de crear el pdf
 */
const registerShopping = async (toEmail, htmlContent, objectPdf) => {
    await transporter.sendMail({
        from: "DescuentosYa-noreply@descuentosya.com",
        to: `${toEmail}`,
        subject: "DescuentosYa!",
        html: htmlContent,
        attachments: [{ filename: objectPdf.namePdf + ".pdf", content: objectPdf.pdf }]
    });
}


/**
 * @param {string} toEmail 
 * @param {string} title titulo <h1> para el html
 * @param {string} message mensaje para el cuerpo del html
 * @param {string} link url para enviarlo a un lugar del sitio
 * @param {string} linkText texto descriptivo para el link declarado anteriormente
 */
const sendMail = async (toEmail, userName, title, message, link, linkText) => {
    const formattedEmail = emailTemplate
        .replace("${title}", title)
        .replace("${userName}", userName)
        .replace("${message}", message)
        .replace("${link}", link)
        .replace("${linkText}", linkText);
    await transporter.sendMail({
        from: "DescuentosYa-noreply@descuentosya.com",
        to: `${toEmail}`,
        subject: "DescuentosYa!",
        html: formattedEmail
    });
};

module.exports = { registerMembers, registerCompanies, registerShopping };