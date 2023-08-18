const mercadopago = require("mercadopago");
const createShoppingController = require("../shoppingControllers/createShoppingController");


mercadopago.configure({
  access_token: "TEST-7292748116471793-081322-314407140c27b18e0f61ceba165994d6-1449420431",
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
      notification_url: `https://4aaa-2803-9800-9847-758a-436-4cd6-1899-d531.ngrok.io/payment/webhook/${user.id}`,
      auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ response });

  } catch (error) {
    console.log(error);
  };
};

// voy a recibir los datos de la transaccion
const receiveWebhook = async (req, res) => {
  const payment = req.query;
  const { id } = req.params;

  try {
    let data;
    if (payment.type === 'payment') {
      data = await mercadopago.payment.findById(payment['data.id']);
      // console.log(payment) // { 'data.id': '1314281800', type: 'payment' } llega el ID del pago y el type.

    const {
      payment_method,
      status,
      transaction_amount,
      additional_info
    } = data.response;
    console.log(data.response)
    let formattedStatus, wayToPay;

    if(status === 'approved') {
      formattedStatus = 'SUCCESS';
    };

    if(payment_method.type === 'account_money') {
      wayToPay = 'CASH';
    };
    
    const formattedObject = {
      userId: id,
      wayToPay,
      state: formattedStatus,
      totalPrice: transaction_amount,
      items: additional_info.items
    };
    createShoppingController(formattedObject)
    return res.redirect(204);
  }
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
