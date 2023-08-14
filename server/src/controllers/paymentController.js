const mercadopago = require("mercadopago");


mercadopago.configure({
  access_token: "TEST-4063843005379415-080715-6157199ac5560f6f8c251612d3f57169-1443618271",
});


const createOrder = async (req, res) => {
  try {
    const { products, user } = req.body;

    let preference = {
      items: products,
      payer: user,
      //indica hacia donde se retornan las respuestas
      back_urls: {
        success: "http://localhost:3000",
        failure: "http://localhost:3000",
        pending: "http://localhost:3000"
      },
      notification_url: "https://descuentosya.onrender.com/payment/webhook",
      auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference);
    console.log('response preference', response)
    res.status(200).json({ response });

  } catch (error) {
    console.log(error);
  };
};

// voy a recibir los datos de la transaccion
const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    let data;
    if (payment.type === 'payment') {
      data = await mercadopago.payment.findById(payment['data.id']);

      console.log('Toda la info', data.response)
      // console.log('Pago', data.response.status)
      // console.log('Metodo de pago', data.response.payment_method.type)
      // console.log('Items comprados', data.response.additional_info.items)
      // console.log(payment) // { 'data.id': '1314281800', type: 'payment' } llega el ID del pago y el type.
    }
    res.redirect(204); // investigar, redirecciona a un archivo o un URL

  } catch (error) {
    return res.sendStatus(500).json({ error: error.message });
  }
};

const handleSuccess = (req, res) => {
  // Manejar la respuesta exitosa
  res.send('Pago exitoso. Gracias por su compra.');
};

const handleFailure = (req, res) => {
  // Manejar la respuesta de fallo
  res.send('El pago no se completó. Por favor, intente nuevamente.');
};

const handlePending = (req, res) => {
  // Manejar la respuesta pendiente
  res.send('El pago está pendiente de confirmación.');
};

module.exports = { createOrder, handleFailure, handlePending, handleSuccess, receiveWebhook }
