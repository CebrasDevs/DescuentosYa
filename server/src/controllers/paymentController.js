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
      success: "https://localhost:3000",
      failure: "https://c6dc-2803-9800-9847-758a-7508-30b3-cfb4-f077.ngrok.io/payment/webhook",
      pending: "https://c6dc-2803-9800-9847-758a-7508-30b3-cfb4-f077.ngrok.io/payment/webhook"
    },
    notification_url: "https://6995-2803-9800-9847-758a-b085-f394-f7d-83bc.ngrok.io/payment/webhook",
    auto_return: "approved",
  };
  // console.log('preference', preference)
  const response = await mercadopago.preferences.create(preference);
  console.log('response', response)
  res.status(200).json({response});
  
}catch(error){
      console.log(error);
  };
};

// voy a recibir los datos de la transaccion
const receiveWebhook = async (req, res) => {
  const payment = req.query;
  console.log(payment)
  try {

    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log('receive W', data.response)
      console.log(payment) // { 'data.id': '1314281800', type: 'payment' } llega el ID del pago y el type.
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