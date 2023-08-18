const paypal = require('paypal-rest-sdk');

const CLIENT = 'AVFaYz0zmW_ZnNhtGHolBBZxanqlHRE9OdYrT4FbAq5gpo8I85RA_BgWgTvmcyyTbqKC09G7C6GLgG4Z';
const SECRET = 'EPI62lbxtuWZ1hxZzdyEH0rjZCzqVsb5nLVawG41uGZFabwTwlKNVeWgvLQEynao-UyYKY2_4X_oYPD2';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com


paypal.configure({
    mode: 'sandbox', // 'sandbox' para pruebas, 'live' para producción
    client_id: CLIENT,
    client_secret: SECRET
});

// Crear un pago

const createPayment = async (req, res) => {
    try {

        const { products } = req.body;

        // const items = products?.map((item, index) => ({
        //     name:item.title,
        //     price:item.unit_price,
        //     quantity:item.quantity
        // }));

        // console.log(items)

        let total_amount = 0;
        let total_quantity = 0;
        if (products) {
            for (let i = 0; i < products.length; i++) {
                total_amount += (products[i].unit_price * products[i].quantity);
                total_quantity += products[i].quantity
            }
        }

        const orderPayment = {
            intent: 'sale',
            payer: {
                payment_method: 'PayPal'
            },
            redirect_urls: {
                return_url: 'http://localhost:3000',
                cancel_url: 'http://localhost:3000'
            },
            transactions: [{
                item_list: {
                    items: [{
                        name: 'DescuentosYa',
                        price: `${total_amount}`,
                        currency: 'USD',
                        quantity: 1
                    }]
                },
                amount: {
                    total: `${total_amount}`,
                    currency: 'USD'
                },
                description: 'DescuentosYa'
            }]
        };
        console.log('Order', orderPayment.transactions[0].amount)

        paypal.payment.create(orderPayment, function (error, payment) {
            if (error) {
                console.error('1', error);
            } else {
                console.log('Payment', payment);
                // Redirigir al usuario a la URL de aprobación de PayPal
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        const payPalLink = payment.links[i].href;
                        res.status(200).send(payPalLink)
                    }
                }
            }
        });
    } catch (error) {
        console.log(error);
    };
};


const paypalWebhook = async (req, res) => {
    const webhookEvent = req.body;
    console.log('Webhook Event Received:', webhookEvent);

    // Verificar que la notificación sea auténtica (esto es importante por seguridad)
    const headers = req.headers;
    const ipnVerified = paypal.notification.webhookEvent.verify(headers, webhookEvent);
    if (ipnVerified) { // Seguridad: es para que no puedan emitir ordenes simuladas, etc.
        console.log('Webhook Event Verified');

        // Aquí puedes procesar el evento y obtener el estado del pago
        if (webhookEvent.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
            console.log('Pago completado:', webhookEvent.resource.status);

            // Realizar la llamada a la API de captura
            const paymentId = webhookEvent.resource.id;
            const token = req.query.token; // Reemplaza con el token real
            try {
                const captureResponse = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${paymentId}/capture`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Respuesta de Captura:', captureResponse.data);
            } catch (error) {
                console.error('Error al capturar el pago:', error);
            }
        }

        res.sendStatus(200);
    } else {
        console.log('Webhook Event NOT Verified');
        res.sendStatus(400);
    }
};


module.exports = { createPayment, paypalWebhook }