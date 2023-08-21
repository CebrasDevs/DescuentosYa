const cloudinary = require("cloudinary").v2
require("dotenv").config();
const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

module.exports = (contentPdf, namePdf, format) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                format: format,
                public_id: namePdf
            },
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