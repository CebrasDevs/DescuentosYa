const cloudinary = require("cloudinary").v2
require("dotenv").config();
const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

/**
 * funcion para subir un archivo a cloudinary
 * @param {Object} contentPdf es el CONTENIDO del archivo (no es la ruta)
 * @param {String} namePdf es el nombre del archivo
 * @param {String} format es el formato del archivo a subir
 * @returns 
 */
module.exports = (contentPdf, namePdf, format) => {
    const options = {
        public_id: namePdf
    };

    if (format === 'war') {
        options.resource_type = 'raw';
    } else if (format === 'png') {
        options.format = 'png'; 
    
    }else{
        console.log("Invalid format value (at /utils/coudinaryUtils)");
    }
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            options,
            (error, result) => {
                if (error) {
                    // console.error("Error al subir el PDF:", error);
                    reject(error);
                } else {
                    // console.log("URL pública del PDF:", result.url);
                    resolve(result.url);
                }
            }
        ).end(contentPdf);
    });
}